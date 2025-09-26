"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { LoaderCircle } from "lucide-react";

const ProgramData = [
  { id: "12", name: "POEM URDU", category: "senior" },
  { id: "23", name: "DISCUSSION URDU", category: "senior" },
  { id: "30", name: "QAWWALI", category: "senior" },
  { id: "32", name: "LECTURING ENGLISH", category: "senior" },
  { id: "43", name: "MASTER PLAN", category: "senior" },
  {
    id: "46",
    name: "KITHABIC RESEARCH (BOOK WRITING ARABIC)",
    category: "senior",
  },
  { id: "51", name: "BLURB WRITING ENGLISH", category: "senior" },
  { id: "56", name: "POEM ARABIC", category: "senior" },
  { id: "67", name: "ESSAY ARABIC", category: "senior" },
  { id: "69", name: "KATHAPRASANGAM MALAYALAM", category: "senior" },
  { id: "70", name: "RESEARCH PAPER ENGLISH", category: "senior" },
  { id: "74", name: "NEWS BULLETIN", category: "senior" },
  { id: "83", name: "STORY MALAYALAM", category: "senior" },
  { id: "85", name: "SPOKEN TRANSLATION MAL-ARB", category: "senior" },
  { id: "86", name: "IBARATH READING", category: "senior" },
  { id: "92", name: "HIFZUL MUTHOON", category: "senior" },
  { id: "95", name: "BOOK CRITICISM", category: "senior" },
  { id: "98", name: "STORY URDU", category: "senior" },
  { id: "104", name: "RESEARCH POSTER PRESENTATION", category: "senior" },
  { id: "106", name: "SPOKEN TRANSLATION MAL-ENG", category: "senior" },
  { id: "108", name: "JOURNAL REVIEW", category: "senior" },
  { id: "112", name: "BALAGA TEST", category: "senior" },
  { id: "120", name: "BOOK REVIEW", category: "senior" },
  { id: "123", name: "SHARIA TALK (ELOCUTION ARABIC)", category: "senior" },
  { id: "125", name: "MAS’ALA SOLUTION (IFTHA’)", category: "senior" },
  { id: "127", name: "POEM ENGLISH", category: "senior" },
  { id: "131", name: "TALENT TEST", category: "senior" },
  { id: "136", name: "HADITH TRANSLATION", category: "senior" },
  { id: "138", name: "DOCUMENTRY PRESENTATION", category: "senior" },
  { id: "139", name: "ELOCUTION MALAYALAM", category: "senior" },
  { id: "147", name: "ELOCUTION ENGLISH", category: "senior" },
  { id: "148", name: "STORY ARABIC", category: "senior" },
  { id: "149", name: "WRITTEN TRANSLATION MAL-URD", category: "senior" },
  { id: "152", name: "CALLIGRAFFITI", category: "senior" },
  { id: "153", name: "ESSAY ENGLISH", category: "senior" },
  { id: "156", name: "ESSAY URDU", category: "senior" },
  { id: "163", name: "PHILOSOPHICAL SLICE", category: "senior" },
  { id: "164", name: "SHARH WRITING (SHARHUL MUTHOON)", category: "senior" },
  { id: "166", name: "STORY ENGLISH", category: "senior" },
  { id: "168", name: "TRANSLATION DIALOGUE", category: "senior" },
  { id: "169", name: "MADH SONG", category: "senior" },
  { id: "170", name: "SOP WRITING", category: "senior" },
  { id: "174", name: "CHANNEL DISCUSSION", category: "senior" },
  { id: "182", name: "QASEEDA", category: "senior" },
  { id: "183", name: "ARCHITECTURAL PHOTOGRAPHY", category: "senior" },
  { id: "186", name: "ESSAY MALAYALAM", category: "senior" },
  { id: "191", name: "ELOCUTION URDU", category: "senior" },
  { id: "195", name: "POEM MALAYALAM", category: "senior" },
  { id: "197", name: "MAPPILAPPATTU RACHANA", category: "senior" },
  { id: "200", name: "TRILINGUAL TYPING", category: "senior" },
  { id: "215", name: "QUIZ", category: "senior" },
  { id: "218", name: "IDEAL DIALOGUE", category: "senior" },
  { id: "219", name: "GLOBAL DARS", category: "senior" },
  { id: "220", name: "PAPER PRESENTATION ENGLISH", category: "senior" },
  { id: "221", name: "BRANDING", category: "senior" },
  { id: "222", name: "TARTEEL", category: "senior" },
  { id: "223", name: "POEM MALAYALAM", category: "junior" },
  { id: "224", name: "MADH SONG WRITING", category: "junior" },
  { id: "225", name: "MICROPHOTOGRAPHY", category: "junior" },
  { id: "226", name: "FLASH FICTION ENGLISH", category: "junior" },
  { id: "227", name: "IMLA’", category: "premier" },
  { id: "228", name: "SWARF TEST", category: "minor" },
  { id: "229", name: "SOCIAL TWEET MALAYALAM", category: "subjunior" },
  { id: "230", name: "STORY ENGLISH", category: "junior" },
  { id: "231", name: "WORD GAME ARABIC (PADHAKKALARI)", category: "minor" },
  { id: "232", name: "STORY ENGLISH", category: "premier" },
  { id: "233", name: "STORY ENGLISH", category: "subjunior" },
  { id: "234", name: "ELOCUTION MALAYALAM", category: "premier" },
  { id: "235", name: "HIFZUL MUTHOON", category: "junior" },
  { id: "236", name: "ESSAY MALAYALAM", category: "junior" },
  { id: "237", name: "FEATURE WRITING", category: "junior" },
  { id: "238", name: "KITHABIC TEST", category: "junior" },
  { id: "239", name: " BALAGA TEST", category: "junior" },
  { id: "240", name: "DIARY WRITING HINDI", category: "minor" },
  { id: "241", name: "TARTEEL", category: "junior" },
  { id: "242", name: "DICTIONARY MAKING ARB- ENG", category: "subjunior" },
  { id: "243", name: "SWARF TEST", category: "subjunior" },
  { id: "244", name: "POEM ENGLISH", category: "junior" },
  { id: "245", name: "ELOCUTION MALAYALAM", category: "junior" },
  {
    id: "246",
    name: "WRITTEN TRANSLATION  ARABI MAL - MAL",
    category: "junior",
  },
  { id: "247", name: "VOCABULARY ARABIC", category: "premier" },
  { id: "248", name: "REEL CREATION", category: "junior" },
  { id: "249", name: "ELOCUTION ARABIC", category: "subjunior" },
  { id: "250", name: "POEM ENGLISH", category: "subjunior" },
  { id: "251", name: "STORY ARABIC", category: "junior" },
  { id: "252", name: "SPOKEN TRANSLATION MAL-ENG", category: "junior" },
  { id: "253", name: "BOOK CRITICISM", category: "junior" },
  { id: "254", name: "WRITTEN TRANSLATION MAL-URD", category: "junior" },
  { id: "255", name: "POEM ARABIC", category: "junior" },
  { id: "256", name: "CAMPUS SONG", category: "junior" },
  { id: "257", name: "CAPTION WRITING", category: "premier" },
  { id: "258", name: "STORY MALAYALAM", category: "junior" },
  { id: "259", name: "CALLIGRAPHY", category: "subjunior" },
  { id: "260", name: "HIFZUL QURAN", category: "subjunior" },
  { id: "261", name: "SOCIAL TWEET ENGLISH", category: "junior" },
  { id: "262", name: "TARTEEL", category: "minor" },
  { id: "263", name: "SPOKEN TRANSLATION MAL-ARB", category: "junior" },
  { id: "264", name: "HANDWRITING ENGLISH", category: "subjunior" },
  { id: "265", name: "QUIZ", category: "junior" },
  { id: "266", name: "STORY MALAYALAM", category: "minor" },
  { id: "267", name: "HIFZUL MUTHOON", category: "subjunior" },
  { id: "268", name: "CASE STUDY & SURVEY", category: "junior" },
  { id: "269", name: "BOOK TEST", category: "premier" },
  { id: "270", name: "IMLA’", category: "minor" },
  { id: "271", name: "MADH SONG", category: "minor" },
  { id: "272", name: "POEM MALAYALAM", category: "subjunior" },
  { id: "273", name: "ESSAY ARABIC", category: "junior" },
  { id: "274", name: "DOCUMENTARY PRESENTATION", category: "junior" },
  { id: "275", name: "DEVOTIONAL SONG", category: "premier" },
  {
    id: "276",
    name: "RISALA CREATION (BOOK WRITING ARABIC)",
    category: "junior",
  },
  { id: "277", name: "BOOK REVIEW", category: "junior" },
  { id: "278", name: "QUIZ", category: "premier" },
  { id: "279", name: "AD MAKING", category: "subjunior" },
  { id: "280", name: "NA’AT", category: "subjunior" },
  { id: "281", name: "PYGMY POEM ENGLISH", category: "minor" },
  { id: "282", name: "PYGMY POEM URDU", category: "premier" },
  { id: "283", name: "SUFI VIRUTHAM", category: "subjunior" },
  { id: "284", name: "ESSAY URDU", category: "subjunior" },
  { id: "285", name: "DIGITAL DRAWING", category: "junior" },
  { id: "286", name: "CARTOON SCAPE", category: "premier" },
  { id: "287", name: "IBARATH READING", category: "subjunior" },
  { id: "288", name: "TALK MASTER ARABIC", category: "premier" },
  { id: "289", name: "PUBLIC TALK", category: "subjunior" },
  { id: "290", name: "IBARATH READING", category: "premier" },
  { id: "291", name: "NASHEEDHA", category: "premier" },
  { id: "292", name: "WATERCOLORING", category: "minor" },
  { id: "293", name: "FIQH TRANSLATION  ARA- ENG", category: "junior" },
  { id: "294", name: "WATERCOLORING", category: "premier" },
  { id: "295", name: "WRITTEN TRANSLATION  MAL- ENG", category: "subjunior" },
  { id: "296", name: "PYGMY POEM ARABIC", category: "premier" },
  { id: "297", name: "ESSAY ENGLISH", category: "subjunior" },
  { id: "298", name: "BOOK TEST", category: "minor" },
  { id: "299", name: "KITHABIC TEST", category: "subjunior" },
  { id: "300", name: "ESSAY MALAYALAM", category: "minor" },
  { id: "301", name: "TED TALK", category: "junior" },
  { id: "302", name: "BOOK TEST", category: "subjunior" },
  { id: "303", name: "POEM ARABIC", category: "subjunior" },
  { id: "304", name: "HIFZUL QUR’AN", category: "minor" },
  { id: "305", name: "ESSAY MALAYALAM", category: "subjunior" },
  { id: "306", name: "LIVE EXTEMPORE", category: "junior" },
  { id: "307", name: "TARTEEL", category: "subjunior" },
  { id: "308", name: "HIFZUL QURAN", category: "premier" },
  { id: "309", name: "ESSAY ARABIC", category: "subjunior" },
  { id: "310", name: "TARTEEL", category: "premier" },
  { id: "311", name: "ELOCUTION MALAYALAM", category: "subjunior" },
  { id: "312", name: "TALK MASTER ARABIC", category: "minor" },
  { id: "313", name: "POEM URDU", category: "subjunior" },
  { id: "314", name: "WRITTEN TRANSLATION ENG - MAL", category: "premier" },
  { id: "315", name: "PROMPT CREATION", category: "junior" },
  { id: "316", name: "COLLOQUIUM", category: "junior" },
  { id: "317", name: "IMLA’", category: "subjunior" },
  { id: "318", name: "SWARF TEST", category: "premier" },
  { id: "319", name: "POEM ENGLISH", category: "premier" },
  { id: "320", name: "ESSAY ENGLISH", category: "minor" },
  { id: "321", name: "HIFZUL MUTHOON", category: "premier" },
  { id: "322", name: "ELOCUTION ARABIC", category: "premier" },
  { id: "323", name: "ESSAY URDU", category: "junior" },
  { id: "324", name: "NAHV TEST", category: "subjunior" },
  { id: "325", name: "STORY ARABIC", category: "subjunior" },
  { id: "326", name: "ELOCUTION MALAYALAM", category: "minor" },
  { id: "327", name: "GAZAL", category: "junior" },
  { id: "328", name: "POEM MALAYALAM", category: "minor" },
  { id: "329", name: "CALLIGRAFFITI", category: "junior" },
  { id: "330", name: "VA’ALU", category: "junior" },
  { id: "331", name: "HANDWRITING ENGLISH", category: "premier" },
  { id: "332", name: "QUIZ", category: "subjunior" },
  { id: "333", name: "IBARATH READING", category: "junior" },
  { id: "334", name: "TALENT TEST", category: "junior" },
  { id: "335", name: "ELOCUTION URDU", category: "junior" },
  { id: "336", name: "POEM URDU", category: "junior" },
  { id: "337", name: "ESSAY ENGLISH", category: "junior" },
  { id: "338", name: "STORY URDU", category: "junior" },
  { id: "339", name: "PHILOSOPHICAL SLICE", category: "junior" },
  { id: "340", name: "ESSAY MALAYALAM", category: "premier" },
  { id: "341", name: "STORY URDU", category: "subjunior" },
  { id: "342", name: "SONG ARABIC", category: "subjunior" },
  { id: "343", name: "ARABIC KATHAPRASANGAM", category: "junior" },
  { id: "344", name: "QUIZ", category: "minor" },
  { id: "345", name: "SHARHUL MUTHOON", category: "junior" },
  { id: "346", name: "STORY MALAYALAM", category: "subjunior" },
  { id: "347", name: "TALK MASTER ENGLISH", category: "premier" },
  { id: "348", name: "NAHV TEST", category: "premier" },
  { id: "349", name: "ALFIYA TEST", category: "junior" },
  { id: "350", name: "POEM MALAYALAM", category: "premier" },
  { id: "351", name: "ESSAY ENGLISH", category: "premier" },
  { id: "352", name: "JALSA ARABIC", category: "junior" },
  { id: "353", name: "STORY MALAYALAM", category: "premier" },
  { id: "354", name: "ELOCUTION ENGLISH", category: "minor" },
  { id: "355", name: "GROUP SONG", category: "minor" },
  { id: "356", name: "IBARATH READING", category: "minor" },
  { id: "357", name: "STORY ARABIC", category: "minor" },
  { id: "358", name: "WRITTEN TRANSLATION ENG-MAL", category: "minor" },
  { id: "359", name: "GRAMMAR MASTERY", category: "minor" },
  { id: "360", name: "MATHS RELAY", category: "minor" },
  { id: "361", name: "SUDOKU", category: "minor" },
  { id: "362", name: "PAPER PRESENTATION ENGLISH", category: "premier" },
  { id: "363", name: "SUDOKU", category: "premier" },
  { id: "364", name: "SHAIRI KALAM URDU", category: "subjunior" },
  { id: "365", name: "PAPER PRESENTATION ENGLISH", category: "subjunior" },
  { id: "366", name: "WORD GAME ARABIC (PADHAKKALARI)", category: "subjunior" },
  { id: "367", name: "MAPPILAPPATTU", category: "junior" },
  { id: "368", name: "PAPER PRESENTATION ENGLISH", category: "junior" },
  { id: "369", name: "NEWS READING", category: "junior" },
  { id: "370", name: "ABSTRACT WRITING", category: "junior" },
  { id: "371", name: "PODCAST", category: "junior" },
  { id: "372", name: "HANDWRITING ENGLISH", category: "minor" },
];

