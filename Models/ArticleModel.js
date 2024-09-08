import db from '../config/database.js';

class Article{
    constructor(nom,description,prix){
        this.nom=nom;
        this.description=description;
        this.prix=prix;
    }

    //Insertion des articles
    async CreateArticle(){
        const query="INSERT INTO articles(nom,description,image,prix) VALUES (?,?,'1.jpg',?)";
        return db.query(query,[this.nom,this.description,this.prix]);
    }

    //Recherche des articles selon son nom
    static async findByName(name){
        const query="SELECT nom,description,image,prix FROM articles WHERE nom=?";
        const results=await db.query(query,[name]);
        return results[0];
    }

    //Prend tous les articles
    static async GetAll(){
        const query="SELECT * FROM articles";
        const results= await db.query(query);
        return results;
    }

    //Mise à jour des Articles
    static async Update(id,nvNom,nvDescription,nvPrix){
        const query="UPDATE articles SET nom=?,description=?,prix=? WHERE id=?";
        return db.query(query,[nvNom,nvDescription,nvPrix,id]);
    }

    //efface les articles
    static async Delete(name){
        const query="DELETE FROM articles WHERE nom=?";
        return db.query(query,[name]);
    }
}


export default Article;