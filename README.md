# Tugas-5 Movie App

A simple movie application built using React. Users can view trending movies and search for specific titles, providing an enjoyable experience for movie enthusiasts.

## Features and Functionality

- **Trending Movies**: Displays a list of trending movies fetched from the API.
- **Search Functionality**: Users can search for movies using a search bar.
- **Loading Indicator**: A loading spinner is displayed while data is being fetched.
- **Responsive Design**: The application is designed to work on various screen sizes, providing an excellent user experience on both mobile and desktop devices.
- **User Login and Signup**: Modal pop-ups for user authentication.

## Technology Stack

- **Frontend**: React
- **Styling**: Tailwind CSS
- **Slider**: React Slick for movie carousel
- **API Communication**: Axios
- **State Management**: React Hooks (useState, useEffect)

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bimapopo345/Tugas-5_Movie-App-React-React_Bima-Prawang-Saputra_SinauCoding_FullStack-Web-Dev.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Tugas-5_Movie-App-React-React_Bima-Prawang-Saputra_SinauCoding_FullStack-Web-Dev
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage Guide

- Upon loading, the application fetches and displays trending movies.
- Use the search bar located in the navigation to search for a specific movie title.
- If no movies are found, a message will be displayed informing the user.

## API Documentation

This application uses the Movie Database API to fetch movie data. The following API endpoints are used:

- **Fetch Trending Movies**: 
  - `GET https://api.themoviedb.org/3/trending/movie/week`
  
- **Search Movies**: 
  - `GET https://api.themoviedb.org/3/search/movie?query={query}`

Make sure to replace the `Authorization` header in `src/services/api.js` with your own API key. 

## Contributing Guidelines

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Create a pull request.

## License Information

This project does not currently have a specified license. Please check with the repository owner for further information.

## Contact/Support Information

For any questions or support, please reach out through the GitHub repository or contact the project maintainer at [bimapopo345](https://github.com/bimapopo345).
