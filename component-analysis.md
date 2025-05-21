# UI Component Analysis for Elemental Golems Web Application

## Overview
Based on the UI sketches provided, this document outlines the component structure, design patterns, and visual elements that will be implemented in the web application. The application features a dark arcane theme with mystical aesthetics across all nine pages.

## Common Design Elements

### Color Palette
- Primary background: Dark/black (#0a0a0a or similar)
- Primary text: Antique gold/bronze (#b3a67d or similar)
- Accent colors:
  - Fire/Lava: Red/orange glow (#ff4500)
  - Air/Storm: Blue glow (#4287f5)
  - Ice: Light blue glow (#7df9ff)
  - Earth/Clay: Brown/green glow (#8b4513)
  - Aether: Purple glow (#9370db)
- UI elements: Dark with subtle gold borders
- Interactive elements: Glowing effects on hover/active states

### Typography
- Primary font: Serif font with ancient/mystical appearance
- Headers: Larger, more ornate versions of the primary font
- Body text: Slightly smaller, still maintaining the arcane aesthetic
- Input fields: Styled with subtle gold underlines

### Borders & Containers
- Ornate corner decorations on containers
- Subtle gold/bronze borders
- Dark, semi-transparent backgrounds for content areas
- Glowing effects for active/hover states

## Page-Specific Components

### 1. Avatar/Profile Page
- Central circular portrait container
- Username/title display ("MAGE")
- Mystical symbols surrounding the portrait (psi, triangles)
- Status indicators (ESSENCE, ELEMENT, STATUS)
- Message input field with ornate border
- Symbolic icons representing different attributes

### 2. Golem Chat Pages (Fire, Air, Ice, Earth)
- 3D golem head with element-specific styling and glowing eyes
- Chat message containers (left-aligned for golem, right-aligned for user)
- Message input field with ornate border
- File upload button (document icon)
- Voice recording button (microphone icon with glow effect)
- Special action button (pentagram icon)
- Element-specific visual accents matching each golem's nature

### 3. Homunculus (Aether) Page
- Similar to golem pages but with aether-themed visuals
- Purple/violet color accents
- Potentially more complex 3D model

### 4. Altar (Navigation Hub)
- Central pentagram with glowing red lines
- Rotating 3D red dodecahedron at the top center
- Navigation buttons ("АЛХИРЬ" and "ГОЛЕМ")
- Colored triangular symbols at each point of the pentagram representing elements:
  - Blue (Water/Ice)
  - Green (Earth)
  - Yellow (Air)
  - Red/Orange (Fire)
  - Purple (Aether/Center)
- Wheel symbol connecting to the dodecahedron

### 5. Settings Page
- Section headers (GENERAL, SOUND, SECURITY)
- Toggle switch for notifications
- Slider control for sound with diamond handle
- Security section with lock icon
- Change password option
- Settings gear icon in bottom right
- Subtle brain texture in background

### 6. Registration Page
- Input fields for Email, Password, Confirm Password
- Field labels with subtle glow
- Register button with ornate border
- Login link for existing users
- Consistent dark theme with gold text

## Navigation Structure
- Fixed top navigation with "Altar" and "Golem" sections
- 3D rotating dodecahedron between navigation elements
- Pentagram-based navigation on Altar page for accessing different golems
- Consistent back navigation options

## Interactive Elements
- Buttons with hover glow effects
- Input fields with subtle animation on focus
- 3D elements with rotation/movement
- Chat bubbles with appropriate styling for user vs golem messages
- File upload and voice recording controls

## Responsive Considerations
- Maintain dark theme and mystical aesthetics across all device sizes
- Adjust layout for smaller screens while preserving visual identity
- Ensure 3D elements scale appropriately
- Maintain readability of gold text on dark backgrounds at all sizes

## Animation & Effects
- Subtle pulsing glow on interactive elements
- Rotation of 3D dodecahedron
- Potential particle effects for elemental themes
- Transition effects between pages
- Subtle background texture movement

This component analysis will guide the implementation of the React application, ensuring visual consistency with the provided UI sketches while maintaining the immersive arcane aesthetic throughout the user experience.
