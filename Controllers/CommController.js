import Commentaire from "../Models/CommModel.js";

class CommentController{
    static async Create(req,res){
        const {id_Article,id_Users,commentaires}=req.body;
        const comm=new Commentaire(commentaires,id_Article,id_Users);
        console.log(commentaires);
        console.log(id_Article);
        console.log(id_Users);
        await  comm.createComm();
        if(!comm) return res.status(404).send("Commenatire Non envoyé");
        res.status(404).send("Commenatire envoyé");
    }
    
    static async Update(req,res){
        const {id}=req.params;
        const {commentaires}=req.body;
        const mm=await Commentaire.UpdateComm(id,commentaires);
        if(!mm) return res.status(404).send("Commenatire Non Modifié");
        res.status(404).send("Commenatire Modifié");
    }

    static async Read(req,res){
        const {id}=req.params;
        const comms=await Commentaire.GetComm(id);
        res.status(202).send(JSON.stringify(comms));
    }
    static async Delete(req,res){
        const {id}=req.params;
        await Commentaire.DeleteComm(id);
        res.send('Commentaire effacé');
    }
}

export default CommentController;