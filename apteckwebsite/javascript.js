document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector(".dropbtn");
        const menu = dropdown.querySelector(".dropdown-menu");

        dropbtn.addEventListener("click", function(event) {
            event.stopPropagation();

            // Close all dropdowns before opening the clicked one
            document.querySelectorAll(".dropdown-menu").forEach(drop => {
                drop.style.display = "none";
            });

            // Toggle the clicked dropdown menu
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        document.querySelectorAll(".dropdown-menu").forEach(drop => {
            if (!drop.contains(event.target)) {
                drop.style.display = "none";
            }
        });
    });
});



const btn = document.getElementById("rcsmsg")
btn.addEventListener("click", function()
{
    alert("Submited sucessfully")
})


// this is for embedded video
// it-video

// function playVideo() {
//   document.querySelector('.video-thumbnail').style.display = 'none';
//   const video = document.getElementById('placement-v');
//   video.style.display = 'block';
//   video.play();
// }

function loadYouTubeVideo() {
  document.querySelector('.video-thumbnail').style.display = 'none';
  const player = document.getElementById('youtube-player');
  player.style.display = 'block';
  player.innerHTML = `<iframe width="100%" height="350" 
    src="https://www.youtube.com/watch?v=FFK__p1Ez_E&t=1sautoplay=1" 
    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}



