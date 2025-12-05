"use client";

import { motion } from "framer-motion";
import { Sparkles, Mic, MessageSquare, Zap, Brain, FileText } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Agentic Workflow",
    description: "Not just a chatbot. The AI understands your current editor context and suggests content relevant to what you're working on.",
  },
  {
    icon: Mic,
    title: "Listening Script Gen",
    description: "Generate dialogues and monologues instantly, then export them as professional teaching scripts.",
  },
  {
    icon: FileText,
    title: "Quiz Generation",
    description: "Create multiple-choice quizzes with answer keys in seconds. Perfect for quick assessments.",
  },
  {
    icon: MessageSquare,
    title: "Context Aware",
    description: "It reads your documents. Upload a PDF or Word doc, and generate questions based on the actual text.",
  },
  {
    icon: Zap,
    title: "Refinement Tools",
    description: "Simplify hard texts, correct grammar, or expand short paragraphs with a single click.",
  },
  {
    icon: Sparkles,
    title: "Local-First",
    description: "Your workspaces are saved locally. No cloud lock-in. You own your data.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Superpowers for Teachers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Designed to handle the boring parts of lesson planning so you can focus on teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

