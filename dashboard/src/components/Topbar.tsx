import { useState } from "react";

import {
    IconPlus,
    IconNews,
    IconAlertTriangle,
    IconBorderAll,
    IconChartBar,
    IconBell,
    IconSearch
} from "@tabler/icons-react";


const Topbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isNotifDropdownOpen, setNotifDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    }
    const toggleNotifDropdown = () => {
        setNotifDropdownOpen(!isNotifDropdownOpen);
    }

    const closeDropdown = () => {
        setDropdownOpen(false);
    }
    const closeNotifDropdown = () => {
        setNotifDropdownOpen(false);
    }

    return (
        <nav className=" bg-zinc-800 z-10 min-w-max w-screen h-6 relative items-stretch text-center">
            <div className=" grid grid-cols-11 bg-inherit items-center p-2 text-center">
                <div className="bg-inherit col-start-1 text-left col-span-2">
                    Logo
                </div>
                <div className="bg-inherit col-start-4">
                    <IconChartBar size={24} className="bg-inherit inline-flex pr-1 pb-[4px]"/>Dashboard
                </div>
                <div className="bg-inherit col-start-5">
                    <IconBorderAll size={24} className="bg-inherit inline-flex pr-1 pb-[4px]"/>Tables
                </div>
                <div className="bg-inherit col-start-6">
                    <IconAlertTriangle size={24} className="bg-inherit inline-flex pr-1 pb-[4px]"/>Alerts
                </div>
                <div className="bg-inherit col-start-7">
                    <IconNews size={24} className="bg-inherit inline-flex pr-1 pb-[4px]"/>News
                </div>
                <div className="bg-inherit col-start-8 justify-between">
                    <IconPlus size={24} className="bg-inherit inline-flex pr-1 pb-[4px]"/>Add view
                </div>
                <div className="bg-inherit col-start-9 col-span-2 justify-between text-right">
                    <button onClick={toggleNotifDropdown}
                        onBlur={closeNotifDropdown}
                        className="bg-inherit 
                        rounded-md
                        focus:outline-none
                        focus:ring-0"
                        aria-haspopup="false"
                        aria-expanded={isNotifDropdownOpen} id="bell">
                        <IconBell size={28} className="bg-inherit inline-flex pr-2 pb-[4px]" />
                    </button>
                    <ul
                        className={`origin-top-right fixed text-center mt-2 w-2/12 py-4 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5 ${
                        isNotifDropdownOpen ? 'block' : 'hidden'
                        }`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdown-button"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <li className="mt-2 mx-1"><a href="_self" className="bg-zinc-800 text-red-400 block border-2 border-red-400 rounded-md py-2 text-sm hover:bg-gray-600" role="menuitem">Help needed! Someone is in danger</a></li>
                        <li className="mt-2 mx-1"><a href="_self" className="bg-zinc-800 text-yellow-400 block border-2 border-yellow-400 rounded-md py-2 text-sm hover:bg-gray-600" role="menuitem">An avalanche might be possible</a></li>
                        <li className="mt-2 mx-1"><a href="_self" className="bg-zinc-800 text-green-400 block border-2 border-green-400 rounded-md py-2 text-sm hover:bg-gray-600" role="menuitem">Everything is back to normal</a></li>
                        <li className="mt-2 mx-1"><a href="_self" className="bg-zinc-800 block border-2 rounded-md py-2 text-sm hover:bg-gray-600" role="menuitem">Data error</a></li>
                    </ul>
                    <button><IconSearch size={24} className="bg-inherit inline-flex pb-[4px]"/></button>
                </div>
                <div className="bg-inherit col-start-11 justify-between text-center">
                    <button
                        onClick={toggleDropdown}
                        onBlur={closeDropdown}
                        className="bg-inherit 
                        w-full
                        rounded-md
                        focus:outline-none
                        focus:ring-0"
                        aria-haspopup="false"
                        aria-expanded={isDropdownOpen} id="user">
                        User<br/><sub className="bg-inherit text-sm">sign out</sub>
                    </button>
                    <ul
                        className={`origin-top-right absolute mt-2 w-32 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5 ${
                        isDropdownOpen ? 'block' : 'hidden'
                        }`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdown-button"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <li><a href="_self" className="bg-zinc-800 block px-4 py-2 text-sm hover:bg-gray-600" role="menuitem">Settings</a></li>
                        <li><a href="_self" className="bg-zinc-800 block px-4 py-2 text-sm hover:bg-gray-600" role="menuitem">Sign out</a></li>
                        <li><a href="_self" className="bg-zinc-800 block px-4 py-2 text-sm hover:bg-gray-600" role="menuitem">Help</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;