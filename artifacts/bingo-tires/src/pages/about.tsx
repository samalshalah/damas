import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">About Bingo Tire & Auto Service</h1>
          <p className="text-xl text-muted-foreground">Serving the Northern Virginia community with honesty and expertise since 2004.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold font-display">Our History</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 2004, Bingo Tire & Auto Service has grown to become one of the most trusted neighborhood repair shops in NOVA. We started with a simple mission: to provide high-quality automotive care without the high pressure sales tactics of big chain stores.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the last two decades, we've built a reputation for solid, professional, and reliable service. We know our customers by name, and we treat their vehicles as if they were our own.
            </p>
            <div className="pt-4 border-t">
              <p className="font-semibold text-xl text-primary font-display">"Since 2004, we've offered a full range of Tire and Auto Repair services for car owners in NOVA. New and used tires, brake, steering, suspension, and more."</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
          >
            <img src="/images/img_630x421_carwork.jpg" alt="Garage interior" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Comprehensive Garage Services",
                desc: "We offer a full range of garage services to vehicle owners in Northern Virginia. Our professionals know how to handle a wide range of car services."
              },
              {
                title: "All Vehicles Welcome",
                desc: "Whether you drive a passenger car, medium sized truck, or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our shop."
              },
              {
                title: "Neighborhood Feel",
                desc: "A well-established, trustworthy neighborhood shop. Solid, professional, reliable — not a big chain. Customers know the owner by name."
              },
              {
                title: "Experience You Can Trust",
                desc: "With over 20 years in business, we've seen it all and fixed it all. Our mechanics are continuously trained on the latest automotive technologies."
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Experienced, certified technicians who take pride in every vehicle that comes through our doors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (n - 1) * 0.08 }}
                className="text-center"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-3 bg-zinc-100">
                  <img
                    src={`/images/team_0${n}.png`}
                    alt={`Team member ${n}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
