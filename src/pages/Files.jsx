import { Link } from 'react-router-dom';
import { useState } from 'react';

function Files() {
    const [wordSearchTerm, setWordSearchTerm] = useState('');
    const [excelSearchTerm, setExcelSearchTerm] = useState('');

  const wordFiles = [
    {
      title: 'Welcome Message Template',
      description: 'A ready-to-use Word template for welcoming new users.',
      link: 'https://docs.google.com/document/d/your-word-link-1',
      image: '📄',
    },
    {
      title: 'AML Policy Notice',
      description: 'Official Word document for AML-related communications.',
      link: 'https://docs.google.com/document/d/your-word-link-2',
      image: '📄',
    },
    // Dodaješ nove Word fajlove ovde
  ];

  const excelFiles = [
    {
      title: 'Affiliate List & Deals',
      description: 'Excel sheet to search affiliate offers and their requirements.',
      link: 'https://docs.google.com/spreadsheets/d/1rXMStYcSZMX7OQZgslBGaxE4kuQsOvXikA26HYmxzdI/edit?gid=1494428721#gid=1494428721',
      image: '📊',
    },
    {
      title: 'Deposit Monitoring Sheet',
      description: 'Keep a close eye on fiat and crypto deposits.',
      link: 'https://docs.google.com/spreadsheets/d/your-excel-link-2',
      image: '/images/excel-icon.png',
    },
    // Dodaješ nove Excel fajlove ovde
  ];

  return (
    <div style={styles.pageWrapper}>
        
      <h1 style={styles.sectionTitle}>Word Files</h1>

      <input
        type="text"
        placeholder="Search files..."
        value={wordSearchTerm}
        onChange={(e) => setWordSearchTerm(e.target.value)}
        style={styles.searchInput}
      />


      <div style={styles.wrapper}>
      {wordFiles.filter((card) =>
  card.title.toLowerCase().includes(wordSearchTerm.toLowerCase()) ||
  card.description.toLowerCase().includes(wordSearchTerm.toLowerCase())
).length > 0 ? (
  wordFiles
    .filter((card) =>
      card.title.toLowerCase().includes(wordSearchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(wordSearchTerm.toLowerCase())
    )
    .map((card, index) => (
      <a href={card.link} target="_blank" rel="noopener noreferrer" key={index} style={styles.card} className="card card-visible" >
        {card.image && <img src={card.image} alt="icon" style={styles.iconImage} />}
        <h2 style={styles.title}>{card.title}</h2>
        <p style={styles.description}>{card.description}</p>
      </a>
    ))
) : (
  <p style={styles.noResults}>No Word files found.</p>
)}

      </div>

      <h1 style={styles.sectionTitle}>Excel Files</h1>


      <input
        type="text"
        placeholder="Search files..."
        value={excelSearchTerm}
        onChange={(e) => setExcelSearchTerm(e.target.value)}
        style={styles.searchInput}
        />


      <div style={styles.wrapper}>
      {excelFiles.filter((card) =>
  card.title.toLowerCase().includes(excelSearchTerm.toLowerCase()) ||
  card.description.toLowerCase().includes(excelSearchTerm.toLowerCase())
).length > 0 ? (
  excelFiles
    .filter((card) =>
      card.title.toLowerCase().includes(excelSearchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(excelSearchTerm.toLowerCase())
    )
    .map((card, index) => (
      <a href={card.link} target="_blank" rel="noopener noreferrer" key={index} style={styles.card} className="card card-visible">
        {card.image && <img src={card.image} alt="icon" style={styles.iconImage} />}
        <h2 style={styles.title}>{card.title}</h2>
        <p style={styles.description}>{card.description}</p>
      </a>
    ))
) : (
  <p style={styles.noResults}>No Excel files found.</p>
)}

      </div>
    </div>
  );
}

const styles = {
  iconImage: {
    width: '40px',
    height: '40px',
    marginBottom: '10px',
  },

  pageWrapper: {
    padding: '40px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '28px',
    margin: '40px 0 20px',
    color: 'black',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '60px',
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
    transition: 'transform 0.3s, background-color 0.3s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  searchInput: {
    width: '80%',
    maxWidth: '400px',
    padding: '10px',
    marginBottom: '30px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  noResults: {
    color: '#aaa',
    fontSize: '16px',
    marginTop: '20px',
  },
};

export default Files;
