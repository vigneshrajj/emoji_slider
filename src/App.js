import "./styles.css";
import { useState, useEffect } from "react";
import { Slider } from "antd";
import "antd/dist/antd.css";

export default function App() {
  const [opac, setOpac] = useState();
  useEffect(() => {
    setOpac({
      zIndex: "3",
      width: "40vw",
      margin: "0",
      opacity: "0",
      position: "absolute"
    });
  }, []);
  const emojis = ["😥", "🙁", "😊", "🤩"];
  const emojiList = ["😥", "🙁", "😊", "🤩"];
  const emojiMap = emojiList.map((emoji) => {
    return <p>{emoji}</p>;
  });
  const [emojiVal, setEmojiVal] = useState(0);
  const [emojiMargin, setEmojiMargin] = useState(0);
  const ratingList = [
    { id: 0, emoji: "😥", value: "Bad" },
    { id: 1, emoji: "🙁", value: "Okay" },
    { id: 2, emoji: "😊", value: "Good" },
    { id: 3, emoji: "🤩", value: "Great" }
  ];
  const ratingMap = ratingList.map((rating) => {
    return (
      <div className="emojiItem">
        <p id={rating.id} className="emojiList">
          {rating.emoji}
        </p>
        <p
          id={rating.id}
          className={rating.id === emojiVal ? "rating emojiOverlap" : "rating"}
        >
          {rating.value}
        </p>
      </div>
    );
  });

  const emojiSlide = {
    width: emojiMargin + "vw"
  };

  const HandleSlide = (value) => {
    setEmojiVal(value);
    setEmojiMargin(value * (40 / 3));
  };

  return (
    <div className="Container">
      <div className="emojiContainer">
        <div className="ratingContainer">{ratingMap}</div>
        <div className="emojiOuter"></div>
        <label htmlFor="range" className="emojiSlide" style={emojiSlide}>
          <span className="emojis">{emojis[emojiVal]}</span>
        </label>
      </div>
      <Slider
        className="Input"
        value={emojiVal}
        min={0}
        max={3}
        step={1}
        onChange={HandleSlide}
        style={opac}
        tooltipVisible={false}
      />
    </div>
  );
}
