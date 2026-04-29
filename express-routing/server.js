const app = require('./src/app.js');

const PORT = 3000

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

server.on('error', (error) => {
    console.log("server failed to run", error.message)
});