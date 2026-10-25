# Thunder of Zosh - High Converting Landing Page

A complete, high-converting, and Meta Ads-compliant e-commerce landing page built specifically for **Thunder of Zosh** personal wellness & deep relaxation devices.

---

## 🚀 How to Host Free on GitHub Pages (In Under 2 Minutes)

1. **Unzip the downloaded file** (`thunder_of_zosh_landing.zip`).
2. Go to [GitHub.com](https://github.com) and click **New Repository**.
3. Name your repository (e.g., `thunder-of-zosh` or `toz-wellness`). Set it to **Public**.
4. Upload all files from this folder (`index.html`, `style.css`, `script.js`, `README.md`) directly into the repository.
5. In GitHub, go to **Settings** > **Pages** (on the left menu).
6. Under **Branch**, select `main` (or `master`) and folder as `/ (root)`. Click **Save**.
7. In ~30 seconds, your website will be **LIVE** at:  
   `https://<your-username>.github.io/<repo-name>/`

---

## 🎨 How to Customize Images & Details

- **Images:** Open `index.html`. Search for `<img id="mainProductImg"` and thumbnail images inside `<div class="gallery-thumbs">`. Replace the image URLs with your direct photo links or product photoshoot images (you can also place image files like `product1.jpg` in the same folder and write `src="product1.jpg"`).
- **Price:** Edit the prices in `index.html` (inside `.package-options` and `.hero-cta-group`).
- **Brand Info:** All branding is pre-set to **Thunder of Zosh**.

---

## 📦 Receiving Customer Orders

1. **Default Local Storage:** Every order placed is stored in browser memory (`toz_orders`).
2. **Google Sheets / WhatsApp Auto-Capture:** In `script.js`, find `// YOUR_WEBHOOK_URL_HERE`. You can link a free Google Apps Script or Zapier webhook to directly send customer name, phone, and delivery address into a Google Sheet in real-time!
