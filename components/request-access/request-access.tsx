import {
  Button,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

const RequestAccess: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState('');
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value);
  const isError = input === '' || !input.includes('@');

  const handleRequestAccess = async() => {
    setIsLoading(true);
    const request = await fetch('/api/request-access',
    {
      method: 'POST',
      body: JSON.stringify({
        email: input
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if(!request.ok) {
      toast({
        title: 'Error',
        description: "Something is wrong, please try again later",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    const response = await request.json();

    toast({
      title: 'Request',
      description: response.message,
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    setIsLoading(false);
    setInput('');
    onClose();
  };

  return (
    <>
      <Link
        mt="5"
        fontSize="lg"
        textAlign='center'
        onClick={onOpen}
      >
        {`Don't have access?, click here.`}
      </Link>
      <Modal colorScheme={'blackAlpha'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="black">
          <ModalHeader>Request Access</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Please enter your spotify account email: </p>
            <FormControl isInvalid={isError}>
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                value={input} 
                onChange={handleInputChange} 
                placeholder="test@gmail.com" 
              />
              {isError &&
                <FormErrorMessage>Valid email is required.</FormErrorMessage>
              }
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="brand" isDisabled={isError || isLoading} onClick={handleRequestAccess}>Request</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RequestAccess;
