
import React, { useState, useEffect } from 'react';
import { Users, Mail, Calendar, Eye, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Member {
  id: string;
  full_name: string;
  registration_number: string;
  course: string;
  year: string;
  phone: string;
  email: string;
  reason: string;
  created_at: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

const Admin = () => {
  const { toast } = useToast();
  const [members, setMembers] = useState<Member[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [membersResponse, messagesResponse] = await Promise.all([
        supabase.from('dekumsa_members').select('*').order('created_at', { ascending: false }),
        supabase.from('contact_messages').select('*').order('created_at', { ascending: false })
      ]);

      if (membersResponse.data) setMembers(membersResponse.data);
      if (messagesResponse.data) setMessages(messagesResponse.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      await supabase
        .from('contact_messages')
        .update({ is_read: true })
        .eq('id', messageId);
      
      setMessages(prev => 
        prev.map(msg => msg.id === messageId ? { ...msg, is_read: true } : msg)
      );
      
      toast({
        title: "Success",
        description: "Message marked as read"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update message",
        variant: "destructive"
      });
    }
  };

  const downloadCSV = (data: any[], filename: string) => {
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => `"${row[header]}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">DeKUMSA Admin Dashboard</h1>
              <p className="text-gray-600">Manage members and messages</p>
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={() => setActiveTab('overview')}
                variant={activeTab === 'overview' ? 'default' : 'outline'}
              >
                Overview
              </Button>
              <Button
                onClick={() => setActiveTab('members')}
                variant={activeTab === 'members' ? 'default' : 'outline'}
              >
                Members
              </Button>
              <Button
                onClick={() => setActiveTab('messages')}
                variant={activeTab === 'messages' ? 'default' : 'outline'}
              >
                Messages
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{members.length}</div>
                <p className="text-xs text-muted-foreground">Registered students</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{messages.length}</div>
                <p className="text-xs text-muted-foreground">
                  {messages.filter(m => !m.is_read).length} unread
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Week</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {members.filter(m => 
                    new Date(m.created_at).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
                  ).length}
                </div>
                <p className="text-xs text-muted-foreground">New registrations</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'members' && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>DeKUMSA Members</CardTitle>
                  <CardDescription>All registered members</CardDescription>
                </div>
                <Button
                  onClick={() => downloadCSV(members, 'dekumsa-members.csv')}
                  className="flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Export CSV</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Reg Number</th>
                      <th className="text-left p-2">Course</th>
                      <th className="text-left p-2">Year</th>
                      <th className="text-left p-2">Contact</th>
                      <th className="text-left p-2">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member) => (
                      <tr key={member.id} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{member.full_name}</td>
                        <td className="p-2">{member.registration_number}</td>
                        <td className="p-2">{member.course}</td>
                        <td className="p-2">{member.year}</td>
                        <td className="p-2">
                          <div className="text-sm">
                            <p>{member.phone}</p>
                            <p className="text-gray-600">{member.email}</p>
                          </div>
                        </td>
                        <td className="p-2 text-sm text-gray-600">
                          {new Date(member.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'messages' && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Contact Messages</CardTitle>
                  <CardDescription>Messages from the contact form</CardDescription>
                </div>
                <Button
                  onClick={() => downloadCSV(messages, 'contact-messages.csv')}
                  className="flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Export CSV</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-4 rounded-lg border ${
                      message.is_read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{message.name}</h4>
                        <p className="text-sm text-gray-600">{message.email}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {!message.is_read && (
                          <Badge variant="secondary">Unread</Badge>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => markAsRead(message.id)}
                          disabled={message.is_read}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <h5 className="font-medium mb-1">{message.subject}</h5>
                    <p className="text-gray-700 text-sm mb-2">{message.message}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(message.created_at).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Admin;
