/* Global Styles */
.app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

/* Hide scrollbar globally */
* {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

*::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}

/* Page transitions */
.page {
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  width: 100dvw;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateX(100%);
  transition: all 600ms cubic-bezier(0.22, 1, 0.36, 1);
  padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
}

.page.active {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
  position: relative;
}

.page.exit-left {
  transform: translateX(-100%);
  opacity: 0;
}

/* Test Button */
.test-btn {
  position: fixed;
  left: 16px;
  top: 16px;
  z-index: 20;
  background: #4caf50;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 12px;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  transition: transform 0.2s;
}

.test-btn:hover {
  transform: scale(1.05);
}

/* Hero Section */
.hero {
  padding: 10px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 10px;
  font-weight: 700;
  color: #333;
  line-height: 1.2;
}

.hero p {
  font-size: 1rem;
  color: #555;
  font-style: italic;
  margin: 0;
}

.highlight {
  background: linear-gradient(45deg, #e91e63, #ff6b9d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}

/* Teaser section */
.teaser {
  padding: 10px 20px;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

#teaserHeading {
  font-size: 1.3rem;
  background: linear-gradient(45deg, #e91e63, #9c27b0, #e91e63);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease infinite;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.teaser-hint {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  opacity: 0.8;
  margin: 0;
}

/* Surprise Button */
#surpriseBtn {
  background: #e91e63;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  margin: 20px;
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms;
  box-shadow: 0 12px 24px rgba(233, 30, 99, 0.25);
}

#surpriseBtn:hover {
  transform: translateY(-2px) scale(1.05);
}

#surpriseBtn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  filter: grayscale(10%);
}

#surpriseBtn:not(:disabled) {
  animation: pulse 2s ease-in-out infinite;
}

/* Celebrate Button (same styling as surprise button) */
.celebrate-btn {
  background: linear-gradient(135deg, #e91e63, #ff6b9d);
  color: white;
  border: none;
  padding: 14px 36px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  margin: 15px auto;
  transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 12px 30px rgba(233, 30, 99, 0.35);
  position: relative;
  overflow: hidden;
}

.celebrate-btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.celebrate-btn:hover::before {
  width: 300px;
  height: 300px;
}

.celebrate-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 16px 40px rgba(233, 30, 99, 0.45);
}

.celebrate-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  filter: grayscale(20%);
  background: linear-gradient(135deg, #999, #aaa);
}

.celebrate-btn:not(:disabled) {
  animation: pulse-celebrate 2s ease-in-out infinite;
}

@keyframes pulse-celebrate {
  0%,
  100% {
    box-shadow: 0 12px 30px rgba(233, 30, 99, 0.35);
  }
  50% {
    box-shadow: 0 16px 40px rgba(233, 30, 99, 0.5);
  }
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 12px 24px rgba(233, 30, 99, 0.25);
  }
  50% {
    box-shadow: 0 16px 32px rgba(233, 30, 99, 0.4);
  }
}

/* Back Button */
.back-btn {
  position: fixed;
  top: 80px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: #e91e63;
  border: 2px solid #e91e63;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  z-index: 15;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.back-btn:hover {
  background: #e91e63;
  color: white;
  transform: translateX(-5px);
  box-shadow: 0 6px 16px rgba(233, 30, 99, 0.3);
}

/* Page Navigation Button */
.page-nav-btn {
  background: #e91e63;
  color: white;
  border: none;
  padding: 14px 35px;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(233, 30, 99, 0.3);
}

.page-nav-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 28px rgba(233, 30, 99, 0.4);
}

/* Final Section */
.final {
  text-align: center;
  padding: 40px 20px;
  max-width: 700px;
  margin: 40px auto 20px;
}

