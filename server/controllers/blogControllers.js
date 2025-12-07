import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/blog.js';
import Comment from '../models/Comment.js';
import main from '../configs/gemini.js';

export const addBlog = async (req, res) => {
    let tempFilePath = null;
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;
        if (!title || !description || !category || !imageFile) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        tempFilePath = imageFile.path;
        const fileBuffer = fs.readFileSync(tempFilePath);
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs",
        });

        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: "auto" },
                { format: "webp" },
                { width: 1280 }
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({ title, subTitle, description, category, image, isPublished });
        
        // Clean up temporary file after successful upload
        if (tempFilePath && fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }
        
        res.status(201).json({ success: true, message: "Blog added successfully" });

    } catch (error) {
        // Clean up temporary file on error
        if (tempFilePath && fs.existsSync(tempFilePath)) {
            try {
                fs.unlinkSync(tempFilePath);
            } catch (unlinkError) {
                console.error("Error deleting temp file:", unlinkError);
            }
        }
        console.error("Error adding blog:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true });
        res.json({ success: true, blogs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.json({ success: true, blog });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.json({ success: true, message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({ success: true, message: 'Blog status updated' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const addComment = async (req, res) => {
    try {
        const { blog, name, content } = req.body;
        
        // Validate required fields
        if (!blog || !name || !content) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        
        // Validate that blog exists
        const blogExists = await Blog.findById(blog);
        if (!blogExists) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }
        
        await Comment.create({ blog, name: name.trim(), content: content.trim() });
        res.json({ success: true, message: 'Comment added for review' });
     } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getBlogComments = async (req, res) =>{
    try {
        const {blogId } = req.body;
        if (!blogId) {
            return res.status(400).json({success: false, message: "Blog ID is required"});
        }
        const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1});
        res.json({success: true, comments});
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({success: false, message: error.message});
    }
}
export const generateContent = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ success: false, message: "Prompt is required" });
        }
        const content = await main(prompt + 'Generate a blog content for this topic in simple text format');
        res.json({ success: true, content });
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({ success: false, message: error.message || "Failed to generate content" });
    }
}