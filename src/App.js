// // import React from "react";
// import { useEffect } from "react";
// import "./App.css";
// import logo from "./nandas.png"; // your center image (or put in public and use /logo.png)

// const images = [
//   "/images/img1.jpg",
//   "/images/img2.jpg",
//   "/images/img3.jpg",
//   "/images/img4.jpg",
//   "/images/img5.jpg",
//   "/images/img6.jpg",
//   "/images/img7.jpg",
// ];

// const placeholderDataUrl = `data:image/svg+xml;utf8,
//   <svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>
//     <rect width='100%' height='100%' fill='%23ddd'/>
//     <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='18'>image not found</text>
//   </svg>`.replace(/\n|\s{2,}/g, "");

// export default function App() {
//   // we duplicate the list to make a continuous loop
//   useEffect(() => {
//     const el=document.createElement("div");
//     el.style.height="10cm";
//     el.style.visibility="hidden";
//     el.style.position = "absolute";
//     document.body.appendChild(el);
//     const px = el.getBoundingClientRect().height;
//     document.body.removeChild(el);
//     document.documentElement.style.setProperty("--taskbar-height", `${px}px`);
//   }, [])

//   const all = [...images, ...images];

//   return (
//     <div className="app">
//       {/* Background sliding strip */}
//       <header
//         className="top-taskbar"
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           height: "10cm",        // visible test; will be overridden by CSS var after effect runs
//           background: "#ffffff", // white bar (change to "#f0f0f0" for grey)
//           zIndex: 2147483647,    // extremely high for testing
//           boxShadow: "0 3px 12px rgba(0,0,0,0.2)",
//         }}
//       >
//         <div style={{ padding: 12, pointerEvents: "none" }}>
//           {/* intentionally blank; pointerEvents none so it doesn't block clicks */}
//         </div>
//       </header>

//       <div className="background-slider" aria-hidden>
//         <div className="slide-track"> style={{ animationDuration: "30s" }}>
//           {all.map((src, i) => (
//             <img key={i} 
//             src={src} 
//             alt={`band-${i}`}
//             draggable={false}
//             />
//           ))}
//         </div>
//         {/* optional semi-opaque overlay so center content is readable */}
//         <div className="background-overlay" />
//       </div>

//       {/* Foreground content */}
//       <div className="content">
//         <img src={logo} alt="logo" className="center-logo" />
//         <p className="info-text">
//           Welcome to Nanda's official page. Here we showcase our events,
//           participation and community activities.
//         </p>
//       </div>

//       {/* Right side menu */}
//       <nav className="menu">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// src/App.js
import React from "react";
import "./App.css";
import logo from "./nandas.png";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
];

const placeholderDataUrl = `data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>
    <rect width='100%' height='100%' fill='%23ddd'/>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='18'>image not found</text>
  </svg>`.replace(/\n|\s{2,}/g, "");

export default function App() {
  const all = [...images, ...images];

  const handleImgError = (e) => {
    console.warn("Image load failed:", e.target.src);
    e.target.onerror = null;
    e.target.src = placeholderDataUrl; // fallback inline SVG
    e.target.style.objectFit = "cover";
  };

  return (
    <div className="app">
      <div className="background-slider" aria-hidden>
        <div className="slide-track">
          {all.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`band-${i}`}
              onError={handleImgError}
              draggable={false}
            />
          ))}
        </div>
        <div className="background-overlay" />
      </div>

      <div className="content">
        <img src={logo} alt="logo" className="center-logo" />
        <p className="info-text">
          Welcome to Nanda's official page. Here we showcase our events,
          participation and community activities.
        </p>
      </div>

      <nav className="menu">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
