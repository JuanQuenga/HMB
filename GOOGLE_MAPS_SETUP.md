# Google Maps API Setup Guide

## 🔑 Setting Up Your Google Maps API Key

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing for your project (required for Maps API)

### Step 2: Enable the Maps JavaScript API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Maps JavaScript API"
3. Click on it and press "Enable"

### Step 3: Create API Key

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy your new API key

### Step 4: Restrict Your API Key (Recommended)

1. Click on your newly created API key
2. Under "Application restrictions", select "HTTP referrers (web sites)"
3. Add your domain(s):
   - `localhost:3000/*` (for development)
   - `yourdomain.com/*` (for production)
4. Under "API restrictions", select "Restrict key"
5. Select "Maps JavaScript API" from the dropdown
6. Click "Save"

### Step 5: Add API Key to Your Project

Create a `.env.local` file in your project root and add:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.

### Step 6: Restart Your Development Server

```bash
npm run dev
```

## 🚨 Important Security Notes

- **Never commit your API key to version control**
- **Always restrict your API key to specific domains**
- **Monitor your API usage in Google Cloud Console**
- **Set up billing alerts to avoid unexpected charges**

## 🔧 Troubleshooting

### "API project is not authorized" Error

- Make sure you've enabled the Maps JavaScript API
- Verify your API key is correct
- Check that billing is enabled for your project
- Ensure your domain is in the allowed referrers list

### Map Not Loading

- Check browser console for errors
- Verify the API key is in your `.env.local` file
- Make sure you've restarted your development server

## 📍 Current Bakery Address

The map is configured to show:
**4PVJ+453, 500002 Tun Herman Pan Rd., Dan Dan, Saipan 96950, Northern Mariana Islands**

## 💰 Cost Information

- Google Maps JavaScript API has a generous free tier
- First $200 of usage per month is free
- After that, it's approximately $7 per 1000 map loads
- For a typical bakery website, you'll likely stay within the free tier
