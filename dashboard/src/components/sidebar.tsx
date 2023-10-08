import pfpImage from '../assets/pfp.png';
import {
    IconHeartbeat,
    IconLungs,
    IconTemperature,
    IconDropletHeart,
} from "@tabler/icons-react";

const Sidebar: React.FC = () => {
    const profileData = [
        { name: 'User 1', bio1: '69bpm', bio2: '11b/m', bio3: '36.9C', bio4: '96%'},
        { name: 'User 2', bio1: '69bpm', bio2: '11b/m', bio3: '36.9C', bio4: '96%'},
        { name: 'User 3', bio1: '69bpm', bio2: '11b/m', bio3: '36.9C', bio4: '96%'},
        { name: 'User 4', bio1: '69bpm', bio2: '11b/m', bio3: '36.9C', bio4: '96%'},
        { name: 'User 5', bio1: '69bpm', bio2: '11b/m', bio3: '36.9C', bio4: '96%'},
        { name: 'User 6', bio1: '69bpm', bio2: '11b/m', bio3: '36.9C', bio4: '96%'},
    ];

    return (
        <div className="flex">
            {/* Scrollable profile container */}
            <div className="container z-[2] mt-12 w-1/4 h-2/3 p-2 overflow-y-scroll">
                {profileData.map((profile, index) => (
                <div key={index} className="bg-zinc-700 rounded-lg shadow-lg h-1/3 p-2 mb-4">
                    <button className="grid grid-cols-2 p-0 h-full w-full bg-inherit">
                        <div className="rounded-full overflow-hidden w-12 h-12">
                            <img src={ pfpImage } className="w-full h-full object-cover" alt={profile.name} />
                        </div>
                        <div className="grid grid-cols-4 p-0 w-full h-full bg-inherit">
                        <IconHeartbeat className=" inline-flex object-cover bg-zinc-700" />
                        <p className="text-gray-400 bg-zinc-700">{profile.bio1}</p>
                        <IconLungs className=" inline-flex object-cover bg-zinc-700" />
                        <p className="text-gray-400 bg-zinc-700">{profile.bio2}</p>
                        <IconTemperature className=" inline-flex object-cover bg-zinc-700" />
                        <p className="text-gray-400 bg-zinc-700">{profile.bio3}</p>
                        <IconDropletHeart className=" inline-flex object-cover bg-zinc-700" />
                        <p className="text-gray-400 bg-zinc-700">{profile.bio4}</p>
                        </div>
                    </button>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;