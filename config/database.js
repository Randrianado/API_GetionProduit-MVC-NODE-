import mysql from 'mysql';

class Database{
    constructor(){
        this.connection=mysql.createConnection({
            host:'localhost',
            database:'Gestion_Produit',
            user:'root',
            password:''
        });
        this.connect();
    }
    connect(){
        this.connection.connect((err)=>{
            if(err){
                console.log('erreur:',err);
                return;
            }
            console.log("Connexion réussi à la base de donnée");
        })
    }
    query(query,val){
        return new Promise((resolve,reject)=>{
            this.connection.query(query,val,(err,res)=>{
                if(err){
                    return reject(err);
                }
                resolve(res);
            });
        });
    }
    close(){
        return new Promise((resolve,reject)=>{
            this.connection.end(err=>{
                if(err){
                    return reject(err);
                }
                resolve();
            });
        });
    }
}

export default new Database();