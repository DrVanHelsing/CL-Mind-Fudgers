// Complete Activities Data for CL Unplugged
// All activities include detailed student and lecturer guides

export const activities = [
  // ============================================
  // COMPUTER LITERACY (CL) - UNPLUGGED ACTIVITIES
  // ============================================
  {
    id: 'cl-001',
    title: 'Count the Triangles - Methodology Challenge',
    stream: 'CL',
    mode: 'Unplugged',
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
  // ============================================
  // ACADEMIC LITERACY (AL) - UNPLUGGED ACTIVITIES
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
  // QUANTITATIVE LITERACY (QL) - UNPLUGGED ACTIVITIES
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
    description: 'Activities without computers - hands-on, physical, collaborative learning.',
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
    description: 'Combination of unplugged and digital components.',
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
