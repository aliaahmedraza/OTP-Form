import { useEffect , useState, useRef} from "react";
import React from 'react';
import "./OtpForm.css";

const OtpForm = ()=>{
    const Otp_Digit_Count = 4;
  const [inputArray, setInputArray] = useState(new Array(Otp_Digit_Count).fill(""));
  const refArray = useRef([]);
  useEffect(
    () => {
      refArray.current[0]?.focus();
      refArray.current[0]?.select();
    },[]
  )
  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    const newArray = [...inputArray];
    const newValue = value.trim();
    newArray[index] = newValue.slice(-1);
    console.log(newValue);
    setInputArray(newArray)
    newValue && refArray.current[index + 1]?.focus();
  }
  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace" && index !== 0) {
      refArray.current[index - 1]?.focus();
    }
  }
  return (
    <div className='flex justify-center p-32 '>
     <div className='otp-container flex flex-col justify-center items-center h-[50vh] w-[30vw] rounded-xl'>
      <strong><h1>Validate OTP</h1></strong>
      <div>
        {
        inputArray.map((input, index) => {
          return (
            <input className='otp-input'
              typye="text"
              key={index}
              value={inputArray[index]}
              onChange={(e) =>handleOnChange(e.target.value,index)}
              ref={input=> refArray.current[index]=input}
              onKeyDown={(e)=>handleOnKeyDown(e,index)}
            />
          )
        })
      }
      </div>
      <button 
  onClick={() => setInputArray(new Array(Otp_Digit_Count).fill(""))}
  className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition"
>
  OTP Verification
</button>
      </div>
    </div>

  )
}

export default OtpForm
