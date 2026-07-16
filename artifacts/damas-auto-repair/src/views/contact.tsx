"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { business, services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Clock, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  date: z.string().min(1, { message: "Please select a preferred date." }),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: prefilledService,
      date: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Service Request Received",
      description: "Your request is ready to send to Damas Auto Repair. Please contact the shop to confirm availability.",
    });
    form.reset();
  }

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <PageHero
        category="Contact"
        title="Contact Damas Auto Repair"
        description="Request service, ask about availability, or get directions to our Chantilly auto repair shop."
        image="/images/damas/contact-hero.webp"
        imageAlt="Mechanic working in an engine bay"
        stats={[
          { val: "Chantilly", label: "VA" },
          { val: "Request", label: "Service" },
          { val: "Local", label: "Auto Repair" },
        ]}
        primaryCta={{ label: "Start Request", href: "#service-request" }}
        secondaryCta={{ label: "Get Directions", href: business.mapUrl }}
      />
      <div id="service-request" className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold font-display mb-6 text-primary">{business.name}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{business.address}</p>
                    <p className="text-muted-foreground">{business.city}, {business.state} {business.zip}</p>
                    <a href={business.mapUrl} target="_blank" rel="noreferrer" className="inline-block text-primary font-medium text-sm mt-2">
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Hours</p>
                    <p className="text-muted-foreground">Please contact the shop for current hours and appointment availability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-10 shadow-sm border">
            <h2 className="text-2xl font-bold font-display mb-8">Request Service</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(703) 555-0123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.slug} value={service.slug}>{service.name}</SelectItem>
                            ))}
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details / Vehicle Info</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Year, make, model, mileage, and the issue you are having..."
                          className="resize-none h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full rounded-full h-14 text-base font-bold shadow-md" data-testid="button-submit-appointment">
                  Submit Request
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  This form records a request only. Contact the shop directly to confirm appointment availability.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
