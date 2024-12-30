import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import { userRoutes } from './routes/userRoutes.js'; 
import { setupSwagger } from './swagger.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
    allowedHeaders: ['Content-Type'], 
  })
);

setupSwagger(app);

const port = process.env.PORT || 5002;

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});