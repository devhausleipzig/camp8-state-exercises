import React, { useState } from "react";
import "./App.css";

export default function App({ maxCharCount = 300 }: { maxCharCount: number }) {
  const [inputValue, setInputValue] = useState<string>("Babba");
  const [charCount, setCharCount] = useState<number>(maxCharCount);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [colourObject, setColourObject] = useState<{
    first: string;
    second: string;
    third: string;
  }>({ first: "#FF0000", second: "#00FF00", third: "#0000FF" });

  const [guestList, setGuestList] = useState<string[]>([]);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) =>
    setInputValue(event.currentTarget.value);

  const handleTextAreaChange = (event: React.FormEvent<HTMLTextAreaElement>) =>
    setCharCount(maxCharCount - event.currentTarget.value.length);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("SUCCESS!");
  };

  const handleColourChange = (event: React.FormEvent<HTMLInputElement>) =>
    setColourObject(
      {
        ...colourObject,
        [event.currentTarget.name]: event.currentTarget.value,
      }
    );

  const handleGuestListClick = (event: React.FormEvent<HTMLButtonElement>) => {
    const guestName = (document.querySelector("#guestList") as HTMLInputElement)
      ?.value;
    setGuestList([...guestList, guestName]);
  };

  // If in doubt, useInstructor() when logging state!

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>Tell us your name!</div>
        <input onInput={handleInput}></input>
      </div>

      <br />

      <div>Hello {inputValue}, tell us about your experience!</div>

      <textarea
        name="textarea"
        maxLength={maxCharCount}
        cols={30}
        rows={10}
        onChange={handleTextAreaChange}
      ></textarea>

      <div>
        Remaining characters: {charCount} / {maxCharCount}
      </div>

      <br />

      <div className="flex flex-col">
        <div>Choose your 3 most favorite colors!</div>
        <label htmlFor="first">
          First:
          <input
            name="first"
            defaultValue={colourObject.first}
            onChange={handleColourChange}
            type="color"
          />
        </label>

        <label htmlFor="second">
          Second:
          <input
            name="second"
            defaultValue={colourObject.second}
            onChange={handleColourChange}
            type="color"
          />
        </label>

        <label htmlFor="third">
          Third:
          <input
            name="third"
            defaultValue={colourObject.third}
            onChange={handleColourChange}
            type="color"
          />
        </label>
      </div>
      {/* <div>{Object.entries(colourObject)}</div> */}
      <br />

      <div>
        <div>Add your list of plus-ones to the feedback party:</div>
        <span>
          <input id="guestList" type="text" className="mr-2" />
          <button onClick={handleGuestListClick}>Add Guest</button>
        </span>
        <>
          {guestList.map((guestName) => (
            <p>{guestName}</p>
          ))}
        </>
      </div>

      <br />

      <label className="mr-1" htmlFor="objectivity-checkbox">
        I am not drunk, human or in any way subjective. I am the true objective
        and unbiased arbiter of truth:
      </label>

      <input
        type="checkbox"
        name="objectivity-checkbox"
        onChange={() => setIsChecked(!isChecked)}
      />

      <br />

      <button className="disabled:cursor-not-allowed" disabled={!isChecked}>
        Buyakasha (AKA: Submit)
      </button>
    </form>
  );
}
