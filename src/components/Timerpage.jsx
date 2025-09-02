import React, { useState, useEffect } from "react";

const Timerpage = () => {
  const topic = "Welcome to Your Productivity Hub";
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
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-black via-blue-900 to-black">
      <h1 className="text-6xl font-bold mb-6">{topic}</h1>
      {/* FIX: Use a fixed height or min-height that fits the longest sentence */}
      <div className="min-h-[32px] text-xl text-gray-700">
        {displayedText}
      </div>
    </div>
  );
};

export default Timerpage;
