import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" ;
import img1 from "../assets1/7.jpg"
import img8 from "../assets1/8.avif"
import img9 from "../assets1/9.avif"
import img2 from "../assets1/2.jpg"
import img3 from "../assets1/3.jpg"
import img4 from "../assets1/4.jpg"
import img5 from "../assets1/6.jpg"

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };

const Home = () => {
  return (
    <Box >
    <Carousel autoPlay infiniteLoop interval={1000}showArrows={false} showStatus={false} showThumbs={false}>
        {/* <Box w={"full"} h={"100ch"}>
            <Image src={img8} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Race is Power</Heading>
        </Box> */}
        {/* <Box w={"full"} h={"100ch"}>
            <Image src={img9}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Future is gaming</Heading>
        </Box> */}
        <Box w={"full"} h={"50ch"}>
            <Image src={img3}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the Future</Heading>
        </Box>
        <Box w={"full"} h={"50ch"}>
            <Image src={img4}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the Future</Heading>
        </Box>
        <Box w={"full"} h={"50ch"}>
            <Image src={img1}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the Future</Heading>
        </Box>
    </Carousel>

    <Container maxW={'container.xl'} minH={'50vh'} p="4">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img3} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
            fontSize={"20"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}


export default Home