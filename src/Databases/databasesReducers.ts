import { RECEIVE_DATABASES } from "./databasesActions";

export default function databasesReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_DATABASES:
      return {
        ...state,
        databases: action.payload.databases
      };
    default:
      return state;
  }
}
