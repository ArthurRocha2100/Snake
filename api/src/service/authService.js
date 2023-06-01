import user from '../models/User.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sct from '../config/secret.js';

class authService {

    async login(dto){
        
        const usr = await user.findOne({
            attributes: ['_id', 'email', 'password'],
            where: {
                email: dto.email
            }
        });

        if(!usr) {
            throw new Error('deu erro aqui ó.')
        }

        const isValidPassword = await bcryptjs.compare(dto.password, usr.password);

        if(!isValidPassword) {
            throw new Error('invalid user or password')
        }

        const accssesToken = jwt.sign({
            id: usr.id,
            email: usr.email
        }, sct.secret, {
            expiresIn: 86400
        })

        return {accssesToken}

    }

}

export default authService;