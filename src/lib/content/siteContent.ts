export const kpis = [
  { label: "Individuals trained", y1: "150", y3: "600", icon: "👥", suffix: "+" },
  { label: "STEM scholarships awarded", y1: "20", y3: "100", icon: "🎓", suffix: "" },
  { label: "Businesses launched by graduates", y1: "15", y3: "80", icon: "🌱", suffix: "+" },
  { label: "Communities with health networks", y1: "2", y3: "8", icon: "🏥", suffix: "" },
  { label: "Female beneficiaries", y1: "60%", y3: "60%", icon: "♀️", suffix: "" },
  { label: "Graduates reporting income improvement", y1: "50%", y3: "70%", icon: "📈", suffix: "" },
];

export const pillars = [
  {
    label: "Healthcare & Sanitation Training",
    description:
      "Training women and youth in CHV practices, WASH education, first aid, and maternal health — building community health resilience.",
    href: "/programmes/healthcare",
    color: "#0a5c60",
    iconKey: "heart",
    image: "/images/pillar-healthcare.png",
  },
  {
    label: "Agribusiness & Rural Economic Diversification",
    description:
      "Climate-smart farming, value-addition, cooperative formation, and buyer network linkages for smallholder farmers and rural youth.",
    href: "/programmes/agribusiness",
    color: "#f0b033",
    iconKey: "leaf",
    image: "/images/pillar-agribusiness.png",
  },
  {
    label: "STEM Education Scholarships",
    description:
      "Scholarships, mentorship, and career pathways for academically promising students from low-income households in rural communities.",
    href: "/programmes/stem",
    color: "#e85a4a",
    iconKey: "star",
    image: "/images/pillar-stem.png",
  },
];

export const stories = [
  {
    name: "Abiba Alhassan",
    programme: "Agribusiness",
    location: "Kulfuo, Upper West Region",
    quote:
      "I now run a small vegetable business and can support my siblings in school. LURI gave me more than skills — it gave me a future.",
    image: "/images/story-abiba.png",
  },
  {
    name: "Rahimatu Issah",
    programme: "Healthcare",
    location: "Kulfuo, Upper West Region",
    quote:
      "Our community has better hygiene practices and fewer preventable illnesses. I am now a certified community health volunteer.",
    image: "/images/story-rahimatu.png",
  },
  {
    name: "Mubarak Sulemana",
    programme: "STEM Scholarship",
    location: "Upper West Region",
    quote:
      "The scholarship gave me the chance to stay in school and study engineering. I want to come back and build things for my community.",
    image: "/images/story-mubarak.png",
  },
];

export const coreValues = [
  {
    title: "People First",
    body: "Every decision starts with the community. Beneficiaries are partners, not recipients.",
  },
  {
    title: "Integrity",
    body: "We operate with full transparency — in governance, finance, and programme reporting.",
  },
  {
    title: "Partnership",
    body: "Formal MoUs, community advisory committees, and peer accountability at every level.",
  },
  {
    title: "Sustainability",
    body: "Interventions are designed to outlast LURI's presence. Community ownership is the goal.",
  },
  {
    title: "Equity",
    body: "60% female beneficiary target. Programmes prioritise the most marginalised voices.",
  },
  {
    title: "Excellence",
    body: "We measure everything. Independent annual evaluations hold us to our published KPIs.",
  },
];

export const programmePhases = [
  { step: "01", title: "Assess", body: "Community needs mapping and baseline data collection." },
  { step: "02", title: "Design", body: "Programme design with community advisory input." },
  { step: "03", title: "Deliver", body: "Training delivery with tools, kits, and mentorship." },
  { step: "04", title: "Measure", body: "KPI tracking, participant follow-up, and impact surveys." },
  { step: "05", title: "Scale", body: "Proven models extended to new communities and cohorts." },
];

export const givingTiers = [
  {
    amount: "GHS 200",
    usd: "~$15",
    label: "Hygiene Kit",
    body: "Covers a complete hygiene kit for one healthcare trainee.",
    icon: "💊",
  },
  {
    amount: "GHS 500",
    usd: "~$35",
    label: "Starter Farm Pack",
    body: "Covers seed pack and tools for one agribusiness trainee.",
    icon: "🌾",
    featured: true,
  },
  {
    amount: "GHS 2,000",
    usd: "~$140",
    label: "STEM Term Scholarship",
    body: "Supports one STEM scholarship for a full academic term.",
    icon: "🎓",
  },
];

export const volunteerRoles = [
  { title: "Programme Facilitator", description: "Lead training sessions across healthcare, agribusiness, or STEM." },
  { title: "Community Liaison", description: "Bridge between LURI and community members in Kulfuo." },
  { title: "Skills Trainer", description: "Share vocational expertise with programme participants." },
  { title: "STEM Mentor", description: "Guide scholarship recipients through academic and career pathways." },
];
