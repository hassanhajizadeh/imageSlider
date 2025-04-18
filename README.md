# 🌄 Image Slider App

A responsive, modern image slider built using [Swiper.js](https://swiperjs.com/) and custom HTML/CSS/JavaScript. Each slide features an inspiring quote, a unique background, and smooth navigation controls.

## [Click To See Live Demo](ttps://hassanhajizadeh-image-slider.netlify.app)

## 🚀 Features

-   ✅ Beautiful full-screen slide backgrounds
-   ✅ Smooth transitions and swipe support
-   ✅ Pagination and navigation buttons
-   ✅ Fully responsive for all screen sizes
-   ✅ Easy to customize with your own images and quotes

## 📸 Preview

![Demo Preview](demo.gif)

## 🛠️ Technologies Used

-   HTML5
-   CSS3 (with Google Fonts)
-   JavaScript (ES6)
-   [Swiper.js](https://swiperjs.com/)

## 📁 Folder Structure

```
project-root/
│
├── index.html
├── style.css
├── script.js
├── images/
│   ├── img1.jpg
│   ├── img2.jpg
│   └── ...
└── README.md
```

## ⚙️ How to Use

1. **Clone this repo**:

```bash
git clone https://github.com/hassanhajizadeh/imageSlider.git
cd imageSlider
```

2. **Open in browser**:

You can simply open `index.html` in a local server (like Live Server extension in VSCode).

3. **Customize**:

-   Add your own images inside the `images/` folder.
-   Edit `index.html` to update quotes or author names.
-   Adjust background images via `script.js`.

## 📝 Example Quote Entry

```html
<div class="swiper-slide" id="Slide1">
	<div class="content">
		<h2>“Every moment is a fresh beginning.”</h2>
		<p>- T.S. Eliot</p>
	</div>
</div>
```

```js
// Automatically set background images based on slide IDs
const slides = document.querySelectorAll(".swiper-slide");
slides.forEach((slide) => {
	slide.style.background = `url(images/img${
		slide.id.split("-")[1]
	}.jpg) center center / cover no-repeat`;
});
```

## 💡 Tip

Want to add more slides? Just copy the structure inside `.swiper-wrapper` and give each slide a unique ID like `Slide5`, `Slide6`, etc. Make sure the image file exists in the `images` folder.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
