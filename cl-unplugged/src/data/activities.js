// Complete Activities Data for ISC153 Unplugged
// All activities include detailed student and lecturer guides

export const activities = [
  // ============================================
  // COMPUTER LITERACY (CL) ACTIVITIES
  // ============================================
  {
    id: 'cl-001',
    title: 'Count the Triangles - Methodology Challenge',
    stream: 'CL',
    mode: 'Unplugged',
    week: 1,
    semester: 1,
    skills: ['methodology', 'documentation', 'replication', 'collaboration'],
    durationMin: 45,
    groupSize: '4-6',
    difficulty: 'Beginner',
    objective: 'Learn the importance of clear methodology by developing a replicable counting method that another team can follow to achieve the same result.',
    heroGraphic: 'triangle-pattern',
    materials: [
      'Large printed triangle diagrams (varying complexity)',
      'Blank paper for methodology documentation',
      'Pens/markers',
      'Timer',
      'Methodology template sheets'
    ],
    setup: [
      'Divide class into teams of 4-6 students',
      'Distribute different triangle diagrams to each team (keep some identical for replication test)',
      'Provide methodology template sheets to each team',
      'Set up separate areas for teams to work without seeing other teams'
    ],
    procedure: [
      {
        step: 1,
        title: 'Introduction',
        description: 'Present the challenge: count all triangles in the diagram. Teams must document their method so another team can replicate it.',
        duration: 5,
        graphic: 'intro-briefing'
      },
      {
        step: 2,
        title: 'Initial Attempt',
        description: 'Teams attempt to count triangles individually first, then compare results within the team. Note discrepancies.',
        duration: 8,
        graphic: 'individual-counting'
      },
      {
        step: 3,
        title: 'Method Development',
        description: 'Teams develop a systematic counting method. They must write clear, step-by-step instructions.',
        duration: 15,
        graphic: 'method-writing'
      },
      {
        step: 4,
        title: 'Peer Testing',
        description: 'Teams exchange their written methodology with another team (using the same diagram). The receiving team follows the instructions exactly.',
        duration: 10,
        graphic: 'peer-exchange'
      },
      {
        step: 5,
        title: 'Results Comparison',
        description: 'Compare results. If different, identify where the methodology was unclear or ambiguous.',
        duration: 5,
        graphic: 'results-comparison'
      }
    ],
    deliverable: 'A written methodology document that another team successfully used to achieve the same triangle count.',
    replicabilityCheck: {
      question: 'Did the other team get the same count using your methodology?',
      successCriteria: 'Exact match of triangle count between original team and replicating team',
      failureAnalysis: 'Identify specific steps that were ambiguous or missing'
    },
    debriefQuestions: [
      'Why did some teams get different counts initially?',
      'What made some methodologies easier to follow than others?',
      'How does this relate to scientific methodology and reproducibility?',
      'What would happen if a researcher published findings without a clear method?',
      'How does peer review in science rely on replicable methodology?'
    ],
    learningOutcomes: [
      'Understand the importance of clear, detailed methodology in research',
      'Experience the concept of replicability firsthand',
      'Develop technical writing skills for procedures',
      'Recognize the role of standardization in achieving consistent results'
    ],
    studentGuide: {
      whatYouLearn: 'How to write clear instructions that others can follow to get the same results - a fundamental skill in science and computing.',
      whatToBring: 'Pen, paper, and an open mind for teamwork',
      tips: [
        'Be specific - "count from left to right" is better than "count the triangles"',
        'Number your steps clearly',
        'Test your instructions on a teammate before the exchange',
        'Think about what someone who has never seen the diagram would need to know'
      ],
      reflectionPrompts: [
        'What was the hardest part of writing clear instructions?',
        'How did you feel when another team could not follow your method?',
        'How will you apply this to writing lab reports or academic documentation?'
      ],
      extensionChallenge: 'Create a generalised method that works for ANY triangle diagram, then write it as pseudocode with defined variables and loop structures.'
    },
    lecturerGuide: {
      sessionGoal: 'Students experience why methodology matters through the frustration/success of replication.',
      roomSetup: 'Tables arranged for team collaboration, teams should not be able to see each other\'s diagrams during the exchange phase.',
      facilitationScript: [
        { time: '0-5 min', action: 'Present challenge, distribute materials, explain replication concept' },
        { time: '5-13 min', action: 'Monitor individual counting, note who gets different answers' },
        { time: '13-28 min', action: 'Guide method development, encourage specificity without giving answers' },
        { time: '28-38 min', action: 'Facilitate exchange, ensure teams follow instructions literally' },
        { time: '38-45 min', action: 'Lead debrief discussion, connect to scientific methodology' }
      ],
      commonMisconceptions: [
        'Students assume others will "just know" implicit steps',
        'Teams may write vague instructions like "count all the small ones first"',
        'Some teams may not realize overlapping triangles form new triangles'
      ],
      interventions: [
        'If a team is stuck, ask: "If I had never seen this image, what would I need to know?"',
        'For vague instructions, ask: "What does small mean? How do you define it?"'
      ],
      formativeChecks: [
        'Ask teams to read their method aloud - does it make sense verbally?',
        'Check if instructions include a clear starting point and ending condition'
      ],
      rubricSnapshot: {
        excellent: 'Method is followed exactly by another team with matching results',
        good: 'Method is mostly clear, minor clarifications needed',
        developing: 'Method has significant gaps, results do not match',
        beginning: 'Method is incomplete or incomprehensible'
      },
      postClassReflection: 'Note which types of instructions caused the most replication failures for future emphasis.'
    },
    variations: [
      {
        name: 'Large Class',
        description: 'Use fewer diagram types, have multiple teams work on the same diagram for cross-validation.'
      },
      {
        name: 'Low Resource',
        description: 'Draw triangles on whiteboard/chalkboard, have students write methods on regular paper.'
      },
      {
        name: 'Extension',
        description: 'Add time pressure - teams must complete methodology in 10 minutes, simulating real deadlines.'
      }
    ],
    references: [
      { author: 'Bell, T., Witten, I. H., & Fellows, M.', year: 2015, title: 'CS Unplugged: An enrichment and extension programme for primary-aged children', source: 'University of Canterbury, New Zealand' },
      { author: 'National Research Council', year: 2000, title: 'How People Learn: Brain, Mind, Experience, and School', source: 'National Academies Press' },
      { author: 'Popper, K.', year: 1959, title: 'The Logic of Scientific Discovery', source: 'Routledge' }
    ]
  },
  {
    id: 'cl-002',
    title: 'Human Sorting Network',
    stream: 'CL',
    mode: 'Unplugged',
    week: 2,
    semester: 1,
    skills: ['algorithms', 'parallel-processing', 'logic', 'collaboration'],
    durationMin: 40,
    groupSize: '6-16',
    difficulty: 'Beginner',
    objective: 'Understand sorting algorithms and parallel processing by physically walking through a sorting network.',
    heroGraphic: 'sorting-network',
    materials: [
      'Large floor space or outdoor area',
      'Tape for marking paths on floor',
      'Number cards (0-9 or letters)',
      'Printed sorting network diagram',
      'Stopwatch'
    ],
    setup: [
      'Mark a sorting network pattern on the floor with tape',
      'Each comparison node should be clearly marked',
      'Prepare number cards for participants',
      'Have the diagram visible for reference'
    ],
    procedure: [
      {
        step: 1,
        title: 'Concept Introduction',
        description: 'Explain what a sorting network is - a fixed sequence of comparisons that will sort any input.',
        duration: 5,
        graphic: 'network-diagram'
      },
      {
        step: 2,
        title: 'Network Walkthrough',
        description: 'Walk through the network pattern without numbers first. Students learn the paths and comparison points.',
        duration: 8,
        graphic: 'path-walking'
      },
      {
        step: 3,
        title: 'First Sort',
        description: 'Give students random number cards. They walk the network, comparing and swapping at each node.',
        duration: 10,
        graphic: 'first-sort'
      },
      {
        step: 4,
        title: 'Parallel Execution',
        description: 'Identify which comparisons can happen simultaneously. Run the network again with parallel comparisons timed.',
        duration: 10,
        graphic: 'parallel-execution'
      },
      {
        step: 5,
        title: 'Analysis',
        description: 'Compare parallel vs sequential timing. Discuss efficiency implications.',
        duration: 7,
        graphic: 'timing-analysis'
      }
    ],
    deliverable: 'Successfully sorted sequence and timing comparison between sequential and parallel approaches.',
    replicabilityCheck: {
      question: 'Does the network produce sorted output for any random input?',
      successCriteria: 'Network correctly sorts at least 3 different random inputs',
      failureAnalysis: 'Identify which comparison nodes were missed or incorrect'
    },
    debriefQuestions: [
      'Why does the same network work for any input?',
      'How much faster was parallel execution?',
      'Where else do computers use parallel processing? Consider scientific simulations and data analysis.',
      'What are the limitations of sorting networks?'
    ],
    learningOutcomes: [
      'Understand the concept of deterministic algorithms',
      'Experience parallel processing benefits physically',
      'Learn comparison-based sorting fundamentals',
      'Recognize efficiency trade-offs in algorithm design'
    ],
    studentGuide: {
      whatYouLearn: 'How computers sort data efficiently using networks of simple comparisons, and why parallel processing makes things faster.',
      whatToBring: 'Comfortable shoes for walking, willingness to participate physically',
      tips: [
        'At each comparison point, the person with the smaller number goes left',
        'Wait for your partner at each comparison node',
        'Pay attention to which comparisons can happen at the same time'
      ],
      reflectionPrompts: [
        'How did it feel to be part of an algorithm?',
        'Why is the parallel version faster if the same comparisons are made?',
        'What other everyday processes could benefit from parallelization?'
      ],
      extensionChallenge: 'Design a sorting network for 8 inputs, calculate the minimum depth (parallel steps), and compare its time complexity to bubble sort O(n²).'
    },
    lecturerGuide: {
      sessionGoal: 'Students physically experience algorithm execution and parallel processing speedup.',
      roomSetup: 'Large open space required. Tape network on floor in advance. 6-input network for small groups, 8-input for larger.',
      facilitationScript: [
        { time: '0-5 min', action: 'Explain sorting networks using diagram, establish comparison rules' },
        { time: '5-13 min', action: 'Dry run without numbers, ensure path understanding' },
        { time: '13-23 min', action: 'First sort with numbers, guide any confusion at nodes' },
        { time: '23-33 min', action: 'Parallel execution runs, time both approaches' },
        { time: '33-40 min', action: 'Analysis and debrief, connect to CPU architectures' }
      ],
      commonMisconceptions: [
        'Students may think they need to remember the sequence of swaps',
        'Confusion about what "parallel" means - clarify it means simultaneous',
        'Some may think the network only works for their specific input'
      ],
      interventions: [
        'If students are confused at nodes, stop and demonstrate one comparison clearly',
        'Emphasize: "You dont think, you just compare and swap if needed"'
      ],
      formativeChecks: [
        'Ask: "What would happen if you skipped a comparison node?"',
        'Verify understanding: "Why can these two comparisons happen at the same time?"'
      ],
      rubricSnapshot: {
        excellent: 'Correctly executes network, articulates parallel speedup reasons',
        good: 'Correctly executes network with minor guidance',
        developing: 'Needs significant assistance, understands concept afterward',
        beginning: 'Unable to follow network rules without constant help'
      },
      postClassReflection: 'Note which comparison nodes caused the most confusion for network redesign.'
    },
    variations: [
      {
        name: 'Large Class',
        description: 'Create multiple smaller networks running simultaneously, compare results.'
      },
      {
        name: 'Indoor Limited Space',
        description: 'Use chairs arranged as nodes, students move between chairs.'
      },
      {
        name: 'Extension',
        description: 'Challenge students to find alternative networks with fewer comparisons.'
      }
    ],
    references: [
      { author: 'Bell, T., Alexander, J., Freeman, I., & Grimley, M.', year: 2009, title: 'Computer Science Unplugged: School students doing real computing without computers', source: 'New Zealand Journal of Applied Computing and Information Technology, 13(1), 20-29' },
      { author: 'Knuth, D. E.', year: 1997, title: 'The Art of Computer Programming, Volume 3: Sorting and Searching', source: 'Addison-Wesley' },
      { author: 'Nishida, T., Kanemune, S., Idosaka, Y., et al.', year: 2009, title: 'A CS unplugged design pattern', source: 'ACM SIGCSE Bulletin, 41(1), 231-235' }
    ]
  },
  {
    id: 'cl-003',
    title: 'Instruction Precision Game',
    stream: 'CL',
    mode: 'Unplugged',
    week: 3,
    semester: 1,
    skills: ['documentation', 'communication', 'precision', 'debugging'],
    durationMin: 35,
    groupSize: '2-4',
    difficulty: 'Beginner',
    objective: 'Learn the importance of precise instructions by guiding a blindfolded partner through a simple task using only words.',
    heroGraphic: 'instruction-flow',
    materials: [
      'Blindfolds (or closed eyes)',
      'Simple objects to arrange (blocks, cups, paper)',
      'Instruction writing sheets',
      'Reference images of desired arrangements'
    ],
    setup: [
      'Pair students or form small groups',
      'Prepare identical object sets for each pair',
      'Create simple target arrangements',
      'Designate instruction-giver and instruction-follower roles'
    ],
    procedure: [
      {
        step: 1,
        title: 'Role Assignment',
        description: 'One student is the "programmer" (can see, cannot touch), one is the "computer" (blindfolded, can only follow instructions).',
        duration: 3,
        graphic: 'roles-diagram'
      },
      {
        step: 2,
        title: 'First Attempt',
        description: 'Programmer verbally guides computer to arrange objects matching the target image. No touching or physical guidance allowed.',
        duration: 10,
        graphic: 'first-attempt'
      },
      {
        step: 3,
        title: 'Debugging',
        description: 'Remove blindfold. Compare result to target. Identify which instructions caused errors.',
        duration: 5,
        graphic: 'debugging'
      },
      {
        step: 4,
        title: 'Role Swap',
        description: 'Switch roles with a new target image. Apply lessons learned.',
        duration: 10,
        graphic: 'role-swap'
      },
      {
        step: 5,
        title: 'Written Instructions',
        description: 'Write down instructions for the task. Test if another pair can follow them.',
        duration: 7,
        graphic: 'written-docs'
      }
    ],
    deliverable: 'A set of written instructions that successfully guide someone to complete the object arrangement task.',
    replicabilityCheck: {
      question: 'Can someone who was not in your original pair follow your written instructions?',
      successCriteria: 'Third party achieves correct arrangement using only written instructions',
      failureAnalysis: 'Identify ambiguous terms or missing steps'
    },
    debriefQuestions: [
      'What words caused the most confusion?',
      'How is this similar to writing computer programs?',
      'Why do computers need such precise instructions?',
      'What strategies helped you give better instructions?'
    ],
    learningOutcomes: [
      'Understand why computers need precise, unambiguous instructions',
      'Experience the challenge of technical communication',
      'Learn to anticipate misinterpretation',
      'Develop debugging skills for instructions'
    ],
    studentGuide: {
      whatYouLearn: 'Why computers and documentation need precise language - computers cannot guess what you mean.',
      whatToBring: 'Nothing - materials provided',
      tips: [
        'Use specific directions: "move right 5 centimeters" not "move right a bit"',
        'Define reference points: "from the edge of the table"',
        'Give one instruction at a time and wait for completion',
        'Avoid words like "here", "there", "this" - the follower cannot see'
      ],
      reflectionPrompts: [
        'When were you most frustrated as the instruction-follower?',
        'What single change most improved your instructions?',
        'How will this affect how you write formal reports or professional emails?'
      ],
      extensionChallenge: 'Write instructions for a laboratory procedure (e.g., preparing a serial dilution) precise enough that a student in another institution could follow them without clarification.'
    },
    lecturerGuide: {
      sessionGoal: 'Students viscerally experience why precision matters in instructions through controlled failure.',
      roomSetup: 'Pairs at separate tables, unable to see each others targets. Have extra blindfolds ready.',
      facilitationScript: [
        { time: '0-3 min', action: 'Explain roles and rules, distribute materials' },
        { time: '3-13 min', action: 'First attempt - observe but do not intervene' },
        { time: '13-18 min', action: 'Debugging discussion within pairs' },
        { time: '18-28 min', action: 'Role swap with new targets' },
        { time: '28-35 min', action: 'Written instructions and class debrief' }
      ],
      commonMisconceptions: [
        'Students think they are being clear when they are not',
        'Assumption that "obvious" things do not need to be stated',
        'Frustration when follower "does it wrong" - redirect to instruction quality'
      ],
      interventions: [
        'If pairs are struggling, ask: "What did you assume they would know?"',
        'Remind: "A computer has no common sense - neither does your blindfolded partner right now"'
      ],
      formativeChecks: [
        'Ask programmers to repeat their instruction exactly - often they cannot',
        'Check if written instructions include starting position and reference frame'
      ],
      rubricSnapshot: {
        excellent: 'Written instructions work for third party without clarification',
        good: 'Instructions work with minor clarifications',
        developing: 'Instructions have significant gaps requiring guidance',
        beginning: 'Instructions are incomplete or incomprehensible'
      },
      postClassReflection: 'Collect common ambiguous phrases for a "banned words" list in future sessions.'
    },
    variations: [
      {
        name: 'Large Class',
        description: 'Run as a competition - which pair achieves correct arrangement fastest?'
      },
      {
        name: 'Remote/Hybrid',
        description: 'Use video call with one camera off, describe object arrangements.'
      },
      {
        name: 'Extension',
        description: 'Increase complexity with multi-step arrangements or moving targets.'
      }
    ],
    references: [
      { author: 'Barefoot Computing', year: 2014, title: 'Computational Thinking: Concepts and Approaches', source: 'BCS, The Chartered Institute for IT' },
      { author: 'Wing, J. M.', year: 2006, title: 'Computational thinking', source: 'Communications of the ACM, 49(3), 33-35' },
      { author: 'Papert, S.', year: 1980, title: 'Mindstorms: Children, Computers, and Powerful Ideas', source: 'Basic Books' }
    ]
  },
  {
    id: 'cl-004',
    title: 'Algorithm Design Cards',
    stream: 'CL',
    mode: 'Unplugged',
    week: 4,
    semester: 1,
    skills: ['algorithms', 'sequencing', 'logic', 'problem-solving'],
    durationMin: 40,
    groupSize: '3-5',
    difficulty: 'Intermediate',
    objective: 'Learn algorithmic thinking by sequencing physical cards to solve problems, then testing with different inputs.',
    heroGraphic: 'algorithm-cards',
    materials: [
      'Algorithm instruction cards (pre-printed)',
      'Input/output cards',
      'Problem scenario cards',
      'Blank cards for custom algorithms',
      'Markers'
    ],
    setup: [
      'Prepare card sets for each team',
      'Each set contains: input cards, operation cards, decision cards, output cards',
      'Create problem scenarios of varying difficulty',
      'Designate testing area for each team'
    ],
    procedure: [
      {
        step: 1,
        title: 'Card Introduction',
        description: 'Explain card types: INPUT (get data), PROCESS (do something), DECISION (if/then), OUTPUT (show result).',
        duration: 5,
        graphic: 'card-types'
      },
      {
        step: 2,
        title: 'Simple Problem',
        description: 'Teams arrange cards to solve: "Given a number, output whether it is even or odd."',
        duration: 10,
        graphic: 'simple-algorithm'
      },
      {
        step: 3,
        title: 'Testing Phase',
        description: 'Teams trace through their card sequence with different inputs to verify correctness.',
        duration: 8,
        graphic: 'algorithm-testing'
      },
      {
        step: 4,
        title: 'Complex Problem',
        description: 'Solve: "Given three numbers, output the largest one." Teams may need loops or multiple decisions.',
        duration: 12,
        graphic: 'complex-algorithm'
      },
      {
        step: 5,
        title: 'Peer Review',
        description: 'Teams exchange algorithms and test each other\'s solutions with edge cases.',
        duration: 5,
        graphic: 'peer-review'
      }
    ],
    deliverable: 'A card-based algorithm that correctly solves the given problem for all test inputs.',
    replicabilityCheck: {
      question: 'Does your algorithm produce correct output for inputs you have not tested?',
      successCriteria: 'Algorithm handles normal cases, edge cases, and boundary conditions',
      failureAnalysis: 'Identify missing decision paths or incorrect operations'
    },
    debriefQuestions: [
      'What was the hardest part of designing the algorithm?',
      'How did you handle edge cases?',
      'What happens if you change the order of cards?',
      'How is this similar to writing actual code?'
    ],
    learningOutcomes: [
      'Understand sequential execution of instructions',
      'Learn conditional logic and decision structures',
      'Experience algorithm testing and debugging',
      'Develop systematic problem-solving approaches'
    ],
    studentGuide: {
      whatYouLearn: 'How to break down problems into step-by-step instructions - the foundation of programming.',
      whatToBring: 'Logical thinking and patience',
      tips: [
        'Start with the simplest case first',
        'Always test with at least 3 different inputs',
        'Consider what happens with zero, negative numbers, or equal values',
        'Read your algorithm out loud to check the logic'
      ],
      reflectionPrompts: [
        'Which type of card did you use most often?',
        'What edge case did you almost forget?',
        'Could you simplify your algorithm?'
      ],
      extensionChallenge: 'Design an algorithm to sort 4 numbers from smallest to largest using only the card types provided, then analyse its best-case and worst-case execution paths.'
    },
    lecturerGuide: {
      sessionGoal: 'Students develop algorithmic thinking through tangible manipulation of instruction sequences.',
      roomSetup: 'Tables for small groups, cards spread out for easy access, space for card sequences.',
      facilitationScript: [
        { time: '0-5 min', action: 'Introduce card types with examples' },
        { time: '5-15 min', action: 'First problem - observe approaches, note common mistakes' },
        { time: '15-23 min', action: 'Testing phase - encourage edge case thinking' },
        { time: '23-35 min', action: 'Complex problem - minimal intervention' },
        { time: '35-40 min', action: 'Peer review and debrief' }
      ],
      commonMisconceptions: [
        'Students forget to handle all possible cases',
        'Assumption that the first solution is the best solution',
        'Skipping the testing phase'
      ],
      interventions: [
        'Ask: "What if someone inputs zero?"',
        'Challenge: "What if all three numbers are the same?"',
        'Guide: "Can you trace through with this specific input?"'
      ],
      formativeChecks: [
        'Watch for infinite loops in card sequences',
        'Verify input/output card placement makes logical sense'
      ],
      rubricSnapshot: {
        excellent: 'Algorithm handles all cases including edge cases elegantly',
        good: 'Algorithm works for normal cases, minor edge case issues',
        developing: 'Algorithm has logical errors but shows understanding',
        beginning: 'Algorithm does not produce correct output'
      },
      postClassReflection: 'Identify which problem types need more scaffolding.'
    },
    variations: [
      {
        name: 'Large Class',
        description: 'Create a gallery walk of algorithms - students vote on most elegant solution.'
      },
      {
        name: 'Simplified',
        description: 'Provide partially completed algorithms with missing cards to fill in.'
      },
      {
        name: 'Extension',
        description: 'Introduce loop cards for repetitive operations.'
      }
    ],
    references: [
      { author: 'BBC Bitesize', year: 2020, title: 'Introduction to Algorithms', source: 'BBC Education' },
      { author: 'Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C.', year: 2009, title: 'Introduction to Algorithms (3rd ed.)', source: 'MIT Press' },
      { author: 'Selby, C. & Woollard, J.', year: 2013, title: 'Computational thinking: the developing definition', source: 'University of Southampton' }
    ]
  },
  // ============================================
  // COMPUTER LITERACY (CL) - DIGITAL ACTIVITIES
  // ============================================
  {
    id: 'cl-005',
    title: 'Word: Document Formatting Challenge',
    stream: 'CL',
    mode: 'Digital',
    week: 3,
    semester: 1,
    skills: ['word-processing', 'formatting', 'attention-to-detail'],
    durationMin: 50,
    groupSize: '1-2',
    difficulty: 'Beginner',
    objective: 'Master essential Word formatting skills by recreating a professionally formatted document from a reference image.',
    heroGraphic: 'word-formatting',
    materials: [
      'Computer with Microsoft Word',
      'Reference document image (printed or displayed)',
      'Unformatted source text file',
      'Formatting checklist',
      'Timer'
    ],
    setup: [
      'Ensure all computers have Word installed and working',
      'Distribute reference images showing target formatting',
      'Provide the same unformatted source text to all students',
      'Prepare formatting checklist for self-assessment'
    ],
    procedure: [
      {
        step: 1,
        title: 'Reference Analysis',
        description: 'Students examine the reference document and identify all formatting elements: fonts, spacing, alignment, headers, lists.',
        duration: 8,
        graphic: 'document-analysis'
      },
      {
        step: 2,
        title: 'Basic Structure',
        description: 'Set up page layout, margins, and basic styles. Add headers and footers.',
        duration: 10,
        graphic: 'page-setup'
      },
      {
        step: 3,
        title: 'Text Formatting',
        description: 'Apply character and paragraph formatting: fonts, sizes, bold/italic, alignment, line spacing.',
        duration: 15,
        graphic: 'text-formatting'
      },
      {
        step: 4,
        title: 'Advanced Elements',
        description: 'Add tables, images, columns, or other complex elements as shown in reference.',
        duration: 12,
        graphic: 'advanced-elements'
      },
      {
        step: 5,
        title: 'Quality Check',
        description: 'Use checklist to verify all formatting matches reference. Peer review.',
        duration: 5,
        graphic: 'quality-check'
      }
    ],
    deliverable: 'A Word document that matches the reference image formatting exactly.',
    replicabilityCheck: {
      question: 'If someone followed your same steps, would they produce an identical document?',
      successCriteria: 'Document matches reference in all formatting aspects',
      failureAnalysis: 'Identify which elements differ and why'
    },
    debriefQuestions: [
      'Which formatting element was most challenging?',
      'Why do consistent formatting and styles matter in professional documents?',
      'How can styles and templates save time?',
      'What accessibility considerations apply to document formatting?'
    ],
    learningOutcomes: [
      'Master Word formatting toolbar and menus',
      'Understand the importance of consistent document styling',
      'Learn to use styles for efficient formatting',
      'Develop attention to detail in document creation'
    ],
    studentGuide: {
      whatYouLearn: 'Professional document formatting skills essential for academic and professional work.',
      whatToBring: 'Computer with Microsoft Word installed',
      tips: [
        'Use the Format Painter to copy formatting quickly',
        'Set up styles first before applying to all similar elements',
        'Use Ctrl+Z liberally to undo mistakes',
        'Show formatting marks (Ctrl+Shift+8) to see hidden characters'
      ],
      reflectionPrompts: [
        'What keyboard shortcuts did you learn?',
        'How would you format a 20-page document efficiently?',
        'What formatting choices affect readability?'
      ],
      extensionChallenge: 'Create a Word style template conforming to your university\'s thesis formatting guidelines, including heading hierarchy, citation style, and figure captioning.'
    },
    lecturerGuide: {
      sessionGoal: 'Students gain practical Word formatting proficiency through hands-on recreation.',
      roomSetup: 'Computer lab with Word installed, projector for demonstrations, printed references at each station.',
      facilitationScript: [
        { time: '0-8 min', action: 'Distribute materials, demonstrate reference analysis approach' },
        { time: '8-18 min', action: 'Monitor page setup, assist with margin/layout issues' },
        { time: '18-33 min', action: 'Circulate during text formatting, answer questions' },
        { time: '33-45 min', action: 'Help with advanced elements, troubleshoot' },
        { time: '45-50 min', action: 'Quality check and peer review' }
      ],
      commonMisconceptions: [
        'Using spacebar instead of tab for alignment',
        'Manual formatting instead of using styles',
        'Not understanding the difference between line and paragraph spacing'
      ],
      interventions: [
        'Demonstrate styles vs manual formatting efficiency',
        'Show how to reveal formatting marks to debug spacing issues'
      ],
      formativeChecks: [
        'Check document properties for correct page setup',
        'Verify styles panel is being used'
      ],
      rubricSnapshot: {
        excellent: 'Exact match with efficient use of styles',
        good: 'Close match with minor differences',
        developing: 'Major formatting elements correct, details off',
        beginning: 'Significant formatting errors'
      },
      postClassReflection: 'Note which formatting concepts needed most support.'
    },
    variations: [
      {
        name: 'Timed Challenge',
        description: 'Add time pressure with a 30-minute limit for gamification.'
      },
      {
        name: 'Collaborative',
        description: 'Pairs work together, one navigating, one typing.'
      },
      {
        name: 'Accessible Focus',
        description: 'Add requirements for accessibility: heading structure, alt text, etc.'
      }
    ],
    references: [
      { author: 'ECDL Foundation', year: 2018, title: 'ECDL/ICDL Word Processing Syllabus 6.0', source: 'European Computer Driving Licence Foundation' },
      { author: 'van Merri\u00ebnboer, J. J. G. & Kirschner, P. A.', year: 2018, title: 'Ten Steps to Complex Learning (3rd ed.)', source: 'Routledge' },
      { author: 'Williams, R.', year: 2015, title: 'The Non-Designer\'s Design Book (4th ed.)', source: 'Peachpit Press' }
    ]
  },
  {
    id: 'cl-006',
    title: 'Excel: Data Cleaning Relay',
    stream: 'CL',
    mode: 'Digital',
    week: 7,
    semester: 1,
    skills: ['spreadsheets', 'data-cleaning', 'formulas', 'problem-solving'],
    durationMin: 45,
    groupSize: '2-4',
    difficulty: 'Intermediate',
    objective: 'Learn essential data cleaning techniques in Excel by racing to fix a messy dataset.',
    heroGraphic: 'excel-cleaning',
    materials: [
      'Computers with Microsoft Excel',
      'Messy dataset file (with various data quality issues)',
      'List of required cleaning tasks',
      'Clean reference dataset for verification',
      'Timer'
    ],
    setup: [
      'Prepare messy dataset with: inconsistent formatting, duplicates, blanks, text in number fields, etc.',
      'Create task checklist for systematic cleaning',
      'Set up team stations with the same starting file',
      'Prepare verification method for clean data'
    ],
    procedure: [
      {
        step: 1,
        title: 'Problem Assessment',
        description: 'Teams explore the messy dataset and identify all data quality issues.',
        duration: 8,
        graphic: 'data-assessment'
      },
      {
        step: 2,
        title: 'Task Assignment',
        description: 'Teams divide cleaning tasks among members. Establish a cleaning strategy.',
        duration: 5,
        graphic: 'task-division'
      },
      {
        step: 3,
        title: 'Cleaning Sprint',
        description: 'Teams race to clean their data. Each member handles their assigned tasks.',
        duration: 20,
        graphic: 'cleaning-process'
      },
      {
        step: 4,
        title: 'Verification',
        description: 'Teams verify their cleaned data against the reference. Count remaining issues.',
        duration: 7,
        graphic: 'verification'
      },
      {
        step: 5,
        title: 'Solution Sharing',
        description: 'Teams share their most efficient techniques with the class.',
        duration: 5,
        graphic: 'solution-sharing'
      }
    ],
    deliverable: 'A cleaned Excel dataset matching the reference data quality standards.',
    replicabilityCheck: {
      question: 'Could someone follow your cleaning steps to fix a similar messy dataset?',
      successCriteria: 'Data matches reference with no quality issues',
      failureAnalysis: 'Document which issues were missed and why'
    },
    debriefQuestions: [
      'What was the most common data quality issue?',
      'Which Excel functions were most useful for cleaning?',
      'Why is data cleaning important before analysis?',
      'How much time is typically spent on data cleaning in real projects?'
    ],
    learningOutcomes: [
      'Identify common data quality issues',
      'Master Excel data cleaning functions and features',
      'Understand the importance of clean data for analysis',
      'Develop systematic approaches to data preparation'
    ],
    studentGuide: {
      whatYouLearn: 'How to fix messy data - a critical skill since real-world data is rarely clean.',
      whatToBring: 'Computer with Excel, patience for detail work',
      tips: [
        'Use TRIM() to remove extra spaces',
        'Use Text to Columns for splitting data',
        'Use Remove Duplicates feature carefully',
        'CLEAN() removes non-printable characters',
        'Flash Fill can detect patterns automatically'
      ],
      reflectionPrompts: [
        'Which data issue surprised you the most?',
        'How would you prevent these issues when collecting data?',
        'What would happen if you analyzed the data without cleaning it?'
      ],
      extensionChallenge: 'Create a reusable data cleaning checklist template and apply it to a real-world dataset from a public repository (e.g., WHO, Stats SA).'
    },
    lecturerGuide: {
      sessionGoal: 'Students experience real-world data quality challenges and learn systematic cleaning.',
      roomSetup: 'Computer lab, identical files on all machines, leaderboard visible on projector.',
      facilitationScript: [
        { time: '0-8 min', action: 'Distribute files, prompt issue identification' },
        { time: '8-13 min', action: 'Help teams plan their cleaning strategy' },
        { time: '13-33 min', action: 'Monitor progress, provide hints if teams are stuck' },
        { time: '33-40 min', action: 'Verification against reference' },
        { time: '40-45 min', action: 'Solution sharing and discussion' }
      ],
      commonMisconceptions: [
        'Thinking you can clean data by just looking at it',
        'Not checking for hidden whitespace',
        'Deleting duplicates without understanding why they exist'
      ],
      interventions: [
        'Demonstrate LEN() to reveal hidden characters',
        'Show conditional formatting to highlight issues'
      ],
      formativeChecks: [
        'Ask teams to explain their cleaning strategy before starting',
        'Check if teams are documenting their cleaning steps'
      ],
      rubricSnapshot: {
        excellent: 'All issues fixed with documented process',
        good: 'Most issues fixed',
        developing: 'Some issues remain but approach is sound',
        beginning: 'Major issues remain'
      },
      postClassReflection: 'Collect team cleaning strategies for future reference.'
    },
    variations: [
      {
        name: 'Individual',
        description: 'Individual timed challenge instead of relay.'
      },
      {
        name: 'Domain Specific',
        description: 'Use datasets from students\' fields of study.'
      },
      {
        name: 'Extension',
        description: 'Add data validation rules to prevent future issues.'
      }
    ],
    references: [
      { author: 'Schield, M.', year: 2004, title: 'Information literacy, statistical literacy, and data literacy', source: 'IASSIST Quarterly, 28(2/3), 6-11' },
      { author: 'Kandel, S., Paepcke, A., Hellerstein, J., & Heer, J.', year: 2011, title: 'Wrangler: Interactive visual specification of data transformation scripts', source: 'Proc. CHI 2011, ACM, 3363-3372' },
      { author: 'Rahm, E. & Do, H.', year: 2000, title: 'Data cleaning: Problems and current approaches', source: 'IEEE Data Eng. Bull., 23(4), 3-13' }
    ]
  },
  {
    id: 'cl-007',
    title: 'Excel: Chart Selection Critique',
    stream: 'CL',
    mode: 'Digital',
    week: 8,
    semester: 1,
    skills: ['data-visualization', 'critical-thinking', 'communication'],
    durationMin: 40,
    groupSize: '3-4',
    difficulty: 'Intermediate',
    objective: 'Develop critical thinking about data visualization by identifying poor chart choices and creating better alternatives.',
    heroGraphic: 'chart-critique',
    materials: [
      'Computers with Excel',
      'Gallery of bad chart examples',
      'Source data for each bad chart',
      'Chart selection guidelines reference',
      'Presentation space'
    ],
    setup: [
      'Prepare collection of misleading or inappropriate charts',
      'Provide the underlying data for each chart',
      'Create chart selection decision guide',
      'Set up for brief presentations'
    ],
    procedure: [
      {
        step: 1,
        title: 'Bad Chart Gallery',
        description: 'Teams examine gallery of poorly chosen charts. Identify what is wrong with each.',
        duration: 10,
        graphic: 'bad-chart-gallery'
      },
      {
        step: 2,
        title: 'Problem Analysis',
        description: 'For assigned chart, teams document: What does it claim to show? What does it actually show? Why is the chart type wrong?',
        duration: 8,
        graphic: 'problem-analysis'
      },
      {
        step: 3,
        title: 'Redesign',
        description: 'Using the source data, teams create a better chart that accurately represents the data.',
        duration: 15,
        graphic: 'chart-redesign'
      },
      {
        step: 4,
        title: 'Critique Presentation',
        description: 'Teams present their before/after with reasoning. Class votes on most improved.',
        duration: 7,
        graphic: 'presentation'
      }
    ],
    deliverable: 'A before/after comparison showing the original poor chart and the improved redesign with justification.',
    replicabilityCheck: {
      question: 'Would another person looking at this data make the same chart choice?',
      successCriteria: 'Improved chart clearly communicates the data story appropriately',
      failureAnalysis: 'Identify what about the data was misunderstood'
    },
    debriefQuestions: [
      'When would a pie chart be appropriate vs inappropriate?',
      'How can charts be used to mislead viewers?',
      'What questions should you ask before choosing a chart type?',
      'How do color and scale choices affect perception?'
    ],
    learningOutcomes: [
      'Critically evaluate data visualizations',
      'Match chart types to data types and communication goals',
      'Identify misleading visualization techniques',
      'Create effective, honest data visualizations'
    ],
    studentGuide: {
      whatYouLearn: 'How to spot bad charts and create good ones - critical for understanding and presenting data.',
      whatToBring: 'Computer with Excel, critical eye',
      tips: [
        'Bar charts compare quantities; line charts show trends over time',
        'Pie charts only for parts of a whole, with few categories',
        'Start axes at zero unless you have a good reason not to',
        'Color should add meaning, not just decoration'
      ],
      reflectionPrompts: [
        'Where have you seen misleading charts in media?',
        'How might someone use a chart to deceive intentionally?',
        'What chart would best show your own research data?'
      ],
      extensionChallenge: 'Find a misleading chart from a published scientific paper or news article, recreate it correctly, and write a 200-word critique explaining the misrepresentation.'
    },
    lecturerGuide: {
      sessionGoal: 'Students develop visualization literacy through critique and redesign.',
      roomSetup: 'Computer lab with projector for presentations, printed bad chart gallery.',
      facilitationScript: [
        { time: '0-10 min', action: 'Gallery walk and initial critique' },
        { time: '10-18 min', action: 'Guide problem analysis documentation' },
        { time: '18-33 min', action: 'Monitor redesign work, suggest alternatives if stuck' },
        { time: '33-40 min', action: 'Facilitate presentations and voting' }
      ],
      commonMisconceptions: [
        '3D charts look more professional (they distort data)',
        'More colors make charts better',
        'Pie charts are always appropriate for percentages'
      ],
      interventions: [
        'Ask: "What story does this chart tell vs what story should it tell?"',
        'Challenge: "Could this chart mislead someone? How?"'
      ],
      formativeChecks: [
        'Verify teams can articulate why original chart is problematic',
        'Check that redesigns address the identified issues'
      ],
      rubricSnapshot: {
        excellent: 'Clear critique, excellent redesign with strong justification',
        good: 'Good critique and redesign',
        developing: 'Basic critique, redesign improves but has issues',
        beginning: 'Cannot articulate problems or redesign effectively'
      },
      postClassReflection: 'Collect best before/afters for future examples.'
    },
    variations: [
      {
        name: 'Media Focus',
        description: 'Use only charts found in news media.'
      },
      {
        name: 'Scientific Focus',
        description: 'Use charts from scientific papers.'
      },
      {
        name: 'Interactive',
        description: 'Create interactive dashboard showing multiple views.'
      }
    ],
    references: [
      { author: 'Few, S.', year: 2009, title: 'Now You See It: Simple Visualization Techniques for Quantitative Analysis', source: 'Analytics Press' },
      { author: 'Tufte, E. R.', year: 2001, title: 'The Visual Display of Quantitative Information (2nd ed.)', source: 'Graphics Press' },
      { author: 'Cairo, A.', year: 2013, title: 'The Functional Art: An Introduction to Information Graphics and Visualization', source: 'New Riders' }
    ]
  },
  // ── Week 1: File System Treasure Hunt ──
  {
    id: 'cl-008',
    title: 'File System Treasure Hunt',
    stream: 'CL',
    mode: 'Hybrid',
    week: 1,
    semester: 1,
    skills: ['problem-solving', 'logic', 'file-management', 'algorithmic-thinking'],
    durationMin: 30,
    groupSize: '3-4',
    difficulty: 'Beginner',
    objective: 'Navigate a deliberately disorganised folder hierarchy using only path logic to find hidden files, then design an optimal folder structure.',
    heroGraphic: 'file-treasure-hunt',
    materials: [
      'Computers with pre-built messy folder structure (5 levels deep)',
      'Clue cards (one per hidden file)',
      'Blank paper for structure design',
      'Pens/markers',
      'Timer'
    ],
    setup: [
      'Pre-create a chaotic folder structure on each computer (duplicate names, misleading folders, deep nesting)',
      'Hide 8-10 target files throughout the structure',
      'Prepare printed clue cards with path hints (e.g., "I live inside a folder named after a colour, three levels down")',
      'Disable the search bar on each computer'
    ],
    procedure: [
      {
        step: 1,
        title: 'The Challenge',
        description: 'Explain the task: find all hidden files using ONLY manual folder navigation — no search bar. Each clue describes a file\'s location using path-based language.',
        duration: 3,
        graphic: 'intro-briefing'
      },
      {
        step: 2,
        title: 'Treasure Hunt',
        description: 'Teams race to find all files. They must record the FULL PATH of each file they find (e.g., Desktop/Projects/Old/Misc/report.docx).',
        duration: 12,
        graphic: 'path-finding'
      },
      {
        step: 3,
        title: 'Path Analysis',
        description: 'Teams draw a tree diagram of the folder structure they explored. Identify: What made navigation hard? Where did they get lost? Why?',
        duration: 5,
        graphic: 'tree-analysis'
      },
      {
        step: 4,
        title: 'Redesign Challenge',
        description: 'Teams design an OPTIMAL folder structure for the same files. Rules: max 3 levels deep, every file reachable in ≤4 clicks, logical grouping by type/purpose.',
        duration: 8,
        graphic: 'structure-design'
      },
      {
        step: 5,
        title: 'Comparison',
        description: 'Teams present their structures. Class votes on which is most intuitive. Discuss: what makes a good hierarchy?',
        duration: 5,
        graphic: 'results-comparison'
      }
    ],
    deliverable: 'A tree diagram of the optimal folder structure with justification for each organisational decision.',
    replicabilityCheck: {
      question: 'Could someone unfamiliar with these files navigate your structure and find any file within 4 clicks?',
      successCriteria: 'Another team can locate any file in the new structure within 30 seconds',
      failureAnalysis: 'Identify which folders have ambiguous names or illogical grouping'
    },
    debriefQuestions: [
      'What made the original folder structure hard to navigate?',
      'How is a folder structure like a family tree or organisational chart?',
      'Why do computers use hierarchical file systems instead of just one big folder?',
      'How does this relate to how libraries organise books with the Dewey Decimal System?',
      'What would happen if a company\'s shared drive had no folder structure rules?'
    ],
    learningOutcomes: [
      'Understand hierarchical (tree) data structures through hands-on navigation',
      'Develop file path literacy — reading and writing folder paths',
      'Apply design thinking to create intuitive organisational systems',
      'Recognise the importance of naming conventions and logical grouping'
    ],
    studentGuide: {
      whatYouLearn: 'How computers organise files in a tree-like hierarchy, and how to design folder structures that anyone can navigate.',
      whatToBring: 'Nothing — computers and materials are provided',
      tips: [
        'Read each clue carefully — path hints tell you the LEVEL and DIRECTION',
        'Draw the structure as you explore — it\'s like making a map',
        'Think about categories: type of file? Purpose? Date? Subject?',
        'A good folder name tells you what\'s inside WITHOUT opening it'
      ],
      reflectionPrompts: [
        'How is navigating folders similar to following a map?',
        'What naming convention did you choose and why?',
        'How would your structure scale if you had 1000 files instead of 10?'
      ],
      extensionChallenge: 'Write the full file path for every file in your new structure using forward-slash notation (e.g., /Documents/Reports/2026/assignment1.docx).'
    },
    lecturerGuide: {
      sessionGoal: 'Students experience hierarchical thinking through physical navigation, then apply design principles to create effective structures.',
      roomSetup: 'Computer lab with pre-configured folder structures. Each computer should have the SAME messy structure for fair comparison.',
      facilitationScript: [
        { time: '0-3 min', action: 'Explain rules: no search bar, record paths, work as team' },
        { time: '3-15 min', action: 'Monitor treasure hunt, offer path hints if teams are completely stuck' },
        { time: '15-20 min', action: 'Guide tree diagram drawing, ensure teams label levels' },
        { time: '20-28 min', action: 'Facilitate redesign phase, challenge teams: "What if you had 100 more files?"' },
        { time: '28-30 min', action: 'Quick presentations, connect to computing concept of tree data structures' }
      ],
      commonMisconceptions: [
        'Students may think deeper = better (more folders = more organised)',
        'Some teams create too many top-level folders instead of logical groupings',
        'Students confuse file names with folder names when writing paths'
      ],
      interventions: [
        'If stuck: "What floor of a building would this file be on? What room?"',
        'If too deep: "Could you reach any file in 4 clicks or fewer?"'
      ],
      formativeChecks: [
        'Can each student write a correct file path from memory?',
        'Does the redesigned structure have clear, unambiguous folder names?'
      ],
      rubricSnapshot: {
        excellent: 'Structure is logical, names are clear, all files reachable in ≤3 levels, justification provided',
        good: 'Structure is mostly logical, minor naming issues, files reachable in ≤4 levels',
        developing: 'Some illogical groupings, vague folder names, files hard to find',
        beginning: 'Random or flat structure, no clear organising principle'
      },
      postClassReflection: 'Note which students struggled with path notation — this will recur in file referencing, hyperlinks, and later in programming.'
    },
    variations: [
      { name: 'Paper Only', description: 'Draw the messy structure on cards, students sort physical cards into a tree on a desk or wall.' },
      { name: 'Competitive', description: 'First team to find all files AND redesign wins. Add bonus points for the most elegant structure.' },
      { name: 'Extension', description: 'Have students create their own treasure hunt for another team using their new structure.' }
    ],
    references: [
      { author: 'Bell, T., Witten, I. H., & Fellows, M.', year: 2015, title: 'CS Unplugged: An enrichment and extension programme for primary-aged children', source: 'University of Canterbury, New Zealand' },
      { author: 'Wing, J. M.', year: 2006, title: 'Computational thinking', source: 'Communications of the ACM, 49(3), 33-35' },
      { author: 'Papert, S.', year: 1980, title: 'Mindstorms: Children, Computers, and Powerful Ideas', source: 'Basic Books' }
    ]
  },
  // ── Week 1: Desktop Organisation Algorithm ──
  {
    id: 'cl-009',
    title: 'Desktop Organisation Algorithm',
    stream: 'CL',
    mode: 'Unplugged',
    week: 1,
    semester: 1,
    skills: ['algorithms', 'problem-solving', 'collaboration', 'communication'],
    durationMin: 25,
    groupSize: '3-5',
    difficulty: 'Beginner',
    objective: 'Design a step-by-step rule set (algorithm) for organising any desktop that produces consistent results regardless of who follows it.',
    heroGraphic: 'desktop-algorithm',
    materials: [
      'Printed screenshots of messy desktops (4-5 different ones)',
      'Blank paper for algorithm writing',
      'Coloured pens/markers',
      'Algorithm template sheets (numbered steps)',
      'Timer'
    ],
    setup: [
      'Print 4-5 different messy desktop screenshots (mix of files, folders, shortcuts scattered randomly)',
      'Prepare algorithm template sheets with numbered lines',
      'Arrange tables for team collaboration',
      'Have a "test desktop" screenshot that NO team has seen — for the swap test'
    ],
    procedure: [
      {
        step: 1,
        title: 'The Problem',
        description: 'Show a messy desktop screenshot. Ask: "How would you organise this?" Let teams discuss briefly. Note that everyone has different ideas — that\'s the problem. We need a CONSISTENT method.',
        duration: 3,
        graphic: 'intro-briefing'
      },
      {
        step: 2,
        title: 'Algorithm Writing',
        description: 'Each team writes a step-by-step algorithm for organising ANY desktop. Rules: must be specific enough that a stranger could follow it, must handle files, folders, and shortcuts, must define categories.',
        duration: 10,
        graphic: 'method-writing'
      },
      {
        step: 3,
        title: 'Algorithm Swap',
        description: 'Teams exchange algorithms. Each team receives a NEW messy desktop screenshot they haven\'t seen AND another team\'s algorithm. They must follow the algorithm EXACTLY — no improvisation.',
        duration: 7,
        graphic: 'peer-exchange'
      },
      {
        step: 4,
        title: 'Results Review',
        description: 'Compare results: Did two teams following the same algorithm on different desktops produce consistent organisation? Where did the algorithm fail or become ambiguous?',
        duration: 3,
        graphic: 'results-comparison'
      },
      {
        step: 5,
        title: 'Debrief',
        description: 'Discuss: What makes an algorithm good? Why do computers need EXACT instructions? Connect to the concept of algorithms in computing.',
        duration: 2,
        graphic: 'debrief'
      }
    ],
    deliverable: 'A written algorithm (5-10 steps) for desktop organisation that was successfully tested by another team.',
    replicabilityCheck: {
      question: 'Did the testing team produce the same organisational result on a different desktop?',
      successCriteria: 'Both teams using the same algorithm produce recognisably similar organisation styles',
      failureAnalysis: 'Identify ambiguous steps (e.g., "put similar files together" — what does similar mean?)'
    },
    debriefQuestions: [
      'What made some algorithms easier to follow than others?',
      'Why is it important that an algorithm works for ANY input, not just one specific case?',
      'How is this similar to giving directions vs giving a MAP?',
      'What happens when a step in the algorithm is vague?',
      'Can you think of real-world algorithms you follow without thinking? (e.g., making tea, crossing the road)'
    ],
    learningOutcomes: [
      'Understand what an algorithm is — a finite sequence of well-defined steps',
      'Experience the importance of generalisation in algorithm design',
      'Develop precision in instruction writing',
      'Recognise that algorithms must handle varied inputs consistently'
    ],
    studentGuide: {
      whatYouLearn: 'What an algorithm really is — not just a computer thing, but any step-by-step process that works consistently for different inputs.',
      whatToBring: 'Pen, paper, and willingness to be very specific',
      tips: [
        'Start with: WHAT categories will you use? (by type? by date? by project?)',
        'Be precise: "Move all .docx files to a folder called Documents" is better than "organise files"',
        'Think about order: does Step 3 depend on Step 2 being done first?',
        'Test each step mentally: could a robot follow this instruction?'
      ],
      reflectionPrompts: [
        'What was the hardest part of writing precise instructions?',
        'How did you decide which categories to use?',
        'What would you change about your algorithm after seeing it tested?'
      ],
      extensionChallenge: 'Rewrite your algorithm to also handle the Downloads folder. Does it still work? If not, what needs to change?'
    },
    lecturerGuide: {
      sessionGoal: 'Students discover that algorithms must be precise, general, and ordered — through the frustration of imprecise instructions failing.',
      roomSetup: 'Teams facing each other for collaboration, separate space for the swap phase.',
      facilitationScript: [
        { time: '0-3 min', action: 'Show messy desktop, generate discussion, introduce "algorithm" concept' },
        { time: '3-13 min', action: 'Guide algorithm writing, push for specificity when you see vague steps' },
        { time: '13-20 min', action: 'Facilitate swap, enforce LITERAL following of instructions' },
        { time: '20-23 min', action: 'Review results, identify where algorithms broke down' },
        { time: '23-25 min', action: 'Connect to computing: computers follow algorithms literally, no improvisation' }
      ],
      commonMisconceptions: [
        'Students think "organise the files" is a step — it\'s a goal, not an instruction',
        'Teams assume the tester will "know what they mean" — algorithms don\'t assume',
        'Some students think longer algorithms are better — efficiency matters'
      ],
      interventions: [
        'If too vague: "If I gave this to a 5-year-old, could they do it?"',
        'If stuck on categories: "Look at the file extensions — what groups do you see?"'
      ],
      formativeChecks: [
        'Can each team explain what "generalisation" means using their algorithm as example?',
        'Did the algorithm handle unexpected files (e.g., no extension, unknown type)?'
      ],
      rubricSnapshot: {
        excellent: 'Algorithm is precise, handles edge cases, tested successfully on unknown input',
        good: 'Algorithm is mostly clear, works on test case with minor interpretation needed',
        developing: 'Algorithm has vague steps, results differ significantly between testers',
        beginning: 'Algorithm is a list of goals rather than actionable steps'
      },
      postClassReflection: 'This is the first formal algorithm exercise — note which students grasp generalisation and which write input-specific instructions.'
    },
    variations: [
      { name: 'Paper Desktops', description: 'Print file icons on cards, students physically sort them on a desk surface.' },
      { name: 'Speed Round', description: 'Limit algorithm writing to 5 minutes — forces prioritisation of the most important steps.' },
      { name: 'Digital', description: 'Students actually organise files on a real computer following each other\'s algorithms.' }
    ],
    references: [
      { author: 'BBC Bitesize', year: 2020, title: 'Introduction to Algorithms', source: 'BBC Education' },
      { author: 'Wing, J. M.', year: 2006, title: 'Computational thinking', source: 'Communications of the ACM, 49(3), 33-35' },
      { author: 'Selby, C. & Woollard, J.', year: 2013, title: 'Computational thinking: the developing definition', source: 'University of Southampton' }
    ]
  },
  // ── Week 1: AI Demonstration & Boundaries ──
  {
    id: 'cl-010',
    title: 'AI Demonstration & Boundaries',
    stream: 'CL',
    mode: 'Digital',
    week: 1,
    semester: 1,
    skills: ['ai-literacy', 'critical-thinking', 'ethics', 'responsible-use'],
    durationMin: 30,
    groupSize: '4-6',
    difficulty: 'Beginner',
    objective: 'Understand what AI can and cannot do, establish personal boundaries for responsible AI use, and recognise the difference between AI assistance and AI dependence.',
    heroGraphic: 'ai-boundaries',
    materials: [
      'Projector for live AI demonstration',
      'Access to ChatGPT or similar AI tool',
      'Printed "AI Can / AI Cannot / AI Shouldn\'t" sorting cards',
      'Green/Red/Yellow cards for each student (traffic light voting)',
      'AI Boundaries Contract template',
      'Worksheet with prompt scenarios'
    ],
    setup: [
      'Prepare 5-6 live prompts to demonstrate AI capabilities and failures',
      'Print AI capability sorting cards (15-20 statements)',
      'Set up projector with AI tool ready',
      'Prepare the "AI Boundaries Contract" template for each student',
      'Have a list of intentionally BAD prompts that show AI limitations'
    ],
    procedure: [
      {
        step: 1,
        title: 'What IS AI?',
        description: 'Brief intro: AI is pattern matching on massive data, not thinking. Show a simple example — AI completing a sentence, then failing at something obvious a human would know.',
        duration: 5,
        graphic: 'intro-briefing'
      },
      {
        step: 2,
        title: 'Live Demo: Strengths & Failures',
        description: 'Demonstrate 5 prompts live: (1) summarise a paragraph ✓, (2) explain a concept ✓, (3) invent a fake citation ✗, (4) give incorrect maths confidently ✗, (5) write biased content when prompted ✗. Students vote green/red on whether each response is trustworthy.',
        duration: 8,
        graphic: 'live-demo'
      },
      {
        step: 3,
        title: 'AI Capability Sort',
        description: 'Teams receive 15-20 statement cards (e.g., "Write my essay for me", "Check my grammar", "Generate fake references", "Explain a concept I don\'t understand"). Sort into: CAN do, CANNOT do reliably, SHOULD NOT be used for.',
        duration: 8,
        graphic: 'sorting-activity'
      },
      {
        step: 4,
        title: 'Boundaries Contract',
        description: 'Each student writes their personal "AI Boundaries Contract" — a list of rules for how THEY will use AI this semester. Must include: what they WILL use AI for, what they WON\'T use AI for, and how they will DISCLOSE AI use.',
        duration: 6,
        graphic: 'contract-writing'
      },
      {
        step: 5,
        title: 'Class Discussion',
        description: 'Share boundaries. Discuss: Is using AI for grammar checking "cheating"? Is asking AI to explain a concept different from asking a tutor? Where is the line?',
        duration: 3,
        graphic: 'debrief'
      }
    ],
    deliverable: 'A personal "AI Boundaries Contract" signed by the student, establishing ethical AI use guidelines for the semester.',
    replicabilityCheck: {
      question: 'Can you explain to someone else where the line is between AI assistance and AI dependence?',
      successCriteria: 'Student can articulate at least 3 specific scenarios where AI use is appropriate and 3 where it is not',
      failureAnalysis: 'Identify which boundaries are still unclear and why'
    },
    debriefQuestions: [
      'Were you surprised by anything the AI got wrong?',
      'Why does AI sometimes give confidently wrong answers?',
      'Is using AI to check grammar the same as using AI to write your essay? Why or why not?',
      'How will you know if you\'re becoming too dependent on AI?',
      'What responsibilities come with using AI tools?'
    ],
    learningOutcomes: [
      'Understand AI as a tool with specific capabilities and limitations',
      'Develop critical evaluation skills for AI-generated content',
      'Establish personal ethical boundaries for AI use in academics',
      'Recognise the difference between AI hallucination and reliable output',
      'Understand the concept of AI transparency and disclosure'
    ],
    studentGuide: {
      whatYouLearn: 'What AI actually is (and isn\'t), where it helps, where it fails, and how to use it responsibly throughout your studies.',
      whatToBring: 'An open mind and healthy scepticism',
      tips: [
        'AI is a TOOL, not a replacement for thinking — like a calculator doesn\'t replace understanding maths',
        'Always verify AI-generated facts — AI can sound confident while being completely wrong',
        'If you can\'t explain what the AI produced, you don\'t understand it well enough',
        'Transparency is key: always disclose when and how you used AI'
      ],
      reflectionPrompts: [
        'What surprised you most about AI\'s capabilities or limitations?',
        'How will your AI boundaries contract guide your behaviour this semester?',
        'Can you think of a situation where AI assistance crosses into academic dishonesty?'
      ],
      extensionChallenge: 'Test 5 different prompts on an AI tool this week. Record: the prompt, the response, whether it was accurate, and what you would change.'
    },
    lecturerGuide: {
      sessionGoal: 'Students leave with a realistic mental model of AI (not magic, not useless) and a personal commitment to ethical use.',
      roomSetup: 'Projector visible to all, tables for group sorting activity, individual space for contract writing.',
      facilitationScript: [
        { time: '0-5 min', action: 'Quick AI explainer: pattern matching, training data, not sentient. Keep it simple.' },
        { time: '5-13 min', action: 'Live demo with voting. Deliberately show failures. Let students be surprised.' },
        { time: '13-21 min', action: 'Sorting activity. Walk around, challenge categorisations. "Why is that in CANNOT?"' },
        { time: '21-27 min', action: 'Individual contract writing. Emphasise personal commitment, not rules imposed on them.' },
        { time: '27-30 min', action: 'Quick share and discussion. Establish class norms. Save contracts for reference all semester.' }
      ],
      commonMisconceptions: [
        'Students think AI "knows things" — it predicts likely next words based on patterns',
        'Some students believe AI is always right because it sounds confident',
        'Others think AI is always wrong and useless — need balanced perspective',
        'Students may not see grammar checking as "using AI"'
      ],
      interventions: [
        'If students are too trusting: show the fake citation demo again, ask "Would you submit this?"',
        'If students are too dismissive: show a genuinely impressive summary or explanation',
        'If boundaries are too loose: "Would you be comfortable if your lecturer saw exactly how you used AI?"'
      ],
      formativeChecks: [
        'Can each student name at least one thing AI does well and one thing it does poorly?',
        'Does the boundaries contract include both "will use for" and "will not use for"?',
        'Can students explain WHY AI sometimes gives wrong answers?'
      ],
      rubricSnapshot: {
        excellent: 'Contract shows nuanced understanding of appropriate vs inappropriate AI use, with specific examples',
        good: 'Contract distinguishes assistance from dependence, mostly clear boundaries',
        developing: 'Contract is vague or overly permissive/restrictive, lacks specific scenarios',
        beginning: 'No clear boundaries established, or blanket "never use AI" / "always use AI" position'
      },
      postClassReflection: 'Collect contracts. Reference them throughout the semester when introducing AI-integrated activities. Note students who seem confused about boundaries.'
    },
    variations: [
      { name: 'No Internet', description: 'Pre-record AI demo videos. Use printed AI responses for the sorting activity.' },
      { name: 'Debate Format', description: 'Split class into "AI is helpful" vs "AI is risky" sides, then find common ground.' },
      { name: 'Extension', description: 'Students create a class "AI Use Policy" by combining the best rules from individual contracts.' }
    ],
    references: [
      { author: 'UNESCO', year: 2023, title: 'Guidance for Generative AI in Education and Research', source: 'United Nations Educational, Scientific and Cultural Organization' },
      { author: 'Sullivan, M., Kelly, A., & McLaughlan, P.', year: 2023, title: 'ChatGPT in higher education: Considerations for academic integrity', source: 'Journal of University Teaching & Learning Practice, 20(5)' },
      { author: 'Long, D. & Magerko, B.', year: 2020, title: 'What is AI Literacy? Competencies and Design Considerations', source: 'Proceedings of CHI 2020, ACM' }
    ]
  },
  {
    id: 'cl-011',
    title: 'Email Professionalism',
    stream: 'CL',
    mode: 'Hybrid',
    week: 1,
    semester: 1,
    skills: ['communication', 'professionalism', 'writing'],
    durationMin: 15,
    groupSize: '1-2',
    difficulty: 'Beginner',
    objective: 'Identify the characteristics of professional vs unprofessional emails and compose appropriate professional responses.',
    heroGraphic: 'email-professionalism',
    materials: [
      '6 printed email scenario cards (3 professional, 3 unprofessional)',
      'Highlighters (green and red)',
      'Professional email checklist handout',
      'Blank response templates'
    ],
    setup: [
      'Print email scenario cards — mix of professional and unprofessional examples',
      'Prepare highlighters for each pair',
      'Have blank response templates ready for the composition phase'
    ],
    procedure: [
      {
        step: 1,
        title: 'Analyze Examples',
        description: 'Pairs receive 6 email scenarios. Using green and red highlighters, they mark professional elements (proper greeting, clear subject, appropriate tone) and unprofessional elements (slang, missing subject, aggressive tone). Discuss patterns noticed.',
        duration: 5,
        graphic: 'analyze-emails'
      },
      {
        step: 2,
        title: 'Identifying Patterns',
        description: 'Class collaboratively builds a "Professional Email Anatomy" chart: subject line conventions, greeting formulas, body structure, sign-off options. Compare with the unprofessional patterns found.',
        duration: 5,
        graphic: 'email-patterns'
      },
      {
        step: 3,
        title: 'Compose Responses',
        description: 'Each student selects one unprofessional email and rewrites it as a professional version. Partner reviews using the class-generated checklist, providing specific feedback.',
        duration: 5,
        graphic: 'compose-response'
      }
    ],
    deliverable: 'A professionally rewritten email with peer feedback annotations.',
    replicabilityCheck: {
      question: 'Can students consistently identify unprofessional elements and transform them into professional alternatives?',
      successCriteria: 'Students correctly identify at least 4 of 6 emails as professional/unprofessional and produce a rewrite that meets all checklist criteria.',
      failureAnalysis: 'If students struggle to distinguish tone differences, provide a side-by-side comparison with annotations before attempting independent analysis.'
    },
    debriefQuestions: [
      'What was the most common mistake in the unprofessional emails?',
      'How does email tone affect how the recipient perceives you?',
      'When might a less formal email be acceptable in a professional context?'
    ],
    learningOutcomes: [
      'Distinguish between professional and unprofessional email communication',
      'Apply professional email conventions including subject lines, greetings, and tone',
      'Provide constructive peer feedback on written communication'
    ],
    studentGuide: {
      whatYouLearn: 'How to write emails that make a strong professional impression — a skill used in every career.',
      whatToBring: 'A pen and your attention to detail.',
      tips: [
        'Read emails aloud — if it sounds rude or confusing, rewrite it',
        'Always include a clear subject line that summarises your purpose',
        'When in doubt, err on the side of being too formal rather than too casual'
      ],
      reflectionPrompts: [
        'Think of an email you sent recently — would it pass the professional checklist?',
        'How would you adjust your email style for different recipients (lecturer vs friend vs employer)?'
      ],
      extensionChallenge: 'Find a real email you received that could be improved. Rewrite it professionally and explain your changes.'
    },
    lecturerGuide: {
      sessionGoal: 'Students recognise the elements of professional email communication and can apply them in their own writing.',
      roomSetup: 'Pairs at tables with printed email cards and highlighters. Display area for building the class checklist.',
      facilitationScript: [
        { time: '0-5 min', action: 'Distribute email cards. Pairs highlight professional (green) and unprofessional (red) elements. Circulate and prompt: "What specifically makes this one unprofessional?"' },
        { time: '5-10 min', action: 'Facilitate class discussion to build the Professional Email Anatomy chart on the board. Capture key conventions: subject line, greeting, body, close.' },
        { time: '10-15 min', action: 'Students rewrite one unprofessional email. Partners review using the checklist. Collect samples for formative assessment.' }
      ],
      commonMisconceptions: [
        'Students think casual tone is acceptable because "everyone texts now"',
        'Students believe long emails are more professional — brevity with clarity is key'
      ],
      interventions: [
        'If students cannot identify issues: provide a checklist first, then re-examine the emails',
        'If rewrites are still informal: model a before/after transformation on the board'
      ],
      formativeChecks: [
        'Can each pair correctly categorise at least 5 of 6 emails?',
        'Does each rewritten email include a proper subject line, greeting, and professional tone?'
      ],
      rubricSnapshot: {
        excellent: 'Identifies all professional/unprofessional elements; rewrite is polished, clear, and appropriately formal',
        good: 'Identifies most elements; rewrite is professional with minor tone inconsistencies',
        developing: 'Identifies some elements; rewrite shows improvement but retains informal language',
        beginning: 'Cannot distinguish professional from unprofessional; rewrite lacks structure or appropriate tone'
      },
      postClassReflection: 'Note which unprofessional elements students missed most frequently. Revisit email etiquette when introducing assignment submission guidelines.'
    },
    variations: [
      { name: 'Digital Version', description: 'Use actual email drafts in a shared document. Students comment and track changes for collaborative editing.' },
      { name: 'Role-Play', description: 'Assign sender/receiver roles. One sends an unprofessional email, the other must respond professionally and explain what was wrong.' }
    ],
    references: [
      { author: 'Guffey, M.E. & Loewy, D.', year: 2021, title: 'Business Communication: Process & Product', source: 'Cengage Learning, 10th Edition' },
      { author: 'Biesenbach-Lucas, S.', year: 2007, title: 'Students Writing Emails to Faculty: An Examination of E-Politeness', source: 'Journal of Language and Social Psychology, 26(2)' }
    ]
  },
  {
    id: 'cl-012',
    title: 'Phishing Identification Game',
    stream: 'CL',
    mode: 'Hybrid',
    week: 2,
    semester: 1,
    skills: ['cybersecurity', 'pattern-recognition', 'critical-thinking', 'evidence-based-reasoning'],
    durationMin: 20,
    groupSize: '2-4',
    difficulty: 'Beginner',
    objective: 'Examine emails and messages to classify each as legitimate or phishing by identifying specific evidence such as URL patterns, sender anomalies, and urgency language.',
    heroGraphic: 'phishing-game',
    materials: [
      '10 printed email/message cards (mix of legitimate and phishing)',
      'Evidence documentation sheets',
      '"Legitimate" and "Phishing" classification bins or areas',
      'Red flag reference card (common phishing indicators)',
      'Blank decision tree template'
    ],
    setup: [
      'Print 10 email/message cards — include subtle and obvious phishing attempts alongside genuine messages',
      'Prepare evidence documentation sheets with columns for: sender, URL, language, verdict, evidence',
      'Set up classification areas (Legitimate vs Phishing) at each table',
      'Have blank decision tree templates ready for the final phase'
    ],
    procedure: [
      {
        step: 1,
        title: 'Review Examples',
        description: 'Facilitator shows two example emails — one clearly legitimate, one clearly phishing. Class identifies the red flags together: suspicious URLs, generic greetings, urgency language, sender mismatch.',
        duration: 4,
        graphic: 'phishing-examples'
      },
      {
        step: 2,
        title: 'Classify Emails',
        description: 'Teams receive 10 email/message cards. For each, they discuss and place it in the Legitimate or Phishing category. No evidence required yet — just initial gut instinct classification.',
        duration: 5,
        graphic: 'classify-emails'
      },
      {
        step: 3,
        title: 'Document Evidence',
        description: 'Teams revisit each classification and document specific evidence: What URL patterns did you notice? What sender anomalies? What urgency tactics? Each classification must have at least 2 evidence points.',
        duration: 6,
        graphic: 'document-evidence'
      },
      {
        step: 4,
        title: 'Build Detection Rules',
        description: 'Using their documented evidence, each team builds a decision tree: a step-by-step set of yes/no questions that would correctly classify all 10 examples. Teams swap decision trees and test against the emails.',
        duration: 5,
        graphic: 'decision-tree'
      }
    ],
    deliverable: 'A phishing detection decision tree that correctly classifies all 10 email scenarios with documented evidence.',
    replicabilityCheck: {
      question: 'Can another team use your decision tree to correctly classify all 10 emails without prior knowledge?',
      successCriteria: 'A swapped decision tree achieves at least 8/10 correct classifications when used by another team.',
      failureAnalysis: 'If the decision tree fails, review which emails were misclassified and refine the branching questions. Common issue: overly specific rules that do not generalise.'
    },
    debriefQuestions: [
      'Which phishing email was hardest to detect, and why?',
      'What single red flag is the most reliable indicator of a phishing attempt?',
      'How could phishing techniques evolve to bypass your decision tree?'
    ],
    learningOutcomes: [
      'Identify common phishing indicators including URL manipulation, sender spoofing, and urgency tactics',
      'Construct evidence-based arguments for classifying messages as legitimate or malicious',
      'Create a reusable decision tree for systematic threat detection'
    ],
    studentGuide: {
      whatYouLearn: 'How to spot phishing attacks using systematic evidence analysis — a critical digital survival skill.',
      whatToBring: 'A pen and a healthy dose of skepticism.',
      tips: [
        'Always check the actual URL, not just the display text — hover before you click',
        'Legitimate organisations rarely create artificial urgency ("Act NOW or lose your account!")',
        'When in doubt, contact the supposed sender through a known, separate channel'
      ],
      reflectionPrompts: [
        'Have you ever received a suspicious email? What made you suspicious (or not)?',
        'How would you explain phishing detection to a family member who is not tech-savvy?'
      ],
      extensionChallenge: 'Design your own convincing (but clearly labelled as fake) phishing email and explain what makes it effective. Then list how a careful reader could detect it.'
    },
    lecturerGuide: {
      sessionGoal: 'Students develop systematic, evidence-based approaches to identifying phishing attempts rather than relying on intuition.',
      roomSetup: 'Teams of 2-4 at tables. Each table needs email cards, evidence sheets, and classification areas. Display area for decision trees.',
      facilitationScript: [
        { time: '0-4 min', action: 'Show two example emails. Guide class through identifying red flags. Establish vocabulary: URL spoofing, sender mismatch, urgency language, generic greeting.' },
        { time: '4-9 min', action: 'Distribute 10 cards. Teams do rapid classification. Encourage discussion but no formal evidence yet. Note which teams disagree on specific emails.' },
        { time: '9-15 min', action: 'Teams document evidence for each classification. Circulate and challenge: "What specifically in the URL tells you this?" Push for concrete evidence, not gut feeling.' },
        { time: '15-20 min', action: 'Teams build decision trees. Swap and test. Debrief: which questions were most effective? Reveal correct answers and discuss the hardest cases.' }
      ],
      commonMisconceptions: [
        'Students think phishing is always obvious — show sophisticated spear-phishing examples',
        'Students believe only email is used for phishing — discuss SMS (smishing) and voice (vishing) variants'
      ],
      interventions: [
        'If teams classify everything as phishing: remind them that legitimate emails exist and over-caution has costs too',
        'If teams miss subtle indicators: provide the red flag reference card and ask them to re-examine'
      ],
      formativeChecks: [
        'Can each team provide at least 2 specific evidence points per classification?',
        'Does the decision tree use generalizable rules rather than memorised answers?'
      ],
      rubricSnapshot: {
        excellent: 'All classifications correct with detailed evidence; decision tree generalises beyond the 10 examples',
        good: '8-9 correct classifications; evidence is specific; decision tree works for most cases',
        developing: '6-7 correct; evidence is vague or relies on intuition; decision tree is incomplete',
        beginning: 'Fewer than 6 correct; no systematic evidence; no functional decision tree'
      },
      postClassReflection: 'Note which phishing indicators students found most difficult. Consider a follow-up activity with real-world examples from recent phishing campaigns.'
    },
    variations: [
      { name: 'Competitive Mode', description: 'Teams score points for correct classifications. Bonus points for identifying evidence that other teams missed.' },
      { name: 'Create Your Own', description: 'After classification, teams design their own phishing email and challenge another team to detect it.' }
    ],
    references: [
      { author: 'Kumaraguru, P., Rhee, Y., Acquisti, A., Cranor, L.F., Hong, J., & Nunge, E.', year: 2007, title: 'Protecting People from Phishing: The Design and Evaluation of an Embedded Training Email System', source: 'Proceedings of CHI 2007, ACM' },
      { author: 'Wash, R.', year: 2020, title: 'How Experts Detect Phishing Scam Emails', source: 'Proceedings of the ACM on Human-Computer Interaction, 4(CSCW2)' }
    ]
  },
  {
    id: 'cl-013',
    title: 'Error Detection: Card Flip Magic',
    stream: 'CL',
    mode: 'Unplugged',
    week: 2,
    semester: 1,
    skills: ['error-detection', 'parity', 'deductive-reasoning', 'algorithms'],
    durationMin: 25,
    groupSize: '4-8',
    difficulty: 'Intermediate',
    objective: 'Discover how parity bits enable error detection by reverse-engineering the card flip magic trick and replicating the parity check algorithm.',
    heroGraphic: 'card-flip-parity',
    materials: [
      '36 two-colour cards (e.g., black on one side, white on the other) per group',
      'Large demonstration grid (5×5) visible to all students',
      '6 extra cards for the parity row and column',
      'Grid template sheets for student practice',
      'Algorithm documentation worksheets'
    ],
    setup: [
      'Prepare a visible 5×5 demonstration grid at the front of the room',
      'Distribute 36 two-colour cards to each group',
      'Have grid template sheets ready for the practice phase',
      'Practice the trick beforehand to ensure smooth demonstration'
    ],
    procedure: [
      {
        step: 1,
        title: 'Demonstration',
        description: 'Lecturer sets up a 5×5 grid of randomly placed cards. Adds a 6th row and 6th column (the parity bits). A volunteer flips one card. The lecturer identifies the flipped card instantly. Repeat 2-3 times to build intrigue.',
        duration: 6,
        graphic: 'parity-demo'
      },
      {
        step: 2,
        title: 'Investigation',
        description: 'Groups discuss and hypothesise: how does the trick work? They examine the grid before and after flips, looking for patterns. Guiding question: "What is special about each row and each column?"',
        duration: 7,
        graphic: 'parity-investigation'
      },
      {
        step: 3,
        title: 'Reverse-Engineer the Algorithm',
        description: 'Groups discover the parity rule: each row and column must have an even number of one colour. The extra row/column enforces this. A flip breaks parity in exactly one row and one column — the intersection is the flipped card. Groups write the algorithm as step-by-step instructions.',
        duration: 7,
        graphic: 'parity-algorithm'
      },
      {
        step: 4,
        title: 'Practice & Teach',
        description: 'Each group member takes turns being the "magician." They set up the grid, add parity bits, and detect flipped cards. Groups then pair with another group to teach the algorithm and verify it works.',
        duration: 5,
        graphic: 'parity-practice'
      }
    ],
    deliverable: 'A written step-by-step parity check algorithm and a successful live demonstration of the card flip detection trick.',
    replicabilityCheck: {
      question: 'Can every group member independently set up the parity grid and detect a flipped card?',
      successCriteria: 'Each member successfully detects the flipped card at least 2 out of 3 times using the parity algorithm.',
      failureAnalysis: 'If students cannot detect the flip, check whether they are counting parity correctly. Common error: forgetting to count the parity row/column itself in the check.'
    },
    debriefQuestions: [
      'How is this trick related to how computers detect errors in data transmission?',
      'What happens if TWO cards are flipped — can the algorithm still detect the error?',
      'Where in real life are parity checks or similar error detection methods used?'
    ],
    learningOutcomes: [
      'Explain how parity bits enable single-error detection in a data grid',
      'Reverse-engineer an algorithm from observed behaviour',
      'Replicate and teach the parity check procedure to peers'
    ],
    studentGuide: {
      whatYouLearn: 'How computers detect errors using a simple but powerful mathematical trick — the same principle behind real error-checking systems.',
      whatToBring: 'Curiosity and patience — the trick will seem like magic until you crack the code.',
      tips: [
        'Focus on counting: how many black cards are in each row and column?',
        'The extra row and column are the key — pay close attention to how they are chosen',
        'When practising, start with a 3×3 grid before attempting 5×5'
      ],
      reflectionPrompts: [
        'Why is it important for computers to detect when data has been corrupted?',
        'What would happen if the internet had no error detection — how would your experience change?'
      ],
      extensionChallenge: 'Research how ISBN numbers use a check digit for error detection. How is it similar to the parity card trick?'
    },
    lecturerGuide: {
      sessionGoal: 'Students discover the parity check algorithm through guided investigation and can replicate it independently.',
      roomSetup: 'Large demonstration grid visible to all. Groups of 4-8 at tables with card sets and grid templates. Space for groups to pair up in the final phase.',
      facilitationScript: [
        { time: '0-6 min', action: 'Perform the trick 2-3 times. Build suspense. Do NOT reveal the method. Ask: "Is it memorisation? Pattern recognition? Magic?" Let curiosity build.' },
        { time: '6-13 min', action: 'Groups investigate. Circulate and offer hints ONLY if groups are stuck after 5 minutes: "Count the cards in each row. What do you notice?" Do not reveal the answer directly.' },
        { time: '13-20 min', action: 'Guide groups to articulate the parity rule. Have them write the algorithm as numbered steps. Check: "Would someone who has never seen the trick be able to follow your instructions?"' },
        { time: '20-25 min', action: 'Practice rounds. Every member tries being the magician. Groups pair up to teach and verify. Debrief: connect to real-world error detection (QR codes, network packets, ISBN).' }
      ],
      commonMisconceptions: [
        'Students think the trick involves memorising the grid — emphasise that the method is algorithmic, not memory-based',
        'Students may think parity only works with even numbers of cards — clarify that parity is about making counts even'
      ],
      interventions: [
        'If groups are completely stuck after 5 minutes: hint "count the black cards in row 1, then row 2, then row 3..." and let them notice the pattern',
        'If groups find the rule but cannot articulate the algorithm: ask them to explain it to you as if you know nothing'
      ],
      formativeChecks: [
        'Can each group state the parity rule in their own words?',
        'Can each member perform the trick independently at least twice?'
      ],
      rubricSnapshot: {
        excellent: 'Clearly articulates the parity algorithm; performs the trick flawlessly; connects to real-world error detection',
        good: 'Understands the parity rule; performs the trick with occasional errors; some connection to real applications',
        developing: 'Partially grasps parity; needs prompts to perform the trick; limited connection to real-world use',
        beginning: 'Cannot explain parity; unable to perform the trick independently; no real-world connections made'
      },
      postClassReflection: 'Note which groups discovered the algorithm independently vs those needing hints. Consider using this as a gateway to binary representation and data integrity topics.'
    },
    variations: [
      { name: 'Smaller Grid', description: 'Use a 3×3 grid with a parity row/column (4×4 total) for faster rounds and younger audiences.' },
      { name: 'Digital Simulation', description: 'Use a spreadsheet or interactive web app to simulate the grid. Students flip cells and observe parity changes in real time.' }
    ],
    references: [
      { author: 'Bell, T., Witten, I.H., & Fellows, M.', year: 2015, title: 'CS Unplugged: An Enrichment and Extension Programme for Primary-Aged Students', source: 'csunplugged.org' },
      { author: 'Baloian, N., Breuer, H., & Luther, W.', year: 2010, title: 'Algorithm Visualization Using Tangible Interfaces', source: 'Journal of Visual Languages & Computing, 21(3)' }
    ]
  },
  {
    id: 'cl-014',
    title: 'Password Strength Calculator',
    stream: 'CL',
    mode: 'Unplugged',
    week: 2,
    semester: 1,
    skills: ['combinatorics', 'exponential-thinking', 'cybersecurity', 'mathematical-reasoning'],
    durationMin: 20,
    groupSize: '2-4',
    difficulty: 'Beginner',
    objective: 'Calculate password combination spaces for different lengths and character sets, chart exponential growth, and determine minimum acceptable password criteria.',
    heroGraphic: 'password-calculator',
    materials: [
      'Password worksheet with combination calculation tables',
      'Character set reference card (digits: 10, lowercase: 26, mixed case: 52, alphanumeric+symbols: 95)',
      'Graph paper or pre-drawn exponential growth chart template',
      'Calculator (optional — encourage mental/paper math first)',
      'Brute-force time estimation reference sheet'
    ],
    setup: [
      'Distribute password worksheets and character set reference cards',
      'Prepare graph paper or chart templates for plotting',
      'Write the key formula on the board: combinations = (character set size) ^ (password length)',
      'Have brute-force time estimation reference ready for the criteria phase'
    ],
    procedure: [
      {
        step: 1,
        title: 'Calculate Combinations',
        description: 'Pairs work through the worksheet: How many combinations for a 4-digit PIN (10^4)? A 6-character lowercase password (26^6)? An 8-character mixed-case+numbers password (62^8)? They compute by hand before checking with a calculator. Discuss: why does character set size matter so much?',
        duration: 7,
        graphic: 'calculate-combinations'
      },
      {
        step: 2,
        title: 'Chart Exponential Growth',
        description: 'Using their calculated values, pairs plot password length (x-axis) vs number of combinations (y-axis) for at least two character sets. They observe the exponential curve and compare: adding one character vs adding symbols to the character set. Which grows faster?',
        duration: 7,
        graphic: 'exponential-chart'
      },
      {
        step: 3,
        title: 'Define Minimum Criteria',
        description: 'Using the brute-force reference sheet (attempts per second for different attackers), students determine: what is the minimum password length and character set needed to resist a brute-force attack for at least 1 year? They draft a "Password Policy" with their recommendations.',
        duration: 6,
        graphic: 'define-criteria'
      }
    ],
    deliverable: 'An exponential growth chart comparing character sets and a written password policy with mathematically justified minimum criteria.',
    replicabilityCheck: {
      question: 'Can students independently calculate the combination space for a given password specification?',
      successCriteria: 'Students correctly calculate combinations for at least 3 different password specifications and their chart shows a clear exponential curve.',
      failureAnalysis: 'If students struggle with exponents, start with smaller examples (2-character passwords) and build up. Use concrete analogies: a 2-digit lock has 100 combinations, a 3-digit lock has 1000.'
    },
    debriefQuestions: [
      'Why is a longer password with fewer character types often stronger than a shorter password with many character types?',
      'If a computer can try 1 billion passwords per second, how long would it take to crack your current password?',
      'What are the practical limitations of making passwords extremely long and complex?'
    ],
    learningOutcomes: [
      'Calculate combination spaces using exponentiation for different password configurations',
      'Visualise and interpret exponential growth in a security context',
      'Apply mathematical reasoning to define evidence-based security policies'
    ],
    studentGuide: {
      whatYouLearn: 'The mathematics behind password security — why some passwords fall in seconds while others would take centuries to crack.',
      whatToBring: 'A pen, curiosity about numbers, and optionally a basic calculator.',
      tips: [
        'Start with small examples to build intuition before tackling large numbers',
        'Remember: each additional character MULTIPLIES the total combinations, it does not just add',
        'Think about passwords you use — would they survive the brute-force test?'
      ],
      reflectionPrompts: [
        'After seeing the mathematics, will you change how you create passwords? Why or why not?',
        'Why do some websites enforce minimum password requirements — what are they protecting against?'
      ],
      extensionChallenge: 'Research how password managers generate and store passwords. Calculate the combination space of a typical generated password and compare it to your usual password style.'
    },
    lecturerGuide: {
      sessionGoal: 'Students understand exponential growth in the context of password security and can make evidence-based recommendations.',
      roomSetup: 'Pairs at tables with worksheets, reference cards, and graph paper. Formula visible on the board. Calculator available but not immediately distributed.',
      facilitationScript: [
        { time: '0-7 min', action: 'Distribute worksheets. Pairs calculate combination spaces. Encourage paper math first. Circulate and check: "How did you get that number? Walk me through it." Provide calculators after initial attempts.' },
        { time: '7-14 min', action: 'Pairs plot their values. Guide: "Use a log scale if the numbers are too large." Prompt comparison: "Which line grows faster — longer passwords or bigger character sets?" Discuss the crossover point.' },
        { time: '14-20 min', action: 'Distribute brute-force reference. Pairs draft password policies. Share recommendations. Debrief: connect to real password requirements they encounter. Why do banks require different rules than social media?' }
      ],
      commonMisconceptions: [
        'Students think adding one special character makes a password vastly stronger — show that length has a greater impact',
        'Students confuse password complexity with password memorability — discuss passphrases as an alternative'
      ],
      interventions: [
        'If students struggle with exponents: start with a 1-character password (just the character set size) and build up one character at a time',
        'If the chart does not look exponential: check whether students are using the correct scale or have calculation errors'
      ],
      formativeChecks: [
        'Can each pair correctly compute 26^6 and explain what it represents?',
        'Does the password policy include both a minimum length and character set requirement with mathematical justification?'
      ],
      rubricSnapshot: {
        excellent: 'All calculations correct; chart clearly shows exponential growth for multiple character sets; policy is mathematically justified and practical',
        good: 'Most calculations correct; chart shows exponential trend; policy has some mathematical backing',
        developing: 'Some calculation errors; chart is incomplete or linear; policy lacks mathematical justification',
        beginning: 'Cannot perform exponent calculations; no chart produced; no policy or policy is arbitrary'
      },
      postClassReflection: 'Observe which students struggle with exponents — they may need additional support in mathematical reasoning. Reference this activity when discussing encryption key sizes later in the course.'
    },
    variations: [
      { name: 'Competitive Challenge', description: 'Teams compete to find the shortest password that would resist a brute-force attack for 100 years. Must show their working.' },
      { name: 'Passphrase Comparison', description: 'Calculate the combination space of a 4-word passphrase from a 2000-word dictionary vs a random 10-character password. Discuss the implications.' }
    ],
    references: [
      { author: 'Bonneau, J.', year: 2012, title: 'The Science of Guessing: Analyzing an Anonymized Corpus of 70 Million Passwords', source: 'Proceedings of IEEE Symposium on Security and Privacy' },
      { author: 'Florencio, D. & Herley, C.', year: 2007, title: 'A Large-Scale Study of Web Password Habits', source: 'Proceedings of WWW 2007, ACM' }
    ]
  },
  // ============================================
  // CL-015 to CL-019: DOCUMENT & REPORT SKILLS
  // ============================================
  {
    id: 'cl-015',
    title: 'Document Debugging Challenge',
    stream: 'CL',
    mode: 'Digital',
    week: 3,
    semester: 1,
    skills: ['debugging', 'attention-to-detail', 'word-processing', 'systematic-thinking'],
    durationMin: 25,
    groupSize: '1-2',
    difficulty: 'Beginner',
    objective: 'Systematically identify and fix formatting errors in a Word document, applying debugging principles to document preparation.',
    heroGraphic: 'document-debugging',
    materials: [
      'Pre-prepared Word document with 15 deliberate formatting errors',
      'Error checklist template',
      'Style guide reference sheet',
      'Computer with Microsoft Word or equivalent'
    ],
    setup: [
      'Distribute the bugged Word document to each student or pair',
      'Provide the error checklist template for tracking findings',
      'Display the style guide reference sheet on screen or print copies',
      'Ensure all students have access to Word or equivalent word processor'
    ],
    procedure: [
      {
        step: 1,
        title: 'Systematic Scan',
        description: 'Students methodically scan the document from top to bottom, checking fonts, headings, spacing, styles, and paragraph formatting against the style guide. Record each error found on the checklist.',
        duration: 10,
        graphic: 'systematic-scan'
      },
      {
        step: 2,
        title: 'Document Errors',
        description: 'For each error found, students document: what is wrong, where it is located, and what the correct formatting should be. They categorise errors by type (font, spacing, heading, style, paragraph).',
        duration: 7,
        graphic: 'document-errors'
      },
      {
        step: 3,
        title: 'Fix and Verify',
        description: 'Students apply fixes for all identified errors, then swap documents with a partner to verify. Partners check if all 15 errors were found and correctly fixed. Score completeness.',
        duration: 8,
        graphic: 'fix-verify'
      }
    ],
    deliverable: 'A fully corrected Word document with an accompanying error log listing all 15 errors found, their locations, and the fixes applied.',
    replicabilityCheck: {
      question: 'Did your partner confirm that all 15 formatting errors were identified and correctly fixed?',
      successCriteria: 'All 15 errors identified with correct fixes applied and verified by a peer',
      failureAnalysis: 'Identify which error types were missed and why — was it a scanning method issue or a knowledge gap?'
    },
    debriefQuestions: [
      'Which types of formatting errors were hardest to spot and why?',
      'How did having a systematic scanning method help compared to random checking?',
      'How is debugging a document similar to debugging code?'
    ],
    learningOutcomes: [
      'Apply systematic debugging techniques to document formatting',
      'Identify common formatting errors in professional documents',
      'Develop attention to detail through structured error detection'
    ],
    studentGuide: {
      whatYouLearn: 'How to systematically find and fix formatting errors in documents, applying the same debugging mindset used in programming.',
      whatToBring: 'Laptop with Word or equivalent word processor installed.',
      tips: [
        'Work top-to-bottom — don\'t jump around randomly',
        'Check one formatting category at a time (fonts first, then spacing, then headings)',
        'Use the style guide as your reference for what "correct" looks like'
      ],
      reflectionPrompts: [
        'What systematic approach did you develop for scanning documents?',
        'How could you apply this debugging approach to your own assignments before submission?'
      ],
      extensionChallenge: 'Create your own "bugged" document with 10 errors and challenge a classmate to find them all.'
    },
    lecturerGuide: {
      sessionGoal: 'Students develop systematic debugging habits for document formatting, building attention to detail and methodical problem-solving.',
      roomSetup: 'Computer lab with one workstation per student or pair. Style guide displayed on projector.',
      facilitationScript: [
        { time: '0-3 min', action: 'Introduce the concept of "document debugging" and distribute the bugged document. Explain scoring: 1 point per correctly identified and fixed error.' },
        { time: '3-13 min', action: 'Students scan and document errors. Circulate and observe scanning strategies — note who works systematically vs. randomly.' },
        { time: '13-20 min', action: 'Students fix errors and swap for peer verification. Facilitate comparison discussion.' },
        { time: '20-25 min', action: 'Reveal the full error list. Discuss which errors were most commonly missed and why.' }
      ],
      commonMisconceptions: [
        'Students may think formatting errors are trivial — emphasise how they affect professional credibility',
        'Some students may fix errors without documenting them — stress the importance of the error log for learning'
      ],
      interventions: [
        'If students are stuck, prompt them to check one category at a time rather than looking for everything at once',
        'For fast finishers, ask them to classify their errors by severity and impact on readability'
      ],
      formativeChecks: [
        'Review error logs for completeness and categorisation quality',
        'Check that fixes actually match the style guide specifications'
      ],
      rubricSnapshot: {
        excellent: 'All 15 errors found, correctly categorised, and properly fixed with detailed error log',
        good: '12-14 errors found and fixed with adequate documentation',
        developing: '8-11 errors found with some fixes applied',
        beginning: 'Fewer than 8 errors found or fixes not applied correctly'
      },
      postClassReflection: 'Note which error types students consistently miss — these indicate areas needing more instruction. Use findings to inform future document formatting lessons.'
    },
    variations: [
      { name: 'Timed Competition', description: 'Set a 15-minute timer and award bonus points for speed. First pair to find all 15 errors correctly wins.' },
      { name: 'Create-Your-Own Bugs', description: 'After fixing the provided document, students create their own bugged document for another pair to debug.' }
    ],
    references: [
      { author: 'Zeller, A.', year: 2009, title: 'Why Programs Fail: A Guide to Systematic Debugging', source: 'Morgan Kaufmann Publishers' },
      { author: 'Bell, T., Witten, I.H. & Fellows, M.', year: 2015, title: 'CS Unplugged: An Enrichment and Extension Programme for Primary-Aged Students', source: 'csunplugged.org' }
    ]
  },
  {
    id: 'cl-016',
    title: 'Format & Compare with AI Output',
    stream: 'CL',
    mode: 'Hybrid',
    week: 3,
    semester: 1,
    skills: ['critical-evaluation', 'ai-literacy', 'formatting', 'comparative-analysis'],
    durationMin: 15,
    groupSize: '1-2',
    difficulty: 'Beginner',
    objective: 'Critically evaluate AI-generated formatting by comparing it against manual formatting work, identifying strengths and limitations of AI output.',
    heroGraphic: 'ai-format-compare',
    materials: [
      'Pre-prepared messy paragraph (inconsistent fonts, spacing, no headings)',
      'Computer with Word or equivalent word processor',
      'Access to an AI tool (e.g., ChatGPT, Copilot)',
      'Comparison worksheet'
    ],
    setup: [
      'Distribute the messy paragraph document to each student or pair',
      'Ensure students have access to both a word processor and an AI tool',
      'Provide the comparison worksheet for recording observations',
      'Brief students on acceptable AI tools for the exercise'
    ],
    procedure: [
      {
        step: 1,
        title: 'Manual Formatting',
        description: 'Students manually format the messy paragraph in Word: apply appropriate heading styles, fix spacing, ensure font consistency, and add proper paragraph breaks.',
        duration: 5,
        graphic: 'manual-formatting'
      },
      {
        step: 2,
        title: 'AI Formatting',
        description: 'Students prompt an AI tool to format the same messy paragraph. They experiment with different prompts to get the best result and paste the AI output into a new document.',
        duration: 5,
        graphic: 'ai-formatting'
      },
      {
        step: 3,
        title: 'Critical Comparison',
        description: 'Students compare their manual formatting with the AI output side by side. They complete the worksheet noting: What did AI do better? What did it get wrong? What required human judgment? Discuss findings with a partner.',
        duration: 5,
        graphic: 'critical-comparison'
      }
    ],
    deliverable: 'A completed comparison worksheet documenting specific differences between manual and AI formatting, with reasoned judgments on which approach was better for each aspect.',
    replicabilityCheck: {
      question: 'Can you identify at least three specific differences between your manual formatting and the AI output?',
      successCriteria: 'At least three clearly articulated differences with reasoned evaluation of which version is better for each',
      failureAnalysis: 'If differences were not found, examine whether the AI prompt was specific enough or the manual formatting thorough enough'
    },
    debriefQuestions: [
      'What formatting decisions required human judgment that AI couldn\'t replicate?',
      'How did the quality of your AI prompt affect the output?',
      'In what situations would you trust AI formatting, and when would you do it manually?'
    ],
    learningOutcomes: [
      'Critically evaluate AI-generated output against human work',
      'Identify limitations and strengths of AI tools for document formatting',
      'Develop informed judgment about when to use AI assistance'
    ],
    studentGuide: {
      whatYouLearn: 'How to critically compare AI-generated formatting with your own work, developing the judgment to know when AI helps and when human decisions are needed.',
      whatToBring: 'Laptop with Word and access to an AI chatbot (ChatGPT, Copilot, or similar).',
      tips: [
        'Do your manual formatting FIRST before using AI — this prevents bias',
        'Try at least two different prompts with the AI to see how prompt wording affects output',
        'Be specific in your comparison — don\'t just say "AI was better", explain exactly what was better and why'
      ],
      reflectionPrompts: [
        'What surprised you most about the AI\'s formatting compared to yours?',
        'How might you use AI as a formatting assistant rather than a replacement in future assignments?'
      ],
      extensionChallenge: 'Write a "best practice guide" for using AI formatting tools, based on your findings from this exercise.'
    },
    lecturerGuide: {
      sessionGoal: 'Students develop critical AI literacy by directly comparing their own work to AI output, building nuanced understanding of AI capabilities and limitations.',
      roomSetup: 'Computer lab with internet access. Ensure AI tools are accessible and not blocked by institutional firewalls.',
      facilitationScript: [
        { time: '0-2 min', action: 'Introduce the exercise. Emphasise: do manual formatting FIRST, then AI. Distribute the messy paragraph.' },
        { time: '2-7 min', action: 'Students manually format the paragraph. Remind them to apply heading styles, fix spacing, and ensure consistency.' },
        { time: '7-12 min', action: 'Students use AI to format the same paragraph. Encourage them to try different prompts.' },
        { time: '12-15 min', action: 'Students compare results and complete the worksheet. Facilitate brief class discussion on key findings.' }
      ],
      commonMisconceptions: [
        'Students may assume AI output is always correct — this exercise directly challenges that assumption',
        'Some students may think manual formatting is pointless if AI can do it — highlight cases where AI fails'
      ],
      interventions: [
        'If AI tools are unavailable, have pre-prepared AI output samples for comparison',
        'For students who finish early, ask them to test whether the AI can handle more complex formatting tasks'
      ],
      formativeChecks: [
        'Review comparison worksheets for depth of critical analysis',
        'Check that students can articulate specific scenarios where human judgment is needed'
      ],
      rubricSnapshot: {
        excellent: 'Identifies 3+ specific differences with nuanced evaluation of AI strengths and limitations',
        good: 'Identifies 2-3 differences with reasonable evaluation',
        developing: 'Identifies 1-2 differences but evaluation is superficial',
        beginning: 'Unable to articulate meaningful differences between manual and AI output'
      },
      postClassReflection: 'This activity builds AI literacy foundations. Note whether students lean toward over-trusting or under-trusting AI — both biases need addressing in future sessions.'
    },
    variations: [
      { name: 'Prompt Engineering Focus', description: 'Students test 5 different prompts and rank the AI outputs, analysing how prompt specificity affects formatting quality.' },
      { name: 'Complex Document Comparison', description: 'Use a multi-page document with tables, images, and references instead of a single paragraph.' }
    ],
    references: [
      { author: 'Mollick, E. & Mollick, L.', year: 2023, title: 'Assigning AI: Seven Approaches for Students, with Prompts', source: 'Wharton School Research Paper' },
      { author: 'UNESCO', year: 2023, title: 'Guidance for Generative AI in Education and Research', source: 'UNESCO Publishing' }
    ]
  },
  {
    id: 'cl-017',
    title: 'Report Structure Decomposition',
    stream: 'CL',
    mode: 'Hybrid',
    week: 4,
    semester: 1,
    skills: ['decomposition', 'dependency-analysis', 'document-structure', 'abstraction'],
    durationMin: 25,
    groupSize: '2-4',
    difficulty: 'Intermediate',
    objective: 'Decompose a complex professional report into its component parts, map dependencies between elements, and rebuild the structure from scratch.',
    heroGraphic: 'report-decomposition',
    materials: [
      'Printed or digital 8-page professional report',
      'Large poster paper or whiteboard',
      'Coloured markers or sticky notes',
      'Structural diagram template',
      'Computer with Word for rebuild phase'
    ],
    setup: [
      'Distribute copies of the 8-page professional report to each group',
      'Provide poster paper and markers for structural diagrams',
      'Set up workstations with Word for the rebuild phase',
      'Display an example dependency diagram for reference'
    ],
    procedure: [
      {
        step: 1,
        title: 'Analyse Report',
        description: 'Groups examine the 8-page report and identify every distinct component: title page, table of contents, heading levels, figure captions, headers/footers, page numbers, reference list, appendices. List all components found.',
        duration: 6,
        graphic: 'analyse-report'
      },
      {
        step: 2,
        title: 'Map Components and Identify Dependencies',
        description: 'Groups create a structural diagram on poster paper showing all components and their relationships. Draw arrows to show dependencies (e.g., TOC depends on headings, cross-references depend on figure captions, page numbers depend on headers/footers).',
        duration: 8,
        graphic: 'map-dependencies'
      },
      {
        step: 3,
        title: 'Determine Build Order',
        description: 'Based on the dependency map, groups determine the correct ORDER to build the document. Which elements must be created first? Which ones can only be added after others exist? Create a numbered build sequence.',
        duration: 4,
        graphic: 'build-order'
      },
      {
        step: 4,
        title: 'Rebuild Structure',
        description: 'Following their build sequence, groups rebuild the document structure from scratch in Word. They create the skeleton (headings, TOC, figure placeholders, headers/footers) without actual content. Verify the structure matches the original.',
        duration: 7,
        graphic: 'rebuild-structure'
      }
    ],
    deliverable: 'A structural dependency diagram and a rebuilt Word document skeleton that mirrors the original report\'s structure, created in the correct dependency order.',
    replicabilityCheck: {
      question: 'Does your rebuilt document skeleton contain all the structural elements of the original report in the correct hierarchy?',
      successCriteria: 'All components identified, dependency diagram is accurate, and rebuilt skeleton matches original structure',
      failureAnalysis: 'Identify which components or dependencies were missed and whether the build order was incorrect'
    },
    debriefQuestions: [
      'Why does the ORDER in which you build a document matter?',
      'How is decomposing a report similar to decomposing a programming problem?',
      'Which dependencies surprised you — what elements rely on others that you didn\'t expect?'
    ],
    learningOutcomes: [
      'Decompose complex documents into identifiable component parts',
      'Identify and map dependencies between document elements',
      'Apply correct build order when constructing professional documents'
    ],
    studentGuide: {
      whatYouLearn: 'How to break a complex report into its building blocks, understand how the pieces depend on each other, and build documents in the right order — a core computational thinking skill.',
      whatToBring: 'Laptop with Word. Coloured pens or markers if you have them.',
      tips: [
        'Start by listing EVERY component you can see, even small ones like page numbers',
        'Ask yourself: "If I deleted this element, what else would break?" — that reveals dependencies',
        'Your build order should go from independent elements (no dependencies) to dependent ones'
      ],
      reflectionPrompts: [
        'How does understanding document dependencies change the way you\'ll approach creating reports in future?',
        'What parallels do you see between document structure and how software systems are built?'
      ],
      extensionChallenge: 'Find a real academic paper or industry report and create its complete dependency diagram. Present it to the class.'
    },
    lecturerGuide: {
      sessionGoal: 'Students apply the CS Unplugged concept of decomposition to document structure, understanding that professional documents have interdependent components that must be built in a specific order.',
      roomSetup: 'Groups at tables with poster paper and markers. Computer access for the rebuild phase. Example dependency diagram projected.',
      facilitationScript: [
        { time: '0-3 min', action: 'Introduce decomposition as a computational thinking concept. Distribute the report and explain the task: break it apart, map it, rebuild it.' },
        { time: '3-9 min', action: 'Groups analyse the report and list components. Circulate to ensure they\'re finding structural elements, not just reading content.' },
        { time: '9-17 min', action: 'Groups create dependency diagrams. Prompt groups to think about what depends on what. Challenge them to find non-obvious dependencies.' },
        { time: '17-25 min', action: 'Groups determine build order and rebuild the skeleton in Word. Compare rebuilt structures with originals.' }
      ],
      commonMisconceptions: [
        'Students often think documents are built linearly from page 1 to the end — highlight that TOC and cross-references require a non-linear approach',
        'Some students may confuse content with structure — emphasise we are decomposing STRUCTURE, not content'
      ],
      interventions: [
        'If groups are struggling with dependencies, give them a prompt: "What happens to the TOC if you change a heading?"',
        'For advanced groups, introduce the concept of automated fields and how Word resolves dependencies'
      ],
      formativeChecks: [
        'Review dependency diagrams for accuracy and completeness',
        'Check that build order logically follows from the dependency analysis'
      ],
      rubricSnapshot: {
        excellent: 'All components identified, accurate dependency map with non-obvious dependencies, correct build order, and successful rebuild',
        good: 'Most components identified, reasonable dependency map, mostly correct build order',
        developing: 'Some components identified but dependency map is incomplete or build order has logical errors',
        beginning: 'Few components identified with no meaningful dependency analysis'
      },
      postClassReflection: 'This activity bridges computational thinking and document skills. Note whether students grasp the parallel between software decomposition and document decomposition — reinforce this connection in future sessions.'
    },
    variations: [
      { name: 'Reverse Engineering Race', description: 'Groups race to decompose the report and rebuild the skeleton. First group with a correct and complete skeleton wins.' },
      { name: 'Cross-Format Comparison', description: 'Compare the structure of a Word report, a web page, and a LaTeX document. Are the components and dependencies the same?' }
    ],
    references: [
      { author: 'Wing, J.M.', year: 2006, title: 'Computational Thinking', source: 'Communications of the ACM, 49(3), 33-35' },
      { author: 'Bell, T., Witten, I.H. & Fellows, M.', year: 2015, title: 'CS Unplugged: An Enrichment and Extension Programme for Primary-Aged Students', source: 'csunplugged.org' }
    ]
  },
  {
    id: 'cl-018',
    title: 'Template Pattern Recognition',
    stream: 'CL',
    mode: 'Unplugged',
    week: 4,
    semester: 1,
    skills: ['pattern-recognition', 'abstraction', 'generalisation', 'analysis'],
    durationMin: 20,
    groupSize: '2-4',
    difficulty: 'Intermediate',
    objective: 'Extract common formatting patterns and unique rules from diverse professional document templates, building a universal formatting checklist through pattern recognition and abstraction.',
    heroGraphic: 'template-patterns',
    materials: [
      'Printed samples of 4 professional templates: CV, scientific report, business letter, memo',
      'Pattern extraction worksheet',
      'Coloured highlighters (4 colours)',
      'Large poster paper for checklist creation'
    ],
    setup: [
      'Print and distribute sets of the 4 professional document templates to each group',
      'Provide pattern extraction worksheets and highlighters',
      'Set up poster paper at each group table for checklist creation',
      'Display brief descriptions of each document type for context'
    ],
    procedure: [
      {
        step: 1,
        title: 'Examine Templates',
        description: 'Groups examine all 4 professional templates carefully. For each template, they list every formatting rule they can observe: font choices, spacing, alignment, heading styles, margins, section ordering, use of bold/italic, etc.',
        duration: 7,
        graphic: 'examine-templates'
      },
      {
        step: 2,
        title: 'Extract Patterns',
        description: 'Groups compare their lists across all 4 templates. Using highlighters, they mark COMMON rules that appear in all or most templates (universal patterns) in one colour, and UNIQUE rules specific to each template type in another colour.',
        duration: 7,
        graphic: 'extract-patterns'
      },
      {
        step: 3,
        title: 'Build Universal Checklist',
        description: 'Groups create a two-part output on poster paper: (1) A universal formatting checklist of rules that apply to ANY professional document, and (2) Type-specific additions for each of the 4 template types. Present to the class.',
        duration: 6,
        graphic: 'build-checklist'
      }
    ],
    deliverable: 'A universal formatting checklist applicable to any professional document, plus type-specific formatting additions for CVs, scientific reports, business letters, and memos.',
    replicabilityCheck: {
      question: 'Could another student apply your universal checklist to a new document type and produce professional formatting?',
      successCriteria: 'Universal checklist contains at least 5 formatting rules common to all templates, and type-specific lists capture key distinguishing features',
      failureAnalysis: 'If the checklist is too vague or too specific, revisit the abstraction process — universal rules should be general enough to apply broadly'
    },
    debriefQuestions: [
      'What formatting rules turned out to be universal across all professional documents?',
      'How did abstracting common patterns help you understand professional formatting at a deeper level?',
      'How is this pattern recognition process similar to identifying patterns in computing problems?'
    ],
    learningOutcomes: [
      'Identify common formatting patterns across diverse document types',
      'Abstract general rules from specific examples',
      'Create reusable formatting checklists through pattern recognition'
    ],
    studentGuide: {
      whatYouLearn: 'How to spot common patterns across different document types and build a universal checklist — the same pattern recognition skill used in computational thinking.',
      whatToBring: 'Coloured highlighters if you have them. Notebook for recording observations.',
      tips: [
        'Look beyond content — focus only on HOW the document is formatted, not WHAT it says',
        'Be specific: don\'t just write "uses headings" — note the heading size, weight, spacing, and hierarchy',
        'When comparing, ask: "Is this rule essential for THIS document type, or for ALL professional documents?"'
      ],
      reflectionPrompts: [
        'Which universal formatting rules surprised you by being common to all document types?',
        'How will you use pattern recognition to format documents more efficiently in the future?'
      ],
      extensionChallenge: 'Find 2 additional professional document types (e.g., newsletter, academic poster) and test whether your universal checklist applies to them.'
    },
    lecturerGuide: {
      sessionGoal: 'Students discover that professional documents share common formatting patterns, developing abstraction and generalisation skills — two pillars of computational thinking.',
      roomSetup: 'Groups at tables with printed template sets, highlighters, and poster paper. Wall space for displaying completed checklists.',
      facilitationScript: [
        { time: '0-2 min', action: 'Introduce the concept of pattern recognition and its role in computational thinking. Distribute template sets and explain the three-phase task.' },
        { time: '2-9 min', action: 'Groups examine templates and list formatting rules. Encourage detailed observations — push beyond surface-level features.' },
        { time: '9-16 min', action: 'Groups compare lists and extract common vs. unique rules. Circulate to check that abstraction is happening, not just listing.' },
        { time: '16-20 min', action: 'Groups create and present their checklists. Facilitate class discussion on which universal rules appeared in most groups\' checklists.' }
      ],
      commonMisconceptions: [
        'Students may focus on content similarities rather than formatting patterns — redirect to structural and visual elements',
        'Some students may create rules that are too specific (e.g., "use 12pt Times New Roman") — guide them toward more abstract rules (e.g., "use a consistent, readable font")'
      ],
      interventions: [
        'If groups struggle with abstraction, provide a worked example: "Both the CV and the report use bold headings — the pattern is: professional documents use visual hierarchy"',
        'For advanced groups, challenge them to rank their universal rules by importance'
      ],
      formativeChecks: [
        'Review checklists for appropriate level of abstraction — not too specific, not too vague',
        'Check that type-specific rules genuinely distinguish between document types'
      ],
      rubricSnapshot: {
        excellent: '5+ well-abstracted universal rules and clear type-specific distinctions with insightful pattern analysis',
        good: '3-4 universal rules identified with reasonable type-specific additions',
        developing: 'Some patterns identified but abstraction is too specific or too vague',
        beginning: 'Unable to distinguish universal patterns from type-specific rules'
      },
      postClassReflection: 'Assess whether students grasped the connection between pattern recognition in documents and in computing. This activity sets up future discussions on templates and automation.'
    },
    variations: [
      { name: 'Digital Template Analysis', description: 'Instead of printed templates, students examine Word and Google Docs built-in templates digitally, inspecting styles and formatting panes.' },
      { name: 'Cross-Cultural Comparison', description: 'Compare document formatting conventions from different countries or industries to see which patterns are truly universal.' }
    ],
    references: [
      { author: 'Wing, J.M.', year: 2006, title: 'Computational Thinking', source: 'Communications of the ACM, 49(3), 33-35' },
      { author: 'Selby, C. & Woollard, J.', year: 2013, title: 'Computational Thinking: The Developing Definition', source: 'University of Southampton E-Prints' }
    ]
  },
  {
    id: 'cl-019',
    title: 'Mini Scientific Report Creation',
    stream: 'CL',
    mode: 'Digital',
    week: 4,
    semester: 1,
    skills: ['word-processing', 'academic-writing', 'document-structure', 'sequencing'],
    durationMin: 25,
    groupSize: '1-2',
    difficulty: 'Beginner',
    objective: 'Create a short scientific-style report using advanced Word features including automatic table of contents, heading styles, figure captions, cross-references, and headers with page numbers.',
    heroGraphic: 'mini-report',
    materials: [
      'Computer with Microsoft Word or equivalent',
      'Mini-dataset handout (simple data for students to report on)',
      'Report structure checklist',
      'Quick-reference guide for Word advanced features (TOC, captions, cross-references)'
    ],
    setup: [
      'Distribute the mini-dataset handout to each student or pair',
      'Provide the report structure checklist and Word quick-reference guide',
      'Ensure all students have Word open and ready',
      'Display an example finished report briefly to set expectations'
    ],
    procedure: [
      {
        step: 1,
        title: 'Set Up Structure',
        description: 'Students create the document skeleton: apply Heading 1 and Heading 2 styles for sections (Introduction, Method, Results, Discussion, References). Set up headers and footers with page numbers. Establish consistent font and spacing.',
        duration: 8,
        graphic: 'setup-structure'
      },
      {
        step: 2,
        title: 'Add Advanced Features',
        description: 'Students insert a figure (chart or table from the mini-dataset), add a figure caption using Word\'s caption tool, create a cross-reference to the figure in the text, and add a short reference list. Insert an automatic table of contents at the beginning.',
        duration: 10,
        graphic: 'advanced-features'
      },
      {
        step: 3,
        title: 'Compile and Verify',
        description: 'Students update the table of contents, verify all cross-references work, check that headers/footers display correctly, and review the complete report against the checklist. Fix any issues found.',
        duration: 7,
        graphic: 'compile-verify'
      }
    ],
    deliverable: 'A complete mini scientific report with automatic table of contents, properly styled headings, figure captions with cross-references, headers/footers with page numbers, and a reference list.',
    replicabilityCheck: {
      question: 'Does your table of contents automatically update when you change a heading, and do your cross-references link correctly?',
      successCriteria: 'TOC updates automatically, cross-references are functional, headers/footers display on all pages, and the structure matches a scientific report format',
      failureAnalysis: 'Identify which advanced features failed — was it a build order issue (e.g., inserting TOC before applying heading styles) or a technical knowledge gap?'
    },
    debriefQuestions: [
      'Why is it important to use heading styles rather than just making text big and bold?',
      'What happened when you tried to insert the table of contents before applying heading styles?',
      'How does the concept of dependency order apply to building this document?'
    ],
    learningOutcomes: [
      'Apply advanced Word features to create professional scientific reports',
      'Understand the dependency order for document elements (styles before TOC, captions before cross-references)',
      'Produce a structured academic document following scientific report conventions'
    ],
    studentGuide: {
      whatYouLearn: 'How to use advanced Word features (automatic TOC, captions, cross-references) to create professional scientific reports, reinforcing that document building follows a dependency order.',
      whatToBring: 'Laptop with Microsoft Word installed.',
      tips: [
        'Always apply heading styles BEFORE inserting the table of contents',
        'Insert figure captions BEFORE creating cross-references to them',
        'Use the checklist to make sure you haven\'t missed any required elements'
      ],
      reflectionPrompts: [
        'What was the most challenging advanced feature to use, and how did you overcome it?',
        'How does building a document in the right order make the process easier and more reliable?'
      ],
      extensionChallenge: 'Add a second figure with caption and cross-reference, create a List of Figures, and add a footnote. Update the TOC to reflect all changes.'
    },
    lecturerGuide: {
      sessionGoal: 'Students gain hands-on experience with advanced Word features in the context of scientific report writing, reinforcing decomposition and dependency concepts from the previous activity.',
      roomSetup: 'Computer lab with one workstation per student or pair. Quick-reference guide projected or printed. Example report shown briefly at start.',
      facilitationScript: [
        { time: '0-3 min', action: 'Show the example finished report. Distribute the mini-dataset and checklist. Emphasise: structure first, content second, advanced features last.' },
        { time: '3-11 min', action: 'Students set up document structure with heading styles, headers/footers, and page numbers. Circulate to ensure styles are applied correctly (not manual formatting).' },
        { time: '11-21 min', action: 'Students add advanced features: figure, caption, cross-reference, TOC, references. Provide individual support as needed — this is where most students need help.' },
        { time: '21-25 min', action: 'Students compile, update TOC, and verify everything works. Quick show-of-hands: whose TOC updated correctly? Troubleshoot common issues.' }
      ],
      commonMisconceptions: [
        'Students often manually type a table of contents instead of using Word\'s automatic TOC feature — ensure they understand the difference',
        'Some students apply visual formatting (big bold text) instead of heading styles — this breaks the TOC and structure'
      ],
      interventions: [
        'If students are stuck on cross-references, demonstrate the Insert > Cross-reference dialog step by step',
        'For students who finish early, challenge them to add a List of Figures or experiment with section breaks'
      ],
      formativeChecks: [
        'Verify that TOC updates automatically when headings are changed',
        'Check that cross-references are functional links, not manually typed text'
      ],
      rubricSnapshot: {
        excellent: 'All advanced features implemented correctly: auto TOC, heading styles, figure caption, cross-reference, headers/footers, page numbers, references',
        good: 'Most features implemented with minor issues (e.g., TOC needs manual update)',
        developing: 'Basic structure present but some advanced features missing or non-functional',
        beginning: 'Document lacks proper heading styles or advanced features are not attempted'
      },
      postClassReflection: 'This activity combines technical Word skills with document structure understanding. Note which features students found most challenging — consider a follow-up session for reinforcement if needed.'
    },
    variations: [
      { name: 'Collaborative Report', description: 'Pairs work on the same document using real-time collaboration. One handles structure, the other handles content and figures.' },
      { name: 'Template Creation', description: 'After completing the report, students save their structure as a reusable Word template (.dotx) for future assignments.' }
    ],
    references: [
      { author: 'Bell, T., Witten, I.H. & Fellows, M.', year: 2015, title: 'CS Unplugged: An Enrichment and Extension Programme for Primary-Aged Students', source: 'csunplugged.org' },
      { author: 'Hofstetter, F.T.', year: 2012, title: 'Internet Literacy', source: 'McGraw-Hill Education' }
    ]
  },
  // CL-020 to CL-025: ACADEMIC INTEGRITY, REFERENCING & SPREADSHEET SKILLS
  {
    id: 'cl-020',
    title: 'Plagiarism Detective',
    stream: 'CL',
    mode: 'Hybrid',
    week: 5,
    semester: 1,
    skills: ['academic-integrity', 'forensic-analysis', 'classification', 'evidence-based-reasoning'],
    durationMin: 25,
    groupSize: '2-4',
    difficulty: 'Intermediate',
    objective: 'Classify text passages as properly paraphrased, patchwork plagiarism, direct copy, or AI-generated fabrication by comparing them against original sources using systematic evidence-based analysis.',
    heroGraphic: 'plagiarism-detective',
    materials: ['8 text passage cards', '3 original source documents', 'Classification worksheet', 'Evidence log template', 'Coloured markers for highlighting'],
    setup: ['Print and distribute source documents and passage cards to each group', 'Prepare classification worksheet with four categories and evidence columns', 'Ensure each group has highlighters for marking evidence', 'Brief students on the four classification categories before starting'],
    procedure: [
      { step: 1, title: 'Study Sources', description: 'Groups carefully read and annotate the 3 original source documents, identifying key phrases, unique terminology, and main arguments that could appear in derivative texts.', duration: 6, graphic: 'study-sources' },
      { step: 2, title: 'Classify Passages', description: 'Examine each of the 8 passages and classify as: (a) properly paraphrased, (b) patchwork plagiarism, (c) direct copy without citation, or (d) AI-generated fabrication. Use systematic elimination — check against each source before deciding.', duration: 8, graphic: 'classify-passages' },
      { step: 3, title: 'Document Evidence', description: 'For each classification, record specific evidence: highlight matching phrases for copies, note structural similarities for patchwork, identify citation presence for paraphrases, and flag stylistic anomalies for AI-generated text.', duration: 6, graphic: 'document-evidence' },
      { step: 4, title: 'Peer Review Classifications', description: 'Groups swap completed worksheets and challenge each other\'s classifications. Disagreements must be resolved with evidence. Class discusses the hardest-to-classify passages and why.', duration: 5, graphic: 'peer-review' }
    ],
    deliverable: 'A completed classification worksheet with all 8 passages categorised and specific evidence documented for each decision.',
    replicabilityCheck: { question: 'Would another group classify the same passages identically using the same evidence?', successCriteria: 'At least 6 of 8 passages classified consistently across groups with matching evidence', failureAnalysis: 'Ambiguous passages may need clearer source material or additional context clues' },
    debriefQuestions: ['Which category was hardest to identify and why?', 'How did you distinguish patchwork plagiarism from proper paraphrasing?', 'What patterns helped you identify AI-generated text?'],
    learningOutcomes: ['Distinguish between different forms of plagiarism using evidence-based reasoning', 'Apply systematic classification methods to text analysis', 'Recognise the characteristics of AI-generated academic fabrication'],
    studentGuide: {
      whatYouLearn: 'How to identify and classify different types of plagiarism by comparing passages against original sources using forensic analysis techniques.',
      whatToBring: 'Highlighters, pen, notebook for evidence logging.',
      tips: ['Read sources thoroughly before looking at passages — you need a strong baseline', 'Look for unusual phrasing shifts within a single passage as a patchwork indicator', 'AI-generated text often has confident tone but vague or fabricated specific details'],
      reflectionPrompts: ['How confident were you in your classifications, and what made some harder than others?', 'How would you apply this forensic approach when reviewing your own writing for unintentional plagiarism?'],
      extensionChallenge: 'Write a properly paraphrased passage and an intentionally patchwork version of the same source — swap with a partner to test their detection skills.'
    },
    lecturerGuide: {
      sessionGoal: 'Develop students\' ability to recognise and classify plagiarism types through hands-on forensic analysis of text passages.',
      roomSetup: 'Groups of 2-4 around tables with printed source documents and passage cards. Ensure each group has workspace for annotation.',
      facilitationScript: [
        { time: '0-6 min', action: 'Distribute materials and briefly explain the four categories. Emphasise that every classification MUST be supported with specific evidence.' },
        { time: '6-14 min', action: 'Monitor groups as they classify passages. Prompt struggling groups: "What specific words or phrases match the source?" Avoid giving answers.' },
        { time: '14-20 min', action: 'Facilitate peer review and class discussion. Highlight passages where groups disagreed — use these as teaching moments about grey areas in academic integrity.' },
        { time: '20-25 min', action: 'Debrief: connect classification skills to students\' own writing practices. Discuss how awareness of these categories prevents unintentional plagiarism.' }
      ],
      commonMisconceptions: ['Students may think changing a few words is sufficient paraphrasing', 'AI-generated text is often assumed to be "original" because it doesn\'t match a specific source'],
      interventions: ['If groups classify everything as "direct copy", redirect them to look for structural changes and citation presence', 'If groups struggle with AI-generated detection, point out factual inconsistencies or overly generic claims'],
      formativeChecks: ['Can students articulate the difference between patchwork and direct copy?', 'Are evidence logs specific enough to support each classification?'],
      rubricSnapshot: {
        excellent: 'All 8 passages correctly classified with detailed, specific evidence for each decision',
        good: '6-7 passages correctly classified with reasonable evidence provided',
        developing: '4-5 passages correctly classified but evidence is vague or incomplete',
        beginning: 'Fewer than 4 correct classifications or no evidence provided for decisions'
      },
      postClassReflection: 'Note which plagiarism type was most difficult for students to identify. Consider using those examples as warm-up exercises in future sessions on academic integrity.'
    },
    variations: [
      { name: 'Blind Classification', description: 'Remove category labels — students must first define their own categories before classifying, then compare their taxonomy with the standard four types.' },
      { name: 'Digital Detective', description: 'Use online plagiarism detection tools alongside manual analysis. Compare tool results with student classifications to discuss limitations of automated detection.' }
    ],
    references: [
      { author: 'Sutherland-Smith, W.', year: 2008, title: 'Plagiarism, the Internet and Student Learning', source: 'Routledge' },
      { author: 'Weber-Wulff, D.', year: 2014, title: 'False Feathers: A Perspective on Academic Plagiarism', source: 'Springer' }
    ]
  },
  {
    id: 'cl-021',
    title: 'Citation Error Hunt',
    stream: 'CL',
    mode: 'Digital',
    week: 5,
    semester: 1,
    skills: ['referencing', 'attention-to-detail', 'rule-application', 'debugging'],
    durationMin: 20,
    groupSize: '1-2',
    difficulty: 'Intermediate',
    objective: 'Find and fix 12 deliberate errors in a reference list and in-text citations by applying APA/Harvard referencing rules as a validation algorithm.',
    heroGraphic: 'citation-error-hunt',
    materials: ['Document with flawed reference list and in-text citations', 'APA/Harvard style guide reference sheet', 'Error tracking worksheet', 'Red pen or digital annotation tool'],
    setup: ['Prepare a document containing 12 deliberate citation errors across in-text and reference list', 'Include error types: wrong year, missing author, orphan citations, phantom references, incorrect formatting', 'Distribute APA/Harvard quick-reference guide to each student', 'Ensure students have annotation tools available'],
    procedure: [
      { step: 1, title: 'Study Reference Rules', description: 'Review the APA/Harvard style guide reference sheet. Identify the key rules for in-text citations (author, year, page) and reference list entries (order, formatting, required fields). This is your "specification" for debugging.', duration: 5, graphic: 'study-rules' },
      { step: 2, title: 'Scan for Errors', description: 'Systematically scan the document for errors. Check each in-text citation against the reference list (and vice versa). Look for: mismatched years, missing authors, orphan citations with no reference entry, phantom references not cited in text, and formatting violations.', duration: 10, graphic: 'scan-errors' },
      { step: 3, title: 'Fix and Verify', description: 'Correct each identified error and document what rule was violated. Cross-verify that all in-text citations now have matching reference entries and all formatting conforms to the style guide. Confirm you\'ve found all 12 errors.', duration: 5, graphic: 'fix-verify' }
    ],
    deliverable: 'An annotated document with all 12 errors identified, corrected, and the violated rule cited for each fix.',
    replicabilityCheck: { question: 'Would another student find the same 12 errors using the same style guide?', successCriteria: 'All 12 errors are deterministic — each violates a specific, unambiguous rule in the style guide', failureAnalysis: 'If students find "extra" errors, the original document may have unintentional issues — verify the error set beforehand' },
    debriefQuestions: ['Which error type was hardest to spot and why?', 'How is debugging citations similar to debugging code?', 'What systematic strategy did you use — did you check in-text first or reference list first?'],
    learningOutcomes: ['Apply referencing rules as a formal specification for validation', 'Identify common citation errors including orphan and phantom references', 'Develop systematic debugging strategies for academic documents'],
    studentGuide: {
      whatYouLearn: 'How to systematically find and fix citation errors by treating referencing rules as a specification — the same debugging mindset used in programming.',
      whatToBring: 'Laptop or printed document, pen for annotations, APA/Harvard reference guide.',
      tips: ['Cross-reference every in-text citation with the reference list — mismatches are the most common error', 'Check alphabetical order in the reference list — it\'s an easy one to miss', 'Count your errors as you go — knowing there are exactly 12 helps you know when to stop'],
      reflectionPrompts: ['How does treating referencing rules as a "specification" change how you approach citation checking?', 'What personal checklist would you create for checking your own references in future assignments?'],
      extensionChallenge: 'Create your own error-laden reference list with 8 deliberate errors and swap with a partner to test each other\'s debugging skills.'
    },
    lecturerGuide: {
      sessionGoal: 'Train students to apply referencing rules systematically as a debugging exercise, reinforcing both citation literacy and computational thinking.',
      roomSetup: 'Individual or pair workstations with access to the flawed document (digital or printed) and style guide reference sheets.',
      facilitationScript: [
        { time: '0-5 min', action: 'Distribute materials and frame the task: "This document has exactly 12 citation errors. Your job is to find and fix every one, like debugging code against a specification."' },
        { time: '5-15 min', action: 'Monitor progress. If students are stuck, prompt: "Have you checked every in-text citation against the reference list?" Avoid revealing error locations.' },
        { time: '15-20 min', action: 'Review answers as a class. For each error, ask a student to explain what rule was violated. Discuss which errors were hardest and why systematic approaches outperform random scanning.' }
      ],
      commonMisconceptions: ['Students often assume if a reference "looks right" it is correct — they need to check every field', 'Orphan citations (cited in text but not in references) are frequently overlooked'],
      interventions: ['If a student claims to have found all 12 quickly, ask them to verify by cross-checking each reference entry against the text', 'If students are only finding formatting errors, redirect them to check for orphan/phantom references'],
      formativeChecks: ['Can students explain the difference between an orphan citation and a phantom reference?', 'Are students using the style guide systematically rather than relying on intuition?'],
      rubricSnapshot: {
        excellent: 'All 12 errors found and corrected with the specific violated rule cited for each',
        good: '9-11 errors found and corrected with rules cited for most',
        developing: '6-8 errors found with some corrections and partial rule citations',
        beginning: 'Fewer than 6 errors found or corrections made without referencing specific rules'
      },
      postClassReflection: 'Track which error types were most commonly missed — these are the areas to reinforce in future referencing workshops. Consider using the same exercise format with different error sets for practice.'
    },
    variations: [
      { name: 'Style Comparison', description: 'Provide the same content formatted in both APA and Harvard. Students identify which errors are style-specific and which are universal referencing mistakes.' },
      { name: 'Competitive Hunt', description: 'Teams race to find all 12 errors. First team with all correct wins. Adds urgency and encourages systematic approaches over random scanning.' }
    ],
    references: [
      { author: 'American Psychological Association', year: 2020, title: 'Publication Manual of the American Psychological Association', source: 'American Psychological Association (7th ed.)' },
      { author: 'Pears, R. & Shields, G.', year: 2019, title: 'Cite Them Right: The Essential Referencing Guide', source: 'Red Globe Press' }
    ]
  },
  {
    id: 'cl-022',
    title: 'Human Spreadsheet',
    stream: 'CL',
    mode: 'Unplugged',
    week: 6,
    semester: 1,
    skills: ['spreadsheet-logic', 'cell-references', 'dependency-thinking', 'collaboration'],
    durationMin: 25,
    groupSize: '8-20',
    difficulty: 'Beginner',
    objective: 'Understand cell references, formula dependencies, and change propagation by physically acting as cells in a human spreadsheet.',
    heroGraphic: 'human-spreadsheet',
    materials: ['Value cards (numbers)', 'Formula cards (e.g., "=B2+B3", "=A1*2")', 'Cell label badges (A1, A2, B1, B2, etc.)', 'Whiteboard or large grid drawn on floor', 'Marker for updating displayed values'],
    setup: ['Create a grid on the floor or arrange chairs in a spreadsheet layout with labelled positions', 'Prepare value cards and formula cards for each cell position', 'Assign each student a cell position with either a value or formula card', 'Brief students: when someone asks your value, read your card — if it\'s a formula, calculate it by asking referenced cells'],
    procedure: [
      { step: 1, title: 'Assign Roles', description: 'Students take positions in the grid. Each receives a cell label badge and either a value card (e.g., "5") or a formula card (e.g., "=B2+B3"). Explain that formula holders must ask their referenced cells for current values to calculate their own.', duration: 5, graphic: 'assign-roles' },
      { step: 2, title: 'Process Inputs', description: 'Call out a cell\'s value and ask formula cells to recalculate. Students with formulas physically walk to or call out to their referenced cells, collect values, compute results, and display their new value. Trace the chain of calculations.', duration: 7, graphic: 'process-inputs' },
      { step: 3, title: 'Propagate Changes', description: 'Change an input cell\'s value. All dependent cells must recalculate — but they only know to update when asked or when they notice a dependency changed. Observe how changes ripple through the grid. Discuss: what order should recalculations happen?', duration: 8, graphic: 'propagate-changes' },
      { step: 4, title: 'Identify Circular Refs', description: 'Introduce a circular reference: give one cell "=C1" while C1 has "=B1" and B1 has the first cell\'s reference. Let students discover the infinite loop themselves. Discuss how spreadsheets detect and handle circular references.', duration: 5, graphic: 'circular-refs' }
    ],
    deliverable: 'A completed dependency map showing which cells depend on which, the recalculation order, and identification of any circular references.',
    replicabilityCheck: { question: 'Given the same formula assignments, would another group produce the same dependency map and recalculation order?', successCriteria: 'Dependency map correctly identifies all formula-to-cell relationships and the topological order of recalculation', failureAnalysis: 'If students recalculate in wrong order, revisit dependency chain tracing before introducing more complex formulas' },
    debriefQuestions: ['What happened when an input value changed — how far did the ripple go?', 'Why does recalculation order matter?', 'How did it feel to be stuck in a circular reference?'],
    learningOutcomes: ['Explain how cell references create dependencies in a spreadsheet', 'Trace change propagation through a network of formula dependencies', 'Identify and explain why circular references cause errors'],
    studentGuide: {
      whatYouLearn: 'How spreadsheets actually work under the hood — cell references, formula dependencies, recalculation order, and what happens when circular references occur.',
      whatToBring: 'Just yourself — all materials provided. Wear comfortable shoes as you may need to move around.',
      tips: ['When you have a formula, always ask your referenced cells for their CURRENT value — don\'t assume', 'Pay attention to the order things recalculate — it matters', 'If you feel stuck in an endless loop, congratulations — you\'ve found a circular reference!'],
      reflectionPrompts: ['How does understanding dependencies help you design better spreadsheets?', 'Can you think of other systems where changes propagate through dependencies (e.g., supply chains, social networks)?'],
      extensionChallenge: 'Design a spreadsheet layout on paper where changing one cell triggers a cascade through at least 5 other cells. Map the dependency graph and predict the recalculation order.'
    },
    lecturerGuide: {
      sessionGoal: 'Make abstract spreadsheet concepts tangible by having students physically embody cells, formulas, and dependencies.',
      roomSetup: 'Clear a large space. Arrange students in a grid formation (at least 3×3). Label positions clearly. Ensure enough room for students to move between positions.',
      facilitationScript: [
        { time: '0-5 min', action: 'Explain the setup: each student IS a cell. Distribute labels and cards. Start with simple values and one formula to demonstrate the mechanic.' },
        { time: '5-12 min', action: 'Run the first input change. Guide one formula cell through the process of asking referenced cells for values. Then trigger a cascade by changing an input that affects multiple formulas.' },
        { time: '12-20 min', action: 'Introduce the circular reference scenario. Let students experience the loop before intervening. Discuss: "How would a computer handle this?" Connect to actual spreadsheet error messages.' },
        { time: '20-25 min', action: 'Debrief: draw the dependency graph on the board. Discuss topological sort (without using the term) — why some cells must recalculate before others.' }
      ],
      commonMisconceptions: ['Students may think all cells recalculate simultaneously — emphasise dependency ordering', 'Some students confuse cell references with cell values — the formula "=B2" means "whatever B2 currently holds"'],
      interventions: ['If the grid is too complex, simplify to a 2×3 grid for the first round', 'If students aren\'t engaging with the circular reference, make it obvious by having three students explicitly point at each other'],
      formativeChecks: ['Can students trace a dependency chain from input to final output?', 'Do students understand why changing A1 might NOT affect every cell in the spreadsheet?'],
      rubricSnapshot: {
        excellent: 'Correctly maps all dependencies, explains recalculation order, and identifies circular references with clear reasoning',
        good: 'Maps most dependencies correctly, understands recalculation concept, identifies circular reference',
        developing: 'Partial dependency map, some confusion about recalculation order, recognises circular reference when prompted',
        beginning: 'Unable to trace dependencies or explain recalculation without significant assistance'
      },
      postClassReflection: 'This kinaesthetic activity works best with enthusiastic participation. If students were hesitant, consider starting with a volunteer demo next time. Note whether the circular reference discovery moment landed — it\'s the key aha moment.'
    },
    variations: [
      { name: 'Mini Spreadsheet', description: 'For smaller classes (under 8), use a 2×3 grid with simpler formulas. Students can play multiple cells in sequence to understand the full picture.' },
      { name: 'Conditional Formulas', description: 'Add IF-formula cards (e.g., "=IF(A1>10, B1, C1)") to introduce conditional logic. Students must evaluate the condition before deciding which cell to reference.' }
    ],
    references: [
      { author: 'Bell, T., Witten, I.H. & Fellows, M.', year: 2015, title: 'CS Unplugged: An Enrichment and Extension Programme for Primary-Aged Students', source: 'csunplugged.org' },
      { author: 'Burnett, M. et al.', year: 2001, title: 'End-User Software Engineering with Assertions in the Spreadsheet Paradigm', source: 'Proceedings of ICSE 2001' }
    ]
  },
  {
    id: 'cl-023',
    title: 'Formula Detective',
    stream: 'CL',
    mode: 'Hybrid',
    week: 6,
    semester: 1,
    skills: ['reverse-engineering', 'hypothesis-testing', 'spreadsheet-formulas', 'pattern-recognition'],
    durationMin: 20,
    groupSize: '2-4',
    difficulty: 'Intermediate',
    objective: 'Reverse-engineer hidden spreadsheet formulas by observing output values, forming hypotheses, and testing them against different inputs — applying the scientific method to spreadsheets.',
    heroGraphic: 'formula-detective',
    materials: ['Spreadsheet with formulas hidden (values only visible)', 'Input-output observation worksheet', 'Hypothesis testing log', 'Pencils and calculators', 'Access to a spreadsheet application for verification'],
    setup: ['Prepare a spreadsheet with 6-8 cells containing hidden formulas of varying complexity', 'Ensure input cells are clearly marked and editable while formula cells show only computed values', 'Create an observation worksheet where students record inputs, outputs, and hypothesised formulas', 'Test all formulas to ensure they produce unambiguous patterns'],
    procedure: [
      { step: 1, title: 'Observe Patterns', description: 'Students examine the spreadsheet showing only values. Change input cells one at a time and record the resulting changes in output cells. Build an input-output table for each mystery formula cell. Identify which output cells respond to which inputs.', duration: 7, graphic: 'observe-patterns' },
      { step: 2, title: 'Form Hypotheses', description: 'Based on observed patterns, propose a formula for each cell. Use reasoning: "When I doubled the input, the output doubled — so it\'s probably a multiplication." Write hypotheses in formal spreadsheet notation (e.g., "=A1*2").', duration: 7, graphic: 'form-hypotheses' },
      { step: 3, title: 'Test and Verify', description: 'Test each hypothesis by predicting what output a new input should produce, then checking. If prediction matches, hypothesis is supported. If not, revise. Reveal actual formulas at the end and compare with hypotheses.', duration: 6, graphic: 'test-verify' }
    ],
    deliverable: 'A completed hypothesis log showing observed patterns, proposed formulas, test predictions, and verification results for each hidden formula cell.',
    replicabilityCheck: { question: 'Would another group derive the same formulas from the same input-output observations?', successCriteria: 'All groups converge on the correct formulas through independent hypothesis testing', failureAnalysis: 'If formulas are ambiguous (e.g., multiple formulas produce the same outputs for tested inputs), add more diverse test cases' },
    debriefQuestions: ['How is reverse-engineering a formula similar to the scientific method?', 'What strategy did you use to choose test inputs — random or systematic?', 'Were any formulas ambiguous — could multiple formulas explain the same pattern?'],
    learningOutcomes: ['Apply hypothesis-testing methodology to reverse-engineer unknown formulas', 'Recognise common spreadsheet formula patterns from input-output behaviour', 'Understand that systematic testing is more effective than guessing'],
    studentGuide: {
      whatYouLearn: 'How to figure out how things work by observing behaviour, forming hypotheses, and testing them — the scientific method applied to spreadsheets.',
      whatToBring: 'Laptop with spreadsheet access, pencil, calculator.',
      tips: ['Change only ONE input at a time — otherwise you can\'t tell which input caused the output change', 'Try extreme values (0, 1, very large) — they often reveal formula structure quickly', 'If doubling input doubles output, it\'s likely multiplication; if output increases by a fixed amount, it\'s likely addition'],
      reflectionPrompts: ['How did your testing strategy evolve as you worked through more formulas?', 'Where else in life do you reverse-engineer how something works by observing its inputs and outputs?'],
      extensionChallenge: 'Create your own mystery spreadsheet with 5 hidden formulas of increasing complexity. Include at least one that uses IF or multiple cell references. Swap with another group.'
    },
    lecturerGuide: {
      sessionGoal: 'Develop hypothesis-testing and pattern-recognition skills through the engaging context of reverse-engineering spreadsheet formulas.',
      roomSetup: 'Pairs or small groups with shared access to the mystery spreadsheet (one screen per group). Ensure observation worksheets are distributed.',
      facilitationScript: [
        { time: '0-5 min', action: 'Frame the challenge: "These cells contain hidden formulas. You can only see outputs. Your job is to figure out each formula using the scientific method — observe, hypothesise, test, verify."' },
        { time: '5-14 min', action: 'Monitor groups. Prompt systematic testing: "What happens if you set the input to 0? To 1? What does that tell you?" Push groups beyond simple formulas to tackle multi-reference cells.' },
        { time: '14-20 min', action: 'Reveal actual formulas. Celebrate correct hypotheses. For incorrect ones, trace through where the reasoning diverged. Emphasise that the PROCESS (systematic testing) matters more than getting it right on the first try.' }
      ],
      commonMisconceptions: ['Students may try random inputs instead of systematic testing — guide them toward controlled experiments', 'Some students confuse correlation with causation when multiple inputs change simultaneously'],
      interventions: ['If a group is stuck, suggest: "What formula would produce THIS output from THIS input? Now test with a different input."', 'For advanced groups, introduce formulas with multiple cell references to increase challenge'],
      formativeChecks: ['Are students changing one variable at a time?', 'Can students explain WHY they chose specific test inputs?'],
      rubricSnapshot: {
        excellent: 'All formulas correctly reverse-engineered with systematic hypothesis-test-verify documentation',
        good: 'Most formulas correctly identified with reasonable testing methodology documented',
        developing: 'Some formulas identified but testing approach is unsystematic or poorly documented',
        beginning: 'Unable to form testable hypotheses or relies on guessing without systematic observation'
      },
      postClassReflection: 'This activity naturally differentiates — some groups will race through simple formulas while struggling with complex ones. Consider having tiered difficulty levels ready for future iterations.'
    },
    variations: [
      { name: 'Progressive Difficulty', description: 'Start with single-reference formulas (=A1*2), progress to multi-reference (=A1+B1), then to nested formulas (=IF(A1>10, B1*2, B1+1)). Groups unlock harder levels as they solve easier ones.' },
      { name: 'Formula Creation Challenge', description: 'After reverse-engineering, groups create their own mystery spreadsheets and swap with other groups. The best mysteries use formulas that are solvable but not immediately obvious.' }
    ],
    references: [
      { author: 'Hermans, F.', year: 2021, title: 'The Programmer\'s Brain: What Every Programmer Needs to Know About Cognition', source: 'Manning Publications' },
      { author: 'Panko, R.R.', year: 2008, title: 'What We Know About Spreadsheet Errors', source: 'Journal of End User Computing, 10(2)' }
    ]
  },
  {
    id: 'cl-024',
    title: 'Create Class Dataset',
    stream: 'CL',
    mode: 'Digital',
    week: 6,
    semester: 1,
    skills: ['data-collection', 'spreadsheet-basics', 'data-standardisation', 'collaboration'],
    durationMin: 20,
    groupSize: '2-4',
    difficulty: 'Beginner',
    objective: 'Collaboratively build a real class dataset with standardised input formats, then apply basic spreadsheet formulas (SUM, AVERAGE, COUNT, MIN, MAX) to analyse the collected data.',
    heroGraphic: 'class-dataset',
    materials: ['Shared spreadsheet (Google Sheets or Excel Online)', 'Data collection template with column headers', 'List of approved data fields (non-sensitive)', 'Formula reference card (SUM, AVERAGE, COUNT, MIN, MAX)'],
    setup: ['Create a shared spreadsheet accessible to all students with pre-defined column headers', 'Prepare a list of approved non-sensitive data fields (e.g., study hours per week, commute time, number of siblings)', 'Ensure all students have access to the shared document', 'Brief students that they must AGREE on input format rules before entering data'],
    procedure: [
      { step: 1, title: 'Define Data Standards', description: 'As a class, agree on input format rules for each column: Should study hours be rounded to nearest hour or allow decimals? Should commute time be in minutes or hours? What counts as a "sibling"? This is a real-world specification problem — ambiguity causes data quality issues.', duration: 5, graphic: 'define-standards' },
      { step: 2, title: 'Collect and Enter', description: 'Each student enters their own data into the shared spreadsheet following the agreed standards. Groups review nearby entries for format compliance. Flag any entries that don\'t match the agreed specification.', duration: 8, graphic: 'collect-enter' },
      { step: 3, title: 'Apply Formulas', description: 'Apply SUM, AVERAGE, COUNT, MIN, and MAX formulas to the collected data. Compare results across the class. Discuss: what stories does the data tell? Are there any outliers? How would non-standardised inputs have affected these calculations?', duration: 7, graphic: 'apply-formulas' }
    ],
    deliverable: 'A complete class dataset with standardised entries and a summary row using SUM, AVERAGE, COUNT, MIN, and MAX formulas with brief interpretation of results.',
    replicabilityCheck: { question: 'If the class repeated this exercise with new data, would the same format standards produce consistently usable datasets?', successCriteria: 'Data standards are unambiguous enough that any new entry can be validated against them', failureAnalysis: 'If standards are too vague, entries will be inconsistent — revisit specification clarity' },
    debriefQuestions: ['What happened when someone entered data in a different format than agreed?', 'Why is agreeing on data standards BEFORE collection important?', 'Which formula result surprised you most about the class data?'],
    learningOutcomes: ['Design and apply data format specifications for collaborative data collection', 'Use basic spreadsheet formulas to summarise and analyse real data', 'Understand how data standardisation affects data quality and analysis'],
    studentGuide: {
      whatYouLearn: 'How to collaboratively collect data with agreed standards and use basic spreadsheet formulas to find patterns in real data — skills used in every data-driven profession.',
      whatToBring: 'Laptop or device with spreadsheet access.',
      tips: ['Be precise about format rules — "round to nearest whole number" is clearer than "approximately"', 'Double-check your entry matches the agreed format BEFORE submitting', 'When reading formula results, ask "does this number make sense?" as a sanity check'],
      reflectionPrompts: ['How did the specification discussion change how you thought about data entry?', 'What other situations in life require people to agree on a standard format before sharing information?'],
      extensionChallenge: 'Add a new data field to the spreadsheet that requires a more complex standardisation rule (e.g., favourite genre of music — how do you categorise consistently?). Propose the standard and test it.'
    },
    lecturerGuide: {
      sessionGoal: 'Teach data standardisation as a specification problem while building practical spreadsheet formula skills using authentic class-generated data.',
      roomSetup: 'All students need device access to the shared spreadsheet. Display the spreadsheet on a projector so the class can see data populate in real time.',
      facilitationScript: [
        { time: '0-5 min', action: 'Present the data fields and ask: "How should we record study hours?" Let debate happen — this is the learning moment. Guide the class to a clear specification for each field.' },
        { time: '5-13 min', action: 'Monitor data entry. Publicly (and kindly) flag a non-conforming entry: "I see someone entered \'about 3 hours\' — does this match our standard?" Use it as a teaching moment, not a critique.' },
        { time: '13-20 min', action: 'Guide formula application. Ask students to predict results before calculating. Compare predictions with actuals. Discuss outliers and what the data reveals about the class.' }
      ],
      commonMisconceptions: ['Students may think any format is fine as long as the data is "close enough"', 'Some students may not understand that text entries break numeric formulas'],
      interventions: ['If standardisation discussion stalls, propose two conflicting formats and ask which would cause fewer problems', 'If students enter text in numeric fields, use the resulting #VALUE! error as a teaching moment about data types'],
      formativeChecks: ['Can students explain why the class needed format rules before collecting data?', 'Can students correctly apply and interpret SUM, AVERAGE, COUNT, MIN, MAX?'],
      rubricSnapshot: {
        excellent: 'Data entered in perfect compliance with standards, all formulas correct, thoughtful interpretation of results',
        good: 'Data mostly compliant, formulas applied correctly, basic interpretation provided',
        developing: 'Some format inconsistencies, formulas partially correct, minimal interpretation',
        beginning: 'Data entered without regard to standards or formulas not attempted'
      },
      postClassReflection: 'The specification discussion is the most valuable part — ensure it doesn\'t get rushed. If time is tight, pre-define some standards and let students only debate 1-2 fields. Save the dataset for use in future activities.'
    },
    variations: [
      { name: 'Anonymous Dataset', description: 'Students enter data anonymously using a form (Google Forms → Sheets). Removes social pressure and focuses purely on data quality and standardisation.' },
      { name: 'Messy Data Cleanup', description: 'Instead of collecting fresh data, give students a pre-made "messy" dataset with inconsistent formats. They must clean and standardise it before applying formulas.' }
    ],
    references: [
      { author: 'Wickham, H.', year: 2014, title: 'Tidy Data', source: 'Journal of Statistical Software, 59(10)' },
      { author: 'Bell, T., Witten, I.H. & Fellows, M.', year: 2015, title: 'CS Unplugged: An Enrichment and Extension Programme for Primary-Aged Students', source: 'csunplugged.org' }
    ]
  },
  {
    id: 'cl-025',
    title: 'Data Validation Rule Builder',
    stream: 'CL',
    mode: 'Hybrid',
    week: 7,
    semester: 1,
    skills: ['specification-writing', 'edge-cases', 'data-quality', 'precondition-thinking'],
    durationMin: 15,
    groupSize: '2-4',
    difficulty: 'Intermediate',
    objective: 'Define data validation rules for a dataset before seeing the data, then apply those rules to identify violations and edge cases — practising proactive constraint definition.',
    heroGraphic: 'validation-rules',
    materials: ['Column description cards (name and description only, no data)', 'Validation rule template worksheet', 'Dataset with deliberate violations (revealed after rules are written)', 'Edge case discussion cards'],
    setup: ['Prepare column description cards: column name, data type, and brief description (e.g., "Age — numeric — student age at enrollment")', 'Create a dataset with deliberate violations for each column (e.g., age of 0, email without @, grade of "Z")', 'Do NOT show the dataset until students have written their validation rules', 'Distribute validation rule template with fields: column name, data type, allowed range/format, required/optional'],
    procedure: [
      { step: 1, title: 'Write Validation Rules', description: 'Given only column names and descriptions (Age, Email, Grade), define validation rules BEFORE seeing any data. For each column, specify: data type, allowed values/range, format requirements, and whether the field is required. Example: Age must be integer, 17-65, required.', duration: 5, graphic: 'write-rules' },
      { step: 2, title: 'Apply to Dataset', description: 'Receive the actual dataset containing deliberate violations. Apply your validation rules to each row. Flag every entry that violates a rule. Count total violations found. Compare your violation count with other groups.', duration: 5, graphic: 'apply-rules' },
      { step: 3, title: 'Handle Edge Cases', description: 'Discuss edge cases your rules didn\'t anticipate: What about age 0? Blank fields? An email with two @ signs? A grade of "A+"? Revise your rules to handle these edge cases. Discuss: is it better to be strict (reject more) or lenient (accept more)?', duration: 5, graphic: 'edge-cases' }
    ],
    deliverable: 'A complete validation rule specification for all columns, a list of violations found in the test dataset, and revised rules that handle identified edge cases.',
    replicabilityCheck: { question: 'Would another group\'s validation rules catch the same violations in the same dataset?', successCriteria: 'Core rules converge (e.g., all groups require @ in email) even if edge case handling differs', failureAnalysis: 'If rules are too vague to be testable, revisit the concept of a rule as a precise, unambiguous specification' },
    debriefQuestions: ['What edge cases did you NOT anticipate in your initial rules?', 'Is it better to have strict rules that reject valid data or lenient rules that accept invalid data?', 'How is writing validation rules similar to writing a contract or specification?'],
    learningOutcomes: ['Write precise, testable validation rules as data quality specifications', 'Identify edge cases that challenge simple validation rules', 'Understand the tradeoff between strict and lenient validation'],
    studentGuide: {
      whatYouLearn: 'How to think about data quality BEFORE you have data — writing validation rules is like writing a contract that data must follow to be accepted.',
      whatToBring: 'Pen and worksheet, or laptop for digital rule-writing.',
      tips: ['Think about what could go WRONG, not just what should go right', 'Consider boundary values: what\'s the youngest possible student? The oldest?', 'A good rule is testable — if you can\'t check whether data passes or fails your rule, it\'s too vague'],
      reflectionPrompts: ['How did seeing actual violations change your understanding of what "good data" means?', 'Where else do you encounter validation rules in daily life (e.g., password requirements, form fields)?'],
      extensionChallenge: 'Write validation rules for a more complex dataset: an online store product catalogue with fields like price, weight, category, and SKU. Include at least 3 rules that handle edge cases.'
    },
    lecturerGuide: {
      sessionGoal: 'Teach proactive specification thinking by having students define data constraints before encountering data — a fundamental skill in both data management and software engineering.',
      roomSetup: 'Groups of 2-4 with workspace for writing rules. Dataset should be hidden (face-down or in sealed envelope) until the Apply phase.',
      facilitationScript: [
        { time: '0-5 min', action: 'Distribute column description cards ONLY. "You don\'t get to see the data yet. Based only on these descriptions, write rules for what valid data looks like." Emphasise precision.' },
        { time: '5-10 min', action: 'Reveal the dataset. "Now apply YOUR rules — not what you think SHOULD be wrong, but what YOUR rules actually flag." This distinction is crucial for understanding specification vs. intuition.' },
        { time: '10-15 min', action: 'Facilitate edge case discussion. Present tricky cases: "Is age 0 valid? What about 150? What about -1?" Guide students to revise rules. Discuss strict vs. lenient validation as a design decision.' }
      ],
      commonMisconceptions: ['Students may write rules that are too vague to test (e.g., "age should be reasonable")', 'Some students confuse what they EXPECT with what their rules actually SPECIFY'],
      interventions: ['If rules are vague, challenge: "How would a COMPUTER check this rule? Can you make it that precise?"', 'If students skip edge cases, present a deliberately tricky entry (e.g., age = 17.5) and ask if their rules accept or reject it'],
      formativeChecks: ['Are validation rules precise enough to be automated?', 'Can students distinguish between a specification gap (rule didn\'t cover this case) and a specification error (rule is wrong)?'],
      rubricSnapshot: {
        excellent: 'Precise, testable rules for all columns; catches all violations; thoughtfully handles edge cases with justified strictness/leniency decisions',
        good: 'Clear rules for most columns; catches most violations; identifies some edge cases',
        developing: 'Rules present but too vague to test consistently; misses several violations; limited edge case awareness',
        beginning: 'Rules are informal opinions rather than testable specifications; unable to systematically apply rules to data'
      },
      postClassReflection: 'The power of this activity is the BEFORE/AFTER structure — writing rules before seeing data forces specification thinking. If time allows, connect this to software input validation and defensive programming.'
    },
    variations: [
      { name: 'Automated Validation', description: 'After writing rules on paper, students implement them as spreadsheet data validation rules or simple IF formulas. Compare manual and automated results.' },
      { name: 'Adversarial Data', description: 'Groups write validation rules, then swap with another group who tries to create data entries that technically PASS the rules but are obviously wrong. Reveals specification gaps.' }
    ],
    references: [
      { author: 'Rahm, E. & Do, H.H.', year: 2000, title: 'Data Cleaning: Problems and Current Approaches', source: 'IEEE Data Engineering Bulletin, 23(4)' },
      { author: 'Dasu, T. & Johnson, T.', year: 2003, title: 'Exploratory Data Mining and Data Cleaning', source: 'John Wiley & Sons' }
    ]
  },
  {
    id: 'cl-026',
    title: 'Misleading Graph Detective',
    stream: 'CL',
    mode: 'Hybrid',
    week: 8,
    semester: 1,
    skills: ['critical-analysis', 'data-visualisation', 'pattern-matching', 'visual-literacy'],
    durationMin: 25,
    groupSize: '2-4',
    difficulty: 'Intermediate',
    objective: 'Develop critical data literacy by identifying manipulation techniques in real-world graphs and redesigning them honestly.',
    heroGraphic: 'misleading-graphs',
    materials: [
      'Printed set of 8 misleading graphs from news/advertisements',
      'Graph analysis worksheet',
      'Blank graph paper or digital charting tool',
      'Markers/pens'
    ],
    setup: [
      'Prepare 8 real-world graphs each containing a different manipulation technique',
      'Pair or group students (2-4 per group)',
      'Distribute graph sets and analysis worksheets',
      'Have blank graph paper or digital tools ready for redesign phase'
    ],
    procedure: [
      {
        step: 1,
        title: 'Examine Graphs',
        description: 'Students examine 8 real-world graphs from news and advertisements. Each graph uses a different manipulation technique: truncated Y-axis, cherry-picked timeframe, 3D distortion, or dual-axis deception.',
        duration: 5,
        graphic: 'examine-graphs'
      },
      {
        step: 2,
        title: 'Identify Manipulation',
        description: 'For each graph, students identify the specific manipulation technique being used. They label each graph with the technique name and highlight the visual element that creates the distortion.',
        duration: 7,
        graphic: 'identify-manipulation'
      },
      {
        step: 3,
        title: 'Explain Deception',
        description: 'Students write a clear explanation of HOW each technique misleads the viewer. They describe what impression the graph creates versus what the data actually shows.',
        duration: 7,
        graphic: 'explain-deception'
      },
      {
        step: 4,
        title: 'Redesign Honestly',
        description: 'Students select 2-3 of the most misleading graphs and redesign them using honest visualisation practices. They annotate their redesigns explaining what they changed and why.',
        duration: 6,
        graphic: 'redesign-graphs'
      }
    ],
    deliverable: 'An annotated analysis sheet identifying manipulation techniques in all 8 graphs plus 2-3 honestly redesigned versions with explanations.',
    replicabilityCheck: {
      question: 'Can another group use your identification framework to spot the same manipulation techniques in new graphs?',
      successCriteria: 'Another group correctly identifies at least 6 of 8 manipulation techniques using the framework',
      failureAnalysis: 'Determine which techniques were hardest to identify and refine the detection criteria'
    },
    debriefQuestions: [
      'Which manipulation technique was hardest to spot? Why?',
      'How does the context (news vs. advertisement) change how we interpret graphs?',
      'What rules could you create as a checklist for evaluating any graph?'
    ],
    learningOutcomes: [
      'Identify common graph manipulation techniques used in media',
      'Explain how visual distortions mislead viewers',
      'Apply honest data visualisation principles to redesign misleading graphs'
    ],
    studentGuide: {
      whatYouLearn: 'How to spot when graphs are designed to mislead — a critical skill for interpreting data in news, business, and research.',
      whatToBring: 'Pen, ruler, and blank paper or laptop with charting software',
      tips: [
        'Always check the Y-axis — does it start at zero?',
        'Look at the time range — has the creator cherry-picked a favourable window?',
        'Be suspicious of 3D charts — they almost always distort proportions'
      ],
      reflectionPrompts: [
        'Have you ever been misled by a graph before? What made it convincing?',
        'How would you explain graph manipulation to someone who is not data-literate?'
      ],
      extensionChallenge: 'Find a misleading graph in current news media and write a 200-word critique explaining the technique used and how to fix it.'
    },
    lecturerGuide: {
      sessionGoal: 'Build systematic pattern-matching skills for recognising visual deception in data presentations.',
      roomSetup: 'Groups of 2-4 with printed graph sets. Have a projector ready to display graphs for whole-class discussion.',
      facilitationScript: [
        { time: '0-5 min', action: 'Show one obviously misleading graph to the whole class. Ask: "What story does this graph tell?" Then reveal the honest version. Use the contrast to introduce manipulation techniques.' },
        { time: '5-15 min', action: 'Distribute graph sets. Students work through identification and explanation phases. Circulate and challenge groups: "Are you sure that\'s the technique? What else could be going on?"' },
        { time: '15-25 min', action: 'Redesign phase. Groups select their most misleading graphs and create honest versions. Close with gallery walk or share-out of before/after comparisons.' }
      ],
      commonMisconceptions: ['Students may think only intentionally deceptive graphs are problematic — unintentional poor design is equally misleading', 'Some assume 3D charts are always wrong rather than understanding when they distort proportions'],
      interventions: ['If students struggle to identify techniques, provide a reference sheet of the four techniques with examples', 'If redesigns are too simple, ask: "Does your version still tell an interesting story while being honest?"'],
      formativeChecks: ['Can students name and explain at least 3 manipulation techniques?', 'Do redesigned graphs accurately represent the underlying data?'],
      rubricSnapshot: {
        excellent: 'Correctly identifies all 8 techniques with precise explanations; redesigns are accurate and well-annotated',
        good: 'Identifies 6-7 techniques with clear explanations; redesigns are mostly accurate',
        developing: 'Identifies 4-5 techniques but explanations lack precision; redesigns need improvement',
        beginning: 'Identifies fewer than 4 techniques; explanations are vague; redesigns do not address the core issue'
      },
      postClassReflection: 'This activity builds critical data literacy. Connect to Week 10 data story challenge where students must create honest visualisations from raw data.'
    },
    variations: [
      { name: 'Digital Detective', description: 'Students find their own misleading graphs online and present them to the class, explaining the manipulation technique used.' },
      { name: 'Create to Deceive', description: 'Give students honest data and challenge them to create the MOST misleading graph possible — then explain why. Understanding deception helps detect it.' }
    ],
    references: [
      { author: 'Cairo, A.', year: 2019, title: 'How Charts Lie: Getting Smarter about Visual Information', source: 'W.W. Norton & Company' },
      { author: 'Huff, D.', year: 1954, title: 'How to Lie with Statistics', source: 'W.W. Norton & Company' }
    ]
  },
  {
    id: 'cl-027',
    title: 'Build Multiple Chart Types',
    stream: 'CL',
    mode: 'Digital',
    week: 8,
    semester: 1,
    skills: ['data-visualisation', 'chart-selection', 'excel', 'decision-making'],
    durationMin: 20,
    groupSize: '1-2',
    difficulty: 'Beginner',
    objective: 'Understand which chart types are appropriate for different data by creating and comparing bar, line, pie, and scatter charts from the same dataset.',
    heroGraphic: 'chart-types',
    materials: [
      'Class dataset (provided digitally)',
      'Computer with Excel or Google Sheets',
      'Chart selection reference card',
      'Justification worksheet'
    ],
    setup: [
      'Ensure all students have access to Excel or Google Sheets',
      'Distribute the class dataset digitally',
      'Provide chart selection reference cards',
      'Pair students or allow individual work'
    ],
    procedure: [
      {
        step: 1,
        title: 'Create Charts',
        description: 'Students take the class dataset and create four chart types: bar, line, pie, and scatter. Each chart should use the same data columns to enable direct comparison of how each type represents the information.',
        duration: 8,
        graphic: 'create-charts'
      },
      {
        step: 2,
        title: 'Justify Choices',
        description: 'For each chart type, students write a justification explaining WHY that type is or is not appropriate for this data. They must reference specific data properties (categorical vs. continuous, parts of whole, trends over time).',
        duration: 7,
        graphic: 'justify-choices'
      },
      {
        step: 3,
        title: 'Compare Appropriateness',
        description: 'Students rank the four chart types from most to least appropriate for their data and present their reasoning. Class discusses cases where multiple chart types could work and when one is clearly superior.',
        duration: 5,
        graphic: 'compare-charts'
      }
    ],
    deliverable: 'Four charts created from the same dataset with written justifications for the appropriateness of each chart type.',
    replicabilityCheck: {
      question: 'Would another student looking at the same data reach the same conclusions about chart appropriateness?',
      successCriteria: 'Justifications reference specific data properties that make certain chart types more suitable',
      failureAnalysis: 'Identify whether the student confused data types (e.g., treating categorical data as continuous)'
    },
    debriefQuestions: [
      'Which chart type was most appropriate for this data? Why?',
      'When would a pie chart be a terrible choice? When would it be ideal?',
      'How does choosing the wrong chart type change the story the data tells?'
    ],
    learningOutcomes: [
      'Create bar, line, pie, and scatter charts in a spreadsheet application',
      'Match data properties to appropriate chart types using decision-making criteria',
      'Evaluate and justify chart type selection for a given dataset'
    ],
    studentGuide: {
      whatYouLearn: 'How to choose the right chart type for your data — a skill that makes your reports and presentations more effective and honest.',
      whatToBring: 'Laptop with Excel or Google Sheets access',
      tips: [
        'Pie charts work best for parts of a whole (percentages that add to 100%)',
        'Line charts show trends over time — use them when order matters',
        'Scatter plots reveal relationships between two numerical variables'
      ],
      reflectionPrompts: [
        'Before this activity, how did you decide which chart to use? Has your approach changed?',
        'Can you think of a situation where the "wrong" chart type might be used intentionally?'
      ],
      extensionChallenge: 'Find a dataset online and create a dashboard with 3 different chart types, each chosen for a specific reason tied to the data properties.'
    },
    lecturerGuide: {
      sessionGoal: 'Build decision-making skills for chart selection by having students experience how the same data looks in different visualisation formats.',
      roomSetup: 'Individual or paired workstations with Excel/Google Sheets. Display the chart selection reference card on screen.',
      facilitationScript: [
        { time: '0-3 min', action: 'Show the same data in 4 chart types on screen. Ask: "Which one tells the clearest story?" Use responses to introduce the concept of chart-data fit.' },
        { time: '3-15 min', action: 'Students create their four charts and write justifications. Circulate to ensure students are engaging with WHY, not just creating charts mechanically.' },
        { time: '15-20 min', action: 'Quick share-out: ask 2-3 students to present their ranking. Highlight cases where students disagree — these disagreements reveal important nuances in chart selection.' }
      ],
      commonMisconceptions: ['Students often default to pie charts for everything', 'Some believe bar charts and histograms are the same thing'],
      interventions: ['If a student says "any chart works," ask them to explain what story each chart tells — the differences become apparent', 'If students struggle with scatter plots, provide a concrete example of correlation vs. no correlation'],
      formativeChecks: ['Can students articulate at least 2 criteria for choosing a chart type?', 'Do justifications reference actual data properties rather than personal preference?'],
      rubricSnapshot: {
        excellent: 'All four charts correctly created; justifications reference specific data properties; clear ranking with well-reasoned explanations',
        good: 'All four charts created; justifications are reasonable but could be more specific; ranking provided',
        developing: 'Charts created but some have formatting issues; justifications are vague or preference-based',
        beginning: 'Not all chart types created; justifications missing or incorrect; no understanding of chart-data fit'
      },
      postClassReflection: 'This foundational activity prepares students for the data story challenge in Week 10 where they must select appropriate charts for their own analysis.'
    },
    variations: [
      { name: 'Chart Type Debate', description: 'Two teams are assigned opposing positions on which chart type is best for the data and must argue their case. Forces deeper engagement with selection criteria.' },
      { name: 'Bad Chart Gallery', description: 'Students deliberately create the WORST possible chart for their data and explain why it fails. Learning from negative examples reinforces good practice.' }
    ],
    references: [
      { author: 'Few, S.', year: 2012, title: 'Show Me the Numbers: Designing Tables and Graphs to Enlighten', source: 'Analytics Press' },
      { author: 'Knaflic, C.N.', year: 2015, title: 'Storytelling with Data', source: 'John Wiley & Sons' }
    ]
  },
  {
    id: 'cl-028',
    title: 'Logic Gate Puzzle (Paper-Based)',
    stream: 'CL',
    mode: 'Unplugged',
    week: 9,
    semester: 1,
    skills: ['boolean-logic', 'conditional-reasoning', 'computational-thinking', 'problem-solving'],
    durationMin: 25,
    groupSize: '2-4',
    difficulty: 'Intermediate',
    objective: 'Understand Boolean logic through physical logic gate puzzles, then translate logical reasoning to spreadsheet formulas.',
    heroGraphic: 'logic-gates',
    materials: [
      'TRUE/FALSE cards (multiple sets)',
      'Logic gate reference cards (AND, OR, NOT)',
      'Printed logic gate puzzle worksheets',
      'Blank paper for gate chaining',
      'Pens/markers'
    ],
    setup: [
      'Prepare sets of TRUE/FALSE cards for each group',
      'Print logic gate reference cards showing truth tables',
      'Distribute puzzle worksheets with increasing complexity',
      'Group students in pairs or small groups of 2-4'
    ],
    procedure: [
      {
        step: 1,
        title: 'Learn Gates',
        description: 'Introduce AND, OR, and NOT gates using TRUE/FALSE cards. Students physically place cards as inputs and determine outputs using truth tables. Practice each gate type individually until comfortable.',
        duration: 5,
        graphic: 'learn-gates'
      },
      {
        step: 2,
        title: 'Solve Puzzles',
        description: 'Students work through logic gate puzzles of increasing difficulty. Start with single gates, then combine two gates. Use cards to trace inputs through to outputs.',
        duration: 7,
        graphic: 'solve-puzzles'
      },
      {
        step: 3,
        title: 'Chain Gates',
        description: 'Solve complex real-world scenarios by chaining multiple gates: "Student passes IF (attendance > 80% AND assignment submitted) OR (exam score > 75%)." Build the gate chain on paper using cards for each intermediate result.',
        duration: 8,
        graphic: 'chain-gates'
      },
      {
        step: 4,
        title: 'Translate to Formulas',
        description: 'Convert the paper-based logic gate solutions into Excel IF/AND/OR formulas. Compare the visual gate representation with the formula syntax to see how they map directly.',
        duration: 5,
        graphic: 'translate-formulas'
      }
    ],
    deliverable: 'Completed logic gate puzzle worksheets with gate diagrams and corresponding Excel IF/AND/OR formulas for each scenario.',
    replicabilityCheck: {
      question: 'Do the Excel formulas produce the same TRUE/FALSE outputs as the paper-based gate chains for all input combinations?',
      successCriteria: 'Formula outputs match gate chain outputs for every test case',
      failureAnalysis: 'Identify where the translation from gates to formulas introduced errors — usually in nesting order'
    },
    debriefQuestions: [
      'How does breaking a complex condition into individual gates make it easier to understand?',
      'Where in everyday life do you encounter AND/OR logic without realising it?',
      'Why is the order of operations important when chaining logic gates?'
    ],
    learningOutcomes: [
      'Understand AND, OR, and NOT logic gates and their truth tables',
      'Solve complex conditional problems by chaining logic gates',
      'Translate visual logic gate diagrams into spreadsheet formulas'
    ],
    studentGuide: {
      whatYouLearn: 'How computers make decisions using Boolean logic — the same AND/OR/NOT thinking powers everything from search engines to spreadsheet formulas.',
      whatToBring: 'Pen, paper, and willingness to think step-by-step',
      tips: [
        'AND means BOTH must be true — think of it as a strict rule',
        'OR means AT LEAST ONE must be true — think of it as a flexible option',
        'NOT simply flips TRUE to FALSE and vice versa'
      ],
      reflectionPrompts: [
        'Was it easier to think in gates or in formulas? Why might that differ for different people?',
        'Can you think of a decision you make daily that involves AND/OR logic?'
      ],
      extensionChallenge: 'Design a logic gate circuit for a real-world scenario (e.g., alarm system that triggers IF door open AND after hours OR motion detected AND NOT override active).'
    },
    lecturerGuide: {
      sessionGoal: 'Teach foundational Boolean logic through physical manipulation before abstracting to formula syntax — concrete before abstract.',
      roomSetup: 'Groups of 2-4 with table space for laying out cards. Display truth tables on screen for reference throughout the session.',
      facilitationScript: [
        { time: '0-5 min', action: 'Demonstrate AND gate with cards: "If I have TRUE and TRUE, what comes out?" Walk through all four combinations. Repeat for OR and NOT. Check understanding before moving on.' },
        { time: '5-15 min', action: 'Distribute puzzles. Start simple, increase complexity. When groups reach chaining, use the student pass/fail scenario as the anchor example. Ensure students build gate chains physically before abstracting.' },
        { time: '15-25 min', action: 'Translation phase. Guide students to see the structural parallel: AND gate → AND() function, OR gate → OR() function. Have students test their formulas against their card-based results.' }
      ],
      commonMisconceptions: ['Students often confuse AND and OR — "I want pizza AND pasta" in English actually means OR in logic', 'Nesting order confusion when translating chained gates to nested formulas'],
      interventions: ['If students struggle with chaining, break the complex scenario into sub-problems: solve each gate independently, then combine', 'If formula translation is difficult, write the gate chain output column-by-column in a spreadsheet to show intermediate results'],
      formativeChecks: ['Can students correctly complete truth tables for AND, OR, and NOT?', 'Do chained gate solutions match formula outputs for all test cases?'],
      rubricSnapshot: {
        excellent: 'All gates understood with correct truth tables; complex chains solved correctly; formulas match gate outputs perfectly',
        good: 'Individual gates understood; most chains correct; formulas mostly match with minor errors',
        developing: 'Basic gates understood but chaining is inconsistent; formula translation needs significant help',
        beginning: 'Confusion between AND/OR; unable to chain gates; formulas not attempted or incorrect'
      },
      postClassReflection: 'The physical cards make Boolean logic tangible. Students who struggle with nested IFs in Week 9 often benefit from revisiting the gate model. Keep card sets available for reference.'
    },
    variations: [
      { name: 'Human Logic Gates', description: 'Students physically act as gates — two "input" students hold up TRUE/FALSE cards, the "gate" student announces the output. Makes the process kinaesthetic and memorable.' },
      { name: 'Logic Gate Race', description: 'Teams race to solve a series of gate puzzles. First team with all correct outputs wins. Adds competitive energy while reinforcing speed and accuracy.' }
    ],
    references: [
      { author: 'Bell, T., Witten, I.H. & Fellows, M.', year: 2015, title: 'CS Unplugged: An Enrichment and Extension Programme for Primary-Aged Children', source: 'csunplugged.org' },
      { author: 'Petzold, C.', year: 2000, title: 'Code: The Hidden Language of Computer Hardware and Software', source: 'Microsoft Press' }
    ]
  },
  {
    id: 'cl-029',
    title: 'Nested IF Decision Tree',
    stream: 'CL',
    mode: 'Hybrid',
    week: 9,
    semester: 1,
    skills: ['decision-modelling', 'conditional-logic', 'optimisation', 'spreadsheet-formulas'],
    durationMin: 25,
    groupSize: '2-4',
    difficulty: 'Intermediate',
    objective: 'Master nested IF formulas by first drawing decision trees for complex classification problems, then converting the visual model to optimised spreadsheet formulas.',
    heroGraphic: 'decision-tree',
    materials: [
      'Decision tree template sheets',
      'Complex classification scenario cards (e.g., shipping rates)',
      'Blank paper for drawing trees',
      'Computer with Excel or Google Sheets',
      'Markers/pens'
    ],
    setup: [
      'Prepare scenario cards with complex classification problems',
      'Distribute decision tree template sheets',
      'Ensure students have access to spreadsheet software',
      'Group students in pairs or small groups of 2-4'
    ],
    procedure: [
      {
        step: 1,
        title: 'Draw Decision Tree',
        description: 'Students receive a complex real-world classification problem (e.g., shipping rates based on weight, destination, and membership). They draw a complete decision tree on paper showing all paths and outcomes, ensuring every possible input combination leads to a result.',
        duration: 10,
        graphic: 'draw-tree'
      },
      {
        step: 2,
        title: 'Convert to Formula',
        description: 'Students translate their decision tree into a nested IF formula in Excel. Each branch becomes a nested IF. They test the formula with sample data to verify it matches the tree\'s predicted outcomes.',
        duration: 8,
        graphic: 'convert-formula'
      },
      {
        step: 3,
        title: 'Optimise Condition Order',
        description: 'Students experiment with different condition orderings in their nested IFs to find the most efficient arrangement. Discuss short-circuit evaluation — checking the most common or most decisive condition first reduces average computation.',
        duration: 7,
        graphic: 'optimise-order'
      }
    ],
    deliverable: 'A paper decision tree and corresponding optimised nested IF formula that correctly classifies all test cases.',
    replicabilityCheck: {
      question: 'Does the nested IF formula produce the exact same classification as tracing through the decision tree for every test case?',
      successCriteria: 'Formula and tree agree on output for all provided test cases including edge cases',
      failureAnalysis: 'Identify which branch of the tree was incorrectly translated — usually a nesting depth or condition order error'
    },
    debriefQuestions: [
      'Why is drawing the tree first helpful before writing the formula?',
      'How does condition order affect the efficiency of a nested IF?',
      'What happens when you add a new condition to an already complex nested IF?'
    ],
    learningOutcomes: [
      'Design decision trees that model complex multi-condition classification problems',
      'Convert decision trees into correctly nested IF formulas',
      'Optimise condition ordering for efficiency using short-circuit evaluation principles'
    ],
    studentGuide: {
      whatYouLearn: 'How to tackle complex decision problems by breaking them into a visual tree first, then converting to formulas — a strategy used in programming, business analysis, and AI.',
      whatToBring: 'Pen, paper, and laptop with Excel or Google Sheets',
      tips: [
        'Draw the tree BEFORE touching the spreadsheet — it prevents nesting errors',
        'Label every branch with the condition AND every leaf with the outcome',
        'Test your formula with the simplest case first, then edge cases'
      ],
      reflectionPrompts: [
        'Which was harder — drawing the tree or writing the formula? What does that tell you about visual vs. textual problem-solving?',
        'How would you explain short-circuit evaluation to a non-technical person?'
      ],
      extensionChallenge: 'Design a decision tree for university course selection: based on prerequisites completed, GPA, semester, and available seats. Convert to a nested IF that advises students on which courses they can take.'
    },
    lecturerGuide: {
      sessionGoal: 'Teach the tree-first approach to nested conditionals — visual modelling before formula writing reduces errors and reveals optimal condition ordering.',
      roomSetup: 'Groups of 2-4 with paper and markers for tree drawing. Computers available for formula phase. Display a sample decision tree on screen.',
      facilitationScript: [
        { time: '0-5 min', action: 'Present the shipping rate scenario on screen. Ask: "How many different outcomes are possible?" Let students discover the complexity before introducing the tree as a management tool.' },
        { time: '5-18 min', action: 'Students draw trees and convert to formulas. Circulate to check tree completeness — every path must reach an outcome. Common error: missing branches for edge cases.' },
        { time: '18-25 min', action: 'Optimisation discussion. Show two versions of the same formula with different condition orders. Ask: "If 80% of orders are domestic, which order is more efficient?" Introduce short-circuit evaluation.' }
      ],
      commonMisconceptions: ['Students think condition order does not matter in nested IFs', 'Some draw incomplete trees that miss edge cases, leading to #N/A or wrong results'],
      interventions: ['If trees are incomplete, ask: "What happens if the weight is exactly on the boundary? Which branch does it take?"', 'If formulas are wrong, have students trace through the tree with specific test values and compare to formula output step by step'],
      formativeChecks: ['Do decision trees cover all possible input combinations?', 'Do nested IF formulas match tree outputs for every test case?'],
      rubricSnapshot: {
        excellent: 'Complete decision tree with all paths; formula matches perfectly; demonstrates understanding of condition order optimisation',
        good: 'Mostly complete tree; formula works for common cases; aware of optimisation concept',
        developing: 'Tree has gaps; formula partially works; condition order not considered',
        beginning: 'Incomplete tree; formula has significant errors; no awareness of optimisation'
      },
      postClassReflection: 'The tree-first approach is the key insight. Students who skip the tree and go straight to formulas almost always make nesting errors. Reinforce this workflow in future formula activities.'
    },
    variations: [
      { name: 'IFS Function Alternative', description: 'After building nested IF, introduce the IFS function as a flatter alternative. Students compare readability and maintainability of both approaches.' },
      { name: 'Real Business Scenario', description: 'Use actual business pricing rules (mobile plan selection, insurance quotes) to make the decision tree feel immediately relevant and complex.' }
    ],
    references: [
      { author: 'Winston, W.L.', year: 2019, title: 'Microsoft Excel Data Analysis and Business Modeling', source: 'Microsoft Press' },
      { author: 'Ragsdale, C.T.', year: 2017, title: 'Spreadsheet Modeling & Decision Analysis', source: 'Cengage Learning' }
    ]
  },
  {
    id: 'cl-030',
    title: 'Build Grading Logic Using IF',
    stream: 'CL',
    mode: 'Digital',
    week: 9,
    semester: 1,
    skills: ['nested-conditionals', 'edge-cases', 'efficiency-comparison', 'spreadsheet-formulas'],
    durationMin: 15,
    groupSize: '1-2',
    difficulty: 'Intermediate',
    objective: 'Build a grade classification system using nested IF formulas, handle boundary cases, and compare alternative approaches for efficiency.',
    heroGraphic: 'grading-logic',
    materials: [
      'Computer with Excel or Google Sheets',
      'Grade boundary reference sheet (A+, A, B+, ... F)',
      'Test data with edge cases (0, 49, 50, 74, 75, 100)',
      'Comparison worksheet'
    ],
    setup: [
      'Ensure all students have access to Excel or Google Sheets',
      'Distribute grade boundary reference sheet',
      'Provide test data set including boundary values',
      'Pair students or allow individual work'
    ],
    procedure: [
      {
        step: 1,
        title: 'Build IF Formula',
        description: 'Students build a nested IF formula that converts a mark from 0-100 into the correct grade symbol (A+, A, B+, B, C, D, F). They must handle all grade boundaries correctly and consider the order of conditions.',
        duration: 5,
        graphic: 'build-formula'
      },
      {
        step: 2,
        title: 'Test Edge Cases',
        description: 'Students test their formula with boundary values: 0, 49, 50, 74, 75, 100, and values just below/above each boundary. They document which edge cases their formula handles correctly and which it misses.',
        duration: 5,
        graphic: 'test-edges'
      },
      {
        step: 3,
        title: 'Compare Approaches',
        description: 'Teams compare their nested IF approach with alternative methods: VLOOKUP with approximate match, IFS function, or CHOOSE with MATCH. Discuss which is most readable, maintainable, and efficient for this problem.',
        duration: 5,
        graphic: 'compare-approaches'
      }
    ],
    deliverable: 'A working grade classification formula that correctly handles all edge cases, plus a brief comparison of nested IF vs. alternative approaches.',
    replicabilityCheck: {
      question: 'Does the formula return the correct grade for every possible integer mark from 0 to 100?',
      successCriteria: 'Formula correctly classifies all test values including boundary cases',
      failureAnalysis: 'Identify which boundary conditions are incorrectly handled — usually >= vs > confusion'
    },
    debriefQuestions: [
      'What went wrong when your formula hit a boundary value? How did you fix it?',
      'Which approach (nested IF, VLOOKUP, IFS) would you choose for a real grading system? Why?',
      'What happens if the grading criteria change — which approach is easiest to update?'
    ],
    learningOutcomes: [
      'Construct nested IF formulas that handle multiple classification boundaries',
      'Identify and resolve edge case errors in conditional logic',
      'Compare multiple formula approaches for the same problem on readability and efficiency'
    ],
    studentGuide: {
      whatYouLearn: 'How to build reliable classification logic and why testing edge cases is essential — skills that apply to programming, data analysis, and system design.',
      whatToBring: 'Laptop with Excel or Google Sheets access',
      tips: [
        'Think about whether you are checking >= or > at each boundary — one character changes the result',
        'Test with the exact boundary value, one above, and one below',
        'Write your conditions in descending order (check A+ first, then A, then B+...) to simplify nesting'
      ],
      reflectionPrompts: [
        'Why is edge case testing important in any system that classifies data?',
        'If you had 20 grade categories instead of 7, would you still use nested IF? Why or why not?'
      ],
      extensionChallenge: 'Build a grade classification system that also considers attendance: if attendance < 80%, the maximum grade is capped at C regardless of marks.'
    },
    lecturerGuide: {
      sessionGoal: 'Reinforce conditional logic through a familiar context (grading) while introducing the critical practice of edge case testing and approach comparison.',
      roomSetup: 'Individual or paired workstations with Excel/Google Sheets. Display grade boundaries on screen for reference.',
      facilitationScript: [
        { time: '0-2 min', action: 'Ask: "If a student scores exactly 75, what grade do they get?" Use disagreements to highlight the importance of precise boundary definitions. Show how >= vs > changes the result.' },
        { time: '2-10 min', action: 'Students build and test their formulas. Circulate and deliberately enter boundary values into student spreadsheets. When errors appear, ask: "Why did that happen?" rather than giving the fix.' },
        { time: '10-15 min', action: 'Show VLOOKUP approximate match as an alternative. Ask: "Which would you prefer to maintain if grade boundaries change every year?" Facilitate a brief comparison discussion.' }
      ],
      commonMisconceptions: ['Students often confuse >= and > at boundaries, leading to off-by-one errors', 'Some believe nested IFs are always the best approach regardless of the number of categories'],
      interventions: ['If students are stuck, suggest building the formula for just 3 grades first (A, B, F) then expanding', 'If edge case testing is superficial, provide a specific failing case and ask them to diagnose it'],
      formativeChecks: ['Does the formula correctly handle all boundary values?', 'Can students articulate why one approach might be preferred over another?'],
      rubricSnapshot: {
        excellent: 'Formula handles all edge cases correctly; meaningful comparison of approaches with clear reasoning; efficient formula structure',
        good: 'Formula works for most cases; comparison attempted with reasonable points; minor edge case issues',
        developing: 'Formula works for common values but fails at boundaries; comparison is superficial',
        beginning: 'Formula has significant errors; no edge case testing; no comparison attempted'
      },
      postClassReflection: 'Edge case testing is a transferable skill. Emphasise that professional developers spend more time testing boundaries than writing the initial code. Connect to data validation in Week 7.'
    },
    variations: [
      { name: 'Dynamic Boundaries', description: 'Grade boundaries are stored in a separate table and the formula references them dynamically. If boundaries change, the formula auto-updates. Introduces the concept of configuration separation.' },
      { name: 'Error Handling', description: 'Add IFERROR and input validation: what happens if someone enters "abc" or -5 or 101? Students build defensive formulas that handle invalid input gracefully.' }
    ],
    references: [
      { author: 'Walkenbach, J.', year: 2019, title: 'Excel Bible', source: 'John Wiley & Sons' },
      { author: 'Alexander, M. & Kusleika, D.', year: 2019, title: 'Excel Macros For Dummies', source: 'John Wiley & Sons' }
    ]
  },
  {
    id: 'cl-031',
    title: 'Data Story Challenge',
    stream: 'CL',
    mode: 'Hybrid',
    week: 10,
    semester: 1,
    skills: ['data-analysis', 'narrative-construction', 'critical-thinking', 'integration'],
    durationMin: 35,
    groupSize: '2-4',
    difficulty: 'Advanced',
    objective: 'Synthesise data analysis, visualisation, and narrative skills by formulating a question, analysing a complex dataset, and writing a data-driven report.',
    heroGraphic: 'data-story',
    materials: [
      'Raw dataset with 200+ rows and 8 columns (provided digitally)',
      'Computer with Excel or Google Sheets',
      'Report template (1-page structure)',
      'Chart creation tools',
      'Pens/paper for planning'
    ],
    setup: [
      'Distribute the raw dataset digitally to all groups',
      'Provide the 1-page report template',
      'Ensure charting tools are available',
      'Group students in teams of 2-4',
      'Explain that the dataset contains multiple possible stories — some misleading'
    ],
    procedure: [
      {
        step: 1,
        title: 'Formulate Question',
        description: 'Students explore the raw dataset and formulate a specific, answerable research question. They must justify why their question is interesting and what they expect to find. Emphasise that the question drives the analysis, not the other way around.',
        duration: 8,
        graphic: 'formulate-question'
      },
      {
        step: 2,
        title: 'Analyse Data',
        description: 'Students analyse the dataset in Excel using sorting, filtering, formulas (SUM, AVERAGE, COUNTIF, etc.), and pivot tables as appropriate. They must document their analysis steps so another team could replicate the process.',
        duration: 10,
        graphic: 'analyse-data'
      },
      {
        step: 3,
        title: 'Create Visualisations',
        description: 'Students create 2-3 charts that support their analysis findings. Each chart type must be justified based on the data properties being shown. Charts must follow honest visualisation practices covered in Week 8.',
        duration: 8,
        graphic: 'create-visualisations'
      },
      {
        step: 4,
        title: 'Write Narrative',
        description: 'Students write a 1-page narrative report that tells a coherent data story: question → method → findings → conclusion. The narrative must acknowledge limitations and alternative interpretations of the data.',
        duration: 9,
        graphic: 'write-narrative'
      }
    ],
    deliverable: 'A 1-page data story report containing a research question, analysis methodology, 2-3 supporting charts, and a narrative conclusion with limitations.',
    replicabilityCheck: {
      question: 'Could another team follow your documented methodology to reach the same findings from the same dataset?',
      successCriteria: 'Analysis steps are documented clearly enough that another team can replicate the key findings',
      failureAnalysis: 'Identify which analysis steps were undocumented or described too vaguely for replication'
    },
    debriefQuestions: [
      'Did any team find a misleading pattern in the data? How did you recognise it was misleading?',
      'How did your question shape what you found? Would a different question have led to a different story?',
      'What limitations did you identify in your analysis?'
    ],
    learningOutcomes: [
      'Formulate research questions that can be answered with available data',
      'Conduct systematic data analysis using spreadsheet tools',
      'Create appropriate visualisations that support analytical findings',
      'Write a coherent data-driven narrative that includes limitations'
    ],
    studentGuide: {
      whatYouLearn: 'How to go from raw data to a compelling, honest story — the complete data analysis workflow used in journalism, business, and research.',
      whatToBring: 'Laptop with Excel or Google Sheets, pen and paper for planning',
      tips: [
        'Start with the question, not the data — decide what you want to know BEFORE diving into analysis',
        'The dataset has multiple stories hidden in it — some are misleading, so think critically',
        'Your charts should ADD to the narrative, not just repeat what the text says'
      ],
      reflectionPrompts: [
        'How did you decide which story to tell from so many possibilities?',
        'What would you do differently if you had more time or more data?'
      ],
      extensionChallenge: 'Find a public dataset (e.g., from data.gov or Kaggle) and create a full 3-page data story with 5+ visualisations and a detailed methodology section.'
    },
    lecturerGuide: {
      sessionGoal: 'Assess integrated data literacy by having students complete the full analysis cycle: question → analysis → visualisation → narrative. This is the capstone activity for the data skills module.',
      roomSetup: 'Groups of 2-4 with computers. The dataset should be distributed at the start. Have the report template displayed on screen. Allow paper for planning.',
      facilitationScript: [
        { time: '0-5 min', action: 'Introduce the dataset briefly: number of rows, columns, and data types. Emphasise: "There are MANY stories in this data. Your job is to find ONE good one and tell it honestly." Warn about misleading patterns.' },
        { time: '5-25 min', action: 'Students work through question formulation, analysis, and visualisation. Circulate to check that questions are specific and answerable. Challenge vague questions: "How would you know when you\'ve answered that?"' },
        { time: '25-35 min', action: 'Narrative writing and wrap-up. If time allows, have 2-3 groups present their stories in 2 minutes each. Highlight how different groups found different stories in the same data — this IS the point.' }
      ],
      commonMisconceptions: ['Students may find a correlation and assume causation', 'Some will try to tell ALL stories rather than focusing on one compelling narrative'],
      interventions: ['If a group is stuck on question formulation, suggest they sort by different columns and look for surprising patterns', 'If narratives lack limitations, ask: "What could be wrong with your conclusion? What data would you need to be more certain?"'],
      formativeChecks: ['Is the research question specific and answerable with the available data?', 'Do visualisations follow honest practices and support the narrative?', 'Does the report acknowledge limitations?'],
      rubricSnapshot: {
        excellent: 'Specific question; rigorous analysis; appropriate charts; compelling narrative with honest limitations; documented methodology',
        good: 'Clear question; solid analysis; reasonable charts; coherent narrative; some limitations mentioned',
        developing: 'Vague question; basic analysis; charts present but not well-chosen; narrative needs structure',
        beginning: 'No clear question; minimal analysis; inappropriate or missing charts; no coherent narrative'
      },
      postClassReflection: 'This is the integration point for Weeks 7-9. Assess whether students can independently apply sorting, filtering, charting, and narrative skills together. Weak spots indicate which earlier activities need reinforcement.'
    },
    variations: [
      { name: 'Counter-Narrative Challenge', description: 'After presenting their story, another team must find a COUNTER-NARRATIVE in the same data that challenges the original conclusion. Builds critical thinking and intellectual humility.' },
      { name: 'Timed Data Sprint', description: 'Reduce to 20 minutes and use a simpler dataset. Focuses on speed and decision-making under time pressure — which analysis steps are essential vs. nice-to-have?' }
    ],
    references: [
      { author: 'Knaflic, C.N.', year: 2015, title: 'Storytelling with Data', source: 'John Wiley & Sons' },
      { author: 'Cairo, A.', year: 2016, title: 'The Truthful Art: Data, Charts, and Maps for Communication', source: 'New Riders' }
    ]
  },
  {
    id: 'cl-032',
    title: 'Report Quality Checklist Algorithm',
    stream: 'CL',
    mode: 'Unplugged',
    week: 10,
    semester: 1,
    skills: ['meta-cognition', 'evaluation', 'algorithm-design', 'peer-review'],
    durationMin: 15,
    groupSize: '4-6',
    difficulty: 'Intermediate',
    objective: 'Design a universal quality checklist algorithm for evaluating data reports, then apply it through peer review to test its consistency and reliability.',
    heroGraphic: 'quality-checklist',
    materials: [
      'Blank checklist template sheets',
      'Sample data reports from previous activities (or provided examples)',
      'Scoring rubric template',
      'Pens/markers',
      'Discussion prompt cards'
    ],
    setup: [
      'Group students in teams of 4-6',
      'Distribute blank checklist templates and sample reports',
      'Ensure each group has at least 2 different reports to evaluate',
      'Prepare discussion prompt cards for disagreement resolution'
    ],
    procedure: [
      {
        step: 1,
        title: 'Design Checklist',
        description: 'Teams design a UNIVERSAL quality checklist (algorithm) for evaluating any data report. The checklist must cover: data accuracy, chart appropriateness, narrative clarity, referencing, and formatting. Each item must be specific enough that two reviewers would give the same score.',
        duration: 5,
        graphic: 'design-checklist'
      },
      {
        step: 2,
        title: 'Apply to Peer Reports',
        description: 'Groups swap reports and independently apply their checklist to score the received report. Each team member scores individually first, then they compare scores within the group. Document any items where scorers disagreed.',
        duration: 5,
        graphic: 'apply-checklist'
      },
      {
        step: 3,
        title: 'Resolve Disagreements',
        description: 'Where team members gave different scores for the same checklist item, they discuss WHY. Determine whether the disagreement is because the checklist item was ambiguous (fix the checklist) or because reviewers interpreted the report differently (discuss and agree on a standard).',
        duration: 5,
        graphic: 'resolve-disagreements'
      }
    ],
    deliverable: 'A refined universal quality checklist with clear, unambiguous criteria and a scored peer report demonstrating the checklist in action.',
    replicabilityCheck: {
      question: 'Do two independent reviewers using the same checklist produce the same scores for the same report?',
      successCriteria: 'Inter-rater agreement of 80% or higher on checklist items',
      failureAnalysis: 'Identify ambiguous checklist items that caused disagreement and revise them for clarity'
    },
    debriefQuestions: [
      'Which checklist items caused the most disagreement? Why?',
      'How is designing a checklist similar to writing an algorithm?',
      'Why is it important that a quality evaluation process produces consistent results regardless of who runs it?'
    ],
    learningOutcomes: [
      'Design evaluation criteria that are specific, measurable, and consistently applicable',
      'Apply peer review processes to assess data report quality',
      'Identify and resolve ambiguity in evaluation algorithms through iterative refinement'
    ],
    studentGuide: {
      whatYouLearn: 'How to create a repeatable evaluation process — an algorithm for quality assessment. This is the same thinking behind code testing, quality assurance, and peer review in science.',
      whatToBring: 'Pen and paper; a completed data report from a previous activity (if available)',
      tips: [
        'Make each checklist item a YES/NO question — if it requires judgment, it is too vague',
        'Think about what a computer could check automatically vs. what needs human judgment',
        'When you disagree with a teammate, ask: is the checklist unclear, or do we see the report differently?'
      ],
      reflectionPrompts: [
        'How is a quality checklist similar to a computer program?',
        'What would happen if every journal used the same quality checklist for reviewing papers?'
      ],
      extensionChallenge: 'Automate part of your checklist: create Excel formulas or conditional formatting rules that automatically check for some quality criteria (e.g., word count, chart count, reference count).'
    },
    lecturerGuide: {
      sessionGoal: 'Teach algorithmic thinking through the lens of evaluation design — creating a repeatable process that produces consistent results regardless of who runs it.',
      roomSetup: 'Groups of 4-6 with table space for writing. Distribute sample reports or use reports from the Data Story Challenge (cl-031). Have discussion prompt cards ready for disagreement resolution.',
      facilitationScript: [
        { time: '0-3 min', action: 'Ask: "If I gave three different lecturers the same assignment, would they give the same mark? Why not?" Use this to motivate the need for clear, unambiguous evaluation criteria — a checklist algorithm.' },
        { time: '3-10 min', action: 'Groups design and apply their checklists. Circulate and challenge vague items: "What does \'good formatting\' mean? Can you make that a YES/NO check?" Push for precision.' },
        { time: '10-15 min', action: 'Disagreement resolution. Highlight groups who revised their checklist after finding ambiguity — this IS the learning. Close by connecting checklist design to algorithm design: clear inputs, defined process, consistent outputs.' }
      ],
      commonMisconceptions: ['Students think evaluation is purely subjective and cannot be systematised', 'Some create checklists that are too detailed to be practical or too vague to be useful'],
      interventions: ['If checklists are too vague, ask: "Would a stranger produce the same score using this item?"', 'If groups agree on everything, they may be conforming — ask each member to score independently before comparing'],
      formativeChecks: ['Are checklist items specific enough for consistent application?', 'Did the group identify and resolve at least one ambiguity through disagreement discussion?'],
      rubricSnapshot: {
        excellent: 'Checklist items are specific and testable; high inter-rater agreement; ambiguities identified and resolved; clear connection to algorithmic thinking',
        good: 'Most checklist items are clear; reasonable agreement; some ambiguities discussed',
        developing: 'Checklist items are present but several are vague; significant disagreements unresolved',
        beginning: 'Checklist is informal or incomplete; no systematic application; disagreements not addressed'
      },
      postClassReflection: 'This meta-cognitive activity works best after students have produced their own reports (cl-031). The act of designing evaluation criteria deepens understanding of what quality means. Connect to automated testing in computing.'
    },
    variations: [
      { name: 'Checklist Competition', description: 'Two groups evaluate the SAME report using their OWN checklists. Compare results to see which checklist produces more useful, actionable feedback. The better checklist "wins."' },
      { name: 'Automated vs. Human Review', description: 'Students identify which checklist items could be automated (spell check, word count, chart presence) vs. which require human judgment (narrative clarity, argument quality). Connects to AI-assisted evaluation.' }
    ],
    references: [
      { author: 'Gawande, A.', year: 2010, title: 'The Checklist Manifesto: How to Get Things Right', source: 'Metropolitan Books' },
      { author: 'Topping, K.J.', year: 1998, title: 'Peer Assessment Between Students in Colleges and Universities', source: 'Review of Educational Research, 68(3)' }
    ]
  },
  // ============================================
  // ACADEMIC LITERACY (AL) ACTIVITIES
  // ============================================
  {
    id: 'al-001',
    title: 'Claim-Evidence Sorting Wall',
    stream: 'AL',
    mode: 'Unplugged',
    skills: ['critical-thinking', 'argumentation', 'evidence-evaluation'],
    durationMin: 45,
    groupSize: '4-6',
    difficulty: 'Beginner',
    objective: 'Learn to distinguish claims from evidence and evaluate argument strength by physically sorting statements.',
    heroGraphic: 'sorting-wall',
    materials: [
      'Large wall or board space',
      'Pre-printed statement cards (claims and evidence)',
      'Claim/Evidence header cards',
      'Strength rating cards (Strong/Moderate/Weak)',
      'Tape or sticky tack'
    ],
    setup: [
      'Create clear wall sections: Claims, Supporting Evidence, Opposing Evidence',
      'Prepare mixed stack of claim and evidence statement cards',
      'Include some ambiguous statements for discussion',
      'Set up strength rating system'
    ],
    procedure: [
      {
        step: 1,
        title: 'Concept Introduction',
        description: 'Define claims (assertions that require support) vs evidence (facts, data, examples that support claims).',
        duration: 7,
        graphic: 'claim-evidence-diagram'
      },
      {
        step: 2,
        title: 'Initial Sort',
        description: 'Teams receive mixed cards and sort them into Claims vs Evidence categories.',
        duration: 12,
        graphic: 'sorting-process'
      },
      {
        step: 3,
        title: 'Evidence Matching',
        description: 'Match evidence cards to the claims they support. Identify claims without evidence.',
        duration: 10,
        graphic: 'matching-process'
      },
      {
        step: 4,
        title: 'Strength Rating',
        description: 'Rate evidence strength. Discuss why some evidence is stronger than others.',
        duration: 10,
        graphic: 'strength-rating'
      },
      {
        step: 5,
        title: 'Class Discussion',
        description: 'Review the wall together. Debate ambiguous cases.',
        duration: 6,
        graphic: 'class-discussion'
      }
    ],
    deliverable: 'A completed sorting wall with claims matched to evidence and strength ratings.',
    replicabilityCheck: {
      question: 'Would another group sort the same cards the same way?',
      successCriteria: 'At least 80% agreement on claim vs evidence classification',
      failureAnalysis: 'Discuss why certain statements are ambiguous'
    },
    debriefQuestions: [
      'What made some statements hard to classify?',
      'Can a claim become evidence? When?',
      'What makes evidence strong vs weak?',
      'How does this apply to evaluating arguments in articles?'
    ],
    learningOutcomes: [
      'Distinguish between claims and evidence',
      'Evaluate evidence quality and relevance',
      'Understand argument structure',
      'Develop critical reading skills'
    ],
    studentGuide: {
      whatYouLearn: 'How to identify what is a claim vs what supports it - essential for academic reading and writing.',
      whatToBring: 'Nothing physical - bring your critical thinking',
      tips: [
        'Claims can be rephrased as questions: "Is this true?"',
        'Evidence answers "How do you know?"',
        'Numbers and data are usually evidence, not claims',
        'Watch for claims disguised as facts'
      ],
      reflectionPrompts: [
        'Which type of statement was hardest to classify?',
        'How will this change how you read academic articles?',
        'What evidence would you need to support your own research claims?'
      ],
      extensionChallenge: 'Find a peer-reviewed journal article in your discipline and create your own claim-evidence sort, identifying the thesis, supporting data, and any unsupported assertions.'
    },
    lecturerGuide: {
      sessionGoal: 'Students develop intuition for argument structure through physical manipulation.',
      roomSetup: 'Large wall space or multiple boards, teams can work simultaneously, visible to all for discussion.',
      facilitationScript: [
        { time: '0-7 min', action: 'Define claims vs evidence with clear examples' },
        { time: '7-19 min', action: 'Monitor sorting, note disagreements for discussion' },
        { time: '19-29 min', action: 'Guide matching process, prompt justifications' },
        { time: '29-39 min', action: 'Facilitate strength rating with reasoning' },
        { time: '39-45 min', action: 'Class-wide discussion of ambiguous cases' }
      ],
      commonMisconceptions: [
        'Confusing opinions with claims',
        'Thinking all statistics are strong evidence',
        'Not recognizing that evidence can be weak or irrelevant'
      ],
      interventions: [
        'For ambiguous statements: "What would make this a claim? What would make it evidence?"',
        'For strength debates: "What additional information would make this evidence stronger?"'
      ],
      formativeChecks: [
        'Can students articulate why they classified a statement one way?',
        'Do teams agree on clear-cut cases?'
      ],
      rubricSnapshot: {
        excellent: 'Correct classification with nuanced strength analysis',
        good: 'Mostly correct with some minor misclassifications',
        developing: 'Several misclassifications but understands concept',
        beginning: 'Significant confusion between claims and evidence'
      },
      postClassReflection: 'Note which statement types caused most confusion for future emphasis.'
    },
    variations: [
      {
        name: 'Topic Specific',
        description: 'Use claims/evidence from a specific field or current event.'
      },
      {
        name: 'Digital Alternative',
        description: 'Use a collaborative whiteboard tool for remote classes.'
      },
      {
        name: 'Extension',
        description: 'Add "warrants" - the reasoning that connects evidence to claims.'
      }
    ],
    references: [
      { author: 'Toulmin, S. E.', year: 2003, title: 'The Uses of Argument (Updated ed.)', source: 'Cambridge University Press' },
      { author: 'Walton, D.', year: 2006, title: 'Fundamentals of Critical Argumentation', source: 'Cambridge University Press' },
      { author: 'Kuhn, D.', year: 2005, title: 'Education for Thinking', source: 'Harvard University Press' }
    ]
  },
  {
    id: 'al-002',
    title: 'Paraphrase Relay',
    stream: 'AL',
    mode: 'Unplugged',
    skills: ['paraphrasing', 'reading-comprehension', 'writing', 'communication'],
    durationMin: 40,
    groupSize: '4-5',
    difficulty: 'Beginner',
    objective: 'Develop paraphrasing skills by progressively rewriting passages while maintaining meaning.',
    heroGraphic: 'paraphrase-relay',
    materials: [
      'Original academic paragraph cards',
      'Writing sheets for each team member',
      'Timer',
      'Meaning verification rubric',
      'Pens'
    ],
    setup: [
      'Select academic paragraphs of appropriate complexity',
      'Prepare team relay spaces',
      'Create meaning verification checklist',
      'Set up timer visible to all'
    ],
    procedure: [
      {
        step: 1,
        title: 'Understanding Original',
        description: 'First team member reads the original paragraph and identifies key ideas.',
        duration: 5,
        graphic: 'reading-original'
      },
      {
        step: 2,
        title: 'First Paraphrase',
        description: 'First person writes a paraphrase, passes only their version to the second person (not the original).',
        duration: 8,
        graphic: 'first-paraphrase'
      },
      {
        step: 3,
        title: 'Chain Paraphrasing',
        description: 'Each subsequent person paraphrases the previous paraphrase, not the original.',
        duration: 15,
        graphic: 'chain-process'
      },
      {
        step: 4,
        title: 'Comparison',
        description: 'Compare final paraphrase to original. Did meaning survive? What was lost?',
        duration: 7,
        graphic: 'comparison'
      },
      {
        step: 5,
        title: 'Best Practices Discussion',
        description: 'Identify which paraphrase techniques preserved meaning best.',
        duration: 5,
        graphic: 'best-practices'
      }
    ],
    deliverable: 'A chain of paraphrases demonstrating meaning preservation (or loss) techniques.',
    replicabilityCheck: {
      question: 'Does the final paraphrase still accurately represent the original meaning?',
      successCriteria: 'Core ideas preserved through all iterations',
      failureAnalysis: 'Identify where meaning was lost or distorted'
    },
    debriefQuestions: [
      'Where did meaning get lost in the chain?',
      'What paraphrasing strategies worked best?',
      'Why is paraphrasing different from using synonyms?',
      'When should you paraphrase vs quote directly?'
    ],
    learningOutcomes: [
      'Develop effective paraphrasing techniques',
      'Understand the difference between paraphrasing and copying',
      'Recognize when meaning is preserved vs altered',
      'Improve academic writing integrity'
    ],
    studentGuide: {
      whatYouLearn: 'How to restate ideas in your own words while keeping the meaning - critical for avoiding plagiarism.',
      whatToBring: 'Pen and willingness to write',
      tips: [
        'Understand the idea first, then write without looking',
        'Change sentence structure, not just words',
        'Keep technical terms - they are not paraphrased',
        'Check: Does my version mean the same thing?'
      ],
      reflectionPrompts: [
        'What made some passages harder to paraphrase?',
        'How did you check if meaning was preserved?',
        'How will you apply this when writing essays?'
      ],
      extensionChallenge: 'Take a paragraph from a peer-reviewed article in your field of study and write three structurally distinct valid paraphrases, each suitable for a different context (essay, presentation, abstract).'
    },
    lecturerGuide: {
      sessionGoal: 'Students experience meaning preservation/loss firsthand through progressive paraphrasing.',
      roomSetup: 'Tables arranged for relay passing, team members should not see each others work until reveal.',
      facilitationScript: [
        { time: '0-5 min', action: 'Distribute originals, explain relay rules' },
        { time: '5-13 min', action: 'First paraphrase round, ensure no peeking at original' },
        { time: '13-28 min', action: 'Monitor chain paraphrasing, keep time' },
        { time: '28-35 min', action: 'Reveal and comparison, facilitate discovery' },
        { time: '35-40 min', action: 'Best practices discussion' }
      ],
      commonMisconceptions: [
        'Changing a few words is paraphrasing',
        'Using a thesaurus for every word',
        'Paraphrasing means simplifying'
      ],
      interventions: [
        'Ask: "If you read only your version, would you understand the original idea?"',
        'Challenge: "Is this your words or just rearranged original words?"'
      ],
      formativeChecks: [
        'Compare first and last paraphrases - is core meaning preserved?',
        'Check for patchwriting (too close to original)'
      ],
      rubricSnapshot: {
        excellent: 'Meaning fully preserved in own words and structure',
        good: 'Meaning mostly preserved with minor drift',
        developing: 'Some meaning lost but strategy understood',
        beginning: 'Significant meaning loss or near-copying'
      },
      postClassReflection: 'Note which passage types caused most meaning loss.'
    },
    variations: [
      {
        name: 'Competitive',
        description: 'Teams compete for best meaning preservation.'
      },
      {
        name: 'Simplified',
        description: 'Shorter passages, fewer relay steps.'
      },
      {
        name: 'Extension',
        description: 'Include source citation in each paraphrase.'
      }
    ],
    references: [
      { author: 'Flower, L. & Hayes, J. R.', year: 1981, title: 'A cognitive process theory of writing', source: 'College Composition and Communication, 32(4), 365-387' },
      { author: 'Keck, C.', year: 2006, title: 'The use of paraphrase in summary writing', source: 'Journal of Second Language Writing, 15(4), 261-278' },
      { author: 'Hirvela, A. & Du, Q.', year: 2013, title: 'Why am I paraphrasing? Undergraduate ESL writers engagement with source-based academic writing and reading', source: 'Journal of English for Academic Purposes, 12(2), 87-98' }
    ]
  },
  {
    id: 'al-003',
    title: 'Argument Reconstruction',
    stream: 'AL',
    mode: 'Unplugged',
    skills: ['logic', 'argumentation', 'critical-thinking', 'reading'],
    durationMin: 50,
    groupSize: '3-4',
    difficulty: 'Intermediate',
    objective: 'Learn argument structure by physically reconstructing jumbled paragraphs into logical arguments.',
    heroGraphic: 'argument-reconstruction',
    materials: [
      'Cut-up argument paragraphs (claim, evidence, reasoning, conclusion)',
      'Argument structure reference cards',
      'Blank argument templates',
      'Glue sticks or tape',
      'Large paper for final arrangement'
    ],
    setup: [
      'Pre-cut academic paragraphs into component sentences',
      'Mix sentences from multiple arguments',
      'Prepare argument structure templates',
      'Create reference cards for argument components'
    ],
    procedure: [
      {
        step: 1,
        title: 'Component Identification',
        description: 'Introduce argument components: claim, grounds, warrant, backing, qualifier, rebuttal.',
        duration: 8,
        graphic: 'argument-components'
      },
      {
        step: 2,
        title: 'Sorting Phase',
        description: 'Teams sort jumbled sentences by which argument they belong to.',
        duration: 12,
        graphic: 'sorting-sentences'
      },
      {
        step: 3,
        title: 'Logical Ordering',
        description: 'Arrange sentences within each argument in logical order.',
        duration: 12,
        graphic: 'ordering-process'
      },
      {
        step: 4,
        title: 'Identification of Missing Parts',
        description: 'Identify any missing components. Write the missing pieces.',
        duration: 10,
        graphic: 'gap-analysis'
      },
      {
        step: 5,
        title: 'Presentation',
        description: 'Teams present their reconstructed arguments. Class evaluates logic.',
        duration: 8,
        graphic: 'presentation'
      }
    ],
    deliverable: 'Reconstructed arguments with all components identified and any gaps filled.',
    replicabilityCheck: {
      question: 'Would another team reconstruct the same logical flow?',
      successCriteria: 'Argument follows valid logical structure',
      failureAnalysis: 'Identify alternative valid orderings'
    },
    debriefQuestions: [
      'What cue words helped you identify component types?',
      'Which component was hardest to place?',
      'How do strong arguments differ from weak ones structurally?',
      'How will this help you construct your own arguments?'
    ],
    learningOutcomes: [
      'Understand argument component functions',
      'Recognize logical flow in academic writing',
      'Identify gaps in argument structure',
      'Develop argument construction skills'
    ],
    studentGuide: {
      whatYouLearn: 'How arguments are built - understanding this helps you read critically and write persuasively.',
      whatToBring: 'Critical thinking mindset',
      tips: [
        'Look for signal words: "therefore", "because", "however"',
        'Claims often come first or last in paragraphs',
        'Evidence is often specific (numbers, examples, quotes)',
        'Rebuttals address "but what about..." objections'
      ],
      reflectionPrompts: [
        'Which argument component was hardest to identify?',
        'How complete were the arguments you reconstructed?',
        'What component is most often missing in weak arguments?'
      ],
      extensionChallenge: 'Analyse a peer-reviewed journal article\'s introduction and diagram its full argument structure using Toulmin\'s model (claim, grounds, warrant, backing, qualifier, rebuttal).'
    },
    lecturerGuide: {
      sessionGoal: 'Students internalize argument structure through hands-on reconstruction.',
      roomSetup: 'Tables for team work, wall space for posting reconstructed arguments.',
      facilitationScript: [
        { time: '0-8 min', action: 'Teach argument components with examples' },
        { time: '8-20 min', action: 'Monitor sorting, address confusion about sentence ownership' },
        { time: '20-32 min', action: 'Guide logical ordering, discuss alternatives' },
        { time: '32-42 min', action: 'Help identify missing components' },
        { time: '42-50 min', action: 'Facilitate presentations and evaluation' }
      ],
      commonMisconceptions: [
        'Thinking there is only one correct order',
        'Confusing evidence with examples',
        'Not recognizing implicit claims'
      ],
      interventions: [
        'Ask: "What is this sentence trying to prove or support?"',
        'Challenge: "Could this sentence go in a different position and still make sense?"'
      ],
      formativeChecks: [
        'Can teams articulate why they placed sentences in their order?',
        'Do reconstructed arguments follow logical progression?'
      ],
      rubricSnapshot: {
        excellent: 'Correctly reconstructed with insightful gap analysis',
        good: 'Mostly correct reconstruction',
        developing: 'Some logical errors but understands components',
        beginning: 'Significant structural errors'
      },
      postClassReflection: 'Note which argument types were hardest to reconstruct.'
    },
    variations: [
      {
        name: 'Single Argument',
        description: 'Start with just one argument to reconstruct.'
      },
      {
        name: 'Competitive',
        description: 'Teams race to correctly reconstruct first.'
      },
      {
        name: 'Extension',
        description: 'Students write their own arguments using the template.'
      }
    ],
    references: [
      { author: 'Fisher, A.', year: 2004, title: 'The Logic of Real Arguments (2nd ed.)', source: 'Cambridge University Press' },
      { author: 'van Eemeren, F. H. & Grootendorst, R.', year: 2004, title: 'A Systematic Theory of Argumentation', source: 'Cambridge University Press' },
      { author: 'Groarke, L. & Tindale, C.', year: 2012, title: 'Good Reasoning Matters! A Constructive Approach to Critical Thinking (5th ed.)', source: 'Oxford University Press' }
    ]
  },
  {
    id: 'al-004',
    title: 'Source Credibility Role Cards',
    stream: 'AL',
    mode: 'Unplugged',
    skills: ['critical-thinking', 'source-evaluation', 'research'],
    durationMin: 45,
    groupSize: '5-6',
    difficulty: 'Beginner',
    objective: 'Learn to evaluate source credibility by role-playing different types of sources and their biases.',
    heroGraphic: 'source-credibility',
    materials: [
      'Role cards (different source types)',
      'Claim cards for sources to argue',
      'Credibility evaluation rubric',
      'CRAAP test reference (Currency, Relevance, Authority, Accuracy, Purpose)',
      'Voting ballots'
    ],
    setup: [
      'Create role cards: peer-reviewed journal, newspaper, blog, social media influencer, industry report, Wikipedia',
      'Prepare controversial claim for sources to argue',
      'Set up debate format with audience',
      'Distribute evaluation rubrics'
    ],
    procedure: [
      {
        step: 1,
        title: 'Role Assignment',
        description: 'Students draw source type roles. Each reads their role card describing their sources characteristics.',
        duration: 5,
        graphic: 'role-assignment'
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Each source prepares to argue their position on the given claim, staying in character.',
        duration: 10,
        graphic: 'preparation'
      },
      {
        step: 3,
        title: 'Source Debate',
        description: '"Sources" present their arguments. Audience notes credibility indicators.',
        duration: 15,
        graphic: 'debate'
      },
      {
        step: 4,
        title: 'CRAAP Test Application',
        description: 'Audience evaluates each source using the CRAAP test criteria.',
        duration: 10,
        graphic: 'evaluation'
      },
      {
        step: 5,
        title: 'Reveal and Discussion',
        description: 'Discuss results. Why did some sources seem more credible? What biases were present?',
        duration: 5,
        graphic: 'discussion'
      }
    ],
    deliverable: 'Completed credibility evaluations for all source types using CRAAP criteria.',
    replicabilityCheck: {
      question: 'Do different evaluators reach similar credibility conclusions?',
      successCriteria: 'Consensus on relative credibility ranking',
      failureAnalysis: 'Discuss where evaluators disagreed and why'
    },
    debriefQuestions: [
      'Which source type was most credible? Least credible? Why?',
      'What biases did each source type exhibit?',
      'Can a credible source still be wrong?',
      'How do you apply this when researching for assignments?'
    ],
    learningOutcomes: [
      'Apply systematic source evaluation criteria',
      'Recognize source types and their inherent biases',
      'Understand the CRAAP test framework',
      'Develop information literacy skills'
    ],
    studentGuide: {
      whatYouLearn: 'How to evaluate if a source is trustworthy - essential for research and daily life.',
      whatToBring: 'A skeptical but open mind',
      tips: [
        'All sources have some bias - the question is how much',
        'Peer review does not guarantee correctness, but indicates scrutiny',
        'Check who funds the source',
        'Recent is not always better; foundational works can be old'
      ],
      reflectionPrompts: [
        'What source type do you use most? Is it credible?',
        'How has this changed your view of online sources?',
        'What would you do if credible sources disagree?'
      ],
      extensionChallenge: 'Evaluate three sources you would cite in a first-year research essay using both the CRAAP test and lateral reading techniques, then rank them with justified reasoning.'
    },
    lecturerGuide: {
      sessionGoal: 'Students internalize source evaluation through embodied role-play.',
      roomSetup: 'Debate-style seating, role-players at front, audience with evaluation forms.',
      facilitationScript: [
        { time: '0-5 min', action: 'Assign roles, explain CRAAP test basics' },
        { time: '5-15 min', action: 'Role-players prepare in character' },
        { time: '15-30 min', action: 'Moderate debate, prompt probing questions' },
        { time: '30-40 min', action: 'Guide CRAAP test evaluation' },
        { time: '40-45 min', action: 'Reveal discussion, address misconceptions' }
      ],
      commonMisconceptions: [
        'Academic = automatically credible',
        'Popular = automatically not credible',
        'Wikipedia is never acceptable'
      ],
      interventions: [
        'Ask: "What would make this source more credible?"',
        'Challenge: "Could a credible source still be wrong? How?"'
      ],
      formativeChecks: [
        'Do evaluations show understanding of each criterion?',
        'Can students articulate why rankings differ?'
      ],
      rubricSnapshot: {
        excellent: 'Thorough CRAAP analysis with nuanced understanding',
        good: 'Complete CRAAP analysis',
        developing: 'Partial analysis, some criteria misunderstood',
        beginning: 'Unable to apply CRAAP criteria meaningfully'
      },
      postClassReflection: 'Note which source types students initially trusted too much or too little.'
    },
    variations: [
      {
        name: 'Current Event',
        description: 'Use a real current event claim with actual source examples.'
      },
      {
        name: 'Simplified',
        description: 'Fewer source types, focus on biggest contrasts.'
      },
      {
        name: 'Extension',
        description: 'Students find real examples of each source type online.'
      }
    ],
    references: [
      { author: 'Blakeslee, S.', year: 2004, title: 'The CRAAP Test', source: 'LOEX Quarterly, 31(3)' },
      { author: 'Wineburg, S., McGrew, S., Breakstone, J., & Ortega, T.', year: 2016, title: 'Evaluating Information: The Cornerstone of Civic Online Reasoning', source: 'Stanford History Education Group' },
      { author: 'Coiro, J.', year: 2011, title: 'Predicting reading comprehension on the Internet', source: 'Journal of Literacy Research, 43(4), 352-392' }
    ]
  },
  // ============================================
  // QUANTITATIVE LITERACY (QL) ACTIVITIES
  // ============================================
  {
    id: 'ql-001',
    title: 'Human Number Line',
    stream: 'QL',
    mode: 'Unplugged',
    skills: ['estimation', 'number-sense', 'magnitude', 'collaboration'],
    durationMin: 35,
    groupSize: '10-20',
    difficulty: 'Beginner',
    objective: 'Develop number sense and estimation skills by physically placing numbers on a human number line.',
    heroGraphic: 'number-line',
    materials: [
      'Large open space',
      'Rope or tape for line',
      'Number cards (various magnitudes)',
      'Endpoint markers (0, 100, 1000, etc.)',
      'Position recording sheets'
    ],
    setup: [
      'Create a long line across the room or outdoor space',
      'Mark clear endpoints',
      'Prepare number cards with various values',
      'Include some non-intuitive numbers (fractions, large numbers, negatives)'
    ],
    procedure: [
      {
        step: 1,
        title: 'Line Setup',
        description: 'Establish the number line with clear endpoints. Explain the scale.',
        duration: 5,
        graphic: 'line-setup'
      },
      {
        step: 2,
        title: 'Simple Placement',
        description: 'Start with easy numbers. Students hold their card and stand where they think the number belongs.',
        duration: 8,
        graphic: 'simple-placement'
      },
      {
        step: 3,
        title: 'Adjustment Round',
        description: 'Students can adjust their positions after seeing others. Discuss placements.',
        duration: 8,
        graphic: 'adjustments'
      },
      {
        step: 4,
        title: 'Challenge Numbers',
        description: 'Introduce harder numbers: fractions, decimals, very large/small numbers.',
        duration: 10,
        graphic: 'challenge-numbers'
      },
      {
        step: 5,
        title: 'Scale Change',
        description: 'Change the scale (0-100 to 0-1000000). Discuss how perception changes.',
        duration: 4,
        graphic: 'scale-change'
      }
    ],
    deliverable: 'Accurate placement of numbers on the line with articulated reasoning.',
    replicabilityCheck: {
      question: 'Would the same numbers be placed in the same relative positions?',
      successCriteria: 'Correct relative ordering and reasonable proportional spacing',
      failureAnalysis: 'Identify which number types caused estimation errors'
    },
    debriefQuestions: [
      'Which numbers were hardest to place? Why?',
      'How did changing the scale affect your perception?',
      'Where do you encounter estimation in daily life?',
      'Why is number sense important for interpreting data?'
    ],
    learningOutcomes: [
      'Develop intuition for number magnitude',
      'Understand scale and proportion',
      'improve estimation skills',
      'Recognize common estimation biases'
    ],
    studentGuide: {
      whatYouLearn: 'How to estimate where numbers fall in relation to each other - useful for sanity-checking calculations.',
      whatToBring: 'Yourself and willingness to move around',
      tips: [
        'Think about benchmarks: where is halfway? quarter?',
        'Large numbers bunch together more than you think',
        'Fractions and decimals are tricky - convert to percentages',
        'Trust your gut initially, then refine'
      ],
      reflectionPrompts: [
        'What surprised you about where numbers actually belong?',
        'How confident are you in your everyday estimates?',
        'When might bad estimation lead to real problems?'
      ],
      extensionChallenge: 'Estimate where the following quantities belong on a logarithmic number line: Avogadro\'s number, Earth\'s population, the number of cells in the human body, and the national GDP in Rands.'
    },
    lecturerGuide: {
      sessionGoal: 'Students develop physical intuition for numerical magnitude.',
      roomSetup: 'Long clear space, visible endpoint markers, room for all students on the line.',
      facilitationScript: [
        { time: '0-5 min', action: 'Set up line, explain activity' },
        { time: '5-13 min', action: 'Simple number placement, note initial estimates' },
        { time: '13-21 min', action: 'Allow adjustments, prompt discussion' },
        { time: '21-31 min', action: 'Introduce challenge numbers' },
        { time: '31-35 min', action: 'Scale change and debrief' }
      ],
      commonMisconceptions: [
        'Equal spacing for equal numerical differences (log scale intuition missing)',
        'Fractions are always "small"',
        'Large numbers have meaningful visual differences (millions vs billions)'
      ],
      interventions: [
        'Ask: "If these two people swapped places, would the line still make sense?"',
        'Challenge: "Where exactly is the halfway point? How do you know?"'
      ],
      formativeChecks: [
        'Do students understand relative vs absolute position?',
        'Can students adjust when the scale changes?'
      ],
      rubricSnapshot: {
        excellent: 'Accurate placement with clear articulation of reasoning',
        good: 'Mostly accurate with minor errors',
        developing: 'Some significant errors but understands concept',
        beginning: 'Large errors without recognition'
      },
      postClassReflection: 'Note which number types need more practice.'
    },
    variations: [
      {
        name: 'Negative Numbers',
        description: 'Include negative numbers and zero.'
      },
      {
        name: 'Logarithmic',
        description: 'Use a logarithmic scale (1, 10, 100, 1000, etc.).'
      },
      {
        name: 'Real World',
        description: 'Use real-world quantities (populations, distances, costs).'
      }
    ],
    references: [
      { author: 'Haylock, D. & Cockburn, A.', year: 2013, title: 'Understanding Mathematics for Young Children (4th ed.)', source: 'SAGE Publications' },
      { author: 'Booth, J. L. & Siegler, R. S.', year: 2008, title: 'Numerical magnitude representations influence arithmetic learning', source: 'Child Development, 79(4), 1016-1031' },
      { author: 'Dehaene, S.', year: 2011, title: 'The Number Sense: How the Mind Creates Mathematics (Revised ed.)', source: 'Oxford University Press' }
    ]
  },
  {
    id: 'ql-002',
    title: 'Ratio Recipe Lab',
    stream: 'QL',
    mode: 'Unplugged',
    skills: ['ratios', 'proportional-reasoning', 'scaling', 'practical-math'],
    durationMin: 45,
    groupSize: '3-4',
    difficulty: 'Beginner',
    objective: 'Understand ratios and proportional reasoning by scaling recipes up and down.',
    heroGraphic: 'ratio-scaling',
    materials: [
      'Simple recipe cards (3-4 ingredients)',
      'Measuring cups and spoons',
      'Dry ingredients (rice, beans, pasta - for non-food activities)',
      'Scaling challenge cards',
      'Ratio calculation worksheets'
    ],
    setup: [
      'Prepare recipe cards with original servings',
      'Create scaling challenges (half, double, for 7 people, etc.)',
      'Set up measuring stations for each team',
      'Prepare mixtures for verification'
    ],
    procedure: [
      {
        step: 1,
        title: 'Recipe Analysis',
        description: 'Teams examine their recipe. Identify the ratios between ingredients.',
        duration: 7,
        graphic: 'recipe-analysis'
      },
      {
        step: 2,
        title: 'Simple Scaling',
        description: 'Scale recipe to double and half. Measure ingredients to verify.',
        duration: 10,
        graphic: 'simple-scaling'
      },
      {
        step: 3,
        title: 'Complex Scaling',
        description: 'Scale for non-standard amounts: makes 7 servings from a 4-serving recipe.',
        duration: 12,
        graphic: 'complex-scaling'
      },
      {
        step: 4,
        title: 'Reverse Challenge',
        description: 'Given a maximum amount of one ingredient, calculate how much of others you can make.',
        duration: 10,
        graphic: 'reverse-challenge'
      },
      {
        step: 5,
        title: 'Real-World Application',
        description: 'Discuss where ratio scaling applies: chemistry, construction, budgets.',
        duration: 6,
        graphic: 'applications'
      }
    ],
    deliverable: 'Correctly scaled recipe calculations for all challenge scenarios.',
    replicabilityCheck: {
      question: 'Do the ingredient ratios remain constant regardless of scale?',
      successCriteria: 'All ingredient amounts in correct proportion',
      failureAnalysis: 'Identify calculation errors in scaling'
    },
    debriefQuestions: [
      'What happens if you scale ingredients incorrectly?',
      'When can you not scale a recipe proportionally?',
      'Where else do you encounter ratio and proportion problems?',
      'How does this relate to scientific experiments?'
    ],
    learningOutcomes: [
      'Understand and apply ratio concepts',
      'Perform proportional scaling calculations',
      'Connect abstract math to practical applications',
      'Recognize when proportional scaling applies'
    ],
    studentGuide: {
      whatYouLearn: 'How to scale quantities proportionally - used in cooking, science, budgeting, and more.',
      whatToBring: 'Calculator (or mental math skills)',
      tips: [
        'Find the scaling factor first: new servings / original servings',
        'Multiply each ingredient by the same factor',
        'Check: do the ratios between ingredients match the original?',
        'Watch units - convert before scaling if needed'
      ],
      reflectionPrompts: [
        'What was the trickiest scaling calculation?',
        'Where might you use this outside of cooking?',
        'What happens in chemistry if ratios are wrong?'
      ],
      extensionChallenge: 'If you have R100 to spend and ingredient prices are given, maximise servings while maintaining correct ratios — then discuss how this mirrors resource-constrained experimental design.'
    },
    lecturerGuide: {
      sessionGoal: 'Students connect abstract ratio math to tangible physical quantities.',
      roomSetup: 'Lab-style tables, measuring equipment, ingredients (or simulated with blocks/weights).',
      facilitationScript: [
        { time: '0-7 min', action: 'Distribute recipes, explain ratio concepts' },
        { time: '7-17 min', action: 'Monitor simple scaling, verify measurements' },
        { time: '17-29 min', action: 'Guide complex scaling, prompt calculation checks' },
        { time: '29-39 min', action: 'Reverse challenge - more independent' },
        { time: '39-45 min', action: 'Application discussion and debrief' }
      ],
      commonMisconceptions: [
        'Adding same constant to each ingredient instead of multiplying',
        'Confusion between ratios and differences',
        'Forgetting that all ingredients must scale by same factor'
      ],
      interventions: [
        'Ask: "If you doubled only the flour but not the sugar, what would happen?"',
        'Challenge: "Check your answer - is the ratio the same as the original?"'
      ],
      formativeChecks: [
        'Do calculations show multiplication, not addition?',
        'Can students verify their answers using ratio comparison?'
      ],
      rubricSnapshot: {
        excellent: 'All calculations correct with clear method',
        good: 'Minor calculation errors, method sound',
        developing: 'Some conceptual errors but attempted','beginning': 'Does not understand scaling concept'
      },
      postClassReflection: 'Note which scaling types need more practice.'
    },
    variations: [
      {
        name: 'Actual Cooking',
        description: 'Make actual simple recipes (no-bake items).'
      },
      {
        name: 'Scientific Context',
        description: 'Use solution concentration problems instead of recipes.'
      },
      {
        name: 'Extension',
        description: 'Include unit conversions (cups to ml, etc.).'
      }
    ],
    references: [
      { author: 'Lamon, S. J.', year: 2012, title: 'Teaching Fractions and Ratios for Understanding (3rd ed.)', source: 'Routledge' },
      { author: 'Tourniaire, F. & Pulos, S.', year: 1985, title: 'Proportional reasoning: A review of the literature', source: 'Educational Studies in Mathematics, 16(2), 181-204' },
      { author: 'Cramer, K. & Post, T.', year: 1993, title: 'Connecting research to teaching proportional reasoning', source: 'Mathematics Teacher, 86(5), 404-407' }
    ]
  },
  {
    id: 'ql-003',
    title: 'Probability with Physical Tokens',
    stream: 'QL',
    mode: 'Unplugged',
    skills: ['probability', 'experimentation', 'data-collection', 'statistics'],
    durationMin: 50,
    groupSize: '3-4',
    difficulty: 'Intermediate',
    objective: 'Develop probability intuition through hands-on experimentation with physical random events.',
    heroGraphic: 'probability-tokens',
    materials: [
      'Bags/containers with colored tokens',
      'Dice (various types)',
      'Coins',
      'Data recording sheets',
      'Theoretical probability reference cards',
      'Charts for plotting results'
    ],
    setup: [
      'Prepare token bags with known proportions for some, unknown for others',
      'Create data collection worksheets',
      'Set up experiment stations',
      'Prepare theoretical probability calculations'
    ],
    procedure: [
      {
        step: 1,
        title: 'Theoretical Probability',
        description: 'Review theoretical probability: favorable outcomes / total outcomes.',
        duration: 8,
        graphic: 'theoretical-intro'
      },
      {
        step: 2,
        title: 'Known Bag Experiment',
        description: 'Draw from bags with known composition. Compare experimental to theoretical probability.',
        duration: 12,
        graphic: 'known-experiment'
      },
      {
        step: 3,
        title: 'Unknown Bag Challenge',
        description: 'Use experimental probability to estimate composition of unknown bags.',
        duration: 15,
        graphic: 'unknown-challenge'
      },
      {
        step: 4,
        title: 'Sample Size Investigation',
        description: 'Compare accuracy of estimates with 10, 50, and 100 draws.',
        duration: 10,
        graphic: 'sample-size'
      },
      {
        step: 5,
        title: 'Results Discussion',
        description: 'Discuss law of large numbers. Why do more trials give better estimates?',
        duration: 5,
        graphic: 'discussion'
      }
    ],
    deliverable: 'Data table showing experimental vs theoretical probabilities across different sample sizes.',
    replicabilityCheck: {
      question: 'Do repeated experiments converge toward theoretical probability?',
      successCriteria: 'Experimental probability approaches theoretical with increasing trials',
      failureAnalysis: 'Examine if sampling was truly random'
    },
    debriefQuestions: [
      'Why were your early estimates often wrong?',
      'How many trials do you need for a reliable estimate?',
      'Where is probability used in science and evidence-based decision-making?',
      'What is the difference between probability and certainty?'
    ],
    learningOutcomes: [
      'Understand experimental vs theoretical probability',
      'Experience the law of large numbers firsthand',
      'Develop intuition for statistical inference',
      'Recognize the role of sample size in estimates'
    ],
    studentGuide: {
      whatYouLearn: 'How probability works in practice and why sample size matters for reliable conclusions.',
      whatToBring: 'Nothing - materials provided',
      tips: [
        'Record every draw - no shortcuts',
        'Replace tokens before each draw (with replacement sampling)',
        'Calculate running probability as you go',
        'Do not trust small samples!'
      ],
      reflectionPrompts: [
        'How close was your estimate after 10 draws vs 50?',
        'Why might a poll with 100 people be unreliable?',
        'When is "gut feeling" about probability wrong?'
      ],
      extensionChallenge: 'Design a hypothesis test for coin fairness: define H₀ and H₁, choose a significance level, determine the required sample size, and state your decision rule.'
    },
    lecturerGuide: {
      sessionGoal: 'Students experience why sample size matters through tangible probability experiments.',
      roomSetup: 'Station-based setup, each with different probability scenarios.',
      facilitationScript: [
        { time: '0-8 min', action: 'Review theoretical probability concepts' },
        { time: '8-20 min', action: 'Known bag experiments, compare to theory' },
        { time: '20-35 min', action: 'Unknown bag challenge - minimal hints' },
        { time: '35-45 min', action: 'Sample size comparison investigation' },
        { time: '45-50 min', action: 'Law of large numbers discussion' }
      ],
      commonMisconceptions: [
        'Small samples are representative',
        'Probabilities should match immediately',
        'Past results affect future draws (gamblers fallacy)'
      ],
      interventions: [
        'Ask: "If you got 3 reds in a row, does that change the probability?"',
        'Challenge: "How confident are you in your estimate after only 5 draws?"'
      ],
      formativeChecks: [
        'Are students recording data properly?',
        'Do students recognize when estimates are unreliable?'
      ],
      rubricSnapshot: {
        excellent: 'Accurate calculations, insightful sample size analysis',
        good: 'Correct method with minor calculation errors',
        developing: 'Understands concept, significant execution errors',
        beginning: 'Does not distinguish experimental from theoretical'
      },
      postClassReflection: 'Note which probability concepts need reinforcement.'
    },
    variations: [
      {
        name: 'Dice Focus',
        description: 'Use dice instead of tokens for different probability scenarios.'
      },
      {
        name: 'Two-Stage Events',
        description: 'Introduce combined probability (AND, OR).'
      },
      {
        name: 'Real Data',
        description: 'Connect to real-world probability (weather forecasts, medical tests).'
      }
    ],
    references: [
      { author: 'Batanero, C., Chernoff, E. J., Engel, J., Lee, H. S., & S\u00e1nchez, E.', year: 2016, title: 'Research on Teaching and Learning Probability', source: 'Springer' },
      { author: 'Kahneman, D. & Tversky, A.', year: 1972, title: 'Subjective probability: A judgment of representativeness', source: 'Cognitive Psychology, 3(3), 430-454' },
      { author: 'Fischbein, E.', year: 1975, title: 'The Intuitive Sources of Probabilistic Thinking in Children', source: 'Reidel Publishing' }
    ]
  },
  {
    id: 'ql-004',
    title: 'Graph Match Game',
    stream: 'QL',
    mode: 'Unplugged',
    skills: ['data-interpretation', 'graph-literacy', 'critical-thinking'],
    durationMin: 40,
    groupSize: '3-4',
    difficulty: 'Beginner',
    objective: 'Develop graph literacy by matching graphs to real-world scenarios they represent.',
    heroGraphic: 'graph-matching',
    materials: [
      'Graph cards (various types: line, bar, pie, scatter)',
      'Scenario description cards',
      'Data table cards',
      'Matching worksheets',
      'Reasoning documentation sheets'
    ],
    setup: [
      'Prepare sets of graphs, scenarios, and data tables',
      'Some should match, some should be intentionally wrong',
      'Include misleading graphs',
      'Create reasoning prompts for each match'
    ],
    procedure: [
      {
        step: 1,
        title: 'Graph Type Review',
        description: 'Quick review of graph types and what data each is best suited for.',
        duration: 7,
        graphic: 'graph-types'
      },
      {
        step: 2,
        title: 'Matching Round 1',
        description: 'Match scenario cards to appropriate graph types (not specific graphs).',
        duration: 10,
        graphic: 'type-matching'
      },
      {
        step: 3,
        title: 'Matching Round 2',
        description: 'Match specific graphs to scenarios. Document reasoning.',
        duration: 12,
        graphic: 'specific-matching'
      },
      {
        step: 4,
        title: 'Misleading Graphs',
        description: 'Identify graphs that technically match data but are misleading.',
        duration: 8,
        graphic: 'misleading-detection'
      },
      {
        step: 5,
        title: 'Class Comparison',
        description: 'Compare matches across teams. Discuss disagreements.',
        duration: 3,
        graphic: 'comparison'
      }
    ],
    deliverable: 'Completed matching sets with written justifications for each match.',
    replicabilityCheck: {
      question: 'Do other teams agree with your scenario-graph matches?',
      successCriteria: 'Matches are logically correct and justified',
      failureAnalysis: 'Identify alternative valid interpretations'
    },
    debriefQuestions: [
      'What features helped you match graphs to scenarios?',
      'How can the same data be made to tell different stories?',
      'What should you look for when evaluating a graph in an article?',
      'When is each graph type most appropriate?'
    ],
    learningOutcomes: [
      'Interpret various graph types accurately',
      'Match data visualization to appropriate contexts',
      'Identify misleading visualization techniques',
      'Develop graph literacy for daily life'
    ],
    studentGuide: {
      whatYouLearn: 'How to read graphs critically and choose the right graph for different data.',
      whatToBring: 'Just your analytical skills',
      tips: [
        'Read axis labels first - what is being measured?',
        'Check the scale - where does it start?',
        'Look for trends: increasing, decreasing, cyclic?',
        'Ask: Does this graph tell the truth about the data?'
      ],
      reflectionPrompts: [
        'Which graph type was hardest to interpret?',
        'Have you seen misleading graphs in the news?',
        'How would you present your own data?'
      ],
      extensionChallenge: 'Find three graphs from published research papers in your discipline and evaluate whether the graph type, scale, and labels appropriately represent the underlying data.'
    },
    lecturerGuide: {
      sessionGoal: 'Students develop practical graph interpretation skills.',
      roomSetup: 'Tables for card sorting, visible timer, wall space for posting matches.',
      facilitationScript: [
        { time: '0-7 min', action: 'Quick graph type review with examples' },
        { time: '7-17 min', action: 'Monitor type matching, clarify confusions' },
        { time: '17-29 min', action: 'Specific matching round, encourage documentation' },
        { time: '29-37 min', action: 'Misleading graph identification' },
        { time: '37-40 min', action: 'Class comparison and discussion' }
      ],
      commonMisconceptions: [
        'Line graphs are always appropriate for time data',
        'Pie charts are fine for any percentage data',
        'If the math is right, the graph cannot be misleading'
      ],
      interventions: [
        'Ask: "What question is this graph trying to answer?"',
        'Challenge: "Could you misinterpret this graph? How?"'
      ],
      formativeChecks: [
        'Can students articulate why a graph type is appropriate?',
        'Do students identify axis manipulation in misleading graphs?'
      ],
      rubricSnapshot: {
        excellent: 'All matches correct with insightful reasoning',
        good: 'Most matches correct',
        developing: 'Some matches correct, reasoning needs work',
        beginning: 'Many incorrect matches'
      },
      postClassReflection: 'Collect best misleading graph examples for future sessions.'
    },
    variations: [
      {
        name: 'Media Focus',
        description: 'Use only graphs from actual news sources.'
      },
      {
        name: 'Creation Challenge',
        description: 'Teams create misleading graphs for others to critique.'
      },
      {
        name: 'Digital Extension',
        description: 'Recreate correct versions in Excel.'
      }
    ],
    references: [
      { author: 'Curcio, F. R.', year: 1987, title: 'Comprehension of mathematical relationships expressed in graphs', source: 'Journal for Research in Mathematics Education, 18(5), 382-393' },
      { author: 'Friel, S. N., Curcio, F. R., & Bright, G. W.', year: 2001, title: 'Making sense of graphs', source: 'Journal for Research in Mathematics Education, 32(2), 124-158' },
      { author: 'Shah, P. & Hoeffner, J.', year: 2002, title: 'Review of graph comprehension research', source: 'Educational Psychology Review, 14(1), 47-69' }
    ]
  },
  {
    id: 'ql-005',
    title: 'Bias in Sampling Simulation',
    stream: 'QL',
    mode: 'Unplugged',
    skills: ['sampling', 'bias-awareness', 'statistics', 'critical-thinking'],
    durationMin: 45,
    groupSize: '4-6',
    difficulty: 'Intermediate',
    objective: 'Understand sampling bias by conducting surveys with different sampling methods and comparing results.',
    heroGraphic: 'sampling-bias',
    materials: [
      'Survey question cards',
      'Sampling method instruction cards',
      'Population representation (colored tokens or class roster)',
      'Results recording sheets',
      'Comparison analysis templates'
    ],
    setup: [
      'Define a "population" with known characteristics',
      'Create different sampling method cards: random, convenience, stratified, voluntary',
      'Prepare survey questions with expected bias',
      'Set up result comparison framework'
    ],
    procedure: [
      {
        step: 1,
        title: 'Sampling Methods Introduction',
        description: 'Explain different sampling methods and their purposes.',
        duration: 8,
        graphic: 'sampling-methods'
      },
      {
        step: 2,
        title: 'Convenience Sampling',
        description: 'Teams conduct a survey using convenience sampling. Record results.',
        duration: 10,
        graphic: 'convenience-sampling'
      },
      {
        step: 3,
        title: 'Random Sampling',
        description: 'Conduct the same survey using random sampling. Compare to convenience results.',
        duration: 10,
        graphic: 'random-sampling'
      },
      {
        step: 4,
        title: 'Bias Analysis',
        description: 'Compare results from different methods. Identify how sampling affected results.',
        duration: 10,
        graphic: 'bias-analysis'
      },
      {
        step: 5,
        title: 'Real-World Examples',
        description: 'Discuss famous examples of sampling bias (1936 election, online polls).',
        duration: 7,
        graphic: 'real-examples'
      }
    ],
    deliverable: 'Comparison table showing results from different sampling methods with bias analysis.',
    replicabilityCheck: {
      question: 'Do different sampling methods produce different conclusions from the same population?',
      successCriteria: 'Clear documentation of how bias affected each methods results',
      failureAnalysis: 'Identify which biases were introduced by each method'
    },
    debriefQuestions: [
      'Which sampling method was most representative? Why?',
      'How can you identify biased sampling in published research?',
      'Why do online polls tend to be unreliable?',
      'What questions should you ask about any survey you read?'
    ],
    learningOutcomes: [
      'Understand different sampling methods',
      'Recognize potential sources of sampling bias',
      'Critically evaluate survey-based claims',
      'Apply sampling concepts to research design'
    ],
    studentGuide: {
      whatYouLearn: 'Why HOW you collect data matters as much as what you collect.',
      whatToBring: 'Willingness to participate in surveys',
      tips: [
        'Convenience samples reflect who is easy to reach, not the whole population',
        'Sample size matters, but sample quality matters more',
        'Voluntary surveys attract people with strong opinions',
        'Always ask: Who was surveyed? How were they chosen?'
      ],
      reflectionPrompts: [
        'How did your convenience sample differ from random?',
        'Think of a survey you have seen - how was sampling likely done?',
        'How would you design an unbiased survey about student opinions?'
      ],
      extensionChallenge: 'Design a stratified sampling plan for surveying your entire university that accounts for faculty, year of study, and residential status — justify each stratification variable.'
    },
    lecturerGuide: {
      sessionGoal: 'Students experience how sampling method affects results through direct comparison.',
      roomSetup: 'Space for moving around, defined areas for different sampling activities.',
      facilitationScript: [
        { time: '0-8 min', action: 'Introduce sampling methods with clear definitions' },
        { time: '8-18 min', action: 'Convenience sampling exercise' },
        { time: '18-28 min', action: 'Random sampling with same questions' },
        { time: '28-38 min', action: 'Bias analysis comparison' },
        { time: '38-45 min', action: 'Real-world examples and discussion' }
      ],
      commonMisconceptions: [
        'Larger samples eliminate bias',
        'Random = haphazard',
        'Online surveys are fine because many people respond'
      ],
      interventions: [
        'Ask: "If your friend only surveyed people in the library, who is missing?"',
        'Challenge: "Could a biased sample of 10,000 be worse than random sample of 100?"'
      ],
      formativeChecks: [
        'Can students identify the bias in their own convenience sample?',
        'Do students understand what makes sampling truly random?'
      ],
      rubricSnapshot: {
        excellent: 'Thorough comparison with sophisticated bias analysis',
        good: 'Good comparison, identifies main biases',
        developing: 'Basic comparison, limited bias understanding',
        beginning: 'Cannot distinguish between sampling methods'
      },
      postClassReflection: 'Collect examples of bias for future sessions.'
    },
    variations: [
      {
        name: 'Campus Survey',
        description: 'Conduct actual surveys across campus using different methods.'
      },
      {
        name: 'Historical Analysis',
        description: 'Focus on famous polling failures.'
      },
      {
        name: 'Extension',
        description: 'Design and implement a properly stratified survey.'
      }
    ],
    references: [
      { author: 'Kahneman, D.', year: 2011, title: 'Thinking, Fast and Slow', source: 'Farrar, Straus and Giroux' },
      { author: 'Utts, J.', year: 2015, title: 'Seeing Through Statistics (4th ed.)', source: 'Cengage Learning' },
      { author: 'Watson, J. M.', year: 2006, title: 'Statistical Literacy at School: Growth and Goals', source: 'Lawrence Erlbaum Associates' }
    ]
  }
];

