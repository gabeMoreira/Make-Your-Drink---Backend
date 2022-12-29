import express from 'express'
const Router = express.Router()
import recipeModel from '../entities/recipe/recipeModel.js'

Router.route('/').get( async (req, res) => {
    let ingredientsArray = []
    if(req.query.ingredientsArray) ingredientsArray = JSON.parse(req.query.ingredientsArray)
    
    ingredientsArray = ingredientsArray.map(ingredientsArray => ingredientsArray.toLowerCase())

    const getRecipes = await recipeModel.find({
        "ingredients": {
            "$in": ingredientsArray
          }
    })
    if(getRecipes.length != 0) res.status(200).json({message: "Receitas encontradas", data: getRecipes})
    else res.status(200).json({message: "Nenhuma receita encontrada com esses ingredientes"})
})

export default Router