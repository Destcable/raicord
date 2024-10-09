import { NavigationAction } from "./NavigationAction"
import { NavigationHome } from "./NavigationHome"
import { NavigationItem } from "./NavigationItem"

const servers = [
    {
        id: 1,
        name: 'Artem',
        imageUrl: 'https://cdn.discordapp.com/icons/1046979304547954728/bbe5d6097255431300cfc18dd629b876.webp?size=96'
    },
    {
        id: 2,
        name: 'Artem 2',
        imageUrl: 'https://cdn.discordapp.com/icons/662267976984297473/39128f6c9fc33f4c95a27d4c601ad7db.webp?size=96'
    },
    {
        id: 3,
        name: 'Artem 3',
        imageUrl: 'https://cdn.discordapp.com/icons/884841743995011082/adb2428013278d3dcd59020c9ac2eb22.webp?size=96'
    }
]

export const NavigationSidebar = () => {
    return (
        <div className="space-y-4 flex flex-col items-center h-full text-primary text-white w-full bg-[#1E1F22] py-3">
            <NavigationHome />
            <div className="h-[2px] bg-zinc-700 rounded-md w-10 mx-auto" />
            <div className="flex-1 w-full overflow-auto h-[200px]">
                {servers.map((server) => (
                    <div key={server.id} className="mb-4">
                        <NavigationItem
                            id={server.id}
                            name={server.name}
                            imageUrl={server.imageUrl}
                        />
                    </div>
                ))}
            </div>
            <NavigationAction />
        </div>
    )
}