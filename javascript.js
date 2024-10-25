// Full speaker data (you can add more if necessary)
const speakers = [
    {
        "name": "Ramiz Raja",
        "title2": "Former Pakistan Player",
        "description": "Ramiz Hasan Raja is a Pakistani cricket commentator. He was a part of the Pakistani squad which won the 1992 Cricket World Cup. As a player, Raja represented Pakistan during the 1980s and the 1990s.",
        "image": "raja.jpg"
    },
    {
        "name": "Wasim Akram",
        "title2": "King of Swing",
        "description": "Wasim Akram was a legend cricketer of Pakistan . He is well known as King of swing",
        "image": "akram.jpg"
    },
    {
        "name": "Shahid Afridi",
        "title2": "Boom Boom",
        "description": "He was a former pakistan captain and player. He was famous for his fearless and aggressive batting.",
        "image": "afridi.jpg"
    },
    {
        "name": "Don Bradman",
        "title2": "Don of cricket",
        "description": "He was an australian cricketer . He was famous for his unbreakable record of highest average in test.",
        "image": "don.jpg"
    },
    {
        "name": "Jhonty Rohdes",
        "title2": "Greatest fielder of all time",
        "description": "He was south african player and known as one of the best fielder in cricket history",
        "image": "jhonty.webp"
    },
    {
        "name": "Rohit Sharma",
        "title2": "Hitman",
        "description": "He is an indian cricketer and winning captain of world cup 2024.",
        "image": "hitman.jpg"
    }
];

let speakersShown = 0; // Keep track of how many speakers are currently displayed
const speakersPerLoad = 2; // Number of speakers to load per click

// Function to load speakers dynamically
function loadSpeakers() {
    const container = document.getElementById('speakers-container');
    
    // Determine the number of speakers to load
    const remainingSpeakers = speakers.length - speakersShown;
    const loadCount = remainingSpeakers >= speakersPerLoad ? speakersPerLoad : remainingSpeakers;

    for (let i = 0; i < loadCount; i++) {
        const speaker = speakers[speakersShown]; // Get the next speaker in the list
        const speakerElement = document.createElement('div');
        speakerElement.classList.add('speaker');

        speakerElement.innerHTML = `
            <img src="${speaker.image}" alt="${speaker.name}">
            <div class="speaker-info">
                <h3>${speaker.name}</h3>
                <p1><em>${speaker.title2}</em></p1>
                <p>${speaker.description}</p>
            </div>
        `;

        container.appendChild(speakerElement);
        speakersShown++; // Increment the count of displayed speakers
    }

    // If all speakers are loaded, hide the "More" button
    if (speakersShown >= speakers.length) {
        document.querySelector('.more-button').style.display = 'none';
    }
}

// Function to handle loading more speakers on button click
function loadMoreSpeakers() {
    loadSpeakers();
}

// Initialize by loading the first set of speakers
loadSpeakers();


