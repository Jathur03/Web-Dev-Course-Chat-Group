const chatForm = document.getElementById('chat-form');

const socket = io();

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let msg = e.target.elements.msg.value;

    socket.emit('chatMessage', msg);
});

socket.on('message', message => {
    console.log(message);
    outputMessage(message);
});

function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="text-warning">${message}</p>`
    document.querySelector('.chat-messages').appendChild(div);
};