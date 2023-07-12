import Boxes from "./Boxes";
import Header from "./Header";
import MainGraph from "./MainGraph";
import Schedule from "./Schedule";
import Sidebar from "./Sidebar";
import TopProducts from "./TopProducts";

export default function Dashboard() {
    return (
        <div className="flex flex-row p-10 h-screen gap-15">
            <Sidebar />
            <div>
                <Header />
                <Boxes />
                <MainGraph />
                <div className="flex flex-row gap-10">
                    <TopProducts />
                    <Schedule />
                </div>
            </div>
        </div>
    );
}
