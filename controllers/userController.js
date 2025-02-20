const userModel = require("../models/userModel");
//login call back
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
      if (!user) {
          return res.status(404).send("not found");
      }
    //         {
    //     success: false,
    //     message: "user not find",
    //   });
    // }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "user registered successfully",
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error while registering",
      error: error.message,
    });
  }
};
module.exports = { loginController, registerController };
