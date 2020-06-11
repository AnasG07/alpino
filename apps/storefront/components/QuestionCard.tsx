import React, { useState } from 'react';

export default function QuestionCard({ data, index }) {
  const [showAnswer, updateShowAnswer] = useState(false);
  return (
    <div className="py-8 border-solid border-t border-gray-custom">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col max-width-95-percent">
          <span className="text-faq-question text-xl ">
            {index + 1}. {data.question}
          </span>
          {showAnswer && <span className="text-faq-answer pt-2">A. {data.answer}</span>}
        </div>
        <div>
          <button className="border-none" onClick={() => updateShowAnswer(!showAnswer)}>
            <img
              src="./side-arrow-solid.svg"
              alt="down-arrow"
              className={`h-5 ${showAnswer && 'transform rotate-90'}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
