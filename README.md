# React Project Manager Frontend

[![Watch the video](https://img.youtube.com/vi/vVk9Fh9DSs0/maxresdefault.jpg)](https://youtu.be/vVk9Fh9DSs0)

A modern, responsive project management dashboard built with React, TypeScript, and Tailwind CSS. This application provides an intuitive interface for managing and tracking project data with advanced filtering and sorting capabilities.

## 🚀 Features

- **Modern Dashboard Interface**: Clean, dark-themed UI with responsive design
- **Project Data Management**: Display and manage project information including client details, project status, and timelines
- **Advanced Filtering**: Filter projects by client name, country, email, project type, and status
- **Sorting Functionality**: Sort projects by name, country, or date in ascending/descending order
- **Pagination**: Navigate through large datasets with paginated results
- **Responsive Design**: Optimized for desktop and mobile devices
- **TypeScript Support**: Full type safety and better development experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.12
- **Build Tool**: Vite 7.1.2
- **Icons**: React Icons 5.5.0
- **Linting**: ESLint with TypeScript support

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd React_project_manager_frontend
```

2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

### Linting

To run the linter:

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── Components/
│   ├── Dashbord.tsx      # Main dashboard component
│   ├── Sidebar.tsx       # Navigation sidebar
│   └── Table.tsx         # Data table with filtering and sorting
├── utils/
│   └── data.ts           # Sample project data
├── App.tsx               # Root application component
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## 🎯 Key Components

### Dashboard (`Dashbord.tsx`)

- Main layout component with sidebar and content area
- Responsive design with dark theme
- Centralized project management interface

### Table (`Table.tsx`)

- Interactive data table with project information
- Advanced filtering system for multiple fields
- Sorting functionality for various columns
- Pagination for large datasets
- Real-time search and filter capabilities

### Sidebar (`Sidebar.tsx`)

- Navigation component for future menu expansion
- Fixed positioning for consistent layout

## 📊 Data Structure

The application manages project data with the following structure:

```typescript
interface Project {
  client: string; // Client name
  country: string; // Client country
  email: string; // Client email
  project: string; // Project name/type
  status: string; // Project status (In Progress, Completed, Pending, On Hold)
  date: string; // Project date
  image: string; // Client avatar URL
}
```

## 🎨 Features in Detail

### Filtering System

- **Multi-field filtering**: Filter by client name, country, email, project type, and status
- **Real-time search**: Instant filtering as you type
- **Case-insensitive**: Search works regardless of case
- **Combined filters**: Use multiple filters simultaneously

### Sorting System

- **Column sorting**: Sort by client name, country, or date
- **Toggle direction**: Switch between ascending and descending order
- **Visual indicators**: Clear indication of current sort state

### Pagination

- **Configurable page size**: Currently set to 5 items per page
- **Navigation controls**: Easy page navigation
- **Dynamic page count**: Automatically adjusts based on filtered results

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with custom configuration for the dark theme and responsive design.

### TypeScript

Full TypeScript support with strict type checking and modern ES6+ features.

### Vite

Fast development server and optimized build process with hot module replacement.

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure your hosting service to serve the `index.html` file for all routes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Note**: This is a frontend-only application. For a complete project management solution, consider integrating with a backend API for data persistence and user authentication.
