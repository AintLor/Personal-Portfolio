document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    document.querySelectorAll(".portfolio-item img").forEach(img => {
        img.addEventListener("click", function () {
            modalImage.src = this.src;
            modal.classList.add("active");
        });
    });

    modal.addEventListener("click", function () {
        modal.classList.remove("active");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const moreContent = this.previousElementSibling; 
            moreContent.style.display = moreContent.style.display === "none" ? "block" : "none";
            this.textContent = moreContent.style.display === "block" ? "Read Less" : "Read More";
        });
    });

    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const progressBar = skill.querySelector('.progress-bar');
        const progress = progressBar.querySelector('.progress');
        const skillValue = progress.getAttribute('data-skill');

        // Set to 0 initially to hide the progress bar
        progress.style.width = '0';
        progress.style.opacity = '0';

        skill.addEventListener('click', function() {
            // Check if the progress bar is already active
            if (skill.classList.contains('active')) {
                skill.classList.remove('active');
                progress.style.width = '0'; 
                progress.style.opacity = '0'; 
            } else {
                skills.forEach(s => {
                    s.classList.remove('active');
                    const progressBar = s.querySelector('.progress-bar');
                    const progress = progressBar.querySelector('.progress');
                    progress.style.width = '0'; 
                    progress.style.opacity = '0'; 
                });
                skill.classList.add('active');

                setTimeout(() => {
                    progress.style.width = skillValue; 
                    progress.style.opacity = '1'; 
                }, 100); 
            }
        });
    });
});