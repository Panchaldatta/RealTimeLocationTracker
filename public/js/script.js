const socket = io();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords;
    socket.emit('send-location', { latitude, longitude });
  }, (error) => {
    console.error('Error getting location:', error);
  },

  {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000
  });
} else {
  console.error('Geolocation is not supported by this browser.');
}

const map=L.map('map').setView([0, 0], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:"openstreetmap.org",
}).addTo(map); 
  