export const siteConfig = {
  name: "Dr. Pillareddy Vamsheedhar Reddy",
  shortName: "Dr. Vamsheedhar Reddy",
  title: "Educator · Researcher · Mentor",
  role: "Associate Professor, CSE – AI & ML",
  institution: "Keshav Memorial Engineering College",
  location: "Hyderabad, Telangana, India",
  email: "pvamsheedharreddy@gmail.com",
  phone: "+91 99853 62363",
  siteUrl: "https://drvamshi.vercel.app",
  description:
    "Associate Professor in CSE (AI & ML) at Keshav Memorial Engineering College, Hyderabad. Ph.D. in Cloud Computing from VIT University, with 14+ years of teaching, 22+ publications, four patents, co-author of Internet of Things & Its Applications, and research in fog/cloud computing, deep learning, IoT, and cybersecurity.",
};

/** Full professional biography used on About and related pages */
export const biography = [
  "Dr. Pillareddy Vamsheedhar Reddy is an Associate Professor in the Department of Computer Science and Engineering (Artificial Intelligence & Machine Learning) at Keshav Memorial Engineering College, Hyderabad. He received his Ph.D. in Cloud Computing from VIT University. With over 14 years of teaching experience, he has made significant contributions to teaching and research in emerging computing technologies.",
  "He has authored 6 SCIE-indexed journal articles, 2 Scopus-indexed journal articles, 17 international conference papers, 4 UGC CARE journal articles, and holds four patents—including the co-authored book Internet of Things & Its Applications (Groovi Techno IT Solution, ISBN 978-93-6368-015-9). He has organized and delivered several workshops on IoT at academic institutions.",
  "His research interests include Fog Computing, Cloud Computing, Deep Learning, Internet of Things (IoT), and Cybersecurity. He actively mentors undergraduate and postgraduate students and collaborates on research in intelligent computing. Dr. Reddy is a Senior Member of IEEE and IAENG and continues to contribute to research, innovation, and academic excellence through teaching, publications, and professional service.",
];

export const impactStats = [
  { value: "14 yrs", label: "Teaching experience" },
  { value: "22+", label: "Publications" },
  { value: "4", label: "Patents published" },
  { value: "8+", label: "Journal review recognitions" },
];

export const memberships = [
  "Senior Member, IEEE",
  "Senior Member, IAENG",
];

export const publicationSummary = {
  scie: 6,
  scopus: 2,
  conferences: 17,
  ugcCare: 4,
  books: 1,
  patents: 4,
};

/** Published book — Groovi Techno IT Solution */
export const publishedBook = {
  title: "Internet of Things & Its Applications",
  publisher: "Groovi Techno IT Solution Private Limited",
  isbn: "978-93-6368-015-9",
  price: "₹150",
  publishedDate: "24 June 2026",
  coverImage: "/images/book-iot-cover.webp",
  publisherAddress:
    "H.No.18-161/1, Road No.05, Chaitanya, Chaitanyapuri, Hyderabad, TG-500035",
  publisherPhone: "+91 97005 09433",
  authors: [
    {
      name: "Mr. Gudimella Sai Ram",
      role: "Co-Author",
      bio: "Assistant Professor, ECE, Siddhartha Institute of Engineering and Technology (Autonomous), Ibrahimpatnam, Hyderabad. M.Tech in Digital Electronics and Communication Systems; pursuing Ph.D. at KL University. 10+ years teaching; 14 research papers, 5 patents, 2 design patents, and 2 book publications. Research: IoT, communication systems, signal processing, embedded systems, and VLSI design.",
    },
    {
      name: "Mr. Mohammad Gandhi Babu",
      role: "Co-Author",
      bio: "Assistant Professor, ECE, AVN Institute of Engineering and Technology (Autonomous), Ibrahimpatnam, Hyderabad. M.Tech in VLSI & Embedded Systems; pursuing Ph.D. at KL University. 10+ years teaching; 8 research papers and 1 patent. Lifetime member of IETE, ISTE, and IAENG. Research: IoT, VLSI design, communication systems, and embedded systems.",
    },
    {
      name: "Dr. P. Vamsheedhar Reddy",
      role: "Co-Author",
      bio: "Associate Professor, CSE (AI & ML), Keshav Memorial Engineering College, Hyderabad. Ph.D. in Cloud Computing from VIT University. 14+ years teaching; 6 SCIE-indexed journal papers, 14 international conference papers, and 4 patents. Research: fog computing, cloud computing, deep learning, IoT, and cybersecurity. Senior Member of IEEE and IAENG.",
    },
    {
      name: "Mr. Y. Raju",
      role: "Co-Author",
      bio: "Assistant Professor, ECE, Sri Indu Institute of Engineering and Technology (Autonomous), Ibrahimpatnam, Hyderabad. M.Tech in VLSI System Design. 10 years teaching; 10 research papers and 3 patents. Member of IAENG and IRED. Research: IoT, communication systems, signal processing, embedded systems, and VLSI design.",
    },
  ],
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
  { label: "Foundation", href: "/foundation" },
  { label: "Contact", href: "/contact" },
] as const;

