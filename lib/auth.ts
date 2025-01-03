"use server";

import { cookies } from "next/headers";

export async function isLogged() {
  const cookie = (await cookies()).get("student");
  if (cookie && JSON.parse(cookie.value)?.jamiaNo) {
    return true;
  }
  return false;
}
