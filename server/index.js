import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User.js";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json("Hi there");
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/register", async (req, res) => {
  try {
    const { name, email, password, repassword } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email is already used" });
    }

    if (password === repassword) {
      const hashedpassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedpassword });
      await newUser.save();
      console.log("User registered Successfully");
      res.status(200).json({ message: "User registered successfully" });
    } else {
      res.status(400).json({ error: "password do not match" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internral server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(500).json({ error: "User is not registerd" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (isPasswordMatch) {
      console.log("user loged successfully");
      res.status(200).json({ message: "User loged successfully" });
    } else {
      console.log("enter valid password");
      res.status(401).json({ error: "Enter valid password" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal Server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is started");
});
