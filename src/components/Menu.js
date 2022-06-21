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
        About: (
            <Link href='#about' className='py-2 px-6 flex-col text-black hover:text-blue-400'>
                About
            </Link>
        ),
        Projects: (
            <Link href='#projects' className='py-2 px-6 flex-col text-black hover:text-blue-400'>
                Prod
            </Link>
        ),
        Progress: (
            <Link href='#progress' className='py-2 px-6 flex-col text-black hover:text-blue-400'>
                Dev
            </Link>
        ),
    },
];
// const settings = ['Azure', 'Jira', 'React', 'Webpack5', 'Babel'];
const settings2 = [
    {
        Contact: <a href='#contact'>Contact</a>,
        id: 5,
    },
    {
        Skills: <a href='#skills'>Dev + Design</a>,
        id: 6,
    },
    {
        Coding: <a href='#skillList'>OOP Skills</a>,
        id: 6,
    },
    {
        Software: <a href='#software'>Software</a>,
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
                    <MenuTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        DED
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
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
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}>
                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>{page}</Typography>
                                </MenuItem>
                            ))} */}
                            {pages2.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <Typography textAlign='left'>{page.About}</Typography>
                                    <Typography textAlign='center'>{page.Progress}</Typography>
                                    <Typography textAlign='right'>{page.Projects}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <MenuBookSharpIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant='h5'
                        noWrap
                        component='a'
                        href='//#endregion'
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Georgia',
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
                                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {page.About}
                                </Button>
                                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {page.Progress}
                                </Button>
                                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {page.Project}
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
                        <Tooltip title='Skills Section'>
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
                                    <Typography textAlign='center'>{setting.Software}</Typography>
                                    <Typography textAlign='center'>{setting.Skills}</Typography>
                                    <Typography textAlign='center'>{setting.Coding}</Typography>
                                    <Typography textAlign='center'>{setting.Contact}</Typography>
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
