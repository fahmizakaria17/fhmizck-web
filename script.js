// 1. ANIMASI TYPEWRITER (Ketik Otomatis di Section Home)
const words = ["PERSONAL PROFILE", "STUDENT OF TKJ", "SMKN 1 JAKARTA", "HELLO ATEKSA", "SUKA MIE AYAM",];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 2000; // Tahan selama 2 detik jika kata selesai
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// 2. EFEK PARTIKEL JEJAK KURSOR (Cursor Trail Animation)
document.addEventListener("mousemove", (e) => {
    const particle = document.createElement("div");
    particle.className = "particle";
    
    // Ukuran partikel acak
    const size = Math.random() * 8 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 800);
});

// 3. HIGHLIGHT NAVBAR DENGAN SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// 4. ANIMASI INTERAKTIF TOMBOL LAB
const btnLab = document.getElementById("btnLab");
const labResult = document.getElementById("labResult");

btnLab.addEventListener("click", () => {
    const messages = [
        "⚡ Mode Chidori Aktif!",
        "🔍 System Diagnosis: 100% Optimal!",
        "🎨 Drawing Canvas Loaded!",
        "🚀 Welcome to Fahmi's Lab Space!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    labResult.innerText = messages[randomIndex];
    
    // Efek Getar Halus di Ponsel
    if (navigator.vibrate) {
        navigator.vibrate(60);
    }
});