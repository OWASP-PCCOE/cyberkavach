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

  const eventData = [
    {
      content: ["We are thrilled to kick off the CyberKavach event, a month-long journey into the world of cybersecurity! This event is designed to empower participants with the knowledge and skills needed to safeguard their digital presence. Whether you're a seasoned tech enthusiast or just starting out, CyberKavach offers engaging activities, workshops, and challenges that will test and enhance your cyber defense strategies."],
      imageSrc: "/events/start.png",
      gFormLink : " "
    },
    {
      content: ["Cybersafe Checkpoint is an essential cybersecurity initiative aimed at safeguarding your digital devices. Hosted on the PCCOE campus, this event allows participants to bring their laptops, smartphones, and other devices for a comprehensive vulnerability assessment. Our team will use advanced tools and techniques to identify potential security flaws, ensuring your devices are secure from cyber threats."],
      imageSrc: "/events/checkpoint.png",
      gFormLink : "https://docs.google.com/forms/d/e/1FAIpQLSfYYIORfRtNTIXiz8x5pc0W5I_ha_9putuDECdRVy0VV3pq4w/viewform?usp=sf_link"
    },
    {
      content: ["Participate in an offline Mock GRE Test with sections on Quantitative Reasoning, Verbal Reasoning, and Analytical Writing , This is an individual event, and all necessary materials will be provided at the venue. Cheating is strictly prohibited, and violators will be disqualified. Use of external resources is not allowed.The event coordinator's decision will be final. register now."],
      imageSrc: "/events/mockgre.png",
      gFormLink : "https://docs.google.com/forms/d/e/1FAIpQLSf4F0BkEK-3PYG5ViCQtg6sSxJZQQLevANWQVPdZBjJK-PhXA/viewform?usp=sf_link"
    },
    {
      content: ["Adrishyam is an engaging mythological-themed escape room event where participants will solve puzzles and answer questions based on mythology. The goal is to navigate through the room by solving these challenges and escape within the given time, using their knowledge of mythological stories and figures to progress through each stage."],
      imageSrc: "/events/adrishyam.png",
      gFormLink : "https://docs.google.com/forms/d/e/1FAIpQLScfE9BWNgX6dDgG5Q2mBvp4Gw9QQ0DRu8DotQGWFI3aDUMRIw/viewform?usp=sf_link"
    },
    {
      content: ["Round 1: The Linux Maze - Navigate through Linux directories using terminal commands,Follow the clues from one directory to the next. Maximum of 3 heroes (participants) per team. ","Round 2: Unlock the Secrets-Use clues to unlock PCs and find your way to the next round.Each team gets one PC and internet access. "," Round 3: Solve the Puzzle -Solve tricky questions using a special image provided to you.The event coordinator’s decision is final."],
      imageSrc: "/events/mrigaya.png",
      gFormLink : "https://docs.google.com/forms/d/e/1FAIpQLSdaxS-k31hwUziEByRtv46tdmJtIG9lyEivBM2cTGavYMZ05g/viewform?usp=sf_link"
    },
    {
      content: ["RULES","1. No Unauthorized Attacks : Focus only on the challenges. Attacking other participants or the competition infrastructure will result in immediate disqualification.","2. Collaboration : Collaboration is allowed only within registered teams. Sharing answers or hints with other teams or participants is strictly prohibited.","3. Tools Allowed : You can use any open-source or self-made tools, but no pre-configured automated solutions. Your skills should shine, not your tools.","4. Flag Submission : Submit the flags for each challenge in the provided format. Any tampering with the submission system will lead to disqualification."],
      imageSrc: "/events/questcon.png",
      gFormLink : "https://docs.google.com/forms/d/e/1FAIpQLSe2vMmu-Dv-fwTi3trGyrepte9Nv-w_skY0oyEerckbWqj2Xw/viewform?usp=sf_link"
    },
    {
      content: ["Get ready to be inspired! In this exciting session, a web development expert will share insights on how to create stunning websites using HTML, CSS, and JavaScript!.","Learn the Basics: Discover how to structure your web page","Add Style: Understand how to make your sites visually appealing.","Make It Interactive: Find out how to use JavaScript to enhance user experience","Responsive Design: Learn the importance of creating websites that look great on any device!"],
      imageSrc: "/events/devdefence.png",
      gFormLink : "https://docs.google.com/forms/d/e/1FAIpQLScLq-JZ0UGmfjT1WIGGXgYNXZaqha-2wimJe-nYUjt9xrzsng/viewform?usp=sf_link"
    },
    {
      content: [" Off-Campus Cybersecurity Awareness Session, designed to equip you with the essential knowledge and skills to navigate the digital landscape safely. This interactive session will cover a range of topics, including the latest cybersecurity threats, best practices for protecting personal information."],
      imageSrc: "/events/offcampus.png",
      gFormLink : " "
    },
    {
      content: ["Join us for the grand finale of the CyberKavach event as we celebrate the achievements, insights, and camaraderie built throughout this exciting month! The valedictory session will highlight the incredible journey participants undertook to enhance their cybersecurity skills and awareness.During this session, we will share key takeaways from various activities, recognize outstanding participants, and reflect on the importance of cybersecurity in today’s digital landscape."],
      imageSrc: "/events/valedictory.png",
      gFormLink : " "
    },
  ];


  // Ensure eventId is a valid number and within range
  const currentEvent = eventData[parseInt(eventId) - 1] || null;

  if (!currentEvent) {
    return <Navigate to="/events/1" />; // Redirect to the first event if the ID is invalid
  }

  return <Event  gFormLink={currentEvent.gFormLink} content={currentEvent.content} imageSrc={currentEvent.imageSrc} eventId={parseInt(eventId)} totalEvents={eventData.length} />;

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

