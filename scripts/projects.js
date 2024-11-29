const projectData = [
    //#region Phoenix One
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
            data: [
                "<h2>Contributions</h2>",

                "In terms of programming, I contributed by:",
                `<ul>
                    <li>Implementing the physics for the bullets to ricochet using vectors and reflections</li>
                    <li>Implementing a modular aiming line for both Astrid (the player character) and for the aliens</li>
                    <li>Designing and creating the internal systems for the ricochet alien, including the aiming calculations as well as optimisations</li>
                    <li>Programming the Mementos/Terminal system, which reads data from a JSON file and then dynamically displays it, allowing for ease of editing and potential for modding in the future</li>
                    <li>Prototyping the AudioManager, which handles the triggering of the background music and sound effects</li>
                </ul>`,
                "I also contributed to the audio-visual design by:",
                `<ul>
                    <li>Designing the concept art used for Astrid, the aliens, and all of the level objects (i.e. anything which isn't the tile map)</li>
                    <li>Creating the sprite pixel-art for all the concepts, as well as their animations</li>
                    <li>Designing the particle effects for the bullets, the player's hover, and the player's dash</li>
                    <li>Composing 6 unique tracks for this project, one for each chapter (with more in progress for the missing chapters)</li>
                </ul>`,
                `Currently, I am working on optimising the ricochet alien algorithm and adding real-time 2D lighting to the project.`
            ],
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
    //#endregion
    //#region Micro Macros
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
            data: [ ],
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
    //#endregion
    //#region Tree Game
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
            data: [
                "<h2>Contributions</h2>",
                "As one of the lead software developers, I contributed to the codebase by:",
                `<ul>
                    <li>Designing and implementing the tree planting system, specifically the way in which plots and trees interact, and how the fruit interact with the trees</li>
                    <li>Programming the modular fruit spawning system, which allowed trees to grow and manage their own apples independently of each other</li>
                    <li>Implementing the code to allow trees to be removed from their plots, in order for the tree removal system to function</li>
                    <li>Implementing the InvenTree system to allow grafting results to be stored and then later planted, keeping track of which tree types and how many were being held</li>
                </ul>`,
                "In addition, I was also deeply involved with optimisations, quality assurance, and bug fixes."
            ],
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
    //#endregion
    //#region Protect the Presidevs
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
            description: "Play as the Godot engine, using your magnetic powers to alter the course of unreasonable fees headed towards your Presidevs. For every Presidev that gets charged by the Unity monkey, you will be one step closer to going bankrupt. The more Presidevs you can keep afloat with your magnets, the more points you stand to gain! Though if more than half your Presidevs get wiped out by the crazy fees you lose.<br><br>This game was developed in the Godot Game Engine by the L Stands for Winner team around the same time as the Unity runtime fee controversy, for a 48-hour Game Jam with the theme \"Magnet\", and the constraint that the camera must remain stationary. ",
            data: [
                "<h2>Contributions</h2>",
                "As one of the lead software developers in this project, my contributions included:",
                `<ul>
                    <li>Implementing the player movement and the projectile movement using GDScript</li>
                    <li>Programming the collisions between the player, projectile, and the Presidevs</li>
                    <li>Designing and implementing the magnetic field system, specifically how the projectiles' motion is affected by the magnet</li>
                </ul>`,
                "I was also heavily involved in quality assurance, optimisations, and general bug fixes."
            ],
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
    //#endregion
    //#region We Only Make SOUP
    {
        name: "We Only Make SOUP",
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
            description: "In this fast-paced arcade game, you must fulfil soup orders while fending off unwanted ingredients with the help of Jeff the Chef! Guide Jeff in defending the soup pot and gather ingredients for your recipes. Fulfil as many orders as you can before you're overwhelmed...<br><br>This game was developed by L Stands for Winner in the Unity Game Engine for the Pixel Jam, a Game Jam hosted by the <a href=\"https://pixelpasture.studio/\" target=\"_blank\">Pixel Pasture Studio</a> with the theme \"Food\" and constraint \"Patterns\". Out of 22 participating teams, our team came 6th place.",
            data: [
                "<h2>Contributions</h2>",
                "As a software developer on this team, my contributions include:",
                `<ul>
                    <li>Designing and implementing the particle effects for the food items, including the random variation and distribution.</li>
                    <li>Creating the animations for the chickens through the use of a modular rotation script and sprite animation</li>
                    <li>Implementing the system for playing the background music, and the sound effects of the food items being destroyed</li>
                </ul>`,
                "I also composed the background music for this project."
            ],
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
    //#endregion
    //#region Oscilloskate
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
        textColour: "#e0ffff",

        sortPriority: 4,
        info: {
            description: "Oscilloskate is an infinite runner arcade game where an oscilloscope swaps between two modes, analogue and digital, and the player has to use the appropriate mouse controls to stay on the wave. <br><br>This game was developed by L Stands for Winner in the Unity Game Engine for a 48-hour Game Jam with the theme \"Analogue\", and constraint \"include a mouse control\". ",
            data: [
                "<h2>Contributions</h2>",
                "In this project, I was responsible for:",
                `<ul>
                    <li>Programming the wave generator, by using a perlin noise generator and writing a modular function to pass in offsets and switch noise types in realtime</li>
                    <li>Implementing the wave display using a line renderer with a dynamically generated string of points, such that each point would read the noise value and compute its own offset and height with respect to time</li>
                    <li>Designing and implementing the transition system, to move from the Analogue state to the Digital state seamlessly</li>
                    <ul>
                        <li>This also includes switching the game state, switching the player controls over, and smoothing out the analogue line to meet the static state without any sharp angles</li>
                    </ul>
                </ul>`,
                "I also composed the background music for this game; two tracks with the same melody and structure, with one designed to represent \"Analogue\" and the other \"Digital\"."
            ],
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
    //#endregion
    //#region Personal Space
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
            data: [
                "<h2>Contributions</h2>",
                "In this project, I was responsible for:",
                `<ul>
                    <li>Implementing the planet gravity system by utilising Unity's physics engine to exert a semi-realistic force, enough to heighten the difficulty of the game</li>
                    <ul>
                        <li>This also counted towards the constraint, since planets containing gravity are an astronomical phenomenon</li>
                    </ul>
                    <li>Programming the movement of the space shuttles to make them track towards the player, and more importantly be affected by the surrounding planets' gravity too</li>
                    <li>Creating a set of shaders for the planets to give them a hazy atmosphere, which also serves as an indication of where the planet's range of gravity begins</li>
                </ul>`,
                "I was also particularly involved in bug fixing and quality assurance, and responsible for composing the background music for this game."
            ],
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
    //#endregion
    //#region Basement Game
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
            data: [
                "<h2>Contributions</h2>",
                "For this project, I was the Creative Director as well as the Lead Developer. As such, I contributed to the design of the project by:",
                `<ul>
                    <li>Outlining the project architecture and laying the groundwork for the game systems</li>
                    <li>Creating class diagrams and organising ERD Diagrams to facilitate the creation of these systems</li>
                    <li>Maintaining spreadsheets to track task progress, as well as frequent meetings to touch base</li>
                </ul>`,
                "I also controbited to the codebase through:",
                `<ul>
                    <li>Programming the system to allow for machines to be modular and data-driven, which enabled us to easily modify, expand, and test our systems</li>
                    <ul>
                        <li>This included all the machine properties, recipes, and material data being stored in JSON files, which were then loaded and read from at runtime</li>
                        <li>This also allowed for a saving-loading system to be easily implemented, by constructing a JSON representation of the machines and where they are placed in order to reconstruct the scene at runtime</li>
                    </ul>
                    <li>Implementing the necessary backend to allow a machine to be picked up by the mouse and placed down in the game world, aligned to the build grid</li>
                    <li>Designing and implementing the class hierarchy system for machines to perform the correct recipes and pass their outputs to the correct connections</li>
                </ul>`,
                "I also composed the background music for the game, and assisted in the collection of sound effects."
            ],
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
    //#endregion
    //#region The Very Hungry Anterpillar
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
            data: [
                "<h2>Contributions</h2>",
                "In this project, I was primarily responsible for:",
                `<ul>
                    <li>Implementing the boot timing system, taking advantage of object pooling and making use of the round-robin scheduling algorithm</li>
                    <li>Planning and programming the collisions between the player Ant, the boot, and the breadcrumbs in order to prevent bugs (other than the Ant)</li>
                    <li>Composing the background music for the game</li>
                </ul>`,
                "After the Game Jam ended, I began work on an online multiplayer version of The Very Hungry Anterpillar, where I:",
                `<ul>
                    <li>Implemented the Unity Netcode for GameObjects package as part of Unity's online networking solution, specifically to handle synchronisation across multiple users</li>
                    <ul>
                        <li>The online game synchronises the map generation, the breadcrumb location, and the positions of the other ants (with nameplates)</li>
                    </ul>
                    <li>Installed and set-up Unity Relay and Unity Lobby, two of Unity's Gaming services, in order for secure peer-to-peer connections to be made without the need for dedicated servers</li>
                    <ul>
                        <li>This enabled the addition of a private hosting and public hosting mode</li>
                    </ul>
                    
                </ul>`
            ],
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
    //#endregion
]