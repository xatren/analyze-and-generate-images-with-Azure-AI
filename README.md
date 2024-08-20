# Image Analysis and Generation with Azure and OpenAI

## Overview

This project is a React-based web application that allows users to analyze and generate images using Azure AI Vision and OpenAI's DALL·E 3 model. Users can upload an image or provide a URL for analysis, and generate images based on text prompts.

## Features

- **Image Analysis:** Analyze images to get detailed descriptions, categories, and colors using Azure AI Vision.
- **Image Generation:** Generate images based on text prompts using OpenAI's DALL·E 3 model.
- **Image Download:** Download the generated images directly to your device.
- **Reset Functionality:** Easily reset the application to start a new analysis or generation.

## Technologies Used

- **React:** Frontend JavaScript library for building user interfaces.
- **Azure AI Vision:** Service used for image analysis.
- **OpenAI DALL·E 3:** Model used for generating images from text prompts.
- **GitHub Actions:** Used for Continuous Integration/Continuous Deployment (CI/CD) to Azure Static Web Apps.

## Setup and Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **Azure Account:** To create Azure AI services.
- **OpenAI Account:** To access OpenAI API.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xatren/analyze-and-generate-images-with-Azure-AI.git
   cd analyze-and-generate-images-with-Azure-AI
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following environment variables:
   ```plaintext
   REACT_APP_AZURE_VISION_ENDPOINT=your-azure-vision-endpoint
   REACT_APP_AZURE_VISION_KEY=your-azure-vision-key
   REACT_APP_OPENAI_API_KEY=your-openai-api-key
   ```

### Running the Application

To run the application locally:

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Analyze an Image:**
   - Upload an image or provide an image URL.
   - Click "Analyze Image" to get a detailed analysis of the image.

2. **Generate an Image:**
   - Enter a text prompt.
   - Click "Generate Image" to create a new image based on the prompt.
   - Download the generated image using the "Download Image" button.

3. **Reset:**
   - Click the "Reset" button to clear the current session and start fresh.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
