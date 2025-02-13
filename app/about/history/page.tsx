"use client";
//import { count } from "console";
import { useState } from "react";

export default function AboutHistoryPage() {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);


  function increment() {
    setCount1(count1 + 1);
  }

  function decrement() {
    setCount2(count2 - 1);
  }

  function add() {
    setSum(count1 + count2);
  }
    return (
      <main>
      <h1>{count1} + {count2} = {sum}</h1>
      <button onClick={increment}>Öka</button>
      <button onClick={decrement}>Mindre</button>
      <button onClick={add}>Sum</button>
      </main>
    );
  }