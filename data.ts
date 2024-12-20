import { IService } from "./type";
import { ISkill } from "./type";
import { IProject } from "./type";

export const services: IService[] = [
  {
    title: "Frontend Development",
    about:
      "I build responsive, user-friendly interfaces using <b>React</b>, <b>JavaScript</b>, <b>CSS</b>, <b>Next.js</b>, <b>TypeScript</b>, <b>Tailwind</b> to create visually appealing and accessible applications tailored to user needs.",
  },
  {
    title: "Backend Development",
    about:
      "I develop secure and scalable server-side systems using <b>JavaScript</b>, <b>MySQL</b> and <b>Express</b>, ensuring efficient performance and seamless integration with front-end applications.",
  },
  {
    title: "API Development",
    about:
      "I develop robust RESTful APIs that enable smooth communication between systems, using <b>Node API</b> to support scalability and integration.",
  },
  {
    title: "UX/UI Designer",
    about: "Stunning user interface designr using <b>Figma</b>.",
  },
];

export const languages: ISkill[] = [
  {
    name: "React",
    level: "90%",
  },
  {
    name: "JavaScript",
    level: "90%",
  },
  {
    name: "TypeScript",
    level: "70%",
  },
  {
    name: "Next.js",
    level: "70%",
  },
  {
    name: "MySQL",
    level: "90%",
  },
  {
    name: "Express",
    level: "85%",
  },
];

export const tools: ISkill[] = [
  {
    name: "GitHub Actions (CI/CD)",
    level: "90%",
  },
  {
    name: "Azure DevOps",
    level: "70%",
  },
  {
    name: "Git",
    level: "95%",
  },
  {
    name: "Jira",
    level: "95%",
  },
  {
    name: "Figma",
    level: "70%",
  },
];

export const projects: IProject[] = [
  {
    name: "Vinilo app",
    description:
      "A full-stack social media platform for vinyl collectors to share their collections, connect with other enthusiasts through live messaging, and discover vinyl-related events and shows.",
    image_path: "/images/Demo_vinilo_mobile.png",
    deployed_url: "https://github.com/ariadnatoledo/ariadna-toledo-vinilo-capstone",
    GitHub_url: "https://github.com/ariadnatoledo/ariadna-toledo-vinilo-capstone",
    category: ["react", "node", "express", "MySQL"],
    key_techs: ["React", "MySQL", "Git", "Material UI", "Socket.IO", "Multer"],
  },
  {
    name: "INFRA",
    description:
      "Meta Challenge: How might we help Meta users adapt to AI innovations? Our team developed the Meta AI Button, an innovative educational tool designed to guide users in understanding the potential of AI in their personal and professional lives. The solution empowers users to explore AI's capabilities and benefits, fostering better adaptation to AI-driven advancements.",
    image_path: "/images/hackaton-infra-modal.png", 
    deployed_url: "https://github.com/ariadnatoledo/infra-industry-partner-hackathon",
    GitHub_url: "https://github.com/ariadnatoledo/infra-industry-partner-hackathon",
    category: ["react"],
    key_techs: ["React"],
  },
  {
    name: "In Stock",
    description:
      "InStock is a web application developed, designed to help businesses manage their inventory efficiently. The platform enables users to track stock levels, update inventory, and generate reports. With an intuitive interface and real-time updates, InStock streamlines inventory management, ensuring businesses stay organized and responsive to demand.",
    image_path: "/images/dashing-doves-instock.png", 
    deployed_url: "https://github.com/ariadnatoledo/dashing-doves-instock",
    GitHub_url: "https://github.com/ariadnatoledo/dashing-doves-instock",
    category: ["react", "MySQL", "express"],
    key_techs: ["React", "MySQL", "Git", "Express"],
  },
  {
    name: "Ariadna Toledo's Portfolio",
    description:
      "Welcome to my portfolio, featuring projects built with cutting-edge technologies and programming languages. Explore my work in full-stack development, data-driven apps, and innovative solutions focused on scalability and user experience.",
    image_path: "/images/dashing-doves-instock.png", 
    deployed_url: "https://github.com/ariadnatoledo/ariadna-toledo-portfolio",
    GitHub_url: "https://github.com/ariadnatoledo/ariadna-toledo-portfolio",
    category: ["Next.js", "TypeScript"],
    key_techs: ["Next.js", "TypeScript", "Tailwind"],
  },
];
