import { Link } from 'react-router-dom'

import Badge1 from ".././assets/badges/badge1.png";
import Badge2 from ".././assets/badges/badge2.png";
import Badge3 from ".././assets/badges/badge3.png";
import Badge4 from ".././assets/badges/badge4.png";
// import { search } from '../../StaticData';

const badgeMap = {
    "badge1": [Badge1, "5000 Calories Burnt"],
    "badge2": [Badge2, "Challenged A Firend"],
    "badge3": [Badge3, "Goals Reached"],
    "badge4": [Badge4, "No.1 in Leaderboard"],
};

// data structure for a single user
const data = [
    {
        id: "642870f7eae1dab3f4e14b9e",
        name: "Archit Rathod",
        badges: ["badge3", "badge1"],
        steps: 3499,
        stepGoal: 9000,
        cals: 1200,
        calGoal: 2000,
    },
    {
        id: "64286f5beae1dab3f4e14b53",
        name: "Siddharth Nachane",
        badges: ["badge2", "badge4"],
        steps: 5999,
        stepGoal: 6200,
        cals: 1000,
        calGoal: 2400,
    },
];

const Leaderboard = () => {
  const data = JSON.parse(localStorage.getItem("allArray"))
    return (
        <section className="relative py-16 bg-blueGray-50">
            <div className="w-full mb-12 px-4">
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
  bg-violet-200 text-black border-violet-800"
                >
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center justify-center text-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                <h3 className="font-semibold text-lg text-black">
                                    Leaderboard
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto ">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-12 md:px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-violet-400 text-violet-800 border-violet-700">
                                        User Name
                                    </th>
                                    <th className="px-12 md:px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-violet-400 text-violet-800 border-violet-700 pl-12 md:pl-6">
                                        Daily Steps Count
                                    </th>
                                    <th className="px-12 md:px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-violet-400 text-violet-800 border-violet-700">
                                        Calories Burnt
                                    </th>
                                    <th className="px-12 md:px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-violet-400 text-violet-800 border-violet-700">
                                        Badges Earned
                                    </th>
                                    <th className="px-12 md:px-6px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-violet-400 text-violet-800 border-violet-700">
                                        Profile
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((user, id) => {
                                    const stepPercent = (
                                        (user.steps / user.stepGoal) *
                                        100
                                    ).toFixed(2);
                                    const calPercent = (
                                        (user.cals / user.calGoal) *
                                        100
                                    ).toFixed(2);
                                    return (
                                      
                                        <tr className="border border-b-white border-solid">
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm md:text-md whitespace-nowrap p-4 text-left flex items-center">
                                                <img
                                                    src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`}
                                                    className="h-10 w-10 bg-white rounded-full border"
                                                    alt={user.name}
                                                />
                                                <span className="ml-3 font-bold text-black">
                                                    {" "}
                                                    {user.name}{" "}
                                                </span>
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div title={`${user.steps} / ${user.stepGoal}`} className="ml-6 md:ml-0 flex items-center">
                                                    <span className="mr-2">
                                                        {stepPercent}%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
                                                            <div
                                                                style={{
                                                                    width: `${stepPercent}%`,
                                                                }}
                                                              
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-blue-500"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div title={`${user.cals} / ${user.calGoal}`} className="flex items-center">
                                                    <span className="mr-2">
                                                        {calPercent}%
                                                    </span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
                                                            <div
                                                                style={{
                                                                    width: `${calPercent}%`,
                                                                }}
                                                              
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-green-500"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex justify-start items-center">
                                                    {user.badges.map(
                                                        (badge, id) => {
                                                            return (
                                                                <img
                                                                  key={id}
                                                                    src={
                                                                        badgeMap[
                                                                            badge
                                                                        ][0]
                                                                    }
                                                                    alt={
                                                                        badgeMap[
                                                                            badge
                                                                        ][1]
                                                                    }
                                                                    className="w-10 h-10 rounded-full border-2 border-stone-400 shadow"
                                                                    title={
                                                                        badgeMap[
                                                                            badge
                                                                        ][1]
                                                                    }
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <Link
                                                    to={`/users/${user._id}`}
                                                    className="p-2 ml-4 bg-violet-400 shadow-md hover:bg-[#c759ff] rounded-md"
                                                >
                                                    <span className="mx-3 font-bold text-black">
                                                        View
                                                    </span>
                                                </Link>
                                            </td>
                                        </tr>
                                      

                                      // <hr className="w-screen" />
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leaderboard;
