# Notes App

A responsive Evernote-style Notes application built with React, Vite, and Tailwind CSS.

## Features

- ✨ **Organize with Categories**: All Notes, Work, Personal, Ideas
- 📝 **Create & Edit Notes**: Modal-based form for easy note management
- 🗑️ **Delete with Confirmation**: Safe deletion with confirmation dialog
- 🏷️ **Handle Duplicates**: Automatic numbering for notes with the same title
- 💾 **Persistent Storage**: All changes saved to localStorage
- ⏰ **Timestamps**: Readable relative timestamps (e.g., "5m ago")
- 📱 **Fully Responsive**: Works seamlessly on desktop and mobile
- 🎨 **Modern UI**: Clean, intuitive interface

## Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **date-fns**: Date formatting (via custom utilities)

## Project Structure

\`\`\`
notes-app/
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx           # Category navigation
│   │   ├── NotesGrid.tsx         # Notes display grid
│   │   ├── NoteCard.tsx          # Individual note card
│   │   ├── NoteModal.tsx         # Create/edit modal
│   │   └── DeleteConfirmation.tsx # Delete confirmation dialog
│   ├── hooks/
│   │   └── useNotes.ts           # CRUD operations & state management
│   ├── utils/
│   │   └── date.ts               # Date formatting utilities
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # React DOM entry point
│   └── index.css                 # Global styles
├── public/
│   └── notes.json                # Seed data
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
└── README.md                     # Documentation
\`\`\`

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
\`\`\`

### Development

\`\`\`bash
# Start development server
npm run dev

# Or use Vercel dev
vercel dev
\`\`\`

The app will be available at `http://localhost:5173` (Vite default) or as configured.

### Build

\`\`\`bash
# Create production build
npm run build

# Preview production build
npm run preview
\`\`\`

## Usage

### Creating a Note

1. Click the **"+ New Note"** button
2. Fill in title, description, and category
3. Click **"Create Note"**

### Editing a Note

1. Click the **"Edit"** button on any note card
2. Modify the details
3. Click **"Update Note"**

### Deleting a Note

1. Click the **delete icon** (trash) on a note card
2. Confirm deletion in the dialog

### Filtering by Category

- Click any category in the sidebar to filter notes
- **All Notes** shows all notes across categories

### Duplicate Handling

- Notes with the same title in the same category are numbered (e.g., "#2", "#3")
- The numbering helps identify multiple notes with identical titles

## Data Storage

- Initial data loads from `public/notes.json`
- All changes are automatically saved to browser's localStorage
- Data persists across browser sessions
- localStorage key: `notes_app_data`

## Deployment to Vercel

### Option 1: Using Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy with Vercel dev support
vercel --prod
\`\`\`

### Option 2: Connect GitHub Repository

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the GitHub repository
4. Configure build settings (Vite will be auto-detected)
5. Deploy

### Vercel Configuration

The app works out of the box with Vercel. No additional configuration needed.

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Development Command**: `npm run dev`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Adding More Categories

Edit `src/types/index.ts` and update the `CategoryFilter` type:

\`\`\`typescript
export type CategoryFilter = 'All Notes' | 'Work' | 'Personal' | 'Ideas' | 'Your New Category';
\`\`\`

### Styling

Modify Tailwind classes in components or extend `tailwind.config.js`.

### Timestamps

Customize relative date formatting in `src/utils/date.ts`.

## Troubleshooting

### Data Not Persisting

- Check browser localStorage is enabled
- Verify console for errors
- Clear localStorage: `localStorage.clear()`

### Build Errors

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is 16+

## Future Enhancements

- [ ] Search functionality
- [ ] Note tags and advanced filtering
- [ ] Rich text editor
- [ ] Sync across devices
- [ ] Export to PDF/Markdown
- [ ] Dark mode toggle
- [ ] Collaborative editing
- [ ] Note sharing

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue in the repository.
