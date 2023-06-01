import authService from '../service/authService.js';

const auth = new authService();

class authController {

    static async login (req, res)  {
        const {email,password} = req.body

        try{
            const login = await auth.login({email,password});

            res.status(200).send(login)
        }
        catch(err){
            res.status(401).send({message: `${err.message} login não deu certo`})
        }
    }

}

export default authController