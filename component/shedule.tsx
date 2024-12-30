"use client";

import React, {useState} from 'react'



const scheduleData = [
    {
        day: "Mon",
        date:3,
        schedule: [
            {
                stage: 1,
                events: [
                    { id: "1", time: "9:00 AM", title: "Team Meeting" },
                    { id: "2", time: "11:00 AM", title: "Project Presentation" },
                    { id: "3", time: "1:00 PM", title: "Lunch with Client" },
                    { id: "4", time: "3:00 PM", title: "Code Review" },
                    { id: "5", time: "4:00 PM", title: "Scrum Meeting" },
                    { id: "6", time: "5:00 PM", title: "Wrap Up" },
                    { id: "7", time: "6:00 PM", title: "Team Building Activity" },
                    { id: "8", time: "7:00 PM", title: "Dinner" },
                    { id: "9", time: "8:00 PM", title: "Networking Event" },
                    { id: "10", time: "9:00 PM", title: "End of Day Review" },
                    { id: "11", time: "10:00 PM", title: "Plan for Tomorrow" },
                ],
            },
            {
                stage: 2,
                events: [
                    { id: "32", time: "9:00 AM", title: "Daily Standup" },
                    { id: "33", time: "10:00 AM", title: "Client Workshop" },
                    { id: "34", time: "11:00 AM", title: "Code Review" },
                    { id: "35", time: "1:00 PM", title: "Lunch Break" },
                    { id: "36", time: "2:00 PM", title: "Sprint Planning" },
                    { id: "37", time: "3:00 PM", title: "Development" },
                    { id: "38", time: "4:00 PM", title: "Testing" },
                    { id: "39", time: "5:00 PM", title: "Wrap Up" },
                    { id: "40", time: "6:00 PM", title: "Team Dinner" },
                ],
            }, {
                stage: 3,
                events: [
                    { id: "1", time: "9:00 AM", title: "Team Meeting" },
                    { id: "2", time: "11:00 AM", title: "Project Presentation" },
                    { id: "3", time: "1:00 PM", title: "Lunch with Client" },
                    { id: "4", time: "3:00 PM", title: "Code Review" },
                    { id: "5", time: "4:00 PM", title: "Scrum Meeting" },
                    { id: "6", time: "5:00 PM", title: "Wrap Up" },
                    { id: "7", time: "6:00 PM", title: "Team Building Activity" },
                    { id: "8", time: "7:00 PM", title: "Dinner" },
                    { id: "9", time: "8:00 PM", title: "Networking Event" },
                    { id: "10", time: "9:00 PM", title: "End of Day Review" },
                    { id: "11", time: "10:00 PM", title: "Plan for Tomorrow" },
                ],
            }, {
                stage: 4,
                events: [
                    { id: "1", time: "9:00 AM", title: "Team Meeting" },
                    { id: "2", time: "11:00 AM", title: "Project Presentation" },
                    { id: "3", time: "1:00 PM", title: "Lunch with Client" },
                    { id: "4", time: "3:00 PM", title: "Code Review" },
                    { id: "5", time: "4:00 PM", title: "Scrum Meeting" },
                    { id: "6", time: "5:00 PM", title: "Wrap Up" },
                    { id: "7", time: "6:00 PM", title: "Team Building Activity" },
                    { id: "8", time: "7:00 PM", title: "Dinner" },
                    { id: "9", time: "8:00 PM", title: "Networking Event" },
                    { id: "10", time: "9:00 PM", title: "End of Day Review" },
                    { id: "11", time: "10:00 PM", title: "Plan for Tomorrow" },
                ],
            },
        ],
    },
    {
        day: "Tue",
        date:4,
        schedule: [
            {
                stage: 1,
                events: [
                    { id: "12", time: "10:00 AM", title: "Client Call" },
                    { id: "13", time: "11:00 AM", title: "Design Review" },
                    { id: "14", time: "12:00 PM", title: "Lunch Break" },
                    { id: "15", time: "1:00 PM", title: "Team Sync" },
                    { id: "16", time: "2:00 PM", title: "Product Demo" },
                    { id: "17", time: "3:00 PM", title: "Marketing Meeting" },
                    { id: "18", time: "4:00 PM", title: "Sales Call" },
                    { id: "19", time: "5:00 PM", title: "Development Sprint" },
                    { id: "20", time: "6:00 PM", title: "QA Testing" },
                    { id: "21", time: "7:00 PM", title: "Deployment" },
                    { id: "22", time: "8:00 PM", title: "Feedback Session" },
                ],
            },
            {
                stage: 2,
                events: [
                    { id: "23", time: "9:00 AM", title: "Morning Standup" },
                    { id: "24", time: "10:00 AM", title: "Client Presentation" },
                    { id: "25", time: "11:00 AM", title: "Code Refactoring" },
                    { id: "26", time: "1:00 PM", title: "Lunch Break" },
                    { id: "27", time: "2:00 PM", title: "Team Brainstorming" },
                    { id: "28", time: "3:00 PM", title: "Project Planning" },
                    { id: "29", time: "4:00 PM", title: "One-on-One Meetings" },
                    { id: "30", time: "5:00 PM", title: "Wrap Up" },
                    { id: "31", time: "6:00 PM", title: "Team Outing" },
                ],
            },
            {
                stage: 3,
                events: [
                    { id: "50", time: "10:00 AM", title: "Weekend Planning" },
                    { id: "51", time: "11:00 AM", title: "Brunch with Team" },
                    { id: "52", time: "1:00 PM", title: "Team Building Activity" },
                    { id: "53", time: "3:00 PM", title: "Leisure Time" },
                    { id: "54", time: "5:00 PM", title: "Wrap Up" },
                    { id: "55", time: "7:00 PM", title: "Dinner" },
                ],
            },
        ],
    },
    {
        day: "Wed",
        date:5,
        schedule: [
            {
                stage: 1,
                events: [
                    { id: "17", time: "3:00 PM", title: "Marketing Meeting" },
                    { id: "18", time: "4:00 PM", title: "Sales Call" },
                    { id: "19", time: "5:00 PM", title: "Development Sprint" },
                    { id: "20", time: "6:00 PM", title: "QA Testing" },
                    { id: "21", time: "7:00 PM", title: "Deployment" },
                    { id: "22", time: "8:00 PM", title: "Feedback Session" },
                    { id: "12", time: "10:00 AM", title: "Client Call" },
                    { id: "13", time: "11:00 AM", title: "Design Review" },
                    { id: "14", time: "12:00 PM", title: "Lunch Break" },
                    { id: "15", time: "1:00 PM", title: "Team Sync" },
                    { id: "16", time: "2:00 PM", title: "Product Demo" },

                ],
            },
            {
                stage: 2,
                events: [
                    { id: "27", time: "2:00 PM", title: "Team Brainstorming" },
                    { id: "28", time: "3:00 PM", title: "Project Planning" },
                    { id: "29", time: "4:00 PM", title: "One-on-One Meetings" },
                    { id: "30", time: "5:00 PM", title: "Wrap Up" },
                    { id: "31", time: "6:00 PM", title: "Team Outing" },
                    { id: "23", time: "9:00 AM", title: "Morning Standup" },
                    { id: "24", time: "10:00 AM", title: "Client Presentation" },
                    { id: "25", time: "11:00 AM", title: "Code Refactoring" },
                    { id: "26", time: "1:00 PM", title: "Lunch Break" },

                ],
            },
            {
                stage: 3,
                events: [
                    { id: "41", time: "9:00 AM", title: "Weekly Review" },
                    { id: "42", time: "10:00 AM", title: "Client Meeting" },
                    { id: "43", time: "11:00 AM", title: "Code Merge" },
                    { id: "44", time: "1:00 PM", title: "Lunch Break" },
                    { id: "45", time: "2:00 PM", title: "Sprint Retrospective" },
                    { id: "46", time: "3:00 PM", title: "Team Sync" },
                    { id: "47", time: "4:00 PM", title: "Project Demo" },
                    { id: "48", time: "5:00 PM", title: "Wrap Up" },
                    { id: "49", time: "6:00 PM", title: "Happy Hour" },
                ],
            },
        ],
    }]

