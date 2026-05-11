import { useMemo, useState } from "react";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  Ambulance,
  Building2,
  ChevronDown,
  GraduationCap,
  Landmark,
  Leaf,
  MapPinned,
  Scale,
  Shield,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";

type LeadershipItem = {
  title: string;
  description: string;
  note?: string;
};

type SectorDepartment = {
  name: string;
  units: string[];
};

type Sector = {
  name: string;
  departments: SectorDepartment[];
};

type AssemblyMember = {
  name: string;
  gender: string;
  electoralArea: string;
  subCommittee: string;
  function: string;
};

type DepartmentUnit = {
  name: string;
  description: string;
};

type DevelopmentProject = {
  project: string;
  dimension: string;
  location: string;
  status: number;
  remarks: string;
};

type ProfileStat = {
  label: string;
  value: string;
};

const topLeadership: LeadershipItem[] = [
  { title: "MCE", description: "Municipal Chief Executive" },
  { title: "MCD", description: "Municipal Coordinating Director" },
  { title: "Internal Audit", description: "Internal audit function of the Assembly" },
  {
    title: "MPCU",
    description: "Municipal Planning Coordinating Unit",
    note: "MPO = Secretary",
  },
];

const sectors: Sector[] = [
  {
    name: "Social Sector",
    departments: [
      {
        name: "Education, Youth & Sports Department",
        units: [
          "Education Section",
          "Sports Section",
          "Youth Section",
          "Basic Education Unit",
          "Non-Formal Education Unit",
          "Library Section",
        ],
      },
      {
        name: "Social Welfare & Community Development Department",
        units: ["Social Welfare Section", "Community Development Section"],
      },
      {
        name: "District Health Department",
        units: ["DMOH Section", "Registration of Birth & Death Section"],
      },
    ],
  },
  {
    name: "Infrastructure Sector",
    departments: [
      {
        name: "Works Department",
        units: ["Building Section", "Water Section", "Feeder Roads Section"],
      },
      {
        name: "Physical Planning Department",
        units: ["Town & Country Planning Section", "Parks & Gardens Section"],
      },
    ],
  },
  {
    name: "Financial Sector",
    departments: [
      {
        name: "Finance Department",
        units: ["Treasury", "Revenue Mobilization", "Levies"],
      },
    ],
  },
  {
    name: "Environmental Sector",
    departments: [
      {
        name: "Disaster Prevention Department",
        units: ["Fire Section", "NADMO Section", "Refugee Section", "Internal Disaster"],
      },
      {
        name: "Natural Resources Conservation",
        units: ["Game & Wildlife Section", "Forestry Section"],
      },
      {
        name: "Environmental Health",
        units: [],
      },
    ],
  },
  {
    name: "Economic Sector",
    departments: [
      {
        name: "Trade & Industry Department",
        units: ["Cooperative Section", "Cottage Industry Section"],
      },
      {
        name: "Agric Department",
        units: [
          "Animal Health and Production Section",
          "Crop Services Section",
          "Agric Extension Section",
          "Agric Engineering Section",
          "Fisheries Section",
        ],
      },
    ],
  },
  {
    name: "Central Administration Department",
    departments: [
      {
        name: "Central Administration",
        units: [
          "Records",
          "General Administration",
          "Development Planning",
          "Budget & Rating",
          "Human Resource Management",
          "MIS",
          "Procurement",
          "Stores",
          "Transport",
          "Estates",
          "Security",
        ],
      },
    ],
  },
];

const assemblyMembers: AssemblyMember[] = [
  {
    name: "Otis Morgloh",
    gender: "M",
    electoralArea: "Ntuntuoagya",
    subCommittee: "Justice and Security",
    function: "Chairman",
  },
  {
    name: "Frank Agyare Odame",
    gender: "M",
    electoralArea: "Nkrisa / Nsuase / Kwasifori",
    subCommittee: "Works, Agric and Tourism",
    function: "Member",
  },
  {
    name: "Mireku Dickson",
    gender: "M",
    electoralArea: "Mpraeso",
    subCommittee: "",
    function: "Member",
  },
];

