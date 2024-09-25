// Get form and output elements
const resumeForm = document.getElementById('resumeform') as HTMLFormElement | null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement | null;

// Function to generate the resume HTML
function GenerateResume(data: {
    name: string,
    email: string,
    phone: string,
    education: string,
    experience: string,
    skills: string,
    details: string,
}) {
    return `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
        <p><strong>Details:</strong> ${data.details}</p>
        <button id="editButton">Edit</button>
    `;
}

if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Extract form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const details = (document.getElementById('details') as HTMLInputElement).value;

        // Generate the HTML for resume
        const resumeHTML = GenerateResume({ name, email, phone, education, experience, skills, details });
        
        // Insert generated resume into the output div
        resumeOutput.innerHTML = resumeHTML;

        // Get the edit button and add a click event listener to allow editing
        const editButton = document.getElementById('editButton') as HTMLButtonElement;
        if (editButton) {
            editButton.addEventListener('click', () => {
                // Reset form values for editing
                (document.getElementById('name') as HTMLInputElement).value = name;
                (document.getElementById('email') as HTMLInputElement).value = email;
                (document.getElementById('phone') as HTMLInputElement).value = phone;
                (document.getElementById('education') as HTMLInputElement).value = education;
                (document.getElementById('experience') as HTMLInputElement).value = experience;
                (document.getElementById('skills') as HTMLInputElement).value = skills;
                (document.getElementById('details') as HTMLInputElement).value = details;

                // Scroll back to the form
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
} else {
    console.error('Resume form or output div not found in the DOM.');
}
