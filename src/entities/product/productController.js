import productModel from './productModel.js'

export const getProducts = async (req, res) => {
    const findProducts = await productModel.find({})
    return findProducts
}

export const findById = async (req, res) => {
    try {
        const { id } = req.params
        const findProduct = await productModel.findById({ _id: id })
        return findProduct
    } catch (error) {
        return
    }
}

export const createProducts = async (req, res) => {
    const errors = []
    const { name, description, image } = req.body
    if (!name) {
        errors.push({ message: 'Nome precisa ser preenchido' })
    }
    if (!description) {
        errors.push({ message: 'Descrição precisa ser preenchido' })
    }
    if (!image) {
        errors.push({ message: 'Imagem precisa ser preenchida' })
    }

    if (errors.length === 0) {
        const product = new productModel({
            name,
            description,
            image
        })
        const inserProduct = await productModel.create(product)
        return {
            status: true,
            data: inserProduct
        }
    }
    else {
        return {
            status: false,
            data: errors
        }
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { name, description, image } = req.body

    const product = {
        name,
        description,
        image
    }
    try {
        const updateProduct = await productModel.findByIdAndUpdate({ _id: id }, product)
        return updateProduct
    } catch (err) {
        return
    }

}

export const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const deleteProducts = await productModel.deleteOne({ _id: id })
        return deleteProducts
    }
    catch (error) {
        return
    }

}