const itemPrizes: any = [
  {
    id: "12",
    data: [
      {
        id: 430,
        program: null,
        student: "Ameen Azeez",
        campus: "MASJID AL FATHAH",
        code: "B",
        grade: "null",
        rank: 3,
        point: "1",
      },
      {
        id: 429,
        program: null,
        student: "Rafi Sulaiman",
        campus: "MASJID AL FATHAH",
        code: "C",
        grade: "null",
        rank: 2,
        point: "2",
      },
      {
        id: 428,
        program: null,
        student: "SHIHABUDHEEN PK",
        campus: "MASJID AL FATHAH",
        code: "A",
        grade: "C",
        rank: 1,
        point: "4",
      },
    ],
  },
  {
    id: "30",
    data: [
      {
        id: 430,
        program: null,
        student: "Ameen Azeez",
        campus: "MASJID AL FATHAH",
        code: "B",
        grade: "null",
        rank: 3,
        point: "1",
      },
      {
        id: 429,
        program: null,
        student: "Rafi Sulaiman",
        campus: "MASJID AL FATHAH",
        code: "C",
        grade: "null",
        rank: 2,
        point: "2",
      },
      {
        id: 428,
        program: null,
        student: "SHIHABUDHEEN PK",
        campus: "MASJID AL FATHAH",
        code: "A",
        grade: "C",
        rank: 1,
        point: "4",
      },
    ],
  },
  {
    id: "43",
    data: [
      {
        id: 430,
        program: null,
        student: "Ameen Azeez",
        campus: "MASJID AL FATHAH",
        code: "B",
        grade: "null",
        rank: 3,
        point: "1",
      },
      {
        id: 429,
        program: null,
        student: "Rafi Sulaiman",
        campus: "MASJID AL FATHAH",
        code: "C",
        grade: "null",
        rank: 2,
        point: "2",
      },
      {
        id: 428,
        program: null,
        student: "SHIHABUDHEEN PK",
        campus: "MASJID AL FATHAH",
        code: "A",
        grade: "C",
        rank: 1,
        point: "4",
      },
    ],
  },
];

