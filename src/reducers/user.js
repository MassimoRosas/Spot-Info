import {
  GET_USER_DATA,
} from 'src/actions/user';

const initialState = {
  user: {
    country: '',
    displayName: '',
    email: '',
    followers: {},
    avatar: '',
    product: '',
  },
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        user: {
          country: action.country,
          displayName: action.displayName,
          email: action.email,
          followers: action.followers,
          avatar: action.avatar,
          product: action.product,
        },
      };
    default: return state;
  }
};
export default userReducer;
