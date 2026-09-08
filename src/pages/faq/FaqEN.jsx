import { useState } from "react";
import "./Faq.css";

function FaqEn() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What is the PPKn Study Program at Pamulang University?",
      answer:
        "The Pancasila and Civic Education (PPKn) Study Program at Pamulang University is one of the leading study programs under the Faculty of Teacher Training and Education (FKIP). Established in 2008 with Decree No. 2359/D/T/2008 dated July 25, 2008, this program marks the beginning of teacher education at Pamulang University.",
    },
    {
      question:
        "What is the vision and mission of the PPKn Study Program at UNPAM?",
      answer:
        "The PPKn Study Program at UNPAM has a vision to produce competent, religious, and nationally-minded educators. This program is strongly committed to building student character that upholds Pancasila values and the spirit of diversity. Through an adaptive curriculum, character strengthening, and a learning approach based on technology and values, this program encourages the birth of a generation of educators and citizens who are intelligent, critical, and socially and morally responsible.",
    },
    {
      question:
        "What are the latest developments and achievements of the PPKn Study Program at UNPAM?",
      answer:
        "The PPKn Study Program at UNPAM continues to show significant developments and achievements. Some of them are:\n(1) Transition to Outcome-Based Education (OBE) curriculum to produce more measurable and adaptive graduates.\n(2) Establishing various academic collaborations, both nationally with renowned universities such as Sebelas Maret University (UNS), Padang State University (UNP), and Surabaya State University (UNESA), as well as internationally with ELMU University Malaysia, Universiti Malaysia Terengganu, and Mighty Skills International College.\n(3) Organizing various activities such as public lectures, international seminars, and workshops to strengthen national values and learning innovation.",
    },
    {
      question:
        "What are the career prospects and assessments of PPKn UNPAM alumni?",
      answer:
        "Graduates of the PPKn Study Program are positively rated by employers. Based on the 2025 Alumni User Satisfaction Survey, the majority of users rated various aspects of alumni competencies as good to very good. The communication skills aspect received the highest very good rating (55%), followed by ethics and information technology mastery (each 54%), and teamwork and self-development skills (52%). These results show that PPKn University of Pamulang graduates are considered to have mastery of knowledge relevant to the needs of the workforce and society.",
    },
    {
      question:
        "What are the commitments and contributions of the PPKn Study Program at UNPAM to society?",
      answer:
        "The PPKn Study Program at UNPAM is committed to making real contributions to society. Some examples are:\n(1) Collaborating with Tegal Village in maintaining the village correspondence application to support improving the quality of digital-based public services.\n(2) Carrying out community service activities, including international programs with PUP Philippines.\n(3) Organizing public lectures on the theme of strengthening diversity to build awareness among the younger generation of the importance of maintaining diversity.",
    },
    {
      question:
        "What are the advantages of the PPKn Study Program at Pamulang University?",
      answer:
        "The advantages of the PPKn Study Program at UNPAM lie in its Outcome-Based Education (OBE) curriculum, experienced lecturers, and an academic atmosphere that supports character development and national insight. Furthermore, this program actively establishes national and international collaborations and provides various community service and research activities that enrich student experiences.",
    },
    {
      question:
        "What is the lecture system in the PPKn Study Program at UNPAM?",
      answer:
        "Lectures in the PPKn Study Program at UNPAM use a blended learning approach, combining face-to-face and online learning. Students are also involved in discussions, simulations, and field practice to sharpen teaching skills and socio-political analysis. Lecturers use interactive and project-based methods so that students are ready to face challenges in the world of education and society.",
    },
    {
      question: "What are the career opportunities for PPKn UNPAM graduates?",
      answer:
        "PPKn UNPAM graduates have a wide range of career opportunities, including as PPKn teachers in secondary schools, lecturers, researchers in civic education, public policy consultants, civil servants, and managers of non-governmental organizations working in democracy and human rights. With strong communication and leadership skills, graduates can also pursue careers in the private sector and international organizations.",
    },
    {
      question:
        "What are the advantages of choosing the PPKn Study Program at Pamulang University?",
      answer:
        "There are several main advantages that can be gained:\n(1) Outcome-Based Education (OBE) curriculum that refers to the needs of the workforce and the times.\n(2) Qualified and experienced lecturers in the field of civic education, and active in research and community service.\n(3) Extensive collaboration network with various domestic and foreign universities, opening opportunities for student exchange and academic collaboration.\n(4) Campus environment that supports soft skill development, such as student organizations, seminars, and leadership training.\n(5) Competent graduates ready to compete in various sectors, including education, government, and civil society.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <main className="content-layout">
        <section className="faq-text-section">
          <h1>Frequently Asked Questions</h1>
          <div className="accordion">
            {faqData.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => toggleFaq(index)}
                >
                  <h2>{item.question}</h2>
                  <span className="toggle-icon">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`accordion-content ${openIndex === index ? "open" : ""}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default FaqEn;
