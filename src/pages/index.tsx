import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Calendar from './calendar';
import Event from './event';
import FinalMessage from './final-message';


export function Routing() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/event" element={<Event />} />
            <Route path="/final-message" element={<FinalMessage />} />
            <Route path="*" element={<Navigate to="/" />} />
         </Routes>
      </>
   );
}
