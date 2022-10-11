import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const statistics = useLoaderData().data;

    return (
        <div className='bar-chart'>
            <h1 className='text-5xl font-bold  text-[#4568ea] mt-16 mb-5 text-center'>Our statistics section</h1>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart width={500} height={400} data={statistics}>
                    <Bar dataKey="total" fill="#61DAFB" />
                    <XAxis dataKey="total">
                    </XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;