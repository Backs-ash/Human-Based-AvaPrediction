

const Topbar = () => {
    return (
        <nav className=" bg-zinc-900 z-10 min-w-max w-screen h-12">
            <div className=" container mx-0 flex flex-wrap p-4 w-screen flex-col">
                <div className="flex flex-wrap text-base justify-center w-screen">
                    <a className="flex font-medium text-left text-gray-100 mb-4">
                        <img src="./public/logo192.png" alt="logo"/>
                    </a>
                    <a className="mr-5">First Link</a>
                    <a className="mr-5">Second Link</a>
                    <a className="mr-5">Third Link</a>
                    <a className="mr-5">Fourth Link</a>
                </div>

            </div>
        </nav>
    )
}
export default Topbar;