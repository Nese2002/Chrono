import tmd from "../../assets/ToolkitSection/TMD.webp";
import database from "../../assets/ToolkitSection/Database.webp";
import disguise from "../../assets/ToolkitSection/disguise.webp";
import ring from "../../assets/ToolkitSection/ring.webp";
import translator from "../../assets/ToolkitSection/Translator.webp";
import watch from "../../assets/ToolkitSection/Watch.webp";

const list = [
  {
    title: "Temporal Navigation Device",
    text: "A compact handheld device that serves as the central control unit for time travel. It allows users to set coordinates for specific time periods, ensuring precise temporal jumps. It also includes features like a temporal compass and a temporal chronometer for measuring time differentials",
    img: tmd,
    id: 0,
  },
  // {
  //   img: database,
  //   id:1,
  //   title: "Historical Database",
  //   text: "A vast repository of historical information and data, offering insights into different eras, events, and prominent figures. The database provides valuable context and background knowledge, allowing time travelers to better understand the social, cultural, and political landscapes of the time periods they visit",
  // },
  {
    img: translator,
    id: 1,
    title: "Language Translation Matrix",
    text: "A linguistic tool that enables real-time translation and interpretation in different historical languages. This matrix helps time travelers overcome language barriers and facilitates effective communication with individuals from different time periods, fostering cultural exchange and immersive experiences",
  },
  {
    title: "Historical Wardrobe",
    text: "A collection of period-appropriate clothing and accessories designed to help time travelers blend seamlessly into different eras. The wardrobe features meticulously recreated garments and styles that reflect the fashion trends of specific time periods, allowing travelers to immerse themselves fully in the cultural fabric of the past",
    img: disguise,
    id: 2,
  },
  {
    img: ring,
    id: 3,
    title: "Temporal Guardian Ring",
    text: "A remarkable device designed to ensure the safety and well-being of time travelers during their temporal expeditions. This advanced timepiece serves as a reliable companion, equipped with a unique emergency retrieval feature that brings the wearer back to their original timeline in times of unforeseen emergencies",
  },
  {
    img: watch,
    id: 4,
    title: "Temporal Navigator Watch",
    text: "An extraordinary timepiece designed to enhance the time travel experience by providing comprehensive and interactive maps of different historical eras. This innovative device combines cutting-edge technology with historical cartography to offer time travelers a visual guide through time",
  },
];
export default list;
