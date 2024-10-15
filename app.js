const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();

app.use(cors());

require('dotenv').config();
const dbURI = process.env.MONGODB_URI
.replace('${MONGODB_USERNAME}', process.env.MONGODB_USERNAME)
.replace('${MONGODB_PASSWORD}', process.env.MONGODB_PASSWORD);

// connect to the database using the connection string
mongoose.connect(dbURI);

const loginSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const signupSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cPassword: String,
});

const Login = mongoose.model('Login', loginSchema);
const SignUp = mongoose.model('SignUp', signupSchema);
const Message = mongoose.model('Message', messageSchema);
const Contact = mongoose.model('Contact', contactSchema);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const messageSuccess = req.query.messageSuccess;
    
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/login', (req, res) => {
    const params = {};
    res.status(200).sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/about', (req, res) => {
    const messageSuccess = req.query.messageSuccess;
    res.status(200).sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/services', (req, res) => {
    const params = {};
    res.status(200).sendFile(path.join(__dirname, '/views/services.html'));
});

app.get('/feedback', (req, res) => {
    const params = {};
    res.status(200).sendFile(path.join(__dirname, '/views/feedback.html'));
});

app.post('/Login', async (req, res) => {
    try {
        const myData = new Login(req.body);
        await myData.save();
        res.status(200).send("Your details have been saved successfully");
    } catch (error) {
        console.error(error);
        res.status(400).send("Your details were not saved. Please try again!");
    }
});

app.post('/SignUp', async (req, res) => {
    try {
        const myData = new SignUp(req.body);
        await myData.save();
        res.status(200).send("Your details have been saved successfully");
    } catch (error) {
        console.error(error);
        res.status(400).send("Your details were not saved. Please try again!");
    }
});

app.post('/Message', async (req, res) => {
    try {
        const myData = new Message(req.body);
        await myData.save();
        // Redirect to the home page with a success message as a query parameter
        res.redirect('/?messageSuccess=true');
        // res.status(200).send("Your details have been saved successfully");
    } catch (error) {
        console.error(error);
        // res.status(400).send("Your details were not saved. Please try again!");
        res.redirect('/?messageSuccess=false');
    }
});

app.post('/Contact', async (req, res) => {
    try {
        const myData = new Contact(req.body);
        await myData.save();
        // Redirect to the home page with a success message as a query parameter
        res.redirect('/about?messageSuccess=true');
        // res.status(200).send("Your details have been saved successfully");
    } catch (error) {
        console.error(error);
        // res.status(400).send("Your details were not saved. Please try again!");
        res.redirect('/about?messageSuccess=false');
    }
});

app.listen(22, () => {
    console.log(`Server listening at http://localhost:22`);
});
