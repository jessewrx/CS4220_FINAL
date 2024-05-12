// server.js
import express from 'express';
import { connect } from './services/db.js';
import searchRoutes from './routes/search.js';
import historyRoutes from './routes/history.js';

const PORT = 8888;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Brewery Search App');
});

app.use('/search', searchRoutes);
app.use('/history', historyRoutes);

app.listen(PORT, async () => {
    await connect();
    console.log(`Server is listening on port ${PORT}`);
});


