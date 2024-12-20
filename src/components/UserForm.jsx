import React, { useState, useEffect } from 'react';

function UserForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ name: '', email: '' });
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name:</label>
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-success" type="submit">
          {initialData ? 'Update User' : 'Add User'}
        </button>
      </form>
    );
  }

export default UserForm;
