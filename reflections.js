
const slides = [
    {
        src: "DSA/pie.png",          
        title: "My learning preference",
        desc: "My learning preference reflects my contributions in the padlet. As a kinesthetics learner I learn best from creating my own programs. Although I do share my notes, I quickly felt that sharing notes will not be effective like adding sands to the beach as everyone is already doing their own notes.My motto is \"to be good at something is to do it\"."
    },
    {
        src: "DSA/1.png",          
        title: "My first contributions Intro to DSA",
        desc: "This is the first contribution I ever made for my padlet. It consist of me sharing my Notes Github repository from my DSA class. All created using Neovim which I am proud of."
    },
    {
        src: "DSA/2.png",
        title: "My second conntribution Fundamental of C++",
        desc: "It includes my repo link and also my pyq programs (from Computer Programming)."
    },
    {
        src: "DSA/3.png",
        title: "My Third contribution Arrays",
        desc: "Now this is where I start making my \"original\" programs. Which is the BMI calculator. I have implemented this program in both Java and Python before however this is the first time I use C++ for it. Eventhough it is a simple program I believe it is a crucial step in my learning process of programming. I also included my past programs from Computer Programming class for reference."
    },
    {
        src: "DSA/4.png",
        title: "My Fourth contribution ADT",
        desc: "ADT is something new to me as I m only ever use Procedural Paradigm before. So the shift to Object Oriented Paradigm while not an immense task do require some practice. Therefore, I decided to create a program that uses concept from Computer Programming combining it with ADT. Resulted in this program I m proud of which I plan to use for my DSA Assignment."
    },
    {
        src: "DSA/5.png",
        title: "My fifth contribution Stack",
        desc: "A word reversal program that ultilizes the very nature of Stack(LIFO)."
    },
    {
        src: "DSA/6.png",
        title: "My sixth contribution Queue",
        desc: "This one I have to be honest is probably the one with the least effort I gave. I don't really have any idea what to do so I just write the program and see where it end. Thus this program is created , which is just a program to feed the snake then when it poop it will go back to original length. You can also kill it if you want.(Would you?)"
    },
    {
        src: "DSA/7.png",
        title: "My seventh contribution Sorting Algoritm",
        desc: "This is a special one. This program is a program that uses the Bogo Sort Algorithm. If you dont know, Bogo Sort bogo sort is a sorting algorithm that randomise the array/list until it is sorted. As you can see it took me 900k steps just to sort a list of 10 elements. It's logic is simple, yet also quite challenging when you want to do the sorting close to truly random."
    },
    {
        src: "DSA/engangement.png",          
        title: "Taking inspiration from my peers",
        desc: "From time to time I explore the contributions of others in the padlet looking for inspiration. One of them is Sufiyan Abdul's number guessing game. Which to me hold very interesting concept and unexplored potentials."
    },
    {
        src: "DSA/8.png",
        title: "My eigth contribution Searching Algorithm",
        desc: "From the inspiration I get, I created this program. Which become my favourite contribution for DSA class as you can see from the length of the description. Nothing to say because everything is in there. This is the most fun program I ever did."
    },
    {
        src: "DSA/engagement2.png",
        title: "Others also engange with my posts",
        desc: "Creating a funny yet also educational posts allows other to engage with my contributions easily."
    },
    {
        src: "DSA/9.png",
        title: "My ninth contribution Linked Lists",
        desc: "Throwback to my word reversal program using stack, this is essentially the upgrade of the program by using Linked List."
    },
    {
        src: "DSA/10.png",
        title: "My tenth contribution Tree",
        desc: "From the tree implementation in our class I expanded it to have the functionality in the description. The reason I made this is just for my satisfaction."
    },
    {
        src: "DSA/BeforeAndNow.png",
        title: "Comparison between me before DSA and after DSA",
        desc: "I have grown a lot in the past 14 weeks. Both directly and indirectly. From learning about OOP and ADTs. To becoming more patience when programming. DSA as a whole really contributed to the development of my life. I m totally grateful toward Dr Fajar for allowing me to be a part of this wonderful class."
    },
    {
        src: "DSA/tui.png",          
        title: "I am also a Terminal User Interface(TUI) and Open Source enthusiast",
        desc: "As a TUI and FOSS person, I used tools like Neovim, Git and the terminal throughout the entire semester. Eventhough it is challenging at first, building the muscle memory in using these tools will greatly benefit me in the future especially as a computer engineering student. Because of these some people might notice that I tend to avoid using grandier software especially proprietary one"
    },
];

// ── Build DOM ─────────────────────────────────────────────────────
let current = 0;

const track   = document.getElementById("carousel-track");
const dotBar  = document.getElementById("dot-bar");
const descTitle = document.getElementById("desc-title");
const descText  = document.getElementById("desc-text");

slides.forEach((slide, i) => {
    // Slide element
    const div = document.createElement("div");
    div.className = "carousel-slide" + (i === 0 ? " active" : "");

    if (slide.src) {
        const img = document.createElement("img");
        img.src = slide.src;
        img.alt = slide.title;
        div.appendChild(img);
    } else {
        const ph = document.createElement("div");
        ph.className = "placeholder";
        ph.textContent = `[ ${slide.title} — add image path in reflections.js ]`;
        div.appendChild(ph);
    }

    track.appendChild(div);

    // Dot
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goTo(i));
    dotBar.appendChild(dot);
});

// Set initial description
updateDesc();

// ── Navigation ────────────────────────────────────────────────────
function goTo(index) {
    const allSlides = track.querySelectorAll(".carousel-slide");
    const allDots   = dotBar.querySelectorAll(".dot");

    allSlides[current].classList.remove("active");
    allDots[current].classList.remove("active");

    current = (index + slides.length) % slides.length;

    allSlides[current].classList.add("active");
    allDots[current].classList.add("active");

    updateDesc();
}

function nextSlide() { goTo(current + 1); }
function prevSlide() { goTo(current - 1); }

function updateDesc() {
    descTitle.textContent = slides[current].title;
    descText.textContent  = slides[current].desc;
}

// ── Keyboard navigation ───────────────────────────────────────────
document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft")  prevSlide();
});
