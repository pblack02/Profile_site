
function toggleNav(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// // Object containing data for each project
// let projectData = {
//     "GoTravel": {
//         title: "GoTravel",
//         description: "Details about the GoTravel project..."
//         // Add more details
//     },
//     "ProjectTwo": {
//         title: "Project Two",
//         description: "Details about Project Two..."
//         // Add more details
//     }
//     // Add more projects as needed
// };
//
// function loadProjectDetails(projectName) {
//     let detailSection = document.getElementById("projectDetailSection");
//
//     // Check if the project data exists
//     if (projectData[projectName]) {
//         document.getElementById("projectTitle").innerText = projectData[projectName].title;
//         document.getElementById("projectDescription").innerText = projectData[projectName].description;
//         // Update more elements as needed
//
//         // Show the detail section if hidden
//         detailSection.classList.remove("hidden");
//     } else {
//         console.error("Project data not found for: " + projectName);
//     }
// }
