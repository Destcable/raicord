import { Tooltip } from "@mui/material";
import { useState } from "react";

export const NavigationItem = ({
    id,
    name,
    imageUrl
}) => {
    const [currentServerId, setCurrentServerId] = useState(null);
    const onClick = () => setCurrentServerId(id);
    console.log(currentServerId)

    return (
        <Tooltip title={name} placement="right">
            <button
                onClick={onClick}
                className="group relative flex items-center"
            >
                <div className={`absolute left-0 bg-white rounded-r-full transition-all w-[4px] 
                    ${currentServerId !== id && 'group-hover:h-[20px]'}
                    ${currentServerId === id ? 'h-[36px]' : 'h-[8px]'}
                `} />
                <div className={`
                    relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden
                    ${currentServerId === id && "bg-white/10 text-white rounded-[16px]"}
                `}>
                    <img src={imageUrl} alt="Channel" />
                </div>
            </button>
        </Tooltip>
    )
};