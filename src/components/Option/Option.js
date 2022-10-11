import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='bg-[#F7E018] text-xl p-5 flex items-center'>
            <input type="radio" value="option" for='option' id='option' />{option}
        </div>
    );
};

export default Option;