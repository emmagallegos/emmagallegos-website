# Emma Gallegos - Personal Website

A clean, professional portfolio website for journalist Emma Gallegos. This site replaces the $412/year Wix subscription with a free static site hosted on GitHub Pages.

## 💰 Cost Savings

**Old setup (Wix):** $412/year + domain fees  
**New setup:** ~$10/year (domain only)  
**Annual savings:** ~$400+ 🎉

## 🚀 How to Deploy (GitHub Pages - FREE)

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Sign up for a free account if you don't have one

### Step 2: Create a Repository
1. Click the "+" icon in the top right → "New repository"
2. Name it: `emmagallegos-website` (or any name you like)
3. Make it **Public**
4. Click "Create repository"

### Step 3: Upload Your Files
1. On your repository page, click "uploading an existing file"
2. Drag and drop these files:
   - index.html
   - reporting.html
   - about.html
   - styles.css
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to your repository Settings
2. Scroll down to "Pages" (in the left sidebar)
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 1-2 minutes, then visit: `https://YOUR-USERNAME.github.io/emmagallegos-website/`

### Step 5: Connect Your Domain (emmagallegos.com)

#### Option A: Transfer domain away from Wix/Turbify first (RECOMMENDED)
1. **Transfer your domain to Cloudflare/Porkbun (~$10/year)**
   - Cloudflare Domains: https://www.cloudflare.com/products/registrar/
   - Porkbun: https://porkbun.com
   - This will save you ~$45/year on domain costs alone!

2. **Point domain to GitHub Pages:**
   - In your domain registrar, add these DNS records:
     ```
     A Record: @ → 185.199.108.153
     A Record: @ → 185.199.109.153
     A Record: @ → 185.199.110.153
     A Record: @ → 185.199.111.153
     CNAME Record: www → YOUR-USERNAME.github.io
     ```

3. **In GitHub repository:**
   - Go to Settings → Pages
   - Under "Custom domain", enter: `emmagallegos.com`
   - Check "Enforce HTTPS"
   - Create a file named `CNAME` in your repository with just: `emmagallegos.com`

#### Option B: Keep domain at Wix/Turbify temporarily
You can keep your domain registration where it is and just point the DNS to GitHub Pages using the records above. This saves the ~$40/year hosting cost immediately while you decide whether to transfer the domain.

## 📝 How to Update Your Site

### Easy Method (GitHub Web Interface):
1. Go to your repository on GitHub
2. Click on the file you want to edit (e.g., `reporting.html`)
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down and click "Commit changes"
6. Wait 1-2 minutes for changes to go live

### Advanced Method (Local Editing):
1. Download GitHub Desktop: https://desktop.github.com
2. Clone your repository
3. Edit files in any text editor (VS Code recommended)
4. Commit and push changes through GitHub Desktop

## 🎨 Customization Tips

### Adding a New Article
Edit `reporting.html` and add a new article block:

```html
<article class="article-card">
    <div class="article-content">
        <div class="article-meta">
            <span class="article-tag">YOUR CATEGORY</span>
            <span class="article-date">2026</span>
        </div>
        <h2 class="article-title">
            <a href="YOUR-ARTICLE-URL" target="_blank" rel="noopener">
                Your Article Title Here
            </a>
        </h2>
        <p class="article-excerpt">Your article description here.</p>
    </div>
</article>
```

### Updating Your Bio
Edit `about.html` and change the text in the `<p>` tags under the "About Me" section.

### Changing Colors
Edit `styles.css` at the top where it says `:root` to change:
- `--color-accent` - The orange/red accent color
- `--color-primary` - Main text color
- `--color-bg` - Background color

## 🛠 Technical Details

**Built with:**
- Pure HTML, CSS, JavaScript (no frameworks needed)
- Responsive design (works on mobile, tablet, desktop)
- Clean, editorial design inspired by quality journalism sites
- Libre Baskerville (serif) and Work Sans (sans-serif) fonts from Google Fonts
- Optimized for performance and SEO

**No build process required!** Just edit the HTML/CSS directly.

## ⚡ Before You Cancel Wix

1. ✅ Deploy this site to GitHub Pages
2. ✅ Test it thoroughly at your github.io URL
3. ✅ Connect your domain (or keep using .github.io temporarily)
4. ✅ Make sure everything works
5. ✅ THEN cancel Wix (but keep domain registration somewhere cheap)

## 🆘 Need Help?

Common issues:
- **Site not updating?** Wait 1-2 minutes after committing changes
- **404 error?** Make sure files are in the root directory, not a subfolder
- **Domain not working?** DNS changes can take 24-48 hours to propagate
- **Images not loading?** Make sure you're using full URLs for images

## 📧 Contact

Questions about this setup? Email: emma.g.gallegos@gmail.com

---

**Remember:** You're now paying $10/year instead of $412/year! That's $400+ saved annually. 🎉
