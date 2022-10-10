import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (

        <div className="card w-96 bg-slate-600 shadow-xl image-full mb-5">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{total}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/quiz/${id}`}>Start Quiz</Link> </button>
                </div>
            </div>
        </div>

    );
};

export default Topic;