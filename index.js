const gameData = [
    { 
        q: "Do You Think Am A Good Kisser?", 
        v: "video/video7.mp4", 
        yes: "So am an amazing kisser. 😉", 
        no: "Liars just say the truth. 😍"
    },
    { 
        q: "Do you believe we met at the perfect time in our lives?", 
        v: "video/video2.mp4", 
        yes: "Awwwwwwwwwn  that so sweet 💅", 
        no: "Too bad, you have to say yes anyways. ❤️" 
    },
    { 
        q: "Do you have a specific photo of us that is your absolute favourite", 
        v: "video/video3.mp4", 
        yes: "I would love you to show me after the game 😏", 
        no: "Lies! You're obsessed with me. Admit it! 💋" 
    },
    { 
        q: "Do you feel you can be 100% your true self when you are with me?", 
        v: "video/video4.mp4", 
        yes: "I knew you can't do without me 🛌", 
        no: "Liars, i know am your safe space. 🧸" 
    },
    { 
        q: "Would you still love me if I was a giant annoying worm?", 
        v: "video/video5.mp4", 
        yes: "I'd keep you in a very fancy dirt box. That's true love. 🪱", 
        no: "Ouch! Luckily I'm a cute human, so you have no choice! 😂" 
    },
    { 
        q: "Will you be my val?", 
        v: "video/video6.mp4",  
        yes: "FINALLY! I love you so much. Check this out... ❤️", 
        no: "You can't say no to destiny! You're already my val. ✨" 
    }
];

let currentStep = 0;

function handleAnswer(answer) {
    const responseMsg = document.getElementById('response-message');
    const nextBtn = document.getElementById('next-btn');
    const btnGroup = document.getElementById('button-group');

    if (answer === 'no') {
        responseMsg.innerText = gameData[currentStep].no;
        responseMsg.style.color = "#ff4081";
        nextBtn.classList.add('hidden'); 
    } 
    
    if (answer === 'yes') {
        responseMsg.innerText = gameData[currentStep].yes;
        responseMsg.style.color = "#2ecc71";

        btnGroup.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    }
}

function nextQuestion() {
    const questionText = document.getElementById('question-text');
    const responseMsg = document.getElementById('response-message');
    const video = document.getElementById('display-video');
    const videoSource = document.getElementById('video-source');
    const nextBtn = document.getElementById('next-btn');
    const btnGroup = document.getElementById('button-group');

    if (currentStep < gameData.length - 1) {
        currentStep++;
        
        questionText.innerText = ` ${gameData[currentStep].q}`;
        responseMsg.innerText = "";
        videoSource.src = gameData[currentStep].v;
        
        video.load();
        video.play();

        btnGroup.classList.remove('hidden');
        nextBtn.classList.add('hidden');
    } else {
        document.getElementById('question-box').classList.add('hidden');
        document.getElementById('final-reveal').classList.remove('hidden');
    }
}