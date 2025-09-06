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
      <div class="menu-container">
        <button class="menu-btn">⋮</button>
        <div class="menu-options">
          ${post.self ? `
            <button onclick="alert('Edit post ${post.id}')">Edit</button>
            <button onclick="alert('Delete post ${post.id}')">Delete</button>
            <button onclick="alert('Pin post ${post.id}')">Pin</button>
            <button onclick="alert('Share post ${post.id}')">Share to...</button>
          ` : `
            <button onclick="alert('Do not want to see this ${post.id}')">Do not want to see this</button>
            <button onclick="alert('Report post ${post.id}')">Report</button>
            <button onclick="alert('Reply privately to post ${post.id}')">Reply privately</button>
          `}
        </div>
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

    // Menu toggle
    const menuBtn = div.querySelector('.menu-btn');
    const menuOptions = div.querySelector('.menu-options');
    menuBtn.addEventListener('click', (e)=>{
      e.stopPropagation();
      document.querySelectorAll('.menu-options').forEach(m=>{
        if(m!==menuOptions) m.style.display='none';
      });
      menuOptions.style.display = menuOptions.style.display==='block' ? 'none' : 'block';
    });

    // Close menu when clicking outside
    document.addEventListener('click', ()=>{
      menuOptions.style.display='none';
    });

    feed.appendChild(div);
  });
}
