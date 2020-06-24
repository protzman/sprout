import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import {
  Skeleton
} from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    width: '100%'
  },
  media: {
    height: 190
  }
}))

export default function RecipeReviewCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        titleTypographyProps={{
          variant: 'h6'
        }}
        subheader="September 14, 2016"
      />
      <Skeleton animation="wave" variant="rect" className={classes.media} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
