import React from 'react';
import Link from 'next/link'
import { withRouter } from "next/router"
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  botBarIcon: {
    margin: `0px ${theme.spacing(2)}px`,
    color: `${theme.palette.background.default} !important`
  },
  selected: {
    color: `${theme.palette.secondary.main} !important`
  }
}));

function NavigationButton(props) {
  const classes = useStyles()

  return (
    <Link href={props.path}>
      <IconButton className={clsx(classes.botBarIcon, {
        [classes.selected]: props.router.pathname === props.path
      })}>
        {props.icon}
      </IconButton>
    </Link>
  )
}

export default withRouter(NavigationButton)