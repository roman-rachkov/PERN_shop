import React from 'react';

const Button = ( props) => {
    return (
        <button className={[
            'py-2 px-4 rounded-lg bg-gray-400 w-fit hover:bg-gray-200',
            props.className
        ].join(' ')}>
            {props.children}
        </button>
    );
};

export default Button;