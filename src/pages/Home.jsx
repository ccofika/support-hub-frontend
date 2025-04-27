import { Link } from 'react-router-dom';

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

  return (
    <div style={styles.wrapper}>
      {cards.map((card, index) => (
        <Link to={card.link} key={index} style={styles.card}>
          <div style={styles.icon}>{card.icon}</div>
          <h2 style={styles.title}>{card.title}</h2>
          <p style={styles.description}>{card.description}</p>
        </Link>
      ))}
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
    padding: '40px',
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
  }
};

export default Home;
