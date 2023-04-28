import { Avatar, Box, Button, Flex, HStack, Icon, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { icons } from '../../../config/constants/icons'

const Header = () => {
    return (
        <Flex h="65px" px="5" pos="sticky" w="calc(100vw - 250px)" ml="230px" bg="transparent" as="header" justify="space-between" align="center">
            <Flex align="center">
                <IconButton
                    bg="#eaeaea !important"
                    aria-label="Search songs"
                    icon={<Icon color="black" as={icons.browse} />}
                />

                <Input borderColor={"white"} bg="white" minW="250px" _placeholder={{ color: "#eaeaea" }} placeholder="Search songs" ml={5} />
            </Flex>

            <Flex>
                <Menu>
                    <MenuButton as={Button} rightIcon={<Icon boxSize={5} color="#a1a1a1" as={icons.chevronDown} />}>
                        <Flex color="#000" align="center">
                            <Avatar size="md" name="Shehzad Ahmed" src="https://avatars.githubusercontent.com/u/38428144?v=4" />
                            <Text ml={3}>Shehzad</Text>
                        </Flex>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>

                <HStack spacing={2}>
                    <IconButton
                        aria-label="Search songs"
                        size="md"
                        icon={<Icon boxSize="5" color="black" as={icons.notification} />}
                    />
                    <IconButton
                        aria-label="Search songs"
                        size="md"
                        icon={<Icon boxSize="5" color="black" as={icons.settings} />}
                    />
                </HStack>
            </Flex>
        </Flex>
    )
}

export default Header