# blog-website

Blog Platform
This simple blogging platform is built using Node.js, Express, and EJS. It allows for the creation, viewing, editing, and deletion of blog posts across various categories.

Features

Multiple categories for blogs (Health, Tech, Travel)
Create new blog posts
Edit existing blog posts
Delete blog posts

Installation
Ensure Node.js is installed on your system.

Clone the repository: git clone https://github.com/ishantkamboj1/blog-website

Navigate to the project directory: cd blog-website

Install dependencies: npm install

Run the application with the following command: npm start

The server starts on port 3000 or on a port defined in your environment variables.


Directory Structure
public/ - Static files (stylesheets, images)
views/ - EJS templates for HTML rendering

Endpoints
GET / - Home page with all blogs
GET /health, /tech, /travel - Category-specific pages
GET /createPost - Page to create a new blog post
POST /create - Submit a new blog post
GET /blogs/:blogId - View a specific blog post
GET /edit/:blogId - Edit a specific blog post
POST /update/:blogId - Update a specific blog post
POST /delete/:blogId - Delete a specific blog post
