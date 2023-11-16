import { IconSnowflake, IconCloudSnow } from "@tabler/icons-react";


const Bottombar = () => {
    const box1Content = (
        <div className="˜ z-0 bg-zinc-800 shadow-lg rounded-md mx-2 p-4 grid grid-cols-8 grid-rows-4 text-center text-lg">
            <div className="py-1 bg-inherit text-left col-start-1 row-start-3 text-green-400 text-sm">L:</div>
            <div className="py-1 bg-inherit text-left col-start-1 row-start-4 text-green-400 text-sm">H:</div>
            <div className="bg-inherit col-start-2 row-start-1 px-2 text-teal-500">
                MON
            </div>
            <div className=" bg-inherit col-start-2 row-start-2 items-center text-center px-2">
                <IconSnowflake className="bg-inherit text-center"/>
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-2 row-start-3 items-center px-2">
                -4º
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-2 row-start-4 items-center px-2">
                -12º
            </div>
            <div className=" bg-inherit col-start-3 row-start-1 px-2 text-teal-500">
                TUE
            </div>
            <div className="bg-inherit col-start-3 row-start-2 items-center px-2 text-center">
                <IconCloudSnow className="bg-inherit"/>
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-3 row-start-3 items-center px-2">
                -4º
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-3 row-start-4 items-center px-2">
                0º
            </div>
            <div className="bg-inherit col-start-4 px-2 text-teal-500">
                WED
            </div> 
            <div className="bg-inherit col-start-4 row-start-2 px-2 items-center text-center">
                <IconSnowflake className="bg-inherit"/>
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-4 row-start-3 items-center px-2">
                -14º
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-4 row-start-4 items-center px-2">
                -3º
            </div>
            <div className="bg-inherit col-start-5 px-2 text-teal-500">
                THU
            </div>
            <div className="bg-inherit col-start-5 row-start-2 px-2 text-center">
                <IconCloudSnow className="bg-inherit"/>
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-5 row-start-3 items-center px-2">
                -4º
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-5 row-start-4 items-center px-2">
                -13º
            </div>
            <div className="bg-inherit col-start-6 px-2 text-teal-500">
                FRI
            </div>
            <div className="bg-inherit col-start-6 row-start-2 text-center px-2 items-center">
                <IconCloudSnow className="bg-inherit"/>
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-6 row-start-3 items-center px-2">
                -4º
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-6 row-start-4 items-center px-2">
                -13º
            </div>
            <div className="bg-inherit col-start-7 px-2 text-teal-500">
                SAT
            </div>
            <div className="bg-inherit col-start-7 row-start-2 text-center px-2 items-center">
                <IconSnowflake className="bg-inherit"/>
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-7 row-start-3 items-center px-2">
                -4º
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-7 row-start-4 items-center px-2">
                -13º
            </div>
            <div className="bg-inherit col-start-8 px-2 text-teal-500">
                SUN
            </div>
            <div className="bg-inherit col-start-8 row-start-2 text-center px-2 items-center">
                <IconSnowflake className="bg-inherit"/>
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-8 row-start-3 items-center px-2">
                -4º
            </div>
            <div className=" bg-inherit text-fuchsia-700 col-start-8 row-start-4 items-center px-2">
                -13º
            </div>
        </div>
    );

    const box2Content = (
        <div className="bg-zinc-800 rounded-md shadow-lg mx-2 p-4">
        {/* Content for Box 2 */}
        </div>
    );

    return (
        <div className="bg-inherit w-full flex-auto">
            <div className="w-1/4 p-4 flex flex-row">
                {/* Box 1 */}
                {box1Content}

                {/* Box 2 */}
                {box2Content}
            </div>
        </div>
    )
}

export default Bottombar;