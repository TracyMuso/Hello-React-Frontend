import axios from 'axios';

const API_URL = 'http://localhost:3000/api/greetings';
const GET_GREETINGS = 'GREETING';

const initialState = {
  greeting: [],
};

const setGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

export const fetchGreetings = () => (dispatch) => {
  axios.get(API_URL)
    .then((response) => {
      const { data } = response;
      dispatch(setGreetings(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
