const Router = require("express");
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware');
const Lection = require("../models/Lection");

router.post('/registration',
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12}),
        check('username', 'you need fill all of input')
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        }
        const {email, password, username} = req.body
        const candidate = await User.findOne({email})
        if(candidate) {
            return res.status(400).json({message: `User with email ${email} already exist`})
        }
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({email, password: hashPassword, username})
        user.save()
        res.json({message: "User was created"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})  


router.post('/login',
    async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password"})
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                username: user.username,
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    money: user.money
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                mymail: user.email,
                money: user.money,
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.post('/user',
    async (req, res) => {
        try {
            const {email} = req.body
            const user = await User.findOne({email})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                openTests: user.openTests,
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.post('/NewLection',
    
    async (req, res) => {
    try {
        const {h2, main, test} = req.body
        const candidate = await Lection.findOne({h2})
        if(candidate) {
            return res.status(400).json({message: `Lection with name ${h2} already exist`})
        }
        const lec = new Lection({name: h2, lection: main, test: test})
        await lec.save()
        res.json({message: "Lection was created"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.post('/lections',
    
    async (req, res) => {
    try {
        const {openTests} = req.body
        let openLec = []
        let lec = {}
        if (!openTests) return
        for (let i of openTests) {
            lec = await Lection.findOne({name: i})
            openLec = [...openLec, lec]
         }
        res.json({openLec})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.post('/addLection',
    [
        check('email', "Uncorrect email").isEmail(),
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        }
        const {email, lection} = req.body
        const user = await User.findOne({email})
        await User.updateOne({email}, {openTests: [...user.openTests, lection]})
        res.json({message: "Lection was added"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})  

router.post('/addMoney',
    [
        check('email', "Uncorrect email").isEmail(),
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        }
        const {email, money} = req.body
        const user = await User.findOne({email})
        await User.updateOne({email}, {money: parseInt(user.money) + parseInt(money)})
        res.json({message: "Money was added!"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})  



module.exports = router

//await User.updateOne({email}, {openTests: [1, 2, 3]})