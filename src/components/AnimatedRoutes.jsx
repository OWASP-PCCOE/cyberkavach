import React from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Navigate, useLocation } from 'react-router-dom';
import HomePage from './components/Homepage';
import Event from './components/Event';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    function DynamicEvent() {
        const { eventId } = useParams();
      
        // Event data containing content and image URLs
        const eventData = [
          {
            content: "In computer science and operations research, approximation algorithms are efficient algorithms that find approximate solutions to optimization problems (in particular NP-hard problems) with provable guarantees on the distance of the returned solution to the optimal one.",
            imageSrc: "/ethical_hacking.png"
          },
          {
            content: "In computer science and operations research, approximation algorithms are efficient algorithms that find approximate solutions to optimization problems (in particular NP-hard problems) with provable guarantees on the distance of the returned solution to the optimal one.",
            imageSrc: "/byteme.png"
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
            imageSrc: "./event5.png"
          },
          {
            content: "Event 6: The final event, thank you!",
            imageSrc: "./event6.png"
          }
        ];
      
        // Ensure eventId is a valid number and within range
        const currentEvent = eventData[parseInt(eventId) - 1] || null;
      
        if (!currentEvent) {
          return <Navigate to="/events/1" />; // Redirect to the first event if the ID is invalid
        }
      
        return <Event content={currentEvent.content} imageSrc={currentEvent.imageSrc} eventId={parseInt(eventId)} totalEvents={eventData.length} />;
        
      }
  return (
     <AnimatePresence mode="wait">
     <Routes location={location} key={location.pathname}>
         <Route path="/" element={<HomePage />} />
          <Route path="/events/:eventId" element={<DynamicEvent />} />
          <Route path="/events" element={<Navigate to="/events/1" />} />
     </Routes>
     </AnimatePresence>
  )
}

export default AnimatedRoutes
