import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "Sleep Tight",
        description:
          "Created a python script to automatically attend online classes on Google Meet and Zoom. Winner of API Hacks 2020",
        stack: ["Python"],
        link: "https://enship-club.github.io/",
        image: "enship.jpeg",
        largeImage: "enship-lg.png",
        year: "2020",
      },
      {
        name: "Smart Mirror",
        description:
        "Designed and built a smart mirror using a Raspberry Pi and a two-way mirror.",
        stack: ["JavaScript", "HTML", "CSS"],
        link: "https://new-delhi-space-society.github.io/",
        image: "ndss.png",
        largeImage: "ndss-lg.png",
        year: "2020",
      },
      {
        name: "Portfolio Art Website",
        description:
          "A website to showcase art and photography portfolios",
        stack: ["React", "NextJS", "tailwindcss"],
        link: "https://cognizer.kavin.me/",
        image: "cognizer.png",
      },
      {
        name: "Music Recommendation System",
        description:
          "A music recommendation system using the Spotify API and the K-Means Clustering Algorithm",
        stack: ["Spotify API", "Python", "K-Means"],
        link: "https://exunclan.com",
        image: "exun.png",
      },
      {
        name: "Cleaning Robot",
        description:
          "An ardunio based cleaning robot that can be controlled using a mobile app",
        stack: ["Arduino", "C++"],
        link: "https://github.com/kavinvalli/core-cbse-rebrand-2021",
        image: "cbse.png",
      },
      {
        name: "ShreIT APP",
        description:
          "A python app to share files between devices on the same network",
        stack: ["Python"],
        link: "https://task-manager-bot.github.io",
        image: "task-bot.png",
      },
      {
        name: "Rock Paper Scissors",
        description:
          "A Rock Paper Scissors game made using python and keras",
        stack: ["Python", "Keras"],
        link: "https://github.com/kavin25/koolkidsexun",
        image: "kke.jpeg",
      },
      {
        name: "Cricket VSCode Extension",
        description:
          "A VSCode Extension to show Cricket News and LiveScores from inside the editor",
        stack: ["Javascript"],
        link: "https://github.com/kavin25/cricket-vscode-extension",
        image: "cricket-vscode.png",
      },
      {
        name: "URL Shortener",
        description:
          "A URL Shortener written in NodeJS and Express with MongoDB",
        stack: ["Javascript", "NodeJS", "Express"],
        link: "https://github.com/kavin25/url-shortener",
        image: "url.png",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
