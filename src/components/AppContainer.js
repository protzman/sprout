import React, { Component } from 'react'
import { render } from 'react-dom'

import {
  List,
  ListItem
} from '@material-ui/core'

import RecipeReviewCard from './RecipeReviewCard'

/* eslint-disable react/no-deprecated */
export default class App extends Component {
  render() {
    return (
      <div style={{
        width: '100%', height: '100%', position: 'relative', padding: '24px 24px 84px 24px'
      }}
      >
        <List disablePadding>
          <ListItem>
            <RecipeReviewCard />
          </ListItem>
          <ListItem>
            <RecipeReviewCard />
          </ListItem>
          <ListItem>
            <RecipeReviewCard />
          </ListItem>
        </List>
      </div>
    )
  }
}

export function renderToDOM(container) {
  render(<App />, container)
}
