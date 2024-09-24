   // resource_board/src/App.jsx
   import React from 'react'; // Import React library
   import ResourceCard from './components/ResourceCard'; // Import ResourceCard component
   import './App.css'; // Import CSS styles

   const App = () => {
       // Sample data for resources
       const resources = [
           {
               category: 'Health Services',
               title: 'NYC Health + Hospitals',
               description: 'Provides comprehensive health services across NYC.',
               link: 'https://www.nychealthandhospitals.org/',
               contact: 'N/A',
               hours: '24/7',
               eligibility: 'Open to all NYC residents.',
               iframe: '<iframe src="https://www.nychealthandhospitals.org/" width="300" height="200" title="NYC Health + Hospitals"></iframe>',
           },
           {
               category: 'Health Services',
               title: 'Mental Health Association of New York City',
               description: 'Offers mental health support and resources.',
               link: 'https://www.mhaofnyc.org/',
               contact: 'N/A',
               hours: 'Mon-Fri: 9 AM - 5 PM',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.mhaofnyc.org/" width="300" height="200" title="Mental Health Association of NYC"></iframe>',
           },
           {
               category: 'Educational Resources',
               title: 'NYC Department of Education',
               description: 'Information on public schools and educational programs.',
               link: 'https://www.schools.nyc.gov/',
               contact: 'N/A',
               hours: 'Mon-Fri: 8 AM - 4 PM',
               eligibility: 'Open to all students.',
               iframe: '<iframe src="https://www.schools.nyc.gov/" width="300" height="200" title="NYC Department of Education"></iframe>',
           },
           {
               category: 'Educational Resources',
               title: 'The New York Public Library',
               description: 'Offers educational resources, tutoring, and workshops.',
               link: 'https://www.nypl.org/',
               contact: 'N/A',
               hours: 'Mon-Sat: 10 AM - 6 PM',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.nypl.org/" width="300" height="200" title="NY Public Library"></iframe>',
           },
           {
               category: 'Housing Assistance',
               title: 'NYC Housing Authority (NYCHA)',
               description: 'Provides affordable housing options and assistance.',
               link: 'https://www.nyc.gov/site/nycha/index.page',
               contact: 'N/A',
               hours: 'Mon-Fri: 9 AM - 5 PM',
               eligibility: 'Open to all NYC residents.',
               iframe: '<iframe src="https://www.nyc.gov/site/nycha/index.page" width="300" height="200" title="NYC Housing Authority"></iframe>',
           },
           {
               category: 'Housing Assistance',
               title: 'Coalition for the Homeless',
               description: 'Offers resources and support for homeless individuals and families.',
               link: 'https://www.coalitionforthehomeless.org/',
               contact: 'N/A',
               hours: 'Mon-Fri: 9 AM - 5 PM',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.coalitionforthehomeless.org/" width="300" height="200" title="Coalition for the Homeless"></iframe>',
           },
           {
               category: 'Employment Opportunities',
               title: 'NYC Workforce Development',
               description: 'Job training and employment services for New Yorkers.',
               link: 'https://www.nyc.gov/site/sbs/workforce/index.page',
               contact: 'N/A',
               hours: 'Mon-Fri: 9 AM - 5 PM',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.nyc.gov/site/sbs/workforce/index.page" width="300" height="200" title="NYC Workforce Development"></iframe>',
           },
           {
               category: 'Employment Opportunities',
               title: 'Job Opportunities Task Force',
               description: 'Provides job training and placement services.',
               link: 'https://www.jotf.org/',
               contact: 'N/A',
               hours: 'Mon-Fri: 9 AM - 5 PM',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.jotf.org/" width="300" height="200" title="Job Opportunities Task Force"></iframe>',
           },
           {
               category: 'Community Events',
               title: 'NYC Parks Events',
               description: 'Lists community events and activities in NYC parks.',
               link: 'https://www.nycgovparks.org/events',
               contact: 'N/A',
               hours: 'Varies by event',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.nycgovparks.org/events" width="300" height="200" title="NYC Parks Events"></iframe>',
           },
           {
               category: 'Community Events',
               title: 'Eventbrite NYC',
               description: 'A platform for finding local events and activities.',
               link: 'https://www.eventbrite.com/d/ny--new-york/events/',
               contact: 'N/A',
               hours: 'Varies by event',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.eventbrite.com/d/ny--new-york/events/" width="300" height="200" title="Eventbrite NYC"></iframe>',
           },
           {
               category: 'Food Assistance',
               title: 'Food Bank For New York City',
               description: 'Provides food assistance and resources for those in need.',
               link: 'https://www.foodbanknyc.org/',
               contact: 'N/A',
               hours: 'Mon-Fri: 9 AM - 5 PM',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.foodbanknyc.org/" width="300" height="200" title="Food Bank For NYC"></iframe>',
           },
           {
               category: 'Food Assistance',
               title: 'City Harvest',
               description: 'A food rescue organization that helps feed the hungry.',
               link: 'https://www.cityharvest.org/',
               contact: 'N/A',
               hours: 'Mon-Fri: 9 AM - 5 PM',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.cityharvest.org/" width="300" height="200" title="City Harvest"></iframe>',
           },
           {
               category: 'Legal Assistance',
               title: 'Legal Aid Society',
               description: 'Provides free legal services to low-income New Yorkers.',
               link: 'https://www.legalaidnyc.org/',
               contact: 'N/A',
               hours: 'Mon-Fri: 9 AM - 5 PM',
               eligibility: 'Open to low-income individuals.',
               iframe: '<iframe src="https://www.legalaidnyc.org/" width="300" height="200" title="Legal Aid Society"></iframe>',
           },
           {
               category: 'Legal Assistance',
               title: 'New York City Bar Association',
               description: 'Offers legal resources and referrals.',
               link: 'https://www.nycbar.org/',
               contact: 'N/A',
               hours: 'Mon-Fri: 9 AM - 5 PM',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.nycbar.org/" width="300" height="200" title="NYC Bar Association"></iframe>',
           },
           {
               category: 'Cultural Resources',
               title: 'The Museum of Modern Art (MoMA)',
               description: 'Offers educational programs and community events.',
               link: 'https://www.moma.org/',
               contact: 'N/A',
               hours: 'Mon-Sun: 10 AM - 5:30 PM',
               eligibility: 'Open to all.',
               iframe: '<iframe src="https://www.moma.org/" width="300" height="200" title="MoMA"></iframe>',
           },
       ];

       const groupedResources = resources.reduce((acc, resource) => {
           if (!acc[resource.category]) {
               acc[resource.category] = []; // Initialize category array
           }
           acc[resource.category].push(resource); // Add resource to category
           return acc;
       }, {});

       return (
           <div className="app">
               <h1>Community Resource Board</h1>
               {Object.keys(groupedResources).map((category) => (
                   <div key={category}>
                       <h2>{category}</h2> {/* Display category title */}
                       <div className="resource-list">
                           {groupedResources[category].map((resource, index) => (
                               <ResourceCard 
                                   key={index}
                                   title={resource.title}
                                   description={resource.description}
                                   link={resource.link}
                                   contact={resource.contact}
                                   hours={resource.hours}
                                   eligibility={resource.eligibility}
                                   iframe={resource.iframe}
                               />
                           ))}
                       </div>
                   </div>
               ))}
           </div>
       );
   };

   export default App; // Export the App component