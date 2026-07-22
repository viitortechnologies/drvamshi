export const siteConfig = {
  name: "Dr. Pillareddy Vamsheedhar Reddy",
  shortName: "Dr. Vamsheedhar Reddy",
  title: "Educator · Researcher · Mentor",
  role: "Assistant Professor, CSE – AI & ML",
  institution: "Keshav Memorial Engineering College",
  location: "Hyderabad, Telangana, India",
  email: "pvamsheedharreddy@gmail.com",
  phone: "+91 99853 62363",
  siteUrl: "https://drvamshi.vercel.app",
  description:
    "Educator and researcher specializing in cloud computing, AI/ML, and student mentorship. Explore publications, patents, teaching, and academic leadership of Dr. Pillareddy Vamsheedhar Reddy.",
};

export const profileLinks = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/vamsheedharredddy-pillaredddy-272a0aa9",
    description: "Professional profile and career updates",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0003-3525-6703",
    description: "Verified researcher identity and works",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=1DD-5EAAAAAJ&hl=en",
    description: "Citations and publication list",
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Pillareddy_Reddy2",
    description: "Research network and papers",
  },
  {
    label: "Scopus",
    href: "https://www.scopus.com/authid/detail.uri?authorId=56214294000",
    description: "Indexed publications profile",
  },
  {
    label: "Web of Science",
    href: "https://www.webofscience.com/wos/author/record/HKO-4314-2023",
    description: "Researcher record and citations",
  },
] as const;

export const navPages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Awards", href: "/awards" },
  { label: "Contact", href: "/contact" },
] as const;

/** Hero slides — landscape Assets only (3:2 frame) */
export const heroSlides = [
  {
    image: "/images/hero-office-cover.webp",
    headline: "Shaping Students. Building Futures.",
    subheading: "Dr. Pillareddy Vamsheedhar Reddy",
    role: "Assistant Professor · CSE (AI & ML) · KMEC",
    supporting:
      "Nearly a decade of teaching, a Ph.D. from VIT-AP, and research that improves cloud–fog scheduling and applied AI.",
    size: "cover" as const,
  },
  {
    image: "/images/hero-iot-faculty.webp",
    headline: "Mentoring Through Practice",
    subheading: "Labs · Workshops · Student projects",
    role: "CSE (AI & ML) · Hands-on learning at KMEC",
    supporting:
      "From IoT tinkering sessions to research writing seminars—building skills that transfer beyond the classroom.",
    size: "cover" as const,
  },
  {
    image: "/images/hero-ai-applications.webp",
    headline: "Academic Excellence with Integrity",
    subheading: "Research · Mentorship · Leadership",
    role: "Publications, patents, and peer review across leading venues",
    supporting:
      "Recognized for contributions in teaching, research, and academic service across national and international platforms.",
    size: "cover" as const,
  },
];

export const experience = [
  {
    org: "Keshav Memorial Engineering College",
    role: "Assistant Professor",
    dept: "CSE – AI & ML",
    period: "Aug 2023 – Present",
  },
  {
    org: "VIT-AP University",
    role: "Full-time Research Scholar (Ph.D.)",
    dept: "School of Computer Science and Engineering",
    period: "Aug 2020 – Aug 2023",
  },
  {
    org: "Mallareddy Institute of Engineering and Technology",
    role: "Assistant Professor",
    dept: "Computer Science and Engineering",
    period: "Jul 2018 – Jul 2020",
  },
  {
    org: "Sri Sai Jyothi Engineering College",
    role: "Assistant Professor",
    dept: "Computer Science and Engineering",
    period: "Nov 2016 – Jul 2018",
  },
  {
    org: "St. Mary’s Integrated Campus Hyderabad",
    role: "Assistant Professor",
    dept: "Computer Science and Engineering",
    period: "Jan 2015 – Nov 2016",
  },
  {
    org: "Vivekananda Institute of Science and Information Technology",
    role: "Assistant Professor",
    dept: "Computer Science and Engineering",
    period: "Jul 2013 – Jan 2015",
  },
];

export const education = [
  {
    degree: "Post-doctoral Fellowship (Pursuing)",
    school: "SR University, Warangal, Telangana",
    period: "2025 – Present",
    detail: "Computer Science and Engineering",
  },
  {
    degree: "Ph.D. (Full-time)",
    school: "VIT-AP University, Amaravati",
    period: "2020 – 2023",
    detail: "School of CSE · 8.1 CGPA",
  },
  {
    degree: "M.Tech. (CSE)",
    school: "VIST, Mahbubnagar (Aff. JNTUH)",
    period: "2012 – 2014",
    detail: "80.4%",
  },
  {
    degree: "B.Tech. (Information Technology)",
    school: "JNIT, Hyderabad (Aff. JNTUH)",
    period: "2008 – 2012",
    detail: "71.6%",
  },
];

export const subjects = [
  "C Programming",
  "Programming for Problem Solving",
  "Data Structures with C / C++",
  "Machine Learning",
  "Advanced Machine Learning",
  "IT Workshop",
  "DBMS Lab",
  "OOPs through Java Lab",
  "Computer Networks Lab (Cisco Packet Tracer)",
];

