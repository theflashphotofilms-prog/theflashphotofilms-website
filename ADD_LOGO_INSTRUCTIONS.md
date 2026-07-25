# Adding Your Logo to The Flash Photofilms Website

## How to Add Your Logo File

To integrate your logo with the website, please follow these steps:

### Step 1: Prepare Your Logo
1. Create your logo in PNG, JPG, or SVG format
2. Recommended dimensions: at least 300x100 pixels for high quality
3. Optimize the file size to under 100KB for faster loading
4. Ensure the logo has transparent background (PNG) or appropriate background

### Step 2: Add the Logo File
1. Replace the existing `/public/logo.png` file with your logo
2. Make sure the file is named `logo.png` and placed in the `/public` directory
3. The file should be accessible at `/public/logo.png`

### Step 3: Verify the Implementation
1. Run `npm run build` to verify the build process
2. Check that the logo appears correctly in both Navbar and Footer
3. Test responsiveness on different screen sizes
4. Verify that clicking the logo redirects to the homepage

### Important Notes
- The logo will automatically be used in both Navbar and Footer
- No additional configuration is needed once the logo file is in place
- The implementation uses Next.js Image component for optimal performance
- The logo will scale appropriately for desktop (60px height) and mobile (45px height)