import { IService } from "./type";
import { ISkill } from "./type";

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
