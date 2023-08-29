import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/plots";

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
        MO: 200,
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
];

function App() {
    const chartData = data.map((item) => ({
        DATEMONTH: new Date(item.DATEMONTH).toISOString().slice(0, 7),
        MO: item.MO,
        MO_CODE: item.MO_CODE,
    }));

    const config = {
        data: chartData,
        xField: "DATEMONTH",
        yField: "MO",
        seriesField: "MO_CODE",
    };

    return (
        <>
            <div className="box">
                <Area {...config} />
            </div>
        </>
    );
}

export default App;
