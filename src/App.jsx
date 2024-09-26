import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import Event from './components/Event';


function App() {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Event content="Content Handling: The content is extracted from location.state, and a default fallback value is provided if no state is passed.
                Now, when you navigate using the movenext function, the content will be passed to the new Event component and correctly rendered."/>} />
          <Route path="/events2" element={<Event content="The iPhone is a smartphone produced by Apple that uses Apple's own iOS mobile operating system. The first-generation iPhone was announced by then–Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.
                The iPhone was the first mobile phone to use multi-touch technology.[3] Since the iPhone's launch, it has gained larger screen sizes, video-recording, waterproofing, and many accessibility features. Up to the iPhone 8 and 8 Plus, iPhones had a single button on the front panel, with the iPhone 5s and later integrating a Touch ID fingerprint sensor.[4] Since the iPhone X, iPhone models have switched to a nearly bezel-less front screen design"/>} />
          <Route path="/events3" element={<Event content="Then-Apple CEO Steve Jobs steered the original focus away from a tablet (which was later revisited in the form of the iPad) towards a phone.[10] Apple created the device during a secretive collaboration with Cingular Wireless (later renamed AT&T Mobility) at an estimated development cost of US$150 million over thirty months.[11] According to Jobs in 1998, the  word in  (and thereafter  and " />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

