import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create database</h5>
            <p>Yeah, do that</p>
          </div>
          <div class="modal-footer">
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
            <NavLink className="btn btn-secondary" to="/databases">
              Close
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
