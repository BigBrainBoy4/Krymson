const root = document.documentElement;

const tan = getComputedStyle(root).getPropertyValue('--tan');
const dark_red = getComputedStyle(root).getPropertyValue('--dark-red');
const main_red = getComputedStyle(root).getPropertyValue('--main-red');
const light_red = getComputedStyle(root).getPropertyValue('--light-red');
const lightest_red = getComputedStyle(root).getPropertyValue('--lightest-red');

var links = document.getElementById("links");
var about = document.getElementById("about");
var video = document.getElementById("video");
var music = document.getElementById("music");
var shows = document.getElementById("shows");

var links_tab = document.getElementById("links-tab");
var about_tab = document.getElementById("about-tab");
var music_tab = document.getElementById("music-tab");
var videos_tab = document.getElementById("videos-tab");
var shows_tab = document.getElementById("shows-tab");

function openTab(tab) {
    if (tab == "links") {
        links.style.display = 'block';
        about.style.display = 'none';
        music.style.display = 'none';
        video.style.display = 'none';
        shows.style.display = 'none';
        
        links_tab.style.color = lightest_red;
        links_tab.style.backgroundColor = main_red;
        links_tab.style.border = "3px solid" + dark_red;
        links_tab.style.fontSize = "50px";
    }
      
    if (tab == "about") {
        links.style.display = 'none';
        about.style.display = 'block';
        music.style.display = 'none';
        video.style.display = 'none';
        shows.style.display = 'none';
        
        about_tab.style.color = lightest_red;
        about_tab.style.backgroundColor = main_red;
        about_tab.style.border = "3px solid" + dark_red;
        about_tab.style.fontSize = "50px";
    }
      
    if (tab == "music") {
        links.style.display = 'none';
        about.style.display = 'none';
        music.style.display = 'block';
        video.style.display = 'none';
        shows.style.display = 'none';
        
        music_tab.style.color = lightest_red;
        music_tab.style.backgroundColor = main_red;
        music_tab.style.border = "3px solid" + dark_red;
        music_tab.style.fontSize = "50px"
    }
      
    if (tab == "videos") {
        links.style.display = 'none';
        about.style.display = 'none';
        music.style.display = 'none';
        video.style.display = 'block';
        shows.style.display = 'none';
        
        videos_tab.style.color = lightest_red;
        videos_tab.style.backgroundColor = main_red;
        videos_tab.style.border = "3px solid" + dark_red;
        videos_tab.style.fontSize = "50px"
    }
    
    if (tab == "shows") {
        links.style.display = 'none';
        about.style.display = 'none';
        music.style.display = 'none';
        video.style.display = 'none';
        shows.style.display = 'block';
        
        shows_tab.style.color = lightest_red;
        shows_tab.style.backgroundColor = main_red;
        shows_tab.style.border = "3px solid" + dark_red;
        shows_tab.style.fontSize = "50px"
        
    }
      
    if (tab == "none") {
        links.style.display = 'none';
        about.style.display = 'none';
        music.style.display = 'none';
        video.style.display = 'none';
        shows.style.display = 'none';
        
        links_tab.style.color = tan;
        links_tab.style.backgroundColor = light_red;
        links_tab.style.border = "none";
        links_tab.style.fontSize = "40px";
        
        about_tab.style.color = tan;
        about_tab.style.backgroundColor = light_red;
        about_tab.style.border = "none";
        about_tab.style.fontSize = "40px";
        
        music_tab.style.color = tan;
        music_tab.style.backgroundColor = light_red;
        music_tab.style.border = "none";
        music_tab.style.fontSize = "40px";
        
        videos_tab.style.color = tan;
        videos_tab.style.backgroundColor = light_red;
        videos_tab.style.border = "none";
        videos_tab.style.fontSize = "40px";
        
        shows_tab.style.color = tan;
        shows_tab.style.backgroundColor = light_red;
        shows_tab.style.border = "none";
        shows_tab.style.fontSize = "40px";
        
    }
}
