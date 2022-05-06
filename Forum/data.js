var defaultThreads = [
    {

        id: 1,
        title: "HTML Discussion",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Hey what does < div> mean? "
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Hey there, div means divison."
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "h1 is bigger, the smaller the number in heading the bigger it is!"
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Thank you! Also is h1 bigger or h4?"
            }
        ]
    },
    {
        id: 2,
        title: "CSS Discussion",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Hey, how do align my text to the middle?"
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Hey, you would do text-align: center;"
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Thank You!"
            }
        ]
    },
    {
        id: 3,
        title: "JavaScript Discussion",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 3",
        comments: [
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Which HTML element do we put the JavaScript?"
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Hey, it would be < style>!!"
            }
        ]
    },
    {
        id: 4,
        title: "Social Chat",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 4",
        comments: [
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Hey, how are you?"
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "I'm okay how are you finding the website?"
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "I think it is amazing!"
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Honestly same it is so good."
            }
        ]
    },
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
