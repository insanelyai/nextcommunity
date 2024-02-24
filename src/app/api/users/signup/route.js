import mongoose from "mongoose";
import { connect } from "@/DbConnect/DbConnect";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(NextRequest) {
  try {
    const request = await NextRequest.json();

    const { username, email, password } = request;

    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (user && user.email === email) {
      return NextResponse.json(
        {
          message: "User email already exists",
          success: false,
        },
        { status: 409 }
      );
    } else if (user && user.username === username) {
      return NextResponse.json(
        {
          message: "User username already exists",
          success: false,
        },
        { status: 409 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const addUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      addUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
