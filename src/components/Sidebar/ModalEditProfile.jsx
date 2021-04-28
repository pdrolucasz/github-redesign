import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Stack
} from "@chakra-ui/react"

import { useForm } from 'react-hook-form'

import { InputModal } from '../Form/InputModal'

import { useAuth } from '../../contexts/AuthContext'

export function ModalEditProfile({ isOpen, onClose }) {
    const { register, handleSubmit, formState } = useForm()

    const { updateUser, user } = useAuth()

    async function handleUpdateUser(values) {
        await new Promise(resolve => setTimeout(resolve, 1000))

        updateUser(values.description, values.company, values.location)
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent color="gray.900">
                <ModalHeader>Edit Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex
                        as="form"
                        width="100%"
                        p="8"
                        flexDirection="column"
                        onSubmit={handleSubmit(handleUpdateUser)}
                    >
                        <Stack spacing="4">
                            <InputModal
                                name="description"
                                label="Descrição"
                                type="text"
                                defaultValue={user.bio}
                                {...register('description')}
                            />
                            <InputModal
                                name="company"
                                label="Empresa"
                                type="text"
                                defaultValue={user.company}
                                {...register('company')}
                            />
                            <InputModal
                                name="location"
                                label="Localização"
                                type="text"
                                defaultValue={user.location}
                                {...register('location')}
                            />
                        </Stack>

                        <Button
                            type="submit"
                            mt="6"
                            colorScheme="messenger"
                            size="lg"
                            isLoading={formState.isSubmitting}
                        >
                            Save
                        </Button>
                    </Flex>
                </ModalBody>

                <ModalFooter justifyContent="center">
                    <Button
                        onClick={onClose}
                        type="button"
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
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
      </Modal>
    )
}