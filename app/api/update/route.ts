import bcrypt from "bcrypt";
import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
const usersFilePath = path.join(process.cwd(), "data/users.json");

export async function PATCH(req: Request) {
   try {
      const body = await req.json();
      const { username, password, newUsername, newPassword } = body;
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

      // Read existing users from the file
      const usersData = await fs.readFile(usersFilePath, "utf-8");
      const users = JSON.parse(usersData);

      // Find the user to update
      const userIndex = users.findIndex(
         (user: any) => user.username === username
      );
      if (userIndex === -1) {
         return new NextResponse("User not found", { status: 404 });
      }

      // Update username and/or password
      if (newUsername) {
         users[userIndex].username = newUsername;
      }
      if (newPassword) {
         users[userIndex].password = hashedNewPassword;
      }

      // Write the updated users back to the file
      await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

      return new NextResponse("User updated successfully.", { status: 200 });
   } catch (error) {
      console.log("[USER_PATCH]", error);
      return new NextResponse("Internal error" + error, { status: 500 });
   }
}
