"use client";

import axios from "axios";
import { ArcElement, Chart as ChartJS, Legend, PieController } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(PieController, ArcElement, Legend);

export default function TopProducts() {
    const [isLoading, setIsLoading] = useState(true);
    const [nameList, setNameList] = useState<string[]>([]);
    const [salesList, setSalesList] = useState<number[]>([]);
    const [totalSales, setTotalSales] = useState<number>(0);
    const [percentages, setPercentages] = useState<number[]>([]);

    async function getData() {
        const URL = "/api/data";
        const response = await axios.get(URL);

        const products = response.data.data.map((product: Product) => ({
            name: product.name,
            sales: product.sales,
        }));

        const sortedProducts = products.sort((a: Product, b: Product) => b.sales - a.sales);
        const topProducts = sortedProducts.slice(0, 3);

        const topProductNames = topProducts.map((product: Product) => product.name);
        const topProductSales = topProducts.map((product: Product) => product.sales);

        const calculatedTotalSales = topProductSales.reduce(
            (acc: number, sales: number) => acc + sales,
            0
        );

        const calculatedPercentages = topProductSales.map((sales: number) =>
            ((sales / calculatedTotalSales) * 100).toFixed(2)
        );

        setNameList(topProductNames);
        setSalesList(topProductSales);
        setTotalSales(calculatedTotalSales);
        setPercentages(calculatedPercentages);

        setIsLoading(false);
    }

    const chartData = {
        labels: nameList,
        datasets: [
            {
                label: "monthly sales",
                data: salesList,
                backgroundColor: ["#98d89e", "#f6dc7d", "#ee8484"],
            },
        ],
    };
    const chartOptions = {
        plugins: { legend: { display: false } },
        responsive: true,
        radius: "80%",
        elements: { arc: { borderWidth: 0 } },
        layout: {
            padding: {
                top: 5,
                bottom: 20,
                left: 0,
                right: 30,
            },
        },
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex-1 max-w-[480px] h-64 bg-white-1 px-10 py-7.5 rounded-xl">
            <div className="flex flex-row items-center justify-center">
                <p className="mr-auto text-lg font-bold">Top products</p>
                <p className="text-xs text-gray-2">May-June 2021</p>
                <img src="/arrow_down.svg" alt="down arrow" className="ml-1" />
            </div>

            <div className="flex flex-row items-center justify-around">
                <div className="w-56 h-56">
                    {!isLoading && nameList.length > 0 && salesList.length > 0 ? (
                        <Pie data={chartData} options={chartOptions} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div>
                    {nameList.length > 0 && (
                        <div className="flex flex-col items-center justify-start gap-5 mr-6">
                            <div className="flex flex-row items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full mr-2.5 bg-[#98D89E]"></div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-sm">{nameList[0]}</p>
                                    <p className="font-lato text-xs text-gray-2">
                                        {percentages[0]}%
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full mr-2.5 bg-[#F6DC7D]"></div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-sm">{nameList[1]}</p>
                                    <p className="font-lato text-xs text-gray-2">
                                        {percentages[1]}%
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full mr-2.5 bg-[#EE8484]"></div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-sm">{nameList[2]}</p>
                                    <p className="font-lato text-xs text-gray-2">
                                        {percentages[2]}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ============================================

type ProductProps = {
    title: string;
    percent: number;
    circleColor: string;
};

function ProductInfo({ title, circleColor, percent }: ProductProps) {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className={`w-2.5 h-2.5 rounded-full mr-2.5 bg-[${circleColor}]`}></div>
            <div className="flex flex-col">
                <p className="font-bold text-sm">{title}</p>
                <p className="font-lato text-xs text-gray-2">{percent}%</p>
            </div>
        </div>
    );
}
