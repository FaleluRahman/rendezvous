"use client";
import React, {useState} from 'react';


const ResultItem = [
{
Count: 1,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 2,
category: 'Junior',
item: 'Poem Hindi',
FirstStudentName: 'Ali',
FirstStudentGroup: 'Alpha TEAM',
SecondStudentName: 'Rahul',
SecondStudentGroup: 'Beta TEAM',
ThirdStudentName: 'Sara',
ThirdStudentGroup: 'Gamma TEAM',
},
{
Count: 3,
category: 'Senior',
item: 'Essay English',
FirstStudentName: 'John',
FirstStudentGroup: 'Delta TEAM',
SecondStudentName: 'Doe',
SecondStudentGroup: 'Epsilon TEAM',
ThirdStudentName: 'Anna',
ThirdStudentGroup: 'Zeta TEAM',
},
{
Count: 4,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 5,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 6,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 7,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 8,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 9,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 10,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 11,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 12,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 13,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 14,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 15,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 16,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 17,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 18,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 19,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 20,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 21,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 22,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 23,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 24,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 25,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 26,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 27,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
},
{
Count: 28,
category: 'Junior',
item: 'Poem Malayalam',
FirstStudentName: 'Shame',
FirstStudentGroup: 'NEW TEAM',
SecondStudentName: 'Muhammed',
SecondStudentGroup: 'Second TEAM',
ThirdStudentName: 'Rasheed',
ThirdStudentGroup: 'Third TEAM',
}


];

function ItemResult() {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = ResultItem.slice(firstPostIndex, lastPostIndex);

  return (
    <div
      className="result mt-0 flex flex-wrap-reverse items-center justify-center w-full gap-5 bg-orange-50 p-5 pb-20"
      id="result"
    >
      <div className="p-6 py-3 bg-zinc-50 rounded-2xl text-zinc-700 shadow-lg flex items-center gap-3">
        {currentPage > 1 && (
          <button
            className="bg-red-500 p-2 rounded-xl text-white py-2 px-4 font-semibold"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
        )}
        <p className="font-semibold">{currentPage}</p>
        {(ResultItem.length / postPerPage) > currentPage && (
          <button
            className="bg-red-500 p-2 rounded-xl text-white py-2 px-4 font-semibold"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>

      {currentPosts.map((item: any, i: number) => (
        <div
          key={i}
          className="relative w-[90%] mx-auto bg-gradient-to-br from-[#ffffff] to-[#fffdee] border border-[rgba(0,0,0,0.075)] rounded-[14px] p-[20px_30px] box-border overflow-hidden shadow-[1px_4px_10px_rgba(0,0,0,0.082)]"
        >
          <h5 className="absolute font-oswald text-[110px] -top-[55px] font-semibold text-red-200 right-5">
            {item.Count}
          </h5>

          <section
            id="header"
            className="header flex items-center justify-start m-0 border-t border-[#53ffd71a] py-[10px] relative border-none bg-transparent h-fit p-0 mb-[15px]"
          >
            <h6
              id="prg-name"
              className="text-[18px] text-red-400 m-0 font-medium leading-[15px]"
            >
              <span className="text-[15px] text-[#696969] m-0 font-normal">
                {item.category}
              </span>
              <br />
              {item.item}
            </h6>
          </section>

          {["First", "Second", "Third"].map((ordinal, idx) => (
            <section
              key={idx}
              className="first flex items-center justify-start m-0 border-t border-[#53ffd71a] py-[10px] relative"
            >
              <div className="bg-red-400 h-10 w-10 flex justify-center items-center text-[#ffffff] rounded-full">
                <p className="m-0 text-shadow-md transform text-[18px] font-semibold">
                  {idx + 1}
                </p>
              </div>
              <p
                id="std-name"
                className="text-[18px] text-left m-0 text-[rgb(100,100,100)] ml-2 leading-[16px] shadow-[1px_1px_5px_#ffffff]"
              >
                {item[`${ordinal}StudentName`]}
                <br />
                <span className="text-[13px] m-0 text-[rgba(0,0,0,0.568)]">
                  {item[`${ordinal}StudentGroup`]}
                </span>
              </p>
            </section>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ItemResult;
