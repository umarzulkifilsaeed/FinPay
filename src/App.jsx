import { useState } from 'react';
import './App.css';
  function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [password, setPassword] = useState('');
  const [page, setPage] = useState('Dashboard')

  function handleLogin(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  function showPage() {
  if (page === 'Dashboard') {
  return (
    <div>

      <div className="balance">
  <h2>Welcome to FinPay</h2>
  <p>Your money, your control.</p>

  <p>Available Balance</p>
  <h1>₦250,000</h1>
</div>

<div className="recent-transactions">
  <h2>Recent Transactions</h2>

  <div className="transaction-item">
    <p>Money Received</p>
    <strong>+ ₦50,000</strong>
  </div>

  <div className="transaction-item">
    <p>Airtime Purchase</p>
    <strong>- ₦2,000</strong>
  </div>
</div>

<h2 className="section-title">Account Overview</h2>

<div className="summary-cards">
  <div className="summary-card">
    <h3>Total Balance</h3>
    <h2>₦250,000</h2>
  </div>

  <div className="summary-card">
    <h3>Total Transactions</h3>
    <h2>25</h2>
  </div>

  <div className="summary-card">
    <h3>Account Status</h3>
    <h2>Active</h2>
  </div>
</div>

   </div>
);
}

  if (page === 'Transfer Money') {
    return (
      <div className="transactions">
        <h2>Transfer Money</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Transfer successful!');
        }}>
          <input type="text" placeholder="Receiver Name" required />
          <input type="text" placeholder="Account Number" required />
          <input type="number" placeholder="Amount" min="1" required />
          <button type="submit">Send Money</button>
        </form>
      </div>
    );
  }

  if (page === 'Buy Airtime') {
    return (
      <div className="transactions">
        <h2>Buy Airtime</h2>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Airtime Purchase Successful!');
        }}>
          <label>Select Network</label>
          <select required>
            <option value="MTN">MTN</option>
            <option value="Airtel">Airtel</option>
            <option value="Glo">Glo</option>
            <option value="9mobile">9mobile</option>
          </select>

          <br /><br />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <br /><br />

          <input
            type="number"
            placeholder="Amount"
            min="1"
            required
          />

          <br /><br />

          <button type="submit">Buy Airtime</button>
        </form>
      </div>
    );
  }

  if (page === 'Buy Data') {
  return (
    <div className="transactions">
      <h2>Buy Data</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert('Data Purchase Successful!');
      }}>
        <label>Select Network</label>

        <select required>
          <option value="MTN">MTN</option>
          <option value="Airtel">Airtel</option>
          <option value="Glo">Glo</option>
          <option value="9mobile">9mobile</option>
        </select>

        <br /><br />

        <input
          type="tel"
          placeholder="Phone Number"
          required
        />

        <br /><br />

        <label>Select Data Plan</label>

        <select required>
          <option value="500MB">500MB</option>
          <option value="1GB">1GB</option>
          <option value="2GB">2GB</option>
          <option value="5GB">5GB</option>
        </select>

        <br /><br />

        <input
          type="number"
          placeholder="Amount"
          min="1"
          required
        />

        <br /><br />

        <button type="submit">Buy Data</button>
      </form>
    </div>
  );
}


if (page === 'Bill Payments') {
  return (
    <div className="transactions">
      <h2>Bill Payments</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert('Bill Payment Successful!');
      }}>
        <label>Select Bill Type</label>

        <select required>
          <option value="Electricity">Electricity</option>
          <option value="Water">Water</option> 
          <option value="TV Subscription">TV Subscription</option>
        </select>

        <br /><br />

        <input
          type="text"
          placeholder="Customer Number"
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter Amount"
          min="1"
          required
        />

        <br /><br />

        <button type="submit">Pay Bill</button>
      </form>
    </div>
  );
}



if (page === 'Transactions') {
  return (
    <div className="transactions">
      <h2>Transaction History</h2>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Money Received</td>
            <td>₦50,000</td>
            <td>Successful</td>
          </tr>
          <tr>
            <td>Money Sent</td>
            <td>₦10,000</td>
            <td>Successful</td>
          </tr>
          <tr>
            <td>Airtime Purchase</td>
            <td>₦2,000</td>
            <td>Successful</td>
          </tr>
          <tr>
            <td>Data Purchase</td>
            <td>₦5,000</td>
            <td>Successful</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (page === 'Profile') {
  return (
    <div className="transactions">
      <h2>My Profile</h2>

      <p>Name: Umar</p>
      <p>Email: {email}</p>
      <p>Account Type: Student</p>
      <p>Account Status: Active</p>
    </div>
  );
}


if (page === 'Settings') {
  return (
    <div className="transactions">
      <h2>Settings</h2>

      <p>Account Settings</p>
      <p>Change Password</p>
      <p>Notification Settings</p>
      <p>Privacy Settings</p>
    </div>
  );
}

  return (
    <div className="transactions">
      <h2>{page}</h2>
      <p>Welcome to {page}</p>
      <p>More features coming soon.</p>
    </div>
  );
}

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h1>FinPay</h1>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? 'container dark-mode' : 'container'}>
      <div className="sidebar">

        <h2 className="logo">FinPay</h2>
<p className="tagline">Simple Banking</p>
        <h2>FinPay</h2>
        {[
          'Dashboard',
          'Transfer Money',
          'Buy Airtime',
          'Buy Data',
          'Bill Payments',
          'Transactions',
          'Profile',
          'Settings'
        ].map((item) => (
          <button key={item} onClick={() => setPage(item)}>
            {item}
          </button>
        ))}
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>

      <div className="main-content">

        <div className="top-bar">

  <form onSubmit={(e) => {
    e.preventDefault();
    alert('You searched for: ' + searchText);
  }}>
    <input
      type="text"
      placeholder="Search FinPay..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
    <button type="submit">Search</button>
  </form>

  <button onClick={() => alert('You have no new notifications.')}>
    Notifications 🔔
  </button>

  <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
</button>

</div>

        <h1>Welcome to FinPay!</h1>
<p>Hello, {email}. Welcome back.</p>
        {showPage()}

        <footer>
  <p>© 2026 FinPay. All Rights Reserved.</p>
  <p>Simple Banking for Everyone.</p>
</footer>
      </div>
    </div>
  );
}

export default App;