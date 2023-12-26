'use client'

import React, { useState, useEffect } from 'react';

function BillsPage() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4003/bill')
      .then(response => response.json())
      .then(data => setBills(data));
  }, []);

  if (!bills.length) return <p>Loading bills...</p>;

  return (
    <div className="table-container">
      <h1 className="title">Bills</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Reference Number</th>
            <th>Company</th>
            <th>Purchase Date</th>
            <th>Due Date</th>
            <th>Total Amount</th>
            <th>Paid Amount</th>
            <th>Pending Amount</th>
          </tr>
        </thead>
        <tbody>
          {bills.map(bill => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.referenceNumber}</td>
              <td>{bill.company}</td>
              <td>{bill.purchaseDate}</td>
              <td>{bill.dueDate}</td>
              <td>{bill.totalAmount}</td>
              <td>{bill.paidAmount}</td>
              <td>{bill.pendingAmount}</td>
            </tr>
          ))}
        </tbody>
      </table></div>
  );
}

export default BillsPage;