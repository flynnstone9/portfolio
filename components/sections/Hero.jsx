import styles from "./Hero.module.css";
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.heroContentLeft}>
            <h1 className={styles.headline}>
              Building products, interfaces, and developer experiences
            </h1>

            <p className={styles.description}>
              SF-based product leader building developer experiences at{" "}
              <a
                href="https://developer.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple&nbsp;Developer
              </a>
              . I lead cross-functional initiatives across design, engineering,
              and strategy to ship global campaigns and features that reach
              millions of developers.
            </p>
          </div>

          <div className={styles.heroContentRight}>
            <div className={styles.bioImageContainer}>
              <Image
                src="/images/bio/connor-flynn-a.jpg"
                alt="Connor Flynn"
                width={300}
                height={300}
                className={styles.bioImage}
                priority
              />
            </div>
          </div>

          {/* <p className={styles.description}>
            <a href="mailto:connormflynn@gmail.com">Email</a> or reach out on{" "}
            <a href="https://www.linkedin.com/in/conflynn/">LinkedIn</a> to
            connect.
          </p> */}

          {/* <div className={styles.ctas}>
            <a href="#projects" className={styles.primaryButton}>
              View Work
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Get in Touch
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
