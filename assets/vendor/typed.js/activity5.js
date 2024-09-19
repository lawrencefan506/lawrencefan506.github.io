/*JS script for activity 5*/

(function recentProjects() {
    const recentProjectsContainer = document.getElementById('recent-projects-list');

    const projects = Array.from(document.querySelectorAll('.col.s12.m6.l4'));

    /*Sort projects by date*/
    projects.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));

        return dateB - dateA;
    });

    //Remove the hidden class so we can display them
    projects.forEach(project => {

    });

    /*Append most recent project*/
    if (projects.length > 0) {
        recentProjectsContainer.appendChild(projects[0]);
        const card = projects[0].querySelector('.card'); // Select the card element inside the project
        if (card) {
            card.classList.remove('hidden'); // Remove the hidden class
        }
    }

    /*Append most recent project*/
    if (projects.length > 0) {
        recentProjectsContainer.appendChild(projects[0]);
    }

    let showingMore = false; // Start loading from the second project

    // Load more projects when the button is clicked
    loadMoreBtn.addEventListener('click', () => {
        if (showingMore === false) {
            // Load more projects
            for (let i = 1; i < projects.length; i++) {
                recentProjectsContainer.appendChild(projects[i]);
                const card = projects[i].querySelector('.card'); // Select the card element inside the project
                if (card) {
                    card.classList.remove('hidden'); // Remove the hidden class
                }
            }
    
            //Change text of button 
            loadMoreBtn.textContent = 'Show Less';
            showingMore = true;
        } else {
            // Hide the additional projects
            for (let i = 1; i < projects.length; i++) {
                recentProjectsContainer.removeChild(projects[i]);
            }
            loadMoreBtn.textContent = 'Show More';
            showingMore = false;
        }
    });
})();
  