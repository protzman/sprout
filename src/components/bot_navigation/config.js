import React from 'react'

import {
  ShoppingBasketOutlined,
  FavoriteBorder,
  Restaurant
} from '@material-ui/icons'

const buttons = [
  {
    label: 'Explore',
    path: '/menu',
    icon: <FavoriteBorder />
  },
  {
    label: 'Explore',
    path: '/overview',
    icon: <Restaurant />
  },
  {
    label: 'Ingredients',
    path: '/ingredients',
    icon: <ShoppingBasketOutlined />
  }
]

export default buttons
