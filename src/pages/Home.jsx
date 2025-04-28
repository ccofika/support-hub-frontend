import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Home() {
  const cards = [
    {
      title: 'Crypto Extractor',
      description: 'Easily extract and view crypto transaction details. Perfect for quick analysis.',
      link: '/crypto-extractor',
      icon: '🪙',
    },
    {
      title: 'Time Converter',
      description: 'Convert payment times across different countries instantly and accurately.',
      link: '/time-converter',
      icon: '🕒',
    },
    {
      title: 'Macros',
      description: 'Access a library of ready-to-send customer support messages anytime.',
      link: '/macros',
      icon: '💬',
    },
    {
      title: 'Word & Excel Files',
      description: 'Download important support templates and documentation with ease.',
      link: '/files',
      icon: '📄',
    },
  ];

  const [modalData, setModalData] = useState(null);

  const updates = {
    knownIssues: [
      { title: '🔥 Crypto Withdrawals Delay', detail: 'Blockchain congestion causing crypto withdrawals delay.\n\nMacro:\n"We apologize for the delay. Crypto networks are currently congested. Your withdrawal is being processed."' },
      { title: '⚙️ Maintenance on AstroPay', detail: 'AstroPay maintenance scheduled today.\n\nMacro:\n"AstroPay services are undergoing maintenance. Please try later."' },
      { title: '🚫 Blocked Promotions in Canada', detail: 'Promotions temporarily blocked for Canadian users.\n\nMacro:\n"Due to regulation updates, promotions are temporarily unavailable for Canada."' },
      { title: '🛠️ KYC System Downtime', detail: 'KYC system under maintenance for 3 hours.\n\nMacro:\n"Our KYC verification system is under scheduled maintenance. We appreciate your patience."' },
      { title: '🧹 Scheduled Server Restart', detail: 'Servers restarting at midnight UTC.\n\nMacro:\n"A scheduled server restart will occur at midnight UTC. Temporary downtime may happen."' },
    ],
    shiftSummary: [
      { title: '🧩 High KYC queue today', detail: 'Heavy KYC backlog.\n\nMacro:\n"We are experiencing a higher volume of KYC verifications. Your request will be processed shortly."' },
      { title: '📈 Increased Indian traffic', detail: 'Spike in Indian traffic.\n\nMacro:\n"We are managing higher traffic volumes from India. Some delays are possible."' },
      { title: '❗ VIP complaints about bonuses', detail: 'Multiple VIP bonus complaints.\n\nMacro:\n"Our VIP support team is reviewing bonus-related concerns. We appreciate your patience."' },
      { title: '🎯 Resolved missing USDT', detail: 'USDT missing transaction resolved.\n\nMacro:\n"Your missing USDT transaction issue has been successfully resolved."' },
      { title: '📥 Payment approval time increased', detail: 'Payment approvals slower.\n\nMacro:\n"Approval times for payments have slightly increased. We are working to normalize processing times."' },
    ],
    internalAnnouncements: [
      { title: '🚀 New Promotion starts May 1', detail: 'New promotion launching May 1.\n\nMacro:\n"Exciting new promotions starting May 1st! Stay tuned!"' },
      { title: '🛡️ New security update applied', detail: 'Security system updated.\n\nMacro:\n"A new security update has been applied to protect your data."' },
      { title: '🎉 Monthly reward program expanded', detail: 'Rewards expanded to more users.\n\nMacro:\n"The Monthly Reward Program has been expanded to include more users!"' },
      { title: '📌 Update: New refund policy', detail: 'Refund policy updated.\n\nMacro:\n"We have updated our refund policy. Please review it in the Terms & Conditions."' },
      { title: '🔔 Downtime expected on Sunday', detail: 'System downtime expected.\n\nMacro:\n"Temporary system downtime expected on Sunday. Services will resume shortly after."' },
    ]
  };

  const openModal1 = (update) => {
    setModalData(update);
  };

  const closeModal1 = () => {
    setModalData(null);
  };

  const cities = ['Beograd', 'Kragujevac', 'Lopas'];
  const shifts = ['I', 'II', 'III'];

  const shiftHours = {
    'I': [7,8,9,10,11,12,13,14],
    'II': [15,16,17,18,19,20,21,22],
    'III': [23,0,1,2,3,4,5,6],
  };

  
  const [selectedCity, setSelectedCity] = useState('Beograd');
  const [selectedShift, setSelectedShift] = useState('Prva smena');
  const [pauses, setPauses] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentHour, setCurrentHour] = useState(null);
  const [usernameInput, setUsernameInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('pauses');
    if (saved) {
      setPauses(JSON.parse(saved));
    }
  }, []);
  
  
  // Sačuvaj svaki put kad se promeni nešto
  useEffect(() => {
    if (Object.keys(pauses).length > 0) {
      localStorage.setItem('pauses', JSON.stringify(pauses));
    }
  }, [pauses]);
  
  
  

  const openModal = (hour) => {
    setCurrentHour(hour);
    setUsernameInput('');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const submitPause = () => {
    const key = `${selectedCity}-${selectedShift}-${currentHour}`;
    setPauses(prev => ({
      ...prev,
      [key]: prev[key] ? [...prev[key], usernameInput] : [usernameInput]
    }));
    setModalOpen(false);
  };  

  const getUsersForHour = (hour) => {
    const key = `${selectedCity}-${selectedShift}-${hour}`;
    return pauses[key] || [];
  };

  const resetPauses = () => {
    const saved = localStorage.getItem('pauses');
    const parsed = saved ? JSON.parse(saved) : {};
    
    const keysToDelete = Object.keys(parsed).filter(key => key.startsWith(`${selectedCity}-${selectedShift}`));
    
    keysToDelete.forEach(key => {
      delete parsed[key];
    });
  
    localStorage.setItem('pauses', JSON.stringify(parsed));
    setPauses(parsed);
  };
  
  
  

  return (
    <div style={{ padding: '40px' }}>
      {/* Existing Cards */}
      <div style={styles.wrapper}>
        {cards.map((card, index) => (
          <Link to={card.link} key={index} style={styles.card}>
            <div style={styles.icon}>{card.icon}</div>
            <h2 style={styles.title}>{card.title}</h2>
            <p style={styles.description}>{card.description}</p>
          </Link>
        ))}
      </div>

     {/* Updates Sections */}
<div style={{ paddingTop: '40px' }}>
  <div style={styles.updateSection}>
    <h2 style={styles.sectionTitle}>📢 Known Issues Board</h2>
    {updates.knownIssues.map((item, index) => (
      <div key={index} style={styles.updateItem} onClick={() => openModal1(item)}>
        {item.title}
      </div>
    ))}
  </div>

  <div style={styles.updateSection}>
    <h2 style={styles.sectionTitle}>📝 Shift Summary</h2>
    {updates.shiftSummary.map((item, index) => (
      <div key={index} style={styles.updateItem} onClick={() => openModal1(item)}>
        {item.title}
      </div>
    ))}
  </div>

  <div style={styles.updateSection}>
    <h2 style={styles.sectionTitle}>🔔 Internal Announcements</h2>
    {updates.internalAnnouncements.map((item, index) => (
      <div key={index} style={styles.updateItem} onClick={() => openModal1(item)}>
        {item.title}
      </div>
    ))}
  </div>
</div>


      {/* Pause Manager */}
      <section style={styles.section}>
        <h1>⏸️ Pause Manager</h1>

        <div style={styles.pauseControls}>
  <div style={styles.cityGroup}>
    {cities.map(city => (
      <button 
        key={city} 
        onClick={() => setSelectedCity(city)} 
        style={selectedCity === city ? styles.activeButton : styles.button}
      >{city}</button>
    ))}
  </div>

  <div style={styles.shiftGroup}>
    {shifts.map(shift => (
      <button 
        key={shift} 
        onClick={() => setSelectedShift(shift)} 
        style={selectedShift === shift ? styles.activeButton : styles.button}
      >{shift}</button>
    ))}
  </div>
</div>


        <table style={styles.table}>
          <thead>
            <tr>
              <th>Sat</th>
              <th>Korisnici</th>
              <th>Dodaj Pauzu</th>
            </tr>
          </thead>
          <tbody>
            {(shiftHours[selectedShift] || []).map(hour => (
              <tr key={hour}>
                <td>{hour}:00</td>
                <td>{getUsersForHour(hour).join(', ') || '-'}</td>
                <td>
                  <button onClick={() => openModal(hour)} style={styles.addButton}>+</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {modalOpen && (
          <div style={styles.modalOverlay}>
            <div style={styles.modal}>
              <h2>Dodaj pauzu za {currentHour}:00</h2>
              <p>Već uzeli pauzu: {getUsersForHour(currentHour).join(', ') || 'Niko još'}</p>
              <input 
                type="text" 
                placeholder="Username" 
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                style={styles.input}
              />
              <div style={{ marginTop: '10px' }}>
                <button onClick={submitPause} style={styles.modalButton}>Sačuvaj</button>
                <button onClick={closeModal} style={styles.modalButton}>Otkaži</button>
              </div>
            </div>
          </div>
        )}

<button onClick={() => resetPauses()} style={styles.resetButton}>
  Resetuj pauze za {selectedCity} - {selectedShift}
</button>

      </section>

      {modalData && (
  <div style={styles.modalOverlay1}>
    <div style={styles.modal1}>
      <h2>{modalData.title}</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{modalData.detail}</p>
      <button onClick={closeModal1} style={styles.closeButton}>Close</button>
    </div>
  </div>
)}

    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '60px'
  },
  card: {
    backgroundColor: '#2c2c2c',
    color: 'white',
    textDecoration: 'none',
    width: '250px',
    minHeight: '220px',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  icon: {
    fontSize: '40px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
  },
  section: {
    marginBottom: '50px'
  },
  buttonGroup: {
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  activeButton: {
    padding: '10px 20px',
    margin: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  },
  table: {
    width: '80%',
    maxWidth: '800px',
    margin: '20px auto',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden'
  },  
  addButton: {
    padding: '5px 10px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  modalOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  modalButton: {
    padding: '8px 12px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  },
  resetButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#e53935',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  pageTitle: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '32px'
  },
  updateSection: {
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '40px',
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  sectionTitle: {
    marginBottom: '20px',
    fontSize: '24px'
  },
  updateItem: {
    backgroundColor: '#fff',
    marginBottom: '10px',
    padding: '12px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: '0.2s',
    textAlign: 'left'
  },
  modalOverlay1: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal1: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '500px',
    textAlign: 'center'
  },
  closeButton: {
    marginTop: '20px',
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#e53935',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  pauseControls: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  
  cityGroup: {
    display: 'flex',
    gap: '10px',
  },
  
  shiftGroup: {
    display: 'flex',
    gap: '10px',
  },
  
};

export default Home;
