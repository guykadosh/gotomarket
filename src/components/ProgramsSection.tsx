"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, TrendingUp, Stars, Check, ChevronDown } from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";
import { useContactModal } from '@/components/ContactModalContext';

// ---------------------------------------------
// Adapted layout with GTM purple theme colors
// ---------------------------------------------

type ProgramCardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  audience: string;
  hours: string; // e.g., "8 live sessions"
  mentoring: string; // e.g., "1"
  startDate: string; // e.g., "Nov 20, 2025"
  accent?: "primary" | "secondary" | "accent" | (string & {});
  syllabus?: string[];
  deliverables?: string[];
  description?: string[]; // optional legacy
  cardId: string;
  expandedSyllabus: boolean;
  expandedDeliverables: boolean;
  onToggleSyllabus: (cardId: string) => void;
  onToggleDeliverables: (cardId: string) => void;
  onOpenModal: () => void;
};

function ProgramCard({
  icon: Icon,
  title,
  audience,
  hours,
  mentoring,
  startDate,
  accent = "primary",
  syllabus = [],
  deliverables = [],
  description = [],
  cardId,
  expandedSyllabus,
  expandedDeliverables,
  onToggleSyllabus,
  onToggleDeliverables,
  onOpenModal,
}: ProgramCardProps) {
  // GTM Theme color palette for different programs
  const colorPalette: Record<string, { gradient: string; iconBg: string; iconColor: string }> = {
    primary: {
      gradient: 'linear-gradient(135deg, #6C63FF 0%, #5A4FCF 100%)',
      iconBg: 'bg-white',
      iconColor: 'text-purple-600'
    },
    secondary: {
      gradient: 'linear-gradient(135deg, #4C6FFF 0%, #3B5BDB 100%)',
      iconBg: 'bg-white',
      iconColor: 'text-blue-600'
    },
    accent: {
      gradient: 'linear-gradient(135deg, #8A7FFF 0%, #7C6DFF 100%)',
      iconBg: 'bg-white',
      iconColor: 'text-indigo-600'
    }
  };

  const cardColors = colorPalette[accent] || colorPalette.primary;
  const buttonClass = "hover:bg-opacity-90";

  return (
    <Card data-testid="program-card" className="rounded-2xl shadow-lg font-poppins text-white border border-purple-300" style={{ background: cardColors.gradient }}>
      <CardHeader className="pb-0 text-center">
        <div className={`mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center ${cardColors.iconBg} border border-purple-200`}>
          <Icon className={`w-8 h-8 ${cardColors.iconColor}`} />
        </div>
        <CardTitle className="text-2xl font-bold leading-tight text-white">{title}</CardTitle>
        <hr className="mt-3 border-white border-opacity-30" />
      </CardHeader>

      <CardContent className="mt-4 space-y-3 text-lg leading-relaxed">
        {/* Optional legacy description */}
        {description && description.length > 0 ? (
          <ul className="space-y-2" data-testid="program-description">
            {description.map((line, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5 text-green-400" />
                <span className="text-white">{line}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {/* Who is it for */}
        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 mt-1 text-green-400" />
          <div>
            <div className="uppercase text-sm font-semibold text-purple-200">Who Is It For</div>
            <div className="text-white" data-testid="program-audience">{audience}</div>
          </div>
        </div>

        {/* Live sessions */}
        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 mt-1 text-green-400" />
          <div>
            <div className="font-semibold text-white" data-testid="program-hours">{hours}</div>
            <div className="text-sm text-purple-200">(2 hours each session)</div>
          </div>
        </div>

        {/* Mentoring */}
        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 mt-1 text-green-400" />
          <div className="font-semibold text-white" data-testid="program-mentoring">{mentoring} 1:1 mentoring sessions</div>
        </div>

        {/* Program Syllabus */}
        {syllabus.length > 0 ? (
          <div className="w-full" data-testid="program-syllabus">
            <div 
              className="text-base font-semibold text-white cursor-pointer flex items-center justify-between py-2"
              onClick={() => onToggleSyllabus(cardId)}
            >
              <span>Program Syllabus</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedSyllabus ? 'rotate-180' : ''}`} />
            </div>
            <div 
              className={`transition-all duration-300 ease-out ${
                expandedSyllabus ? 'max-h-none opacity-100 overflow-visible' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="pt-2">
                <ol className="list-decimal pl-6 space-y-2 leading-relaxed text-purple-100">
                  {syllabus.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ) : null}

        {/* Deliverables */}
        {deliverables.length > 0 ? (
          <div className="w-full" data-testid="program-deliverables">
            <div 
              className="text-base font-semibold text-white cursor-pointer flex items-center justify-between py-2"
              onClick={() => onToggleDeliverables(cardId)}
            >
              <span>View Deliverables & Practical Resources</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedDeliverables ? 'rotate-180' : ''}`} />
            </div>
            <div 
              className={`transition-all duration-300 ease-out ${
                expandedDeliverables ? 'max-h-none opacity-100 overflow-visible' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="pt-2">
                <ul className="list-disc pl-6 space-y-2 leading-relaxed text-purple-100">
                  {deliverables.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-sm p-3 bg-white bg-opacity-10 rounded-lg border-l-4 border-purple-200 text-purple-100" data-testid="program-no-deliverables">
            Deliverables will be tailored to your needs.
          </div>
        )}

        {/* Next start */}
        <div className="flex items-center justify-between border-t pt-4 mt-4 border-white border-opacity-30">
          <span className="font-semibold text-sm text-purple-200">Next Start</span>
          <span className="font-semibold text-white" data-testid="program-start">{startDate}</span>
        </div>

        <Button 
          className={`w-full text-purple-600 bg-white rounded-full py-3 text-lg mt-4 font-semibold ${buttonClass}`}
          onClick={onOpenModal}
        >
          Let&apos;s Talk
        </Button>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------
// Main Section with lighter GTM purple theme
// ---------------------------------------------
export default function ProgramsSection() {
  const { openModal } = useContactModal();
  const [expandedAccordion, setExpandedAccordion] = useState<{
    cardId: string;
    type: 'syllabus' | 'deliverables';
  } | null>(null);

  const handleToggleSyllabus = (cardId: string) => {
    if (expandedAccordion?.cardId === cardId && expandedAccordion?.type === 'syllabus') {
      setExpandedAccordion(null);
    } else {
      setExpandedAccordion({ cardId, type: 'syllabus' });
    }
  };

  const handleToggleDeliverables = (cardId: string) => {
    if (expandedAccordion?.cardId === cardId && expandedAccordion?.type === 'deliverables') {
      setExpandedAccordion(null);
    } else {
      setExpandedAccordion({ cardId, type: 'deliverables' });
    }
  };

  return (
    <section id="programs" className="py-12 font-poppins" style={{ backgroundColor: '#F3F4FA' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4" style={{ color: '#1F1B3A' }}>
            Three Courses, One GTM System
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-4 md:mb-6 px-4" style={{ color: '#5A4FCF' }}>
            Select the course that matches where you are today, and equip your team with the skills, processes, and resources to scale faster.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 items-start">
          {/* Program 1: Sales Foundation */}
          <ProgramCard
            icon={Handshake}
            title="Sales Foundation"
            audience="Early-stage founders leading sales themselves"
            hours="8 live sessions"
            mentoring="1"
            startDate="Nov 20, 2025"
            accent="primary"
            cardId="sales-foundation"
            expandedSyllabus={expandedAccordion?.cardId === 'sales-foundation' && expandedAccordion?.type === 'syllabus'}
            expandedDeliverables={expandedAccordion?.cardId === 'sales-foundation' && expandedAccordion?.type === 'deliverables'}
            onToggleSyllabus={handleToggleSyllabus}
            onToggleDeliverables={handleToggleDeliverables}
            onOpenModal={openModal}
            syllabus={[
              "Define Your ICP, UVP & Value Story",
              "Mastering Discovery Calls",
              "High-Impact Product Demos",
              "Handling Objections with Confidence",
              "Closing & Negotiating Deals",
              "Sales Process & Meeting Mastery + 2x Practice Labs",
            ]}
            deliverables={[
              "ICP + UVP template",
              "Value messaging framework",
              "Discovery call script",
              "Demo flow structure",
              "Objection handling playbook",
            ]}
          />

          {/* Program 2: Pipeline & Growth Execution */}
          <ProgramCard
            icon={TrendingUp}
            title="Pipeline & Growth Execution"
            audience="Founders with a small GTM or sales team beginning to scale"
            hours="16 live sessions"
            mentoring="3"
            startDate="Nov 20, 2025"
            accent="secondary"
            cardId="pipeline-growth"
            expandedSyllabus={expandedAccordion?.cardId === 'pipeline-growth' && expandedAccordion?.type === 'syllabus'}
            expandedDeliverables={expandedAccordion?.cardId === 'pipeline-growth' && expandedAccordion?.type === 'deliverables'}
            onToggleSyllabus={handleToggleSyllabus}
            onToggleDeliverables={handleToggleDeliverables}
            onOpenModal={openModal}
            syllabus={[
              "Define Your ICP, UVP & Value Story",
              "Mastering Discovery Calls",
              "High-Impact Product Demos",
              "Handling Objections with Confidence",
              "Closing & Negotiating Deals",
              "Sales Process & Meeting Mastery + 2x Practice Labs",
              "AI-Powered Prospecting Playbook",
              "Building an Outbound Machine",
              "Hiring Salespeople & SDRs",
              "Marketing Strategy & Execution",
              "Full Funnel Practice Simulation + 2x Practice Labs",
            ]}
            deliverables={[
              "ICP + UVP template",
              "Value messaging framework",
              "Discovery call script",
              "Demo flow structure",
              "Objection handling playbook",
              "AI prospecting workflow",
              "Outbound cadence templates",
              "Hiring playbook & SDR toolkit",
              "Execution tracker",
            ]}
          />

          {/* Program 3: End‑to‑End GTM Scaling */}
          <ProgramCard
            icon={Stars}
            title="End‑to‑End GTM Scaling"
            audience="Growth‑stage startups with dedicated GTM teams"
            hours="18 live sessions"
            mentoring="10"
            startDate="Nov 20, 2025"
            accent="accent"
            cardId="end-to-end-gtm"
            expandedSyllabus={expandedAccordion?.cardId === 'end-to-end-gtm' && expandedAccordion?.type === 'syllabus'}
            expandedDeliverables={expandedAccordion?.cardId === 'end-to-end-gtm' && expandedAccordion?.type === 'deliverables'}
            onToggleSyllabus={handleToggleSyllabus}
            onToggleDeliverables={handleToggleDeliverables}
            onOpenModal={openModal}
            syllabus={[
              "Define Your ICP, UVP & Value Story",
              "Mastering Discovery Calls",
              "High-Impact Product Demos",
              "Handling Objections with Confidence",
              "Closing & Negotiating Deals",
              "Sales Process & Meeting Mastery + 2x Practice Labs",
              "AI-Powered Prospecting Playbook",
              "Building an Outbound Machine",
              "Hiring Salespeople & SDRs",
              "Marketing Strategy & Execution",
              "Full Funnel Practice Simulation + 2x Practice Labs",
              "Strategic GTM Planning + Inbound Motion",
              "Team Management & Forecasting",
              "Onboarding & Enablement Systems",
              "RevOps & AI GTM Stack",
              "Customer Journey, CS & Expansion",
              "Advanced MEDDIC Execution",
            ]}
            deliverables={[
              "ICP + UVP template",
              "Value messaging framework",
              "Discovery call script",
              "Demo flow structure",
              "Objection handling playbook",
              "AI prospecting workflow",
              "Outbound cadence templates",
              "Hiring playbook & SDR toolkit",
              "Execution tracker",
              "GTM strategic plan",
              "Team KPI dashboard & forecast template",
              "Onboarding & enablement plan",
              "Customer journey map (MEDDIC toolkit)",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
