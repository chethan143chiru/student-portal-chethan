import { Link } from "react-router-dom";
import { FileText, Send, Phone, BarChart3, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, label: "Active Students", value: "2,450", color: "text-primary" },
  { icon: FileText, label: "Requests Processed", value: "1,280", color: "text-accent" },
  { icon: Clock, label: "Avg. Response Time", value: "2.4h", color: "text-warning" },
  { icon: BarChart3, label: "Satisfaction Rate", value: "96%", color: "text-success" },
];

const quickLinks = [
  {
    icon: FileText,
    title: "Services",
    description: "Browse available student services including ID cards, certificates, and more.",
    href: "/services",
    color: "gradient-primary",
  },
  {
    icon: Send,
    title: "Submit Request",
    description: "File a new service request and track its progress in real-time.",
    href: "/request",
    color: "gradient-accent",
  },
  {
    icon: Phone,
    title: "Contact Support",
    description: "Get help from our support team for any queries or issues.",
    href: "/about",
    color: "gradient-primary",
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24 px-4">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Smart Student Service Hub
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Your AI-ready portal for seamless student services. Request, track, and manage everything in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/request">Submit a Request</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-card hover:shadow-card-hover transition-shadow">
              <CardContent className="p-4 text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="container pb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Quick Access</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <Link key={link.title} to={link.href}>
              <Card className="h-full shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${link.color} flex items-center justify-center mb-2`}>
                    <link.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
