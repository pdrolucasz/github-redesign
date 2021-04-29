import {
    Flex,
    Text,
    Input,
    Icon,
    SimpleGrid,
    Box,
    Stack,
    HStack,
    useMediaQuery,
    IconButton
} from '@chakra-ui/react'
import { RiSearchLine, RiStarFill, RiStackshareLine, RiMenuLine } from 'react-icons/ri'

import { Sidebar } from '../components/Sidebar'
import { useAuth } from '../contexts/AuthContext'
import { useSidebarDrawer } from '../contexts/SideBarDrawerContext'

export function Dashboard() {
    const { repos } = useAuth()
    const { onOpen } = useSidebarDrawer()
    const [pageWidth] = useMediaQuery('(max-width: 1024px)')

    return (
        <Flex
            flexDirection={pageWidth ? 'column' : 'row'}
        >
            {pageWidth && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    mr="auto"
                    color="gray.900"
                    variant="unstyled"
                    onClick={onOpen}
                >

                </IconButton>
            )}
            <Sidebar />
            <Flex
                p="8"
                color="gray.900"
                flexDirection="column"
                maxWidth={1400}
                style={{
                    width: 'calc(100% - 32rem)'
                }}
                ml={pageWidth ? '' : 'auto'}
            >
                <Flex
                    as="header"
                    flexDirection="column"
                    mb="8"
                    w="100vw"
                >
                    <Text as="h1" fontSize="xx-large" fontWeight="bold">Repositories</Text>
                    <Flex mt="4" flexDirection={pageWidth ? 'column' : 'row'}>
                        <Text as="p" fontSize="lg">{repos.length} Repositories has created so far</Text>

                        <Flex
                            as="label"
                            flex="1"
                            ml={pageWidth ? '0' : '6'}
                            mt={pageWidth ? '4' : '0'}
                            color="gray.900"
                        >
                            <Icon as={RiSearchLine} fontSize="20" alignSelf="center" mr="1" />
                            <Input
                                variant="unstyled"
                                placeholder="Search"
                                _placeholder={{ color: 'gray.900' }}
                            />
                        </Flex>
                    </Flex>
                </Flex>
                {repos && (
                    <SimpleGrid minChildWidth="320px" spacing={4}>
                        {repos.map(repository => (
                            <Box
                                p="8"
                                borderRadius={8}
                                border="1px"
                                borderColor="#2f54fd"
                                bg="gray.50"
                                key={repository.id}
                            >
                                <Stack spacing="8">
                                    <Box>
                                        <Text fontSize="lg">{repository.name}</Text>
                                        <Text as="span" color="gray.500">Updated 2 days ago</Text>
                                    </Box>
                                    <Text>{repository.description}</Text>
                                    <HStack spacing="4">
                                        <Flex align="center">
                                            <Icon as={RiStarFill} />
                                            <Text>{repository.stargazers_count}</Text>
                                        </Flex>
                                        <Flex align="center">
                                            <Icon as={RiStackshareLine} />
                                            <Text>{repository.forks_count}</Text>
                                        </Flex>
                                    </HStack>
                                </Stack>
                            </Box>
                        ))}
                    </SimpleGrid>
                )}
            </Flex>
        </Flex>
    )
}
