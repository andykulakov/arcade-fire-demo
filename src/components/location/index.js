import React from 'react';

const Location = () => {
  return(
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.4304164861815!2d-122.25662548467957!3d37.8736157797416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857e99189ce94d%3A0x9245816b77219a8c!2sThe+Greek+Theatre!5e0!3m2!1sru!2sru!4v1533633432973" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        allowFullScreen
      >
      </iframe>
      
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
}

export default Location;