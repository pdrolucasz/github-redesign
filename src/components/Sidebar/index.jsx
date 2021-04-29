import {
    useMediaQuery,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody
} from '@chakra-ui/react'

import { useSidebarDrawer } from '../../contexts/SideBarDrawerContext'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer()

    const [pageWidth] = useMediaQuery('(max-width: 1024px)')

    if(pageWidth) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerBody p="0">
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <SidebarNav />
    )
}
