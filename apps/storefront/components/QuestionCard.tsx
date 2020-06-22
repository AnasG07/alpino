import React, { useState } from 'react';

export default function QuestionCard({ data, index, invert }) {
  const [showAnswer, updateShowAnswer] = useState(false);
  return (
    <div className={`py-8 border-solid border-t ${invert ? 'border-faq-border-invert' : 'border-gray-custom'}`}>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col max-width-95-percent">
          <span className={`${invert ? 'text-white' : 'text-faq-question'} text-xl font-semibold leading-16`}>
            {index + 1}. {data.question}
          </span>
        </div>
        <div>
          <button className="border-none" onClick={() => updateShowAnswer(!showAnswer)}>
            <img
              src="./side-arrow-solid.svg"
              alt="down-arrow"
              className={`h-5 ${showAnswer && 'transform rotate-90'} ${invert && 'filter-invert'}`}
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col max-width-95-percent">
        {showAnswer && (
          <span className={`${invert ? 'text-faq-invert' : 'text-faq-answer'} pt-2 text-xl leading-8`}>
            A. {data.answer}
          </span>
        )}
      </div>
    </div>
  );
}
