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
}

export default ArtricleController;