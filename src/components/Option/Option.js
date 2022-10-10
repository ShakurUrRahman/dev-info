import React from 'react';

const Option = ({ option }) => {
    return (
        <div>

            <input type="radio" value="option" />{option}

        </div>
    );
};

export default Option;