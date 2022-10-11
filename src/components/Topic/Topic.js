import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    // console.log(topic);
    return (
        <div className="card w-96 bg-slate-600 image-full mb-5">
            <figure><img src={logo} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-5xl font-light text-center text-[#F7E018]">{name}</h2>
                <p className='font-bold text-black'>Quiz count: <span className='text-white'>{total}</span></p>
                <div className="card-actions justify-end">
                    <div>
                        <button className="btn btn-ghost"><Link to={`/quiz/${id}`}>Start Quiz</Link> <ArrowRightIcon className="h-6 w-6 text-red-500" /></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Topic;