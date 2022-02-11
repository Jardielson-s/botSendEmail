import express from 'express';
import UserContol from '../Controllers/UserController';

const router = express();

router.get("/api/sendMessage",UserContol.sendEmail);

export default router;