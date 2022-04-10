import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// convert to module with props for skill list mapping
function CardMain() {
  return (
	<Card sx={{ maxWidth: 345}}>
		<CardMedia
			sx={{ height: 0, paddingTop: '56.25%' }}
			component="img"
			height="140"
			image={require('../assets/images/bg7.jpg')}
			title="Skills List"
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
				JavaScript (ES6, ES5); JSX (JavaScript + XML)
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
				JavaScript is a programming language that conforms to the ECMAScript specification.
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small" color="primary">
				Learn More
			</Button>
		</CardActions>
	</Card>
  )
}

export default CardMain
