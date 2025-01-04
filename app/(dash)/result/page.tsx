import Navig from "@/component/footer/Navigation";
import Campuspoints from "@/component/Teamstatus/Campuspoints";
import ItemResult from "@/component/Teamstatus/Results";
import axios from "axios";
export const dynamic = "force-dynamic";
export default async function Page() {
  let programs: any = [];
  await axios
    .get(
      "https://malikoptics.abaqas.in/workspace-backend/programs/action.php?action=pagination&all=1&status=announced"
    )
    .then((res) => (programs = res?.data?.data || []))
    .catch((err) => (programs = []));

  return (
    <div>
      {/* <Campuspoints/> */}
      <ItemResult announced={programs} />
      <Navig />
    </div>
  );
}
