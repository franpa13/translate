import React from "react";
import TextArea from "./TextArea";
import TextAreaTwo from "./TextAreaTwo";
export default function ContainersText() {
  return (
    <div className="flex justify-center items-center p-4 flex-col gap-6 md:gap-16 md:absolute md:flex-row md:justify-center md:w-full md:items-start">
      <TextArea primer={true}></TextArea>
      <TextAreaTwo></TextAreaTwo>
    </div>
  );
}
