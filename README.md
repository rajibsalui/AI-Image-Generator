# AI Image Generator

A full-stack web application that uses OpenAI's DALL-E API to generate images from text prompts. Users can create, share, and browse AI-generated images in a community gallery.

## Demo Video

<!-- Alternative HTML5 video player -->
<video width="800" controls>
  <source src="./2025-09-13%2017-12-41.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Features

- 🎨 **AI Image Generation**: Generate high-quality images using OpenAI's DALL-E API
- 🖼️ **Community Gallery**: Browse and explore images created by other users
- 🔍 **Smart Search**: Search images by prompt text or author name
- 📱 **Responsive Design**: Fully responsive design that works on all devices
- ☁️ **Cloud Storage**: Images stored securely using Cloudinary
- 💾 **Download Images**: Save generated images directly to your device
- 🌙 **Modern UI**: Clean, intuitive interface built with Material-UI

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Material-UI (MUI)** - Component library for consistent design
- **Styled Components** - CSS-in-JS styling
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Lazy Load** - Optimized image loading

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **OpenAI API** - DALL-E integration for image generation
- **Cloudinary** - Cloud image storage and optimization
- **CORS** - Cross-origin resource sharing

## Project Structure

```
AI-Image-Generator/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── GenerateImageForm.jsx
│   │   │   ├── ImageCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── pages/         # Main application pages
│   │   │   ├── Home.jsx
│   │   │   └── CreatePost.jsx
│   │   ├── api/           # API service functions
│   │   └── utils/         # Utility functions and themes
│   └── public/            # Static assets
├── server/                # Node.js backend
│   ├── controllers/       # Business logic
│   │   ├── GenerateAIImage.js
│   │   └── Posts.js
│   ├── models/           # Database schemas
│   │   └── Posts.js
│   ├── routes/           # API route definitions
│   │   ├── GenerateImage.js
│   │   └── Posts.js
│   └── index.js          # Server entry point
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- OpenAI API key
- Cloudinary account

### Environment Variables

Create a `.env` file in the server directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajibsalui/AI-Image-Generator.git
   cd AI-Image-Generator
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Start the development servers**

   **Backend (from server directory):**
   ```bash
   npm start
   ```
   Server runs on http://localhost:8080

   **Frontend (from client directory):**
   ```bash
   npm start
   ```
   Client runs on http://localhost:3000

## API Endpoints

### Image Generation
- `POST /api/` - Generate image from text prompt
- `POST /api/post` - Save generated image to community gallery
- `GET /api/` - Retrieve all community images

## Usage

1. **Generate Images**: Enter a descriptive text prompt and click "Generate Image"
2. **Share with Community**: After generating an image, add your name and share it with the community
3. **Browse Gallery**: Explore images created by other users on the home page
4. **Search**: Use the search bar to find specific images by prompt or author
5. **Download**: Click on any image to download it to your device

## Key Components

### Frontend Components
- **GenerateImageForm**: Main form for creating AI images
- **ImageCard**: Displays individual images in the gallery
- **SearchBar**: Enables searching through the image collection
- **Navbar**: Navigation component

### Backend Controllers
- **GenerateAIImage**: Handles OpenAI API integration
- **Posts**: Manages CRUD operations for image posts

## Deployment

### Backend Deployment (Vercel)
The server includes a `vercel.json` configuration for easy deployment to Vercel.

### Frontend Deployment
The React app can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- OpenAI for the DALL-E API
- Cloudinary for image storage solutions
- Material-UI for the component library
- The React and Node.js communities

## Support

If you found this project helpful, please give it a ⭐ on GitHub!Generator

