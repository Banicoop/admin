import React, { FC, MouseEventHandler } from 'react';



type Itext = {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    img?: string;
    img1?: string;
    className: string;
    className1?: string;
    className2?: string;
    disabled?: any;
}


const ActionBtn:FC<Itext> = ({text, onClick, img, className, className1, className2, img1, disabled }) => {
    return(
        <button onClick={onClick}  className={` ${className} ${disabled ? 'bg-[#02020238] cursor-not-allowed': 'cursor-pointer'}`}>
            {img1 && <img src={img1} alt="" className={className2} />}
            <span className="">{text}</span>
            {img && <img src={img} alt="" className={className1} />}
        </button >

    )
}

export default ActionBtn;
