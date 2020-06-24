import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}

function Ingredients(props) {
  const { classes } = props
  return (
    <div>
      ingredients page
    </div>
  )
}

export default withStyles(styles)(Ingredients)
