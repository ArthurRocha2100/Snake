import user from '../models/User.js';
import jwt from 'jsonwebtoken';
import secret from '../config/secret.js';

class authService {

    async login(dto){
        
        const usr = await user.findOne({email: dto.email});

        if(!usr) {
            throw new Error('user not found');
        } 

        if(dto.password != usr.password) {
            throw new Error(`invalid user or password`)
        }

        const accssesToken = jwt.sign({
            name: usr.name,
            email: usr.email
        }, secret,{
            expiresIn:'24H'
        })

        return {accssesToken}

    }

}

export default authService;