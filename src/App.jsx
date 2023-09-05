import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/plots";
import { Button, Checkbox, Form, Input } from "antd";
import "./App.css";
import chartApi from "./api/api-chart";
import { useQuery } from "@tanstack/react-query";

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
    const { data, isLoading } = useQuery({
        queryKey: ["chartData"],
        queryFn: async () => {
            const response = await chartApi.getChartData();
            return response;
        },
        keepPreviousData: true,
    });

    const chartData = data?.data?.map((item) => ({
        datemonth: new Date(item.datemonth).toISOString().slice(0, 7),
        mo: item.mo,
        mO_CODE: item.mO_CODE,
    }));

    const config = {
        data: chartData,
        xField: "datemonth",
        yField: "mo",
        seriesField: "mO_CODE",
        color: [
            "#E74C3C",
            "#3498DB",
            "#2ECC71",
            "#F1C40F",
            "#9B59B6",
            "#95A5A6",
            "#D35400",
            "#2980B9",
            "#1ABC9C",
            "#F39C12",
            "#C0392B",
            "#34495E",
            "#E67E22",
            "#16A085",
            "#FDD835",
            "#8E44AD",
            "#7F8C8D",
            "#FF6F61",
            "#5DADE2",
            "#27AE60",
        ],
        areaStyle: {
            fillOpacity: 1,
            stroke: "black",
            lineWidth: 0,
        },
        meta: {
            datemonth: {
                range: [0, 1],
            },
        },
    };

    // const [form] = Form.useForm();

    // const onFinish = (values) => {
    //     console.log("Success:", values);
    //     form.resetFields();
    // };
    // const onFinishFailed = (errorInfo) => {
    //     console.log("Failed:", errorInfo);
    // };

    return (
        <>
            <div className="box">
                {/* <div className="form">
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                            margin: "0 auto",
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Value"
                            name="value"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your value!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div> */}
                {isLoading ? (
                    <div className="wrap_loader">
                        <div className="loader">
                            <div className="circle" />
                            <div className="circle" />
                            <div className="circle" />
                            <div className="circle" />
                        </div>
                    </div>
                ) : null}
                {data && !isLoading ? (
                    <div className="chart">
                        <Area {...config} />
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default App;
