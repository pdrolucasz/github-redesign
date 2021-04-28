import { Flex, Box, Stack, Text, Link, Icon, Avatar, Button, useDisclosure  } from '@chakra-ui/react'
import {
    RiGitRepositoryLine,
    RiGitPullRequestLine,
    RiShoppingBag2Line,
    RiGlobalLine,
    RiEyeLine,
    RiStarLine,
    RiGroupLine,
    RiGithubFill,
    RiBuildingLine,
    RiMapPinFill
} from 'react-icons/ri'
import { FiAlertCircle } from 'react-icons/fi'

import { useAuth } from '../../contexts/AuthContext'
import { ModalEditProfile } from './ModalEditProfile'

export function Sidebar() {
    const { user } = useAuth()
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log(user)

    return (
        <Flex
            as="aside"
            w="70"
            h="100vh"
            position="fixed"
        >
            <Flex
                p="8"
                bg="#2f54fd"
                flexDirection="column"
                align="center"
            >
                <Stack spacing="12" align="flex-start">
                    <Box>
                        <Text fontWeight="bold" color="gray.400" fontSize="small">MAIN</Text>
                        <Stack spacing="4" mt="8" align="stretch">
                            <Link display="flex" align="center">
                                <Icon as={RiGitPullRequestLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Pull requests</Text>
                            </Link>
                            <Link display="flex" align="center">
                                <Icon as={FiAlertCircle} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Issues</Text>
                            </Link>
                            <Link display="flex" align="center">
                                <Icon as={RiShoppingBag2Line} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Market</Text>
                            </Link>
                            <Link display="flex" align="center">
                                <Icon as={RiGlobalLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Explore</Text>
                            </Link>
                        </Stack>
                    </Box>
                    <Box>
                        <Text fontWeight="bold" color="gray.400" fontSize="small">OTHER</Text>
                        <Stack spacing="4" mt="8" align="stretch">
                            <Link display="flex" align="center">
                                <Icon as={RiEyeLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Overview</Text>
                            </Link>
                            <Link display="flex" align="center" color="pink.200">
                                <Icon as={RiGitRepositoryLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Repositories</Text>
                            </Link>
                            <Link display="flex" align="center">
                                <Icon as={RiStarLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Stars</Text>
                            </Link>
                            <Link display="flex" align="center">
                                <Icon as={RiGroupLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">Followers</Text>
                            </Link>
                        </Stack>
                    </Box>
                </Stack>

                <Icon as={RiGithubFill} fontSize="100" mt="auto" />
            </Flex>
            <Flex
                p="16"
                bg="gray.50"
                flexDirection="column"
                align="center"
                color="gray.900"
            >
                <Stack
                    display="flex"
                    flexDirection="column"
                    align="center"
                    textAlign="center"
                    spacing="6"
                >
                    <Avatar
                        size="2xl"
                        name="Pedro Lucas"
                        src={user.avatar_url}
                    />
                    <Box>
                        <Text as="h2" fontSize="24">{user.name}</Text>
                        <Text as="span">@{user.login}</Text>
                    </Box>
                    {user.bio && (
                        <Text
                            maxWidth={180}
                            as="p"
                            fontSize="20"
                        >
                        {user.bio}
                        </Text>
                    )}
                    <Stack spacing="4">
                        {user.company && (
                            <Flex align="center">
                                <Icon as={RiBuildingLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">{user.company}</Text>
                            </Flex>
                        )}
                        {user.location && (
                            <Flex align="center">
                                <Icon as={RiMapPinFill} fontSize="20" />
                                <Text ml="4" fontWeight="medium">{user.location}</Text>
                            </Flex>
                        )}
                    </Stack>
                </Stack>
                <Button
                    type="button"
                    onClick={onOpen}
                    mt="6"
                    colorScheme="messenger"
                    border="solid"
                    borderColor="messenger.400"
                    bg="transparent"
                    color="gray.900"
                    size="lg"
                    _hover={{
                        color: 'gray.50',
                        backgroundColor: 'messenger.400'
                    }}
                >
                    Edit Profile
                </Button>
                <ModalEditProfile onClose={onClose} isOpen={isOpen} />
            </Flex>
        </Flex>
    )
}
