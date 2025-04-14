import React from 'react';

const ProjectOverview = () => {
  return (
    <section className="project-overview">
      <div className="container">
        <h2>Project Overview</h2>
        <div className="overview-content">
          <div className="overview-text">
            <p>This project addresses the challenge of plant species identification using machine learning techniques applied to leaf characteristics. Traditional plant identification approaches rely on expert knowledge and are often time-consuming and subjective. Our data-driven approach leverages both structured morphological features and numerical representations of leaf characteristics to create accurate classification models.</p>
            <p>We explored a range of classical machine learning algorithms including K-Nearest Neighbors (KNN), Support Vector Machine (SVM), Decision Tree, Random Forest, and Artificial Neural Networks (ANN). All experiments were conducted on the publicly available Leaf Classification dataset from Kaggle, which includes 990 samples representing 99 different plant species.</p>
            <p>Our work demonstrates the viability of classical machine learning techniques in biological classification tasks and highlights the importance of proper data preprocessing, dimensionality reduction, and model selection. The top-performing models (SVM and ANN) achieved classification accuracies of 98.99%, showcasing the effectiveness of our approach.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;