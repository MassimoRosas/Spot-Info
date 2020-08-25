export const CHECK_USER_DATA = 'CHECK_USER_DATA';
export const GET_USER_DATA = 'GET_USER_DATA';

export const getUserData = (
  country, displayName, email, followers, avatar, product,
) => ({
  type: GET_USER_DATA,
  country,
  displayName,
  email,
  followers,
  avatar,
  product,
});

// MIDDLEWARE ACTIONS
export const checkUserData = () => ({
  type: CHECK_USER_DATA,
});
