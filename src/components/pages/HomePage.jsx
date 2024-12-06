import React from "react";
import arcReactorVideo from "../../../src/assets/ArcReactor.mp4"; // Adjust the path to your video file

const HomePage = ({ userName, userScore, userLevel }) => {
  const styles = {
    homepageContainer: {
      display: "flex",
      backgroundColor: "#000", // Black background color
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100vh",
      padding: "10px",
      boxSizing: "border-box",
      position: "fixed",
      overflow: "hidden",
    },
    userNameContainer: {
      position: "absolute",
      top: "10px",
      left: "10px",
      color: "#00FFFF", // Cyan color for "Welcome, Krutika"
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    userName: {
      margin: 0,
    },
    scoreLevelContainer: {
      marginBottom: "20px",
      textAlign: "center",
    },
    score: {
      fontSize: "1.5rem",
      margin: "5px 0",
      color: "#fff", // White text for contrast
    },
    level: {
      fontSize: "1.5rem",
      margin: "5px 0",
      color: "#fff", // White text for contrast
    },
    videoContainer: {
      width: "200px", // Increased size for the logo container
      height: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      overflow: "hidden",
    },
    video: {
      width: "150%",
      height: "100%",
      objectFit: "cover", // Ensures the video fits perfectly within the container
    },
  };

  return (
    <div style={styles.homepageContainer}>
      {/* Welcome message at the top left */}
      <div style={styles.userNameContainer}>
        <p style={styles.userName}>Welcome, Krutika</p>
      </div>

      {/* Score and Level Section */}
      <div style={styles.scoreLevelContainer}>
        <div style={styles.score}>Total Points: {userScore}</div>
        <div style={styles.level}>Level: {userLevel}</div>
      </div>

      {/* Video as a logo */}
      <div style={styles.videoContainer}>
        <video style={styles.video} src={arcReactorVideo} autoPlay loop muted />
      </div>
    </div>
  );
};

export default HomePage;
