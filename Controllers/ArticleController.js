import Article from "../Models/ArticleModel.js";

class ArtricleController{
    static async Create(req,res){
        const {nom,description,prix}=req.body;
        const articles=new Article(nom,description,prix);
        await articles.CreateArticle();
        if(!articles) console.error('Misy tsy mety ato eh');
        req.status(200).send("tafiditra tsara oh");
    }
    static async ReadByName(req,res){
        const {nom}=req.body;
        console.log(nom);
        const articles=await Article.findByName(nom);
        res.status(202).send(JSON.stringify(articles));
    }
    static async ReadAll(req,res){
        const articles=await Article.GetAll();
        res.status(202).send(JSON.stringify(articles));
    }
    static async Update(req,res){
            try {
                const {id}=req.params;
                const {nom,description,image,prix}=req.body;
                const results=await Article.Update(id,nom,description,image,prix);
                if(results){
                    res.status(200).send("Modification Réussi");
                }
            } catch (error) {
                console.error(error);
                if(!res.headersSent){
                    return res.status(104).send("Erreur serveur!");
                }
            }
    }
}

export default ArtricleController;