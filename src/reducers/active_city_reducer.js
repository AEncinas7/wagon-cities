export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  // Handle the actions:
  switch (action.type) {
    case 'CITY_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
