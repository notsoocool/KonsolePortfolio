import { useEffect, useState, useRef } from "react";
import styles from "./Input.module.css";
import { personalInfo } from "@/data/PersonalData";

export default function Input({ command, onSubmit }) {
  const [_command, setCommand] = useState(command ? command : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommand("");
    return onSubmit(_command);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="command">
        <div className="">
          <span className=" text-hotpink">{personalInfo.surname.toLowerCase()}</span>@{""} 
          <span className=" text-hotpink">{personalInfo.name.toLowerCase()}</span>{" "}
          <span>in</span>{" "}
          <span className=" text-purple">~</span>{" "}
          
        </div>
        <span className=" text-hotpink">λ</span>{" "}
      </label>

      <input
        type="text"
        className={styles.input}
        value={_command}
        onChange={(e) => setCommand(e.target.value)}
        disabled={command ? true : false}
        ref={(input) => input && !command && input.focus()}
        autoFocus={command === ""}
      />
    </form>
  );
}
