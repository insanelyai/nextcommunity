import mongoose from "mongoose";
import { connect } from "@/DbConnect/DbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/usermodel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(NextRequest) {
  try {
    const request = await NextRequest.json();

    const { email, password } = request;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          message: "Ops! No account fouund with email: " + email,
        },
        { status: 401 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        { message: "Ops! Invalid password" },
        { status: 401 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "7d",
    });

    const response = NextResponse.json({
      message: "Login Successfully",
      success: true,
    });

    response.cookies.set("UAT", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
