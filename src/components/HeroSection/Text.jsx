import { useState, useEffect } from "react";

const randomLetter = () => {
  const characters = "ⵉⴸⵍⴰⵓⵎⵗⵜⵔⵀⵜⵌⵈⵏⵙⴼⴳ";
  return characters.charAt(Math.floor(Math.random() * characters.length));
};

const Text = ({ text, clas, duration }) => {
  const data = Array.from(text);

  return (
    <div className="flex sm:space-x-1 md:space-x-2 lg:space-x-3 ">
      {data.map((letter, index) => {
        const [lettera, setlettera] = useState(letter);
        const [isEnded, setEnded] = useState(false);
        let value = Math.random() * 1500 + duration;

        useEffect(() => {
          let interval = setInterval(() => {
            setlettera(randomLetter());
          }, 85);
          setTimeout(() => {
            clearInterval(interval);
            setlettera(letter);
            setEnded(true);
          }, value);
        }, []);

        return (
          <div key={index} className="w-fit h-fit relative ">
            <h1 className={`${clas} `}>{lettera}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default Text;
