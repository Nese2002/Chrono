import egypt from "../../assets/DestinationSection/EgyptSelect.webp";
import rome from "../../assets/DestinationSection/RomeSelect.webp";
import middleAge from "../../assets/DestinationSection/MiddleageSelect.webp";
import epoque from "../../assets/DestinationSection/EpoqueSelect.webp";
import twenties from "../../assets/DestinationSection/1920Select.webp";
import future from "../../assets/DestinationSection/FutureSelect.webp";

const list = [
  null,
  {
    title: "Ancinet Egypt",
    text: "Spanning over 3,000 years, it is a captivating period known for its rich mythology, monumental architecture, and advanced civilization",
    background: "bg-backEgypt",
    id: 1,
    img: egypt,
  },
  {
    title: "Roman Empire",
    text: "It was an ancient state that ruled over most of Europe for centuries, it promoted art, literature and philosophy that enriched the cultural heritage of the western world",
    background: "bg-backRoma",
    id: 2,
    img: rome,
  },
  {
    title: "Middle Ages",
    text: "It was a long period of European history, in which there was The development of feudalism: a systems of land ownership and social hierarchy based on loyalty and service",
    background: "bg-backMiddleage",
    id: 3,
    img: middleAge,
  },
  {
    title: "Belle Époque",
    text: " It was marked by remarkable economic prosperity and joyful lifestyle for the upper classes, it witnessed many inventions and discoveries that changed the way people lived, such as electric lighting, radio, and cinema",
    background: "bg-backEpoque",
    id: 4,
    img: epoque,
  },
  {
    title: "1920s",
    text: "It was a decade of great changes and contrasts in the Western world, especially in the United States and Europe. It was a time of economic growth, technological innovation, cultural diversity, and social transformation",
    background: "bg-back1920",
    id: 5,
    img: twenties,
  },
  {
    title: "2090",
    text: "It is a place where technology, nature, and humanity coexist in harmony, and where people enjoy a high quality of life, thanks to the advances in science, medicine, engineering, and ecology",
    background: "bg-backFuture",
    id: 6,
    img: future,
  },
];
export default list;
