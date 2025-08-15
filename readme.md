# Literary Aviary

A beautiful, interactive web application that displays birds alongside literary quotes, creating a unique intersection between nature and literature.

## Features

- **Interactive Bird Gallery**: Circle-packed layout with birds that can be clicked to reveal quotes
- **Literary Quotes**: Each bird is associated with a literary quote from classic and contemporary works
- **Audio Experience**: Bird call sounds (synthetic) play when birds are selected
- **Multi-Filter System**: Filter by mood, author, source, species, and region
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Admin Interface**: Content management system for adding/editing birds and quotes
- **Beautiful Animations**: Smooth transitions and hover effects throughout

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Custom UI Components** with shadcn/ui patterns

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mariamsaymour/Literary-Aviary-test.git
cd Literary-Aviary-test
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
literary-aviary/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── Gallery.tsx      # Main gallery component
│   ├── BirdCard.tsx     # Individual bird cards
│   ├── AdminInterface.tsx # Admin panel
│   └── ...
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── hooks/               # Custom React hooks
├── data/                # Static data files
├── constants/           # App constants
├── styles/              # Global styles
└── imports/             # Generated SVG and asset imports
```

## Key Components

- **Gallery**: Main display with circle-packed bird layout
- **BirdCard**: Individual bird representation with flip animation
- **AdminInterface**: Content management for birds and quotes
- **FilterHeader**: Multi-dimensional filtering system
- **Mobile Components**: Responsive mobile-first design

## Customization

### Adding New Birds

1. Use the admin interface (click Settings/Login)
2. Add bird data including species, image, quote, author, etc.
3. The system supports both SVG and image formats for birds

### Styling

The app uses a custom design system with:
- Color-coded moods (love, joy, surprise, calm, sadness, fear, anger)
- Typography: Cormorant and Crimson Text fonts
- Consistent spacing and border radius
- Responsive breakpoints

### Audio

Currently uses Web Audio API to generate synthetic bird calls. Real audio files can be added to the `public/audio/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Generated with Figma Make for initial design-to-code conversion
- Uses literary quotes from public domain and fair use sources
- Bird illustrations from various sources (see Attributions.md)

## Support

For support, please open an issue on GitHub or contact the maintainers.
