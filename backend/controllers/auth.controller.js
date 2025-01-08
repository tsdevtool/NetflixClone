import { User } from "../models/user.model.js";
import bcriptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";
export const signup = async (req, res) => {
  try {
    const { email, password, username, displayName } = req.body;

    if (!email || !password || !username || !displayName) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields" });
    }

    const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status.json({ success: false, message: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const existingUserByEmail = await User.findOne({ email: email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    const existingUserByUsername = await User.findOne({ username: username });
    if (existingUserByUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const salt = await bcriptjs.genSalt(10);
    const hashedPassword = await bcriptjs.hash(password, salt);

    const image = `https://avatar.iran.liara.run/username?username=${displayName}`;

    const newUser = new User({
      displayName,
      email,
      password: hashedPassword,
      username,
      image,
    });

    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();
    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (error) {
    console.log("Error in signup controller");
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export async function login(req, res) {
  res.send("Login server");
}

export async function logout(req, res) {
  res.send("Logout server");
}
