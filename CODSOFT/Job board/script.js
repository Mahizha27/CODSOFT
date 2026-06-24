// =========================
// REGISTER
// =========================

function registerUser(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful!");
    window.location.href = "login.html";
}

// =========================
// LOGIN
// =========================

function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (email === storedEmail &&
        password === storedPassword) {

        localStorage.setItem("loggedIn", "true");

        alert("Login Successful!");
        window.location.href = "candidate.html";

    } else {
        alert("Invalid Email or Password");
    }
}

// =========================
// LOGOUT
// =========================

function logout() {
    localStorage.removeItem("loggedIn");

    alert("Logged Out Successfully");

    window.location.href = "login.html";
}
// =========================
// VIEW JOB DETAILS
// =========================

function viewJob(job) {

    localStorage.setItem("selectedJob", job);

    window.location.href = "job-details.html";
}

// =========================
// LOAD JOB DETAILS
// =========================

function loadJobDetails() {

    let job = localStorage.getItem("selectedJob");

    let details = document.getElementById("jobDetails");

    if (!details || !job) return;

    let jobInfo = {
        "Web Developer": {
            company: "ABC Technologies",
            location: "Chennai",
            salary: "₹4 LPA - ₹6 LPA",
            experience: "0-2 Years",
            skills: "HTML, CSS, JavaScript, React",
            description: "Develop and maintain company websites."
        },

        "Frontend Developer": {
            company: "XYZ Solutions",
            location: "Bangalore",
            salary: "₹5 LPA - ₹8 LPA",
            experience: "1-3 Years",
            skills: "HTML, CSS, JavaScript, React",
            description: "Build responsive user interfaces."
        },

        "Backend Developer": {
            company: "Tech Solutions",
            location: "Coimbatore",
            salary: "₹6 LPA - ₹10 LPA",
            experience: "1-4 Years",
            skills: "Node.js, Express, MongoDB",
            description: "Develop APIs and manage databases."
        },

        "Full Stack Developer": {
            company: "Innovate Systems",
            location: "Chennai",
            salary: "₹8 LPA - ₹12 LPA",
            experience: "2-5 Years",
            skills: "React, Node.js, MongoDB",
            description: "Work on both frontend and backend."
        }
    };

    let info = jobInfo[job];

    details.innerHTML = `
        <h2>${job}</h2>

        <p><strong>Company:</strong> ${info.company}</p>

        <p><strong>Location:</strong> ${info.location}</p>

        <p><strong>Salary:</strong> ${info.salary}</p>

        <p><strong>Experience:</strong> ${info.experience}</p>

        <p><strong>Skills Required:</strong> ${info.skills}</p>

        <p><strong>Job Description:</strong> ${info.description}</p>

        <button onclick="applyJob('${job}')">
            Apply Now
        </button>
    `;
}

// =========================
// APPLY JOB
// =========================

function applyJob(job) {

    let appliedJobs =
        JSON.parse(localStorage.getItem("appliedJobs")) || [];

    appliedJobs.push(job);

    localStorage.setItem(
        "appliedJobs",
        JSON.stringify(appliedJobs)
    );

    alert("Application Submitted Successfully!");

    window.location.href = "candidate.html";
}

// =========================
// LOAD APPLIED JOBS
// =========================

function loadAppliedJobs() {

    let jobs =
    JSON.parse(localStorage.getItem("appliedJobs")) || [];

    let list =
    document.getElementById("appliedJobs");

    if (!list) return;

    list.innerHTML = "";

    if (jobs.length === 0) {
        list.innerHTML =
        "<li>No jobs applied yet</li>";
        return;
    }

    jobs.forEach(function(job, index) {

        let li = document.createElement("li");

        li.innerHTML = `
            ${job}
            <button onclick="deleteJob(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);

    });
}// =========================
// SEARCH JOBS
// =========================

function searchJobs() {

    let searchBox =
        document.getElementById("search");

    if (!searchBox) return;

    let input =
        searchBox.value.toLowerCase();

    let jobs =
        document.querySelectorAll(".job");

    jobs.forEach(function(job) {

        let text =
            job.innerText.toLowerCase();

        if (text.includes(input)) {

            job.style.display = "block";

        } else {

            job.style.display = "none";

        }

    });
}

// =========================
// POST JOB
// =========================

function addJob() {

    let title = document.getElementById("jobTitle").value;
    let company = document.getElementById("companyName").value;
    let location = document.getElementById("location").value;

    if (title === "" || company === "" || location === "") {
        alert("Please fill all fields");
        return;
    }

    let jobs =
        JSON.parse(localStorage.getItem("postedJobs")) || [];

    jobs.push({
        title: title,
        company: company,
        location: location
    });

    localStorage.setItem(
        "postedJobs",
        JSON.stringify(jobs)
    );

    loadPostedJobs();

    document.getElementById("jobTitle").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("location").value = "";

    alert("Job Posted Successfully!");
}

// =========================
// APPLY FORM
// =========================

function submitApplication(event) {

    event.preventDefault();

    alert("Application Submitted Successfully!");

    window.location.href = "candidate.html";
}
function forgotPassword() {

    let email = prompt("Enter your registered email:");

    let storedEmail = localStorage.getItem("email");

    if (email === storedEmail) {

        let newPassword =
            prompt("Enter new password:");

        localStorage.setItem(
            "password",
            newPassword
        );

        alert("Password reset successful!");

    } else {

        alert("Email not found!");

    }
}
function deleteJob(index) {

    let jobs =
    JSON.parse(localStorage.getItem("appliedJobs")) || [];

    jobs.splice(index, 1);

    localStorage.setItem(
        "appliedJobs",
        JSON.stringify(jobs)
    );

    loadAppliedJobs();
}
function clearAppliedJobs() {

    localStorage.removeItem("appliedJobs");

    loadAppliedJobs();

    alert("All applied jobs deleted!");
}
function loadPostedJobs() {

    let jobs =
        JSON.parse(localStorage.getItem("postedJobs")) || [];

    let jobList =
        document.getElementById("jobList");

    if (!jobList) return;

    jobList.innerHTML = "";

    jobs.forEach(function(job, index) {

        let li = document.createElement("li");

        li.innerHTML = `
            <span>
                <strong>${job.title}</strong> -
                ${job.company} (${job.location})
            </span>

            <button onclick="deletePostedJob(${index})">
                Delete
            </button>
        `;

        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.margin = "10px 0";

        jobList.appendChild(li);
    });
}

function deletePostedJob(index) {

    let jobs =
        JSON.parse(localStorage.getItem("postedJobs")) || [];

    jobs.splice(index, 1);

    localStorage.setItem(
        "postedJobs",
        JSON.stringify(jobs)
    );

    loadPostedJobs();
}

// =========================
// PAGE LOAD
// =========================

window.onload = function() {
    loadAppliedJobs();
    loadJobDetails();
    loadPostedJobs();
};