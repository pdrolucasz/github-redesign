import { Link, Icon, Text } from '@chakra-ui/react'
import RiIcons from 'react-icons/fi'

export function LinkSidebar({ icon: Icon, text }) {
    return (
        <Link display="flex" align="center">
            <Icon />
            <Text ml="4" fontWeight="medium">{text}</Text>
        </Link>
    )
}