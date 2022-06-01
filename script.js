var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header')
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() 
{
    showSidebar = !showSidebar;

    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}
    function closeSidebar() {
        if (showSidebar) {
            toggleSidebar();
        }
    }
    
    window.addEventListener('resize', function (event) {
        if (window.innerWidth > 790 && showSidebar) {

            toggleSidebar();
        }
    });

    let repoProjects = () =>{
       let url = "https://api.github.com/users/m3psud/repos"
       fetch(url)
       .then(resp => resp.json())
       .then(projects => {
           console.log(projects)
       })
    }
    repoProjects()