const postInput = document.getElementById("postInput");
const postBtn = document.getElementById("postBtn");
const feed = document.getElementById("feed");

let posts = [
  {id:1, username:'Naledi', text:'Today I answered a question in class', self:false, likes:2},
  {id:2, username:'You', text:'I feel empowered!', self:true, likes:1}
];

// Enable/disable POST button
postInput.addEventListener('input', () => {
  postBtn.disabled = postInput.value.trim() === '';
});

// Create new post
postBtn.addEventListener('click', () => {
  const text = postInput.value.trim();
  if(text){
    const newPost = {id: Date.now(), username:'You', text, self:true, likes:0};
    posts.unshift(newPost);
    renderFeed();
    postInput.value = '';
    postBtn.disabled = true;
  }
});

// Render feed
function renderFeed(){
  feed.innerHTML = '';
  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = `post-bubble ${post.self ? 'self' : 'other'}`;
    div.innerHTML = `
      <div class="username">${post.username}</div>
      <div class="text">${post.text}</div>
      <div class="footer">
        <span class="like-btn">❤️ ${post.likes}</span>
        <span>${new Date(post.id).toLocaleTimeString()}</span>
      </div>
    `;
    // Like button animation
    const likeBtn = div.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => {
      post.likes++;
      likeBtn.classList.add('heart-pop');
      setTimeout(()=>likeBtn.classList.remove('heart-pop'),300);
      likeBtn.textContent = `❤️ ${post.likes}`;
    });
    feed.appendChild(div);
  });
}

// Focus composer (middle nav button)
function focusComposer(){
  postInput.focus();
}

// Logo click
function goHome(){
  alert('Going Home!');
}

// Initial render
renderFeed();
