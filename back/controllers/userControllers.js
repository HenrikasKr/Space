const User = require("../models/userModel");

exports.signupuser = async(req,res,next) => {
    
    const {username} =req.body;
    const userExist = await User.findOne({username});
    if(userExist){
        return res.status(400).json({
            success: false,
            message: "username already exists"
        })
    }
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

exports.signinuser = async(req,res,next) => {
    
    try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({
                success: false,
                message: "Username and passowrd are required"
            })
        }

        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const isMatched = await user.comparePassword(password);
        if(!isMatched){
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        };

        generateToken(user, 200, res);

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Cannot sign in, check your credentials"
        })
    }

}

const generateToken = async(user, statusCode, res) => {
    const token = await user.jwtGenerateToken();
    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + 1*60*60*1000)
    };

    res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
        success: true,
        token
    })

}

exports.signoutuser = (req,res,next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users: users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

  exports.getUsername = async (req, res) => {
    try {
      const user = await User.exists(req.query);
  
      res.status(200).json({
        status: "success",
        results: user.length,
        data: {
          user,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

  exports.getUsersByUsername = async (req, res) => {
    try {
      const user = await User.find({ username: req.body.username });
  
      res.status(200).json({
        status: "success",
        results: user.length,
        data: {
          users: user,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };

  exports.getUserById = async (req, res) => {
    try {
      const users = await User.findById(req.params.id);
      res.status(200).json({
        status: "success",
        data: {
          users: users,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };