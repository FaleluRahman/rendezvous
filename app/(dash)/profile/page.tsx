import Navig from "@/component/footer/Navigation";
import Login from "@/component/Log/Login";
import Filter from "@/component/pro/Filter";
import StudentsLogin from "@/component/pro/Logask";
import Logout from "@/component/pro/Logout";
import Pdetails from "@/component/pro/Pdetails";
import Wallet from "@/component/pro/Wallet";
import { isLogged } from "@/lib/auth";
import React from "react";
export const dynamic = "force-dynamic";

const page = async () => {
  const logged = await isLogged();
  return (
    <div>
      {/* <StudentsLogin/> */}
      {logged ? (
        <>
          <Logout />
          <Pdetails />
          <Filter />
          <Wallet />
        </>
      ) : (
        <StudentsLogin />
      )}

    </div>
  );
};

export default page;
