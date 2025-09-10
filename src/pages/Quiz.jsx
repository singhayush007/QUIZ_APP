import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Question from "../shared/Question";
import { Progress } from "../components/ui/progress";
import { Label } from "../components/ui/label";
import AnimatedNumbers from "react-animated-numbers";
import { Separator } from "../components/ui/separator";
import ConfettiExplosion from "react-confetti-explosion";
import { Button } from "../components/ui/button";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Quiz = () => {
  const { categoryId } = useParams();

  const confettiOptions = {
    force: 0.9,
    duration: 6000,
    particleCount: 100,
    width: 800,
  };

  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizDone, setQuizDone] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  const quizData = {
    technology: [
      { text: "Which company developed React?", options: ["Google","Facebook","Microsoft","Apple"], answer:"Facebook", explanation:"React was developed by Facebook.", difficulty:"Easy" },
      { text: "What does CSS stand for?", options:["Cascading Style Sheets","Computer Style Sheets","Creative Style Syntax","Colorful Style Sheets"], answer:"Cascading Style Sheets", explanation:"CSS is used for styling HTML.", difficulty:"Easy" },
      { text: "Which of these is a JS framework?", options:["Django","React","Laravel","Flask"], answer:"React", explanation:"React is a JS library for UI components.", difficulty:"Medium" },
      { text: "What does HTML stand for?", options:["Hyper Text Markup Language","Hyperlinks and Text Markup Language","Home Tool Markup Language","Hyper Tool Multi Language"], answer:"Hyper Text Markup Language", explanation:"HTML structures content on the web.", difficulty:"Easy" },
      { text: "Which method is used to fetch data asynchronously in JS?", options:["getData()","fetch()","asyncData()","request()"], answer:"fetch()", explanation:"fetch() makes async HTTP requests.", difficulty:"Medium" },
    ],
    nature: [
      { text: "Which gas do plants release during photosynthesis?", options:["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"], answer:"Oxygen", explanation:"Plants release O₂ during photosynthesis.", difficulty:"Easy" },
      { text: "Which is the largest ocean on Earth?", options:["Atlantic","Indian","Pacific","Arctic"], answer:"Pacific", explanation:"Pacific Ocean is the largest.", difficulty:"Easy" },
      { text: "What is the process of water cycle called?", options:["Evaporation","Precipitation","Hydrological Cycle","Condensation"], answer:"Hydrological Cycle", explanation:"Water cycle = Hydrological Cycle.", difficulty:"Medium" },
      { text: "Which layer protects Earth from UV rays?", options:["Ozone Layer","Troposphere","Stratosphere","Ionosphere"], answer:"Ozone Layer", explanation:"Ozone absorbs UV radiation.", difficulty:"Medium" },
      { text: "Which biome has the most biodiversity?", options:["Desert","Tundra","Rainforest","Grassland"], answer:"Rainforest", explanation:"Rainforests are richest in biodiversity.", difficulty:"Medium" },
    ],
    politics: [
      { text: "Who is the current UN Secretary-General?", options:["Antonio Guterres","Ban Ki-moon","Kofi Annan","Boutros Boutros-Ghali"], answer:"Antonio Guterres", explanation:"He is the current UN Secretary-General.", difficulty:"Medium" },
      { text: "Which system divides power between central & state govt?", options:["Unitary","Federal","Confederation","Monarchy"], answer:"Federal", explanation:"Federal system shares powers.", difficulty:"Easy" },
      { text: "What is the main purpose of elections?", options:["Law making","Judiciary","Choosing representatives","Tax collection"], answer:"Choosing representatives", explanation:"Elections select reps.", difficulty:"Easy" },
      { text: "Which amendment gives freedom of speech in India?", options:["1st","2nd","3rd","4th"], answer:"1st", explanation:"1st Amendment protects free speech.", difficulty:"Medium" },
      { text: "Which body makes international laws?", options:["UN","ICJ","IMF","World Bank"], answer:"ICJ", explanation:"International Court of Justice makes international laws.", difficulty:"Hard" },
    ],
    sports: [
      { text: "How many players in a football team?", options:["9","10","11","12"], answer:"11", explanation:"11 players per team in football.", difficulty:"Easy" },
      { text: "Which country won FIFA World Cup 2018?", options:["Brazil","Germany","France","Argentina"], answer:"France", explanation:"France won in 2018.", difficulty:"Easy" },
      { text: "In tennis, what is 0 called?", options:["Love","Zero","Null","Nil"], answer:"Love", explanation:"Score 0 = Love.", difficulty:"Easy" },
      { text: "Which sport uses a shuttlecock?", options:["Tennis","Badminton","Cricket","Volleyball"], answer:"Badminton", explanation:"Shuttlecock used in Badminton.", difficulty:"Easy" },
      { text: "Olympics are held every how many years?", options:["2","3","4","5"], answer:"4", explanation:"Olympics every 4 years.", difficulty:"Medium" },
    ],
  };

  const quiz = quizData[categoryId] || quizData.technology;
  const currentQuestion = quiz[questionIndex];
  const isLastQuestion = questionIndex === quiz.length - 1;

  const handleSaveAnswer = (isCorrect) => {
    setAnswers([...answers, { question: questionIndex, isCorrect }]);
    if (isCorrect) setScore(score + 1);

    if (questionIndex + 1 < quiz.length) {
      setQuestionIndex(questionIndex + 1);
      setTimeLeft(10);
    } else {
      setQuizDone(true);
    }
  };

  // const submitQuiz = (isCorrect) => {
  //   handleSaveAnswer(isCorrect);
  //   setQuizDone(true);
  // };

