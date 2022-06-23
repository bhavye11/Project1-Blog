const express=require('express');
const router=express.Router();
const authorController=require('../controller/authorController')
const blogController=require('../controller/blogController')
const middleWare = require("../Middleware/middleWare")

router.post('/authors', authorController.createAuthor)

router.post("/blogs", middleWare.authentication, blogController.createBlog)

router.post("/login", authorController.authorLogin)  

router.get("/blogs",  middleWare.authentication, blogController.getBlogs)  

router.put("/blogs/:blogId", middleWare.authentication, blogController.updateBlogs)

router.delete("/blogs/:blogId", middleWare.authentication, blogController.deleteByBlogId) 

router.delete("/blogs", middleWare.authentication, blogController.deleteByQueryParams)  
 

module.exports = router;