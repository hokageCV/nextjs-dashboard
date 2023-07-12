export default function Dashboard() {
    return (
        <div className="flex flex-row p-10 h-screen gap-15">
            {/* sidebar  */}
            <div className="flex flex-col bg-black text-white-1 h-full w-70 px-12.5 py-15 rounded-4xl">
                <h1 className="font-bold text-4xl mb-10">Board.</h1>
                <div className="flex flex-col gap-10">
                    <DbButton title="Dashboard" icon="/db_dashboard.svg" isBold />
                    <DbButton title="Transactions" icon="/db_transactions.svg" />
                    <DbButton title="Schedules" icon="/db_schedule.svg" />
                    <DbButton title="Users" icon="/db_user.svg" />
                    <DbButton title="Settings" icon="/db_settings.svg" />
                </div>
                <p className="text-sm mt-auto">Help</p>
                <p className="text-sm">Contact Us</p>
            </div>
            <div>
                {/* header  */}
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

                {/* boxes */}
                <div className="flex flex-row gap-9">
                    <InfoBox
                        title="Total Sales"
                        value="$123"
                        color="bg-boxGreen"
                        iconwidth="26px"
                        icon="/revenue.svg"
                    />
                    <InfoBox
                        title="Total Transactions"
                        value="123"
                        color="bg-boxSkin"
                        iconwidth="26px"
                        icon="/transaction.svg"
                    />
                    <InfoBox
                        title="Total Likes"
                        value="123"
                        color="bg-boxPink"
                        iconwidth="26px"
                        icon="/likes.svg"
                    />
                    <InfoBox
                        title="Total Users"
                        value="123"
                        color="bg-boxBlue"
                        iconwidth="26px"
                        icon="/users.svg"
                    />
                </div>

                {/* graph */}
                <div className="bg-white-1 my-10 px-10 py-7.5  rounded-xl">
                    <div className="flex flex-row ">
                        <p className="mr-auto">Activities</p>
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

                {/* pie chart and schedule */}
                <div>
                    <div>pie chart</div>
                    <div>schedule</div>
                </div>
            </div>
        </div>
    );
}

// =========================================

type BoxProps = {
    title: string;
    value: string;
    icon: string;
    color: string;
    iconwidth: string;
};

function InfoBox({ title, value, icon, color, iconwidth }: BoxProps) {
    return (
        <div className={`flex flex-col py-5 px-6.4 w-[221px] rounded-xl ${color}`}>
            <img src={icon} alt={title} height="24px" width={iconwidth} className="self-end" />
            <div className="flex flex-col">
                <div className="text-sm font-lato">{title}</div>
                <div className="font-sans font-bold text-2xl">{value}</div>
            </div>
        </div>
    );
}

// =========================================

type ButtonProps = {
    title: string;
    icon: string;
    isBold?: boolean;
};

// a button with icon on left and title on right
function DbButton({ title, icon, isBold }: ButtonProps) {
    return (
        <div className="flex flex-row gap-3.5">
            <img src={icon} alt={title} height="18px" width="18px" />
            <div className={`text-white-1 text-lg ${isBold ? "font-bold" : ""}`}>{title}</div>
        </div>
    );
}
