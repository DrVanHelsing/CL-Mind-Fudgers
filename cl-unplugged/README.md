# CL Unplugged - Computer Literacy Activity System

A modern, responsive React application for first-year computer literacy courses featuring "unplugged" learning activities across Computer Literacy (CL), Academic Literacy (AL), and Quantitative Literacy (QL) streams.

## Features

- **15+ Hands-On Activities**: Complete library of unplugged activities with detailed guides
- **Three Literacy Streams**: CL, AL, and QL activities organized by domain
- **Comprehensive Guides**: Student guides with tips and reflection prompts, lecturer guides with facilitation scripts and rubrics
- **Responsive Design**: Optimized for both mobile and desktop viewing
- **Modern UI**: Glassmorphism design with smooth animations
- **Filtering & Search**: Find activities by stream, mode, duration, or keywords

## Tech Stack

- **React** (JavaScript) - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and transitions
- **Lucide React** - Icon library
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project folder
cd cl-unplugged

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## Project Structure

```
cl-unplugged/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Navigation and layout wrapper
│   │   ├── ActivityCard.jsx    # Activity preview cards
│   │   ├── ActivityPopup.jsx   # Detailed activity modal with tabs
│   │   └── FilterBar.jsx       # Search and filter controls
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero and stream tiles
│   │   ├── Activities.jsx      # Activity library with filtering
│   │   ├── StudentGuides.jsx   # Student-focused guide cards
│   │   ├── LecturerGuides.jsx  # Lecturer facilitation resources
│   │   └── About.jsx           # Unplugged philosophy explanation
│   ├── data/
│   │   └── activities.js       # Complete activity database
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles and utilities
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Activity Library

### Computer Literacy (CL)

| Activity | Mode | Duration | Description |
|----------|------|----------|-------------|
| Triangle Counting Challenge | Unplugged | 30 min | Algorithm design through pattern finding |
| Human Sorting Network | Unplugged | 35 min | Physical demonstration of sorting algorithms |
| Instruction Precision Game | Unplugged | 40 min | Writing clear, unambiguous instructions |
| Algorithm Cards | Unplugged | 25 min | Sequence and decision-making practice |
| Word Formatting | Hybrid | 45 min | Document formatting best practices |
| Excel Data Cleaning | Hybrid | 45 min | Data cleaning concepts and techniques |

### Academic Literacy (AL)

| Activity | Mode | Duration | Description |
|----------|------|----------|-------------|
| Chart Critique Challenge | Unplugged | 35 min | Evaluating visual arguments |
| Claim-Evidence Wall | Unplugged | 40 min | Building and analyzing arguments |
| Paraphrase Relay | Unplugged | 30 min | Restating information accurately |
| Argument Reconstruction | Unplugged | 45 min | Mapping argument structures |
| Source Credibility Sort | Unplugged | 35 min | Evaluating source reliability |

### Quantitative Literacy (QL)

| Activity | Mode | Duration | Description |
|----------|------|----------|-------------|
| Human Number Line | Unplugged | 25 min | Number sense and estimation |
| Ratio Recipe Lab | Unplugged | 40 min | Proportional reasoning with recipes |
| Probability Tokens | Unplugged | 35 min | Intuitive probability concepts |
| Graph Match Game | Unplugged | 30 min | Connecting data and visualizations |
| Sampling Bias Simulation | Unplugged | 40 min | Understanding sampling and bias |

## Activity Guide Structure

Each activity includes:

### Overview
- Objective, materials, setup instructions
- Learning outcomes and skills developed
- Duration and group size recommendations

### Procedure
- Step-by-step facilitation timeline
- Time allocations for each phase
- Expected student actions

### Student Guide
- Preparation tips
- Reflection prompts
- Extension challenges

### Lecturer Guide
- Facilitation script with timing
- Common misconceptions to address
- Intervention strategies
- Assessment rubric

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #2F6FED | Main actions, CL stream |
| Accent | #14B8A6 | Secondary actions, QL stream |
| AL | #8B5CF6 | Academic Literacy stream |
| CL | #3B82F6 | Computer Literacy stream |
| QL | #14B8A6 | Quantitative Literacy stream |

### Activity Modes

- **Unplugged**: No digital devices required
- **Digital**: Computer-based activities
- **Hybrid**: Combination of both approaches

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-activity`)
3. Commit changes (`git commit -am 'Add new activity'`)
4. Push to branch (`git push origin feature/new-activity`)
5. Open a Pull Request

## License

MIT License - See LICENSE file for details.

## Acknowledgments

Inspired by the CS Unplugged project by Tim Bell and colleagues at the University of Canterbury.
