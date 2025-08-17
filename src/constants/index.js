import {
  ps19,
  blog,
  chat,
  cloud,
  Elearning,
  expenses,
  hotel,
  doctor,
  task,
  shop,
  job,
  deloitte,
  abes,
  salesforce,
  udemy,
  greatlearning,
  edu1,
  edu2,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
} from "react-icons/si";

import {

  FaNode,

} from "react-icons/fa";

import { DiCss3, } from "react-icons/di";
export const CVLink = "https://drive.google.com/file/d/1Jx9kxtPok1lOaUlv38978Y70X6aZNWWI/view";
export const repoLink = "https://github.com/umairazmat/personal-portfolio";
export const profileLink = "https://www.linkedin.com/in/shobhit-sharma-198930278/"
export const callToAction = "https://www.linkedin.com/in/shobhit-sharma-198930278/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here

export const educationList = [
  {
    id: "education-1",
    icon: edu2,
    title: "Dr. A.P.J Abdul Kalam Technical University",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "Aug 2021 - June 2025",
    content1: "Specialization: Full Stack Development, Cybersecurity, Cloud",
    content2: "Location: Ghaziabad, UP, India",
  },
  {
    id: "education-2",
    icon: edu1,
    title: "Board of High School and Intermediate, UP",
    degree: "12th (PCM)",
    duration: "2020 - 2021",
    content1: "Major Subjects: Physics, Chemistry, Mathematics",
    content2: "Grade: Second Division"
  },
  {
    id: "education-3",
    icon: edu1,
    title: "Board of High School and Intermediate, UP",
    degree: "10th (All Subject)",
    duration: "2018 - 2019",
    content1: "Major Subjects: SST, Sanskrit, Science, Mathematics",
    content2: "Grade: First Division"
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },

      {
        id: "pl-6",
        icon: SiTypescript,
        name: "Typescript",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "f-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-4",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },

      {
        id: "f-5",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "f-6",
        icon: FaNode,
        name: "Node.js",
      },
      {
        id: "f-7",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "f-8",
        icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-8",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-9",
        icon: SiVercel,
        name: "Vercel",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Freelancing",
    logo: ps19,
    positions: [
      {
        title: "Full Stack Web Developer",
        duration: "Jan 2025 – Jul 2025 ",
        content: [
          { text: "➾ Built a hotel booking platform with secure reservations and guest reviews." },
          { text: "➾ Integrated AWS S3 for image uploads and optimized performance (35% faster load)." },
          { text: "➾ Gained strong frontend-backend expertise with React, Node.js, and MongoDB." },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Doctor Appointment Booking System",
    github: "https://github.com/shobhit7098",
    link: "",
    image: doctor, // replace with asset
    content:
      "A healthcare app where patients can book appointments, doctors manage schedules, and admins track the system. Implemented JWT authentication, secure file storage via AWS S3, and a scalable backend with Node/Express.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-2",
    title: "E-commerce Shopping Website",
    github: "https://github.com/shobhit7098",
    link: "",
    image: shop,
    content:
      "A full-stack shopping platform with product listing, cart, and secure checkout. Integrated Stripe/Razorpay payments, admin dashboard, and real-time order management with JWT-secured APIs.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-3",
    title: "Hotel Booking & Reservation System",
    github: "https://github.com/shobhit7098",
    link: "",
    image: hotel,
    content:
      "Hotel booking system with real-time room availability, guest reviews, and email confirmation. Built with MERN stack and optimized queries for fast search & filtering.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "icon-3", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-4",
    title: "Blog Management System",
    github: "https://github.com/shobhit7098",
    link: "",
    image: blog,
    content:
      "CMS-like blogging app with CRUD operations, role-based access (Admin, Editor, Reader), and SEO-optimized URLs. Integrated Cloudinary for image hosting and JWT for secure authentication.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-5",
    title: "Real-time Chat Application",
    github: "https://github.com/shobhit7098",
    link: "",
    image: chat,
    content:
      "A secure chat app supporting 1-to-1 and group chat. Features include live typing indicators, online/offline status, and real-time messaging powered by Socket.IO and JWT.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-6",
    title: "Task Management Dashboard",
    github: "https://github.com/shobhit7098",
    link: "",
    image: task,
    content:
      "A Trello-like Kanban dashboard with drag-and-drop tasks, team collaboration, and real-time updates. Built with MERN and optimized for enterprise productivity.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "icon-3", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },

  {
    id: "project-7",
    title: "Cloud Storage Security App",
    github: "https://github.com/shobhit7098",
    link: "",
    image: cloud,
    content:
      "A secure file storage app with AES encryption, user-specific JWT authentication, and metadata-only storage in MongoDB. Integrated with AWS S3 for scalability.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-8",
    title: "Job Portal",
    github: "https://github.com/shobhit7098",
    link: "",
    image: job,
    content:
      "A job portal like LinkedIn/Indeed with role-based dashboards (Employer, Job Seeker, Admin). Features include resume uploads, job filtering, and application tracking.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-9",
    title: "Online Learning Platform (LMS)",
    github: "https://github.com/shobhit7098",
    link: "",
    image: Elearning,
    content:
      "An e-learning platform where instructors host courses, students enroll, and payments are handled securely via Stripe. Includes quizzes, progress tracking, and responsive UI.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-10",
    title: "Expense Tracker with Analytics",
    github: "https://github.com/shobhit7098",
    link: "",
    image: expenses,
    content:
      "Personal finance tracker with CRUD for transactions, categorized expenses, and an analytics dashboard using Chart.js. Fully secured with JWT authentication.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
      { id: "icon-5", icon: SiChartdotjs, name: "Chart.js" },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Deloitte",
    title: "Cybersecurity Virtual Experience",
    duration: "2025",
    content: [
      {
        text: "Completed Deloitte Cybersecurity Virtual Experience focusing on risk analysis, threat detection, and data protection.",
      },
      {
        text: "Worked on simulated real-world case studies related to incident response and vulnerability assessment.",
      },
      {
        text: "Gained knowledge of key cybersecurity practices including governance, compliance, and security frameworks.",
      },
    ],
    logo: deloitte, // add Deloitte logo
  },

  {
    id: 2,
    organisation: "Salesforce (Honeywell)",
    title: "CRM & Cloud Professional Training",
    duration: "2024",
    content: [
      {
        text: "Completed Salesforce (Honeywell) training focused on CRM solutions, automation, and cloud integration.",
      },
      {
        text: "Learned to manage customer data, build workflows, and integrate third-party applications.",
      },
      {
        text: "Explored hands-on projects for real-world application of Salesforce modules.",
      },
    ],
    logo: salesforce, // add Salesforce/Honeywell logo
  },

  {
    id: 3,
    organisation: "Udemy",
    title: "React Development Course",
    duration: "2024",
    content: [
      {
        text: "Completed React Development training on Udemy with hands-on projects.",
      },
      {
        text: "Mastered React fundamentals, hooks, state management, and component lifecycle.",
      },
      {
        text: "Built modern, responsive web applications with reusable UI components.",
      },
    ],
    logo: udemy, // add Udemy logo
  },

  {
    id: 4,
    organisation: "ABES Engineering College",
    title: "Participation in Coding Test",
    duration: "2023",
    content: [
      {
        text: "Participated in ABES Coding Test, demonstrating competitive programming and problem-solving skills.",
      },
      {
        text: "Solved algorithmic and logical challenges under timed constraints.",
      },
      {
        text: "Enhanced analytical thinking and coding accuracy through live participation.",
      },
    ],
    logo: abes, // add ABES logo
  },

  {
    id: 5,
    organisation: "Great Learning",
    title: "JavaScript Programming Certificate",
    duration: "2023",
    content: [
      {
        text: "Earned JavaScript Programming Certificate from Great Learning.",
      },
      {
        text: "Learned fundamentals of ES6+, DOM manipulation, and asynchronous JavaScript.",
      },
      {
        text: "Implemented real-time projects focusing on web interactivity and performance.",
      },
    ],
    logo: greatlearning, // add Great Learning logo
  },

];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/shobhit-sharma-198930278/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/shobhit7098",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sharma.shobhit7060@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Shobhit Sharma",
  githubUsername: "shobhit7098",
  tagLine: `
  Full Stack Developer (MERN) | 
  Cloud & Cybersecurity Enthusiast | 
  GenAI & Blockchain Explorer | 
  Software Engineer (Fresher) | 
  Python & Java Developer | 
  TechnoHacks Certified | 
  DSA & LeetCode Practice | 
  Research Projects (AI, IoT, Cloud Security) | 
  Open Source Contributor
  `,
  intro: "Software Developer from Uttar Pradesh who loves building secure, scalable applications and exploring AI, Blockchain, and Cloud technologies."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];