export const foundationConfig = {
  name: "Sri Sarvepally Radhakrishnan Foundation",
  shortName: "SSR Foundation",
  tagline: "Empowering Education. Honouring Teachers. Transforming Lives.",
  relaunchDate: "5 September 2026",
  relaunchNote: "Re-launching on 5 September 2026 on the occasion of Teachers' Day.",
  email: "info@srisrfoundation.org",
  phone: "+91 98765 43210",
  address: "Hyderabad, Telangana, India",
  website: "www.srisrfoundation.org",
  quote:
    "The true teachers are those who help us think for ourselves.",
  quoteAuthor: "Dr. Sarvepalli Radhakrishnan",
};

/** Namesake and guiding inspiration for the foundation */
export const foundationInspiration = {
  name: "Dr. Sarvepalli Radhakrishnan",
  title: "Philosopher · Educator · Former President of India",
  image: "/images/foundation-radhakrishnan.webp",
  paragraphs: [
    "The foundation is named in honour of Dr. Sarvepalli Radhakrishnan, one of India's most respected philosophers, scholars, and statesmen. A devoted teacher before he entered public life, he served as the second President of India and remains a symbol of intellectual integrity and moral leadership.",
    "He believed that education should build character as well as knowledge, and that teachers hold a sacred responsibility in shaping young minds. His conviction that \"teachers should be the best minds in the country\" continues to inspire educators across the nation.",
    "In India, his birthday—5 September—is celebrated as Teachers' Day, a tradition that reflects the deep respect he held for the teaching profession. Our foundation draws from that same spirit: honouring teachers, supporting students, and serving society through education.",
  ],
};

export const foundationAbout =
  "The Sri Sarvepally Radhakrishnan Foundation is a social initiative committed to promoting education, supporting teachers, and empowering students. Inspired by the values of Dr. Sarvepalli Radhakrishnan, the foundation works to create opportunities for learning, growth, and community development.";

export const foundationVision =
  "To create a society where every individual has access to quality education, innovation, and equal opportunity to succeed.";

export const foundationMission =
  "To empower students, honour teachers, and implement sustainable initiatives that uplift communities through education and service.";

export const foundationVisionPoints = [
  "Supporting underprivileged students",
  "Promoting value-based education",
  "Encouraging knowledge sharing",
  "Strengthening social responsibility through education",
];

export const foundationHomeIntro = [
  "Dr. Radhakrishnan Foundation was established with the support of like-minded friends who share a vision of education-driven social upliftment.",
  "Guided by the ideals of Dr. Sarvepalli Radhakrishnan, the foundation works year-round to bridge educational gaps, honour educators, and create pathways for students who need guidance and support.",
  "From scholarship drives and Teachers' Day celebrations to awareness sessions and community outreach, the foundation stays actively engaged—organising events, mentoring learners, and building partnerships that keep education at the centre of social progress.",
];

export const foundationActiveEvents = [
  {
    title: "Teachers' Day & Educator Recognition",
    description:
      "Annual celebrations honouring outstanding teachers, with awards and appreciation ceremonies across partner institutions.",
    cadence: "Every September",
  },
  {
    title: "Student Scholarship & Awards Drives",
    description:
      "Merit- and need-based scholarships paired with recognition for academic excellence and community service.",
    cadence: "Quarterly",
  },
  {
    title: "Educational Material Distribution",
    description:
      "Books, stationery, and learning resources delivered to rural and underprivileged students.",
    cadence: "Ongoing",
  },
  {
    title: "Awareness & Inspiration Sessions",
    description:
      "Talks, panel discussions, and mentorship circles on career guidance, values, and lifelong learning.",
    cadence: "Monthly",
  },
  {
    title: "Community Outreach Programs",
    description:
      "Educational camps, donation drives, and volunteer-led initiatives that connect students with real-world impact.",
    cadence: "Throughout the year",
  },
  {
    title: "Foundation Membership & Volunteer Drives",
    description:
      "Welcoming educators, professionals, and students to join hands and expand the foundation's reach.",
    cadence: "Rolling enrollment",
  },
];

