import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex flex-col">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
        </div>
    );
};

export default Home;