const Schedule = () => {
    const [date, setDate] = useState<any>(3);
    const [stage, setStage] = useState<any>(1);


    return (

        <section className="w-full  h-full bg-zinc-50  shadow-[0_2px_10px_rgba(0,0,0,0.13)] box-border
            transition-all ease-in-out duration-500 pb-20 ">

            <div>
                <div className='bg-gradient-to-r from-red-700 to-red-600 pb-1 rounded-bl-3xl rounded-br-3xl'>
                <h1 className=' font-bold text-3xl py-2 w-11/12 text-center text-white'>Schedule</h1>
                
                <div className='flex items-center justify-evenly text-center mt-4 text-black bg-gradient-to-r from-red-600 to-red-500
                rounded-lg w-11/12 py-2 m-auto'>

                    {scheduleData.map((item, i) => (
                        <div
                            className={`${item.date == date ? 'bg-white text-red-800 ' : 'bg-none text-white' } w-[45px] h-[76px] rounded-xl border-0 border-black-100 cursor-pointer
                        transition duration-200 ease-in-out flex items-center justify-center flex-col`} onClick={()=>setDate(item.date)}>
                            <p className='text-2xl font-bold '>{item.date}</p>
                            <p className='text-xs font-normal '>{item.day}</p>

                        </div>
                        ))}
                </div>
                {/* {/Stage Section/} */}

                <div className='flex  my-4 overflow-x-auto no-scrollbar w-11/12 py-2 m-auto bg-red-500 rounded-3xl '>
                    {scheduleData.find((item , i) => item.date === date)?.schedule.map((program) =>(

                        <div className={`${program.stage == stage ? 'bg-white text-red-800 font-bold' : 'bg-none text-white font-bold'} rounded-3xl py-1 px-3 flex-1 text-center min-w-28   mx-1.5 text-nowrap cursor-pointer`} onClick={() => setStage(program.stage)}>Stage {program.stage}</div>
                    ))}

                </div>
                </div>

                <div className='flex items-center justify-center flex-col relative px-4 my-4' >
                    
                {scheduleData.find((item, i) => item.date === date)?.schedule.find((pro, i) => pro.stage === stage)?.events.map((item) => (

                        <section className='text-black px-2 py-1 w-full mt-1 grid grid-cols-5'>
                            {/* Time  */}
                                <div className='px-1 py-1 flex items-center'>
                                    <p className='text-xs font-semibold text-right nowrap'>{item.time}</p>
                                </div>
                                <div className='flex justify-center items-center align-middle  px-4'>
                                    <div className='w-3 h-3 border-4 border-red-300 rounded-full bg-red-700'></div>
                                </div>
                                <div className='px-2 py-4 bg-white shadow-white border  rounded-xl col-span-3'>
                                <p className='text-xs font-medium'>Senior</p>

                                    <p className='text-sm font-semibold'>{item.title}</p>
                                </div>
                        </section>
                    ))}

                    {/* <div className='h-full absolute w-2 bg-red-700 bar rounded-lg'></div> */}
                </div>
            </div>
        </section>
    )
}


export default Schedule