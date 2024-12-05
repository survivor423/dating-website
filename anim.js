// JavaScript for dynamically adding profile cards, form validation, and login functionality

document.addEventListener('DOMContentLoaded', function() {
    // Example profile data
    const profiles = [
        {
            name: 'John Doe',
            description: 'Looking for someone who loves adventure and outdoor activities.',
            image: 'man1.jpg'
        },
        {
            name: 'Jane Smith',
            description: 'Passionate about art and looking for a creative soulmate.',
            image: 'man2.jpg'
        },
        {
            name: 'Michael Davis',
            description: 'A sports enthusiast seeking a fun-loving partner to share life’s moments.',
            image: 'man3.jpg'
        },
        {
            name: 'Andy PHILIP',
            description: 'A sports enthusiast seeking a fun-loving partner to share life’s moments.',
            image: 'man4.jpg'
        },
        {
            name: 'Tony White',
            description: 'A sports enthusiast seeking a fun-loving partner to share life’s moments.',
            image: 'man5.jpg'
        }
    ];

    // Get the profile grid container
    const profileGrid = document.querySelector('.profile-grid');

    // Dynamically create profile cards
    profiles.forEach(profile => {
        const card = document.createElement('div');
        card.classList.add('profile-card');
        card.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}">
            <h3>${profile.name}</h3>
            <p>${profile.description}</p>
        `;
        profileGrid.appendChild(card);
    });

    // Form validation for the signup form
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission

        const username = signupForm.username.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;

        if (username === '' || email === '' || password === '') {
            alert("All fields are required!");
            return;
        }

        // Simulate form submission
        alert("You have successfully signed up!");
        signupForm.reset();
    });

    // Login form validation
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        if (email === '' || password === '') {
            alert("Please enter both email and password!");
            return;
        }

        alert("Login successful!");
        loginForm.reset();
    });
});
