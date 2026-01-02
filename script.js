// Predefined list of AI artwork feedback
const feedbackOptions = [
    "The color palette shows excellent harmony, with complementary tones that create visual cohesion.",
    "Consider adding more contrast in the focal areas to guide the viewer's eye more effectively.",
    "The composition demonstrates strong use of the rule of thirds, creating a balanced and engaging layout.",
    "The line work displays confident strokes that add energy and movement to the piece.",
    "The lighting suggests a clear light source, which helps establish depth and dimension.",
    "The texture variation adds visual interest and helps differentiate between different elements.",
    "The perspective work creates a convincing sense of space and three-dimensionality.",
    "Consider experimenting with warmer or cooler color temperatures to enhance the mood.",
    "The negative space is well-utilized, giving the composition room to breathe.",
    "The character proportions are well-maintained, showing good understanding of anatomy.",
    "The shading technique effectively conveys form and volume throughout the artwork.",
    "The color saturation levels are well-balanced, creating a cohesive visual experience.",
    "The dynamic poses show good understanding of movement and gesture.",
    "Consider adding subtle highlights to key areas to enhance the overall impact.",
    "The background elements complement the main subject without competing for attention.",
    "The use of atmospheric perspective helps create depth in the composition.",
    "The edge quality varies appropriately, with soft edges in the background and sharper edges on focal points.",
    "The color transitions are smooth and natural, showing good blending technique."
];

