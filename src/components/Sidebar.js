import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Typography
} from '@material-ui/core'

import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { MoreVert } from '@material-ui/icons'


// TODO :: USE MAKESTYLES

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100vh',
    backgroundColor: theme.palette.background.paper
  },
  appbar: {
    backgroundColor: theme.palette.background.paper
  },
  menuButton: {
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  container: {
    width: '100%',
    height: '100%'
  }
})

class Sidebar extends Component {
  render() {
    const { classes, countries } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <AppBar
            position="static"
            color="inherit"
            elevation={0}
          >
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Sprout
              </Typography>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MoreVert />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Sidebar)
