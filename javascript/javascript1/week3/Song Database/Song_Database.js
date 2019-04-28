const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

// ADDING SONG TO DATABASE
function addsongToDatabase (song){
    songDatabase.push(song);
}

addsongToDatabase ({
    songId:5, 
    title: "It Takes a Lot to Know", 
    artist: "Damian Rice"
    }),
    
addsongToDatabase ({
        songID:6, 
        title: "Songs of Redemption",
        artist: "Bob Marley"
    }),
    
addsongToDatabase ({
        songId:7, 
        title:"Teardrop", 
        artist: "Morcheeba"
    }); 


console.log(songDatabase);

// SEARCHING FOR A SONG BY TITLE

function getSongByTitle (title){
    for (var i=0; i<songDatabase.length; i++) {
        if (songDatabase[i].title === title){
            return songDatabase[i];
        }
    }
    return "Song not Found";
}

const searchedSong = getSongByTitle('Songs of Redemption');
console.log(searchedSong); // returns { songId: 6, title: 'Songs of Redemption', artist: 'Bob Marley'}


// CREATING PLAYLIST FROM SONGS IN DATABASE

function addSongToMyPlaylist(title){
    let myFavoriteSongs = getSongByTitle(title);
    if (getSongByTitle === title){
      myPlaylist.push(myFavoriteSongs);
      console.log(myPlaylist);  
    }
    else {
        console.log("Searched song is not in the database")
    }
}
addSongToMyPlaylist ()
console.log(myPlaylist); 

