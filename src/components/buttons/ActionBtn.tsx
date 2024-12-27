import React, { FC, MouseEventHandler } from 'react';



type Itext = {
    text: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    img?: string;
    className: string;
}


const ActionBtn:FC<Itext> = ({text, onClick, img, className }) => {
    return(
        <div onClick={onClick}  className={className}>
            <span className="text-sm">{text}</span>
           {img && <img src={img} alt="" className={className} />}
        </div >

    )
}

export default ActionBtn;
