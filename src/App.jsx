// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/Homepage';
// import Event from './components/Event';


// function App() {
//   return (
//     <Router>
//       <div className='overflow-x-hidden'>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/events" element={<Event/>}/>
//           {/* <Route path="/events2" element={<Event content="The iPhone is a smartphone produced by Apple that uses Apple's own iOS mobile operating system. The first-generation iPhone was announced by then–Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.
//                 The iPhone was the first mobile phone to use multi-touch technology.[3] Since the iPhone's launch, it has gained larger screen sizes, video-recording, waterproofing, and many accessibility features. Up to the iPhone 8 and 8 Plus, iPhones had a single button on the front panel, with the iPhone 5s and later integrating a Touch ID fingerprint sensor.[4] Since the iPhone X, iPhone models have switched to a nearly bezel-less front screen design"/>} />
//           <Route path="/events3" element={<Event content="Then-Apple CEO Steve Jobs steered the original focus away from a tablet (which was later revisited in the form of the iPad) towards a phone.[10] Apple created the device during a secretive collaboration with Cingular Wireless (later renamed AT&T Mobility) at an estimated development cost of US$150 million over thirty months.[11] According to Jobs in 1998, the  word in  (and thereafter  and " />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/Homepage';
// import Event from './components/Event';
// import { useLocation } from 'react-router-dom';

// function EventWithProps() {
//   const location = useLocation();
//   const { state } = location || {};
//   const content = state ? state.content : 'No content available';
//   return <Event content={content} />;
// }
 
// function App() {
//   return (
//     <Router>
//       <div className='overflow-x-hidden'>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/events" element={<EventWithProps />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Navigate } from 'react-router-dom';
import HomePage from './components/Homepage';
import Event from './components/Event';
import PreLoader from './components/PreLoader';


function DynamicEvent() {
  const { eventId } = useParams();

  // Event data containing content and image URLs
  const eventData = [
    {
      content: "In computer science and operations research, approximation algorithms are efficient algorithms that find approximate solutions to optimization problems (in particular NP-hard problems) with provable guarantees on the distance of the returned solution to the optimal one.",
      imageSrc: "/checkpoint.png"
    },
    {
      content: "In computer science and operations research, approximation algorithms are efficient algorithms that find approximate solutions to optimization problems (in particular NP-hard problems) with provable guarantees on the distance of the returned solution to the optimal one.",
      imageSrc: "/questcon.png"
    },
    {
      content: "In computer science and operations research, approximation algorithms are efficient algorithms that find approximate solutions to optimization problems (in particular NP-hard problems) with provable guarantees on the distance of the returned solution to the optimal one.",
      imageSrc: "/ctf_training.png"
    },
    {
      content: "In computer science and operations research, approximation algorithms are efficient algorithms that find approximate solutions to optimization problems (in particular NP-hard problems) with provable guarantees on the distance of the returned solution to the optimal one.",
      imageSrc: "/8.png"
    },
    {
      content: "Event 5: Almost there, it's the fifth event.",
      imageSrc: "/event5.png"
    },
    {
      content: "Event 6: The final event, thank you!",
      imageSrc: "/questcon.png"
    },
  ];

  // Ensure eventId is a valid number and within range
  const currentEvent = eventData[parseInt(eventId) - 1] || null;

  if (!currentEvent) {
    return <Navigate to="/events/1" />; // Redirect to the first event if the ID is invalid
  }

  return <Event content={currentEvent.content} imageSrc={currentEvent.imageSrc} eventId={parseInt(eventId)} totalEvents={eventData.length} />;
}

function App() {
  return (
    <Router>
      <PreLoader/>
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/:eventId" element={<DynamicEvent />} />
          <Route path="/events" element={<Navigate to="/events/1" />} /> {/* Redirect to the first event */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

