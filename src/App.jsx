import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import "./App.css";

const data = [
    {
        MO_CODE: "CT1",
        DATEMONTH: "2023-01-22T13:38:34.1015011+02:00",
        MO: 145.384615,
    },
    {
        MO_CODE: "CT1",
        DATEMONTH: "2023-02-22T13:38:34.1015011+02:00",
        MO: 25.89,
    },
    {
        MO_CODE: "CT1",
        DATEMONTH: "2023-03-22T13:38:34.1015011+02:00",
        MO: 145.384615,
    },
    {
        MO_CODE: "CT2",
        DATEMONTH: "2023-01-22T13:38:34.1015011+02:00",
        MO: 145.384615,
    },
    {
        MO_CODE: "CT2",
        DATEMONTH: "2023-05-22T13:38:34.1015011+02:00",
        MO: 25.89,
    },
    {
        MO_CODE: "CT2",
        DATEMONTH: "2023-07-22T13:38:34.1015011+02:00",
        MO: 145.384615,
    },
    {
        MO_CODE: "CT3",
        DATEMONTH: "2023-01-22T13:38:34.1015011+02:00",
        MO: 80.8,
    },
    {
        MO_CODE: "CT3",
        DATEMONTH: "2023-05-22T13:38:34.1015011+02:00",
        MO: 60.89,
    },
    {
        MO_CODE: "CT3",
        DATEMONTH: "2023-07-22T13:38:34.1015011+02:00",
        MO: 203.384615,
    },
];

function App() {
    const chartData = data.map((item) => ({
        DATEMONTH: new Date(item.DATEMONTH).toISOString().slice(0, 7),
        MO: item.MO,
        MO_CODE: item.MO_CODE,
    }));

    const uniqueMoCodes = [...new Set(chartData.map((item) => item.MO_CODE))];

    // Predefine colors for each unique MO_CODE
    const moCodeColors = {
        CT1: "#8884d8",
        CT2: "#82ca9d",
        CT3: "#f00",
        CT4: "#000",
    };

    return (
        <>
            <div className="box">
                <ResponsiveContainer width="100%" height={600}>
                    <AreaChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="DATEMONTH" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        {uniqueMoCodes.map((code) => (
                            <Area
                                key={code}
                                type="natural"
                                dataKey="MO"
                                stackId="1"
                                stroke={moCodeColors[code]} // Use predefined color
                                fill={moCodeColors[code]} // Use predefined color
                                name={code}
                            />
                        ))}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default App;
