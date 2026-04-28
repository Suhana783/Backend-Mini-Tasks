const app = require('./src/app.js');

const PORT = 5000

const server = app.listen (PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

server.on('error', (error) => {
    console.error("Server failed", error.message)
});