import express from "express";
import User from "../models/userModel.js";

//create user...
export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      return res.status(404).json({ msg: "product data not found" });
    }
    const saveUser = await userData.save();
    res.status(200).json({
      msg: "Product created successfully",
      saveUser,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//get all user..

export const getAllUser = async (req, res) => {
  try {
    const getUserData = await User.find();
    if (!getUserData) {
      return res.status(404).json({ msg: "Product data not found" });
    }

    res.status(200).json({
      msg: "Data fetched successfully",
      getUserData,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//Update User...

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const isUserAvailable = await User.findById(id);
    if (!isUserAvailable) {
      return res.status(404).json({ msg: "User not found by this id" });
    }
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      msg: "Product updated successfully",
      updateUser,
    });
  } catch (error) {
    res.status(501).json({ error: error });
  }
};

//delete User....

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const isUserAvailable = await User.findById(id);
    if (!isUserAvailable) {
      return res.status(404).json({ msg: "Product not found by this id" });
    }

    await User.findByIdAndDelete(id, req.body);
    res.status(200).json({
      msg: "Product Deleted successfully",
    });
  } catch (error) {
    res.status(501).json({ error: error });
  }
};

//get singleUser....
export const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const isUserAvailable = await User.findById(id);

    if (!isUserAvailable) {
      return res.status(404).json({ msg: "User does not exist of this id" });
    }

    res.status(200).json({
      msg: "Single User fetched",
      isUserAvailable,
    });
  } catch (error) {
    res.status(501).json({ error: error });
  }
};
