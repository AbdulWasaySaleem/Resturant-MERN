import Product from "../Model/Product.js"

export const getAllProductController = async(req,res)=>{
  try {
    //req.query = {category:"pizza"}, {category:"burger"}
    const products = await Product.find(req.query)
    return res.status(200).json(products)
  } catch (error) {
    console.log(error)
  }
}

//get one product bassis of id 
export const getOneProductController = async(req,res)=>{
  try {
    const product = req.params.id
    if(!product) return res.status(500).json({msg:"No Product with such id!"})
    return res.status(200).json(product)
  } catch (error) {
    console.log(error)
  }
}

//creating of product
export const createProductController = async(req,res)=>{
  try {
      const newProduct = await Product.create({...req.body})
      return res.status(201).json(newProduct)
  } catch (error) {
    console.log(error)
  }
}