import React from 'react'

const Linkedinicon = ({width , height , className ,  iconColor , }) => {
  return (
   
<svg width={width} height={height} className={className} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.39023 11.7051H1.06523V4.23008H3.39023V11.7051ZM2.21523 3.23008C1.49023 3.23008 0.890234 2.60508 0.890234 1.85508C0.890234 1.13008 1.49023 0.530078 2.21523 0.530078C2.96523 0.530078 3.56523 1.13008 3.56523 1.85508C3.56523 2.60508 2.96523 3.23008 2.21523 3.23008ZM12.0652 11.7051H9.76523V8.08008C9.76523 7.20508 9.74023 6.10508 8.54023 6.10508C7.34023 6.10508 7.16523 7.03008 7.16523 8.00508V11.7051H4.84023V4.23008H7.06523V5.25508H7.09023C7.41523 4.68008 8.16523 4.05508 9.29023 4.05508C11.6402 4.05508 12.0902 5.60508 12.0902 7.60508V11.7051H12.0652Z" fill={iconColor ? iconColor : "#FAFAFA" }/>
</svg>

  )
}

export default Linkedinicon