import { AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signOut } from 'firebase/auth';
import * as React from 'react';
import { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { GlobalContext } from '../../context/GlobalContext';
// import { listener } from "../../utils/firebase/listener";
import Logo from '../../assets/dove.png';

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

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const SearchAppBar = () => {
  const { handleFunction } = useContext(GlobalContext)

  const { handleSearch } = handleFunction;

  const navigate = useNavigate()

  const home = () => {
    localStorage.clear("detail")
    navigate('/')
  }

  const login = () => {
    navigate('/login')
  }

  const [user] = useAuthState(auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <img src={Logo} width={35} style={{ cursor: 'pointer' }} onClick={home} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            ><Typography onClick={home} sx={{
              cursor: 'pointer',
              marginLeft: '1rem',
              width: 'fit-content'
            }}>DTS NEWS
              </Typography>
            </Typography>
            <Search
              sx={{
                marginLeft: '1rem'
              }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
              />
            </Search>

            {user ?
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                  sx={{
                    marginLeft: '1rem'
                  }}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem>{user.email}</MenuItem>
                  <MenuItem onClick={onLogout}>Logout</MenuItem>
                </Menu>
              </> :

              <Button onClick={login} color="inherit" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'} sx={{
                marginLeft: '1rem'
              }}>Login</Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default SearchAppBar
