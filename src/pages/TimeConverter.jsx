import { useState } from 'react';

function TimeConverter() {
  const [country, setCountry] = useState('India');
  const [inputTime, setInputTime] = useState('');
  const [convertedTime, setConvertedTime] = useState('');

  const handleConvert = () => {
    const clock = document.getElementById('clock-icon');
if (clock) {
  clock.style.animation = 'spin 1s linear';
  setTimeout(() => {
    clock.style.animation = 'pulse 2s infinite';
  }, 1000);
}

    if (!inputTime) {
      setConvertedTime('Please enter the time.');
      return;
    }

    let offsetHours = 0;

    if (country === 'India') {
      offsetHours = -3.5; // India (IST) je +5:30, Beograd je +2:00 => 3h30m razlike
    } else if (country === 'Nigeria') {
      offsetHours = -1; // Nigeria (WAT) je +1:00, Beograd je +2:00 => -1h razlike
    }

    const [hours, minutes] = inputTime.split(':').map(Number);

    const inputDate = new Date();
    inputDate.setHours(hours);
    inputDate.setMinutes(minutes);

    // Pomeramo na Beograd vreme
    inputDate.setMinutes(inputDate.getMinutes() + offsetHours * 60);

    // Dodaj još 5 minuta kašnjenja
    const startTime = new Date(inputDate.getTime());
    const endTime = new Date(inputDate.getTime() + 5 * 60 * 1000);

    const formatTime = (date) => {
      const h = date.getHours().toString().padStart(2, '0');
      const m = date.getMinutes().toString().padStart(2, '0');
      return `${h}:${m}`;
    };

    setConvertedTime(`${formatTime(startTime)} - ${formatTime(endTime)}`);
  };

  return (
    <div style={styles.pageWrapper}>

      <div style={styles.clockIcon} id="clock-icon">
        🕒
      </div>
      <h1 style={styles.title}>Time Converter</h1>

      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={styles.select}
      >
        <option value="India">India (IST +5:30)</option>
        <option value="Nigeria">Nigeria (WAT +1:00)</option>
      </select>

      <input
        type="time"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleConvert} className="button-convert">
        Izračunaj
      </button>

      {convertedTime && (
        <div className="result fade-in" style={styles.result}>
          <h2>Beograd Vreme:</h2>
          <p>{convertedTime}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
  },
  title: {
    fontSize: '28px',
    marginBottom: '30px',
    color: 'black',
  },
  select: {
    width: '250px',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '8px',
    fontSize: '16px',
  },
  input: {
    width: '250px',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '8px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: '#2c2c2c',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '30px',
  },
  result: {
    marginTop: '20px',
    color: 'black',
    textAlign: 'center',
  },
  clockIcon: {
    fontSize: '60px',
    marginBottom: '20px',
    animation: 'pulse 2s infinite',
  },
};

export default TimeConverter;
