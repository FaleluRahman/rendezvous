import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

interface Student {
  id: string;
  jamiaNo: string;
  name: string;
  category: string;
  campus: string;
  groupId: number;
  point: number;
}
export async function POST(req: NextRequest) {
  try {
    const jsonFilePath = path.join(process.cwd(), "data", "students.json");
    const fileContents = fs.readFileSync(jsonFilePath, "utf8");
    const students = JSON.parse(fileContents);
   
    // Process the request body and users data here
    const { jamiaId } = await req.json();
    if (!jamiaId) {
      throw new Error("Jamia id missing");
    }
    const student = students.find(
      (student: Student) => student.jamiaNo == jamiaId
    );

    if (student) {
      return NextResponse.json({
        status: true,
        student,
        message: "Login Succesfull",
      });
    } else {
      throw new Error("Studen not found");
    }
  } catch (error: any) {
    return NextResponse.json({
      status: false,
      message: error?.message || error || "Something went wrong",
    });
  }
}
