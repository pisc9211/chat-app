const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const userExists = users.find(user => user.name === name);

  if (!name || !room || !id) return { error: 'name and room and Id is required'}
  if (userExists) return { error: 'name is already taken'}

  const user = { id, name, room }

  users.push(user)

  return { user }
};

const removeUser = (id) => {
  const index = users.findIndex(user => user.id === id)

  if (index !== -1) return users.splice(index, 1)[0]
}

const getUser = (id) => {
  return users.find(user => user.id === id)
}

const getUsersInRoom = (room) => {
  return users.filter(user => user.room === room)
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom }