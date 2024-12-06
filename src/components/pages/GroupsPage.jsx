import React from 'react';
import BubbleMap from '../BubbleChart'; // Assuming BubbleMap is the bubble map component
//import WorldMap from '../WorldMap';

const GroupsPage = () => {
  return (
    <div className="groups-page-container">
      <BubbleMap />
      
      <style jsx>{`
        .groups-page-container {
          background-color: black;
          width: 100vw; /* Full viewport width */
          height: 100vh; /* Full viewport height */
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed; /* Fix the position of the container */
          top: -40px; /* Move upwards by 20px */
          left: 0; /* Align to left */
          overflow: hidden; /* Prevent scrolling */
        }

        /* Media query for mobile responsiveness */
        @media only screen and (max-width: 768px) {
          .groups-page-container {
            top: 0; /* Adjust top position for mobile */
            padding: 10px; /* Add padding for smaller screens */
          }

          /* Ensure the BubbleMap takes up the available space */
          .groups-page-container > div {
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
          }
        }

        /* Media query for very small screens */
        @media only screen and (max-width: 480px) {
          .groups-page-container {
            top: 0; /* No top shift */
            padding: 5px; /* Reduce padding on very small screens */
          }

          .groups-page-container > div {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default GroupsPage;
