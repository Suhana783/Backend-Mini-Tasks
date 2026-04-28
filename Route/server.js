const app = require('./src/app.js');

const PORT = 5000;

const server = app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});

server.on('error', (error) => {
    console.error("Server failed to start:", error.message)
});