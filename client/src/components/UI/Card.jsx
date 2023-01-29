import React from 'react';

const Card = ({children, className}, props) => {
    return (
        <div
            {...props}
            className={['form border border-gray-400 rounded-lg p-[15px] flex flex-col h-fit', className].join(' ')}
        >
            {children}
        </div>
    );
};

export default Card;