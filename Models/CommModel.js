import db from '../config/database.js';

class Commentaire{
    constructor(contenu,recepteur,envoyeur){
        this.contenu=contenu;
        this.recepteur=recepteur;
        this.envoyeur=envoyeur;
    }

    async createComm(){
        const query="INSERT INTO commentaires(`id_Article`,`id_Users`,commentaires) VALUES (?,?,?)";
        return db.query(query,[this.recepteur,this.envoyeur,this.contenu]);
    }

    static async GetComm(id_Article){
        const query="SELECT id_Users,commentaires FROM commentaires WHERE id_Article=?";
        const results= await db.query(query,[id_Article]);
        return results[0];
    }

    static async UpdateComm(id_Article,nvCommentaire){
        const query="UPDATE commentaires SET commentaires=? WHERE id_Article=?";
        return db.query(query,[nvCommentaire,id_Article]);
    }

    static async DeleteComm(id_Article){
        const query="DELETE FROM commentaires WHERE id_Article=?";
        return db.query(query,[id_Article]);
    }
}

export default Commentaire;