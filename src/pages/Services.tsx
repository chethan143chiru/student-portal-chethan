import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, FileCheck, AlertTriangle, BookOpen, Bus, Laptop } from "lucide-react";

const services = [
  { icon: CreditCard, title: "ID Card Request", description: "Apply for a new student ID card or request a replacement for a lost/damaged card.", category: "Documentation" },
  { icon: FileCheck, title: "Bonafide Certificate", description: "Request an official bonafide certificate for bank accounts, scholarships, or travel.", category: "Documentation" },
  { icon: AlertTriangle, title: "Complaint Submission", description: "File complaints regarding campus facilities, academics, or administrative issues.", category: "Support" },
  { icon: BookOpen, title: "Library Access", description: "Request extended library access, inter-library loans, or digital resource access.", category: "Academic" },
  { icon: Bus, title: "Transport Pass", description: "Apply for campus transport passes or request route changes for shuttle services.", category: "Campus Life" },
  { icon: Laptop, title: "IT Support", description: "Get help with student email, LMS access, Wi-Fi connectivity, and lab equipment.", category: "Support" },
];

const Services = () => (
  <div className="container py-12">
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Student Services</h1>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Browse our available services and submit a request in just a few clicks.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {services.map((s) => (
        <Card key={s.title} className="shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
          <CardHeader>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">{s.category}</span>
            <div className="flex items-center gap-3 mt-1">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <CardTitle className="text-base">{s.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{s.description}</p>
            <Button asChild size="sm" className="w-full">
              <Link to={`/request?service=${encodeURIComponent(s.title)}`}>Request Now</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Services;