// Stream metadata
export const streams = {
  CL: {
    id: 'CL',
    name: 'Computer Literacy',
    description: 'Foundational digital skills including document processing, spreadsheets, and computational thinking.',
    color: 'cl',
    icon: 'Monitor'
  },
  AL: {
    id: 'AL',
    name: 'Academic Literacy',
    description: 'Critical reading, academic writing, argumentation, and source evaluation skills.',
    color: 'al',
    icon: 'BookOpen'
  },
  QL: {
    id: 'QL',
    name: 'Quantitative Literacy',
    description: 'Number sense, data interpretation, statistical reasoning, and mathematical problem-solving.',
    color: 'ql',
    icon: 'Calculator'
  }
};

// Mode metadata
export const modes = {
  Unplugged: {
    id: 'Unplugged',
    name: 'Unplugged',
    description: 'Hands-on, physical, collaborative learning activities — the core unplugged approach.',
    icon: 'Unplug'
  },
  Digital: {
    id: 'Digital',
    name: 'Digital',
    description: 'Activities using computers and software applications.',
    icon: 'Laptop'
  },
  Hybrid: {
    id: 'Hybrid',
    name: 'Hybrid',
    description: 'Combination of hands-on and digital components.',
    icon: 'Blend'
  }
};

// Skills metadata for filtering
export const skillCategories = [
  { id: 'methodology', name: 'Methodology', icon: 'FileText' },
  { id: 'collaboration', name: 'Collaboration', icon: 'Users' },
  { id: 'critical-thinking', name: 'Critical Thinking', icon: 'Brain' },
  { id: 'algorithms', name: 'Algorithms', icon: 'GitBranch' },
  { id: 'communication', name: 'Communication', icon: 'MessageCircle' },
  { id: 'data-interpretation', name: 'Data Interpretation', icon: 'BarChart' },
  { id: 'problem-solving', name: 'Problem Solving', icon: 'Lightbulb' },
  { id: 'writing', name: 'Writing', icon: 'Pen' }
];

