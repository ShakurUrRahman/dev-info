import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData();
    const { data } = quizzes;
    const { questions, name } = data;

    return (
        <div>
            <h2 className='text-5xl font-bold text-[#4568ea] lg:my-16 my-8 text-center'>Answer {name} quizzes:</h2>
            {
                questions.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizzes;