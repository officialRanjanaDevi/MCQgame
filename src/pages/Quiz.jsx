import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import LoadingBox from "../components/QuizBox/LoadingBox";
import QuizBox from "../components/QuizBox/QuizBox";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import "./Style.css";

const Quiz = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState("");
  const [timmer, setTimmer] = useState(false);
  const [end, setEnd] = useState(false);

  const handleNext = (num) => {
    setScore((prevScore) => prevScore + num);
    setLoading(true);
    setCount(count + 1);
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 2000);
  };

  const fetchData = async () => {
    if (count <= 10) {
      setLoading(false);
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=1&category=19&difficulty=easy&type=multiple"
        );
        const result = await response.json();
        const fetchedData = result.results[0];
        setData(fetchedData);

        const allAnswers = [...fetchedData.incorrect_answers];
        const pos = Math.floor(Math.random() * 4);
        allAnswers.splice(pos, 0, fetchedData.correct_answer);
        setAnswers(allAnswers);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      setCount(0);
      setTimmer(false);
      setEnd(true);
    }
  };
  const handleStartGame = async () => {
    fetchData();
    setTimmer(true);
  };

  return (
    <div className="h-full relative flex flex-col items-center ">
      <h1 className="text-5xl font-black text-neutral-100 text-center py-4">
        MCQ Game
      </h1>

      <ScoreBoard
        score={score}
        solved={count}
        timmer={timmer}
        setTimmer={setTimmer}
        setEnd={setEnd}
      />
      {end ? (
        <ScoreCard score={score} />
      ) : (
        <>
          <div className="flex justify-around w-full">
            <button
              className="px-6 py-2 font-bold text-lg text-white"
              onClick={handleStartGame}
              disabled={loading}
            >
              Start
            </button>

            <button
              className="px-6 py-2 font-bold text-lg text-white "
              style={{ display: count > 0 ? "none" : "" }}
              onClick={() => {
                navigate("/logout");
              }}
            >
              Logout
            </button>
          </div>
          {loading && (
            <QuizBox
              question={data.question}
              answers={answers}
              correct_answer={data.correct_answer}
              setnext={handleNext}
            />
          )}
          {count > 0 && !loading && <LoadingBox />}
        </>
      )}
    </div>
  );
};

export default Quiz;
