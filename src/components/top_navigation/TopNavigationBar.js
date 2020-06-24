import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core'
import {
  Menu,
  Settings
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.background.default
  },
  spacer: {
    flexGrow: 1
  },
  topBarIcon: {
    margin: `0px ${theme.spacing(2)}px`,
    color: theme.palette.background.paper
  },
  title: {
    color: theme.palette.background.paper
  },
  topAppBar: {
    backgroundColor: theme.palette.background.default,
  }
}))

export default function BotAppBar(props) {
  const classes = useStyles()

  return (
    <AppBar position="sticky" color="primary" className={classes.topAppBar} elevation={0}>
      <Toolbar>
        <IconButton edge="start" className={classes.topBarIcon} color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <div className={classes.spacer} />
        <Typography variant="h6" className={classes.title}>
          Sprout
        </Typography>
        <div className={classes.spacer} />
        <IconButton edge="end" className={classes.topBarIcon} color="inherit" aria-label="settings">
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
