import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Rest of your code...


const FinancialChart = ({ date }) => {
    console.log('date',typeof date)

    
    return (
        <AreaChart width={450} height={250} data={date === 'monthly'?MonthlyData:YearlyData}
        margin={{ top: 30, right: 30, left: 0, bottom: -10 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="15%" stopColor="#FC0404" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis dataKey='amt' />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Reckless Spending" stroke="#FC0404" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="Systametic Spending" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    );
};

const MonthlyData = 
    ([
        {
            "name": "1st week",
            "Reckless Spending": 10000,
            "Systametic Spending": 8000,
            "amt": 8000,
        },
        {
            "name": "2nd week",
            "Reckless Spending": 17000,
            "Systametic Spending": 13000,
            "amt": 16000
        },
        {
            "name": "3rd week",
            "Reckless Spending": 25000,
            "Systametic Spending": 19000,
            "amt": 24000
        },
        {
            "name": "4th week",
            "Reckless Spending": 30000,
            "Systametic Spending": 22500,
            "amt": 32000
        },

    ])
const YearlyData = 
    ([
        {
            "name": "Jan",
            "Reckless Spending": 29000,
            "Systametic Spending": 24000,
            "amt": 30000,
        },
        {
            "name": "Mar",
            "Reckless Spending": 53000,
            "Systametic Spending": 44000,
            "amt": 60000
        },
        {
            "name": "May",
            "Reckless Spending": 87000,
            "Systametic Spending": 72000,
            "amt": 90000
        },
        {
            "name": "July",
            "Reckless Spending": 109000,
            "Systametic Spending": 95000,
            "amt": 120000
        },
        {
            "name": "Oct",
            "Reckless Spending": 145000,
            "Systametic Spending": 120000,
            "amt": 150000
        },
        {
            "name": "Nov",
            "Reckless Spending": 163000,
            "Systametic Spending": 138000,
            "amt": 180000
        },

    ])


export default FinancialChart;
