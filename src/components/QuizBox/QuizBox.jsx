import React, { useState } from "react";

const QuizBox = ({ question, answers, correct_answer, setnext }) => {
  const [status, setStatus] = useState(false);

  const checkAnswer = (answer) => {
    if (answer === correct_answer) {
      setStatus(true);
      setTimeout(() => setStatus(false), 1000);
      setnext(1);
    } else {
      setStatus(true);
      setTimeout(() => setStatus(false), 1000);
      setnext(0);
    }
  };

  return (
    <div className="p-4 w-5/6 lg:w-2/5 mt-4">
      <h1 className="text-lg font-bold bg-neutral-50 py-6 rounded-lg px-4 text-center">
        {question}
      </h1>
      <ul>
        {answers.map((answer, index) => (
          <li
            key={index}
            className="cursor-pointer border-2 border-neutral-100 flex hover:bg-purple-400 hover:opacity-90 bg-purple-300 rounded-md p-3 my-3 text-neutral-900 font-semibold"
            style={{
              backgroundColor:
                status === true
                  ? answer === correct_answer
                    ? "rgb(132 204 22)"
                    : "rgb(216 160 254)"
                  : "",
            }}
            onClick={() => checkAnswer(answer)}
          >
            <p className="px-2 text-black mr-4 rounded-sm font-bold bg-neutral-100">
              {String.fromCharCode(index + 65)}
            </p>
            <p>{answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizBox;
