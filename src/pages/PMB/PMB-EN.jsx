import React, { useState, useEffect, useRef } from "react";
import "../css/PMB.css";
import Gambar from "../../assets/image-removebg-preview.webp";

/* ========== Reveal on scroll ========== */
const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ========== ICONS ========== */
const cardIcons = [
  // Academic - star
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.3L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,

  // Government - building/document
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 19V5C4 4.4 4.4 4 5 4H19C19.6 4 20 4.4 20 5V19"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M4 19C4 17.9 4.9 17 6 17H20"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 8H16M8 12H14"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,

  // Social & Community - people
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M5 20C5.5 16.5 8 14 12 14C16 14 18.5 16.5 19 20"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,

  // Media & Communication - document
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 7H20M7 4V7M17 4V7M5 10H19V20H5V10Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14H16M8 17H13"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,

  // Digital & Global - globe
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M3.5 12H20.5M12 3.5C14.3 6 15.5 9 15.5 12C15.5 15 14.3 18 12 20.5C9.7 18 8.5 15 8.5 12C8.5 9 9.7 6 12 3.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>,

  // Entrepreneurship & Professional - briefcase
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="3.5"
      y="8"
      width="17"
      height="11"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M8.5 8V6.5C8.5 5.7 9.2 5 10 5H14C14.8 5 15.5 5.7 15.5 6.5V8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path d="M3.5 13H20.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
];

/* ========== PROGRAM (TABS) ========== */
const programs = [
  {
    id: "career",
    label: "Career Prospects",
    type: "career",
    title: "Career Prospects for PPKn Graduates",
    subtitle:
      "PPKn UNPAM graduates are ready to work across many fields, from education and government to social entrepreneurship.",
    categories: [
      {
        title: "Academic Field",
        items: [
          "Civics teacher (elementary, junior high, senior high/vocational)",
          "Lecturer (with further Master's/Doctoral studies)",
          "Curriculum & learning media developer",
          "Trainer for character and national identity education",
        ],
      },
      {
        title: "Government Field",
        items: [
          "Civil servant (ASN/PNS)",
          "Staff at ministries & government institutions",
          "Public policy analyst",
          "Expert in law, politics, and civics",
        ],
      },
      {
        title: "Social & Community Field",
        items: [
          "NGO activist (democracy, human rights, education)",
          "Community development facilitator",
          "Public empowerment & participation facilitator",
          "Civic governance practitioner",
        ],
      },
      {
        title: "Media & Communication Field",
        items: [
          "Journalist covering politics & law",
          "Author of books & educational content",
          "Content creator (civic & digital literacy)",
          "Digital learning media developer",
        ],
      },
      {
        title: "Digital & Global Field",
        items: [
          "Digital literacy & digital ethics practitioner",
          "Public communication & public opinion analyst",
          "Political communication consultant",
          "Digital social campaign manager",
        ],
      },
      {
        title: "Entrepreneurship & Professional Field",
        items: [
          "Social entrepreneur",
          "Education & public policy consultant",
          "Training center manager",
          "Founder of civic education communities",
        ],
      },
    ],
  },
  {
    id: "learning",
    label: "Learning System",
    type: "learning",
    title: "Learning System",
    subtitle:
      "Flexible, relevant classes designed to fit the needs of students from many different backgrounds.",
    description:
      "Uses blended learning supported by a reliable Learning Management System, with flexible class schedules across 3 tracks: Regular A, B, CK, and CS.",
    schedule: [
      {
        program: "Regular A",
        desc: "In-person classes Monday–Friday (07:10–17:40)",
      },
      {
        program: "Regular B",
        desc: "In-person classes Monday–Friday (18:20–21:45)",
      },
      {
        program: "Regular CK",
        desc: "In-person classes on Thursday (07:45–17:45) and online Monday–Friday",
      },
      {
        program: "Regular CS",
        desc: "In-person classes on Saturday (07:45–17:45) and online Monday–Friday",
      },
    ],
  },
  {
    id: "activities",
    label: "Activities & Programs",
    type: "activities",
    title: "Activities & Featured Programs",
    subtitle:
      "Learning experiences outside the classroom to strengthen national awareness and skills for PPKn students.",
    activities: [
      "Visits to government institutions such as the KPK, BPIP, and Lemhanas",
      "Visit to the Baduy Indigenous Village",
      "Ambassador of the Pancasila and Civic Education Study Program",
    ],
    featured: [
      "Potential Mapping Class",
      "Campus Ethics Pioneer",
      "Environmental Care Movement",
      "Internship at Educational Institutions",
      "Pancasila Laboratory",
      "Edu Speak",
      "Civic Write",
      "Ciap Expo",
    ],
  },
];

