import { Box, Flex, Icon, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../../config/constants/icons'
import { images } from '../../../config/constants/images'

const Sider = () => {
    const menuItems = [
        {
            name: "Home",
            path: "/",
            icon: icons.home
        },
        {
            name: "Browse",
            path: "/browse",
            icon: icons.browse
        },
        {
            name: "Albums",
            path: "/albums",
            icon: icons.albums
        },
        {
            name: "Artists",
            path: "/artists",
            icon: icons.artists
        },
        {
            name: "Videos",
            path: "/videos",
            icon: icons.videos
        },
    ]

    const myMusicItems = [
        {
            name: "Recently Played",
            path: "/recently-played",
            icon: icons.recentlyPlayed
        },
        {
            name: "Local Files",
            path: "/local-files",
            icon: icons.localFiles
        },
    ]

    const playlists = [
        {
            name: "General Playlist",
            path: "/playlists/general-playlist",
        },
        {
            name: "Ease up beats",
            path: "/playlists/ease-up-beats",
        },
        {
            name: "Chill vibes",
            path: "/playlists/chill-vibes",
        },
        {
            name: "Workout",
            path: "/playlists/workout",
        },
    ]

    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex={"sticky"}
            h="full"
            pb={10}
            w="230px"
            bg="white"
        >
            <Flex justify={"center"} p="40px 10px">
                <Image
                    src={images.logo}
                    w="150px"
                />
            </Flex>

            <VStack spacing={10}>
                <Box w="full" px={5}>
                    <VStack spacing={5}>
                        {menuItems.map((item, index) => (
                            <Flex w="full" align="center">
                                <Icon boxSize={5} mr={3} as={item.icon} color={index === 0 ? "#18d860" : "#838383"} />
                                <Text fontWeight={"500"} fontSize="16px" color={index === 0 ? "#18d860" : "#000"} key={index} as={Link} to={item.path}>{item.name}</Text>
                            </Flex>
                        ))}
                    </VStack>
                </Box>

                <Box w="full" px={5}>
                    <Text color="#838383" mb={5} textTransform={"uppercase"}>My Music</Text>
                    <VStack spacing={5}>
                        {myMusicItems.map((item, index) => (
                            <Flex w="full" align="center">
                                <Icon boxSize={5} mr={3} as={item.icon} color={"#838383"} />
                                <Text fontWeight={"500"} fontSize="16px" color={"#000"} key={index} as={Link} to={item.path}>{item.name}</Text>
                            </Flex>
                        ))}
                    </VStack>
                </Box>

                <Box w="full" px={5}>
                    <Text color="#838383" mb={5} textTransform={"uppercase"}>Playlists</Text>
                    <VStack spacing={5}>
                        {playlists.map((item, index) => (
                            <Flex w="full" align="center">
                                <Text fontWeight={"500"} fontSize="16px" color={"#000"} key={index} as={Link} to={item.path}>{item.name}</Text>
                            </Flex>
                        ))}
                    </VStack>
                </Box>

            </VStack>
        </Box>
    )
}

export default Sider