// CL Weekly Schedule (Semester 1 only — CL activities live here)
export const weekSchedule = [
  { week: 1,  semester: 1, topic: 'Orientation, OS Basics, File Management',     ai: 'Intro to AI, safe boundaries' },
  { week: 2,  semester: 1, topic: 'Hardware, Software, Cybersecurity',            ai: 'AI to detect scams; avoid sharing personal data' },
  { week: 3,  semester: 1, topic: 'Word Basics',                                  ai: 'AI for grammar checking; ethical paraphrasing' },
  { week: 4,  semester: 1, topic: 'Word Advanced Tools',                           ai: 'Using AI to explain Word features' },
  { week: 5,  semester: 1, topic: 'Referencing & Academic Integrity',              ai: 'AI ethics; AI-generated citations danger' },
  { week: 6,  semester: 1, topic: 'Excel Basics',                                 ai: 'AI explaining formulas; detecting incorrect AI formulas' },
  { week: 7,  semester: 1, topic: 'Data Cleaning',                                ai: 'AI describing cleaning steps; avoid AI-fabricated data' },
  { week: 8,  semester: 1, topic: 'Charts & Visualisation',                       ai: 'AI critique of chart choices' },
  { week: 9,  semester: 1, topic: 'Logic Functions',                              ai: 'AI debugging formulas' },
  { week: 10, semester: 1, topic: 'Word + Excel Integration',                     ai: 'AI clarity review' },
  { week: 11, semester: 1, topic: 'Digital Citizenship',                          ai: 'AI misinformation identification' },
  { week: 12, semester: 1, topic: 'Review & Consolidation',                       ai: 'AI as revision assistant' },
  { week: 13, semester: 1, topic: 'Midterm Assessment',                           ai: 'AI usage transparency' },
];

// Duration options for filtering
export const durationOptions = [
  { id: '30', label: 'Under 30 min', max: 30 },
  { id: '45', label: '30-45 min', min: 30, max: 45 },
  { id: '60', label: '45-60 min', min: 45, max: 60 },
  { id: '60+', label: 'Over 60 min', min: 60 }
];

// Group size options
export const groupSizeOptions = [
  { id: 'individual', label: 'Individual (1-2)', pattern: /^1|^2|1-2/ },
  { id: 'small', label: 'Small Group (3-5)', pattern: /3-4|3-5|4-5/ },
  { id: 'medium', label: 'Medium Group (6-10)', pattern: /6|7|8|9|10|5-6|6-8|6-10/ },
  { id: 'large', label: 'Large Group (10+)', pattern: /10-|15|16|20/ }
];

export default activities;
