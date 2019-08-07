import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDatabases } from "./databasesActions";

/**
 * Primary renderer
 */

export default function Databases() {
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

  return (
    <>
      <Router>
        <h1>Databases</h1>
        {renderNav()}
        <Switch>
          <Route path="/databases/history" />
        </Switch>
        {renderDatabases(databases)}
      </Router>
    </>
  );
}

/**
 * Helper renderers
 */

const renderNav = () => {
  return (
    <div>
      <NavLink to="/databases/history">History</NavLink>
      <NavLink to="/databases/history">Queries</NavLink>
    </div>
  );
};

const renderDatabases = databases => {
  return databases.map(database => {
    const { title } = database;
    return (
      <div>
        <h5>{title}</h5>
      </div>
    );
  });
};
