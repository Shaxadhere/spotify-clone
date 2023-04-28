import { Box, Card, CardBody, Flex, Grid, GridItem, HStack, Heading, Icon, IconButton, Image, SimpleGrid, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { icons } from '../config/constants/icons'

const Home = () => {

    const topArtists = [
        {
            name: "Post Malone",
            image: "https://upload.wikimedia.org/wikipedia/en/7/72/Stoneyalbum.jpg",
            slug: "post-malone",
            song: "Stoney"
        },
        {
            name: "Troye Sivan",
            image: "https://upload.wikimedia.org/wikipedia/en/3/38/Troye_Sivan_-_Blue_Neighbourhood.png",
            slug: "troye-sivan",
            song: "Blue Neighbourhood"
        },
        {
            name: "Juice WRLD",
            image: "https://i1.sndcdn.com/artworks-6ckvoVw7hI2UphtB-R46ZkA-t500x500.jpg",
            slug: "juice-wrld",
            song: "Robbery"
        },
        {
            name: "Lil Uzi Vert",
            image: "https://media.pitchfork.com/photos/59a4383b8f174d4ac3871d97/1:1/w_600/600x600bb-1.jpg",
            slug: "lil-uzi-vert",
            song: "Luv Is Rage 2"
        },
        {
            name: "Drake",
            image: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
            slug: "drake",
            song: "Scorpion"
        },
        {
            name: "The Weeknd",
            image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
            slug: "the-weeknd",
            song: "After Hours"
        },
        {
            name: "Lil Baby",
            image: "https://media.pitchfork.com/photos/5e56ce610e27b00008f7b845/1:1/w_600/My%20Turn_Lil%20Baby.jpg",
            slug: "lil-baby",
            song: "My Turn"
        },
        {
            name: "J. Cole",
            image: "https://upload.wikimedia.org/wikipedia/en/d/d3/JColeKOD.jpg",
            slug: "j-cole",
            song: "KOD"
        },
        {
            name: "Travis Scott",
            image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg",
            slug: "travis-scott",
            song: "Astroworld"
        },
        {
            name: "XXXTentacion",
            image: "https://media.pitchfork.com/photos/59a73b170f1e570bad6cc33f/1:1/w_600/17_xxx.jpg",
            slug: "xxxtentacion",
            song: "17"
        },
    ]

    return (
        <Box>
            <Flex align={"end"}>
                <Heading as="h2" color="#000" fontSize={30} fontWeight={"bold"}>Top Artists</Heading>
                <Text ml={5} fontSize="16px" color="#a1a1a1"> - Top 50</Text>
            </Flex>

            <HStack overflow={"auto"} spacing={5} mt={5}>
                {topArtists.map((item, index) => {
                    return (
                        <Box minW="250px" w="250px" key={index} >
                            <Image
                                boxShadow={"5px 5px 9px -1px rgba(0,0,0,0.36);"}
                                borderRadius={"25px"}
                                w="full"
                                src={item.image}
                            />
                            <Box px="3" py="2">
                                <Text color="#000" fontWeight={"bold"}>{item.name}</Text>
                                <Text fontWeight={"500"} fontSize="16px" color={"#000"}>{item.song}</Text>
                            </Box>
                        </Box>
                    )
                })}
            </HStack>



            <Grid mb="50" templateColumns='repeat(3, 1fr)' h="calc(100vh - 470px)" minH={"fit-content"} mt={10} gap="5">
                <GridItem colSpan={1}>
                    <Heading as="h2" color="#000" fontSize={30} fontWeight={"bold"}>Now Playing</Heading>
                    <Card mt={3} h="calc(100vh - 480px)" bg={"#fff"} borderRadius={"30px"}>
                        <CardBody h="350px" display={"flex"} alignItems={"center"}>
                            <Box maxW="300px" m="auto">

                                <Box minW="150px" w="150px" m="auto">
                                    <Image
                                        boxShadow={"5px 5px 9px -1px rgba(0,0,0,0.36);"}
                                        borderRadius={"25px"}
                                        w="150px"
                                        src={topArtists[0].image}
                                    />
                                    <Box py="2">
                                        <Text textAlign={"center"} color="#000" fontWeight={"bold"}>{topArtists[0].name}</Text>
                                        <Text textAlign={"center"} fontWeight={"500"} fontSize="16px" color={"#000"}>{topArtists[0].song}</Text>
                                    </Box>
                                </Box>

                                <Slider aria-label='slider-ex-1' defaultValue={30}>
                                    <SliderTrack bg="#d3d3d3">
                                        <SliderFilledTrack bg="#d3d3d3" />
                                    </SliderTrack>
                                    <SliderThumb bg="#18d860" />
                                </Slider>

                                <Flex align="center" justify="space-between">
                                    <Text color="#d3d3d3" fontSize={"12px"}>02:10</Text>
                                    <Text color="#d3d3d3" fontSize={"12px"}>-03:56</Text>
                                </Flex>

                                <HStack spacing={5} mt={5} justify="center">
                                    <IconButton variant={"ghost"} icon={<Icon boxSize="5" as={icons.shuffle} color="#000" />} />
                                    <IconButton variant={"ghost"} icon={<Icon boxSize="5" as={icons.previousTrack} color="#000" />} />
                                    <Box rounded="full" p="10px" background={`url(${topArtists[0].image})`}>
                                        <IconButton w="60px" h="60px" rounded="full" bg="white" icon={<Icon boxSize="8" as={icons.play} color="#000" />} />
                                    </Box>
                                    <IconButton variant={"ghost"} icon={<Icon boxSize="5" as={icons.nextTrack} color="#000" />} />
                                    <IconButton variant={"ghost"} icon={<Icon boxSize="5" as={icons.repeat} color="#000" />} />
                                </HStack>


                            </Box>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem colSpan={2}>
                    <Heading as="h2" color="#000" fontSize={30} fontWeight={"bold"}>Most Played</Heading>
                    <Box mt={3} h="full" bg={"transparent"}  borderRadius={"30px"}>
                        <Flex flexDir={"column"} w="full" h="calc(100vh - 480px)" overflow={"auto"} alignItems={"center"}>
                            {topArtists.map((item, index) => {
                                return (
                                    <HStack w="full" bg="white" my="2" align="center" borderRadius={"10px"} justify={"space-between"} key={index} p="15px 20px" spacing={4}>
                                        <Flex align="center">
                                            <Text color="#000">01</Text>
                                            <Image
                                                ml="4"
                                                borderRadius={"8px"}
                                                w="50px"
                                                h="50px"
                                                src={item.image}
                                            />
                                        </Flex>
                                        <Text textAlign={"center"} fontWeight={"500"} fontSize="16px" color={"#000"}>{item.song}</Text>
                                        <Text textAlign={"center"} color="#000" fontWeight={"bold"}>{item.name}</Text>
                                        <Text textAlign={"center"} color="#000" fontWeight={"bold"}>{"04:31"}</Text>

                                    </HStack>
                                )
                            })}
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>

        </Box>
    )
}

export default Home