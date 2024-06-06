import React, { useState } from 'react';
import './Membership.css';

const Membership = () => {
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('basic');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Membership created for ${email} with ${plan} plan`);
  };

  return (
    <div className="membership-container">
      <h2>Join Our Membership</h2>
      <form onSubmit={handleSubmit} className="membership-form">
        <label>
          Email:
         
        </label> <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label>
          Select Plan:
          
        </label><select value={plan} onChange={(e) => setPlan(e.target.value)}>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
          </select>
        <button type="submit">Join Now</button>
      </form>
    </div>
  );
};

export default Membership;
