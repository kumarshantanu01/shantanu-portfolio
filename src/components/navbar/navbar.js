import React from "react";
import { useState } from "react";
import './navbar.css';
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/core";
// import { MenuIcon } from "@material-ui/icons";
import { MenuOpen } from "@material-ui/icons";
import { MenuItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    desktopview:{
        display: "none",
        [theme.breakpoints.up("md")]:{
            display: "flex",
        },
    },

    root: {
      width: "100vw",
    },

    appbar:{
        backgroundColor: "#1AB394"
    },

    buttonnavbar:{
        padding: '0rem 1rem 0rem 1rem', 
    },

    namenavbar:{
        fontStyle: 'poppins',
        // fontSize: '0px'
    }
    
  }));

const Navbar = () =>{
    const classes = useStyles();
    const [mobileMenuview, setmobileMenuview] = useState(null);
    const mobileMenuopen = Boolean(mobileMenuview);

    const openMobilemenu= (event) =>{
        setmobileMenuview(event.currentTarget);
    };

    const closeMobilemenu= () =>{
        setmobileMenuview(null);
    };

    const mobileMenu=(
        <Menu 
        anchorEl={mobileMenuview} 
        id='mobile-menu'
        keepMounted
        open={mobileMenuopen}>
            <MenuItem onclick={closeMobilemenu}>
                Home
            </MenuItem>
            <MenuItem onclick={closeMobilemenu}>
                Home
            </MenuItem>
            <MenuItem onclick={closeMobilemenu}>
                Home
            </MenuItem>
            <MenuItem onclick={closeMobilemenu}>
                Home
            </MenuItem>
            <MenuItem onclick={closeMobilemenu}>
                Home
            </MenuItem>
            <MenuItem onclick={closeMobilemenu}>
                Home
            </MenuItem>
        </Menu>
    )
    return(
        <>
            <Container className={classes.root}>
                <AppBar className={classes.appbar}>
                    <Toolbar>
                        <Typography className={classes.namenavbar} variant="h6" style={{flexGrow: 1}}>Kumar Shantanu</Typography>
                        <div className={classes.desktopview}>
                        <Button className={classes.buttonnavbar} color='inherit'>Home</Button>
                        <Button className={classes.buttonnavbar} color='inherit'>About Me</Button>
                        <Button className={classes.buttonnavbar} color='inherit'>Skills</Button>
                        <Button className={classes.buttonnavbar} color='inherit'>Resume</Button>
                        <Button className={classes.buttonnavbar} color='inherit'>Projects</Button>
                        <Button className={classes.buttonnavbar} color='inherit'>Contact Me</Button>
                        </div>
                        <IconButton color='inherit' onClick={openMobilemenu}>
                            <MenuOpen />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {mobileMenu}
            </Container>
        </>
    );
}

export default Navbar;