import React from 'react';

const Button = ((props) => {
    return (
        // @ts-ignore
        <button {...props}/>
    );
}) as React.FC<HTMLButtonElement>

export default Button;