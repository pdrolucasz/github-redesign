import { Flex, Stack, Icon, Text, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { Input } from '../components/Form/Input'

import { RiGithubFill } from 'react-icons/ri'

import { useAuth } from '../contexts/AuthContext'

export function SignIn() {
    const { signIn } = useAuth()

    const { register, handleSubmit, formState } = useForm()

    async function handleSignin(values) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        signIn(values.userName)
    }

    return (
        <Flex
            w="100vw"
            h="100vh"
            align="center"
            justify="flex-start"
            flexDirection="column"
            pt="6"
        >
            <Stack
                spacing="6"
                display="flex"
                justify="stretch"
                align="center"
                mb="6"
            >
                <Icon as={RiGithubFill} fontSize="150" />
                <Text as="h1" color="gray.900" fontSize="xx-large">Sign in to GitHub</Text>
            </Stack>
            <Flex
                as="form"
                w="100%"
                maxWidth={360}
                bg="#1e49e9"
                p="8"
                borderRadius="8"
                flexDirection="column"
                onSubmit={handleSubmit(handleSignin)}
            >
                <Stack spacing="6">
                    <Input
                        name="userName"
                        type="text"
                        label="Username"
                        {...register('userName')}
                    />
                </Stack>

                <Button
                    type="submit"
                    mt="6"
                    colorScheme="twitter"
                    color="gray.50"
                    size="lg"
                    isLoading={formState.isSubmitting}
                >
                    Sign in
                </Button>

            </Flex>
        </Flex>
    )
}