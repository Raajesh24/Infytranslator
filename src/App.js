import { useState } from "react";
// import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [language, setLanguage] = useState("");
  // const [placeHolder, setPlaceHolder] = useState("");

  const french = {
    ponumber: 1,
    podate: 1,
    description: "bonjour à tous",
    language: "French",
    languageCode: "fr",
  };
  const spanish = {
    ponumber: 1,
    podate: 1,
    description: "Hola a todas",
    languageCode: "es",
    language: "fr",
  };
  const chinese = {
    ponumber: 1,
    podate: "24/09/95",
    description: "Hola a todas",
    languageCode: "zh",
    language: "Chinese",
  };

  const handleSpanish = async () => {
    setLanguage(spanish.language);
  };
  const handleFrench = async () => {
    setLanguage(french.language);
  };
  const handleChinese = async () => {
    setLanguage(chinese.language);
  };

  const handleClick = async () => {
    let translation = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=AIzaSyAJiF_WFEQEWl57kWPae-VxwSnNknZvGAw&q=${text}&target=en`
    );

    console.log(translation.data.data.translations[0].translatedText);
    setTranslated(translation.data.data.translations[0].translatedText);
  };

  return (
    <div className="App" style={{ margin: "25%" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={handleSpanish}>Spanish to English</button>
        <button onClick={handleChinese}>Chinese to English</button>
        <button onClick={handleFrench}>French to English</button>
      </div>
      <h1>Translator</h1>
      <div style={{ display: "flex" }}>
        <textarea
          placeholder={language}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        &nbsp;&nbsp;&nbsp; &nbsp;
        <textarea placeholder="English" readOnly value={translated}></textarea>
      </div>
      <br />
      <div>
        <button onClick={handleClick}>Translate</button>
      </div>
      <div>{}</div>
    </div>
  );
}

export default App;
