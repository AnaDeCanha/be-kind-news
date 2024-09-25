'use client'

import React, { useState } from "react";
import { Button } from "./button";


 export function MoodSelection () {

  interface StateAria {
    good: boolean,
    neutral: boolean,
    bad: boolean,
  }

  const [ariaState, setAriaState] = useState<StateAria> ({good:true, neutral:true, bad:true})
  const [pressButton, setPressButton] = useState<StateAria> ({good:false, neutral:false, bad:false})

  const handleClickGood = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAriaState({good:true, neutral:false, bad:false})
    setPressButton({good:true, neutral:false, bad:false})
  }
  const handleClickNeutral = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAriaState({good:false, neutral:true, bad:false})
    setPressButton({good:false, neutral:true, bad:false})
  }
  const handleClickBad = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAriaState({good:false, neutral:false, bad:true})
    setPressButton({good:false, neutral:false, bad:true})
  }

  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <Button
        id="good-mood" 
        tabIndex={0}
        className="size-32 rounded-md text-2xl bg-green-500"
        aria-label="Good Mood" 
        aria-pressed={pressButton.good}
        onClick={handleClickGood}
        disabled = {!ariaState.good}
        >
        Good😊
      </Button>
      <Button 
        id="neutral-mood"
        tabIndex={0}
        className="size-32 rounded-md text-2xl bg-gray-500"
        aria-label="Neutral Mood" 
        aria-pressed={pressButton.neutral}
        onClick={handleClickNeutral}
        disabled= {!ariaState.neutral}
        >
        Neutral😑
      </Button>
      <Button 
        id="bad-mood"
        tabIndex={0}
        className="size-32 rounded-md text-2xl bg-red-500"
        aria-label="Bad Mood" 
        aria-pressed={pressButton.bad}
        onClick={handleClickBad}
        disabled= {!ariaState.bad}
        >
        Bad😟
      </Button>
    </div>
  ) }