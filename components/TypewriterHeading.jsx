"use client";

import React, { useState, useEffect } from "react";

export default function TypewriterHeading({
  text,
  tag: Tag = "h2",
  className = "",
  style = {},
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseTime = 2600,
  emptyPauseTime = 500,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset when text changes (e.g. language switch)
  useEffect(() => {
    setDisplayedText("");
    setIsDeleting(false);
  }, [text]);

  useEffect(() => {
    let timer;
    const target = text || "";

    if (!isDeleting) {
      if (displayedText.length < target.length) {
        timer = setTimeout(() => {
          setDisplayedText(target.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause before erasing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(target.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, pause before re-typing
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, emptyPauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pauseTime, emptyPauseTime]);

  return (
    <Tag className={`inline-flex items-center flex-wrap ${className}`} style={style}>
      <span>{displayedText}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </Tag>
  );
}
