import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
    const token = req.cookies.token; // Read token from cookies

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request

        // If this is a request to /auth, send user data as a response
        res.status(200).json({ message: 'Authenticated', user: req.user });
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

export const authenticateAdmin = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        if (!req.user.isAdmin) {
            return res.status(403).json({ message: 'Forbidden, not an admin' });
        }
        res.status(200).json({ message: 'Authenticated', user: req.user });
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};
