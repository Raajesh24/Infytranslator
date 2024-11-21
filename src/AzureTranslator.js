import React, { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("en"); // Default translation to English

  const apiKey =
    "6tPV60toj90N1iMe8Pc4Af5AuZMZDzUhCHRXbIr5wC3fQISr4eUXJQQJ99AKACULyCpXJ3w3AAAbACOGiLX7"; // Replace with your Azure API Key
  const endpoint = "https://api.cognitive.microsofttranslator.com/"; // Replace with your Azure Translator Endpoint
  const region = "Global"; // Replace with your Azure Region (e.g., "eastus")

  // Function to handle text change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Function to translate the text
  const translateText = async () => {
    try {
      const response = await axios.post(
        `${endpoint}/translate?api-version=3.0&to=${language}`,
        [
          {
            Text: text,
          },
        ],
        {
          headers: {
            "Ocp-Apim-Subscription-Key": apiKey,
            "Ocp-Apim-Subscription-Region": region,
            "Content-Type": "application/json",
          },
        }
      );

      const translated = response.data[0].translations[0].text;
      setTranslatedText(translated);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  return (
    <div>
      <h1>Microsoft Azure Translator</h1>

      <textarea
        value={text}
        onChange={handleTextChange}
        rows="5"
        placeholder="Enter text to translate"
      ></textarea>
      <br />
      {/* <h3>English: {language}</h3> */}
      {/* <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="pt">Portuguese</option>
        <option value="zh-Hans">Chinese</option>
      </select> */}
      <br />
      <button onClick={translateText}>Translate</button>
      <h2>Translated Text</h2>
      <p>{translatedText}</p>
    </div>
  );
};

export default Translator;
