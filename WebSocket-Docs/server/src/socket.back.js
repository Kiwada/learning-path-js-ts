import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou ID:", socket.id);

    socket.on("texto_editor", (texto) => {
        console.log(texto)
    }); 
});