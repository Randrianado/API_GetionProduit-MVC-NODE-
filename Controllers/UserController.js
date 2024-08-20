import User from "../Models/UserModel.js";

class UserController{
    static async createUser(req,res){
        const {username,passe}=req.body;
        const user=new User(username,passe);
        const jj= await User.Existe(username);
        if(!jj){
            await user.createUser();
            res.status(201).send("Utilisateur crée");
        }
        res.status(205).send("Efa misy anh!");
    }
    // static async Existe(req,res){
    //     const {username}=req.body;
    //     await User.Existe(username);
    //     res.status(205).send("Efa misy anh!");
    // }
    static async Connect(req,res){
        const {username,passe}=req.body;
        const user=new User(username,passe);
        await user.Login();
        if(!user) return res.status(404).send("Mot de passe ou Email Incorrect");
        res.status(404).send("Mety eh");
    }
    static async getAll(req,res){
        const users=await User.GetUser();
        res.status(200).send(JSON.stringify(users));
    }

    static async deleteUser(req,res){
        const {id}=req.params;
        await User.DeleteUser(id);
        res.send('Utilisateur effacé');
    }
}

export default UserController;