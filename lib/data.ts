import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import SkyAngkor from "@/public/my-project/skyangkor.png"
import AAndP from "@/public/my-project/a-and-p.png";
import DGT   from "@/public/my-project/dgt.png"
import AirTimes from "@/public/my-project/airtimes.png";
import PAAIS from "@/public/my-project/paais.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Web Developer",
    location: "Mylekha Co.,LTD",
    description:
      "i working verify hard at Mylekha. and learn a lot from that warming work place.",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Graduated Computer Scients",
    location: "CUS, Phnom Penh",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a junior developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Sky Angkor Air",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: SkyAngkor,
  },
  {
    title: "A&P Accounting",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: AAndP,
  },
  {
    title: "គ្រូបង្រៀនឌីជីថល",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
    {
    title: "Paais Travel Exporer",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: PAAIS,
  },
  {
    title: "Airtimes ",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: AirTimes,
  },
  {
    title: "Panacea Coin",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
    {
    title: "Hancook Food",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
    {
    title: "គ្រូបង្រៀនឌីជីថល",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
    {
    title: "គ្រូបង្រៀនឌីជីថល",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
    {
    title: "គ្រូបង្រៀនឌីជីថល",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
    {
    title: "Slot game",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
    {
    title: "Uk24 trading platform",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
    {
    title: "Digi POS Cloud system",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
    {
    title: "K24h",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
    {
    title: "Batong Hotel",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: DGT,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nestjs",
  "Tailwind CSS",
  "PHP",
  "Laravel",
  "Express.js",
  "Redux",
  "Git",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Laravel",
  "Express",
  "PostgreSQL",
  "Bootstrap",
  "Nestjs",
] as const;
