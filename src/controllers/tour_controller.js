import tourModel from "../models/tour.js"
import { v4 as uuidv4 } from 'uuid'
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs-extra'
// Punto 1
const getAllToursController = async (req, res) => {
    try {
        // Punto 2
        const tours = await tourModel.getAllToursModel()
        // Punto 3
        res.status(200).json(tours)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTourController = async (req, res) => {
    const newTourData = {
        id: uuidv4(),
        ...req.body
    }
    const cloudinaryResponse= await cloudinary.uploader.upload(req.files.imagen.tempFilePath,{folder:'tours'})
    newTourData.imagen=cloudinaryResponse.secure_url
    newTourData.public_id=cloudinaryResponse.public_id
    const tour = await tourModel.createTourModel(newTourData)

    await fs.unlink(req.files.imagen.tempFilePath)
    res.status(201).json(tour)
}

const getTourByIdController = async (req, res) => {
    const { id } = req.params
    try {
        const tour = await tourModel.getTourByIdModel(id)
        const status = tour.error ? 404 : 200
        res.status(status).json(tour)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTourController = async (req, res) => {
    const { id } = req.params
    try {
        const tour = await tourModel.updateTourModel(id, req.body)
        const status = tour.error ? 404 : 200
        res.status(status).json(tour)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const deleteTourController = async (req, res) => {
    const { id } = req.params
    try {
        const tourFind = await tourModel.getTourByIdModel(id)
        cloudinary.uploader.destroy(tourFind.public_id)
        const tour = await tourModel.deleteTourModel(id)
        const status = tour.error ? 404 : 200
        res.status(status).json(tour)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
export {
    getAllToursController,
    createTourController,
    getTourByIdController,
    updateTourController,
    deleteTourController
}
