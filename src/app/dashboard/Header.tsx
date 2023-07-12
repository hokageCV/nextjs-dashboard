export default function Header() {
    return (
        <div className="flex flex-row mb-7">
            <h3 className="font-bold text-2xl">Dashboard</h3>
            <div className="relative flex items-center bg-white-1 w-45 ml-auto mr-7.5 rounded-full pl-3 pr-8">
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow text-sm bg-transparent outline-none"
                />
                <img
                    src="/search.svg"
                    alt="search icon"
                    width="12px"
                    height="12px"
                    className="absolute right-3"
                />
            </div>
            <img src="/bell.svg" alt="bell" />
            <img src="/user_image.png" alt="user image" className="ml-5 rounded-full" />
        </div>
    );
}
