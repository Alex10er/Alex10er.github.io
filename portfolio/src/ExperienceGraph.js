import React from 'react';
import { Gitgraph } from '@gitgraph/react';
import { Card } from 'react-bootstrap';

const ExperienceGraph = ({ experience }) => {

  const data = experience.map((exp, i) => ({
    sha1: "commit" + (i + 1),
    subject: exp.company,
    author: exp.position,
    body: `From: ${exp.from}, To: ${exp.to}, Year: ${exp.year}`,
  }));

  const renderCommitMessage = (commit) => {
    const commitData = data.find((exp) => exp.subject === commit.subject);
    return React.createElement(
      'g',
      { transform: `translate(0, ${commit.style.dot.size})` },
      React.createElement(
        'text',
        { fill: commit.style.dot.color, alignmentBaseline: 'central' },
        commit.hashAbbrev,
        ' - ',
        commit.subject
      ),
      React.createElement(
        'foreignObject',
        { width: '600', x: '100', y: '20' },
        React.createElement(
          Card,
          { style: { textAlign: 'left' } },
          React.createElement(
            Card.Body,
            null,
            React.createElement(Card.Text, null, commitData.body),
            React.createElement(Card.Text, { className: 'font-weight-bold' }, commitData.author),
            React.createElement(Card.Title, { className: 'font-italic' }, commitData.subject),
            React.createElement(Card.Text, null, 'Here you can add the text about what you did at this position.')
          )
        )
      )
    );
  };

  return (
    <Gitgraph>
      {(gitgraph) => {
        const master = gitgraph.branch("master");
        data.forEach((exp, i) => {
          master.commit({
            subject: exp.subject,
            body: exp.body,
            renderMessage: renderCommitMessage,
          });
        });
      }}
    </Gitgraph>
  );
};

export default ExperienceGraph;
