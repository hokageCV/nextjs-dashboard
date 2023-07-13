"use client";

import axios from "axios";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

export default function MainGraph() {
    const [isLoading, setIsLoading] = useState(true);
    const [nameList, setNameList] = useState<String[]>([]);
    const [salesList, setSalesList] = useState<Number[]>([]);

    async function getData() {
        const URL = "/api/data";
        const response = await axios.get(URL);

        setNameList(response.data.data.map((product: Product) => product.name));
        setSalesList(response.data.data.map((product: Product) => product.sales));
        setIsLoading(false);
    }

    const chartData = {
        labels: nameList,
        datasets: [
            {
                label: "monthly sales",
                data: salesList,
                fill: true,
                borderColor: "#98D89E",
                pointBorderColor: "#EE8484",
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        plugins: { legend: { display: false } },
        responsive: true,
        scales: {
            y: {
                startAtZero: false,
                min: 100,
                max: 600,
                ticks: {
                    stepSize: 100,
                },
            },
            x: {
                offset: true, // to add space before & after the x labels
                grid: {
                    display: false,
                },
            },
        },
    };

    useEffect(() => {
        getData();
    }, []);

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
            <div>
                <p className="pb-7">May-June 2023</p>
                {!isLoading && nameList.length > 0 && salesList.length > 0 ? (
                    <Line data={chartData} options={chartOptions} height="80px" />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
