const updateObject = <T>(key: any, state: T, object = {}) => {
  const newObject = Object.assign({}, state[key], object)
  return Object.assign({}, state, {[key]: newObject})
}

export default updateObject
