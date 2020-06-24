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

function Menu(props) {
  const { classes } = props
  return (
    <div>
      menu page
    </div>
  )
}

export default withStyles(styles)(Menu)
