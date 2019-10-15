import React from 'react'

import { Aside, RoomName, Online, User } from './Sidebar.styled'

const Sidebar = ({ name, room, users }) => {
  return (
    <Aside>
      <RoomName>Room: {room}</RoomName>
      <Online>
        {users.map(user => <User>{user.name}</User>)}
      </Online>
    </Aside>
  )
}

export default Sidebar