import { MongoClient } from "mongodb";

const URI = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.o7blit8.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const name = req.body.name;
    if (!name || name.trim() === "") {
      res.status(422).json({ message: "Invalid name." });
      return;
    }

    const message = req.body.message;
    if (!message || message.trim() === "") {
      res.status(422).json({ message: "Invalid message." });
      return;
    }

    const bodyMessage = {
      email,
      name,
      message,
    };

    const client = new MongoClient(URI);
    try {
      await client.connect();
      const db = client.db();
      await db.collection("messages").insertOne(bodyMessage);
    } catch (err) {
      res.status(500).json({ message: err.message || "Something went wrong!" });
      return;
    } finally {
      await client.close();
    }

    res.status(201).json({ message: bodyMessage });
  }
}

export default handler;
