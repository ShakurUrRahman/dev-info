import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData().data.questions;
    return (
        <div>
            <h2 className='text-5xl font-bold text-[#4568ea] mt-16 mb-5 text-center'>Answer this quizzes:</h2>
            {
                quizzes.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizzes;