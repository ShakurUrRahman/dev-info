import React from 'react';

const Option = ({ option }) => {

    return (
        <div className='bg-[#F7E018] text-xl mt-2 border rounded-lg p-5 flex items-center'>
            <input className='mr-4' type='radio' name='quiz' id='quiz' />
            <label>{option}</label>

        </div>
    );
};

export default Option;