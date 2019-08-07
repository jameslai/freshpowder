export const RECEIVE_DATABASES = "RECEIVE_DATABASES";

/**
 * Action creators
 */

export const receiveDatabases = databases => {
  return {
    type: RECEIVE_DATABASES,
    payload: {
      databases
    }
  };
};

/**
 * Actions
 */

export const fetchDatabases = () => {
  return async dispatch => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await res.json();
    dispatch(receiveDatabases(data));
  };
};
