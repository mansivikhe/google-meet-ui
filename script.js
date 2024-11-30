
const participants = [
    { name: 'Narendra Modi' , image: 'img/modi.webp'},
    { name: 'Devendra Fadnavis' , image:'img/devi.jpg' },
    { name: 'Sujay Vikhe Patil' , image:'img/sujay.jpg'},
    { name: 'Eknath Shinde' ,image:'img/shinde.jpg' },
    { name: 'Radhakrishn Vikhe Patil' ,image:'img/radhak.jpg'},
    
   
  ];
  
  
    
    const participantsContainer = document.getElementById('participants-container');
    
    function displayParticipants(participantList) {
      participantsContainer.innerHTML = '';
      participantList.forEach((participant) => {
        participantsContainer.innerHTML += `
          <div class='participant-card'>
            <img src="${participant.image}" alt="${participant.name}">
            <span>${participant.name}</span>
          </div>
        `;
      });
    }
    
    displayParticipants(participants);
    
    function filterParticipants() {
      const searchQuery = document.getElementById('search').value.toLowerCase();
      const filteredParticipants = participants.filter(participant => 
        participant.name.toLowerCase().includes(searchQuery)
      );
      displayParticipants(filteredParticipants);
    }
    
