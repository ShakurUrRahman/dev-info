import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (
        <div className="card w-96 bg-slate-600 image-full mb-5">
            <figure><img src={logo} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-light text-center text-[#F7E018]">{name}</h2>
                <p className='font-bold text-black'>Quiz count: <span className='text-white'>{total}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/quiz/${id}`}>Start Quiz</Link> </button>
                </div>
            </div>
        </div>

    );
};

export default Topic;