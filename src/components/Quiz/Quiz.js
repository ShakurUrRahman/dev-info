import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizzes = useLoaderData().data.questions;
    return (
        <div>
            {
                quizzes.map(quiz => console.log(quiz))
            }
        </div>
    );
};

export default Quiz;