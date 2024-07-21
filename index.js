document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('surveyForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const feedback = document.getElementById('feedback').value;
        const rating = document.getElementById('rating').value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Age:', age);
        console.log('Gender:', gender);
        console.log('Feedback:', feedback);
        console.log('Rating:', rating);

        confirmationMessage.classList.remove('hidden');
        setTimeout(() => {
            confirmationMessage.classList.add('hidden');
        }, 5000);

        form.reset();
    });
});