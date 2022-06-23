import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import Link from '@mui/material/Link';

// const pages = ['About Me', 'Contact', 'Projects'];
const pages2 = [
    {
        About: <Link href='#about'>About</Link>,
        Projects: <Link href='#projects'>Projects</Link>,
        Contact: <Link href='#contact'>Contact</Link>,
    },
];
// const settings = ['Azure', 'Jira', 'React', 'Webpack5', 'Babel'];
const settings2 = [
    {
        About: <a href='#about'>About</a>,
        id: 5,
    },
    // {
    //     Skills: <a href='#projects'>Dev + Design</a>,
    //     id: 6,
    // },
    {
        Map: <a href='#map'>Google Map</a>,
        id: 6,
    },
    {
        Forms: <a href='#form'>Forms</a>,
        id: 7,
    },
];

const MenuBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position='fixed'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <MenuTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 0 }} />
                    <Typography
                        variant='h5'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'whitesmoke',
                            textDecoration: 'none',
                        }}>
                        DED
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label='menu icon'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                mx: 1,
                            }}>
                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>{page}</Typography>
                                </MenuItem>
                            ))} */}
                            {pages2.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <Typography textAlign='left'>{page.About}</Typography>
                                    <Typography textAlign='center'>{page.Projects}</Typography>
                                    <Typography textAlign='right'>{page.Contact}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <MenuBookSharpIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }} />
                    <Typography
                        variant='h4'
                        noWrap
                        component='a'
                        href='//#endregion'
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Inter',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        Hima
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
                        {pages2.map((page, key = 5) => (
                            <ButtonGroup key={2} variant='outlined' aria-label='outlined button group'>
                                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'inheret', display: 'block' }}>
                                    {page.About}
                                </Button>
                                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'green', display: 'block' }}>
                                    {page.Projects}
                                </Button>
                                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'inheret', display: 'block' }}>
                                    {page.Contact}
                                </Button>
                            </ButtonGroup>
                        ))}
                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                {page}
                            </Button>
                        ))} */}
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                        <Tooltip title='Bottom Section'>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                <Avatar alt='Icon' src='/rocket.png' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}>
                            {settings2.map((setting) => (
                                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                                    <Typography textAlign='left'>{setting.About}</Typography>
                                    <Typography textAlign='center'>{setting.Map}</Typography>
                                    <Typography textAlign='right'>{setting.Forms}</Typography>
                                    {/* <Typography textAlign='center'>{setting.Contact}</Typography> */}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default MenuBar;
