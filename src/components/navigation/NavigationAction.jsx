import { Plus } from "lucide-react";
import { Tooltip } from "@mui/material";

export const NavigationAction = ({
    onClick
}) => {
    return (
        <div>
            <Tooltip title="Создать сервер" placement="right">
                <button className="group flex items-center" onClick={onClick}>
                    <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background bg-neutral-700 group-hover:bg-emerald-500">
                        <Plus
                            className="group-hover:text-white transition text-emerald-500"
                            size={25}
                        />
                    </div>
                </button>
            </Tooltip>
        </div>
    )
};