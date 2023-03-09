
import { Card, CardContent, CardHeader, CardMedia, Typography, Box, CardActions, Button } from '@mui/material'


export const MuiCards = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" component='div' color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        
      </Card>
    </Box>


  )
}
