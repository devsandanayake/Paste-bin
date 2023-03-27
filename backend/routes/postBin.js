const express = require('express');

const Postbin = require('../models/postBin')
 

const router = express.Router();

//save posts

router.post('/post/save',(req,res)=>{
    let newPost = new Postbin(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post save successfully"
        });
    });
});


//get posts

router.get('/posts',(req,res)=>{
    Postbin.find().exec((err,postsDelivery)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:true,
                existingPosts:postsDelivery
            });
        
    });
});

//update Posts

router.put('/post/update/:id',(req,res)=>{
    Postbin.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
                return res.status(200).json({
                    success:"Updated Succesfully"
                    
                });
            }
        
    );
});


//delete post
router.delete('/post/delete/:id',(req,res)=>{
    Postbin.findByIdAndRemove(req.params.id).exec((err,deletedDelivery)=>{
        if(err)
            return res.status(400).json({
                massage:"Delete unsuccesful",err
            });
            return res.json({
                massege:"Delete Succesfully",deletedDelivery
                
            });
        

    });
});


module.exports = router;