import React from 'react';

const ResultsSection = () => {
  return (
    <section className="results-section">
      <div className="container">
        <h2>Results Summary</h2>
        <div className="results-content">
          <div>
            <p>Our comprehensive evaluation of multiple machine learning models shows that SVM and ANN achieved the highest accuracy, both reaching 98.99%. The performance metrics demonstrate the effectiveness of our approach for leaf classification tasks.</p>
            <p>Key insights from our results include:</p>
            <ul style={{ margin: '1rem 0 1.5rem 1.5rem' }}>
              <li>Dimensionality reduction via PCA and LDA significantly improved model performance</li>
              <li>Shape-based features were most important for classification decisions</li>
              <li>Ensemble methods outperformed single classifiers in most cases</li>
              <li>Data preprocessing played a critical role in enhancing model accuracy</li>
            </ul>
          </div>
          <table className="results-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Accuracy (%)</th>
                <th>F1 Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>SVM</strong></td>
                <td className="highlight">98.99</td>
                <td className="highlight">0.9892</td>
              </tr>
              <tr>
                <td><strong>ANN</strong></td>
                <td className="highlight">98.99</td>
                <td className="highlight">0.9892</td>
              </tr>
              <tr>
                <td>Random Forest</td>
                <td>97.47</td>
                <td>0.9731</td>
              </tr>
              <tr>
                <td>KNN</td>
                <td>96.97</td>
                <td>0.9677</td>
              </tr>
              <tr>
                <td>Decision Tree</td>
                <td>67.68</td>
                <td>0.6579</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;