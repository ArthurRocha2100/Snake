import user from '../models/User.js'

class userController {

    static userList = async (req, res) => {
        try{
            const usersFound = await user.find();
            res.status(200).json(usersFound)
        } catch(err) {
            res.status(500).json(err.message)
        }
    }

    static listUserById = async (req, res) => {
        const id = req.params.id;

        try{
            const userFound = await user.findById(id)
            res.status(200).json(userFound)
        } catch(err) {
            res.status(500).send(err.message)
        }
    }

    static addUser = async (req, res) => {
        let usr = new user(req.body);
        try{
            const newUser = await usr.save();
            res.status(200).json(newUser)
        } catch(err) {
            res.status(500).send(err.message)
        }
    }

    static userUpdate = async (req, res) => {
        const id = req.params.id;
        try{
            const atualizedUser = await user.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).json(atualizedUser)
        } catch(err) {
            res.status(500).send(err.message)
        }
    }


    static userDelete = async (req, res) => {
        const id = req.params.id;

        try{
            const userDeleted = await user.findByIdAndDelete(id)
            res.status(200)
        } catch(err) {
            res.status(500).send(err.message)
        }
    }

    static checkUserExsistsByEmail = async (req, res) => {
        const email = req.body.email;

        try {
            const userExists = await user.findOne({email: email});
            if(userExists){
                res.status(200).json(userExists)
            }
            else {
                res.status(500).send('user not exsists')
            }
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
}

export default userController