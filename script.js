/* ===================== 3-DOTS MENU ===================== */
const menus = document.querySelectorAll('.menu');
menus.forEach(menu => {
  menu.addEventListener('click', () => {
    alert('Post menu clicked! You can edit, delete, or share.');
  });
});

/* ===================== REACTION BUTTONS ===================== */
const reactionButtons = document.querySelectorAll('.reaction-btn');
reactionButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`You reacted with "${button.innerText}"!`);
  });
});

/* ===================== CHAT REQUEST BUTTONS ===================== */
const acceptButtons = document.querySelectorAll('.accept');
const rejectButtons = document.querySelectorAll('.reject');
const blockButtons = document.querySelectorAll('.block');

acceptButtons.forEach(btn => {
  btn.addEventListener('click', () => alert('Chat request accepted!'));
});

rejectButtons.forEach(btn => {
  btn.addEventListener('click', () => alert('Chat request rejected!'));
});

blockButtons.forEach(btn => {
  btn.addEventListener('click', () => alert('User blocked!'));
});

/* ===================== CHAT SEND BUTTON ===================== */
const sendBtn = document.getElementById('sendBtn');
const chatMessage = document.getElementById('chatMessage');

if(sendBtn && chatMessage){
  sendBtn.addEventListener('click', () => {
    const message = chatMessage.value.trim();
    if(message !== ''){
      alert(`Message sent: ${message}`);
      chatMessage.value = ''; // Clear input
    } else {
      alert('Please type a message before sending.');
    }
  });
}
