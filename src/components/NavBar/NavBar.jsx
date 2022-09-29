import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Icono from './Icono';
import Logo from '../Logo';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';




export default function NavBar() {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



  return (


    <AppBar position="static" style={{ background: "linear-gradient(to right, rgb(1, 0, 3), rgb(36 24 64 / 55%)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
          <Typography
            variant="h5"
            noWrap
            className="titlealiarg"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            ALIARG
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              }}
            >
              <MenuItem onClick={() => navigate(`category/Componentes`)}>
                <Typography textAlign="center">Componentes</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate(`category/Almacenamiento`)}>
                <Typography textAlign="center">Almacenamiento</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate(`category/Perifericos`)}>
                <Typography textAlign="center">Periféricos</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate(`category/Tablets`)}>
                <Typography textAlign="center">Tablets</Typography>
              </MenuItem>

            </Menu>
          <Link to="/">
            <Logo sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => navigate(`category/Componentes`)}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Componentes
            </Button>
            <Button
              onClick={() => navigate(`category/Almacenamiento`)}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Almacenamiento
            </Button>
            <Button
              onClick={() => navigate(`category/Perifericos`)}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Periféricos
            </Button>
            <Button
              onClick={() => navigate(`category/Tablets`)}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Tablets
            </Button>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
                <SearchBar/>
          </Search>
          <Box sx={{ display: 'flex', flexGrow: 0, paddingLeft: 2 }}>
            <Box>
              <Icono />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};

