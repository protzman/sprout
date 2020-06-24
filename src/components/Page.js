import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Fab,
  BottomNavigation,
  BottomNavigationAction,
  IconButton
} from '@material-ui/core'
import {
  Menu,
  Settings,
  Search,
  ShoppingBasketOutlined,
  FavoriteBorder,
  Restaurant
} from '@material-ui/icons'
import Meta from './Meta'
import AppContainer from './AppContainer'
import CuisineTabs from './CuisineTabs'
import Sidebar from './Sidebar'

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
  botBarIcon: {
    margin: `0px ${theme.spacing(2)}px`,
    color: `${theme.palette.background.default} !important`
  },
  title: {
    color: theme.palette.background.paper
  },
  topAppBar: {
    backgroundColor: theme.palette.background.default,
  },
  bottomAppBar: {
    borderRadius: '24px 24px 0 0',
    top: 'auto',
    bottom: 0
  },
  selected: {
    color: theme.palette.background.default
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
}))

export default function Page(props) {
  const classes = useStyles()

  const [value, setValue] = React.useState('explore');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Meta />

      {/* top app bar / drawer */}
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

      <AppBar position="sticky" color="primary" className={classes.topAppBar} elevation={0}>
        <CuisineTabs />
      </AppBar>

      <AppContainer />

      {/* bottom app bar / drawer  */}
      <AppBar position="fixed" color="primary" className={classes.bottomAppBar}>
        <Toolbar>
          <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <div className={classes.spacer} />
            <BottomNavigationAction
              classes={{
                root: classes.botBarIcon,
                selected: classes.selected
              }}
              label="Menu"
              value="menu"
              icon={<FavoriteBorder />} />
            <BottomNavigationAction
              classes={{
                root: classes.botBarIcon,
                selected: classes.selected
              }}
              label="Explore"
              value="explore"
              icon={<Restaurant />} />
            <BottomNavigationAction
              classes={{
                root: classes.botBarIcon,
                selected: classes.selected
              }}
              label="Ingredients"
              value="ingredients"
              icon={<ShoppingBasketOutlined />} />
            <div className={classes.spacer} />
          </BottomNavigation>
        </Toolbar>
      </AppBar>
    </div>
  )
}
