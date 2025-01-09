# Wedding RSVP Application

A beautiful and responsive wedding RSVP application built with modern web technologies. This application allows wedding guests to confirm their attendance and provide necessary details for the event.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-first approach
- 📝 RSVP form with email validation
- 👥 Support for additional guests
- 🏨 Accommodation management
- 🍽️ Dietary requirements handling
- 📍 Event details and location information
- 👗 Dress code information
- ❓ FAQ section
- 📞 Contact information

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase
- **Icons**: Lucide React
- **Animations**: Custom Tailwind animations

## Project Structure

```
src/
├── components/
│   ├── sections/           # Page sections components
│   ├── rsvp/              # RSVP form components
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
├── integrations/          # External integrations (Supabase)
└── pages/                 # Page components
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment

The application can be deployed using various platforms:

1. **Lovable Platform**: Click on Share -> Publish in the Lovable interface
2. **Custom Domain**: Follow our [Custom Domain Guide](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact us at support@lovable.dev or join our [Discord community](https://discord.gg/lovable).