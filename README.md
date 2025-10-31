# 🧠 Phishing Detection Extension

A **browser extension** that detects phishing websites using **Machine Learning** by analyzing multiple URL parameters and domain details.  
This open-source project aims to enhance **user security** by providing **real-time warnings** for suspicious links.

---

## 🚀 Features

- 🧩 **Machine Learning-Based Detection** – Analyzes 30+ URL parameters to detect phishing websites.  
- ⚡ **Real-Time Alerts** – Notifies users instantly when a suspicious website is detected.  
- 🌐 **Cross-Browser Support** – Works on **Chrome**, **Edge**, and **Firefox**.  
- 🔧 **Open Source & Extensible** – Developers can easily add new phishing indicators or improve the existing ML model.

---

## 🛠 Tech Stack

**Frontend:** HTML, CSS, JavaScript (Browser Extension APIs)  
**Backend / Model:** Python (Flask or FastAPI for ML integration)  
**Machine Learning:** Random Forest / Decision Tree models

---

## 📂 Project Structure

```yaml
Phishing-Detection-Extension:
  extension: "Browser extension files (manifest.json, popup.html, scripts)"
  model: "Machine learning model training and saved files"
  backend: "API to connect ML model with the extension"
  assets: "Icons, screenshots, and other static files"

  README.md: "Documentation"
  LICENSE: "MIT License"
  CONTRIBUTING.md: "Contribution guidelines"
```

---

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/saklainkazi/Phishing-Detection-System.git
cd Phishing-Detection-Extension
2. Load Extension in Browser
Open chrome://extensions/

Enable Developer Mode

Click Load unpacked and select the extension/ folder

3. Run Backend (Optional if using API)
bash
Copy code
cd backend
pip install -r requirements.txt
python app.py
📊 How It Works
Extracts parameters from the current URL (e.g., length, subdomains, HTTPS status, etc.)

Evaluates them using a pre-trained ML model (stored locally or served via API).

Performs additional WHOIS checks for domain authenticity.

Displays the result in real time:

🟢 Safe

🟠 Suspicious

🔴 Phishing

📸 Screenshots
(Add your extension screenshots here — e.g., popup UI, alert messages, etc.)
Example:

bash
Copy code
assets/screenshot1.png
assets/screenshot2.png
🤝 Contributing
We welcome contributions from everyone! 💖
Please check out the CONTRIBUTING.md file for detailed contribution guidelines.

📜 License
This project is licensed under the MIT License.

👨‍💻 Authors
Shaikh Kayyum Kazi Saklain
Mohammad Amis
Maryam Khan

📬 Email: saklainkazi4@gmail.com
🔗 GitHub: @saklainkazi

🌟 Support
If you like this project, please give it a ⭐ star on GitHub to show your support!

yaml
Copy code

---

### ✅ How to Add It
1. In VS Code, open your project folder.  
2. Open (or create) `README.md`.  
3. Paste the entire content above.  
4. Save, then run:
   ```bash
   git add README.md
   git commit -m "Updated professional README"
   git push
Refresh your GitHub repo — it’ll look clean and perfectly formatted ✨

