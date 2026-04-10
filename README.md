# 🌿 Interactive Garden: Where AI Meets Touch

**What if the photorealistic beauty of AI-generated video wasn't just a passive view, but an interactive space you could touch?**

This project pushes the boundaries of the web, transforming static AI imagery into a living, breathing, and responsive environment. By blending high-fidelity generative video with lightweight CSS masking, we’ve created a seamless bridge between hyperrealism and user interaction.

![Garden Preview](assets/Preview.png)

## ✨ The Vision


Instead of traditional 3D modeling, which is time-consuming and often falls short of "perfect" realism, this project uses a purely generative pipeline. By using **Google Veo** and **Nano Banana**, we generated a hyperrealistic bloom-and-fade cycle that responds to user input through precise CSS masking.

## 🛠️ The Tech Stack

- **Visual Generation**: **Nano Banana** for the initial hyperrealistic static scene.
- **Animation**: **Google Veo** for the photorealistic flower bloom-and-fade sequence.
- **Interactivity**: **Claude Code** for the custom interaction logic and CSS masking system.
- **Core Web**: Vanilla JS and CSS for a zero-dependency, high-performance experience.

## 🕹️ How it Works

1. **The Generation**: We generate two states—a static "idle" garden and a full bloom animation—using state-of-the-art generative AI.
2. **The Interaction**: The garden is divided into three triangular zones using CSS `clip-path`. 
3. **The Masking**: When you hover over a zone, the corresponding segment of the **17MB optimized AI video** is revealed and played. Because the first and last frames are perfectly color-matched to the static base image, the transition is invisible to the eye.

## 🚀 Getting Started

### Local Development

This project is a static site. To run it locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/interactive-garden.git
   ```
2. Navigate to the directory:
   ```bash
   cd interactive-garden
   ```
3. Serving the files:
   - If you have Node.js: `npx serve .`
   - If you have Python: `python -m http.server`
   - Or simply open `index.html` in a modern browser.

## 📦 Project Structure

```text
├── assets/             # Optimized AI visuals (17MB interaction loop)
├── index.html          # Core structure and SEO
├── styles.css          # Layout and CSS masks
├── script.js           # Interaction logic and preloading
├── package.json        # Project metadata
└── LICENSE             # MIT License
```

---

*An experimental exploration of AI photorealism by Vivian Chi.*
