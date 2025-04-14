import React from 'react';
import { Linkedin } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      initials: 'AN',
      name: 'Aditya Nerlekar',
      id: 'B23CS1086',
      contribution: 'SVM implementation, model evaluation and results visualization',
      linkedin: 'http://www.linkedin.com/in/aditya-nerlekar-b123862a5'
    },
    {
      initials: 'I',
      name: 'Ishan',
      id: 'B23CS1020',
      contribution: 'Data preprocessing, KNN model, cross-validation setup',
      linkedin: 'https://www.linkedin.com/in/ishan-bhambare-874591285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      initials: 'NK',
      name: 'Nayan Kute',
      id: 'B23CS1041',
      contribution: 'Random Forest and Decision Tree implementation, performance metrics',
      linkedin: 'https://www.linkedin.com/in/nayan-kute-a1b998284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      initials: 'NM',
      name: 'Neer Modi',
      id: 'B23CS1043',
      contribution: 'Exploratory data analysis, dimensionality reduction, visualizations',
      linkedin: 'https://www.linkedin.com/in/neer-modi-1445a028a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      initials: 'PS',
      name: 'Prakhar Srivastava',
      id: 'B23CM1056',
      contribution: 'ANN development and optimization, Flask web application integration',
      linkedin: 'https://www.linkedin.com/in/prakhar-srivastava-b539172ab/'
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-avatar">{member.initials}</div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.id}</p>
                <p>{member.contribution}</p>
                <a href={member.linkedin} className="social-link" target="_blank" rel="noreferrer">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;