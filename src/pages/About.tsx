import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Heart, Globe } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast Processing", description: "Service requests are processed within hours, not days." },
  { icon: Shield, title: "Secure & Reliable", description: "Your data is encrypted and stored securely with modern practices." },
  { icon: Heart, title: "Student-First", description: "Designed with students in mind — simple, intuitive, and accessible." },
  { icon: Globe, title: "AI-Ready", description: "Built to integrate with AI services for smarter automation." },
];

const About = () => (
  <div className="container py-12">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About StudentHub</h1>
      <p className="text-lg text-muted-foreground">
        Smart Student Service Hub is an AI-ready portal designed to streamline student services at educational institutions.
        From requesting ID cards to filing complaints, everything is just a click away.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
      {features.map((f) => (
        <Card key={f.title} className="shadow-card">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
              <f.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <CardTitle className="text-base">{f.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{f.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card className="max-w-3xl mx-auto shadow-card">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-foreground mb-3">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          We aim to digitize and simplify the student services experience. By leveraging modern web technologies
          and AI-ready architecture, we provide a scalable platform that institutions can adopt to serve their students
          efficiently and transparently.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default About;
