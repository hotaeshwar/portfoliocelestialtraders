"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: translations.en,
  isRTL: false,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Check local storage or browser preference
    const saved = localStorage.getItem("celestial_lang");
    if (saved && (saved === "en" || saved === "ar")) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("celestial_lang", lang);
    if (typeof document !== "undefined") {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "ar" : "en";
    changeLanguage(nextLang);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = translations[language] || translations.en;
  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        toggleLanguage,
        t,
        isRTL,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
