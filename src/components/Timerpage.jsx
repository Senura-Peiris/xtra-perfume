import React, { useState, useEffect } from "react";
import Heroimg from '../images/Heroimg.png';

const Timerpage = () => {
  const messages = [
    "Everybody can Track their work.",
    "Set goals and work for them.",
    "Enjoy your Break.",
    "User Can view Task history."
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < currentMessage.length) {
        setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentMessage.slice(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === currentMessage.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentMessageIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center relative overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={Heroimg}
          alt="Background"
          className="w-full h-full object-containe"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/70 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-white">
      <h1 className="text-[80px] font-bold mb-6">
  Welcome to the <span className="text-blue-300">Pomodoro</span>
</h1>

        <div className="min-h-[42px] text-xl text-gray-300">
          {displayedText}
        </div>
      </div>
    </div>
  );
};

export default Timerpage;
