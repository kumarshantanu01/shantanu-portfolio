import React from 'react';
import Color from 'color';
// import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { Buttonsproject } from './projectElements';
// import CustomCard from './projectCard';
// import useStyles from './projectCard'

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    width: '100vw',
    justifyContent: 'center',
    [breakpoints.up('md')]: {
      justifyContent: 'center',
      width: '100vw',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    width: 230,
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
  button:{
    borderRadius: 5,
    backgroundColor: "#c6ff00",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    '&:hover': {
      backgroundColor: "#c6ff00",
    }
  },
  buttontext:{
      fontSize: 10,
  }
}));

const CustomCard = ({ classes, image, title, subtitle, linksource, linklive }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
          <Buttonsproject>
            <Link className={classes.button} href={linksource} target="_blank">
                <Button className={classes.buttontext}>Source Code</Button>
            </Link>
            <Link className={classes.button} href={linklive} target="_blank">
                <Button className={classes.buttontext}>View Live</Button>
            </Link>
          </Buttonsproject>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};


export const ProjectCard = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#002539' });
  const styles2 = useStyles({ color: '#007C78' });
  const styles3 = useStyles({ color: '#002539' });
  const styles4 = useStyles({ color: '#007C78' });
  return (
    <>
      <Grid classes={gridStyles} container spacing={6} wrap={'wrap'}>
        <Grid item>
          <CustomCard
            classes={styles}
            title={'ALCOVE'}
            subtitle={'Alcove is a one-stop solution to all your interior design needs.'}
            linksource={'https://github.com/kumarshantanu01/alcove'}
            linklive={'https://alcove-istebits.netlify.app/'}
            image={
              'https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631280213/Alcove%20spider/alcove_iste_bits_tzh4l3.png'
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles2}
            title={'DRONA'}
            subtitle={`Empowering everyone to code with IBM's eye.`}
            linksource={'https://github.com/kumarshantanu01/drona'}
            linklive={'https://drona-gamma.vercel.app/'}
            image={
              'https://user-images.githubusercontent.com/67703407/142220333-fdbd52ab-f248-4bc3-a2e9-5d6ef5dc230f.png'
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles3}
            title={'ICPCM-2021'}
            subtitle={'Website of 3rd International Conference on Processing and Characterizatoin of Materials.'}
            linksource={'https://github.com/kumarshantanu01/ICPCM-2021'}
            linklive={'https://icpcm.netlify.app/'}
            image={'https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638616296/shantanu-portfolio/PROJECTS/icpcm2021_ui_idkzcn.png'}
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles4}
            title={'WEBWIZ PORTFOLIO'}
            subtitle={`Website of 'Webwiz - Technical Club of NITR'`}
            linksource={'https://github.com/kumarshantanu01/webwiz-portfolio'}
            linklive={'https://webwiznitr.netlify.app/'}
            image={
              'https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638616292/shantanu-portfolio/PROJECTS/webwiz-portfolio-ui_mw5hkt.png'
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles}
            title={'INSHORTS CLONE'}
            subtitle={'Clone of the ishorts website made using React.'}
            linksource={'https://github.com/kumarshantanu01/inshorts-clone'}
            linklive={'https://inshorts-clone-ks.netlify.app/'}
            image={
              'https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638616292/shantanu-portfolio/PROJECTS/Inshorts_Clone_UI_cxw59p.png'
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles2}
            title={'DINOCARE'}
            subtitle={'Predicts the personality of the user and matches it to the characteristics of a Dinosaur.'}
            linksource={'https://github.com/kumarshantanu01/dinocare'}
            linklive={'https://dinocare.netlify.app/'}
            image={
              'https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638616317/shantanu-portfolio/PROJECTS/DINOCARE-UI_fcdh36.png'
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles3}
            title={'QUOTE GENERATOR'}
            subtitle={'Quote generator website, displays data using API.'}
            linksource={'https://github.com/kumarshantanu01/quote-generator'}
            linklive={'https://quote-generator-ks.netlify.app/'}
            image={
              'https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638617461/shantanu-portfolio/PROJECTS/quote-gen-ui_visi7s.png'
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles4}
            title={'ROCK-PAPER-SCISSORS'}
            subtitle={'Play the Rock paper scissors game against the computer.'}
            linksource={'https://github.com/kumarshantanu01/Rock-Paper-Scissors'}
            linklive={'https://kumarshantanu01.github.io/Rock-Paper-Scissors/'}
            image={
              'https://res.cloudinary.com/dzbdnlr0f/image/upload/v1638616877/shantanu-portfolio/PROJECTS/rock_game_ui_fjf7fc.png'
            }
          />
        </Grid>
      </Grid>
    </>
  );
});
export default ProjectCard