// Function to randomly select feedback items
function getRandomFeedback(count = 4) {
    const shuffled = [...feedbackOptions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Predefined list of creative, social-media-ready captions
const captionOptions = [
    "Every stroke tells a story, every color holds emotion. This piece is a journey into imagination ✨",
    "Art is not what you see, but what you make others feel. Hope this piece resonates with you 🎨",
    "Creating worlds one pixel at a time. The magic happens when passion meets skill 💫",
    "Behind every artwork is a story waiting to be told. This one speaks to the soul 🌟",
    "Colors dance, lines flow, and creativity knows no bounds. Welcome to my artistic universe 🎭",
    "From concept to creation, this piece represents hours of dedication and love for the craft 🖌️",
    "Art has the power to transcend reality and touch the heart. This is my latest exploration 🎪",
    "Every artist dips their brush in their own soul and paints their own nature into their pictures 🎨",
    "The canvas is my playground, and imagination is my only limit. Here's what I've been working on ✨",
    "Art enables us to find ourselves and lose ourselves at the same time. This piece is my truth 🌈",
    "Creating art is like breathing—essential, natural, and deeply personal. This is my latest breath 💨",
    "In a world full of noise, art speaks the loudest. This piece is my voice 🗣️",
    "The beauty of art lies in its ability to connect souls across time and space. This is my connection 🌐",
    "Every creation is a piece of the artist's heart made visible. Here's a piece of mine ❤️",
    "Art is the lie that enables us to realize the truth. This piece reveals mine 🎭"
];

// Predefined list of relevant hashtags
const hashtagOptions = [
    "#digitalart", "#artwork", "#artist", "#illustration", "#creative",
    "#art", "#drawing", "#design", "#artistsoninstagram", "#digitalartist",
    "#artoftheday", "#instaart", "#artistic", "#sketch", "#painting",
    "#artists", "#creativeart", "#artlovers", "#artgallery", "#artistic",
    "#artisticprocess", "#artisticvision", "#artisticlife", "#artisticmind",
    "#digitalillustration", "#digitalpainting", "#digitaldrawing", "#digitaldesign",
    "#artworkoftheday", "#artworkinprogress", "#artworklove", "#artworkdaily",
    "#animator", "#animation", "#characterdesign", "#conceptart", "#visualart",
    "#artcommunity", "#artshare", "#artworld", "#artisticjourney", "#artisticstyle",
    "#creativeprocess", "#creativity", "#inspiration", "#artisticinspiration", "#artisticpassion"
];

// Function to randomly select a caption
function getRandomCaption() {
    return captionOptions[Math.floor(Math.random() * captionOptions.length)];
}

// Function to randomly select hashtags
function getRandomHashtags(count = 6) {
    const shuffled = [...hashtagOptions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Predefined list of creative art ideas (character concepts, animation prompts, storytelling ideas)
const artIdeaOptions = [
    "Create a character who can manipulate time through their art—every brushstroke rewinds or fast-forwards moments.",
    "Design an animated sequence where a character's shadow becomes their greatest ally, moving independently.",
    "Illustrate a story about an artist whose drawings come to life at midnight, but only for one hour.",
    "Develop a character concept: a cyborg painter who uses emotions as their color palette.",
    "Animate a transformation scene where a character's emotions physically change their environment.",
    "Create a storytelling prompt: A world where art supplies are magical and each tool has unique powers.",
    "Design a character who communicates only through animated gestures, no words needed.",
    "Illustrate a scene where two parallel dimensions meet through a painting that acts as a portal.",
    "Animate a character learning to fly by drawing wings that become real.",
    "Develop a concept: An artist who can paint memories and make others experience them.",
    "Create a storytelling idea: A gallery where each painting tells a different chapter of one continuous story.",
    "Design an animation prompt: A character whose age is determined by the art they create.",
    "Illustrate a world where colors have personalities and artists must negotiate with them.",
    "Animate a sequence where a character's sketchbook pages become portals to different worlds.",
    "Develop a character concept: A mime who can create tangible objects through invisible gestures.",
    "Create a story prompt: An art school where students learn to animate their own dreams.",
    "Design a character who can see the future through their drawings but can't change it.",
    "Illustrate an animation concept: A character who must redraw themselves every day to stay alive.",
    "Animate a transformation where a character's art style evolves with their emotional journey.",
    "Develop a storytelling idea: A museum where visitors can step into paintings and become part of the artwork.",
    "Create a character concept: An animator whose characters gain consciousness and demand creative freedom.",
    "Design an animation prompt: A world where unfinished drawings exist in a limbo dimension.",
    "Illustrate a story about an artist who can paint emotions and sell them to others.",
    "Animate a character discovering they can edit reality by erasing and redrawing parts of the world.",
    "Develop a concept: A character whose art becomes more powerful the more personal it is.",
    "Create a storytelling prompt: An art supply store that only appears to artists in creative crisis.",
    "Design a character who can animate inanimate objects by drawing faces on them.",
    "Illustrate an animation idea: A character who must complete 1000 drawings to unlock their true form.",
    "Animate a sequence where a character's art style changes based on the music they listen to.",
    "Develop a story concept: A world where the most beautiful art is created from captured nightmares."
];

// Function to randomly select art ideas
function getRandomArtIdeas(count = 3) {
    const shuffled = [...artIdeaOptions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Predefined list of art trends with title, description, and platform
const trendOptions = [
    {
        title: "AI-Assisted Character Design",
        description: "Artists are using AI tools to generate character concepts, then refining them with traditional techniques for unique hybrid styles.",
        platform: "Instagram"
    },
    {
        title: "Speed Paint Challenges",
        description: "Time-lapse painting videos showing complete artworks in under 10 minutes are gaining massive engagement and inspiring quick creativity.",
        platform: "TikTok"
    },
    {
        title: "Procreate Brush Sets",
        description: "Custom digital brush collections themed around specific art styles (watercolor, oil, anime) are trending among digital artists.",
        platform: "YouTube"
    },
    {
        title: "Minimalist Line Art",
        description: "Clean, simple line drawings with strategic use of negative space are dominating art feeds and print sales.",
        platform: "Instagram"
    },
    {
        title: "Animated Loop Tutorials",
        description: "Short, looping animation tutorials teaching specific techniques like walk cycles or facial expressions are highly shareable.",
        platform: "TikTok"
    },
    {
        title: "Color Palette Challenges",
        description: "Artists are creating multiple artworks using the same limited color palette, showcasing versatility and creativity.",
        platform: "Instagram"
    },
    {
        title: "3D to 2D Conversion",
        description: "Converting 3D models into stylized 2D illustrations is becoming a popular workflow for character artists.",
        platform: "YouTube"
    },
    {
        title: "Sketchbook Flip-Throughs",
        description: "Raw, unedited sketchbook tours showing the creative process from rough sketches to finished pieces are resonating with audiences.",
        platform: "TikTok"
    },
    {
        title: "NFT Art Collections",
        description: "Curated digital art collections with consistent themes and styles are gaining traction in the NFT marketplace.",
        platform: "Offline"
    },
    {
        title: "Mixed Media Digital Art",
        description: "Combining traditional media scans with digital painting techniques creates unique textures and depth.",
        platform: "Instagram"
    },
    {
        title: "Character Expression Sheets",
        description: "Showing a single character with multiple emotions and poses is helping artists demonstrate range and skill.",
        platform: "TikTok"
    },
    {
        title: "Art Process Breakdowns",
        description: "Detailed step-by-step breakdowns of complex artworks, from initial sketch to final render, are educational gold.",
        platform: "YouTube"
    },
    {
        title: "Collaborative Art Challenges",
        description: "Artists are teaming up to create connected artworks, each contributing their unique style to a larger narrative.",
        platform: "Instagram"
    },
    {
        title: "Retro-Futurism Aesthetics",
        description: "Blending 80s and 90s design elements with futuristic concepts is creating a nostalgic yet forward-looking art style.",
        platform: "TikTok"
    },
    {
        title: "Gesture Drawing Sessions",
        description: "Live gesture drawing sessions with timed poses are helping artists improve anatomy and movement understanding.",
        platform: "YouTube"
    },
    {
        title: "Art Supply Reviews",
        description: "In-depth reviews of digital tablets, software, and traditional art supplies are helping artists make informed purchases.",
        platform: "YouTube"
    },
    {
        title: "Daily Art Challenges",
        description: "30-day art challenges with daily prompts are building consistent practice habits and growing artist communities.",
        platform: "Instagram"
    },
    {
        title: "Abstract Background Patterns",
        description: "Creating intricate, abstract patterns for use as backgrounds or standalone art pieces is trending in design circles.",
        platform: "Offline"
    },
    {
        title: "Character Redesign Trends",
        description: "Artists are reimagining popular characters in different art styles, from realistic to chibi, showcasing versatility.",
        platform: "TikTok"
    },
    {
        title: "Art Therapy Content",
        description: "Content focusing on art as mental health practice and creative expression for wellness is gaining mainstream attention.",
        platform: "Instagram"
    }
];

// Function to randomly select trends
function getRandomTrends(count = 5) {
    const shuffled = [...trendOptions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Add interactivity to the upload button
document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.getElementById('uploadButton');
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('previewContainer');
    const previewImage = document.getElementById('previewImage');
    const feedbackPanel = document.getElementById('feedbackPanel');
    const feedbackList = document.getElementById('feedbackList');
    const captionPanel = document.getElementById('captionPanel');
    const mainCaption = document.getElementById('mainCaption');
    const hashtags = document.getElementById('hashtags');
    const ideaPanel = document.getElementById('ideaPanel');
    const ideaList = document.getElementById('ideaList');
    const trendPanel = document.getElementById('trendPanel');
    const trendList = document.getElementById('trendList');
    const incomePanel = document.getElementById('incomePanel');
    
    // Trigger file input when button is clicked
    uploadButton.addEventListener('click', function() {
        fileInput.click();
    });
    
    // Handle file selection
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            // Validate file type
            const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
            const fileType = file.type.toLowerCase();
            
            if (!validTypes.includes(fileType)) {
                alert('Please upload a valid image file (PNG, JPG, or JPEG)');
                fileInput.value = '';
                return;
            }
            
            // Create FileReader to preview the image
            const reader = new FileReader();
            
            reader.onload = function(event) {
                previewImage.src = event.target.result;
                previewContainer.style.display = 'flex';
                
                // Generate and display AI feedback
                const selectedFeedback = getRandomFeedback(4);
                feedbackList.innerHTML = '';
                selectedFeedback.forEach(feedback => {
                    const li = document.createElement('li');
                    li.textContent = feedback;
                    feedbackList.appendChild(li);
                });
                feedbackPanel.style.display = 'block';
                
                // Generate and display AI caption and hashtags
                const caption = getRandomCaption();
                const selectedHashtags = getRandomHashtags(6);
                mainCaption.textContent = caption;
                hashtags.innerHTML = '';
                selectedHashtags.forEach(tag => {
                    const span = document.createElement('span');
                    span.className = 'hashtag';
                    span.textContent = tag;
                    hashtags.appendChild(span);
                });
                captionPanel.style.display = 'block';
                
                // Generate and display AI art ideas
                const selectedIdeas = getRandomArtIdeas(3);
                ideaList.innerHTML = '';
                selectedIdeas.forEach(idea => {
                    const li = document.createElement('li');
                    li.textContent = idea;
                    ideaList.appendChild(li);
                });
                ideaPanel.style.display = 'block';
                
                // Generate and display AI art trends
                const selectedTrends = getRandomTrends(5);
                trendList.innerHTML = '';
                selectedTrends.forEach(trend => {
                    const trendItem = document.createElement('div');
                    trendItem.className = 'trend-item';
                    
                    const header = document.createElement('div');
                    header.className = 'trend-header';
                    
                    const title = document.createElement('h3');
                    title.className = 'trend-item-title';
                    title.textContent = trend.title;
                    
                    const platform = document.createElement('span');
                    platform.className = `trend-platform ${trend.platform.toLowerCase()}`;
                    platform.textContent = trend.platform;
                    
                    const description = document.createElement('p');
                    description.className = 'trend-description';
                    description.textContent = trend.description;
                    
                    header.appendChild(title);
                    header.appendChild(platform);
                    trendItem.appendChild(header);
                    trendItem.appendChild(description);
                    trendList.appendChild(trendItem);
                });
                trendPanel.style.display = 'block';
                
                // Display income panel
                incomePanel.style.display = 'block';
                
                // Scroll to preview smoothly
                previewContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Scroll to feedback panel after a short delay
                setTimeout(() => {
                    feedbackPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
                
                // Scroll to caption panel after another delay
                setTimeout(() => {
                    captionPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 600);
                
                // Scroll to idea panel after another delay
                setTimeout(() => {
                    ideaPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 900);
                
                // Scroll to trend panel after another delay
                setTimeout(() => {
                    trendPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 1200);
                
                // Scroll to income panel after another delay
                setTimeout(() => {
                    incomePanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 1500);
            };
            
            reader.onerror = function() {
                alert('Error reading file. Please try again.');
                fileInput.value = '';
            };
            
            reader.readAsDataURL(file);
        }
    });
});

const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let drawing = false;
let tool = "pen";

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mouseleave", () => drawing = false);

canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!drawing) return;

  ctx.lineWidth = tool === "eraser" ? 20 : 3;
  ctx.strokeStyle = tool === "eraser" ? "#ffffff" : "#000000";
  ctx.lineCap = "round";

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

document.getElementById("pen").onclick = () => tool = "pen";
document.getElementById("eraser").onclick = () => tool = "eraser";
document.getElementById("clear").onclick = () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height);
const offlineStatus = document.getElementById("offlineStatus");

function updateOnlineStatus() {
  if (!navigator.onLine) {
    offlineStatus.style.display = "block";
  } else {
    offlineStatus.style.display = "none";
  }
}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

updateOnlineStatus();
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
      .then(() => console.log("Service Worker registered"))
      .catch(err => console.error("Service Worker error:", err));
  }