const submitQuiz = (isCorrect) => {
  if (typeof handleSaveAnswer === "function") {
    handleSaveAnswer(isCorrect);
  } else {
    console.error("handleSaveAnswer is not a function!");
  }
  setQuizDone(true);
};


  useEffect(() => {
    if (quizDone) return;

    if (timeLeft === 0) {
      if (questionIndex + 1 < quiz.length) {
        handleSaveAnswer(false);
      } else {
        setQuizDone(true);
      }
    }

    const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, questionIndex, quizDone]);

  return (
    <Card>
      <CardHeader>
        {!quizDone && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-sm">
                Question {questionIndex + 1}/{quiz.length} answered
              </CardTitle>
              <span className={`font-bold ${timeLeft <= 3 ? "text-red-500 animate-pulse" : "text-blue-600"}`}>
                ⏳ {timeLeft}s
              </span>
            </div>
            <Progress className="h-3 rounded-full" value={((questionIndex + 1) * 100) / quiz.length} />
          </div>
        )}
      </CardHeader>

      <CardContent>
        <div className="w-[400px] max-w-full">
          {!quizDone ? (
            <Question
              data={currentQuestion}
              save={handleSaveAnswer}
              isLast={isLastQuestion}
              submitQuiz={submitQuiz}
              quizDone={quizDone}
            />
          ) : (
            <div className="flex flex-col items-center w-full">
              <Label className="text-3xl">Quiz Result</Label>
              <Separator className="my-4" />
              <ConfettiExplosion {...confettiOptions} />
              <span className="text-2xl mb-4">{score}/{quiz.length} Questions are correct!</span>

              <div className="w-full space-y-4">
                {quiz.map((q, i) => {
                  const userAnswer = answers[i];
                  let chipClass =
                    "inline-block px-3 py-1 rounded-full text-sm font-semibold";

                  if (userAnswer === undefined) {
                    chipClass += " bg-gray-200 text-gray-800"; // Neutral
                  } else if (userAnswer.isCorrect) {
                    chipClass += " bg-[#00B75F] text-white"; // Correct
                  } else {
                    chipClass += " bg-[#FF9D33] text-white"; // Incorrect
                  }

                  return (
                    <div key={i} className="border p-2 rounded">
                      <div className="flex justify-between items-center mb-1">
                        <Label className="font-bold">{i + 1}. {q.text}</Label>
                        <span className={chipClass}>
                          {userAnswer === undefined
                            ? "Not Answered"
                            : userAnswer.isCorrect
                            ? "Correct"
                            : "Incorrect"}
                        </span>
                      </div>

                      <div className="flex items-center mt-1">
                        {userAnswer?.isCorrect ? (
                          <FaCheckCircle className="text-[#00B75F] mr-2" />
                        ) : (
                          <FaTimesCircle className="text-[#FF9D33] mr-2" />
                        )}
                        <span className="text-sm">Correct Answer: {q.answer}</span>
                      </div>

                      <Label className="text-sm text-gray-600 mt-1">Explanation: {q.explanation}</Label>
                      <Label className="text-xs text-gray-500 mt-1">Difficulty: {q.difficulty}</Label>
                    </div>
                  );
                })}
              </div>

              <AnimatedNumbers
                transitions={index => ({ type: "spring", duration: index + 0.1 })}
                animateToNumber={score * 100}
                fontStyle={{ fontSize: 60 }}
              />
              <span className="text-2xl mt-2">Points</span>

              <Link to="/"><Button className="mt-5">Back to Home</Button></Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Quiz;
