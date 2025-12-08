import Image from "next/image";
import { PROJECTS } from "@/data/constants";
import { getLayoutForImageCount, getSizesForSpan } from "@/utils/layoutPatterns";
import styles from "./Projects.module.css";

/**
 * Normalize image data to consistent format
 * Supports both string paths and image objects with captions and links
 */
function normalizeImage(img) {
  if (typeof img === 'string') {
    return { src: img, caption: null, link: null };
  }
  return {
    src: img.src,
    caption: img.caption || null,
    link: img.link || null
  };
}

/**
 * ProjectImage - Renders a single image with optional caption and link
 */
function ProjectImage({ image, index, projectTitle, layoutConfig }) {
  const spanClass = styles[`span${layoutConfig.span}`];

  const imageContent = (
    <>
      <Image
        src={image.src}
        alt={image.caption || `${projectTitle} screenshot ${index + 1}`}
        width={1200}
        height={800}
        className={styles.projectImage}
        sizes={getSizesForSpan(layoutConfig.span)}
        style={{ width: '100%', height: 'auto' }}
      />
      {(image.caption || image.link) && (
        <div className={styles.imageOverlay}>
          {image.caption && (
            <span className={styles.overlayCaption}>{image.caption}</span>
          )}
          {image.link && (
            <div className={styles.overlayArrow}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11L11 5M11 5H5M11 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      )}
    </>
  );

  return (
    <div className={`${styles.imageWrapper} ${spanClass}`}>
      {image.link ? (
        <a
          href={image.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageLink}
        >
          {imageContent}
        </a>
      ) : (
        imageContent
      )}
    </div>
  );
}

/**
 * ProjectImageGrid - Renders the bento-style grid of images
 */
function ProjectImageGrid({ images, projectTitle, customLayout }) {
  const normalizedImages = images.map(normalizeImage);
  const layout = getLayoutForImageCount(normalizedImages.length, customLayout);

  return (
    <div className={styles.projectImages}>
      {normalizedImages.map((image, index) => {
        const layoutConfig = layout[index] || { span: 12 };

        return (
          <ProjectImage
            key={index}
            image={image}
            index={index}
            projectTitle={projectTitle}
            layoutConfig={layoutConfig}
          />
        );
      })}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Featured Projects</h2>
          <nav className={styles.projectNav}>
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className={styles.projectNavPill}
              >
                #{project.title}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className={styles.projectCard}
            >
              <div className={styles.projectHeader}>
                <div>
                  <h3 className={styles.projectTitle}>
                    {!project.hideTitle && project.title} {project.subtitle}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      {project.link
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")}
                    </a>
                  )}
                </div>
              </div>

              <p className={styles.projectDescription}>{project.description}</p>

              {project.images && (
                <ProjectImageGrid
                  images={project.images}
                  projectTitle={`${project.title} ${project.subtitle}`}
                  customLayout={project.layout}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
