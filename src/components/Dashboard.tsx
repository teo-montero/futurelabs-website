import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Users, 
  Calendar,
  FileText,
  Download,
  MessageSquare
} from "lucide-react";

export function Dashboard() {
  // Mock data for demonstration
  const applications = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      client: "Local Retail Store",
      type: "Web Development",
      status: "in-progress",
      progress: 65,
      team: ["Alice Chen", "Bob Smith", "Carol Lee"],
      deadline: "2025-02-15",
      description: "Complete redesign of online store with modern UI/UX"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      client: "Community Credit Union",
      type: "Mobile App",
      status: "completed",
      progress: 100,
      team: ["David Kim", "Emma Wilson"],
      deadline: "2025-01-20",
      description: "Secure mobile banking application for iOS and Android"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      client: "Healthcare Nonprofit",
      type: "Data Analytics",
      status: "pending",
      progress: 0,
      team: ["Frank Zhang", "Grace Patel", "Henry Johnson"],
      deadline: "2025-03-01",
      description: "Patient data visualization and reporting system"
    },
    {
      id: 4,
      title: "Security Audit",
      client: "Tech Startup",
      type: "Cybersecurity",
      status: "in-progress",
      progress: 30,
      team: ["Ivy Martinez", "Jack Brown"],
      deadline: "2025-02-28",
      description: "Comprehensive security assessment and recommendations"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'in-progress': return <Clock className="h-4 w-4" />;
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const stats = {
    total: applications.length,
    completed: applications.filter(app => app.status === 'completed').length,
    inProgress: applications.filter(app => app.status === 'in-progress').length,
    pending: applications.filter(app => app.status === 'pending').length
  };

  return (
    <section id="applications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Applications Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track project applications, monitor progress, and manage your digital transformation journey.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Projects</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">In Progress</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
                </div>
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects List */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Current Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6 mt-6">
                {applications.map((app) => (
                  <ProjectCard key={app.id} application={app} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
                ))}
              </TabsContent>
              
              <TabsContent value="in-progress" className="space-y-6 mt-6">
                {applications.filter(app => app.status === 'in-progress').map((app) => (
                  <ProjectCard key={app.id} application={app} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
                ))}
              </TabsContent>
              
              <TabsContent value="completed" className="space-y-6 mt-6">
                {applications.filter(app => app.status === 'completed').map((app) => (
                  <ProjectCard key={app.id} application={app} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
                ))}
              </TabsContent>
              
              <TabsContent value="pending" className="space-y-6 mt-6">
                {applications.filter(app => app.status === 'pending').map((app) => (
                  <ProjectCard key={app.id} application={app} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ProjectCard({ application, getStatusColor, getStatusIcon }: {
  application: any;
  getStatusColor: (status: string) => string;
  getStatusIcon: (status: string) => JSX.Element;
}) {
  return (
    <Card className="border border-gray-200">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-gray-900">{application.title}</h3>
              <Badge className={`${getStatusColor(application.status)} flex items-center gap-1`}>
                {getStatusIcon(application.status)}
                {application.status.replace('-', ' ')}
              </Badge>
            </div>
            <p className="text-gray-600 mb-2">{application.client} • {application.type}</p>
            <p className="text-gray-700">{application.description}</p>
          </div>
          
          <div className="flex flex-col lg:items-end gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              Due: {new Date(application.deadline).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              {application.team.length} team members
            </div>
          </div>
        </div>

        {application.status !== 'pending' && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-gray-900">{application.progress}%</span>
            </div>
            <Progress value={application.progress} className="h-2" />
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {application.team.map((member: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                {member}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              Message
            </Button>
            {application.status === 'completed' && (
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Download
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}