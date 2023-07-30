import React from 'react';
import { Gitgraph } from '@gitgraph/react';
import { Card } from 'react-bootstrap';

const ExperienceGraph = ({ experience }) => {
  const data = experience.map((exp, i) => ({
    sha1: "commit" + (i + 1),
    subject: exp.company,
    author: exp.position,
    timeRange: exp.timeRange,
    message: exp.message,
    branch: exp.branch,
    sourceBranch: exp.sourceBranch,
    merge: exp.merge,
  }));

  const renderCommitMessage = (commit) => {
    const commitData = data.find((exp) => exp.subject === commit.subject);

    // Check if commitData exists before accessing its properties
    if (!commitData) return null;

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
            React.createElement(Card.Text, null, commitData.timeRange),
            React.createElement(Card.Title, { className: 'font-weight-bold' }, commitData.author),
            React.createElement(Card.Text, { className: 'font-italic' }, commitData.subject),
            React.createElement(Card.Text, null, commitData.message)
          )
        )
      )
    );
  };

  return (
    <Gitgraph>
      {(gitgraph) => {
        const branches = {};
        data.forEach((exp) => {
          // Check if source branch exists before creating a branch from it
          if (exp.sourceBranch && branches[exp.sourceBranch]) {
            branches[exp.branch] = branches[exp.sourceBranch].branch(exp.branch);
          } else {
            branches[exp.branch] = gitgraph.branch(exp.branch);
          }

          branches[exp.branch].commit({
            sha1: exp.sha1,
            subject: exp.subject,
            body: exp.message,
            renderMessage: renderCommitMessage,
          });

          // Perform merge if needed
          if (exp.merge && branches[exp.sourceBranch]) {
            branches[exp.sourceBranch].merge(branches[exp.branch]);
          }
        });
      }}
    </Gitgraph>
  );
};

export default ExperienceGraph;
