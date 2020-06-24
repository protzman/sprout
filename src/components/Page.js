import React from 'react'
import Meta from './Meta'

import BotNavigationBar from './bot_navigation/BotNavigationBar'
import TopNavigationBar from './top_navigation/TopNavigationBar'

export default function Page(props) {
  return (
    <div>
      <Meta />
      <TopNavigationBar />
      {props.children}
      <BotNavigationBar />
    </div>
  )
}
