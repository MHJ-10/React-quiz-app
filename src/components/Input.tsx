import React from "react"

interface Input {
   label: string
   width: number
   type: string
   min?: number 
   max?: number
   value?: string | number 
   defaultValue?: number | string
   onChange: (e : React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({label, width, type, min, max, defaultValue, value, onChange }: Input) => {
   return ( 
      <div className="d-flex my-3">
        <label 
         className='form-label fs-5 text-light me-2' 
         htmlFor={label}>
            {label}:
        </label>
        <input
         className = {`form-control w-${width}`}
         id={label}
         type={type}
         min={min}
         max={max}
         defaultValue={defaultValue}
         value={value}
         onChange={onChange}
        />
      </div>
   );
}

export default Input;