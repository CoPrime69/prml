import React from 'react';
import { Github, FileText, Video } from 'lucide-react';

// Import the images
import leafLogo from '../images/download.jpeg';
import githubLogo from '../images/images.png';
import youtubeLogo from '../images/youtube.jpeg';

const ResourcesSection = () => {
  return (
    <section className="resources-section">
      <div className="container">
        <h2>Project Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-card-img">
              <img src={githubLogo} alt="GitHub Repository" />
            </div>
            <div className="resource-card-content">
              <h3>GitHub Repository</h3>
              <p>Access our complete codebase including all models, preprocessing steps, and evaluation metrics.</p>
              <a href="https://github.com/Nayan-Kute21/PRML_project.git" className="btn" target="_blank" rel="noreferrer">
                <Github size={16} />
                View Repository
              </a>
            </div>
          </div>
          
          <div className="resource-card">
            <div className="resource-card-img">
              <img src={leafLogo} alt="Project Report" />
            </div>
            <div className="resource-card-content">
              <h3>Project Report</h3>
              <p>Download our detailed report containing methodology, results, and analysis of the leaf classification challenge.</p>
              <a href="https://drive.google.com/file/d/1NmRkm3PBAZPqLC3dA39l3SFD7wQ07XLN/view" className="btn" target="_blank" rel="noreferrer">
                <FileText size={16} />
                View Report
              </a>
            </div>
          </div>
          
          <div className="resource-card">
            <div className="resource-card-img">
              <img src={youtubeLogo} alt="Project Video" />
            </div>
            <div className="resource-card-content">
              <h3>Project Video</h3>
              <p>Watch our project demonstration explaining the methods and results of the leaf classification models.</p>
              <a href="https://youtu.be/Q8lh6hULzW8" className="btn" target="_blank" rel="noreferrer">
                <Video size={16} />
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;