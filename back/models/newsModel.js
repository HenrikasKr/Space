const mongoose = require("mongoose");

// DB schema
const newsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  article: {
    type: String,
  },
});

// Modelis DB lentelės pavadinimas
const News = new mongoose.model("News", newsSchema);

// Duomenų siuntimas į DB
// const testNews = new News({
//   title: "SpaceX Launch",
//   content: "SpaceX launches its first space shuttle",
//   image: "https://www.teslarati.com/wp-content/uploads/2022/07/spacex-Ptd-iTdrCJM-unsplash-scaled.jpeg",
//   article: "https://www.teslarati.com/spacex-and-mattel-create-rocket-ship-toys/",
// });

// testNews.save();

module.exports = News;
