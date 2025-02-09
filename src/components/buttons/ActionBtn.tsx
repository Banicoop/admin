import React, { FC, MouseEventHandler } from 'react';



type Itext = {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    img?: string;
    img1?: string;
    className: string;
    className1?: string;
    className2?: string;
}


const ActionBtn:FC<Itext> = ({text, onClick, img, className, className1, className2, img1 }) => {
    return(
        <button onClick={onClick}  className={`cursor-pointer ${className}`}>
            {img1 && <img src={img1} alt="" className={className2} />}
            <span className="text-xs">{text}</span>
            {img && <img src={img} alt="" className={className1} />}
        </button >

    )
}

export default ActionBtn;
