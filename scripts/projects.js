const projectData = [
    {
        name: "Phoenix One",
        id: "phoenix-one",
        shortDescription: "Can you ensure the success of the Phoenix One mission?",
        startDate: new Date(2023, 2, 8),
        endDate: null,

        bg: "phoenix-one.webp",
        primaryColour: "#F77F27",
        secondaryColour: "#131313",
        backgroundColour: "#232323",
        textColour: "#FFFFFF",

        sortPriority: 10,
        info: {
            description: "Phoenix One is a side-scrolling 2D run-and-gun game with both puzzle and action elements. You must race against your dimishing oxygen supply to eliminate all of the aliens using a unique ricochet mechanic, allowing you to progress level by level, room by room, and uncover what really happened... <br><br>Phoenix One is being developed in the Unity Game Engine by the L Stands for Winner team, who after one year of development as part of a University project have produced a demo that is available on Itch.io.<br><br>In October of 2023, the LSW team was invited to present the Phoenix One demo at SXSW Sydney as part of the Student Showcase, where the game was met with positive reception. We were able to use this opportunity as a live playtest of our demo, and together with other playtests at various events such as the monthly IGDA meetup \"Beer and Pixels\", we gathered a lot of useful feedback before our final project submission.",
            contributions: "In this project, I am primarily responsible for creating the sprite art used for Astrid, the aliens, and all of the interactables. I also am the music composer for this project, having composed 6 unique tracks for all of the chapters. In terms of programming, I contributed by implementing the bullet rebound physics, implementing the aiming line for both Astrid and for the aliens, programming the ricochet alien, and the Mementos/Terminal system. I also created the animations for the aliens as well as Astrid, the various particle effects, and the initial version of the AudioManager. <br><br>Currently, I am working on optimising the ricochet alien algorithm and adding real-time 2D lighting to the project for some additional ambience and \"vibes\".",
            images: [
                {
                    caption: "The Phoenix One Main Menu",
                    url: "phoenix-one/menu.png"
                },
                {
                    caption: "A screenshot from Level 1-1",
                    url: "phoenix-one/level1gameplay.png"
                },
                {
                    caption: "Astrid shooting at an Alien",
                    url: "phoenix-one/level2gameplay.png"
                },
                {
                    caption: "The Mementos Menu.",
                    url: "phoenix-one/memento.png"
                },
            ],
            links: [
                {
                    text: "Play the demo!",
                    url: "https://lstandsforwinner.itch.io/phoenix-one-demo",
                    hover: "Play the Phoenix One demo on itch.io"
                }
            ]
        }
    },
    {
        name: "Micro Macros",
        id: "micro-macro",
        shortDescription: "You have control, through someone else's controls!",
        startDate: new Date(2023, 3, 17),
        endDate: new Date(2023, 3, 18),

        bg: "micro-macros.png",
        primaryColour: "#FFFFFF",
        secondaryColour: "#14397D",
        backgroundColour: "#D7EAF3",
        textColour: "#222222",

        sortPriority: 0,
        info: {
            description: "You were writing a report, when your Microsoft office subscription ran out! You can still retrieve your files, however! The usual WASD controls have betrayed you! Somebody programmed this bot to move with... macros! Think creatively as you employ these macros to navigate the mazes and retrieve your files! <br><br> This game was created for a 48-hour Game Jam with the theme \"Micro/Macro\", and a constraint of a \"3 colour palette\". ",
            contributions: "",
            images: [
                {
                    caption: "The main menu screen",
                    url: "micro-macros/menu.png"
                },
                {
                    caption: "The player mid-macro",
                    url: "micro-macros/gameplay.png"
                },
            ],
            links: [
                {
                    text: "Available on Itch.io",
                    url: "https://super-mctea.itch.io/micro-macros-day-two",
                    hover: "Play Micro Macros on itch.io"
                }
            ]
        }
    },
    {
        name: "Tree Game",
        id: "tree-game",
        shortDescription: "It'll grow on you!",
        startDate: new Date(2023, 5, 21),
        endDate: new Date(2023, 5, 23),

        bg: "tree-game.png",
        primaryColour: "#FFFFFF",
        secondaryColour: "#984e2c",
        backgroundColour: "#fbf3ee",
        textColour: "#743813",

        sortPriority: 2,
        info: {
            description: "Tree Game is simple idle clicking game where you revive barren fields with a host of colourful apple trees and by growing as many apples as you can. <br><br>This game was developed by L Stands for Winner in the Unity Game Engine for a 48-hour Game Jam with the theme \"Revive\", and a constraint to include something from the Public Domain. We won the People's Choice award for Tree Game. ",
            contributions: "In this project, I was one of the lead software developers. I was in charge of making the trees, making the plots, making trees plantable in plots, making them grow apples, and the functionality for collecting the apples into the InvenTree.",
            images: [
                {
                    caption: "Plots of land filled with various trees",
                    url: "tree-game/gameplay.png"
                },
                {
                    caption: "Grafting two apples together",
                    url: "tree-game/grafting.png"
                },
                {
                    caption: "Limit testing in development",
                    url: "tree-game/intended_gameplay.gif"
                }
            ],
            links: [
                {
                    text: "Play now on Itch.io",
                    url: "https://super-mctea.itch.io/tree-game",
                    hover: "Play Tree Game on itch.io"
                }
            ]
        }
    },
    {
        name: "Protect The Presidevs!",
        id: "protect-the-presidevs",
        shortDescription: "Protecc, attacc, but most importantly attracc",
        startDate: new Date(2023, 8, 20),
        endDate: new Date(2023, 8, 22),

        bg: "protect-the-presidevs.webp",
        primaryColour: "#FFFFFF",
        secondaryColour: "#2f9585",
        backgroundColour: "#92d8cd",
        textColour: "#222222",

        sortPriority: 1,
        info: {
            description: "Play as the Godot engine, using your magnetic powers to alter the course of unreasonable fees headed towards your Presidevs. For every Presidev that gets charged by the Unity monkey, you will be one step closer to going bankrupt. The more Presidevs you can keep afloat with your magnets, the more points you stand to gain! Though if more than half your Presidevs get wiped out by the crazy fees you lose.<br><br>This game was developed in the Godot Game Engine by the L Stands for Winner team for a 48-hour Game Jam with the theme \"Magnet\", and the constraint that the camera must remain stationary. ",
            contributions: "In this project, I was one of the lead software developers, specifically in charge of programming the player movement, the magnetic field, the projectile collisions, and the projectile movement. As well as general bug fixes.",
            images: [
                {
                    caption: "The main menu screen",
                    url: "protect-the-presidevs/menu.png"
                },
                {
                    caption: "The Unity monkey throwing fees at the Godot Engine",
                    url: "protect-the-presidevs/gameplay.png"
                },
            ],
            links: [
                {
                    text: "Play now on Itch.io",
                    url: "https://super-mctea.itch.io/protect-the-presidevs",
                    hover: "Play Protect The Presidevs! on itch.io"
                }
            ]
        }
    },
    {
        name: "we only make SOUP",
        id: "we-only-make-soup",
        shortDescription: "Who let him cook ???",
        startDate: new Date(2024, 0, 13),
        endDate: new Date(2024, 0, 15),

        bg: "we-only-make-soup.webp",
        primaryColour: "#FFFFFF",
        secondaryColour: "#da5e5e",
        backgroundColour: "#dbdbdb",
        textColour: "#222222",

        sortPriority: 3,
        info: {
            description: "In this fast-paced arcade game, you must fulfil soup orders while fending off unwanted ingredients with the help of Jeff the Chef! Guide Jeff in defending the soup pot and gather ingredients for your recipes. Fulfil as many orders as you can before you're overwhelmed...<br><br>This game was developed by L Stands for Winner in the Unity Game Engine for the Pixel Jam, a Game Jam hosted by the <a href=\"https://pixelpasture.studio/\" target=\"_blank\">Pixel Pasture Studio</a> with the theme \"Food\" and constraint \"Patterns\". ",
            contributions: "In this project I was primarily the music composer, but I was also responsible for handling the particle effects and implementing the audio system.",
            images: [
                {
                    caption: "The main menu screen for we only make SOUP",
                    url: "we-only-make-soup/menu.png"
                },
                {
                    caption: "The chef defending the soup from incorrect ingredients.",
                    url: "we-only-make-soup/gameplay.png"
                }
            ],
            links: [
                {
                    text: "Play now on Itch.io",
                    url: "https://lstandsforwinner.itch.io/we-only-make-soup",
                    hover: "Play we only make SOUP on itch.io"
                },
                {
                    text: "Pixel Jam 2024",
                    url: "https://pixelpasture.studio/pixeljam2024",
                    hover: "Pixel Pasture"
                }
            ]
        }
    },
    {
        name: "Oscilloskate",
        id: "oscilloskate",
        shortDescription: "Skate through an oscilloscope and don't lose your groove",
        startDate: new Date(2024, 3, 17),
        endDate: new Date(2024, 3, 19),

        bg: "oscilloskate.webp",
        primaryColour: "#aeffd9",
        secondaryColour: "#2c8d95",
        backgroundColour: "#323232",
        textColour: "#aeffd9",

        sortPriority: 4,
        info: {
            description: "Oscilloskate is an infinite runner arcade game where an oscilloscope swaps between two modes, analogue and digital, and the player has to use the appropriate mouse controls to stay on the wave. <br><br>This game was developed by L Stands for Winner in the Unity Game Engine for a 48-hour Game Jam with the theme \"Analogue\", and constraint \"include a mouse control\". ",
            contributions: "In this project, I programmed the wave generator and display, using a perlin noise generator producing values with offsets to be passed to a line renderer. I also composed the music for this game, two versions of the same theme with one to represent analogue and one for digital.",
            images: [
                {
                    caption: "The main menu screen",
                    url: "oscilloskate/menu.png"
                },
                {
                    caption: "The oscilloscope in analogue mode",
                    url: "oscilloskate/analog.png"
                },
                {
                    caption: "The oscilloscope in digital mode",
                    url: "oscilloskate/digital.png"
                }
            ],
            links: [
                {
                    text: "Available on Itch.io",
                    url: "https://lstandsforwinner.itch.io/oscilloskate",
                    hover: "Play we only make SOUP on itch.io"
                }
            ]
        }
    },
    {
        name: "Personal Space",
        id: "personal-space",
        shortDescription: "Sometimes you just need a little room to yourself",
        startDate: new Date(2024, 6, 3),
        endDate: new Date(2024, 6, 8),

        bg: "personal-space.webp",
        primaryColour: "#EC9B1A",
        secondaryColour: "#000000",
        backgroundColour: "#0a0613",
        textColour: "#FFFFFF",

        sortPriority: 5,
        info: {
            description: "Fly around in the depths of space while avoiding the spaceships trying to \"re-enter\" your atmosphere! Those pesky ships have gone too far and you've finally had enough! Well, it seems the only option is to blow up the sun... Play the game by navigating your planet through the solar system and try to survive for as long as you can.<br><br>Personal Space is a game developed by L Stands for Winner in the Unity Game Engine for a 48-hour (later extended to 5-day) Game Jam with the theme \"Re-entry\", and constraint to \"include at least one astronomical phenomenon\". As a team, we won the People's Choice Award, and would then go on to present this game at Macquarie University as part of their annual Astronomy Open Night.",
            contributions: "In this project I was responsible for the planet gravity; utilising Unity's physics engine to exert a semi-realistic force to heighten the difficulty of the game. I also programmed the spaceships' movement, and their reaction to the planet gravity (and susequently the Sun's gravity). I added some shaders to give the planets an atmosphere, and finally I also composed the music for this game.",
            images: [
                {
                    caption: "The main menu screen of the game",
                    url: "personal-space/menu.png"
                },
                {
                    caption: "The player being chased by spaceships",
                    url: "personal-space/gameplay.png"
                }
            ],
            links: [
                {
                    text: "Available on Itch.io",
                    url: "https://lstandsforwinner.itch.io/personal-space",
                    hover: "Play Personal Space on itch.io"
                }
            ]
        }
    },
    {
        name: "Basement Game",
        id: "basement-game",
        shortDescription: "When the Basement is Game",
        startDate: new Date(2024, 6, 17),
        endDate: new Date(2024, 6, 31),

        bg: "basement-game.webp",
        primaryColour: "#893131",
        secondaryColour: "#202020",
        backgroundColour: "#444444",
        textColour: "#ffffff",

        sortPriority: 6,
        info: {
            description: "Basement Game is a 2.5D automation game in which you must secretly compete with your magically-inclined peers to pass an alchemy class using nothing but science and old-fashioned particle accelerators. Juggle paying power bills and completing assignments as you discover the cryptic process to manufacture gold from common metals within the dark and shadow-y confines of your basement.<br><br>This game was developed by L Stands for Winner in the Unity Game Engine for the 15th Pirate Software Game Jam, a 14-day Game Jam with the themes \"Alchemy\" and \"Shadows\". This was an ambitious project with the time we had available to us due to unforseen events taking our schedules, but we still managed to create something we could submit and learned many lessons about organisation and proper project structure.",
            contributions: "In this project, I was the Creative Director and the Lead Developer. As such, I was in charge of outlining the project architecture and laying the groundwork for the game systems. While ambitious, I implemented classes to allow machines to communicate with each other and process materials from their inputs. Additionally, I wrote the code to allow for machines to be placed down in the game world and picked back up again, and implemented a saving/loading system which reconstructs the game scene from a JSON representation that is stored in the browser cache. A large part of the internal systems run off of JSON files, which allows us to expand these systems and modify them with ease. I also composed the music for this game. ",
            images: [
                {
                    caption: "The main menu screen",
                    url: "basement-game/menu.png"
                },
                {
                    caption: "A room full of machines, designed to produce Gold",
                    url: "basement-game/full-gameplay.png"
                },
                {
                    caption: "The Element Table we designed for this game",
                    url: "basement-game/table.png"
                },
            ],
            links: [
                {
                    text: "Available on Itch.io",
                    url: "https://lstandsforwinner.itch.io/basement-game",
                    hover: "Play Basement Game on itch.io"
                },
                {
                    text: "Pirate Software Jam",
                    url: "https://itch.io/jam/pirate15",
                    hover: "Pirate Jam 15 on itch.io"
                }
            ]
        }
    },
    {
        name: "The Very Hungry Anterpillar",
        id: "ant-game",
        shortDescription: "Let's get this bread!",
        startDate: new Date(2024, 7, 17),
        endDate: new Date(2024, 7, 21),

        bg: "ant-game.webp",
        primaryColour: "#FFFFFF",
        secondaryColour: "#E9D8B5",
        backgroundColour: "#e8dec9",
        textColour: "#222222",

        sortPriority: 7,
        info: {
            description: "The Very Hungry Anterpillar tells the story of a small ant in a big room. Weave through an excessive amount of board game components as you attempt to avoid the barrage of boots. Collect as many chunks of bread as possible to stave off starvation and achieve eternal glory as the mite that has munched the most. <br><br>This game was developed in the Unity Game Engine by L Stands for Winner for the GMTK Game Jam, a 4-day Game Jam with the theme \"Built to Scale\". Outside of the game jam, a multiplayer version of this game is being developed by yours truly, Super McTea. ",
            contributions: "In this project I was primarily the music composer, and the programmer of the boot timings and collision with the ant, as well as general bug fixing and code quality control. As of now, I am in charge of the multiplayer netcode implementation using Unity's Netcode for GameObjects package, as well as Unity Services packages Relay and Lobby. I have implemented sharing of information such as the location of props in the game world, and the location and state of breadcrumbs (which enables other ants to steal food from right under your antennae).",
            images: [
                {
                    caption: "The main menu screen",
                    url: "ant-game/menu.png"
                },
                {
                    caption: "The main menu screen for we only make SOUP",
                    url: "ant-game/gameplay1.png"
                },
                {
                    caption: "The chef defending the soup from incorrect ingredients.",
                    url: "ant-game/gameplay2.png"
                },
                {
                    caption: "The chef defending the soup from incorrect ingredients.",
                    url: "ant-game/deathscreen.png"
                }
            ],
            links: [
                {
                    text: "Available on Itch.io",
                    url: "https://lstandsforwinner.itch.io/the-very-hungry-anterpillar",
                    hover: "Play The Very Hungry Anterpillar on itch.io"
                },
                {
                    text: "GMTK Game Jam",
                    url: "https://itch.io/jam/gmtk-2024",
                    hover: "Game Maker's Toolkit Game Jam 2024"
                }
            ]
        }
    },
]