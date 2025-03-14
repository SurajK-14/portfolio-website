# Academic Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS to showcase academic research, publications, projects, and technical skills.

## Features

- **Interactive UI**: Smooth scrolling and section transitions with intersection observer
- **Research Showcase**: Dedicated section for highlighting research experience and areas of focus
- **Publications**: Display academic publications with detailed information
- **Project Portfolio**: Grid layout showcasing notable projects with technologies used
- **Skills Overview**: Comprehensive display of technical skills and research expertise
- **GitHub Integration**: Real-time GitHub activity visualization
- **Contact Section**: Professional contact information and social links

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **GitHub Integration**: Octokit REST API
- **HTTP Client**: Axios
- **Development Tools**: ESLint, PostCSS

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── assets/         # Static assets
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Public assets
└── index.html          # HTML template
```

## Customization

- Update content in `App.jsx` to personalize your portfolio
- Modify styles in `index.css` and component files
- Configure Tailwind in `tailwind.config.js`

## License

MIT License

## Author

Suraj Kumar
- Research Assistant at AMHR Lab
- Computer Science Student
