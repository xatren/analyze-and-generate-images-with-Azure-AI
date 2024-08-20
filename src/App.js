import React, { useState } from 'react';
import './App.css';
import { analyzeImage } from './azure-image-analysis';
import { generateImage } from './openai-image-generation';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
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

  const handleGenerate = async () => {
    setIsLoading(true);
    const imageUrl = await generateImage(inputValue);
    setGeneratedImageUrl(imageUrl);
    setIsLoading(false);
  };

  const handleReset = () => {
    setInputValue('');
    setImageFile(null);
    setImagePreviewUrl('');
    setAnalysisResult(null);
    setGeneratedImageUrl(null);
    setIsLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = generatedImageUrl;
    link.download = 'generated_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <button onClick={handleGenerate}>Generate Image</button>
        <button onClick={handleReset}>Reset</button>
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

      {generatedImageUrl && (
        <div>
          <h2>Generated Image</h2>
          <img src={generatedImageUrl} alt="Generated" />
          <button onClick={handleDownload}>Download Image</button>
        </div>
      )}
    </div>
  );
}

export default App;
