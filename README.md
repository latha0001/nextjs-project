# Next.js Project

A modern web application built with Next.js, leveraging TypeScript, Tailwind CSS, and Capacitor for cross-platform capabilities.
![Screenshot 2025-04-28 205912](https://github.com/user-attachments/assets/7ef1d9ae-a45c-4969-9e85-c74f117d095a)
![Screenshot 2025-04-28 205925](https://github.com/user-attachments/assets/48ea02b4-c09c-4cd2-b452-d283c8051796)
![Screenshot 2025-04-28 205932](https://github.com/user-attachments/assets/1ea409a2-3ca0-405d-8fbf-7a58b1dfc000)

## 🚀 Features

- **Next.js Framework**: Utilizes the latest features of Next.js for server-side rendering and static site generation.
- **TypeScript Support**: Ensures type safety and improved developer experience.
- **Tailwind CSS**: Provides utility-first CSS for rapid UI development.
- **Capacitor Integration**: Enables deployment as a native mobile application.
- **Modular Architecture**: Organized folder structure for scalability and maintainability.

## 🛠️ Technologies Used

- [Next.js]
- [TypeScript]
- [Tailwind CSS]
- [Capacitor]
- [pnpm] for package management

## 📁 Project Structure

```
├── app/                 # Application pages and routing
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and libraries
├── public/              # Static assets
├── styles/              # Global and component-specific styles
├── capacitor.config.ts  # Capacitor configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Project metadata and scripts
├── pnpm-lock.yaml       # pnpm lockfile
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
```

## 📦 Getting Started
### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/latha0001/nextjs-project.git
   cd nextjs-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Running on Mobile Devices

To deploy the application as a native mobile app using Capacitor:

1. **Build the application:**

   ```bash
   pnpm build
   ```

2. **Add the desired platform (e.g., Android):**

   ```bash
   npx cap add android
   ```

3. **Sync the project:**

   ```bash
   npx cap sync
   ```

4. **Open the native IDE:**

   ```bash
   npx cap open android
   ```

   From here, you can run the app on an emulator or physical device.

## 🚀 Deployment

For deploying the application to production:

1. **Build the application:**

   ```bash
   npm build
   ```

2. **Start the production server:**

   ```bash
   npm start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
