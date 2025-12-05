"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create a Workspace",
    description: "Start a new project for your class (e.g., 'Grade 10 - Unit 4'). All your work stays organized.",
  },
  {
    number: "02",
    title: "Choose a Generator",
    description: "Need a quiz? Vocabulary list? Grammar exercise? Just select a tool from the sidebar.",
  },
  {
    number: "03",
    title: "Export & Print",
    description: "Once you're happy, export to PDF or Word with one click. Ready to hand out to students.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How it works</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Simple, fast, and distraction-free. No complex menus or setup required.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="text-4xl font-bold text-primary/20">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-white/10 rounded-2xl overflow-hidden aspect-video flex items-center justify-center relative shadow-2xl shadow-primary/10"
          >
             <video 
                src="/saber-scribe-fast.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
             />
             {/* Decorative elements */}
             <div className="absolute inset-0 border border-primary/20 rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

