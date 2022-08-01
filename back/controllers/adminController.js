const Admin = require("../models/adminModel");

exports.signup = async(req,res,next) => {
    
    const {username} =req.body;
    const userExist = await Admin.findOne({username});
    if(userExist){
        return res.status(400).json({
            success: false,
            message: "username already exists"
        })
    }
    try {
        const admin = await Admin.create(req.body);
        res.status(201).json({
            success: true,
            admin
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

exports.signin = async(req,res,next) => {
    
    try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({
                success: false,
                message: "Username and passowrd are required"
            })
        }

        const user = await Admin.findOne({username});
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

exports.signout = (req,res,next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
}