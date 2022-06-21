import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import JavascriptSharpIcon from '@mui/icons-material/JavascriptSharp'
// convert to module with props for skill list mapping

function CardMain() {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 'fit-content', paddingTop: '56.25%' }}
                component='img'
                height='250'
                width='100%'
                loading='eager'
                image='/hima2.jpeg'
                title='Hima Balde'
                alt='Hima Balde'
            />
            <CardMedia
                sx={{ height: 'fit-content', paddingTop: '56.25%' }}
                component='img'
                height='200'
                width='100%'
                loading='eager'
                image='/himacard.png'
                title='Hima card'
                alt='Hima card'
            />
            <CardContent id='about'>
                <Typography gutterBottom variant='h2' component='h2'>
                    Custom Web App Built with React, Webpack, Babel, ESLint, Prettier and more!
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Website developer and designer. Currently building websites and web Apps using JAMstack and{' '}
                    Fullstack tools. I research each step of the development process and take ideas from concept to{' '}
                    production.
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    href='#contact'
                    size='small'
                    color='primary'
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>
                    <a
                        href='#contact'
                        className='inline-flex text-black bg-red-800 border-1 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-2xl'>
                        Contact{' '}
                    </a>
                </Button>
                <div className='flex justify-center'>
                    <a
                        href='#projects'
                        className='ml-4 inline-flex  bg-red-800 border-1 py-2 px-6 focus:outline-none hover:text-blue-400 rounded  text-black text-2xl'>
                        Projects
                    </a>
                </div>
            </CardActions>
        </Card>
    );
}

export default CardMain;
