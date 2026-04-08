import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const serviceTypes = [
  "ID Card Request",
  "Bonafide Certificate",
  "Complaint Submission",
  "Library Access",
  "Transport Pass",
  "IT Support",
];

const ServiceRequest = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: searchParams.get("service") || "",
    message: "",
  });

  useEffect(() => {
    const svc = searchParams.get("service");
    if (svc) setForm((f) => ({ ...f, service: svc }));
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) {
      toast({ title: "Error", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    setLoading(true);

    // Store in localStorage as JSON "database"
    try {
      const existing = JSON.parse(localStorage.getItem("service_requests") || "[]");
      const newRequest = {
        id: Date.now().toString(),
        ...form,
        status: "Pending",
        createdAt: new Date().toISOString(),
      };
      existing.push(newRequest);
      localStorage.setItem("service_requests", JSON.stringify(existing));

      toast({ title: "Success!", description: "Your service request has been submitted." });
      setForm({ name: "", email: "", service: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Failed to submit request.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-12 max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Submit a Request</h1>
        <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5 text-primary" /> Service Request Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@university.edu"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Service Type</Label>
              <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message / Details</Label>
              <Textarea
                id="message"
                placeholder="Describe your request..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceRequest;
