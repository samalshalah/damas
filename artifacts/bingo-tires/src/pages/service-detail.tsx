import { useRoute, Link } from "wouter";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug;
  
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all services
        </Link>
        
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <service.icon className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-6 flex-1">
              <div>
                <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">{service.category}</div>
                <h1 className="text-3xl md:text-4xl font-bold font-display">{service.name}</h1>
              </div>
              
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">{service.fullDescription}</p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Whether you drive a passenger car, medium sized truck, or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our shop.
                </p>
              </div>
              
              <div className="pt-8 border-t mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base shadow-md" data-testid="button-book-service">
                  <Link href={`/contact?service=${service.slug}`}>
                    <Calendar className="w-5 h-5 mr-2" />
                    Book This Service
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
