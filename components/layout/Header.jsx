"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, SITE_INFO } from "@/data/constants";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="containerFlex">
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {SITE_INFO.name}
            </a>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>PRODUCT</span>
            <span className={styles.tagSeparator}>/</span>
            <span className={styles.tag}>ENGINEERING</span>
            <span className={styles.tagSeparator}>/</span>
            <span className={styles.tag}>DESIGN</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              {link.label}
              {link.target === "_blank" && (
                <svg className={styles.externalIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 11L11 5M11 5H5M11 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={styles.hamburger}>
            <span
              className={mobileMenuOpen ? styles.hamburgerLineOpen : ""}
            ></span>
            <span
              className={mobileMenuOpen ? styles.hamburgerLineOpen : ""}
            ></span>
            <span
              className={mobileMenuOpen ? styles.hamburgerLineOpen : ""}
            ></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={closeMobileMenu}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
              >
                {link.label}
                {link.target === "_blank" && (
                  <svg className={styles.externalIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 11L11 5M11 5H5M11 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
