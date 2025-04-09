import React from 'react';
import VisualAid from '../../components/VisualAid';
import FormulaDisplay from '../../components/FormulaDisplay';
import ComparisonTable from '../../components/ComparisonTable';
import ProcessFlow from '../../components/ProcessFlow';
import ChartDisplay from '../../components/ChartDisplay';
import KeyConcept from '../../components/KeyConcept';
import CaseStudy from '../../components/CaseStudy';
import PracticeQuestion from '../../components/PracticeQuestion';

const tellMeAboutYourselfContent = () => {
  return (
    <div className="content-container">
      <KeyConcept
        title="Tell Me About Yourself"
        concept="'Tell me about yourself' is typically the first question in an investment banking interview, designed to assess your ability to present a concise, compelling narrative about your background, qualifications, and fit for the role."
        explanation="This open-ended question allows interviewers to evaluate your communication skills, professional presence, and ability to highlight relevant experiences. Your response should be structured, focused on professional qualifications, and tailored to investment banking."
        importance="This question sets the tone for the entire interview. A strong response demonstrates confidence, clarity of thought, and strategic self-awareness. It's your opportunity to guide the conversation toward your strengths and establish yourself as a well-prepared, thoughtful candidate."
        examples={[
          "A chronological walk-through of your education and relevant experiences",
          "A thematic approach highlighting key skills and accomplishments",
          "A narrative focused on your progression toward investment banking"
        ]}
      />
      
      <VisualAid title="Optimal Response Structure" type="concept">
        <div className="response-structure">
          <div className="structure-item mb-4">
            <h4>1. Brief Introduction (15-20 seconds)</h4>
            <p>Start with a concise personal and educational background.</p>
            <ul>
              <li>Name, university, degree(s), and graduation year</li>
              <li>Brief mention of relevant academic achievements</li>
              <li>Avoid personal details unrelated to professional qualifications</li>
              <li>Set the stage for your professional narrative</li>
              <li>Speak with confidence and maintain good eye contact</li>
            </ul>
          </div>
          
          <div className="structure-item mb-4">
            <h4>2. Professional Experience (60-90 seconds)</h4>
            <p>Highlight relevant work experience, internships, and key accomplishments.</p>
            <ul>
              <li>Focus on experiences most relevant to investment banking</li>
              <li>Emphasize analytical skills, financial modeling, and client interaction</li>
              <li>Quantify achievements where possible (deal sizes, performance improvements)</li>
              <li>Demonstrate progression of responsibility and skill development</li>
              <li>Connect experiences to banking-specific competencies</li>
            </ul>
          </div>
          
          <div className="structure-item mb-4">
            <h4>3. Why Investment Banking (30-45 seconds)</h4>
            <p>Explain your interest in investment banking and this specific firm.</p>
            <ul>
              <li>Articulate clear, thoughtful reasons for pursuing investment banking</li>
              <li>Demonstrate understanding of the role and industry</li>
              <li>Mention specific aspects of the firm that appeal to you</li>
              <li>Connect your background and skills to the requirements of the position</li>
              <li>Show genuine enthusiasm without being generic</li>
            </ul>
          </div>
          
          <div className="structure-item">
            <h4>4. Forward-Looking Statement (15-20 seconds)</h4>
            <p>Conclude with your current interests and goals.</p>
            <ul>
              <li>Express enthusiasm for the specific role you're interviewing for</li>
              <li>Briefly mention relevant current activities or interests</li>
              <li>Indicate readiness for questions or to elaborate on any aspect of your background</li>
              <li>Keep the conclusion concise and positive</li>
              <li>Maintain professional demeanor throughout</li>
            </ul>
          </div>
        </div>
      </VisualAid>
      
      <ComparisonTable
        title="Strong vs. Weak Responses"
        headers={["Component", "Strong Response", "Weak Response", "Key Difference"]}
        rows={[
          [
            "Introduction",
            "I'm a finance major at Cornell University graduating this May with a 3.8 GPA. I've completed coursework in financial modeling, valuation, and accounting, and served as the president of our Investment Banking Club.",
            "I'm a senior at Cornell. I've always been interested in finance since I was young. My father works in banking and I've always wanted to follow in his footsteps.",
            "Strong response focuses on relevant academic credentials and leadership; weak response relies on personal anecdotes and family connections."
          ],
          [
            "Professional Experience",
            "Last summer, I interned at Goldman Sachs in the M&A group, where I built financial models for a $500M consumer products transaction. I also completed a previous internship at a boutique firm where I conducted comparable company analysis for middle-market clients.",
            "I've had a couple of internships in finance. I worked at Goldman Sachs last summer and at a smaller firm before that. I learned a lot and really enjoyed the experience.",
            "Strong response provides specific details about responsibilities and quantifies achievements; weak response is vague and lacks substantive information about contributions."
          ],
          [
            "Why Investment Banking",
            "I'm drawn to investment banking because it combines rigorous financial analysis with strategic advisory work. I'm particularly interested in your firm's strength in the healthcare sector, as evidenced by your advisory role in the recent Johnson & Johnson acquisition.",
            "I want to be an investment banker because the work seems exciting and challenging. Your firm has a great reputation and I think I would learn a lot here.",
            "Strong response demonstrates industry knowledge and firm-specific research; weak response uses generic language that could apply to any firm."
          ],
          [
            "Conclusion",
            "Currently, I'm leading a case competition team analyzing a potential acquisition in the fintech space, which has deepened my interest in financial advisory work. I'm excited about the opportunity to contribute to your healthcare group and would be happy to elaborate on any aspect of my background.",
            "So that's a little bit about me. I think I'd be a good fit for this role and I'm really excited about the opportunity. Do you have any questions for me?",
            "Strong response includes relevant current activities and a specific reference to the position; weak response is generic and adds no additional value."
          ]
        ]}
        description="The contrast between strong and weak responses highlights the importance of specificity, relevance, and preparation. Strong responses demonstrate clear understanding of the industry, quantifiable achievements, and firm-specific knowledge."
      />
      
      <VisualAid title="Tailoring Your Response by Position" type="info">
        <div className="position-tailoring">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Summer Analyst / Analyst (Undergraduate)</h4>
              <p>Focus areas for entry-level candidates.</p>
              <ul>
                <li><strong>Academic Achievements:</strong> Highlight relevant coursework, GPA, academic honors</li>
                <li><strong>Leadership Experiences:</strong> Campus organizations, project leadership, team roles</li>
                <li><strong>Technical Preparation:</strong> Financial modeling courses, certifications, competitions</li>
                <li><strong>Relevant Internships:</strong> Prior finance experience, even if not in investment banking</li>
                <li><strong>Learning Orientation:</strong> Demonstrate intellectual curiosity and willingness to learn</li>
                <li><strong>Key Traits to Emphasize:</strong> Work ethic, attention to detail, teamwork, analytical ability</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Associate (MBA or Lateral Hire)</h4>
              <p>Focus areas for experienced candidates.</p>
              <ul>
                <li><strong>Professional Progression:</strong> Career trajectory showing increasing responsibility</li>
                <li><strong>Transaction Experience:</strong> Deal exposure, client interaction, financial analysis</li>
                <li><strong>Industry Expertise:</strong> Sector knowledge, market insights, specialized skills</li>
                <li><strong>Advanced Education:</strong> MBA specialization, relevant coursework, academic distinctions</li>
                <li><strong>Management Skills:</strong> Team leadership, project management, mentoring experience</li>
                <li><strong>Key Traits to Emphasize:</strong> Strategic thinking, client management, execution ability</li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Lateral Hire (Experienced Banker)</h4>
              <p>Focus areas for candidates moving between banks.</p>
              <ul>
                <li><strong>Deal Experience:</strong> Transaction types, sizes, and your specific role and contributions</li>
                <li><strong>Client Relationships:</strong> Experience managing client interactions and expectations</li>
                <li><strong>Technical Expertise:</strong> Advanced modeling skills, valuation techniques, sector knowledge</li>
                <li><strong>Team Leadership:</strong> Experience managing junior bankers and coordinating workstreams</li>
                <li><strong>Business Development:</strong> Contribution to pitches and client acquisition efforts</li>
                <li><strong>Key Traits to Emphasize:</strong> Execution excellence, client service, team management</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Career Switcher</h4>
              <p>Focus areas for candidates transitioning from other fields.</p>
              <ul>
                <li><strong>Transferable Skills:</strong> Analytical abilities, client service, project management</li>
                <li><strong>Financial Acumen:</strong> Relevant experience with financial analysis or transactions</li>
                <li><strong>Industry Knowledge:</strong> Sector expertise that could be valuable in banking</li>
                <li><strong>Self-Study Efforts:</strong> Courses, certifications, or training to bridge knowledge gaps</li>
                <li><strong>Motivation for Change:</strong> Compelling rationale for transition to investment banking</li>
                <li><strong>Key Traits to Emphasize:</strong> Adaptability, learning agility, relevant domain expertise</li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Boutique vs. Bulge Bracket Focus</h4>
              <p>Adjusting emphasis based on firm type.</p>
              <ul>
                <li><strong>Bulge Bracket:</strong> Emphasize teamwork, process orientation, global perspective</li>
                <li><strong>Elite Boutique:</strong> Highlight analytical rigor, intellectual curiosity, technical excellence</li>
                <li><strong>Middle Market:</strong> Focus on versatility, client service, and hands-on experience</li>
                <li><strong>Industry Specialist:</strong> Demonstrate relevant sector knowledge and passion</li>
                <li><strong>Regional Firm:</strong> Show understanding of local market and relationship-building skills</li>
                <li><strong>Key Adjustment:</strong> Research firm culture and values to align your narrative</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Group-Specific Tailoring</h4>
              <p>Customizing for specific investment banking groups.</p>
              <ul>
                <li><strong>M&A:</strong> Emphasize analytical precision, transaction experience, negotiation exposure</li>
                <li><strong>Capital Markets (ECM/DCM):</strong> Highlight market knowledge, client relationships, execution</li>
                <li><strong>Leveraged Finance:</strong> Focus on credit analysis, LBO experience, debt markets knowledge</li>
                <li><strong>Industry Coverage:</strong> Demonstrate sector expertise, relevant internships or coursework</li>
                <li><strong>Restructuring:</strong> Emphasize distressed analysis, complex problem-solving, stakeholder management</li>
                <li><strong>Key Adjustment:</strong> Research recent group transactions to reference in your response</li>
              </ul>
            </div>
          </div>
        </div>
      </VisualAid>
      
      <CaseStudy
        title="Response Analysis: Summer Analyst Candidate"
        scenario="Below is a response to 'Tell me about yourself' from a college senior interviewing for a summer analyst position at a bulge bracket investment bank. The candidate is a finance major with one previous internship at a boutique investment bank."
        questions={[
          "What are the strengths of this response?",
          "What are the weaknesses of this response?",
          "How could this response be improved?",
          "How well does this response address the needs of a bulge bracket bank?"
        ]}
        analysis={
          <div>
            <p><strong>Candidate's Response:</strong></p>
            <blockquote className="blockquote">
              <p>"I'm a senior at NYU Stern, majoring in Finance with a minor in Computer Science. I've maintained a 3.7 GPA while being actively involved as the Vice President of our Investment Banking Club, where I lead weekly technical workshops for 30+ members.</p>
              <p>Last summer, I interned at Hamilton Partners, a boutique investment bank focusing on technology M&A. There, I built financial models for a $200 million software company acquisition, conducted comparable company analysis, and helped prepare client presentations. I was proud that my analysis of potential synergies was included in the final client recommendation, which the Managing Director presented.</p>
              <p>Prior to that, I completed a corporate finance internship at Adobe, where I worked on internal ROI analysis for marketing campaigns and gained exposure to financial planning processes at a large technology company.</p>
              <p>I'm particularly drawn to investment banking because I enjoy the combination of quantitative analysis and strategic thinking required to advise clients on their most important financial decisions. Your firm's global platform and strong technology group particularly interest me, as I saw from your recent advisory role in the Salesforce acquisition of Slack.</p>
              <p>Currently, I'm leading a team in a case competition analyzing a potential spin-off transaction, which has deepened my understanding of corporate valuation. I'm excited about the opportunity to bring my technical skills, work ethic, and passion for financial analysis to your summer analyst program."</p>
            </blockquote>
            
            <p><strong>Strengths of the Response:</strong></p>
            <ul>
              <li><strong>Concise yet comprehensive:</strong> Covers education, relevant experience, and motivation for banking in about 2 minutes</li>
              <li><strong>Specific achievements:</strong> Mentions concrete responsibilities and accomplishments (e.g., synergy analysis used in client presentation)</li>
              <li><strong>Quantification:</strong> Includes numbers to add credibility (3.7 GPA, 30+ club members, $200M deal)</li>
              <li><strong>Relevant experiences highlighted:</strong> Focuses on financial modeling, analysis, and client materials</li>
              <li><strong>Firm-specific research:</strong> References a recent transaction advised by the bank</li>
              <li><strong>Current activities:</strong> Mentions ongoing case competition to show continued skill development</li>
              <li><strong>Clear structure:</strong> Follows a logical flow from education to experience to interest in the firm</li>
            </ul>
            
            <p><strong>Weaknesses of the Response:</strong></p>
            <ul>
              <li><strong>Slightly too long:</strong> Could be more concise, particularly in describing the Adobe internship</li>
              <li><strong>Technical skills not detailed:</strong> Mentions financial modeling but doesn't specify proficiency with Excel, PowerPoint, or other relevant tools</li>
              <li><strong>Limited discussion of teamwork:</strong> Bulge bracket banks highly value team orientation, which isn't emphasized enough</li>
              <li><strong>Lacks mention of work ethic:</strong> Doesn't explicitly address ability to handle the demanding hours and pressure</li>
              <li><strong>Could better connect experiences:</strong> Doesn't clearly articulate how each experience built toward investment banking</li>
              <li><strong>Limited discussion of cultural fit:</strong> Doesn't address alignment with the bank's values or culture</li>
              <li><strong>Conclusion could be stronger:</strong> Ends with generic statement rather than a memorable closing</li>
            </ul>
            
            <p><strong>Suggested Improvements:</strong></p>
            <ul>
              <li><strong>Streamline the Adobe experience:</strong> Condense to one sentence focusing only on most relevant aspects</li>
              <li><strong>Add technical proficiency:</strong> Briefly mention specific skills (e.g., "advanced Excel modeling, comps analysis, and LBO modeling")</li>
              <li><strong>Emphasize team orientation:</strong> Include an example of effective teamwork from internship or club experience</li>
              <li><strong>Address work capacity:</strong> Mention ability to manage multiple priorities or work under pressure</li>
              <li><strong>Create stronger narrative arc:</strong> More explicitly connect how each experience built relevant skills for banking</li>
              <li><strong>Reference firm culture:</strong> Mention alignment with the bank's stated values or culture</li>
              <li><strong>Strengthen conclusion:</strong> End with a more specific statement about contribution to the specific group</li>
            </ul>
            
            <p><strong>Alignment with Bulge Bracket Needs:</strong></p>
            <ul>
              <li><strong>Technical preparation:</strong> Demonstrates relevant analytical experience but could be more specific about technical skills</li>
              <li><strong>Deal exposure:</strong> Appropriately highlights transaction experience at boutique bank</li>
              <li><strong>Academic credentials:</strong> Effectively presents strong academic background at target school</li>
              <li><strong>Global perspective:</strong> Lacks mention of international experience or global mindset valued by bulge brackets</li>
              <li><strong>Team orientation:</strong> Insufficient emphasis on collaborative skills crucial in large banking teams</li>
              <li><strong>Client focus:</strong> Good mention of client presentation but could further emphasize client service orientation</li>
              <li><strong>Cultural fit:</strong> Needs stronger alignment with the specific bank's culture and values</li>
            </ul>
          </div>
        }
        conclusion="This candidate's response demonstrates many strengths, including relevant experience, specific achievements, and firm research. However, it could be improved by being more concise, emphasizing teamwork and technical skills, and better aligning with bulge bracket cultural values. An improved response would streamline the description of earlier experiences, add specific technical proficiencies, include examples of effective teamwork, address capacity for demanding work, and reference the bank's cultural values. For a bulge bracket bank specifically, the candidate should emphasize their ability to work in large, structured teams, handle multiple workstreams simultaneously, and contribute to global transactions. With these adjustments, the response would better demonstrate the candidate's fit for the specific role and firm while maintaining the strong foundation of relevant experiences and achievements already included."
        takeaways={[
          "Effective 'Tell me about yourself' responses balance comprehensiveness with concision, typically lasting 1.5-2 minutes",
          "Quantify achievements and specify technical skills relevant to investment banking",
          "Tailor your response to the specific bank type, group, and position",
          "Create a narrative that logically connects your experiences to investment banking",
          "Research the firm's recent transactions and cultural values to demonstrate genuine interest"
        ]}
      />
      
      <VisualAid title="Preparation Strategies" type="note">
        <div className="preparation-strategies">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Content Development</h4>
              <p>Strategies for crafting your personal narrative.</p>
              <ul>
                <li><strong>Resume Audit:</strong> Review your resume to identify key experiences and achievements to highlight</li>
                <li><strong>Skills Inventory:</strong> List banking-relevant skills you've developed and supporting examples</li>
                <li><strong>Banking Relevance Filter:</strong> Evaluate each experience for direct relevance to investment banking</li>
                <li><strong>Quantification Exercise:</strong> Add specific numbers to strengthen key accomplishments</li>
                <li><strong>Narrative Arc Development:</strong> Create a logical progression showing your path to banking</li>
                <li><strong>Firm Research:</strong> Identify recent transactions, strengths, and cultural values of target firms</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Delivery Refinement</h4>
              <p>Techniques to improve your presentation.</p>
              <ul>
                <li><strong>Script Writing:</strong> Draft your full response in writing first, then refine for conversational tone</li>
                <li><strong>Bullet Point Conversion:</strong> Convert script to key bullet points to avoid sounding rehearsed</li>
                <li><strong>Time Management:</strong> Practice with a timer to ensure appropriate length (1.5-2 minutes)</li>
                <li><strong>Video Recording:</strong> Record practice sessions to evaluate body language and verbal delivery</li>
                <li><strong>Peer Feedback:</strong> Practice with classmates or colleagues for constructive criticism</li>
                <li><strong>Mock Interviews:</strong> Simulate full interview conditions with career services or mentors</li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Common Pitfalls to Avoid</h4>
              <p>Mistakes that weaken your response.</p>
              <ul>
                <li><strong>Chronological Trap:</strong> Reciting resume in chronological order without highlighting relevance</li>
                <li><strong>Excessive Personal Details:</strong> Sharing irrelevant personal information or early life history</li>
                <li><strong>Underselling Achievements:</strong> Being too modest about accomplishments and contributions</li>
                <li><strong>Technical Jargon Overload:</strong> Using excessive technical terms to appear knowledgeable</li>
                <li><strong>Generic Banking Interest:</strong> Stating vague reasons for interest in investment banking</li>
                <li><strong>Memorization Markers:</strong> Sounding robotic or overly rehearsed in delivery</li>
              </ul>
            </div>
            
            <div className="col-md-6 mb-4">
              <h4>Adaptability Techniques</h4>
              <p>Methods to adjust your response in real-time.</p>
              <ul>
                <li><strong>Interviewer Profiling:</strong> Quickly assess interviewer background to emphasize relevant aspects</li>
                <li><strong>Time Awareness:</strong> Develop versions of different lengths (30 seconds, 1 minute, 2 minutes)</li>
                <li><strong>Emphasis Shifting:</strong> Prepare to emphasize different aspects based on the specific role</li>
                <li><strong>Question Anticipation:</strong> Identify which parts of your story might prompt follow-up questions</li>
                <li><strong>Bridge Building:</strong> Practice transitioning from your story to other interview topics</li>
                <li><strong>Non-Verbal Feedback Monitoring:</strong> Watch for interviewer cues to adjust length or focus</li>
              </ul>
            </div>
          </div>
        </div>
      </VisualAid>
      
      <VisualAid title="Common Interview Questions" type="note">
        <ol>
          <li className="mb-3">
            <strong>Walk me through your resume.</strong>
            <p>This question is similar to "Tell me about yourself" but typically expects a more comprehensive overview of your background. Focus on professional and educational experiences relevant to investment banking, highlighting key achievements and skills developed in each role. Maintain a chronological structure but emphasize banking-relevant experiences. Quantify achievements where possible and explain transitions between roles or educational decisions. Keep your response to 2-3 minutes, demonstrating your ability to communicate concisely while covering essential information. Unlike "Tell me about yourself," this question may require more detail about each position on your resume, but still avoid simply reading your resume verbatim. Instead, provide context and significance for each experience that might not be evident from the document itself.</p>
          </li>
          <li className="mb-3">
            <strong>Why investment banking?</strong>
            <p>This question assesses your understanding of the industry and your motivations for pursuing a demanding career. Develop a thoughtful, authentic response that demonstrates your understanding of what investment bankers actually do. Strong answers typically include: (1) Intellectual interest in financial analysis, valuation, and strategic advisory; (2) Excitement about working on significant transactions that shape industries; (3) Appreciation for the accelerated learning curve and skill development; (4) Interest in understanding businesses across different sectors; and (5) Alignment between your strengths and the role requirements. Avoid generic or superficial motivations like prestige or compensation. Instead, connect your past experiences to specific aspects of banking that genuinely interest you. If possible, reference informational interviews or conversations with current bankers that have informed your understanding of the role.</p>
          </li>
          <li className="mb-3">
            <strong>Why our firm specifically?</strong>
            <p>This question evaluates your research and genuine interest in the specific institution. Demonstrate thoughtful research about the firm's strengths, culture, recent transactions, and positioning in the market. Strong answers typically include: (1) Specific recent deals the firm has advised on that interest you; (2) The firm's particular strengths in industries or product areas that align with your interests; (3) Aspects of the firm's culture or values that resonate with you; (4) Conversations with current or former employees that provided insight into the firm; and (5) The firm's approach to analyst/associate development and training. Avoid generic statements that could apply to any bank. Instead, show that you've done your homework by referencing specific aspects of the firm that differentiate it from competitors. This demonstrates both your interest in the specific firm and your thoroughness in preparation—a quality valued in banking.</p>
          </li>
          <li className="mb-3">
            <strong>What are your greatest strengths and weaknesses?</strong>
            <p>For strengths, highlight attributes particularly relevant to investment banking success: analytical ability, attention to detail, work ethic, teamwork, communication skills, or learning agility. Provide specific examples that demonstrate these strengths in action, ideally from professional or academic experiences. For weaknesses, demonstrate self-awareness by identifying a genuine area for improvement, but choose something that: (1) Isn't critical to investment banking success; (2) You're actively working to improve; and (3) Has shown measurable progress. Describe specific steps you're taking to address the weakness and improvements you've already made. Avoid transparent non-weaknesses ("I work too hard") or critical flaws that would disqualify you ("I struggle with attention to detail"). The best responses demonstrate both self-awareness and a commitment to continuous improvement, qualities highly valued in investment banking.</p>
          </li>
          <li>
            <strong>Where do you see yourself in 5-10 years?</strong>
            <p>This question assesses your career planning, ambition, and understanding of typical career paths from investment banking. Strong responses demonstrate thoughtful career planning while showing commitment to excelling in investment banking first. A good structure includes: (1) Short-term goals focused on developing core banking skills and adding value to your team; (2) Medium-term aspirations that could include advancement within banking (e.g., to associate, VP) or related fields where banking experience is valued; and (3) Longer-term interests that show ambition and strategic thinking. While many analysts eventually leave for private equity, hedge funds, or corporate roles, avoid suggesting you view banking merely as a stepping stone. Instead, emphasize your commitment to banking while acknowledging that your long-term path will be influenced by the interests you develop during your banking experience. Show that you understand the skills banking develops and how they create optionality for various career paths.</p>
          </li>
        </ol>
      </VisualAid>
    </div>
  );
};

export default tellMeAboutYourselfContent;
