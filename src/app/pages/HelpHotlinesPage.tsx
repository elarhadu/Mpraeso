import React from "react";
import { motion } from "motion/react";
import {
  AlertTriangle,
  Phone,
  Flame,
  Ambulance,
  ShieldAlert,
  Heart,
  Baby,
  Building2,
  Zap,
  Droplets,
  Users,
  MessageCircle,
} from "lucide-react";

type HotlineEntry = {
  name: string;
  number: string;
  description: string;
  icon: React.ElementType;
  urgent?: boolean;
};

type HotlineGroup = {
  heading: string;
  subheading: string;
  color: string;
  entries: HotlineEntry[];
};

const groups: HotlineGroup[] = [
  {
    heading: "Emergency Services",
    subheading: "Call immediately in a life-threatening situation",
    color: "#c0392b",
    entries: [
      {
        name: "Ghana Police Service",
        number: "191",
        description: "Crime, security threats, accidents",
        icon: ShieldAlert,
        urgent: true,
      },
      {
        name: "Ghana Fire Service",
        number: "192",
        description: "Fire outbreaks and rescue operations",
        icon: Flame,
        urgent: true,
      },
      {
        name: "Ghana Ambulance Service",
        number: "193",
        description: "Medical emergencies and urgent transport",
        icon: Ambulance,
        urgent: true,
      },
      {
        name: "National Emergency (NADMO)",
        number: "999",
        description: "Disasters, floods, and national emergencies",
        icon: AlertTriangle,
        urgent: true,
      },
    ],
  },
  {
    heading: "Local Mpraeso Services",
    subheading: "Contacts for services within the Mpraeso municipality",
    color: "#3a6b35",
    entries: [
      {
        name: "Police Headquarters Mpraeso",
        number: "+233 342 091 10",
        description: "Local police station — Mpraeso",
        icon: ShieldAlert,
      },
      {
        name: "Mpraeso General Hospital",
        number: "+233 342 091 20",
        description: "General hospital services and casualty",
        icon: Heart,
      },
      {
        name: "Kwahu South Municipal Assembly",
        number: "+233 342 091 00",
        description: "Local government administration and services",
        icon: Building2,
      },
      {
        name: "Ghana Fire Service — Mpraeso",
        number: "+233 342 091 30",
        description: "Local fire station",
        icon: Flame,
      },
    ],
  },
  {
    heading: "Health & Welfare",
    subheading: "Mental health, family, and social welfare support",
    color: "#2980b9",
    entries: [
      {
        name: "Mental Health Authority Ghana",
        number: "0800-111-011",
        description: "Free mental health support and counselling (toll-free)",
        icon: MessageCircle,
      },
      {
        name: "ChildLine Ghana",
        number: "116",
        description: "Child abuse, protection, and welfare (toll-free)",
        icon: Baby,
        urgent: true,
      },
      {
        name: "DOVVSU (Domestic Violence)",
        number: "0800-800-800",
        description: "Domestic violence and victim support unit (toll-free)",
        icon: Users,
        urgent: true,
      },
      {
        name: "Ghana Health Service",
        number: "0302-684-571",
        description: "Health information and referrals",
        icon: Heart,
      },
    ],
  },
  {
    heading: "Utilities & Infrastructure",
    subheading: "Faults, outages, and utility emergencies",
    color: "#8b6f47",
    entries: [
      {
        name: "ECG Fault Line (Electricity)",
        number: "0302-611-611",
        description: "Electrical faults and power outages",
        icon: Zap,
      },
      {
        name: "Ghana Water Company",
        number: "0302-666-781",
        description: "Water supply faults and emergencies",
        icon: Droplets,
      },
      {
        name: "Ghana National Gas",
        number: "0552-000-911",
        description: "Gas leaks and pipeline emergencies",
        icon: Flame,
      },
      {
        name: "Department of Urban Roads",
        number: "0302-681-535",
        description: "Road hazards and infrastructure faults",
        icon: Building2,
      },
    ],
  },
];

function HotlineCard({ entry }: { entry: HotlineEntry }) {
  const Icon = entry.icon;
  return (
    <a
      href={`tel:${entry.number.replace(/\s/g, "")}`}
      className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div
        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          entry.urgent
            ? "bg-red-50 text-red-600"
            : "bg-[#3a6b35]/8 text-[#3a6b35]"
        }`}
        style={entry.urgent ? {} : { backgroundColor: "rgba(58,107,53,0.08)" }}
      >
        <Icon size={20} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-sm font-bold text-gray-900">{entry.name}</h4>
          {entry.urgent && (
            <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-600">
              Urgent
            </span>
          )}
        </div>
        <p className="mt-0.5 text-xs text-gray-500">{entry.description}</p>
        <p className="mt-2 flex items-center gap-1.5 text-base font-bold text-[#3a6b35] group-hover:text-[#2d5016]">
          <Phone size={14} />
          {entry.number}
        </p>
      </div>
    </a>
  );
}

export function HelpHotlinesPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="relative min-h-[400px] overflow-hidden bg-[#0d1f0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f0a] via-[#1a3a12] to-[#c0392b]/30" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60" />

        <motion.div
          className="relative flex min-h-[400px] items-center justify-center px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-red-500/40 bg-red-500/15">
                <Phone size={28} className="text-red-400" />
              </div>
            </div>

            <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-semibold text-red-300 backdrop-blur"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              Community Resource
            </span>

            <h1 className="mb-5 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Help & Hotlines
            </h1>

            <p className="text-xl leading-relaxed text-white/70">
              Emergency numbers, local services, and community support contacts for Mpraeso and Ghana.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-300">
              <AlertTriangle size={16} />
              In a life-threatening emergency, call <span className="text-white">191 · 192 · 193</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hotline groups */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {groups.map((group, gi) => (
            <motion.div
              key={group.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
            >
              {/* Group header */}
              <div className="mb-8 flex items-center gap-4">
                <div
                  className="h-8 w-1 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    {group.heading}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">{group.subheading}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.entries.map((entry) => (
                  <HotlineCard key={entry.name} entry={entry} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm leading-7 text-gray-500">
            Numbers are provided for community information purposes. Some numbers may change — please verify with the relevant authority. Toll-free numbers are accessible from any network within Ghana at no charge.
          </p>
        </div>
      </section>
    </div>
  );
}
