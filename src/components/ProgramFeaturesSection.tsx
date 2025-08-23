"use client"

import { BookOpen, Briefcase, Wrench, Users, Sparkles } from "lucide-react";

const features = [
  {
    title: "Learn Proven GTM Strategies",
    description: "Understand the frameworks and methodologies behind successful go‑to‑market execution.",
    colorKey: "indigo",
    iconName: "BookOpen"
  },
  {
    title: "Apply in Real‑World Scenarios", 
    description: "Put learning into action through hands‑on sessions and real startup use cases.",
    colorKey: "pink",
    iconName: "Briefcase"
  },
  {
    title: "Use Ready‑to‑Go Templates",
    description: "Access plug‑and‑play tools customized to accelerate your GTM growth.",
    colorKey: "emerald",
    iconName: "Wrench"
  },
  {
    title: "1:1 Mentoring with Experts",
    description: "Get personalized guidance from seasoned GTM professionals who understand your challenges.",
    colorKey: "amber",
    iconName: "Users"
  },
  {
    title: "AI‑Powered Practice",
    description: "Reinforce learning with tailored, AI‑driven practice sessions built for your sales scenarios.",
    colorKey: "violet",
    iconName: "Sparkles"
  }
];

const iconComponents = {
  BookOpen,
  Briefcase,
  Wrench,
  Users,
  Sparkles
};

const colorStyles = {
  indigo: {
    border: "border-indigo-500",
    icon: "text-indigo-500",
    focus: "focus-visible:outline-indigo-500"
  },
  pink: {
    border: "border-pink-500",
    icon: "text-pink-500", 
    focus: "focus-visible:outline-pink-500"
  },
  emerald: {
    border: "border-emerald-500",
    icon: "text-emerald-500",
    focus: "focus-visible:outline-emerald-500"
  },
  amber: {
    border: "border-amber-500",
    icon: "text-amber-500",
    focus: "focus-visible:outline-amber-500"
  },
  violet: {
    border: "border-violet-500",
    icon: "text-violet-500",
    focus: "focus-visible:outline-violet-500"
  }
};

export default function ProgramFeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1F1B3A' }}>
            One GTM Program — Tailored to Your Startup Stage
          </h2>
          <p className="text-gray-600 max-w-[850px] mx-auto text-lg">
            Select the program that matches where you are today, and equip your team with the skills, processes, and resources to scale faster.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mb-8">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {features.slice(0, 3).map((feature) => {
              const IconComponent = iconComponents[feature.iconName as keyof typeof iconComponents];
              const colors = colorStyles[feature.colorKey as keyof typeof colorStyles];

              return (
                <div
                  key={feature.title}
                  className={`
                    bg-white rounded-2xl p-6 md:p-8 text-center
                    border-2 ${colors.border}
                    shadow-sm
                    ${colors.focus} focus-visible:outline-offset-2
                  `}
                  tabIndex={0}
                >
                  {/* Icon */}
                  <div className="mb-3 md:mb-4">
                    <IconComponent 
                      className={`w-6 h-6 md:w-7 md:h-7 mx-auto ${colors.icon}`}
                      aria-label={`Icon representing ${feature.title}`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Second Row - 2 cards filling full width */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {features.slice(3, 5).map((feature) => {
              const IconComponent = iconComponents[feature.iconName as keyof typeof iconComponents];
              const colors = colorStyles[feature.colorKey as keyof typeof colorStyles];

              return (
                <div
                  key={feature.title}
                  className={`
                    bg-white rounded-2xl p-6 md:p-8 text-center
                    border-2 ${colors.border}
                    shadow-sm
                    ${colors.focus} focus-visible:outline-offset-2
                  `}
                  tabIndex={0}
                >
                  {/* Icon */}
                  <div className="mb-3 md:mb-4">
                    <IconComponent 
                      className={`w-6 h-6 md:w-7 md:h-7 mx-auto ${colors.icon}`}
                      aria-label={`Icon representing ${feature.title}`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Line */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Trusted by startups scaling from early stage to growth.
          </p>
        </div>
      </div>
    </section>
  );
}
