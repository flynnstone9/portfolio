import styles from "./Work.module.css";
import { WORK_EXPERIENCE } from "@/data/constants";

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <h2>Work</h2>

        {WORK_EXPERIENCE.map((job) => (
          <a
            key={job.id}
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.jobContainer}
          >
            <div className={styles.jobContent}>
              <div className={styles.jobLogo}>
                {job.logos && job.logos.length > 0
                  ? job.logos.map((logo, index) => (
                      <img key={index} src={logo} alt={`${job.company} logo`} />
                    ))
                  : null}
              </div>
              <div className={styles.jobInfo}>
                <div className={styles.jobHeader}>
                  <span className={styles.jobCompany}>{job.company}</span>
                  <span className={styles.jobSeparator}>|</span>
                  <span className={styles.jobTitle}>{job.title}</span>
                </div>
                <div className={styles.jobMetaContainer}>
                  <p className={styles.jobDescription}>{job.description}</p>
                  <div className={styles.jobTags}>
                    {job.tags.map((tag, index) => (
                      <span key={index} className={styles.jobTag} style={{'--tag-index': index}}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.jobRight}>
              <div className={styles.jobDatesContainer}>
                {job.isCurrent && <span className={styles.pulseDot}></span>}
                <p className={styles.jobDates}>{job.dates}</p>
              </div>
              <div className={styles.jobArrow}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 11L11 5M11 5H5M11 5V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
