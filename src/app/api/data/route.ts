import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const URL = "https://chaitanyavaru.me/json-api/furniture-store.json";
        const data = await axios.get(URL);
        const fetchedData = data.data.products;

        const response = NextResponse.json({
            success: true,
            status: 200,
            data: fetchedData,
        });

        return response;
    } catch (err: any) {
        return NextResponse.json({ error: err.message, success: false, status: 500 });
    }
}
