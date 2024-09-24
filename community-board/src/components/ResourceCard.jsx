   // resource_board/src/components/ResourceCard.jsx
   import React, { useState } from 'react'; // Import useState
   import PropTypes from 'prop-types'; // Import prop types for validation

   // Define the ResourceCard functional component
   const ResourceCard = ({ title, description, link, contact, hours, eligibility, iframe }) => {
       const [showMore, setShowMore] = useState(false); // State to manage visibility

       const toggleShowMore = () => {
           setShowMore(!showMore); // Toggle visibility
       };

       return (
           <div className="resource-card" style={{ backgroundColor: '#f0f0f0' }}> {/* Grey background */}
               <h2>
                   <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                       {title}
                   </a>
               </h2> {/* Display the title */}
               <p>{description}</p> {/* Display the description */}
               <p><strong>Contact:</strong> {contact}</p> {/* Display contact information */}
               <p><strong>Hours:</strong> {hours}</p> {/* Display hours of operation */}
               <p><strong>Eligibility:</strong> {eligibility}</p> {/* Display eligibility criteria */}
               <button className="view-button" onClick={toggleShowMore}>
                   {showMore ? 'Show Less' : 'View'} {/* Change button text to "View" */}
               </button>
               {showMore && (
                   <div className="additional-info"> {/* Additional information */}
                       <div dangerouslySetInnerHTML={{ __html: iframe }} /> {/* Render iframe */}
                   </div>
               )}
           </div>
       );
   };

   // Define prop types for validation
   ResourceCard.propTypes = {
       title: PropTypes.string.isRequired,
       description: PropTypes.string.isRequired,
       link: PropTypes.string.isRequired, // Add link prop type
       contact: PropTypes.string.isRequired,
       hours: PropTypes.string.isRequired,
       eligibility: PropTypes.string.isRequired,
       iframe: PropTypes.string.isRequired, // Add iframe prop type
   };

   export default ResourceCard; // Export the component