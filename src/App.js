import React, { useState } from 'react';
import './App.css';
import { analyzeImage } from './azure-image-analysis';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    setIsLoading(true);
    const result = await analyzeImage(inputValue || null, imageFile || null);
    setAnalysisResult(result);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>Image Analysis and Generation</h1>

      <input
        type="text"
        placeholder="Enter image URL or prompt"
        value={inputValue}
        onChange={handleChange}
      />
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />
      <div>
        <button onClick={handleAnalyze}>Analyze Image</button>
      </div>

      {imagePreviewUrl && (
        <div>
          <img src={imagePreviewUrl} alt="Preview" />
        </div>
      )}

      {isLoading && (
        <div className="loader"></div>
      )}

      {analysisResult && (
        <div className="description-container">
          <h2 className="description-title">Analysis Results</h2>
          <p className="description-text">
            Description: {analysisResult.description.captions[0].text}
          </p>
          {inputValue && <img src={inputValue} alt="Analyzed" />}
        </div>
      )}
    </div>
  );
}

export default App;
