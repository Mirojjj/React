import React, { useEffect, useRef, useState } from "react";

const totalChoices = ["scissor", "paper", "rock"];

const Game = () => {
  const [currentChoice, setCurrentChoice] = useState(totalChoices[0]);
  const [computerCurrentChoice, setComputerCurrentChoice] = useState(
    totalChoices[0]
  );
  const [winner, setWinner] = useState("");
  const [isDraw, setIsDraw] = useState(false);

  const intervalRef = useRef();
  const intervalRefComp = useRef();

  const [playAgain, setPlayAgain] = useState(false);

  const startLoop = () => {
    intervalRef.current = setInterval(() => {
      setCurrentChoice((prevChoice) => {
        const currentIndex = totalChoices.indexOf(prevChoice);
        return totalChoices[(currentIndex + 1) % totalChoices.length];
      });
    }, 100);
  };

  const startLoopComp = () => {
    intervalRefComp.current = setInterval(() => {
      setComputerCurrentChoice((prevChoice) => {
        const currentIndex = totalChoices.indexOf(prevChoice);
        return totalChoices[(currentIndex + 1) % totalChoices.length];
      });
    }, 100);
  };

  const stopLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (intervalRefComp.current) {
      clearInterval(intervalRefComp.current);
      intervalRefComp.current = null;
    }
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "Draw";
    if (
      (userChoice === "scissor" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "rock" && computerChoice === "scissor")
    ) {
      return "User";
    }
    return "Computer";
  };

  const handleUserChoice = (choice) => {
    stopLoop();
    const computerChoice =
      totalChoices[Math.floor(Math.random() * totalChoices.length)];
    setCurrentChoice(choice);
    setComputerCurrentChoice(computerChoice);

    const result = determineWinner(choice, computerChoice);
    setWinner(result);
    setIsDraw(result === "Draw");
  };

  useEffect(() => {
    startLoop();
    startLoopComp();
    return () => {
      stopLoop();
      setPlayAgain(false);
    };
  }, [playAgain]);

  return (
    <div className=" mx-auto w-[90%] mt-9">
      <h1>The Classical Scissor Paper Rock Game</h1>
      {winner && (
        <div className="mt-4">
          <h2 className="text-4xl text-center">
            {isDraw ? "It's a Draw!" : `${winner} Wins!`}
          </h2>
        </div>
      )}
      <div className="screen flex">
        <div className="flex flex-col w-1/2 ">
          <h1 className="text-2xl text-center">User</h1>
          <div className="player1 h-40 border-2 flex items-center justify-center">
            {currentChoice}
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <h1 className="text-2xl text-center">Computer</h1>
          <div className="player2 h-40 border-2 flex items-center justify-center">
            {computerCurrentChoice}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-around mt-4">
          <button
            className="p-2 border-4"
            onClick={() => handleUserChoice("scissor")}
          >
            Scissor
          </button>
          <button
            className="p-2 border-4"
            onClick={() => handleUserChoice("paper")}
          >
            Paper
          </button>
          <button
            className="p-2 border-4"
            onClick={() => handleUserChoice("rock")}
          >
            Rock
          </button>
        </div>
        <button
          className=" mt-6 p-2 border-4"
          onClick={() => setPlayAgain(true)}
        >
          Play Again
        </button>
      </div>

      <div className=" h-60"></div>
    </div>
  );
};

export default Game;
