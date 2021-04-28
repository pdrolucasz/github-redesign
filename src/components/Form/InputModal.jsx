import { forwardRef } from 'react'
import { Input as ChakraInput, FormLabel, FormControl } from '@chakra-ui/react'

const InputBase = ({ name, label, ...rest }, ref) => {
    return (
        <FormControl>
            {!!label && <FormLabel color="gray.900" htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name}
                id={name}
                color="gray.900"
                variant="outline"
                _hover={{ 
                    bgColor: 'gray.300'
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

export const InputModal = forwardRef(InputBase)
