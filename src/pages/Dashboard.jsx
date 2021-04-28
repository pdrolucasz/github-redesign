import { Flex, Text, Input, Icon, SimpleGrid, Box, Stack } from '@chakra-ui/react'
import { RiSearchLine, RiStarFill, RiStackshareLine, RiAuctionFill } from 'react-icons/ri'

import { Sidebar } from '../components/Sidebar'
import { useAuth } from '../contexts/AuthContext'

export function Dashboard() {
    const { repos } = useAuth()
    console.log(repos)

    return (
        <Flex>
            <Sidebar />
            <Flex
                p="10"
                color="gray.900"
                flexDirection="column"
                w="full"
                maxWidth={1418}
                ml="auto"
            >
                <Flex
                    as="header"
                    flexDirection="column"
                    mb="8"
                >
                    <Text as="h1" fontSize="xx-large" fontWeight="bold">Repositories</Text>
                    <Flex mt="4">
                        <Text as="p" fontSize="lg">{repos.length} Repositories has created so far</Text>

                        <Flex
                            as="label"
                            flex="1"
                            ml="6"
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
                    <SimpleGrid columns={3} gap="4" minChildWidth="320px" align="flex-start">
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
                                    <Flex justify="space-between">
                                        <Flex align="center">
                                            <Icon as={RiStarFill} />
                                            <Text>{repository.stargazers_count}</Text>
                                        </Flex>
                                        <Flex align="center">
                                            <Icon as={RiStackshareLine} />
                                            <Text>{repository.forks_count}</Text>
                                        </Flex>
                                    </Flex>
                                </Stack>
                            </Box>
                        ))}
                    </SimpleGrid>
                )}
            </Flex>
        </Flex>
    )
}
