export default function TopProducts() {
    return (
        <div className="flex-1 max-w-[480px] bg-white-1 px-10 py-7.5 rounded-xl">
            <div className="flex flex-row items-center justify-center">
                <p className="mr-auto text-lg font-bold">Top products</p>
                <p className="text-xs text-gray-2">May-June 2021</p>
                <img src="/arrow_down.svg" alt="down arrow" className="ml-1" />
            </div>
        </div>
    );
}
