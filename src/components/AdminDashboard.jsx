import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { 
  Video, Check, X, Users, Eye, Award, Flag, AlertTriangle, 
  Clock, TrendingUp, Calendar, Filter, Search, MoreVertical 
} from 'lucide-react';

const AdminDashboard = () => {
  // Active tab state
  const [activeTab, setActiveTab] = useState('analytics');
  
  // Pending videos data
  const [pendingVideos, setPendingVideos] = useState([
    { 
      id: 1, 
      title: 'Introduction to Algebra', 
      subject: 'Mathematics',
      teacher: 'Dr. Emma Johnson',
      duration: '18:45',
      uploadDate: '2025-02-28',
      thumbnailUrl: '/api/placeholder/160/90'
    },
    { 
      id: 2, 
      title: 'Advanced Cell Biology', 
      subject: 'Biology',
      teacher: 'Prof. Michael Chen',
      duration: '24:12',
      uploadDate: '2025-02-28',
      thumbnailUrl: '/api/placeholder/160/90'
    },
    { 
      id: 3, 
      title: 'World War II: Pacific Theater', 
      subject: 'History',
      teacher: 'Sarah Williams',
      duration: '32:05',
      uploadDate: '2025-02-27',
      thumbnailUrl: '/api/placeholder/160/90'
    },
    { 
      id: 4, 
      title: 'Coding with Python: Functions', 
      subject: 'Computer Science',
      teacher: 'James Rodriguez',
      duration: '22:18',
      uploadDate: '2025-02-27',
      thumbnailUrl: '/api/placeholder/160/90'
    }
  ]);
  
  // User reports data
  const [userReports, setUserReports] = useState([
    {
      id: 1,
      reportType: 'Inappropriate Content',
      reportedContent: 'Physics Lesson 4',
      reportedUser: 'TeacherID45',
      reportedBy: 'StudentID128',
      date: '2025-02-28',
      status: 'Pending',
      priority: 'High',
      description: 'There are inappropriate comments at timestamp 14:25 in the video.'
    },
    {
      id: 2,
      reportType: 'Technical Issue',
      reportedContent: 'Quiz Platform',
      reportedUser: null,
      reportedBy: 'TeacherID23',
      date: '2025-02-27',
      status: 'In Progress',
      priority: 'Medium',
      description: 'Students unable to submit multiple-choice answers in the quiz module.'
    },
    {
      id: 3,
      reportType: 'Copyright Violation',
      reportedContent: 'History Module 2',
      reportedUser: 'TeacherID12',
      reportedBy: 'AdminID5',
      date: '2025-02-26',
      status: 'Resolved',
      priority: 'High',
      description: 'Unauthorized use of copyrighted images in lecture slides.'
    },
    {
      id: 4,
      reportType: 'Account Issue',
      reportedContent: null,
      reportedUser: 'StudentID456',
      reportedBy: 'StudentID456',
      date: '2025-02-26',
      status: 'Pending',
      priority: 'Low',
      description: 'Unable to update profile information and contact details.'
    }
  ]);
  
  // Analytics data
  const userActivityData = [
    { name: 'Feb 22', students: 1200, teachers: 85 },
    { name: 'Feb 23', students: 1350, teachers: 90 },
    { name: 'Feb 24', students: 1400, teachers: 92 },
    { name: 'Feb 25', students: 1280, teachers: 88 },
    { name: 'Feb 26', students: 1310, teachers: 95 },
    { name: 'Feb 27', students: 1450, teachers: 100 },
    { name: 'Feb 28', students: 1500, teachers: 105 }
  ];
  
  const contentEngagementData = [
    { name: 'Mathematics', views: 4500, completions: 3200, engagement: 71 },
    { name: 'Science', views: 3800, completions: 2400, engagement: 63 },
    { name: 'History', views: 2900, completions: 1800, engagement: 62 },
    { name: 'English', views: 3200, completions: 2100, engagement: 66 },
    { name: 'Computer Science', views: 4100, completions: 3000, engagement: 73 }
  ];
  
  const reportDistributionData = [
    { name: 'Technical Issues', value: 42 },
    { name: 'Inappropriate Content', value: 28 },
    { name: 'Copyright Violations', value: 15 },
    { name: 'Account Issues', value: 10 },
    { name: 'Other', value: 5 }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  const approveVideo = (id) => {
    setPendingVideos(pendingVideos.filter(video => video.id !== id));
    // In a real app, you would make an API call to approve the video
  };
  
  const rejectVideo = (id) => {
    setPendingVideos(pendingVideos.filter(video => video.id !== id));
    // In a real app, you would make an API call to reject the video
  };
  
  const updateReportStatus = (id, newStatus) => {
    setUserReports(userReports.map(report => 
      report.id === id ? {...report, status: newStatus} : report
    ));
    // In a real app, you would make an API call to update the report status
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Platform Admin Dashboard</h1>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Active Users Today</p>
                <p className="text-2xl font-semibold text-gray-900">1,605</p>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp size={12} className="mr-1" /> +8% from yesterday
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-500 mr-4">
                <Eye size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Content Views</p>
                <p className="text-2xl font-semibold text-gray-900">24,521</p>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp size={12} className="mr-1" /> +12% from last week
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-500 mr-4">
                <Award size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Completion Rate</p>
                <p className="text-2xl font-semibold text-gray-900">68.5%</p>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp size={12} className="mr-1" /> +3.2% from last month
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 text-red-500 mr-4">
                <Flag size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Pending Reports</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
                <p className="text-xs text-red-500 flex items-center mt-1">
                  <AlertTriangle size={12} className="mr-1" /> 5 high priority
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                className={`px-6 py-4 text-sm font-medium ${activeTab === 'analytics' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('analytics')}
              >
                Platform Analytics
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${activeTab === 'content' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('content')}
              >
                Content Approval
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${activeTab === 'reports' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('reports')}
              >
                User Reports
              </button>
            </nav>
          </div>
          
          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* User Activity Chart */}
                <div className="bg-white rounded border p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Daily User Activity</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={userActivityData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="students" stroke="#8884d8" name="Students" />
                        <Line type="monotone" dataKey="teachers" stroke="#82ca9d" name="Teachers" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Content Engagement Chart */}
                <div className="bg-white rounded border p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Content Engagement by Subject</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={contentEngagementData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="views" fill="#8884d8" name="Total Views" />
                        <Bar dataKey="completions" fill="#82ca9d" name="Completions" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Report Distribution Chart */}
                <div className="bg-white rounded border p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Report Distribution</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={reportDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {reportDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* User Engagement Metrics */}
                <div className="bg-white rounded border p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Key Performance Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Daily Active Users</span>
                        <span>1,605 / 3,200 (50.2%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50.2%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Average Session Duration</span>
                        <span>24 minutes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Content Completion Rate</span>
                        <span>68.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '68.5%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Teacher Upload Approval Rate</span>
                        <span>92.7%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '92.7%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Content Approval Tab */}
          {activeTab === 'content' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">Pending Video Approvals</h3>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search videos"
                      className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                  <button className="flex items-center text-sm text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                    <Filter size={16} className="mr-2" />
                    Filter
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Video</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pendingVideos.map((video) => (
                      <tr key={video.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-16 mr-4">
                              <img src={video.thumbnailUrl} alt={video.title} className="h-10 w-16 object-cover rounded" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{video.title}</div>
                              <div className="flex items-center text-xs text-gray-500">
                                <Video size={12} className="mr-1" />
                                ID: VID-{video.id.toString().padStart(4, '0')}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                            {video.subject}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {video.teacher}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1 text-gray-400" />
                            {video.duration}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1 text-gray-400" />
                            {video.uploadDate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => approveVideo(video.id)}
                              className="bg-green-100 text-green-800 px-3 py-1 rounded-md flex items-center"
                            >
                              <Check size={14} className="mr-1" />
                              Approve
                            </button>
                            <button 
                              onClick={() => rejectVideo(video.id)}
                              className="bg-red-100 text-red-800 px-3 py-1 rounded-md flex items-center"
                            >
                              <X size={14} className="mr-1" />
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {pendingVideos.length === 0 && (
                  <div className="text-center py-12">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No pending videos</h3>
                    <p className="mt-1 text-sm text-gray-500">All videos have been reviewed.</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">User Reports & Issues</h3>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search reports"
                      className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                  <button className="flex items-center text-sm text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                    <Filter size={16} className="mr-2" />
                    Filter
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {userReports.map((report) => (
                      <tr key={report.id}>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {report.reportedContent || `Report against ${report.reportedUser}`}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Reported by: {report.reportedBy}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 line-clamp-1">
                            {report.description}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            report.reportType === 'Inappropriate Content' ? 'bg-red-100 text-red-800' :
                            report.reportType === 'Technical Issue' ? 'bg-blue-100 text-blue-800' :
                            report.reportType === 'Copyright Violation' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {report.reportType}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {report.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            report.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            report.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {report.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            report.priority === 'High' ? 'bg-red-100 text-red-800' :
                            report.priority === 'Medium' ? 'bg-orange-100 text-orange-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {report.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center">
                            {report.status !== 'Resolved' ? (
                              <div className="flex space-x-2">
                                {report.status === 'Pending' && (
                                  <button 
                                    onClick={() => updateReportStatus(report.id, 'In Progress')}
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md flex items-center"
                                  >
                                    Process
                                  </button>
                                )}
                                <button 
                                  onClick={() => updateReportStatus(report.id, 'Resolved')}
                                  className="bg-green-100 text-green-800 px-3 py-1 rounded-md flex items-center"
                                >
                                  Resolve
                                </button>
                              </div>
                            ) : (
                              <span className="text-gray-500">Closed</span>
                            )}
                            <button className="ml-2 text-gray-400 hover:text-gray-500">
                              <MoreVertical size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
