const chatForm = document.getElementById('chat-form');

const socket = io();

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let msg = e.target.elements.msg.value;

    console.log(msg);
})