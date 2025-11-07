import express from 'express';
import { Request, Response } from 'express';
import routes from './routes'; // Assuming you have a routes file to handle your routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the application!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});