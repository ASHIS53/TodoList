import React from 'react';

const Checkbox = ({ label, isChecked, onChange }) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
    />
    <label className="form-check-label" htmlFor="checkbox">
      {label}
    </label>
  </div>
);

export default Checkbox;
