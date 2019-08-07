import { RECEIVE_DATABASES } from "./databasesActions";

const initialState = {
  isFetched: false,
  databases: []
};

export default function databasesReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DATABASES:
      return {
        ...state,
        isFetched: true,
        databases: action.payload.databases
      };
    default:
      return state;
  }
}
