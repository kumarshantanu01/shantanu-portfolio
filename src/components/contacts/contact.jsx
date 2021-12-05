import { Link } from '@material-ui/core';
import { ArrowForwardIosTwoTone, Facebook, GitHub, Instagram, LinkedIn, Mail, Twitter } from '@material-ui/icons';
import React from 'react'
import { Contactlinkbox, Contactme, Contactsection, ContactsectionBottom, ContactsectionTop, Heading, Mailbox, Myname, QuickLink, Subheading, Text1, Textmail, Textsection } from './contactElement';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    socialmedia:{
        '&:hover': {
            color: '#C6FF00',
        },
    }
});

const Contact = () =>{
    const classes = useStyles();
    return(
        <>
        <Contactsection id="contact">

            <ContactsectionTop>

                <Textsection>
                    <Heading>Shantanu's Portfolio</Heading>
                    <Text1>Thanks for visiting my portfolio website.</Text1>
                    <Text1>Feel free to connect with me over social media.</Text1>
                </Textsection>

                <QuickLink>
                    <Heading>Quick Links</Heading>
                        <Contactlinkbox>
                            <ArrowForwardIosTwoTone style={{ fontSize: 20 }}/>
                            <Subheading>Home</Subheading>
                        </Contactlinkbox>
                        <Contactlinkbox>
                            <ArrowForwardIosTwoTone style={{ fontSize: 17 }}/>
                            <Subheading>About Me</Subheading>
                        </Contactlinkbox>
                        <Contactlinkbox>
                            <ArrowForwardIosTwoTone style={{ fontSize: 17 }}/>
                            <Subheading>SKills</Subheading>
                        </Contactlinkbox>
                        <Contactlinkbox>
                            <ArrowForwardIosTwoTone style={{ fontSize: 17 }}/>
                            <Subheading>Projects</Subheading>
                        </Contactlinkbox>
                        <Contactlinkbox>
                            <ArrowForwardIosTwoTone style={{ fontSize: 17 }}/>
                            <Subheading>Contact</Subheading>
                        </Contactlinkbox>
                        {/* <Contactlinkbox>
                            <ArrowForwardIosTwoTone style={{ fontSize: 17 }}/>
                        </Contactlinkbox> */}
                </QuickLink>

                <Contactme>
                    <Heading>Contact Info</Heading>
                    <Mailbox>
                    <Mail style={{ fontSize: 20 }}/>
                    <Textmail>shantanuk280@gmail.com</Textmail>
                    </Mailbox>

                    <div className="socialmediacontainer">
                        <div className="socialmediaicons" >
                            <Link href='https://github.com/kumarshantanu01' target="_blank" color='inherit' className={classes.socialmedia}>
                                <GitHub  style={{ fontSize: 28 }}/>
                            </Link>
                            <Link href='https://www.linkedin.com/in/kumar-shantanu01/' target="_blank" color='inherit' className={classes.socialmedia}>
                                <LinkedIn style={{ fontSize: 30 }}/>
                            </Link>
                            <Link href='https://twitter.com/kumarshantanu01' target="_blank" color='inherit' className={classes.socialmedia}>
                                <Twitter style={{ fontSize: 30 }}/>
                            </Link>
                            <Link href='https://www.instagram.com/kumar_shantanu_01/' target="_blank" color='inherit' className={classes.socialmedia}>
                                <Instagram style={{ fontSize: 30 }}/>
                            </Link>
                            <Link href='https://www.facebook.com/shantanu.kumar.96930013' target="_blank" color='inherit' className={classes.socialmedia}>
                                <Facebook style={{ fontSize: 30 }}/>
                            </Link>
                        </div>
                    </div>
                    
                </Contactme>

            </ContactsectionTop>

            <ContactsectionBottom>
                <Subheading>Made with ❤️ by </Subheading>
                <Myname>Kumar Shantanu</Myname>
            </ContactsectionBottom>
        </Contactsection>
        </>
    )
}

export default Contact;