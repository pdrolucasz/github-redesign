import { forwardRef } from 'react'
import { Input as ChakraInput, FormLabel, FormControl } from '@chakra-ui/react'

const InputForm = ({ name, label, ...rest }, ref) => {
    return (
        <FormControl>
            {!!label && <FormLabel color="gray.50" htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name}
                id={name}
                bgColor="blue.900"
                color="gray.50"
                variant="filled"
                _hover={{
                    backgroundColor: 'blue.900'
                }}
                _focus={{
                    border: '2',
                    borderColor: 'blue.400',
                    boxShadow: 'dark-lg'
                }}
                size="lg"
                ref={ref}
                {...rest}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputForm)
