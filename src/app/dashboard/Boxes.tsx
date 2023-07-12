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

export default function Boxes() {
    return (
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
    );
}
