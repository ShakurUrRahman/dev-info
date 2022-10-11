import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: `url("dev-info.jpg")` }}>
            <div className="hero-overlay bg-opacity-5"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="flex flex-col ">
                    <h1 className="mb-5 text-5xl font-bold mt-16 text-[#4568ea]">Now this is the time to prove yourself!!</h1>
                    <p className="mb-5 text-[#F7E018]">We made for you some topics wise quizzes. You can go through it and sharp your knowledge by this.</p>
                    <div className='lg:grid grid-cols-2 lg:gap-10 lg:mt-12 mx-auto'>
                        {
                            topics.map(topic => <Topic
                                key={topic.id}
                                topic={topic}
                            ></Topic>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;