const departmentsAndUnits: DepartmentUnit[] = [
  {
    name: "Central Administration",
    description: "Manages general administration, human resources, and logistics.",
  },
  {
    name: "Finance Department",
    description: "Handles revenue collection and financial management.",
  },
  {
    name: "Budget Unit",
    description:
      "Sees to the budgeting and financial allocations to activities, projects and programmes in the municipality.",
  },
  {
    name: "Procurement Unit",
    description: "Handles all procurement and purchasing activities of the Assembly.",
  },
  {
    name: "Development Planning Unit",
    description:
      "Responsible for development planning and project coordination as well as collating all quarterly and annual reports and submitting them to the Regional Coordinating Council.",
  },
  {
    name: "Works Department",
    description:
      "Oversees the overall infrastructure development and maintenance in the municipality.",
  },
  {
    name: "Environmental Health Unit",
    description: "Manages sanitation, health inspections, and environmental protection.",
  },
  {
    name: "Social Welfare and Community Development Department",
    description: "Collaborates with decentralized departments to promote social services.",
  },
  {
    name: "Physical Planning Department",
    description: "Handles land use, zoning, and spatial development planning.",
  },
  {
    name: "Agric Department",
    description: "Handles agriculture and its related programmes and activities.",
  },
  {
    name: "Statistics Department",
    description: "Serves as the data hub of the Assembly.",
  },
];

const developmentProjects: DevelopmentProject[] = [
  {
    project: "Renovation of Municipal Education Office",
    dimension: "Social Development",
    location: "Mpraeso",
    status: 95,
    remarks: "On-going",
  },
  {
    project: "Mechanization and repairs of 15 No. Boreholes in the municipality",
    dimension: "Social Development",
    location: "Municipality wide",
    status: 48,
    remarks: "Ongoing",
  },
  {
    project: "Drilling and Mechanization of 10 No. Boreholes in the municipality",
    dimension: "Social Development",
    location: "Municipality wide",
    status: 15,
    remarks: "Ongoing",
  },
  {
    project: "Renovation of MCE Bungalow",
    dimension: "Social Development",
    location: "Mpraeso",
    status: 80,
    remarks: "On-going",
  },
  {
    project: "Renovation of MCE/MCD Office",
    dimension: "Social Development",
    location: "Mpraeso",
    status: 40,
    remarks: "On-going",
  },
];

const socialServices = [
  "Mpraeso Main Market",
  "Mpraeso Lorry Park",
  "Mpraeso General Hospital",
  "Ghana Fire Service",
  "Ghana Ambulance Service",
  "Ghana Police Service",
  "Mpraeso Social Centre",
];

const publicSchools = [
  "Mpraeso Meth. JHS",
  "Mpraeso Meth KG & Primary",
  "Mpraeso Nana Ampadu MA A Basic School",
  "Mpraeso Nana Ampadu MA B Basic School",
  "Mpraeso Presby JHS A & B",
  "Mpraeso Presby A KG & Primary",
  "Mpraeso Presby B KG & Primary",
  "Mpraeso RC Basic School",
  "Mpraeso SHS",
];

const privateBasicSchools = [
  "Mpraeso YMCA Prep. Sch",
  "Mpraeso C.K.C Baptist Int. Sch",
  "Mpraeso Masada Int. Sch",
  "Mpraeso Kids Avenue Prep Sch",
  "Mpraeso Sound Prep Sch",
  "Mpraeso Royal Int. School",
  "Mpraeso Virgin Kids Academy",
];

const keyEconomicActivities = [
  "Monday Market Day",
  "Banana and Plantain Processing Factory",
  "Hospitality",
  "Catering",
  "Transport",
];

const demographicProfile: ProfileStat[] = [
  { label: "Total Population", value: "10,926" },
  { label: "Female", value: "51.9%" },
  { label: "Male", value: "48.1%" },
  { label: "Age 0–14", value: "35%" },
  { label: "Age 15–64", value: "58%" },
  { label: "Age 65+", value: "7%" },
  { label: "Land Size", value: "98.5 km²" },
  { label: "Borders", value: "Atibie, Obomeng, Bepong" },
  { label: "Culture", value: "Easter" },
];

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-gray-600">{subtitle}</p> : null}
    </div>
  );
}

function DepartmentCard({ item }: { item: DepartmentUnit }) {
  return (
    <motion.article
      className="rounded-2xl border border-[#3a6b35]/10 bg-white p-5 shadow-[0_10px_22px_-18px_rgba(58,107,53,0.45)]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
    >
      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
    </motion.article>
  );
}

