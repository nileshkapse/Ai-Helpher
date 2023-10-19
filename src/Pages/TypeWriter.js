import React, { useState, useEffect } from 'react';

const Typewriter = ({ paragraphs }) => {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedParagraphs, setDisplayedParagraphs] = useState([]);

  useEffect(() => {
    if (currentParagraphIndex < paragraphs.length) {
      const paragraph = paragraphs[currentParagraphIndex];

      if (currentIndex <= paragraph.length) {
        const timer = setTimeout(() => {
          setCurrentText(paragraph.substring(0, currentIndex));
          setCurrentIndex(currentIndex + 1);
        }, 10); // Typing speed in milliseconds
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => {
          setCurrentParagraphIndex(currentParagraphIndex + 1);
          setCurrentIndex(0);
          setDisplayedParagraphs([...displayedParagraphs, currentText]);
          setCurrentText('');
        }, 400); // Delay between paragraphs in milliseconds
      }
    }
  }, [currentParagraphIndex, currentIndex, paragraphs, currentText, displayedParagraphs]);

  return (
    <div>
      {displayedParagraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <p>{currentText}</p>
    </div>
  );
};

export default Typewriter;
