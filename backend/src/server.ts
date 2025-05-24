import express, { Request, Response } from 'express'; // Import express as default + types
import cors from 'cors';

const app = express();

app.use(cors()); // allow CORS for all origins, adjust if needed
app.use(express.json());

app.post('/api/submit', (req: Request, res: Response) => {
  const { title, description, tags, context, impact } = req.body;
  console.log('Received submission:', { title, description, tags, context, impact });
  res.status(200).json({ message: 'Submission received' });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