export const journals = [
  {
    title:
      "Priority-aware multi-objective task scheduling in fog computing using simulated annealing",
    venue: "Sensors, 25(18), 5744 (SCIE, IF 3.9)",
    year: "2025",
    href: "https://scholar.google.com/citations?user=1DD-5EAAAAAJ&hl=en",
  },
  {
    title: "An Energy Efficient RL Based Workflow Scheduling in Cloud Computing",
    venue: "Expert Systems with Applications (SCIE, IF 8.5)",
    year: "2023",
    href: "https://doi.org/10.1016/j.eswa.2023.121038",
  },
  {
    title:
      "A Multi-objective Based Scheduling Framework for Effective Resource Utilization in Cloud Computing",
    venue: "IEEE Access (SCIE, IF 3.476)",
    year: "2023",
    href: "https://doi.org/10.1109/ACCESS.2023.3266294",
  },
  {
    title: "MONWS: Multi-Objective Normalization Workflow Scheduling for Cloud Computing",
    venue: "Applied Sciences 13(2):1101 (SCIE, IF 2.838)",
    year: "2023",
    href: "https://doi.org/10.3390/app13021101",
  },
];

export const conferences = [
  {
    title: "MedicAI: AI-Powered System for Enhanced Medical Information Access",
    venue: "9th ICISC 2025, JCT College of Engineering and Technology (IEEE)",
    year: "2025",
  },
  {
    title: "An analysis of a meta heuristic optimization algorithms for cloud computing",
    venue: "ISCON 2021 (IEEE)",
    year: "2021",
    href: "https://doi.org/10.1109/ISCON52037.2021.9702376",
  },
  {
    title: "IWaOA: Resource Aware Scheduling Through Cloud Fog Computing Environment",
    venue: "C2I6 2023 (IEEE)",
    year: "2023",
    href: "https://doi.org/10.1109/C2I659362.2023.10430593",
  },
  {
    title: "Systematic Literature Review on Bio Inspired Algorithms in Cloud Fog Computing",
    venue: "ICRTAC 2023 (IEEE)",
    year: "2023",
  },
];

export const patents = [
  {
    title: "DeepAgriNet: CNN-LSTM-Based Crop Yield Forecasting Using Multisource Agricultural Data",
    number: "202641007352",
    date: "Published 06/02/2026",
  },
  {
    title:
      "AI-Enabled Adaptive Energy Management System for Smart Homes: Intelligent Optimization, Real-Time Control, and Sustainable Power Utilization",
    number: "202541012420",
    date: "Published 21/02/2025",
  },
  {
    title:
      "Chemical Sensor-Integrated IoT Network for AI-Optimized Electricity Usage in Residential Areas",
    number: "202541070964",
    date: "Published 01/08/2025",
  },
  {
    title: "An energy-efficient workflow scheduling",
    number: "202241071666",
    date: "Published 13/02/2023",
  },
];

/** Featured awards — each unique; cards share landscape 4:3 frame */
export const featuredAwards = [
  {
    title: "VIT-AP Research Award – Publications",
    caption:
      "Certificate of Achievement, University Day 2022–23 — Research Award for Publications (Engineering & Advanced Sciences), VIT-AP University, 03 June 2023.",
    image: "/images/award-vitap-h.webp",
    fit: "contain" as const,
  },
  {
    title: "Pragyan-2025 — Winner",
    caption:
      "Presenting the Pragyan-2025 Winner plaque (2024–2025) at Keshav Memorial Engineering College, CSE (AI & ML) / CSI Chapter.",
    image: "/images/award-pragyan-wide.webp",
    fit: "cover" as const,
    position: "object-[center_25%]",
  },
  {
    title: "ICISC 2025 — Certificate of Presentation",
    caption:
      "Presented “MedicAI: AI-Powered System for Enhanced Medical Information Access” at the 9th International Conference on Inventive Systems and Control (ICISC 2025), IEEE.",
    image: "/images/certificate-icisc.webp",
    fit: "contain" as const,
  },
  {
    title: "Cybersecurity event recognition",
    caption:
      "On-stage award presentation at a cybersecurity academic event—recognition for contribution and leadership.",
    image: "/images/award-cyber-ceremony.webp",
    fit: "cover" as const,
    position: "object-center",
  },
];

