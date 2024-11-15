const miscData = [
    {
        name: "Twitch Channel",
        id: "twitch-channel",
        startDate: new Date(2022, 7, 1),
        endDate: null,

        bg: "twitch-channel.png",
        primaryColour: "#9147FF",
        secondaryColour: "#006061",
        backgroundColour: "#1F1F23",
        textColour: "#EFEFF1",

        sortPriority: 0,
        info: {
            description: "I occasionally run a Twitch channel as \"Super McTea\", where I alternate between playing games and programming games. I have managed to cultivate a small community there, who then often play the games I create when I release them on Itch.io. In my streams I use a vtuber model that I created from scratch, i.e. I drew the art layers and rigged it myself using the program Live2D. I upload all of my past streams onto a separate video-on-demand YouTube channel. ",
            contributions: "",
            images: [
                {
                    caption: "My profile",
                    url: "twitch-channel/numbers.png"
                },
                {
                    caption: "A screenshot from a recent stream",
                    url: "twitch-channel/minecraft-stream.png"
                },
                {
                    caption: "A screenshot from an older stream",
                    url: "twitch-channel/dev-stream.png"
                },
            ],
            links: [
                {
                    text: "Twitch Channel",
                    url: "https://twitch.tv/super_mctea",
                    hover: "Super McTea on Twitch.tv"
                },
                {
                    text: "VOD Channel",
                    url: "https://www.youtube.com/@SuperMcTeaChannel",
                    hover: "Super McTea Channel on YouTube"
                }
            ]
        }
    },
    {
        name: "Target Practice",
        id: "target-practice",
        startDate: new Date(2022, 7, 18),
        endDate: new Date(2022, 10, 3),

        bg: "target-practice.png",
        primaryColour: "#FC48FF",
        secondaryColour: "#1A0131",
        backgroundColour: "#010225",
        textColour: "#FFFFFF",

        sortPriority: 1,
        info: {
            description: "Target Practice is a university project created by Team Oasys, a group of 6 students who were tasked to create a game in Virtual Reality for the LiminalVR platform, with a timeframe of around three months. While the game did not make it onto the LiminalVR platform, I learned many things from working on this project regarding organisation, optimisation, and team roles, especially because it was the first time I had made a game together with a team.<br><br> The game is designed to ramp up in difficulty as time goes on, but the difficulty is adapted based on the ability of the player. That is, the game tracks the last 100 shots and uses that as a score, and depending on the score value it will speed up or slow down the target spawning. Additionally, bombs will only start spawning above a threshold score, and although it's hard to tell at first listen the music also adapts to the difficulty. The game is also designed to be played while facing in any direction, as targets are always spawned directly in front of the player at any given moment or orientation. That way, if the player needs to turn around or is laying down, the game can accomodate them. <br><br>One of the key things I remember learning from this project was how important the people who make up a team are. Our group was randomly assigned, so by random chance we ended up as a group of 6 programmers with no artists or designers on the team, and that heavily impacted our ability to create a product that the client was happy with. This project is also part of the reason why I joined L Stands for Winner later on, as the members of the LSW team have a diverse range of skills that allow for all the roles in the game development process to be filled. ",
            contributions: "In this project, I was primarily the developer of the gun shooting physics and the target spawning mechanics, the adaptive difficulty formula, as well as the music composer. In addition, I was the contact point between the team and our client at LiminalVR, and was the one who made all of the prototype builds.",
            images: [
                {
                    caption: "A screenshot of the targets on-screen",
                    url: "target-practice/target-distribution.png"
                },
                {
                    caption: "Shooting targets in VR",
                    url: "target-practice/gameplay1.gif"
                },
                {
                    caption: "Shooting targets in VR",
                    url: "target-practice/gameplay2.gif"
                }
            ]
        }
    },
    {
        name: "Physics Platformer",
        id: "physics-platformer",
        startDate: new Date(2023, 0, 20),
        endDate: null,

        bg: "physics-platformer.png",
        primaryColour: "#990606",
        secondaryColour: "#474747",
        backgroundColour: "#314D79",
        textColour: "#DDDDDD",

        sortPriority: 2,
        info: {
            description: "This Physics Platformer is an experimental project to learn more about the Unity physics engine and how to use it in interesting ways. The design of this game is a \"rage game\", where the game is intended to be more difficult than an average game in an \"unfair\" way but still foster a (usually competitive) need to complete it.<br><br>I felt that this style of game would lend itself well to a player character that is controlled through the physics engine, as the user would need to be a lot more careful and precise with their controls so as to not let the player roll away.",
            contributions: "",
            images: [
                {
                    caption: "The player jumping to a platform",
                    url: "physics-platformer/gameplay1.png"
                },
                {
                    caption: "The player crouching in a short tunnel",
                    url: "physics-platformer/gameplay2.png"
                },
                {
                    caption: "A development screenshot of the player, a one-wheeled robot",
                    url: "physics-platformer/development.png"
                },
            ]
        }
    },
    {
        name: "VR Magic System",
        id: "magic-system",
        startDate: new Date(2023, 11, 24),
        endDate: null,

        bg: "magic-system.png",
        primaryColour: "#FFFFFF",
        secondaryColour: "#415D79",
        backgroundColour: "#474759",
        textColour: "#EFEFF1",

        sortPriority: 4,
        info: {
            description: "I am actively working on a proof of concept project where a player can cast magic not by using a pre-set number of spells, but by procedurally generating them from the characters that the player inputs.<br><br>This project escaped me multiple times as I kept having to implement systems I did not expect to, but overall I believe it has turned out great so far. As a bonus, it is built using a conlang (constructed language) I had created in the past called \"Liang\".<br><br>For a basic rundown, the system works by having a user draw out the character they wish to input, using the q dollar algorithm for the gesture recognition. After the character is recognised above a threshold, it gets added to a list which is then checked against a tree graph containing all the possible words that can be made from these characters, which is used to determine which spell keywords the player is entering and in what order.<br>The sequence of words are then put into a syntax checker before run through a custom built compiler, which arranges the keywords into a syntax tree that can then be recursively iterated over. The spell builder system iterates over the syntax tree in order to instantiate GameObjects and their hierarchies and actually create the physical spell and attach all of its effects.<br><br>As previously mentioned, it was ambitious, but it works! Future plans include optimisations to the overall system, including a simplification to the conlang that would make writing spells much faster and less reliant on memory, and also plans to add online multiplayer to have completely custom wizard duels!",
            contributions: "",
            images: [
                {
                    caption: "A screenshot of a magic circle",
                    url: "magic-system/full-circle.png"
                },
                {
                    caption: "Using the magic system in VR",
                    url: "magic-system/magic-gameplay-vr.gif"
                },
                {
                    caption: "Using the magic system in VR",
                    url: "magic-system/magic-gameplay2-vr.gif"
                },
                {
                    caption: "Using the magic system on flatscreen-mode",
                    url: "magic-system/magic-gameplay.gif"
                },
            ]
        }
    },
    {
        name: "Front-End Development",
        id: "rmit-fend",
        startDate: new Date(2024, 6, 15),
        endDate: new Date(2024, 10, 4),

        bg: "rmit-fend.png",
        primaryColour: "#E60028",
        secondaryColour: "#142580",
        backgroundColour: "#171A53",
        textColour: "#F6F6F6",

        sortPriority: 5,
        info: {
            description: "For a period of 4 months I underwent the online <strong>Front End Web Developer</strong> course offered by the Royal Melbourne Institute of Technology, in partnership with Udacity.<br><br>The course covered multiple topics regarding front-end web development, including: HTML5, CSS, JavaScript and the DOM, Web APIs and asynchronous applications, Build tools, Webpack, and Service Workers. In total, there were five assessment tasks which involved the creation of websites and code to meet the assessment criteria in a timely manner.",
            contributions: `
                Assessment One required the use of HTML5 and CSS to create a blog site which featured the use of both flex and grid layouts, used media queries to add mobile compatibility, and included both a main home page and a blog post page.<br><br>
                
                Assessment Two was an introduction to JavaScript and the Document Object Model, in which I was given a static landing page and tasked to add JavaScript to it to make it responsive. That included dynamically inserting new objects into the DOM via JavaScript, working with browser events to create interactive buttons and automatic scrolling, and a bit of performance optimisation through the JavaScript Event Loop.<br><br>
                
                Assessment Three was a task to create a weather journal app, making use of the fetch API and an express server. For this task, I had to learn to use Node.js and the express node package to build a server-side application, and develop a client-facing webpage that used the OpenWeatherMap API to gather information based on user input. The user would input a postcode in Australia, and the site would fetch the weather data for that postcode and store the information in the express server together with user-inputted text.<br><br>
                
                Assessment Four was a continuation on the previous task, that built upon the API fetching code by implementing webpack for optimisation and minification, sass and how it is used in a webpack project, and service workers to maintain functionality even when the server is disconnected. The task was to build a webapp that could evaluate a news article with natural language processing, such that the user would input a URL, and the application would pass the URL to the Meaning Cloud API in order to apply sentiment analysis, store the results on the express server, and display the results back to the user.<br><br>
                
                The Capstone Project was a Travel App, which used all of the skills learned in the previous assessments to build a tool that, from a user inputting a place name and date, would chain API calls to display the details of the location, the weather at the date specified, a countdown for how long until the specified date from the current date, and an image of the location. The APIs used for this project were the Geonames API, WeatherBit API, and Pixabay API. Unlike the previous projects, in which starter code was supplied, this project was built from scratch.`,
            images: [
                {
                    caption: "A screenshot of the Capstone Project, a travel app",
                    url: "rmit-fend/travel-app.png"
                },   
                {
                    caption: "A screenshot of Assignment 3, a weather journal app",
                    url: "rmit-fend/weather-site.png"
                },
                {
                    caption: "A screenshot of Assignment 2, a landing page",
                    url: "rmit-fend/landing-site.png"
                },
                {
                    caption: "A screenshot of Assignment 1, a blog site",
                    url: "rmit-fend/blog-site.png"
                },
            ],
            links: [
                {
                    text: "Course Page on RMIT Site",
                    url: "https://online.rmit.edu.au/course/sc-front-end-web-developer-dev102u",
                    hover: "Front End Web Developer, offered by RMIT Online"
                }
            ]
        }
    },
    {
        name: "Portfolio Page",
        id: "portfolio-page",
        startDate: new Date(2024, 10, 4),
        endDate: new Date(2024, 10, 15),

        bg: "portfolio-page.png",
        primaryColour: "#FFFFFF",
        secondaryColour: "#1B263B",
        backgroundColour: "#415A77",
        textColour: "#E0E1DD",

        sortPriority: 6,
        info: {
            description: "This portfolio page was created by me, following the completion of the Front End Web Developer course I attended. This site makes use of flex containers to arrange objects, and dynamically loads the project cards from a json list (including this one you're reading right now).",
            contributions: "",
            images: [
                {
                    caption: "A screenshot of the top-half of the portfolio page",
                    url: "portfolio-page/one.png"
                },   
                {
                    caption: "A screenshot of the bottom-half of the portfolio page",
                    url: "portfolio-page/two.png"
                }
            ],
            links: [
                {
                    text: "The Portfolio Page",
                    url: "https://super-mctea.github.io/",
                    hover: "Super McTea's Portfolio"
                }
            ]
        }
    },
    {
        name: "Conlang Lookup Tool",
        id: "liang-lookup",
        startDate: new Date(2024, 10, 2),
        endDate: null,

        bg: "liang-lookup.png",
        primaryColour: "#FFFFFF",
        secondaryColour: "#FDF6E2",
        backgroundColour: "#FFEBCD",
        textColour: "#222222",

        sortPriority: 7,
        info: {
            description: "This site was created by me to practice using HTML, CSS, and JavaScript together in one project. In order to do so, I am using a conlang I created back in May 2021 (and am still working on), and created a lookup dictionary for all of the words and vocabulary I have come up with so far. People using the site can enter search terms in the search bar, and it will filter out only the cards which contain that string in them, sorted in alphabetical order (in the Liang alphabet).<br><br>Additionally, there is a page for searching for numbers, where I programmed an algorithm to procedurally generate any numbers that are entered into the search bar into their three possible forms: disjunctive, counting, and ordinal. An interesting thing to note about the numbers is that the rightmost digit is listed in full, but all of the other digits are written as prefixes only, and so the system had to account for that, as well as account for places where the place value suffixes needed to go, even when the digit at that place value is zero.",
            contributions: "",
            images: [
                {
                    caption: "A screenshot of the word search page",
                    url: "liang-lookup/words.png"
                },   
                {
                    caption: "A screenshot of the number search page",
                    url: "liang-lookup/numbers.png"
                },
                {
                    caption: "Searching for the word [Word]",
                    url: "liang-lookup/word-search.png"
                },   
                {
                    caption: "Searching for the number [184]",
                    url: "liang-lookup/number-search.png"
                }
            ],
            links: [
                {
                    text: "The Page",
                    url: "https://super-mctea.github.io/liang-lookup",
                    hover: "The Liang Lookup Tool"
                }
            ]
        }
    },
]