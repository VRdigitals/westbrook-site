import svcRecruitment from "@/assets/svc-recruitment.jpg";
import svcWorkVisa from "@/assets/svc-work-visa.jpg";
import svcStudentVisa from "@/assets/svc-student-visa.jpg";
import svcFamily from "@/assets/svc-family.jpg";
import svcSpotlightRecruitment from "@/assets/svc-spotlight-recruitment.png";
import svcSpotlightWorkVisa from "@/assets/svc-spotlight-work-visa.png";
import svcSpotlightStudentVisa from "@/assets/svc-spotlight-student-visa.png";
import svcSpotlightFamily from "@/assets/svc-spotlight-family.png";

export type ServiceDetail = {
  slug: string;
  numeral: string;
  title: string;
  image: string;
  spotlightImage: string;
  blurb: string;
  points: string[];
  heroLine: string;
  intro: string;
  stats: { value: string; label: string }[];
  deliverables: { title: string; body: string }[];
  suitedTo: string[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "global-recruitment",
    numeral: "I",
    title: "Global Recruitment",
    image: svcRecruitment,
    spotlightImage: svcSpotlightRecruitment,
    blurb:
      "The right person, the right employer, the right country — matched before either side ever meets.",
    points: [
      "Nurses & Frontline Clinical Teams",
      "Drivers & Logistics Crews",
      "Tradespeople & Site Technicians",
    ],
    heroLine: "The job you want, waiting on the other side.",
    intro:
      "Most people don't dream of a job title — they dream of the life it buys them. So before we ever send a CV, we ask what that life actually needs: the country, the salary, the schedule, the reason. Then we match it against employers we've already stood inside, not ones we found in a directory.",
    stats: [
      { value: "9,000+", label: "Roles filled to date" },
      { value: "60+", label: "Employer partners on file" },
      { value: "18", label: "Destination markets covered" },
    ],
    deliverables: [
      { title: "Employer Walkthrough", body: "We visit or vet every employer directly — sponsorship history, site conditions and contract terms — before a single role is advertised." },
      { title: "Paper-Proof Credentials", body: "Your qualifications, licences and references are checked against the receiving country's own registry before anyone sees your profile." },
      { title: "A Real Conversation", body: "Interviews are arranged, briefed and debriefed by one advisor — not a shared inbox handing you between departments." },
      { title: "First Day, Handled", body: "Contract review, travel timing and settling-in logistics coordinated with your new employer through to the morning you start." },
    ],
    suitedTo: [
      "Clinical and allied health staff ready for a regulated market abroad",
      "Licensed drivers and logistics crews eyeing European or Gulf operators",
      "Tradespeople with certification who want it to count somewhere new",
      "Employers who are done sorting through unscreened CVs",
    ],
  },
  {
    slug: "work-visas",
    numeral: "II",
    title: "Work & Employer Visas",
    image: svcWorkVisa,
    spotlightImage: svcSpotlightWorkVisa,
    blurb:
      "The paperwork that stands between you and your offer letter — cleared, not just filed.",
    points: [
      "Sponsor-Backed Visa Routes",
      "File-Building & Evidence Review",
      "Consulate Follow-Through",
    ],
    heroLine: "An offer letter is not a visa. We close that gap.",
    intro:
      "Most refusals never touch the merits of your case — they're a missing translation, an unexplained gap, a threshold read wrong. We treat the file like it has to survive a bad day at the consulate, and we keep your employer's side of the paperwork moving at the same pace as yours.",
    stats: [
      { value: "94%", label: "First-submission approvals" },
      { value: "12", label: "Sponsored visa categories covered" },
      { value: "6–10 wks", label: "Typical route to decision" },
    ],
    deliverables: [
      { title: "Route Comparison, In Writing", body: "Every sponsored category you're eligible for, laid out with the real trade-offs — cost, speed, dependants — before you pick one." },
      { title: "A File Built To Survive Scrutiny", body: "Evidence, translations and legalisations assembled to the exact standard the reviewing office publishes, not the one everyone assumes." },
      { title: "Your Employer, Kept In The Loop", body: "Sponsorship certificates, labour approvals and salary evidence handled directly with your employer's HR team, not relayed through you." },
      { title: "From Lodgement To Landing", body: "Biometrics booked, consular queries answered same-day, and the decision tracked until the visa is actually in your passport." },
    ],
    suitedTo: [
      "Professionals sitting on an offer they don't want to lose to paperwork",
      "Anyone previously refused who needs the file rebuilt properly this time",
      "Employers sponsoring an international hire for the first time",
      "Applicants bringing a partner or children on the same clock",
    ],
  },
  {
    slug: "student-visas",
    numeral: "III",
    title: "Student Visas",
    image: svcStudentVisa,
    spotlightImage: svcSpotlightStudentVisa,
    blurb:
      "Not just an acceptance letter — a route that still makes sense five years from now.",
    points: [
      "Country & Programme Shortlisting",
      "Admissions & Financial Evidence",
      "Visa Filing Through Arrival Week",
    ],
    heroLine: "Study somewhere. Or study somewhere that leads.",
    intro:
      "A student visa is the first move in a much longer plan, so we start at the end of it — the licence you'll need, the post-study work rights, the passport it eventually opens — and work backwards to the course and country that actually get you there, not just the one with the prettiest campus.",
    stats: [
      { value: "40+", label: "Partner universities & colleges" },
      { value: "97%", label: "Visas issued without a query" },
      { value: "6", label: "Study destinations covered" },
    ],
    deliverables: [
      { title: "Shortlisting By Outcome", body: "Programmes filtered by post-study work rights and professional recognition first, league-table ranking a distant second." },
      { title: "Applications That Read Well", body: "Statements, references and portfolios refined, plus direct contact with the admissions desk when something stalls." },
      { title: "Funds That Hold Up", body: "Maintenance evidence structured line by line to match what the visa office actually asks to see, not a generic checklist." },
      { title: "Landing, Not Just Arriving", body: "Credibility interview prep, housing pointers and a first-week plan so week one is spent settling in, not scrambling." },
    ],
    suitedTo: [
      "Undergraduates and postgraduates planning to work abroad after graduating",
      "Professionals returning to study to get a licence recognised overseas",
      "Parents financing a dependent's study who want the funds done right",
      "Applicants with a gap year or a prior refusal to explain",
    ],
  },
  {
    slug: "family-migration",
    numeral: "IV",
    title: "Family Migration",
    image: svcFamily,
    spotlightImage: svcSpotlightFamily,
    blurb:
      "You didn't move abroad to do it without them. We bring the rest of the household too.",
    points: [
      "Sponsor & Income Eligibility Check",
      "Spouse, Child & Parent Filing",
      "Settling In, Before You Land",
    ],
    heroLine: "One visa is a start. A family is the point.",
    intro:
      "Family cases get almost no benefit of the doubt — income thresholds, relationship evidence and accommodation standards are read strictly, and a refusal here can cost a year, not a month. So we build these slower and more carefully than any other file we handle, because there's rarely a quick second attempt.",
    stats: [
      { value: "3,000+", label: "Family members relocated" },
      { value: "92%", label: "Approved on first submission" },
      { value: "1", label: "Advisor for the whole household" },
    ],
    deliverables: [
      { title: "The Threshold Check, Upfront", body: "Income, housing and relationship requirements tested against current rules before you commit to a single form." },
      { title: "A Relationship On Paper", body: "History, cohabitation and dependency evidence structured the way a caseworker actually expects to read it." },
      { title: "Everyone On One Timeline", body: "Spouse, child and parent applications aligned so the whole household gets a decision at roughly the same time." },
      { title: "The Boring Stuff, Sorted Early", body: "School places, healthcare registration and first-quarter logistics arranged before anyone boards a flight." },
    ],
    suitedTo: [
      "Spouses and partners ready to join a sponsor already abroad",
      "Workers relocating with children mid-school-year",
      "Families with a prior refusal or a complicated relationship history",
      "Households approaching a settlement or citizenship milestone",
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
