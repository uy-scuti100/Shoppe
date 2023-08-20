import bcrypt from "bcrypt";
import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
const usersFilePath = path.join(process.cwd(), "data/users.json");

export async function POST(req: Request) {
   try {
      const body = await req.json();
      const { username, password } = body;

      // Read existing users from the file
      const usersData = await fs.readFile(usersFilePath, "utf-8");
      const users = JSON.parse(usersData);

      const user = users.find((user: any) => user.username === username);

      if (!user) {
         return new NextResponse("User not found.", { status: 404 });
      }

      const match = await bcrypt.compare(password, user.password);

      if (match) {
         return new NextResponse("Login successful.", { status: 200 });
      } else {
         return new NextResponse("Invalid credentials.", { status: 401 });
      }
   } catch (error) {
      return new NextResponse("An error occurred while logging in.", {
         status: 500,
      });
   }
}
