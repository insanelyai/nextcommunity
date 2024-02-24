import { getDataToken } from "@/helpers/getDataToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/usermodel";
import { connect } from "@/DbConnect/DbConnect";

connect();

export async function GET(NextRequest) {
  try {
    const UserId = await getDataToken(NextRequest);

    const user = await User.findById({ _id: UserId }).select("-password");

    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
