// 1. Navigation Logic
function goToPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the specific page requested
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// 2. The "No" Button Prank
let noClickCount = 0;

function handleNoClick() {
    noClickCount++;
    const catImg = document.getElementById('cat-img');
    const title = document.getElementById('proposal-text');
    const noBtn = document.querySelector('.no-btn');
    const yesBtn = document.getElementById('yes-btn'); // Get the YES button

    if (noClickCount === 1) {
        // --- PRANK MODE (Angry) ---
        // Change image and text
        catImg.src = "images/angry-cat.jpg"; 
        title.innerHTML = "How dare you!<br>😡";
        
        // Change NO button to Try Again
        noBtn.innerHTML = "Try Again";
        noBtn.style.backgroundColor = "red";
        
        // HIDE the YES button
        yesBtn.style.display = "none"; 

    } else {
        // --- RESET MODE (Normal) ---
        // Reset image and text
        catImg.src = "images/cat-flowers.jpg";
        title.innerHTML = "Hi my love!<br>i got a suprise for you";
        
        // Reset NO button
        noBtn.innerHTML = "NO";
        noBtn.style.backgroundColor = "#b0bec5";
        
        // SHOW the YES button again
        yesBtn.style.display = "inline-block"; 
        
        // Reset count
        noClickCount = 0;
    }
}

// 3. Countdown Timer Logic
function updateTimer() {
    // Set the date we're counting down to (Next New Year)
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`).getTime();

    const now = new Date().getTime();
    const gap = newYearDate - now;

    if (gap > 0) {
        const d = Math.floor(gap / (1000 * 60 * 60 * 24));
        const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((gap % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = d < 10 ? "0" + d : d;
        document.getElementById('hours').innerText = h < 10 ? "0" + h : h;
        document.getElementById('mins').innerText = m < 10 ? "0" + m : m;
        document.getElementById('secs').innerText = s < 10 ? "0" + s : s;
    }
}

// Update timer every second
setInterval(updateTimer, 1000);
updateTimer(); // Initial call

// Function to handle photo stacking
function togglePhoto(el) {
    // 1. Get all photos
    const allPhotos = document.querySelectorAll('.photo');
    
    // 2. If the clicked photo is already active, just close it (toggle off)
    if (el.classList.contains('active')) {
        el.classList.remove('active');
        return;
    }

    // 3. Otherwise, close ALL other photos first
    allPhotos.forEach(photo => {
        photo.classList.remove('active');
    });

    // 4. Make the clicked photo active
    el.classList.add('active');
}