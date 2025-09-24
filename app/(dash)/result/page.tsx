import Navig from "@/component/footer/Navigation";
import Campuspoints from "@/component/Teamstatus/Campuspoints";
import ItemResult from "@/component/Teamstatus/Results";
import axios from "axios";
export const dynamic = "force-dynamic";
export default async function Page() {
  let programs: any = [];
  await axios
    .get(
      // "https://rendezvous.abaqas.in/campusprograms/action.php?status=announced&campusId=JM003&action=pagination&page=1&limit=18t"
    )
    
    .then((res) => {
      programs = res?.data?.data || [];
      console.log(res.data.data);
      
    })
    .catch((err) => {
      console.log(err);
      programs = [];
    });

  return (
    <div>
      <Campuspoints/>
      <ItemResult announced={programs} />
      <Navig />
    </div>
  );
}