export const foundationFounders = [
  {
    name: "B. Pavan Kumar",
    role: "Founder",
    bio: [
      "B. Pavan Kumar is remembered for his values, kindness, and the positive impact he made on the lives of those around him.",
      "Though he passed away in 2023, his memory continues to inspire us. The foundation is committed to carrying forward his values and vision through meaningful initiatives that contribute to society.",
      "His life may have ended, but his legacy continues through every life we touch.",
    ],
    image: "/images/foundation-founder-pavan.webp",
    initials: "BP",
  },
  {
    name: "P. Vamsheedhar Reddy",
    role: "Co-Founder",
    bio: [
      "Dr. P. Vamsheedhar Reddy is an Associate Professor in CSE (AI & ML) at Keshav Memorial Engineering College, Hyderabad, with a Ph.D. in Cloud Computing from VIT University and over 14 years of teaching and research experience.",
      "As Co-Founder, he works to advance the foundation's mission—supporting students, honouring teachers, and building programs that create lasting educational impact in communities across Telangana.",
      "Guided by the ideals of Dr. Sarvepalli Radhakrishnan and the vision of B. Pavan Kumar, he remains dedicated to empowering young minds, mentoring learners, and driving innovation for a better tomorrow.",
    ],
    image: "/images/portrait-pro.webp",
    initials: "PV",
  },
];

export const foundationInitiatives = [
  {
    title: "Education for All",
    items: [
      "Scholarships for deserving students",
      "Distribution of educational materials",
      "Support for rural and underprivileged learners",
    ],
  },
  {
    title: "Teacher Appreciation",
    items: [
      "Teacher Excellence Awards",
      "Teachers' Day celebrations",
      "Recognition of outstanding educators",
    ],
  },
  {
    title: "Student Development",
    items: [
      "Career guidance programs",
      "Skill development workshops",
      "Mentorship and academic support",
    ],
  },
  {
    title: "Research & Innovation",
    items: [
      "Support for research activities",
      "Innovation and project challenges",
      "Academic collaboration opportunities",
    ],
  },
  {
    title: "Community Service",
    items: [
      "Educational outreach programs",
      "Donation and support drives",
      "Community upliftment initiatives",
    ],
  },
  {
    title: "Women & Youth Empowerment",
    items: [
      "Skill development for youth",
      "Leadership and empowerment programs",
      "Inclusive education initiatives",
    ],
  },
];

export const foundationRelaunchEvents = [
  "Teacher Excellence Awards",
  "Student Scholarships & Awards",
  "Distribution of Educational Materials",
  "Awareness & Inspiration Sessions",
  "Foundation Membership Launch",
];

/** Hero slides — landscape Assets only (3:2 frame) */
export const heroSlides = [
  {
    image: "/images/hero-office-cover.webp",
    headline: "Shaping Students. Building Futures.",
    subheading: "Dr. Pillareddy Vamsheedhar Reddy",
    role: "Associate Professor · CSE (AI & ML) · KMEC",
    supporting:
      "Over 14 years of teaching, a Ph.D. in Cloud Computing from VIT University, and research spanning fog–cloud systems, deep learning, IoT, and cybersecurity.",
    size: "cover" as const,
  },
  {
    image: "/images/hero-iot-faculty.webp",
    headline: "Mentoring Through Practice",
    subheading: "Labs · Workshops · Student projects",
    role: "CSE (AI & ML) · Hands-on learning at KMEC",
    supporting:
      "Organizing and delivering IoT workshops while mentoring undergraduate and postgraduate students in intelligent computing.",
    size: "cover" as const,
  },
  {
    image: "/images/hero-ai-applications.webp",
    headline: "Academic Excellence with Integrity",
    subheading: "Research · Mentorship · Leadership",
    role: "22+ publications · 4 patents · Senior Member, IEEE & IAENG",
    supporting:
      "Contributing to research, innovation, and academic excellence through teaching, publications, and professional service.",
    size: "cover" as const,
  },
];

export const experience = [
  {
    org: "Keshav Memorial Engineering College",
    role: "Associate Professor",
    dept: "CSE – AI & ML",
    period: "Aug 2023 – Present",
  },
  {
    org: "VIT-AP University",
    role: "Full-time Research Scholar (Ph.D.)",
    dept: "School of Computer Science and Engineering · Cloud Computing",
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
    degree: "Ph.D. in Cloud Computing (Full-time)",
    school: "VIT University (VIT-AP), Amaravati",
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

/** Submitted and funded research proposals — add entries as they are finalized */
export const researchProposals: {
  title: string;
  agency: string;
  status: string;
  year: string;
  role?: string;
  description?: string;
}[] = [];

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
    title: "Ugyan-2025 gathering",
    detail: "Faculty and students together at the Ugyan-2025 academic celebration.",
    image: "/images/event-ugyan-group.webp",
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
  "Fog Computing",
  "Cloud Computing",
  "Deep Learning",
  "Internet of Things (IoT)",
  "Cybersecurity",
  "Task & Workflow Scheduling",
];

/** @deprecated use featuredAwards */
export const awards = featuredAwards;