/* ========== REGISTRATION WAVES ========== */
const waves = [
  {
    id: 1,
    date: "Wave 1",
    status: "closed",
    statusLabel: "Closed",
    title: "Wave 1 Registration",
    wave: "Wave 1",
  },
  {
    id: 2,
    date: "Wave 2",
    status: "closed",
    statusLabel: "Closed",
    title: "Wave 2 Registration",
    wave: "Wave 2",
  },
  {
    id: 3,
    date: "Wave 3",
    status: "closed",
    statusLabel: "Closed",
    title: "Wave 3 Registration",
    wave: "Wave 3",
  },
  {
    id: 4,
    date: "Wave 4",
    status: "open",
    statusLabel: "Open",
    title: "Wave 4 Registration",
    wave: "Wave 4",
  },
];

/* ========== TUITION FEES ========== */
const tuition = {
  level: "S-1",
  campus: "South Tangerang",

  rows: [
        { label: "Registration Form", regAB: "Rp100,000", regC: "Rp100,000", note: "Wave 1: 50% discount" },
        { label: "Almamater Jacket + Student ID Card", regAB: "Rp250,000", regC: "Rp250,000", note: "After passing SPMB" },
        { label: "Start-of-Semester Registration", regAB: "Rp250,000", regC: "Rp250,000", note: "Every start of semester" },
        { label: "Tuition Fee (per semester)", regAB: "Rp1,500,000", regC: "Rp2,400,000", note: "A&B: Rp250k/installment; C&CK: Rp400k/installment", highlight: true },
        { label: "Practicum Installment", subLabel: "Specifically for the Faculty of Engineering, Science, Computer Science, Communication & Design, and Physical Education", regAB: "Rp200,000", regC: "Rp300,000", note: "Paid in full before final exams" },
        { label: "Midterm Exam Fee", regAB: "Rp300,000", regC: "Rp400,000", note: "Paid in full before midterms" },
        { label: "Final Exam Fee", regAB: "Rp300,000", regC: "Rp400,000", note: "Paid in full before final exams" },
  ],

  registration: {
    regAB: "Rp100,000",
    regC: "Rp100,000",
  },
};

/* ========== LINK ========== */
const linked = () => {
  window.open("https://pmb.unpam.ac.id/", "_blank", "noopener,noreferrer");
};

