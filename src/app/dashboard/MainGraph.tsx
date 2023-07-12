export default function MainGraph() {
    return (
        <div className="bg-white-1 my-10 px-10 py-7.5  rounded-xl">
            <div className="flex flex-row ">
                <p className="font-bold text-lg mr-auto">Activities</p>
                <div className="flex flex-row items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#E9A0A0]"></div>
                    <p className="ml-[11px]">Guest</p>
                </div>
                <div className="flex flex-row items-center justify-center ml-9">
                    <div className="w-2 h-2 rounded-full bg-[#9BDD7C]"></div>
                    <p className="ml-[11px]">User</p>
                </div>
            </div>
            <div>GRAPH</div>
        </div>
    );
}
