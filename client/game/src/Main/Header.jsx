import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    VStack,
    HStack,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <>
      
    <Button 
    zIndex={"overlay"}
     pos={"fixed"}
            top={"4"}
            left={"4"}
            colorScheme='purple'
            p={"0"}
            w={"10"}
            h={"10"}
            borderRadius={"full"}
            onClick={onOpen}

    >
        <BiMenuAltLeft size={"20"}/>
    </Button>
    <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>GAME ZONE</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
                <Button  onClick={onClose}variant={"ghost"} colorScheme='purple'>
    <Link to="/">Home</Link>
                </Button>
                {/* <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
    <Link to="/videos">Videos</Link>
                </Button> */}

                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
    <Link to="/about">About</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
    <Link to="/services">Services</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
    <Link to="/rules">Rules to Play</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
    <Link to="/game">Play Now</Link>
                </Button>
                {/* <Button  onClick={onClose}variant={"ghost"} colorScheme='purple'>
    <Link to="/videos?category=free">Free Videos</Link>
                </Button> */}
                {/* <Button  onClick={onClose}variant={"ghost"} colorScheme='purple'>
    <Link to="/upload">Upload Video</Link>
                </Button> */}
            </VStack>
            {/* <Input placeholder='Type here...' /> */}
           
          </DrawerBody>

          <DrawerFooter left={"-5"}  right={"-2"}>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
             <HStack justifyContent={"space-evenly"}>
                <Button  onClick={onClose}colorScheme='purple'  left={"-20"}>
                    <Link to="/login">Login</Link>
                </Button>
                <Button  onClick={onClose} variant='outline'  colorScheme='purple' left={"-10"}>
                    <Link to="/register">Signup</Link>
                </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


    </>
  )
}

export default Header