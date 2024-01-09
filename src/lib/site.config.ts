// Used to generate links in both the Header & Footer.
import { InstagramIcon, LinkedinIcon, Mail, LucideGithub } from "lucide-react";

export const menuLinks: Array<{ title: string; path: string }> = [
  {
  	title: "Experiences",
  	path: "#experiences",
  },
  {
  	title: "Projects",
  	path: "#projects",
  },
  {
  	title: "Contact",
  	path: "#contact",
  },
];

export const experiences = [
  {
    position: "Project Manager",
    organization: `Inkubator IT HMIF ITB`,
    period: "December 2022 - Present",
    description: [
      "Entrusted to tackle IT-based project by eliciting project requirements and assembling a development team to execute the project within scope, budget, and set timelines",
      "Managed a ticket sales tracker website and mobile application project with total valuation of Rp25 million rupiah; Worked with 3 programmers and 1 UI/UX designer for 4 months",
      "Contributed to more than 25% of Inkubator IT HMIF's projects spanning from final year tasks to complex Machine Learning models.",
    ],
    location: "Bandung, Indonesia",
  },
  {
    position: "Software Engineer",
    organization: `Arkavidia HMIF ITB`,
    period: "November 2022 - March 2023",
    description: [

    "Developed 20+ responsive and accessible user interfaces for Arkavidia's progressive web application using NextJS",
    "Successfully increased the total user of the application by 30% from initial target and decreased development time to 4 months",
    "Spearheaded the creation of admin and merchandise pages of the application, leveraged NextJS SSR feature to deliver responsive and feature-rich web pages.",
    ],
    location: "Bandung, Indonesia",
  },
];

export const project = [
  {
    title: "GasBall: Software Enginerring Final Task",
    description:
      "For Final Task of Software Engineering Course, I Developed a Full-stack Field Management Website using NextJS and Supabase. This is the most complex project I've ever developed since I have to build numerous use case for football field management. I've also integrate a simple CI/CD Pipeline using Github Actions with simple Test Unit using Jest. The website itself is deployed using Vercel and the database is deployed on Supabase Server connected using REST API.",
    image: "/images/gasball.webp",
    year: "2023",
    tech: ["NextJS", "Supabase", "TailwindCSS", "Docker"],
    github: "https://github.com/DiziASP/gasball-deploy",
    demo: "https://gasball-corp.vercel.app/",
  },
  {
    title: "OnlyTrade: Microservice Project",
    description:
      "A Fullstack Web Application built using Codeigniter 4 and Tailwind CSS. This project is a part of my Integration System Technology Course's Final Task. This project was very demanding since I need to build two separate Application, one for handling the Management System (Single Service) and the E-Commerce Website (Monolithic) both built using Codeigniter 4. The project was initially deployed using Railway but has since been taken down due to insufficient credits",
    image: "/images/onlytrade.webp",
    year: "2023",
    tech: ["Codeigniter 4", "MariaDB", "TailwindCSS", "Docker"],
    github: "https://github.com/DiziASP/OnlyTrade-Single-Service",
  },
  {
    title: "API Performance Dashboard",
    description:
      "This project is the final task for Analysis and Design of System Performance Course. I developed a Monitoring Dashboard for API Performance using Prometheus, Grafana, and K6 using Docker. The main challenge of this project is to scrap the Resource Usage (Docker) hence I have to use NodeExporter for the NodeJS Backend and Vanilla Prometheus for the Docker CPU and Memory Usage",
    image: "/images/api.webp",
    year: "2023",
    tech: ["Prometheus", "Grafana", "K6", "Docker", "Express"],
    github: "https://github.com/DiziASP/tubes-apks-2023",
  },
  {
    title: "Arkavidia 8.0 Website",
    description:
      "This project is the official website for Arkavidia 8.0, an annual IT Competition held by HMIF ITB. I developed the website using NextJS with TypeScript and TailwindCSS. I also developed the website's admin panel using ReactJS and TailwindCSS. There is no picture provided since the event is already completed and the website has already been taken down",
    image: "https://placehold.co/319x169/webp?text=No%20Image",
    tech : ["NextJS", "TailwindCSS"],
    year: "2022",
    github: "https://github.com/arkavidia-hmif/arkavidia-frontend-8.0"
  },
  {
    title: "Rakata Website",
    description:
      "This project was built for Rakata ITB (ITB's eco-friendly and renewable energy vehicles extracurricular) Website. I developed the admin form using TinyMCE on top of ReactJS. It was my first time handling a professional project thanks to my senior whom invited me to help him on this project",
    image: "/images/rakata.webp",
    year: "2022",
    tech: ["ReactJS", "Express", "TinyMCE"],
    demo: "https://rakata.vercel.app/",
  },
];

export const links = [
  {
    title: "dizi.assyafadi.p@gmail.com",
    url: "mailto:dizi.assyafadi.p@gmail.com",
    icon: Mail,
  },
  {
    title: "Raden Dizi Assyafadi Putra",
    url: "https://www.linkedin.com/in/radendiziap/",
    icon: LinkedinIcon,
  },
  {
    title: "radendzzi_",
    url: "https://www.instagram.com/radendzzi_",
    icon: InstagramIcon,
  },
  {
    title: "DiziASP",
    url: "https://github.com/DiziASP",
    icon: LucideGithub,
  },
];