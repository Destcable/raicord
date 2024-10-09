import { NavigationAction } from "./NavigationAction"

export const NavigationSidebar = () => { 
    return ( 
        <div className="space-y-4 flex flex-col items-center h-full text-primary text-white w-full bg-[#1E1F22] py-3">
            <NavigationAction />
        </div>
    )
}