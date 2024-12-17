import React from 'react'
import { third_banner } from '../../exportImages/export'

const CustomImageComponent = () => {


  return (
    <div>
       <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
              <img
                src={third_banner}
                alt="Modern Home Top"
                className="w-full h-full object-cover"
              />
            </div>
    </div>
  )
}

export default CustomImageComponent
