import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { students } from "@/data/students";
import { programsList } from "@/data/programlist";
import { programs } from "@/data/programs";

export async function POST(req: NextRequest) {
  try {
    // jsonFilePath = path.join(process.cwd(), "data", "programlist.json");
    // fileContents = fs.readFileSync(jsonFilePath, "utf8");
    // const programs = JSON.parse(fileContents);
    // Process the request body and users data here
    // Extract the jamiaId from the request body

    // Write the updated students array back to the file

    const { jamiaId } = await req.json();
    if (!jamiaId) {
      throw new Error("Jamia id missing");
    }
    const student = students.find((student) => student.jamiaNo == jamiaId);

    if (student) {
      const stdPrograms: any[] = [];
      programsList.forEach((list) => {
        if (list.student == jamiaId) {
          const program = programs.find((prgrm) => prgrm.id == list.program);
          if (program) {
            stdPrograms.push({
              name: program.name,
              id: program.id,
              isGroup: program.isGroup,
            });
          }
        }
      });
      return NextResponse.json({
        status: true,
        student,
        programs: stdPrograms,
        message: "Login Succesfull",
      });
    } else {
      throw new Error("Student not found");
    }
  } catch (error: any) {
    return NextResponse.json({
      status: false,
      message: error?.message || error || "Something went wrong",
    });
  }
}
