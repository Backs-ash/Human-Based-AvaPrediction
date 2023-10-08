

const Sidebar: React.FC = () => {
    const profileData = [
        { name: 'User 1', bio: 'Bio 1' },
        { name: 'User 2', bio: 'Bio 2' },
    ];

    return (
        <div className="flex">
            {/* Scrollable profile container */}
            <div className="container z-[2] mt-12 w-1/4 p-4 overflow-y-scroll">
                {profileData.map((profile, index) => (
                <div key={index} className=" bg-zinc-700 rounded-lg shadow-lg p-4 mb-4">
                    <h2 className="text-xl bg-zinc-700 font-semibold">{profile.name}</h2>
                    <p className="text-gray-400 bg-zinc-700">{profile.bio}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;