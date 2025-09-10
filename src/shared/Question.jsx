// import React, { useState } from 'react';
// import { Label } from "../components/ui/label";
// import { Button } from '../components/ui/button';
// import { Separator } from "../components/ui/separator";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import '../App.css'; 

// const Question = (props) => {
//   const [answer, setAnswer] = useState('');
//   const [shakeError, setShakeError] = useState(false);

//   const handleAnswerSelect = (val) => {
//     setAnswer(val);
//   }

//   const handleNext = () => {
//     if (!answer) {
//       setShakeError(true);
//       setTimeout(() => setShakeError(false), 250);
//       return;
//     }
//     props.save(answer === props.data.answer);
//     setAnswer('');
//   }

//   return (
//     <div className="flex flex-col">
//       <Label className='text-3xl mb-2 animate-slideFadeIn'>{props.data.text}</Label>
//       <Label className='text-sm text-gray-500 mb-4'>{`Difficulty: ${props.data.difficulty}`}</Label>

//       {props.data.options.map((x, i) => (
//         <div
//           key={i}
//           className={`
//             px-2 py-2 mt-1 mb-1 rounded flex justify-between items-center cursor-pointer
//             transition-all duration-150 ease-in-out
//             ${answer === x ? 'scale-105 bg-primary/20 dark:bg-primary/30 border-primary' : 'border border-gray-300 dark:border-gray-600'}
//             hover:scale-105 hover:bg-primary/10 dark:hover:bg-primary/20
//             focus:outline-none focus:ring-2 focus:ring-primary/70
//           `}
//           onClick={() => handleAnswerSelect(x)}
//           tabIndex={0}
//           onKeyDown={(e) => e.key === 'Enter' && handleAnswerSelect(x)}
//         >
//           <span>{x}</span>
//         </div>
//       ))}

//       <Separator className="my-2" />

//       <div className={`${shakeError ? 'shake' : ''}`}>
//         <Button
//           className={`mt-1 transition-opacity duration-150 ${!answer ? 'opacity-50 cursor-not-allowed' : ''}`}
//           onClick={props.isLast ? () => props.submitQuiz(answer === props.data.answer) : handleNext}
//           disabled={!answer}
//         >
//           {props.isLast ? 'Submit' : 'Next'}
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Question;







import React, { useState } from 'react';
import { Label } from "../components/ui/label";
import { Button } from '../components/ui/button';
import { Separator } from "../components/ui/separator";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import '../App.css'; 

const Question = (props) => {
  const [answer, setAnswer] = useState('');
  const [shakeError, setShakeError] = useState(false);

  const handleAnswerSelect = (val) => {
    setAnswer(val);
  }

  const handleNext = () => {
    if (!answer) {
      setShakeError(true);
      setTimeout(() => setShakeError(false), 250);
      return;
    }
    props.save(answer === props.data.answer);
    setAnswer('');
  }

  // Safe function call for submitQuiz
  // const handleSubmit = () => {
  //   if (!answer) {
  //     setShakeError(true);
  //     setTimeout(() => setShakeError(false), 250);
  //     return;
  //   }

  //   if (typeof props.submitQuiz === 'function') {
  //     props.submitQuiz(answer === props.data.answer);
  //   } else {
  //     console.error("submitQuiz prop is not a function!", props.submitQuiz);
  //     // Fallback: just call save and mark quiz done
  //     props.save(answer === props.data.answer);
  //   }

  //   setAnswer('');
  // }





  const handleSubmit = () => {
  if (!answer) {
    setShakeError(true);
    setTimeout(() => setShakeError(false), 250);
    return;
  }

  console.log("submitQuiz prop:", props.submitQuiz);  // Yeh line add karein

  if (typeof props.submitQuiz === 'function') {
    props.submitQuiz(answer === props.data.answer);
  } else {
    console.error("submitQuiz prop is not a function!", props.submitQuiz);
    // Fallback: just call save and mark quiz done
    props.save(answer === props.data.answer);
  }

  setAnswer('');
}


  return (
    <div className="flex flex-col">
      <Label className='text-3xl mb-2 animate-slideFadeIn'>{props.data.text}</Label>
      <Label className='text-sm text-gray-500 mb-4'>{`Difficulty: ${props.data.difficulty}`}</Label>

      {props.data.options.map((x, i) => (
        <div
          key={i}
          className={`
            px-2 py-2 mt-1 mb-1 rounded flex justify-between items-center cursor-pointer
            transition-all duration-150 ease-in-out
            ${answer === x ? 'scale-105 bg-primary/20 dark:bg-primary/30 border-primary' : 'border border-gray-300 dark:border-gray-600'}
            hover:scale-105 hover:bg-primary/10 dark:hover:bg-primary/20
            focus:outline-none focus:ring-2 focus:ring-primary/70
          `}
          onClick={() => handleAnswerSelect(x)}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleAnswerSelect(x)}
        >
          <span>{x}</span>
        </div>
      ))}

      <Separator className="my-2" />

      <div className={`${shakeError ? 'shake' : ''}`}>
        <Button
          className={`mt-1 transition-opacity duration-150 ${!answer ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={props.isLast ? handleSubmit : handleNext}
          disabled={!answer}
        >
          {props.isLast ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
}

export default Question;
