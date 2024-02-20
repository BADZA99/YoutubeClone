import React from 'react'
import { Tooltip } from 'react-tooltip'

const ToolTips = () => {
const TOOLTIPS=["Settings","search","voiceSearch"]
  return (
    <div>
        {TOOLTIPS.map((id,index)=>(
            <Tooltip style={{zIndex:"1000"}} key={index} id={id} noArrow/>
        ))}
      
    </div>
  )
}

export default ToolTips
