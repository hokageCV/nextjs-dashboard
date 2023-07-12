export default function Schedule() {
    return (
        <div className="flex-1 max-w-[480px] bg-white-1 px-10 py-7.5 rounded-xl">
            <div className="flex flex-row items-center justify-center mb-6.4">
                <p className="mr-auto text-lg font-bold">Today's schedule</p>
                <p className="text-xs text-gray-2">See All</p>
                <img src="/arrow_right.svg" alt="down arrow" className="ml-1" />
            </div>

            <div className="flex flex-row mb-3 font-sans">
                <div className="h-[66px] w-[5px] bg-green-300 mr-3.5"></div>
                <div>
                    <p className="font-bold text-sm text-gray-1">
                        Meeting with suppliers from Kuta Bali
                    </p>
                    <p className="font-xs text-gray-3">14:00 - 15:00</p>
                    <p className="font-xs text-gray-3">at Sunset Road, Kuta, Bali</p>
                </div>
            </div>
            <div className="flex flex-row font-sans">
                <div className="h-[66px] w-[5px] bg-green-300 mr-3.5"></div>
                <div>
                    <p className="font-bold text-sm text-gray-1">
                        Check operation at Giga Factory 1
                    </p>
                    <p className="font-xs text-gray-3">18:00 - 20:00</p>
                    <p className="font-xs text-gray-3">at Central Jakarta</p>
                </div>
            </div>
        </div>
    );
}
