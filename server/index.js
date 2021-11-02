const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); 
const ctrl = require('./controller')

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"../index.html"))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, 'server/index.js'))
  })

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
  })

app.delete(`/api/gift/:id`, ctrl.deletegift)
app.get('/api/gift', ctrl.getgift)
app.post('/api/gift', ctrl.creategift)
app.put('/api/gift/:id', ctrl.updategift)


app.get("/api/girl", (req, res) => {
  const girls = ["LED Lights Kit",
					 "Tie Dye Throw Blanket",
					 "Illuminated Doodle Pillowcase.",
                     "Butterfly Claw Clips",
                     "DIY Journaling Set",
                     "Bath Bombs Gift Set",
                     "PopGrip",
                     "The Big, Fun Kids Baking Book",
                     "3-in-1 Karaoke Microphone",
                     "Desk Organizer",
                     "Bowknot Mini Backpack",
                     "Cactus Neon Sign",
                     `"Sour" Stickers`,
                     "Balm Dotcom",
                     "Unicorn Fruit Body Butter",
                     "Solo Drawing Game",
                     "Velvet Hair Scrunchies",
                     "Gothic Number Necklace",
                     "girl Pencil Set",
                     "DIY Alphabet Bead Bracelet Making Kit",
                     "Unicorn Hooded Bathrobe",
                     "JoJo Siwa Cosmetic Organizer",
                     "instax Mini 9 Instant Camera Bundle",
                     "How to Code: A Step-By-Step Guide to Computer Coding",
                     "How to Code: A Step-By-Step Guide to Computer Coding",
                     "Self-Care Journal",
                     "GO Glam Make Up Stamper",
                     "Toasty Heatable Plushie",
                     "Custom Journal",
  ];


  let randomIndex = Math.floor(Math.random() * girls.length);
  let randomgirl = girls[randomIndex];

  res.status(200).send(randomgirl);
  
  
});

app.get("/api/gifts", (req, res) => {
  const gifts = ["Be nice to others",
					 "I'm checking my list right now",
					 "Remember I see how you treat your friends",
           "You are a great person",
           "Are you cleaning your room?",
           "Are you behaving yourself?",
           "Help your mother with laundry.",
           "You are a special person.",
           "I know your heart.",
           "Do not be so hard on yourself",
           "Treat your pet with kindness.",
           "Help bring in the groceries",
           "Be sure to finish your homework",
           "Hug your parent before you go to bed",
           "I reward the best behaved children with special gifts",
           "Thank you for the cookies last year",
           "Do your best today and everyday!",
           "Did you make your bed today?",
           "You control how well you are behaved. ",
           "You make your own decisions.",
           "Your future is in your hands",
           "You deserve to be happy",
           "Do something nice for a friend today"
  ];


  let randomIndex = Math.floor(Math.random() * gifts.length);
  let randomgifts = gifts[randomIndex];

  res.status(200).send(randomgifts);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Zero Gravity Laser Race Car",
					 "Crazy Forts",
					 "Draw Your Own Comics",
           "My Robotic Pet Tumbling Hedgehog",
           "Untamed Raptor by Fingerlings",
           "Pokémon Battle Academy",
           "Super Mario Adventures Starter Course",
           "Shape Shifting Box",
           "Good Housekeeping Amazing Science",
           "Monster Truck Downhill Race & Go Track Set",
           "MERGE Cube",
           "Galaxy Explorer Playset Mystery Adventure",
           "Sleuth & Solve: 20+ Mind-Twisting Mysteries",
           "Mini Helicopter Drone",
           "VIDIYO",
           "Super Shoot & Dunk Playset",
           "Gravity Maze",
           "Dungeons & Dragons Adventure Begins",
           "Choose Your Own Adventure Boxed Set",
           "Make and Colour: Paper Planes",
           "Power Treads",
           "Harry Potter Coding Kit",
           "48-Piece Splash Park Puzzle",
           "Terra Kids Connectors",
           "Cruiser Deluxe Stereo Turntable",
           "Ronan Boyle and the Bridge of Riddles",
           "Penquin Money Saving Coin STEM Bank",
           "Stunt Shot Indoor Remote Control Vehicle",
           "Marvel Villainous: Infinite Power Strategy Board Game",
           "Bill Nye's VR Science Kit",
           "Fire HD 10 Kids Tablet",
           "How to Code: A Step-By-Step Guide to Computer Coding",
           "How to Code: A Step-By-Step Guide to Computer Coding",
           "Animambo Tambourine",
           "LED Strip Lights",
           "Bluetooth Beanie",
           "Color Chemistry Set",
           "Treasure X Aliens",
           "Baby Shark's Big Show! Song Cube",
           "Talking Thomas & Percy Train Set",
           "Table Tennis to Go",
           "Botley the Coding Robot",
           "Soccer Goal",
           "Stomp Rocket Ultra Rocket LED. ",

  ];


  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
  
});




app.listen(4000, () => console.log("Server running on 4000"));