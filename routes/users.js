const express = require('express');
const router = express.Router();

//login page
router.get('/login', (req, res) => res.render('login'));

//register page
router.get('/register', (req, res) => res.render('register'));
//register handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    console.log(req.body)
    res.send('hello')
    let errors = []
    //checking for required field
    if(!name || !email || !password|| !password2){
        errors.push({meg:"please fill in all field"
        });
    }
    //checking if password match
    if(password !== password2){
        errors.push({meg:'password donot match'});

        //checking for password lenght
        if(password.length < 6){
            errors.push({msg:'password should be atleast 6 character'});
        }
        if (errors.length >0 ){
            res.render('register',{
                errors,
                name,
                email,
                password,
                password2
            });
        }else{
            res.send('pass');
        }
    }
    
});

module.exports = router;