const ItemResult = ({ announced }: { announced: number[] }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };
  useEffect(() => {
    if (expandedItem) {
      setResult("loading");
      axios
        .get(
          `https://rendezvous.abaqas.in/programs/action.php?status=announced&action=pagination&page=1&limit=18&program=${expandedItem}`
        )
        .then((res) => {
          setResult(res.data.data || null);
        })
        .catch((err) => setResult(null));
    } else {
      setResult(null);
    }
  }, [expandedItem]);
  console.log("result",result);
  

  const getPrizeData = (programId: string) => {
    return itemPrizes.find((prize: any) => prize.id === programId)?.data || [];
  };

  const hasPrizeData = (programId: string) => {
    return itemPrizes.some((prize: any) => prize.id === programId);
  };

  return (
    <div
      className="result mt-0 flex flex-wrap h-full items-center justify-center w-full gap-5 bg-white p-5 mb-10 pb-28"
      id="result"
    >
      <div className="flex relative items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-red-300 w-[90%]">
        <input
          id="search"
          name="search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          type="text"
          placeholder="Search programs..."
          className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
        />
        <CiSearch className="absolute top-2 right-3 text-xl text-red-400 cursor-pointer" />
      </div>
{/* <h4 className="text-lg font-bold">{announced.length} Results</h4>
      {ProgramData.filter((program) => announced.includes(Number(program.id)))
        .filter((program) =>
          search
            ? program.name.toUpperCase().includes(search.toUpperCase())
            : program
        )
        .map((program: any) => (
          <div
            key={program.id}
            className="relative w-[90%] mx-auto bg-gradient-to-br from-[#ffffff] to-[#fffdee] border border-[rgba(0,0,0,0.075)] 
          rounded-[14px] p-[20px_30px] box-border overflow-hidden shadow-[1px_4px_10px_rgba(0,0,0,0.082)]"
            onClick={() => toggleItem(program.id)}
          > */}



          {ProgramData.map((program: any) => (
          <div
            key={program.id}
            className="relative w-[90%] mx-auto bg-gradient-to-br from-[#ffffff] to-[#fffdee] border border-[rgba(0,0,0,0.075)] 
          rounded-[14px] p-[20px_30px] box-border overflow-hidden shadow-[1px_4px_10px_rgba(0,0,0,0.082)]"
            onClick={() => toggleItem(program.id)}
          >

            <div className="cursor-pointer">
              <IoIosArrowDropdown
                className={`${
                  expandedItem === program.id ? "rotate-180" : ""
                } absolute text-2xl top-12 font-semibold right-10 transition-all text-red-400`}
              />

              <section className="header w-10/12 flex items-center justify-start m-0 border-t border-[#53ffd71a] py-[10px] relative border-none bg-transparent h-fit p-0 mb-[15px]">
                <h6 className="text-xl text-red-400 m-0 font-semibold leading-5">
                  <span className="text-[15px] font-bold text-[#696969] m-0 mb-0.5">
                    {program.category}
                  </span>
                  <br />
                  {program.name}
                </h6>
              </section>
            </div>

            {expandedItem === program.id && (
              <div className="w-full mx-auto bg-gradient-to-br from-[#ffffff] to-[#fffdee] py-5 border-t-2 border-red-400">
                {!result ? (
                  <p className="text-red-600 ">Results not announced yet!</p>
                ) : result == "loading" ? (
                  <div className="grid h-14 place-content-center">
                    <LoaderCircle className="text-red-500 animate-spin " />
                  </div>
                ) : (
                  result
                    .sort((a: any, b: any) => a.rank - b.rank)
                    .filter(
                      (rst: any) =>
                        rst.rank == "1" || rst.rank == "2" || rst.rank == "3"
                    )
                    .map((prize: any) => (
                      <section
                        key={prize.id}
                        className="first flex items-center justify-start m-0 border-t border-[#53ffd71a] py-[10px] relative"
                      >
                        <div className="bg-red-400 h-10 w-10 flex justify-center items-center text-[#ffffff] rounded-full">
                          <p className="m-0 text-shadow-md transform text-[18px] font-semibold">
                            {prize.rank}
                          </p>
                        </div>
                        <p className="text-[18px] text-left m-0 text-[rgb(100,100,100)] ml-2 leading-[16px] shadow-[1px_1px_5px_#ffffff]">
                          {prize.student}
                          <br />
                          <span className="text-[13px] m-0 text-[rgba(0,0,0,0.568)]">
                            {prize.campus}
                          </span>
                        </p>
                      </section>
                    ))
                )}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default ItemResult;