.final-message {
  font-size: 1.4rem;
  background: linear-gradient(45deg, #e91e63, #ff6b9d, #e91e63);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease infinite;
  margin-bottom: 8px;
  margin-top: 15px;
  font-weight: 700;
}

.final-subtitle {
  font-size: 0.85rem;
  color: #666;
  font-style: italic;
}

/* Responsive */
@media (max-width: 600px) {
  .hero h1 {
    font-size: 2.2rem;
    padding: 0 10px;
  }

  .hero p {
    font-size: 1rem;
    padding: 0 10px;
  }

  .back-btn {
    top: 70px;
    left: 15px;
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .page-nav-btn {
    font-size: 1.1rem;
    padding: 12px 30px;
  }

  #teaserHeading {
    font-size: 1.3rem;
    padding: 0 15px;
  }

  .teaser-hint {
    padding: 0 15px;
  }

  #surpriseBtn {
    font-size: 1rem;
    padding: 10px 25px;
  }

  .test-btn {
    left: 10px;
    top: 10px;
    padding: 8px 12px;
    font-size: 11px;
  }

  .final {
    padding: 30px 15px;
  }

  .final-message {
    font-size: 1.6rem;
  }

  .final-subtitle {
    font-size: 1rem;
  }
}

/* Tablet responsiveness */
@media (min-width: 601px) and (max-width: 1024px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .page {
    padding: 15px;
  }
}

/* Large screens */
@media (min-width: 1400px) {
  .hero h1 {
    font-size: 3.2rem;
  }

  .hero p {
    font-size: 1.25rem;
  }
}

/* Touch device optimization */
@media (hover: none) and (pointer: coarse) {
  button {
    min-height: 44px;
    min-width: 44px;
  }

  .back-btn,
  .page-nav-btn,
  #surpriseBtn {
    padding: 14px 30px;
  }
}

/* iOS/Safari specific fixes */
@supports (-webkit-touch-callout: none) {
  .app,
  .page {
    height: -webkit-fill-available;
  }

  body {
    height: -webkit-fill-available;
  }
}

/* Mobile landscape orientation */
@media (max-width: 932px) and (orientation: landscape) {
  .page {
    padding: 10px;
    justify-content: flex-start;
    padding-top: 20px;
  }

  .hero {
    padding: 10px;
  }

  .hero h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .hero p {
    font-size: 1rem;
  }
}

/* iPhone specific fixes */
@media only screen and (max-width: 428px) {
  .page {
    padding: 12px;
    padding-top: max(env(safe-area-inset-top, 15px), 15px);
    padding-bottom: max(env(safe-area-inset-bottom, 15px), 15px);
  }

  .hero {
    padding: 8px 15px;
  }

  .hero h1 {
    font-size: 1.8rem;
    line-height: 1.2;
    margin-bottom: 8px;
  }

  .hero p {
    font-size: 0.95rem;
  }

  .teaser {
    padding: 8px 15px;
  }

  #teaserHeading {
    font-size: 1.1rem;
    margin-bottom: 6px;
  }

  .teaser-hint {
    font-size: 0.85rem;
  }

  .celebrate-btn,
  .page-nav-btn {
    padding: 12px 28px;
    font-size: 1.1rem;
    margin: 12px auto;
  }

  .back-btn {
    top: max(env(safe-area-inset-top, 12px), 70px);
    left: 12px;
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}

/* Extra small screens */
@media only screen and (max-width: 375px) {
  .page {
    padding: 10px;
    padding-top: max(env(safe-area-inset-top, 12px), 12px);
    padding-bottom: max(env(safe-area-inset-bottom, 12px), 12px);
  }

  .hero {
    padding: 6px 12px;
  }

  .hero h1 {
    font-size: 1.6rem;
    margin-bottom: 6px;
  }

  .hero p {
    font-size: 0.9rem;
  }

  .teaser {
    padding: 6px 12px;
  }

  #teaserHeading {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  .teaser-hint {
    font-size: 0.8rem;
  }

  .celebrate-btn,
  .page-nav-btn {
    padding: 11px 24px;
    font-size: 1rem;
    margin: 10px auto;
  }
}
