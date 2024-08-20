import axios from 'axios';

const endpoint = process.env.REACT_APP_AZURE_ENDPOINT;
const apiKey = process.env.REACT_APP_AZURE_KEY;

export const analyzeImage = async (imageUrl = null, imageFile = null) => {
  const headers = {
    'Ocp-Apim-Subscription-Key': apiKey,
  };

  let body = null;

  if (imageUrl) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify({ url: imageUrl });
  } else if (imageFile) {
    headers['Content-Type'] = 'application/octet-stream';
    body = await fileToBlob(imageFile);
  }

  const params = {
    visualFeatures: 'Categories,Description,Color',
  };

  try {
    const response = await axios.post(
      `${endpoint}/vision/v3.1/analyze`,
      body,
      { headers, params }
    );
    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error.response ? error.response.data : error.message);
    return null;
  }
};

const fileToBlob = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(new Blob([reader.result], { type: file.type }));
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};
