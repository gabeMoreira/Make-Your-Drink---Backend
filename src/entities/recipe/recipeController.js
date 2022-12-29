import recipeModel from './recipeModel.js'

export const getRecipes = async (req, res) => {
    const findRecipes = await recipeModel.find({})
    return findRecipes
}

export const findById = async (req, res) => {
    try {
        const { id } = req.params
        const findRecipe = await recipeModel.findById({ _id: id })
        return findRecipe
    } catch (error) {
        return
    }
}

export const createRecipes = async (req, res) => {
    const errors = []
    const { name, description, ingredients } = req.body
    if (!name) {
        errors.push({ message: 'Nome precisa ser preenchido' })
    }
    if (!description) {
        errors.push({ message: 'Descrição precisa ser preenchido' })
    }
    if (ingredients.length === 0) {
        errors.push({ message: 'Ingredientes precisa ter ao menos 2 itens' })
    }

    if (errors.length === 0) {
        const recipe = new recipeModel({
            name,
            description,
            ingredients
        })
        const insertRecipe = await recipeModel.create(recipe)
        return {
            status: true,
            data: insertRecipe
        }
    }
    else {
        return {
            status: false,
            data: errors
        }
    }
}

export const updateRecipe = async (req, res) => {
    const { id } = req.params
    const { name, description, ingredients } = req.body

    const recipe = {
        name,
        description,
        ingredients
    }
    try {
        console.log(recipe)
        const updateRecipe = await recipeModel.findByIdAndUpdate({ _id: id }, recipe)
        return updateRecipe
    } catch (err) {
        return
    }

}

export const deleteRecipe = async (req, res) => {
    const { id } = req.params
    try {
        const deleteRecipe = await recipeModel.deleteOne({ _id: id })
        return deleteRecipe
    }
    catch (error) {
        return
    }

}


