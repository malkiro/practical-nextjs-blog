import React from 'react'

const StyledButton = ({
    title = "",
    dark = false,
}) => {
    return (
        <button className={`border-[1px] px-[16px] py-[8px] flex items-center rounded-[6px] text-[14px]
        ${dark ? "bg-blue-800 text-white hover:bg-blue-900" : "bg-white text-black hover:bg-gray-100"}
        `}>
            {title}
        </button>
    )
}

export default StyledButton
