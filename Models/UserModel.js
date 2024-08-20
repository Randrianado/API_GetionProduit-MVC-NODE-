import db from '../config/database.js';
import bcrypt from 'bcryptjs';

class User{
    constructor(username,passe){
        this.username=username;
        this.passe=passe;
    }

    static async Existe(username){
        const query="SELECT username FROM users WHERE username=?";
        const user=await db.query(query,[username]);
        if(user[0]==null){
            console.log("Mbola tsisy anh");
            return false;
        }
        console.log("Ce Nom existe déja");
        return true;
    }

    //inscription
    async createUser(){
        const query="INSERT INTO users(username,passe,role,image) VALUES (?,?,'normal','623.jpg')";
        const hashPass= await bcrypt.hash(this.passe,2);
        return db.query(query,[this.username,hashPass]);
    }

    //Connexion
    async Login(){
        const query="SELECT username,passe FROM users WHERE username=?";
        const user=await db.query(query,[this.username]);
        const compare=await bcrypt.compare(this.passe,user[0].passe,(err,res)=>{
            if(err) throw err;
            if(res){
                console.log('Utilisateur Connecté');
            }else{
                console.log('Utilisateur Non Connecté');
            }
        })
        if(compare) return user;
    }

    static GetUser(){
        const query='SELECT * FROM users';
        const results=db.query(query);
        return results;
    } 

    static async DeleteUser(id){
        const query="DELETE FROM users WHERE id=?";
        return db.query(query,[id]);
    }

}

export default User;