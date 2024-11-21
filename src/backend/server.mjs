// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import axios from "axios";
// import dotenv from "dotenv";

// const app = express();
// dotenv.config();

// app.use(cors());
// app.use(bodyParser.json());

// app.post(async (req, res) => {
//   let translations = await axios.post(
//     "/translate",
//     `https://translation.googleapis.com/language/translate/v2?key=${process.env.API_KEY}&q=hello&target=hi`
//     // `https://translation.googleapis.com/language/translate/v2?key=${process.env.API_KEY}&q=${req.body.text}&target=hi`
//   );
//   res.json(translations.data.data);
// });

// app.listen(3001, () => {
//   console.log("server is running");s
// });