export default function PMB() {
  useEffect(() => {
    document.title =
      "PMB UNPAM - New Student Admission for the PPKn Study Program at Universitas Pamulang";
  }, []);

  const [activeId, setActiveId] = useState(programs[0].id);
  const active = programs.find((p) => p.id === activeId);

  return (
    <div className="pmbPage">
      {/* ================= HERO ================= */}
      <section className="pmb">
        <div className="pmb__hero">
          <Reveal className="pmb__left" delay={100}>
            <h1 className="pmb__title">
              <span className="pmb__title-base">New Student Admission</span>
              <span className="pmb__title-accent">
                Wave 4 Is Now Open
              </span>
            </h1>

            <p className="pmb__desc">
              Join the Pancasila and Civic Education Study Program at
              Universitas Pamulang, and prepare yourself to become an
              educator, an informed citizen, and a future leader of
              integrity.
            </p>

            <a href="#program" className="pmb__cta">
              Explore the Program
              <span className="pmb__cta-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </Reveal>

          <Reveal className="pmb__right" delay={200}>
            <div className="pmb__imageFrame">
              <div className="pmb__imagePlaceholder">

                <img
                  src={Gambar}
                  alt="Illustration of New Student Admission"
                  className="pmb__image"
                />

                {/* <span className="pmb__imagePlaceholder-label">
                  Replace image here
                </span> */}
              </div>

              <svg
                className="pmb__pattern"
                viewBox="0 0 220 220"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  x="10"
                  y="10"
                  width="90"
                  height="90"
                  rx="45"
                  fill="none"
                  stroke="var(--pmb-ink)"
                  strokeWidth="1.2"
                />
                <path
                  d="M120 10 L200 10 L200 90"
                  fill="none"
                  stroke="var(--pmb-maroon)"
                  strokeWidth="1.2"
                />
                <path
                  d="M120 90 L200 90"
                  fill="none"
                  stroke="var(--pmb-ink)"
                  strokeWidth="1.2"
                />
                <rect
                  x="10"
                  y="120"
                  width="90"
                  height="90"
                  fill="none"
                  stroke="var(--pmb-maroon)"
                  strokeWidth="1.2"
                />
                <circle
                  cx="165"
                  cy="165"
                  r="45"
                  fill="none"
                  stroke="var(--pmb-ink)"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PROGRAM ================= */}
      <section className="pmbProgram" id="program">
        <div className="pmbProgram__inner">
          <Reveal>
            <span className="pmbProgram__badge">Program</span>

            <h2 className="pmbProgram__heading">
              Take Your Role as an Educator and an Informed, Principled
              Citizen Who Contributes to the Nation
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="pmbProgram__tabs" role="tablist">
              {programs.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={activeId === p.id}
                  className={`pmbProgram__tab${
                    activeId === p.id ? " is-active" : ""
                  }`}
                  onClick={() => setActiveId(p.id)}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="pmbProgram__panel" role="tabpanel">
              <div className="pmbProgram__panelTop">
                <h3 className="pmbProgram__panelTitle">{active.title}</h3>

                <p className="pmbProgram__panelSubtitle">{active.subtitle}</p>
              </div>

              {/* ---- Content: Career Prospects ---- */}
              {active.type === "career" && (
                <div className="pmbProgram__jobGrid">
                  {active.categories.map((cat, i) => (
                    <div className="pmbProgram__jobCategory" key={cat.title}>
                      <div className="pmbProgram__jobHead">
                        <span
                          className="pmbProgram__jobIcon"
                          aria-hidden="true"
                        >
                          {cardIcons[i % cardIcons.length]}
                        </span>
                        <h4 className="pmbProgram__jobTitle">{cat.title}</h4>
                      </div>

                      <ul className="pmbProgram__jobList">
                        {cat.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* ---- Content: Learning System ---- */}
              {active.type === "learning" && (
                <>
                  <p className="pmbProgram__belajarText">
                    {active.description}
                  </p>

                  <p className="pmbProgram__label">Class Schedule</p>

                  <div className="pmbProgram__schedule">
                    {active.schedule.map((s) => (
                      <div className="pmbProgram__scheduleRow" key={s.program}>
                        <span className="pmbProgram__scheduleProgram">
                          {s.program}
                        </span>
                        <span className="pmbProgram__scheduleDesc">
                          {s.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* ---- Content: Activities & Featured Programs ---- */}
              {active.type === "activities" && (
                <>
                  <p className="pmbProgram__label">Student Activities</p>

                  <div className="pmbProgram__timeline">
                    {active.activities.map((a) => (
                      <div className="pmbProgram__timelineItem" key={a}>
                        <span
                          className="pmbProgram__timelineDot"
                          aria-hidden="true"
                        />
                        <p className="pmbProgram__timelineText">{a}</p>
                      </div>
                    ))}
                  </div>

                  <p className="pmbProgram__label">Featured Programs</p>

                  <div className="pmbProgram__tags">
                    {active.featured.map((t) => (
                      <span className="pmbProgram__tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <div className="pmbProgram__actions">
                <a
                  href="#studi"
                  className="pmbProgram__btn pmbProgram__btn--outline"
                >
                  View Study Programs
                </a>

                <a
                  href="#program"
                  className="pmbProgram__btn pmbProgram__btn--solid"
                >
                  Explore the Program
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= ADMISSIONS 2026 ================= */}
      <section className="pmbDates" id="jadwal">
        <div className="pmbDates__inner">
          <Reveal>
            <div className="pmbDatesTitles">
              <h1>Admissions 2026</h1>
            </div>

            <div className="pmbDates__listHead">
              <h2>Degree Program</h2>

              <a href="#jadwal" className="pmbDates__more">
                See More Schedules
                <span className="pmbDates__moreIcon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </Reveal>

          <div className="pmbbox">
            {waves.map((w, index) => (
              <Reveal key={w.id} delay={index * 100}>
                <div className="pmbbox__row">
                  <div className="pmbbox__date">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M3 9h18M8 3v4M16 3v4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>

                    <span>{w.date}</span>
                  </div>

                  <span
                    className={`pmbbox__status pmbbox__status--${w.status}`}
                  >
                    {w.statusLabel}
                  </span>

                  <p className="pmbbox__title">{w.title}</p>

                  <span className="pmbbox__wave">{w.wave}</span>

                  {w.status !== "closed" ? (
                    <a onClick={linked} className="pmbbox__cta">
                      Register Now
                    </a>
                  ) : (
                    <a className="pmbbox__ctac">Registration Closed</a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TUITION FEES ================= */}
      <section className="pmbCost" id="biaya">
        <div className="pmbCost__inner">
          <Reveal>
            <h2 className="pmbCost__heading">
              Tuition{" "}
              <span className="pmbCost__heading-accent">Fee Details</span>
            </h2>

            <p className="pmbCost__sub">
              Affordable tuition with no building fee, specifically for the{" "}
              {tuition.level} PPKn program in {tuition.campus}.
            </p>

            <div className="pmbCost__badges">
              <span className="pmbCost__badge pmbCost__badge--discount">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6 9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                50% Discount on Registration Form for Wave 1 (Bachelor's & Diploma)
              </span>

              <span className="pmbCost__badge pmbCost__badge--wave">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                4 Registration Waves
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="pmbCost__tabs">
              <span className="pmbCost__tab is-active">
                Bachelor's (S-1) South Tangerang
              </span>
            </div>

            <div className="pmbCost__card">
              <div className="pmbCost__cardHeader">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="2.5"
                    y="6"
                    width="19"
                    height="13"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M2.5 10h19M16 15h2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                {tuition.level} – {tuition.campus}
              </div>

              <div className="pmbCost__tableWrap">
                <table className="pmbCost__table">
                  <thead>
                    <tr>
                      <th>Fee Description</th>
                      <th>Reg. A &amp; B</th>
                      <th>Reg. C, S &amp; CK</th>
                      <th>Notes</th>
                    </tr>
                  </thead>

                  <tbody>
                    {tuition.rows.map((r, i) => (
                      <tr
                        key={i}
                        className={r.highlight ? "is-highlight" : undefined}
                      >
                        <td>
                          <span className="pmbCost__rowLabel">{r.label}</span>

                          {r.subLabel && (
                            <span className="pmbCost__rowSub">
                              {r.subLabel}
                            </span>
                          )}
                        </td>

                        <td className="pmbCost__amount">{r.regAB}</td>

                        <td className="pmbCost__amount">{r.regC}</td>

                        <td className="pmbCost__note">{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pmbCost__summary">
                <span className="pmbCost__summaryIcon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 8h.01M11 11h1v5h1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <div>
                  <p className="pmbCost__summaryTitle">Initial Registration Fee</p>

                  <div className="pmbCost__summaryValues">
                    <span>
                      Reg. A &amp; B:{" "}
                      <strong>{tuition.registration.regAB}</strong>
                    </span>

                    <span>
                      Reg. C, S &amp; CK:{" "}
                      <strong>{tuition.registration.regC}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}