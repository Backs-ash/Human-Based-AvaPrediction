import pfpImage from '../assets/pfp.png';
import {
    IconHeartbeat,
    IconLungs,
    IconTemperature,
    IconDropletHeart,
} from "@tabler/icons-react";

const Sidebar: React.FC = () => {
    const profileData = [
        { name: 'User 1', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%'},
        { name: 'User 2', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%'},
        { name: 'User 3', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%'},
        { name: 'User 4', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%'},
        { name: 'User 5', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%'},
        { name: 'User 6', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%' },
        { name: 'User 7', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%' },
        { name: 'User 8', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%' },
        { name: 'User 9', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%' },
        { name: 'User 10', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%' },
        { name: 'User 11', bio1: '69', bio2: '11', bio3: '36.9', bio4: '96%'},
    ];

    return (
        <div className="flex h-screen w-full">
            {/* Scrollable profile container */}
            <div className="container h-screen overflow-y-scroll">
                <div className='mt-12 w-full h-1/3 p-2'>
                    {profileData.map((profile, index) => (
                    <div key={index} className="bg-zinc-700 rounded-lg shadow-lg h-1/3 p-2 mb-4">
                            <button className="grid grid-cols-3 grid-rows-2 h-full w-full bg-inherit columns-xs">
                                <div className='bg-inherit row-span-2 items-center inline-flex'>
                                    <div className="rounded-full overflow-hidden w-12 h-12">
                                        <img src={pfpImage} className="w-full h-full object-cover" alt={profile.name} />
                                    </div>
                                    <div className="text-gray-400 bg-inherit w-full text-md">{profile.name}</div>
                                </div>
                                <div className='bg-inherit'>
                                    <div className="text-gray-400 bg-zinc-700"><IconHeartbeat className="inline-flex object-cover bg-zinc-700 text-left" /> {profile.bio1} bpm</div>
                                    <div className="text-gray-400 bg-zinc-700"><IconLungs className=" inline-flex object-cover bg-zinc-700 text-left" /> {profile.bio2} b/m</div>
                                </div>
                                <div className="bg-inherit">
                                    <div className="text-gray-400 bg-zinc-700"><IconTemperature className=" inline-flex object-cover bg-zinc-700" />{profile.bio3}&deg;C</div>
                                    <div className="text-gray-400 bg-zinc-700"><IconDropletHeart className=" inline-flex object-cover bg-zinc-700" /> {profile.bio4}</div>
                                </div>
                            </button>
                        </div>
                    ))}
                    </div>
                </div>
        </div>
    )
}

export default Sidebar;