function ProjectCard({ item }: { item: DevelopmentProject }) {
  const progressColor =
    item.status >= 70 ? "bg-[#3a6b35]" : item.status >= 40 ? "bg-[#d4a574]" : "bg-[#2d5016]";

  return (
    <motion.article
      className="rounded-2xl border border-[#3a6b35]/10 bg-white p-5 shadow-[0_10px_22px_-18px_rgba(58,107,53,0.45)]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-[#3a6b35]">{item.dimension}</p>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-gray-900">{item.project}</h3>
      <p className="mt-1 text-sm text-gray-600">{item.location}</p>
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-semibold text-gray-900">{item.status}%</span>
        </div>
        <div className="h-2.5 rounded-full bg-gray-200">
          <div
            className={`h-2.5 rounded-full ${progressColor} transition-all duration-500`}
            style={{ width: `${item.status}%` }}
          />
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-[#2d5016]">{item.remarks}</p>
    </motion.article>
  );
}

function StatCard({ item }: { item: ProfileStat }) {
  return (
    <article className="rounded-2xl border border-[#d4a574]/30 bg-white p-5 shadow-[0_10px_22px_-18px_rgba(58,107,53,0.45)]">
      <p className="text-sm text-gray-600">{item.label}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900">{item.value}</p>
    </article>
  );
}

function OrganogramSection() {
  const [openSector, setOpenSector] = useState<string | null>(sectors[0]?.name ?? null);
  const [openDepartments, setOpenDepartments] = useState<Record<string, boolean>>({});

  const sectorStats = useMemo(
    () =>
      sectors.map((sector) => ({
        name: sector.name,
        departments: sector.departments.length,
        units: sector.departments.reduce((sum, department) => sum + department.units.length, 0),
      })),
    [],
  );

  return (
    <section className="rounded-3xl border border-[#3a6b35]/10 bg-white p-6 md:p-8">
      <SectionHeader
        title="KSMA Organogram"
        subtitle="This structure represents the functional organization of the Kwahu South Municipal Assembly."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {topLeadership.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-[#d4a574]/35 bg-[#faf8f5] p-4 shadow-sm"
          >
            <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
            {item.note ? <p className="mt-2 text-xs font-medium text-[#3a6b35]">{item.note}</p> : null}
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sectors.map((sector) => {
          const isOpen = openSector === sector.name;
          const stat = sectorStats.find((entry) => entry.name === sector.name);
          return (
            <article key={sector.name} className="rounded-2xl border border-[#3a6b35]/10 bg-[#faf8f5] p-4">
              <button
                type="button"
                onClick={() => setOpenSector(isOpen ? null : sector.name)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 text-left"
              >
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{sector.name}</h3>
                  <p className="mt-1 text-xs text-gray-600">
                    {stat?.departments ?? 0} departments • {stat?.units ?? 0} units
                  </p>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-[#3a6b35] transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3 border-t border-[#d4a574]/30 pt-4">
                      {sector.departments.map((department) => {
                        const departmentKey = `${sector.name}-${department.name}`;
                        const isDepartmentOpen = !!openDepartments[departmentKey];
                        const hasUnits = department.units.length > 0;
                        return (
                          <div
                            key={departmentKey}
                            className="rounded-xl border border-[#3a6b35]/10 bg-white p-3"
                          >
                            <button
                              type="button"
                              disabled={!hasUnits}
                              onClick={() =>
                                setOpenDepartments((prev) => ({
                                  ...prev,
                                  [departmentKey]: !prev[departmentKey],
                                }))
                              }
                              aria-expanded={hasUnits ? isDepartmentOpen : false}
                              className={`flex w-full items-center justify-between gap-2 text-left ${
                                hasUnits ? "cursor-pointer" : "cursor-default"
                              }`}
                            >
                              <span className="text-sm font-medium text-gray-900">{department.name}</span>
                              {hasUnits ? (
                                <ChevronDown
                                  size={16}
                                  className={`text-[#3a6b35] transition-transform ${
                                    isDepartmentOpen ? "rotate-180" : ""
                                  }`}
                                />
                              ) : (
                                <span className="text-xs text-gray-500">No units listed</span>
                              )}
                            </button>
                            {hasUnits ? (
                              <AnimatePresence initial={false}>
                                {isDepartmentOpen ? (
                                  <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-3 space-y-2 overflow-hidden border-t border-gray-200 pt-3"
                                  >
                                    {department.units.map((unit) => (
                                      <li key={unit} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d4a574]" />
                                        <span>{unit}</span>
                                      </li>
                                    ))}
                                  </motion.ul>
                                ) : null}
                              </AnimatePresence>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function LocalGovernmentSection() {
  const [schoolTab, setSchoolTab] = useState<"public" | "private">("public");
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null);

  const serviceIcons = [Store, MapPinned, Building2, Shield, Ambulance, Scale, Users];
  const economyIcons = [TrendingUp, Leaf, Building2, Activity, MapPinned];

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center rounded-full bg-[#3a6b35]/10 px-4 py-2 text-sm font-semibold text-[#3a6b35]">
            Kwahu South Municipal Assembly
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Local Government & Municipal Administration
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            Mpraeso serves as the administrative centre of the Kwahu South Municipal Assembly,
            supporting governance, planning, development, and essential public services.
          </p>
        </motion.div>

        <div className="mt-14 space-y-12 md:space-y-14">
          <OrganogramSection />

          <section className="rounded-3xl border border-[#3a6b35]/10 bg-white p-6 md:p-8">
            <SectionHeader title="Assembly Members" />
            <div className="overflow-x-auto rounded-2xl border border-[#d4a574]/30">
              <table className="min-w-full divide-y divide-[#d4a574]/20 text-sm">
                <thead className="bg-[#faf8f5]">
                  <tr>
                    {["Name", "Gender", "Electoral Area", "Sub Committee", "Function"].map((head) => (
                      <th
                        key={head}
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-gray-900"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {assemblyMembers.map((member) => (
                    <tr key={member.name} className="hover:bg-[#faf8f5]/60">
                      <td className="px-4 py-3 font-medium text-gray-900">{member.name}</td>
                      <td className="px-4 py-3 text-gray-600">{member.gender}</td>
                      <td className="px-4 py-3 text-gray-600">{member.electoralArea}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {member.subCommittee || "—"}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{member.function}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border border-[#3a6b35]/10 bg-white p-6 md:p-8">
            <SectionHeader title="Departments & Units Under the Assembly" />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {departmentsAndUnits.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveDepartment(activeDepartment === item.name ? null : item.name)}
                  aria-expanded={activeDepartment === item.name}
                  className="text-left"
                >
                  <DepartmentCard item={item} />
                </button>
              ))}
            </div>
            {activeDepartment ? (
              <div className="mt-5 rounded-xl border border-[#d4a574]/35 bg-[#faf8f5] p-4 text-sm text-[#2d5016]">
                Selected: {activeDepartment}
              </div>
            ) : null}
          </section>

          <section className="rounded-3xl border border-[#3a6b35]/10 bg-white p-6 md:p-8">
            <SectionHeader title="Development Plan & Project Information" />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {developmentProjects.map((item) => (
                <ProjectCard key={item.project} item={item} />
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-[#3a6b35]/10 bg-white p-6 md:p-8">
            <SectionHeader title="Social Services & Facilities" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {socialServices.map((service, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                return (
                  <article
                    key={service}
                    className="rounded-2xl border border-[#d4a574]/30 bg-[#faf8f5] p-4"
                  >
                    <div className="mb-3 inline-flex rounded-xl bg-[#3a6b35]/10 p-2 text-[#3a6b35]">
                      <Icon size={18} />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{service}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="rounded-3xl border border-[#3a6b35]/10 bg-white p-6 md:p-8">
            <SectionHeader title="Schools in Mpraeso" />
            <div className="mb-5 inline-flex rounded-full border border-[#3a6b35]/20 bg-[#faf8f5] p-1">
              <button
                type="button"
                onClick={() => setSchoolTab("public")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  schoolTab === "public"
                    ? "bg-[#3a6b35] text-white"
                    : "text-gray-700 hover:bg-white"
                }`}
              >
                Public Schools
              </button>
              <button
                type="button"
                onClick={() => setSchoolTab("private")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  schoolTab === "private"
                    ? "bg-[#3a6b35] text-white"
                    : "text-gray-700 hover:bg-white"
                }`}
              >
                Private Basic Schools
              </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.ul
                key={schoolTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="grid gap-3 md:grid-cols-2"
              >
                {(schoolTab === "public" ? publicSchools : privateBasicSchools).map((school) => (
                  <li
                    key={school}
                    className="flex items-start gap-2 rounded-xl border border-[#d4a574]/25 bg-[#faf8f5] p-3 text-sm text-gray-700"
                  >
                    <GraduationCap size={16} className="mt-0.5 shrink-0 text-[#3a6b35]" />
                    <span>{school}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </section>

          <section className="rounded-3xl border border-[#3a6b35]/10 bg-white p-6 md:p-8">
            <SectionHeader title="Key Economic Activities" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {keyEconomicActivities.map((activity, index) => {
                const Icon = economyIcons[index % economyIcons.length];
                return (
                  <article
                    key={activity}
                    className="rounded-2xl border border-[#d4a574]/30 bg-[#faf8f5] p-4"
                  >
                    <Icon size={18} className="text-[#3a6b35]" />
                    <p className="mt-3 text-sm font-medium text-gray-900">{activity}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="rounded-3xl border border-[#3a6b35]/10 bg-white p-6 md:p-8">
            <SectionHeader title="Demographic & Area Profile" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {demographicProfile.map((item) => (
                <StatCard key={item.label} item={item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
