import jwt from "jsonwebtoken";
const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ success: false, message: "Authorization token required" });
    }
    
    // Extract token, handling both "Bearer <token>" and just "<token>" formats
    const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
    
    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default auth;