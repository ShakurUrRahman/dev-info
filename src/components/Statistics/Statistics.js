import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, } from 'recharts';

const Statistics = () => {
    const statistics = useLoaderData().data;
    console.log(statistics);
    return (
        <div>
            <h1 className='text-5xl font-bold  text-[#4568ea] mt-16 mb-5 text-center'>Our statistics section</h1>
            <BarChart width={500} height={200} data={statistics}>
                <Bar dataKey="total" fill="#61DAFB" />
                <XAxis dataKey="total">
                </XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Statistics;