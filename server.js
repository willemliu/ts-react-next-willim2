const express = require('express');
const compression = require('compression');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
console.log(process.env.NODE_ENV);
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare()
    .then(() => {
        const server = express();

        server.use(compression());

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
