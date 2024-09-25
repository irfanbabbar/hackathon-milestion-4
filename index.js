// Get form and output elements
var resumeForm = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeOutput');
// Function to generate the resume HTML
function GenerateResume(data) {
    return "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(data.name, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <p><strong>Education:</strong> ").concat(data.education, "</p>\n        <p><strong>Experience:</strong> ").concat(data.experience, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n        <p><strong>Details:</strong> ").concat(data.details, "</p>\n        <button id=\"editButton\">Edit</button>\n    ");
}
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Extract form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var details = document.getElementById('details').value;
        // Generate the HTML for resume
        var resumeHTML = GenerateResume({ name: name, email: email, phone: phone, education: education, experience: experience, skills: skills, details: details });
        // Insert generated resume into the output div
        resumeOutput.innerHTML = resumeHTML;
        // Get the edit button and add a click event listener to allow editing
        var editButton = document.getElementById('editButton');
        if (editButton) {
            editButton.addEventListener('click', function () {
                // Reset form values for editing
                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                document.getElementById('phone').value = phone;
                document.getElementById('education').value = education;
                document.getElementById('experience').value = experience;
                document.getElementById('skills').value = skills;
                document.getElementById('details').value = details;
                // Scroll back to the form
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
}
else {
    console.error('Resume form or output div not found in the DOM.');
}
