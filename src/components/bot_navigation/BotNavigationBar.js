import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  AppBar,
  Toolbar
} from '@material-ui/core'

import NavigationButton from './NavigationButton'
import buttons from './config'

const useStyles = makeStyles((theme) => ({
  spacer: {
    flexGrow: 1
  },
  bottomAppBar: {
    borderRadius: '24px 24px 0 0',
    top: 'auto',
    bottom: 0
  }
}))

export default function BotAppBar(props) {
  const classes = useStyles()

  return (
    <AppBar position="fixed" color="primary" className={classes.bottomAppBar}>
      <Toolbar>
        <div className={classes.spacer} />
        {buttons.map((button) => (
          <NavigationButton
            key={button.path}
            path={button.path}
            icon={button.icon}
          />
        ))}
        <div className={classes.spacer} />
      </Toolbar>
    </AppBar>
  )
}
