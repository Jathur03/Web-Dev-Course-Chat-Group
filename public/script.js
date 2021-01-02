const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

const socket = io();

// Join chatroom
socket.emit('joinRoom', { username, room });

// Message from server
socket.on('message', message => {
    console.log(message);
});

