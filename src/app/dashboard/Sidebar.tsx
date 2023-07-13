type ButtonProps = {
    title: string;
    icon: string;
    isBold?: boolean;
};

function DbButton({ title, icon, isBold }: ButtonProps) {
    return (
        <div className="flex flex-row gap-3.5">
            <img src={icon} alt={title} height="18px" width="18px" />
            <div className={`text-white-1 text-lg ${isBold ? "font-bold" : ""}`}>{title}</div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="flex flex-col items-center lg:items-start bg-black text-white-1 h-max lg:h-full w-full md:w-10/12 lg:w-70 min-w-min px-12.5 py-15 rounded-4xl">
            <h1 className="font-bold text-4xl mb-10">Board.</h1>
            <div className="flex flex-col gap-10 mb-10">
                <DbButton title="Dashboard" icon="/db_dashboard.svg" isBold />
                <DbButton title="Transactions" icon="/db_transactions.svg" />
                <DbButton title="Schedules" icon="/db_schedule.svg" />
                <DbButton title="Users" icon="/db_user.svg" />
                <DbButton title="Settings" icon="/db_settings.svg" />
            </div>
            <p className="text-sm mt-auto">Help</p>
            <p className="text-sm">Contact Us</p>
        </div>
    );
}
