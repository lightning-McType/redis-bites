import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	res.send('Hello World');
});

export default router;
