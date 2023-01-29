import React from 'react';

const InputField = (props) => {
    return (
        <input {...props} type={props.type ?? 'text'} className={[
            'border border-gray-400 rounded-lg p-2 focus:shadow-inner focus:outline-none',
            props.className
        ].join(' ')}/>
    );
};

export default InputField;