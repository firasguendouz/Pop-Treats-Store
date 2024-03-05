const isAuthenticated = (req, res, next) => {
    // Add your authentication logic here
    // Check if the user is authenticated
    // For example, using Passport.js or JSON Web Tokens (JWT)
    // If authenticated, call next(); otherwise, send a 401 response
    next();
  };
  
  module.exports = isAuthenticated;
  