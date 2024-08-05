import React, { useState, useEffect } from "react";

import "./Accordion.css";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

//Accordion V2 (Multi+Single Selection)
function Accordion() {
  const [multiSelection, setMultiSelection] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);

  useEffect(() => {
    setActiveIndices([]);
  }, [multiSelection]);

  function handleToggle(index) {
    if (multiSelection) {
      if (activeIndices.includes(index)) {
        setActiveIndices(activeIndices.filter((i) => i !== index));
      } else {
        setActiveIndices([...activeIndices, index]);
      }
    } else {
      setActiveIndices(activeIndices.includes(index) ? [] : [index]);
    }
  }

  return (
    <div className="accordion">
      <h2>Frequently Asked Questions</h2>
      <button
        className="btn dark-btn"
        onClick={() => setMultiSelection(!multiSelection)}
      >
        {multiSelection
          ? "Switch to Single Selection"
          : "Switch to Multi Selection"}
      </button>

      {faqs.map((faq, i) => (
        <AccordionItem
          title={faq.title}
          text={faq.text}
          index={i}
          key={i}
          onToggle={handleToggle}
          activeIndices={activeIndices}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, text, index, onToggle, activeIndices }) {
  const isOpen = activeIndices.includes(index);

  return (
    <div
      className={`accordion-item ${isOpen ? "open" : ""}`}
      onClick={() => onToggle(index)}
    >
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default Accordion;
