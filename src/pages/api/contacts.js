import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "notsoocool",
        link: "https://github.com/notsoocool",
      },
      {
        medium: "email",
        username: "vyasyajuhs@gmail.com",
        link: "mailto:vyasyajush@gmail.com",
      },
      {
        medium: "Instagram",
        username: "__vyas.ji__",
        link: "https://www.instagram.com/__vyas.ji__/",
      },
      {
        medium: "linkedin",
        username: "yajush",
        link: "https://www.linkedin.com/in/yajush-vyas-9465261b4/",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
