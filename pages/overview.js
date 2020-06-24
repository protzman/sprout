import React from 'react'
import { makeStyles } from '@material-ui/styles'

import {
  Container,
  List,
  ListItem
} from '@material-ui/core'

import CuisineTabs from '../src/components/CuisineTabs'
import RecipieReviewCard from '../src/components/RecipeReviewCard'

const useStyles = makeStyles((theme) => ({
  topAppBar: {
    backgroundColor: theme.palette.background.default
  },
  content: {
    overflowY: 'scroll'
  },
  tabs: {
    position: 'absolute',
    top: 56,
    bottom: 'auto',
    left: 0,
    right: 0
  }
}))

export default function Overview(props) {
  const classes = useStyles()
  return (
    <div>
      <CuisineTabs className={classes.tabs} />
      <Container className={classes.content}>
        <List>
          <ListItem>
            <RecipieReviewCard />
          </ListItem>
          <ListItem>
            <RecipieReviewCard />
          </ListItem>
          <ListItem>
            <RecipieReviewCard />
          </ListItem>
        </List>
      </Container>
    </div>
  )
}
