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
import Team from './components/Team';
import Timeline from './components/Timeline';


function DynamicEvent() {
  const { eventId } = useParams();

  // Event data containing content and image URLs
  const eventData = [
    {
      content: "We are thrilled to kick off the CyberKavach event, a month-long journey into the world of cybersecurity! This event is designed to empower participants with the knowledge and skills needed to safeguard their digital presence. Whether you're a seasoned tech enthusiast or just starting out, CyberKavach offers engaging activities, workshops, and challenges that will test and enhance your cyber defense strategies.",
      imageSrc: "/events/start.png"
    },
    {
      content: "Cybersafe Checkpoint is an essential cybersecurity initiative aimed at safeguarding your digital devices. Hosted on the PCCOE campus, this event allows participants to bring their laptops, smartphones, and other devices for a comprehensive vulnerability assessment. Our team will use advanced tools and techniques to identify potential security flaws, ensuring your devices are secure from cyber threats.",
      imageSrc: "/events/checkpoint.png"
    },
    {
      content: "Prepare for your next step in higher education with our Mock GRE event! This event features an informative session about the GRE exam, offering insights into its structure, scoring, and strategies for success. Following the session, participants will have the chance to take a free mock GRE test, simulating real exam conditions.",
      imageSrc: "/events/mockgre.png"
    },
    {
      content: "In computer science and operations research, approximation algorithms are efficient algorithms that find approximate solutions to optimization problems (in particular NP-hard problems) with provable guarantees on the distance of the returned solution to the optimal one.",
      imageSrc: "/events/adrishyam.png"
    },
    {
      content: "Event 5: Almost there, it's the fifth event.",
      imageSrc: "/events/mrigaya.png"
    },
    {
      content: "Event 6: The final event, thank you!",
      imageSrc: "/events/questcon.png"
    },
    {
      content: "Step into the world of secure coding and web development at our Dev Defence event! This engaging session is designed for developers, aspiring coders, and anyone interested in the intersection of web development and cybersecurity.",
      imageSrc: "/events/devdefence.png"
    },
    {
      content: " Off-Campus Cybersecurity Awareness Session, designed to equip you with the essential knowledge and skills to navigate the digital landscape safely. This interactive session will cover a range of topics, including the latest cybersecurity threats, best practices for protecting personal information, and strategies to enhance your online security.",
      imageSrc: "/events/offcampus.png"
    },
    {
      content: "Join us for the grand finale of the CyberKavach event as we celebrate the achievements, insights, and camaraderie built throughout this exciting month! The valedictory session will highlight the incredible journey participants undertook to enhance their cybersecurity skills and awareness.During this session, we will share key takeaways from various activities, recognize outstanding participants, and reflect on the importance of cybersecurity in today’s digital landscape.",
      imageSrc: "/events/valedictory.png"
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
      <PreLoader />
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/:eventId" element={<DynamicEvent />} />
          <Route path="/events" element={<Navigate to="/events/1" />} /> {/* Redirect to the first event */}
          <Route path="/team" element={<Team />} />
          <Route path="/timeline" element={<Timeline/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

