

function selectHouse(house){
    document.getElementById('hausName').value = house;
    fetchData();
}

function closeCharacter(){
    document.getElementById('charactersContainer').style.display = 'none';
}

async function fetchData() {
            // Show loading state
            document.getElementById('charactersContent').innerHTML = '<div class="loading">Loading characters...</div>';
            document.getElementById('charactersContainer').style.display = 'block';
            
            try {
                // Get the house name from input - using value instead of nodeValue
                const houseName = document.getElementById("hausName").value.toLowerCase().trim();
                
                // Validate input
                if (!houseName) {
                    throw new Error("Please enter a house name");
                }
                
                const validHouses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
                if (!validHouses.includes(houseName)) {
                    throw new Error("Please enter a valid house name: gryffindor, slytherin, hufflepuff, or ravenclaw");
                }
                
                const res = await fetch(`https://hp-api.onrender.com/api/characters/house/${houseName}`);
                
                if (!res.ok) {
                    throw new Error("Could not fetch resource");
                }
                
                const data = await res.json();
                
                // Display the characters
                displayCharacters(data);
            }
            catch(error) {
                document.getElementById('charactersContent').innerHTML = `<div class="error">Error: ${error.message}</div>`;
                console.log(error);
            }
}
        
        // Function to display characters
        function displayCharacters(characters) {
            const charactersContent = document.getElementById('charactersContent');
            
            if (characters.length === 0) {
                charactersContent.innerHTML = '<div class="error">No characters found for this house</div>';
                return;
            }
            
            let html = `<h2 style="color: #f0c75e; text-align: center; margin-bottom: 20px;">${characters[0].house} Characters</h2>`;
            html += '<div class="character-grid">';
            
            characters.forEach(character => {
                html += `
                    <div class="character-card">
                        <img src="${character.image || 'https://via.placeholder.com/150/2d2d4d/cccccc?text=No+Image'}" 
                             alt="${character.name}" class="character-image">
                        <div class="character-name">${character.name}</div>
                    </div>
                `;
            });
            
            html += '</div>';
            charactersContent.innerHTML = html;
        }