import self from "../img/me.jpeg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Sadaf",
    lastName: "Ahmed",
    initials: "js", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "Student Developer at Google Summer of Code"
        },
        {
            emoji: "📧",
            text: "sadaf20043006@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Sadaf-A",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/sadaf-ahmed-in",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/betype0",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Sadaf. I have worked as a Student Developer at Google Summer of Code. I studied CompSci, I enjoy long walks on the beach. You should hire me!",
    skills:
        {
            proficientWith: ['typescript', 'Spring Boot', 'AWS', 'Docker', 'javascript', 'react', 'git', 'github'],
            exposedTo: ['nodejs', 'python', 'java']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ 
        {
            title: "file-compressor",
            live: "http://13.127.227.130:3000/",
            source: "https://github.com/Sadaf-A/file-compressor", 
            image: mock1
        },
        {
            title: "graph-viz",
            live: "http://13.201.94.104:3000/",
            source: "https://github.com/Sadaf-A/graph-viz",
            image: mock2
        },
    ]
}
