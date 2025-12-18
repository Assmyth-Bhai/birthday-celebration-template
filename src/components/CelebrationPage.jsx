import { gsap } from "gsap";
import { useEffect, useState } from "react";
import "./CelebrationPage.css";
import Confetti from "./Confetti";

// Generate heart positions outside component to avoid render issues
const generateHeartPositions = () =>
  [...Array(15)].map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
  }));

const heartPositions = generateHeartPositions();

function CelebrationPage({ onComplete, musicPlayerRef }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [activatedButtons, setActivatedButtons] = useState({
    lights: false,
    music: false,
    decorate: false,
    balloons: false,
    message: false,
  });
  const [lightsOn, setLightsOn] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // QNA Slides data
  const slides = [
    {
      icon: "✨",
      text: "It's Your Special Day cutie💗💗!",
      type: "announcement",
    },
    {
      icon: "✨",
      text: "Do you wanna see what I made??",
      type: "question",
      options: [
        { text: "Yes!", value: "yes" },
        { text: "No", value: "no" },
      ],
    },
    {
      icon: "✨",
      text: "Have a look at it, Sir Jiii",
      type: "announcement",
    },
  ];

  // Handle slide progression
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      // Animate out current slide
      gsap.to(".slide-content", {
        opacity: 0,
        y: -30,
        duration: 0.4,
        onComplete: () => {
          setCurrentSlide(currentSlide + 1);
          // Animate in next slide
          gsap.fromTo(
            ".slide-content",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });
    } else {
      // Show celebration buttons
      gsap.to(".slides-container", {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        onComplete: () => setShowButtons(true),
      });
    }
  };

  const handleAnswer = (value) => {
    if (value === "no") {
      // Playful response for "No"
      gsap.to(".question-options", {
        x: -20,
        duration: 0.1,
        yoyo: true,
        repeat: 5,
      });
    } else {
      handleNext();
    }
  };

  // Determine which buttons to show based on activation state
  const showLightsButton = true; // Always show first button
  const showMusicButton = activatedButtons.lights; // Show after lights is clicked
  const showDecorateButton = activatedButtons.music; // Show after music is clicked
  const showBalloonsButton = activatedButtons.decorate; // Show after decorate is clicked
  const showMessageButton = activatedButtons.balloons; // Show after balloons is clicked

  // Animate buttons in when they become visible
  useEffect(() => {
    if (showButtons) {
      gsap.fromTo(
        ".celebration-buttons",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [showButtons]);

  // Animate each button when it appears
  useEffect(() => {
    if (showDecorateButton) {
      const decorateBtn = document.querySelector('[data-button="decorate"]');
      if (decorateBtn) {
        gsap.fromTo(
          decorateBtn,
          { opacity: 0, x: -30, scale: 0.8 },
          { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
      }
    }
  }, [showDecorateButton]);

  useEffect(() => {
    if (showBalloonsButton) {
      const balloonsBtn = document.querySelector('[data-button="balloons"]');
      if (balloonsBtn) {
        gsap.fromTo(
          balloonsBtn,
          { opacity: 0, x: -30, scale: 0.8 },
          { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
      }
    }
  }, [showBalloonsButton]);

  useEffect(() => {
    if (showMessageButton) {
      const messageBtn = document.querySelector('[data-button="message"]');
      if (messageBtn) {
        gsap.fromTo(
          messageBtn,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }
        );
      }
    }
  }, [showMessageButton]);

  // Handle button activation
  const handleButtonClick = (buttonType) => {
    if (activatedButtons[buttonType]) return;

    const button = document.querySelector(`[data-button="${buttonType}"]`);

    // Button click animation
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    // Activate the button
    setActivatedButtons((prev) => ({ ...prev, [buttonType]: true }));

    // Special handling for lights button
    if (buttonType === "lights") {
      setLightsOn(true);
      // Animate the room darkening
      gsap.to(".celebration-page", {
        background:
          "linear-gradient(135deg, #1a0a1f 0%, #2d1b3d 50%, #1f0f29 100%)",
        duration: 1.5,
        ease: "power2.inOut",
      });
      return;
    }

    // Special handling for music button - play the actual music
    if (buttonType === "music") {
      if (musicPlayerRef && musicPlayerRef.current) {
        musicPlayerRef.current.play();
      }
    }

    // Show corresponding decoration with animations
    setTimeout(() => {
      const decoration = document.querySelector(`.decoration-${buttonType}`);
      if (decoration) {
        // Special animation for bunting - slide up from bottom
        if (buttonType === "decorate") {
          gsap.fromTo(
            decoration,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            }
          );
        }
        // Fade in animation for cake
        else if (buttonType === "music") {
          gsap.fromTo(
            decoration,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
            }
          );
        }
        // Animation for balloons - fly up from bottom
        else if (buttonType === "balloons") {
          // Trigger confetti
          console.log("Triggering confetti!"); // Debug log
          setShowConfetti(true);
          setTimeout(() => {
            console.log("Stopping confetti"); // Debug log
            setShowConfetti(false);
          }, 4000);

          gsap.fromTo(
            decoration,
            { opacity: 0, y: 300 },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              ease: "power2.out",
            }
          );
        }
        // Default animation for others
        else {
          gsap.fromTo(
            decoration,
            { opacity: 0, scale: 0, rotation: -180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
            }
          );
        }
      }
    }, 200);

    // If message button clicked, navigate to message page
    if (buttonType === "message") {
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
    }
  };

  return (
    <div className={`celebration-page ${lightsOn ? "lights-on" : ""}`}>
      {/* Confetti Effect */}
      {showConfetti && <Confetti />}

      {/* Floating hearts background */}
      <div className="floating-hearts-bg">
        {heartPositions.map((pos, i) => (
          <div
            key={i}
            className="heart-float"
            style={{
              left: `${pos.left}%`,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`,
            }}
          >
            💗
          </div>
        ))}
      </div>

      {/* QNA Slides Section */}
      {!showButtons && (
        <div className="slides-container">
          <div className="slide-content">
            <div className="slide-icon">{slides[currentSlide].icon}</div>
            <h2 className="slide-text">{slides[currentSlide].text}</h2>

            {slides[currentSlide].type === "question" ? (
              <div className="question-options">
                {slides[currentSlide].options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-button ${
                      option.value === "yes" ? "yes-button" : "no-button"
                    }`}
                    onClick={() => handleAnswer(option.value)}
                  >
                    {option.text} {option.value === "yes" && "👆"}
                  </button>
                ))}
              </div>
            ) : (
              <button className="next-button" onClick={handleNext}>
                {currentSlide < slides.length - 1 ? "Next" : "Let's Go! 🎉"}
              </button>
            )}
          </div>

          {/* Progress dots */}
          <div className="slide-progress">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`progress-dot ${
                  index === currentSlide ? "active" : ""
                } ${index < currentSlide ? "completed" : ""}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Celebration Buttons Section */}
      {showButtons && (
        <>
          {/* Buttons Section - At the TOP */}
          <div className="celebration-buttons">
            <h2 className="celebration-title">Let's Celebrate! 🎉</h2>
            <p className="celebration-subtitle">
              Click the buttons to decorate
            </p>

            <div className="buttons-grid">
              {/* Lights Button - Shows first, hides after click */}
              {showLightsButton && !activatedButtons.lights && (
                <button
                  className="action-button lights-button"
                  data-button="lights"
                  onClick={() => handleButtonClick("lights")}
                >
                  💡 Turn On the Lights
                </button>
              )}

              {/* Music Button - Shows after lights, hides after click */}
              {showMusicButton && !activatedButtons.music && (
                <button
                  className="action-button music-button"
                  data-button="music"
                  onClick={() => handleButtonClick("music")}
                >
                  🎵 Play Music
                </button>
              )}

              {/* Decorate Button - Shows after music is clicked, hides after click */}
              {showDecorateButton && !activatedButtons.decorate && (
                <button
                  className="action-button decorate-button"
                  data-button="decorate"
                  onClick={() => handleButtonClick("decorate")}
                >
                  🎨 Decorate
                </button>
              )}

              {/* Balloons Button - Shows after decorate is clicked, hides after click */}
              {showBalloonsButton && !activatedButtons.balloons && (
                <button
                  className="action-button balloons-button"
                  data-button="balloons"
                  onClick={() => handleButtonClick("balloons")}
                >
                  🎈 Fly the Balloons
                </button>
              )}

              {/* Message Button - Shows after all decorations */}
              {showMessageButton && (
                <button
                  className="action-button message-button"
                  data-button="message"
                  onClick={() => handleButtonClick("message")}
                >
                  💌 Well, I Have a Message for You sir Ji
                </button>
              )}
            </div>
          </div>

          {/* Decorations Container - BELOW buttons in normal flow */}
          <div className="decorations-container">
            {/* Twinkling Lights - when lights button is clicked - AT THE VERY TOP */}
            {activatedButtons.lights && (
              <div className="decoration-lights string-lights">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`light light-${i % 4}`}
                    style={{
                      left: `${5 + i * 4.5}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Bunting decoration - second row */}
            {activatedButtons.decorate && (
              <div className="decoration-decorate bunting">
                <div className="bunting-string">
                  {[
                    "H",
                    "a",
                    "p",
                    "p",
                    "y",
                    " ",
                    "B",
                    "i",
                    "r",
                    "t",
                    "h",
                    "d",
                    "a",
                    "y",
                  ].map((letter, i) => (
                    <div key={i} className={`bunting-flag flag-${i % 3}`}>
                      {letter}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cake decoration - center */}
            {activatedButtons.music && (
              <div className="decoration-music cake-container">
                <div className="cake">
                  <div className="cake-layer layer-3"></div>
                  <div className="cake-layer layer-2"></div>
                  <div className="cake-layer layer-1"></div>
                  <div className="cake-candles">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="candle">
                        <div className="flame"></div>
                        <div className="wick"></div>
                      </div>
                    ))}
                  </div>
                  <div className="cake-decoration flower-decoration"></div>
                </div>
              </div>
            )}

            {/* Balloons decoration - bottom */}
            {activatedButtons.balloons && (
              <div className="decoration-balloons">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`balloon balloon-${i % 3}`}
                    style={{
                      left: `${8 + i * 12}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${4 + (i % 3) * 0.5}s`,
                    }}
                  >
                    <div className="balloon-body"></div>
                    <div className="balloon-string"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default CelebrationPage;
