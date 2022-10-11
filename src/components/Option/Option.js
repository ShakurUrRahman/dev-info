import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, quiz }) => {
    const { correctAnswer } = quiz;
    console.log(correctAnswer);
    const showResult = () => {
        if (correctAnswer === option) {
            toast('You are correct', {
                position: "top-center"
            })
        }
        else {
            toast('You are wrong', {
                position: "top-center"
            })
        }
    }


    return (
        <div className='bg-[#F7E018] text-xl mt-2 border rounded-lg p-5 flex items-center'>
            <input onClick={() => showResult(correctAnswer)} className='mr-4' type='radio' name='quiz' id='quiz' />
            <label>{option}</label>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;