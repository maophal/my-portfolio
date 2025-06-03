import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import SkyAngkor from "@/public/my-project/skyangkor.png"
import AAndP from "@/public/my-project/a-and-p.png";
import DGT   from "@/public/my-project/dgt.png"
import AirTimes from "@/public/my-project/airtimes.png";
import PAAIS from "@/public/my-project/paais.png";
import PANACEACOIN from "@/public/my-project/panacea-wallet.jpg";
import HANCOOKFOOD from "@/public/my-project/hancook.png";
import k24Hlottery from "@/public/my-project/k24h-lottery.png";
import k24HlotterySystem from "@/public/my-project/k24h-lottery-sytem.png";
import DIGIPOS from "@/public/my-project/digi-pos-cloud.png";
import YUANTA from "@/public/my-project/yuanta.png";
import BaitongHotel from "@/public/my-project/baitonghotel.png";
import DANBUILD from "@/public/my-project/danbuild.png";
import UK24trading from "@/public/my-project/uk24.jpg";
import SlotGame from "@/public/my-project/slot_game.jpg";
import PANACEACOINEXPORER from "@/public/my-project/panacea-explorer.jpg";
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
    title: "Senior Full-Stack Developer",
    location: "Melose Co.,LTD",
    description:
      "i working verify hard at Melose. and learn a lot from that warming work place.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Middle Senior Full-Stack Developer",
    location: "Mylekha Co.,LTD",
    description:
      "i working verify hard at Mylekha. and learn a lot from that warming work place.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Junior Web Developer",
    location: "Mylekha Co.,LTD",
    description:
      "i working as Junior web developer at Mylekha. and learn a lot from that warming work place.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
    {
    title: "Inership Web Developer",
    location: "NTL Technology",
    description:
      "i working  as front-end developer at NTL Technology. and learn a lot from that warming work place.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  }
] as const;

export const projectsData = [
  {
    title: "Sky Angkor Airlines",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["HTML", "CSS", "PHP", "Mysql"],
    imageUrl: SkyAngkor,
  },
  {
    title: "A&P Accounting",
    description:
      "I worked as a full-stack developer on this A&P Accounting project",
    tags:  ["HTML", "CSS", "PHP", "Mysql"],
    imageUrl: AAndP,
  },
  {
    title: "គ្រូបង្រៀនឌីជីថល",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Reactjs", "Laravel", "Mysql", "Tailwind", "Socket.io"],
    imageUrl: DGT,
  },
    {
    title: "Paais Travel Exporer",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Vuejs", "Codeigniter", "Mysql", "Radis", "HTML", "Bootstrap4"],
    imageUrl: PAAIS,
  },
  {
    title: "Airtimes ",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Vuejs", "Laravel 7", "Mysql", "Radis", "HTML", "Bootstrap5"],
    imageUrl: AirTimes,
  },
  {
    title: "Panacea Coin",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Nodejs", "Reactjs", "Mysql", "Tailwind"],
    imageUrl: PANACEACOIN,
  },
    {
    title: "Panacea Exporer",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Nodejs", "Reactjs", "Mysql", "Tailwind"],
    imageUrl: PANACEACOINEXPORER,
  },
    {
    title: "Hancook Food",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Laravel 9", "Next.js", "Mysql", "Tailwind","Nextjs"],
    imageUrl: HANCOOKFOOD,
  },
    {
    title: "K24h Lottery",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Reactjs", "Laravel 9", "Mysql", "Tailwind"],
    imageUrl: k24Hlottery,
  },
    {
    title: "K24h Lottery System",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
     tags: ["Reactjs", "Laravel 10", "PostgreSQL", "Tailwind","Prisma","Socket.io","Redis Cache"],
    imageUrl: k24HlotterySystem,
  },
    {
    title: "Dan's Build",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind"],
    imageUrl: DANBUILD,
  },
    {
    title: "Slot Machine Provider System",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Nodejs", "Next.js", "Mysql", "Tailwind", "Prisma","Canvas","createjs"],
    imageUrl: SlotGame,
  },
    {
    title: "Uk24 trading platform",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Mysql", "Bootstrap5", "Framer","Laravel 8"],
    imageUrl: UK24trading,
  },
    {
    title: "Digi POS Cloud Saas solution",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Reactjs", "Nodejs", "Mysql", "Tailwind","Radis Cache"],
    imageUrl: DIGIPOS,
  },
  {
    title: "Yuanta Securities (Cambodia) Plc.",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["HTML", "CSS", "Mysql", "Bootstrap4", "PHP"],
    imageUrl: YUANTA,
  },
  {
    title: "Batong Hotel & Resort",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Laravel 10", "HTML", "CSS", "Tailwind", "Bootstrap5"],
    imageUrl: BaitongHotel,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
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
  "PostgreSQL",
  "Bootstrap",
  "Nestjs",
  "Socket.io",
  "Radis Cache",
  "Codeigniter",
  "ubuntu",
  "Linux",
  "Cloudflare",
  "cloudinary",
  "Cloud Hosting",
  "Master WHM and Cpanel"
  
] as const;
