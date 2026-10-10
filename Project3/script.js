
let courses = [];

function addCourse(event) {
    event.preventDefault();

    const nameInput = document.getElementById('courseName');
    const creditsInput = document.getElementById('creditHours');
    const gradeInput = document.getElementById('gradeSelect');

    const courseName = nameInput.value.trim();
    const creditHours = parseFloat(creditsInput.value);
    const gradePoints = parseFloat(gradeInput.value);

    const selectedOption = gradeInput.options[gradeInput.selectedIndex].text;
    const gradeLabel = selectedOption.split(' ')[0];

    courses.push({
        id: Date.now(),
        name: courseName,
        credits: creditHours,
        gradePoints: gradePoints,
        gradeLabel: gradeLabel
    });

    nameInput.value = '';
    creditsInput.value = '3';
    gradeInput.selectedIndex = 0;

    updateGPAUI();
}

function deleteCourse(id) {
    courses = courses.filter(course => course.id !== id);
    updateGPAUI();
}

function updateGPAUI() {
    const courseList = document.getElementById('courseList');
    const totalCreditsElem = document.getElementById('totalCredits');
    const gpaValueElem = document.getElementById('gpaValue');

    courseList.innerHTML = '';

    if (courses.length === 0) {
        courseList.innerHTML = `
            <tr id="emptyRow">
                <td colspan="4" class="empty-msg">No courses added yet. Add a course above to compute GPA.</td>
            </tr>
        `;
        totalCreditsElem.textContent = '0';
        gpaValueElem.textContent = '0.00';
        return;
    }

    let totalCredits = 0;
    let totalQualityPoints = 0;

    courses.forEach(course => {
        totalCredits += course.credits;
        totalQualityPoints += (course.credits * course.gradePoints);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${course.name}</strong></td>
            <td>${course.credits} hrs</td>
            <td>${course.gradeLabel} (${course.gradePoints.toFixed(1)})</td>
            <td><button class="delete-btn" onclick="deleteCourse(${course.id})">Remove</button></td>
        `;
        courseList.appendChild(row);
    });

    const calculatedGPA = totalQualityPoints / totalCredits;

    totalCreditsElem.textContent = totalCredits;
    gpaValueElem.textContent = calculatedGPA.toFixed(2);
}