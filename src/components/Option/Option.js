import React from 'react';
import { toast } from 'react-toastify';

const Option = ({ option, quiz }) => {
    const { correctAnswer } = quiz;
    // console.log(correctAnswer);
    const showResult = () => {
        correctAnswer === option ? toast.success('You are correct', {
            position: "top-center"
        }) : toast.error('You are wrong', {
            position: "top-center"
        })
    }
    return (
        <div className='bg-[#F7E018] lg:text-xl text-sm mt-2 border rounded-lg lg:p-5 p-2 flex items-center'>
            <input onClick={() => showResult()} className='mr-4' type='radio' name='quiz' id='quiz' />
            <label>{option}</label>
        </div>
    );
};

export default Option;