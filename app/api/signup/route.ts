import bcrypt from "bcrypt";
import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const usersFilePath = path.join(process.cwd(), "data/users.json");

export async function POST(req: Request) {
   try {
      const body = await req.json();
      const { username, password } = body;

      // Check if the username already exists
      const usersData = await fs.readFile(usersFilePath, "utf-8");
      const users = JSON.parse(usersData);
      const existingUser = users.find(
         (user: any) => user.username === username
      );
      if (existingUser) {
         return new NextResponse("Username already exists", { status: 400 });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = {
         username,
         password: hashedPassword,
      };

      // Add the new user
      users.push(user);

      // Write the updated users back to the file
      await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

      return new NextResponse(
         "User registered successfully." + JSON.stringify(user),
         {
            status: 201,
         }
      );
   } catch (error) {
      console.error("[USER_POST]", error);
      return new NextResponse("Internal error" + error, { status: 500 });
   }
}
