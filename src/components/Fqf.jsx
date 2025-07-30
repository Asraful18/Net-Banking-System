import React, { useState } from 'react';


const faqs = [
  {
    question: "What Is Your Privacy Policy?                     ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "How Do I Register For Online Banking?            ",
    answer: "You can register by visiting our website and clicking on 'Register Now'.",
  },
  {
    question: "Is There A Mobile Banking App Available?         ",
    answer: "Yes, it's available for both Android and iOS.",
  },
  {
    question: "How Can I Apply For A Loan?                      ",
    answer: "You can apply through your account dashboard or visit a nearby branch.",
  },
];

const Fqa = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
        <p className='text-success'>FQA</p>
      <h2 className='text-success'>Questions & Answers</h2>
      {faqs.map((item, index) => (
        <div key={index} className="faq-item ">
          <div className="faq-question" onClick={() => toggle(index)}>
            <span>{item.question}</span>
            {openIndex === index ? <i className='icon fas fa-minus'/>: <i className='icon fas fa-plus'/>}
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Fqa;