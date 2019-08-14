import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDatabases } from "./databasesActions";

export default function DatabasesList() {
  const dispatch = useDispatch();
  const { isFetched, databases } = useSelector(state => {
    return {
      isFetched: state.databases.isFetched,
      databases: state.databases.databases
    };
  });
  useEffect(() => {
    if (!isFetched) dispatch(fetchDatabases());
  }, []);

  return databases.map(database => {
    const { title } = database;
    return (
      <div key={database.id}>
        <p>{title}</p>
      </div>
    );
  });
}

export const MemoizedDatabasesList = memo(DatabasesList);
