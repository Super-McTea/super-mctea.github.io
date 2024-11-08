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
]