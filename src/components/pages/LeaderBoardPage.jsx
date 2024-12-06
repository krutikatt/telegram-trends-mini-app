// Leaderboard.jsx
import React from "react";

const Leaderboard = () => {
  // Current user's data
  const currentUser = {
    username: "Your Stats",
    level: 1,
    points: 1000,
  };

  // Top 5 users' data (mock data for now)
  const topUsers = [
    { username: "Alice", level: 10, points: 5000 },
    { username: "Bob", level: 9, points: 4500 },
    { username: "Charlie", level: 8, points: 4000 },
    { username: "David", level: 7, points: 3500 },
    { username: "Eve", level: 6, points: 3000 },
  ];

  return (
    <div style={styles.leaderboardContainer}>
      {/* Current User Info */}
      <div style={styles.currentUser}>
        <h2>{currentUser.username}</h2>
        <p>Level: {currentUser.level}</p>
        <p>Points: {currentUser.points}</p>
      </div>

      {/* Top Users Section */}
      <div style={styles.topUsers}>
        <h3>Top 5 Users</h3>
        <ul style={styles.userList}>
          {topUsers.map((user, index) => (
            <li key={index} style={styles.userItem}>
              <span style={styles.rank}>#{index + 1}</span>
              <span style={styles.username}>{user.username}</span>
              <span style={styles.level}>Level: {user.level}</span>
              <span style={styles.points}>&nbsp;&nbsp;Points: {user.points}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  leaderboardContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "#ffffff",
    position: "fixed",
    overflow: "hidden",
    padding: "10px",
    boxSizing: "border-box",
  },
  currentUser: {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#1a1a1a",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
  },
  topUsers: {
    width: "100%",
    maxWidth: "400px",
  },
  userList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  userItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
  },
  rank: {
    fontWeight: "bold",
    color: "#27ae60",
  },
  username: {
    flex: 1,
    margin: "0 10px",
    fontWeight: "bold",
    textAlign: "left",
  },
  level: {
    fontSize: "14px",
    color: "#7f8c8d",
    marginRight: "10px",
  },
  points: {
    fontSize: "14px",
    color: "#7f8c8d",
  },
};

export default Leaderboard;
