import React, { useState, FC, useRef, useEffect } from "react";


interface OTPinputProps {
    digits?: number;
    onChange: (val: string) => void;
    className: string
}

let currentOtpIndex: number = 0;

const OtpInput:FC<OTPinputProps> = ({  onChange,  digits = 4, className}) => {

    const [otp, setOtp] = useState<string[]>(new Array(digits).fill(""));
    const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        const newOTP: string[] = [...otp];
        newOTP[currentOtpIndex] = value.substring(value.length - 1);
        
        if (!value) setActiveOtpIndex(currentOtpIndex - 1);
        else setActiveOtpIndex(currentOtpIndex + 1);
        setOtp(newOTP);

        onChange(newOTP.join(""));
    }

    const handleKeyDown = ({key}: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        currentOtpIndex = index;
        if(key === "Backspace") setActiveOtpIndex(currentOtpIndex - 1);
    }

    const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const input = e.currentTarget as HTMLInputElement;
        input.value = input.value.replace(/[-eE]/g, '');
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOtpIndex])

    return (
        <div className="flex gap-2 w-full justify-between">
            {otp.map((_, index) => (
                <React.Fragment key={index}>
                    <input type='tel' 
                    maxLength={1} minLength={0} 
                    ref={index === activeOtpIndex ? inputRef : null}
                    onInput={handleInput}
                    value={otp[index]}
                    onChange={handleChange}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`px-2 py-3 h-[60px] w-[60px] rounded-2xl border-2 border-solid outline-none text-center text-3xl font-bold ${className}`}  />

                </React.Fragment>
            ))
            }
        </div>
    )
}

export default OtpInput;
