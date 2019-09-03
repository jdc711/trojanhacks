const express = require('express');
const router = express.Router();

// TODO: Import Tip model
const Tip = require('../models/Tip');

const moment = require('moment');

router.get('/',(req,res)=>{
    res.render("homeoriginal");
});


// TODO: Get all tips in the database
router.post('/search/teacher', (req, res) => {
    const teacherspecify=req.body.teacherspecify;
    Tip.find({author:teacherspecify}, null, { sort: { created: -1 } }, function (err, tips) {
        if (err) {
            res.render('error');
        } else {
            res.render('home', {
                tips: tips,
                moment: moment,
                content: req.flash('content') || '',
                author: req.flash('author') || '',
                error: req.flash('errors')
            });
        }
    });
});

// TODO: View a single tip
router.get('/tip/:id', (req, res) => {
    Tip.findById(req.params.id, function (err, tip) {
        if (err) {
            // Display error page if we can't find Tip
            res.render('error');
        } else {
            // Display Tip, pass moment a time format library
            res.render('tip', {
                tip: tip,
                moment: moment
            });
        }
    });
});

// TODO: Create a new tip
router.post('/tip/new', (req, res) => {
    //return res.send('new tip');
    const content = req.body.content;
    const author = req.body.author;

    let error = false;

    //validate use input
    if (content === undefined || content.trim() === '') {
        req.flash('errors', 'Content can not be empty');
        error = true;
    }

    if (author === undefined || author.trim() === '') {
        req.flash('errors', 'Author can not be empty');
        error = true;
    }

    if (content.length > 300) {
        req.flash('errors', 'Content must be less than 300 characters');
        error = true;
    }

    //if there is an error, redirect back to the home page
    if (error) {
        req.flash('content', content);
        req.flash('author', author);
        res.redirect('/');
        return;
    }
    const tip = new Tip({
        content: content,
        author: author
    });

    tip.save(function (err) {
        if (err) {
            return res.render('error');
        }

        return res.redirect('/');
    });
});

module.exports = router;