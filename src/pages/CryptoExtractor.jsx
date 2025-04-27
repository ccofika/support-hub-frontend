import { useState } from 'react';
import axios from 'axios';

function CryptoExtractor() {
  const [txid, setTxid] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleExtract = async () => {
    if (!txid) {
      setError('Please enter a transaction ID.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('https://support-hub-backend.onrender.com/api/crypto-extract', { txid });
      setResult(response.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('Server error.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <h1 style={styles.title}>Crypto Extractor</h1>

      <input
        type="text"
        placeholder="Enter Transaction ID"
        value={txid}
        onChange={(e) => setTxid(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleExtract} className="button-convert">
        {loading ? "Loading..." : "Extract"}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {result && (
        <div className="fade-in" style={styles.result}>
          <h2>Transaction Details:</h2>
          <p><strong>Coin:</strong> {result.coin}</p>
          <p><strong>Network:</strong> {result.network}</p>
          <p><strong>Status:</strong> {result.status}</p>
          {result.reason && <p><strong>Reason:</strong> {result.reason}</p>}
          <p>{result.message}</p>
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
    color: '#ffffff',
  },
  input: {
    width: '300px',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '8px',
    fontSize: '16px',
  },
  result: {
    color: 'black',
    textAlign: 'center',
    marginTop: '20px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  }
};

export default CryptoExtractor;
