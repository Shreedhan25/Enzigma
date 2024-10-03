import React, { useState } from "react";
import './Footer.css'; // Import the CSS file

function Footer({ totalPages }) {
    const [currentPage, setCurrentPage] = useState(1); // Initialize to 1

    return (
        <div className="pagination" style={{marginTop:'2em', marginLeft:'66em'}}>
            <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>First</button>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
            <button disabled><span>{currentPage}</span></button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>Last</button>
        </div>
    );
}

export default Footer;
