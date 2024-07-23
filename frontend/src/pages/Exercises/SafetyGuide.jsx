import React, {useEffect} from 'react';
import {injuryPrevention} from '../../workoutsData';

const SafetyGuide = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  return (
    <>

      <div className="w-screen px-4 md:px-32">
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
  bg-violet-200 text-black border-violet-800"
                >
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center justify-center text-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                <h3 className="font-semibold text-lg text-black">
                                    Safety Measures for injury Prevetion
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto ">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-12 md:px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-violet-400 text-violet-800 border-violet-700">
                                        Preventive Measure
                                    </th>
                                    <th className="px-12 md:px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-violet-400 text-violet-800 border-violet-700 pl-12 md:pl-6">
                                        Explanation
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                               {injuryPrevention.map((measure, id) => {
                                    const key = Object.keys(measure)[0];
                  const value = Object.values(measure)[0];
                                    return (
                                      
                                        <tr key={id} className="border border-b-white border-solid">
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm md:text-md whitespace-nowrap p-4 text-left flex items-center">
                                                
                                                <p className="text-lg font-bold text-black">{key}
                                                </p>
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                 <p className="text-lg text-black">{value}
                                                </p>                                            </td>
                                            
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

    </>
  )
}

export default SafetyGuide;