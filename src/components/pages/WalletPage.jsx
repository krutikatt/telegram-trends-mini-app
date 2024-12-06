import React from 'react';
import qrImage from '../../assets/qr.jpeg';

const WalletPage = () => {
  return (
    <div style={styles.walletPage}>
      <div style={styles.headerIcon}>
        {/* Uncomment and use if needed: <img src="/assets/icon.png" alt="Icon" /> */}
      </div>
      <h1>Wallet</h1>
      <p>Connect your TON wallet for future rewards</p>
      <button style={styles.connectButton}>
        Connect your TON wallet
      </button>
      <div style={styles.qrContainer}>
        <img src={qrImage} alt="QR Code" style={styles.qrImage} />
      </div>
      <div style={styles.footerNav}>
        <div>Home</div>
        <div>Tasks</div>
        <div>Frens</div>
        <div>Activity</div>
        <div>Earn</div>
        <div style={styles.active}>Wallet</div>
      </div>
    </div>
  );
};

const styles = {
  walletPage: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  headerIcon: {
    marginBottom: '20px',
  },
  connectButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4A90E2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '90%',
    maxWidth: '300px',
    margin: 'auto',
  },
  qrContainer: {
    marginTop: '20px',
  },
  qrImage: {
    width: '100px',
    height: '100px',
  },
  footerNav: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 0',
    backgroundColor: '#f8f8f8',
    borderTop: '1px solid #e0e0e0',
  },
  active: {
    color: '#4A90E2',
  },
  footerNavItem: {
    fontSize: '14px',
    cursor: 'pointer',
  },
  '@media screen and (max-width: 600px)': {
    walletPage: {
      padding: '10px',
    },
    connectButton: {
      fontSize: '14px',
      padding: '8px 16px',
    },
    qrImage: {
      width: '80px',
      height: '80px',
    },
    footerNavItem: {
      fontSize: '12px',
    },
  },
};

export default WalletPage;
