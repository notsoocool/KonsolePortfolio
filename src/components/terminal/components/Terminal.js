import { useRef, useState } from "react";
import { CONTENTS } from "../../../utils/commandHelper";
import Command from "./Command";
import { personalInfo } from '/src/data/PersonalData';

const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
} 

const univYear = () => {
  const today = new Date();
  let year = today.getFullYear() - 2020;
  if( year > 4)
    return "2024 Graduated";
  else
    return year + "rd year";
}



export default function Terminal() {
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(false);
  const terminalRef = useRef(null);

  const escapeHTML = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const addCommand = async (command) => {
    let output;
    setLoading(true);
    setCommands([...commands, { command, output: "Loading..." }]);
    if (`${command}` in CONTENTS) {
      output = await CONTENTS[`${command}`]();
    } else if (command === "clear" || command === "Clear") {
      setLoading(false);
      return setCommands([]);
    } else {
      output = CONTENTS.error(escapeHTML(command));
    }

    setLoading(false);
    setCommands([...commands.slice(0, commands.length), { command, output }]);
    if (terminalRef) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  return (
    <div className=' text-xs md:text-base  text-white max-h-[27rem] overflow-y-scroll terminal' ref={terminalRef}>
     <div className='flex'>
      <div className=" hidden md:block w-[20rem] h-[20rem] bg-logo bg-cover"></div>
      <div className=" pb-5 pt-2 flex flex-col font-cascadia">
						<span className=' text-hotpink'>{personalInfo.surname.toLowerCase()}<span className=' text-white'>@</span>{personalInfo.name.toLowerCase()}</span>
						<span>```````````</span>
						<span className=' text-hotpink'>Name<span className=' text-white'>: {personalInfo.name} {personalInfo.surname}</span></span>
						<span className=' text-hotpink'>Age<span className=' text-white'>: {getAge("June 24, 2002")}</span></span>
						<span className=' text-hotpink'>Profession<span className=' text-white'>: {personalInfo.profession}</span></span>
						<span className=' text-hotpink'>Interest<span className=' text-white'>: {personalInfo.interest}</span></span>
						&nbsp;
						<span className=' text-hotpink'>University<span className=' text-white'>: {personalInfo.univ}</span></span>
						<span className=' text-hotpink'>Degree<span className=' text-white'>: {personalInfo.degree}</span></span>
						<span className=' text-hotpink'>Year<span className=' text-white'>: {univYear()}</span></span>
						&nbsp;
						<span className=' text-hotpink'>IDE<span className=' text-white'>: {personalInfo.ide}</span></span>
						<span className=' text-hotpink'>OS<span className=' text-white'>: {personalInfo.os}</span></span>
						<span className=' text-hotpink'>Version Control<span className=' text-white'>: {personalInfo.versioncontrol}</span></span>
						&nbsp;
						<div className='flex'>
							<div className=' h-9 w-6 bg-gray-800'></div>
							<div className=' h-9 w-6 bg-hotpink'></div>
							<div className=' h-9 w-6 bg-limegreen'></div>
							<div className=' h-9 w-6 bg-yellow-300'></div>
							<div className=' h-9 w-6 bg-blue-300'></div>
							<div className=' h-9 w-6 bg-purple'></div>
							<div className=' h-9 w-6 bg-turquoise'></div>
							<div className=' h-9 w-6 bg-white'></div>
						</div>
					</div>
        </div>
      {/* <Command command="help" output="Some very long text will go in here" /> */}
      {commands.map(({ command, output }, index) => (
        <Command command={command} output={output} key={index} />
      ))}
      {!loading && <Command onSubmit={(command) => addCommand(command)} />}
    </div>
  );
}
