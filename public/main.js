const socket = io();

socket.on("message", () => {
    console.log('Welcome to Hyper!');
});