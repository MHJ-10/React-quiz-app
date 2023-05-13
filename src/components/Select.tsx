import React from "react";
import { category } from "../services/questionCategory";

interface Select {
    label: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    defaultValue: number
}


const Select = ({label, onChange, defaultValue}: Select) => {
   return ( 
        <div className='d-flex my-3'>
         <label 
          className='form-label fs-5 text-light me-2' 
          htmlFor={label}>
          {label}:
         </label>

         <select
          className='form-select w-50'
          id={label}
          defaultValue={defaultValue}
          onChange={onChange}
         >
            {category.map((item) => (
               <option 
                key={item.value} 
                value={item.value}>
                {item.name}
               </option>
            ))}
           </select>
        </div>
     )
}

export default Select;