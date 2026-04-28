const app = require('./src/app.js');

PORT = 3000;

const server = app.listen( PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

server.on('error', (error) => {
    console.error("Server failed to start", error.message)
});