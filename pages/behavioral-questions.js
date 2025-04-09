import React from 'react';
import Layout from '../components/Layout';
import BucketTemplate from '../components/BucketTemplate';
import Head from 'next/head';

export default function BehavioralQuestions() {
  const behavioralQuestionsBucket = {
    id: 'behavioral-questions',
    title: 'Behavioral & Fit Questions',
    description: 'Prepare for the critical behavioral and fit aspects of investment banking interviews that assess your suitability for the role.',
    modules: [
      { 
        id: 'tell-me-about-yourself', 
        title: 'Tell Me About Yourself',
        description: 'Learn how to craft a compelling personal narrative that highlights your qualifications for investment banking.'
      },
      { 
        id: 'why-investment-banking', 
        title: 'Why Investment Banking',
        description: 'Develop a convincing response to this crucial question that demonstrates your understanding of and interest in the industry.'
      },
      { 
        id: 'why-our-firm', 
        title: 'Why Our Firm',
        description: 'Learn how to research and articulate specific reasons for your interest in particular investment banks.'
      },
      { 
        id: 'strengths-and-weaknesses', 
        title: 'Strengths and Weaknesses',
        description: 'Master the art of discussing your strengths and weaknesses in a way that positions you as an ideal candidate.'
      },
      { 
        id: 'leadership-examples', 
        title: 'Leadership Examples',
        description: 'Prepare compelling stories that demonstrate your leadership abilities and potential.'
      },
      { 
        id: 'teamwork-scenarios', 
        title: 'Teamwork Scenarios',
        description: 'Develop responses that showcase your ability to work effectively in team environments.'
      },
      { 
        id: 'handling-challenges', 
        title: 'Handling Challenges',
        description: 'Prepare examples of how you have overcome obstacles and dealt with difficult situations.'
      },
      { 
        id: 'career-goals', 
        title: 'Career Goals',
        description: 'Articulate your short and long-term career aspirations in a way that aligns with investment banking career paths.'
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Behavioral & Fit Questions | Investment Banking Interview Prep</title>
        <meta name="description" content="Master behavioral interview questions for investment banking" />
      </Head>
      
      <BucketTemplate bucket={behavioralQuestionsBucket} />
    </Layout>
  );
}
