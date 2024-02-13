const Blog = require("../model/Blog");

const createBlog = async(req,res) => {
    const { title, subTitle, body } = req.body;

    const blog = await Blog.create({
        title,
        subTitle,
        body,
    });

    res.send({blog:blog});
};

    const getBlogs = async(req,res) => {
        const blogs = await Blog.find();

        res.json({blogs:blogs});
    }

    const getBlogById = async (req,res) => {
        const blogId = req.parms.id;
        const blog = await Blog.findById(blogId);
        res.json({blog:blog});
    }

    const updateBlogById = async (req,res) => {
        const blogId = req.params.id;
        const {title, subTitle,body} = req.body;


        const updatedBlog = await Blog.findByIdAndUpdate(blogId,{
            title:title,
            subTitle:subTitle,
            body:body,
        });

        const editedBlog = await Blog.findById(blogId);

        res.json({updatedBlog:editedBlog});
    }

    const deleteBlogById = async(req,res) => {
        const blogId = req.params.id;
        const deletedBlog = await Blog.findByIdAndDelete(blogId);

        res.send({blog:deletedBlog});
    }


module.exports = {
    createBlog,getBlogs,getBlogById,updateBlogById,deleteBlogById
}