/** Peer-review certificates — one card per journal, no duplicates */
export const reviewCertificates = [
  {
    journal: "Expert Systems with Applications",
    detail: "Recognised for 2 reviews (Oct 2025 – Jan 2026)",
    image: "/images/certs/cert-eswa.webp",
  },
  {
    journal: "Computer Networks",
    detail: "Recognised for 1 review (Sep 2025)",
    image: "/images/certs/cert-compnw.webp",
  },
  {
    journal: "Biomedical Signal Processing and Control",
    detail: "Recognised for 3 reviews (Oct 2025 – Jan 2026)",
    image: "/images/certs/cert-bspc.webp",
  },
  {
    journal: "Sustainable Computing: Informatics and Systems",
    detail: "Recognised for 4 reviews (Jan 2026 – May 2026)",
    image: "/images/certs/cert-suscom.webp",
  },
  {
    journal: "Computers & Electrical Engineering",
    detail: "Recognised for 2 reviews (Mar 2026 – Jun 2026)",
    image: "/images/certs/cert-caee.webp",
  },
  {
    journal: "Computer Science Review",
    detail: "Recognised for 2 reviews (Mar 2026 – Jun 2026)",
    image: "/images/certs/cert-cosrev.webp",
  },
  {
    journal: "SoftwareX",
    detail: "Recognised for 1 review (May 2026)",
    image: "/images/certs/cert-softx.webp",
  },
  {
    journal: "Swarm and Evolutionary Computation",
    detail: "Recognised for 1 review (Apr 2026)",
    image: "/images/certs/cert-swevo.webp",
  },
];

export const achievements = [
  "Ratified as Assistant Professor by OU, Hyderabad (2023)",
  "Ratified as Assistant Professor by JNTUH (2015, 2017, 2018)",
  "Average student feedback of 97.5% with Certificate of Achievement (2017)",
  "Average pass percentage of 98.3% with Certificate of Achievement (2017)",
  "VIT-AP Research Award – Patents (Certificate of Achievement, academic year 2022–23)",
];

export const workshops = [
  {
    title: "Quality Research Paper Writing and Publication",
    detail: "One-day seminar at KMEC (29 Nov 2024), Seminar Hall A-104 — resource person.",
    image: "/images/event-research-seminar.webp",
  },
  {
    title: "Intro to IoT: Tinkering with Tomorrow",
    detail: "Faculty team at the KMEC CSE (AI & ML) IoT workshop (Apr 2025).",
    image: "/images/event-iot-workshop.webp",
  },
  {
    title: "IoT workshop speakers",
    detail: "With colleagues before the Intro to IoT session slide deck at KMEC.",
    image: "/images/teaching-iot-speakers.webp",
  },
  {
    title: "NGIT IoT Workshop",
    detail: "Participation and collaboration at the NGIT IoT workshop session.",
    image: "/images/event-ngit-iot.webp",
  },
  {
    title: "Student lab mentoring",
    detail: "Guiding CSE (AI & ML) students through embedded and IoT board experiments.",
    image: "/images/teaching-lab.webp",
  },
  {
    title: "AIDIA / AI guest lecture",
    detail: "Seated with faculty at an AI / AIDIA academic inauguration session.",
    image: "/images/event-aidia.webp",
  },
];

export const gallery = [
  {
    image: "/images/speaking-ai-humanity.webp",
    caption: "Speaking on “AI for Humanity: Building Intelligent Future.”",
    position: "object-[center_20%]",
  },
  {
    image: "/images/hero-speaking-cover-lg.webp",
    caption: "Presenting AI Applications — Computer Vision, NLP, Speech, and Robotics.",
    position: "object-center",
  },
  {
    image: "/images/portrait-convocation.webp",
    caption: "VIT-AP University convocation — Ph.D. milestone.",
    position: "object-[center_18%]",
  },
  {
    image: "/images/portrait-campus.webp",
    caption: "On campus — academic journey beyond the classroom.",
    position: "object-[center_20%]",
  },
  {
    image: "/images/portrait-formal.webp",
    caption: "At a formal academic celebration.",
    position: "object-[center_30%]",
  },
  {
    image: "/images/desk-work.webp",
    caption: "Research and preparation at the office desk.",
    position: "object-center",
  },
  {
    image: "/images/event-pragyan-group.webp",
    caption: "With faculty at Pragyan-2025, CSE (AI & ML), KMEC.",
    position: "object-[center_40%]",
  },
  {
    image: "/images/gallery-faculty-seven.webp",
    caption: "Faculty and organizers together at a department academic event.",
    position: "object-center",
  },
  {
    image: "/images/gallery-faculty-rosettes.webp",
    caption: "Recognitions ceremony with colleagues — departmental celebration.",
    position: "object-center",
  },
  {
    image: "/images/gallery-pragyan-banner.webp",
    caption: "Pragyan-2025 team photo before the event banner.",
    position: "object-center",
  },
  {
    image: "/images/event-ugyan-group.webp",
    caption: "Large faculty and student gathering at Ugyan-2025.",
    position: "object-[center_35%]",
  },
  {
    image: "/images/gallery-campus-sports.webp",
    caption: "Campus community — faculty sports day group photo.",
    position: "object-center",
  },
];

export const responsibilities = [
  "Department R&D Coordinator",
  "Department Coordinator",
  "Course Files Coordinator",
  "Timetable Coordinator",
  "Subject Coordinator (DSA, AML)",
  "Academic Calendar Committee Member",
  "IV-year Projects Coordinator",
  "Interview Panel Member",
  "Department Project Reviews Panel Member",
];

export const researchTopics = [
  "Task Scheduling",
  "Workflow Scheduling",
  "Cloud Computing",
  "Fog Computing",
  "Machine Learning",
  "Energy-efficient Systems",
];

/** @deprecated use featuredAwards */
export const awards = featuredAwards;
