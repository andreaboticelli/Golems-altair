# Elemental Golems Web Application

A mystical web application for interacting with 4 elemental golems and 1 homunculus representing the aether. This application features a dark arcane theme with immersive UI, 3D elements, and a chat interface connected to n8n for automation.

## Features

- **Dark Arcane Theme**: Immersive mystical aesthetics with element-specific visual styling
- **3D Elements**: Rotating dodecahedron navigation and 3D golem heads using Three.js
- **Authentication**: User registration and login via Supabase
- **Chat Interface**: Markdown support, file uploads, and audio recording
- **Automation**: Integration with n8n for routing requests/responses
- **Responsive Design**: Optimized for both desktop and mobile devices

## Pages

1. **Fire Golem (Lava)**: Communicate with the embodiment of flame
2. **Air Golem (Storm)**: Interact with the master of winds
3. **Ice Golem**: Connect with the bringer of frost
4. **Earth Golem (Clay)**: Consult the guardian of mountains
5. **Homunculus (Aether)**: Commune with the quintessence of all elements
6. **Altar**: Main navigation hub with pentagram interface
7. **Settings**: Configure application preferences
8. **Registration**: Create a new account
9. **Profile**: View and manage your mage profile

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with custom arcane theme
- **3D Rendering**: Three.js with React Three Fiber
- **Authentication**: Supabase Auth
- **Database**: Supabase for user profiles and logs
- **Automation**: n8n for orchestrating requests/responses
- **Markdown**: react-markdown for rich text rendering

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Supabase account (for authentication)
- n8n instance (for automation)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/elemental-golems.git
cd elemental-golems
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory with the following variables:
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
REACT_APP_N8N_WEBHOOK_BASE_URL=your_n8n_webhook_base_url
```

4. Start the development server:
```bash
npm start
```

### Building for Production

```bash
npm run build
```

This will create a `build` folder with optimized production files.

## Deployment

This application is designed for easy deployment on platforms like Vercel or Netlify:

### Vercel Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify Deployment

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

## Configuration

### Supabase Setup

1. Create a new Supabase project
2. Enable authentication with email/password
3. Create tables for user profiles and chat logs
4. Update the environment variables with your Supabase credentials

### n8n Setup

1. Set up an n8n instance
2. Create workflows for each golem type
3. Configure webhooks for receiving messages
4. Set up response handling to return messages to the frontend
5. Update the webhook URLs in the n8n service configuration

## Extending the Application

### Adding New Golems

1. Create a new golem page component
2. Add the corresponding 3D model
3. Configure element-specific styling
4. Add the route in App.tsx
5. Update the Altar page to include the new golem

### Customizing the Theme

The arcane theme can be customized in the `tailwind.config.js` file and `index.css`.

## Values

- **Immersion**: Each interaction feels like a ritual
- **Accessibility**: UI works on all modern devices
- **Simplicity**: Easy deployment and configuration
- **Extensibility**: New golems or essences can be added

## License

This project is licensed under the MIT License - see the LICENSE file for details.
