import jwt, { decode } from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataToken = (NextRequest) => {
  try {
    const token = NextRequest.cookies.get("UAT")?.value || "";
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decodedToken);
    return decodedToken.id;
  } catch (error) {
    console.log(error);
  }
};
