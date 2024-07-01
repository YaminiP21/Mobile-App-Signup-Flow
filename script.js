function nextStep(stepNumber) {
    // Hide all form steps
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(step => step.classList.remove('active'));

    // Show the selected form step
    const selectedStep = document.getElementById(`step-${stepNumber}`);
    selectedStep.classList.add('active');

    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevStep(stepNumber) {
    // Hide all form steps
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(step => step.classList.remove('active'));

    // Show the selected form step
    const selectedStep = document.getElementById(`step-${stepNumber}`);
    selectedStep.classList.add('active');

    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSuccessMessage(event) {
    event.preventDefault();
    const formContainer = document.querySelector('.main-container');
    formContainer.style.display = 'none';
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'flex';
}
