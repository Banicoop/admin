import React, { useState, FC, useRef, useEffect } from "react";


interface OTPinputProps {
    digits?: number;
    onChange: (val: string) => void;
    className: string
}

const OtpInput: FC<OTPinputProps> = ({
  onChange,
  digits = 4,
  className
}) => {
  const [otp, setOtp] = useState<string[]>(Array(digits).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, "").slice(-1);

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    if (value && index < digits - 1) {
      setActiveIndex(index + 1);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (!otp[index] && index > 0) {
        setActiveIndex(index - 1);
      }

      newOtp[index] = "";
      setOtp(newOtp);
      onChange(newOtp.join(""));
    }
  };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, digits);

    if (!pasted) return;

    const newOtp = pasted.split("");
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // focus last filled input
    setActiveIndex(Math.min(pasted.length, digits - 1));
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeIndex]);

  return (
    <div className="flex gap-2 w-full justify-between">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={index === activeIndex ? inputRef : null}
          type="tel"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={index === 0 ? handlePaste : undefined}
          className={`px-2 py-3 h-[60px] w-[60px] rounded-2xl border-2 text-center text-3xl font-bold ${className}`}
        />
      ))}
    </div>
  );
};


export default OtpInput;
