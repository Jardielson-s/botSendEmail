import { Response, Request } from 'express';
import User from '../models/User';

class UserController{
    
    async sendEmail(req: Request, res: Response): Promise<Response>{
        
       
        const user = await User.find();
        console.log(user);

        return res.status(200).json({status: 'processing', key: '', message:'Your resquest will be process, use key for check status of message' });
    
    }
}

const UserContol = new UserController();

export default UserContol;

