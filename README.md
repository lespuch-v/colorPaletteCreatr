# Color Generator Application

This is a web application that generates a specific color based on user input. The colors are generated using OpenAI's API. The application has a **Node.js** backend server and **Angular** for the frontend.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [License](#license)

## Project Overview
This project allows users to input a description, and it uses the OpenAI API to generate a corresponding color code. The frontend is developed with Angular, while the backend is developed in Node.js, handling the API requests to OpenAI.

## Features
- Accepts text input from users to describe a color.
- Fetches a generated color from OpenAI's API based on the input.
- Displays the generated color on the frontend.
- Simple and intuitive interface.

## Technologies Used
- **Frontend**: Angular
- **Backend**: Node.js
- **API**: OpenAI API for color generation

## Getting Started

### Prerequisites
- Node.js installed on your machine
- Angular CLI installed globally (`npm install -g @angular/cli`)
- An OpenAI API key

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/color-generator-app.git
    cd color-generator-app
    ```

2. Install dependencies:

    ```bash
    # For backend
    cd server
    npm install
    
    # For frontend
    cd ../frontend
    npm install
    ```

### Environment Variables

You will need to set up an `.env` file in the root directory of the `server` to provide your OpenAI API key. Create a `.env` file and add your API key like so:

```plaintext
API_KEY=your-openai-api-key-here
