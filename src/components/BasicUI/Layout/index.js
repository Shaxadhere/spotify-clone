import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sider from './Sider'
import Header from './Header'

const Layout = () => {
    return (
        <Box bg="linear-gradient(185deg, rgba(255,238,222,1) 0%, rgba(231,215,254,1) 90%);">
            <Sider />
            <Header />
            <Box ml="230px" as="main" minH="100vh" h="fit-content">
                <Box p="5">
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

export default Layout