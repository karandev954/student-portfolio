function filterCourses() {
    const searchInput = document.getElementById('courseSearch').value.toLowerCase();
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        const textContent = card.textContent.toLowerCase();
        
        if (textContent.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


function submitForm(event) {

    event.preventDefault();

    const form = document.getElementById('inquiryForm');
    const successMsg = document.getElementById('formSuccessMessage');

    form.style.display = 'none';
    successMsg.classList.remove('hidden');
}