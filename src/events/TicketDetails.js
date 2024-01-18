// // TicketDetails.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// const TicketDetails = ({ match }) => {
//     const [tickets, setTickets] = useState([]);
//     const eventId = match.params.eventId;
//
//     useEffect(() => {
//         const fetchTickets = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/v1/getTicketsByEvent?eventId=${eventId}`);
//                 setTickets(response.data);
//                 console.log(response.data);
//                 console.log("DDDDD");
//             } catch (error) {
//                 console.error('Error fetching tickets:', error);
//             }
//         };
//
//         fetchTickets();
//     }, [eventId]);
//
//     return (
//         <div>
//             <h1>Ticket Details</h1>
//             {/* Afisează aici informațiile despre bilete folosind valorile din tickets */}
//         </div>
//     );
// };
//
// export default TicketDetails;
