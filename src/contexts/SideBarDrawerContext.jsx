import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";

const SideBarDrawerContext = createContext({})

export function SideBarDrawerProvider({ children }) {
    const disclosure = useDisclosure()

    return (
        <SideBarDrawerContext.Provider
            value={disclosure}
        >
            {children}
        </SideBarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext)
