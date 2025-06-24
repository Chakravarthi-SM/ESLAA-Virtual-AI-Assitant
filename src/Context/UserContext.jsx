import React, { createContext, useEffect, useState } from "react";
import run from "../gemini";

export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [speaking, setSpeaking] = useState(false);

  const [prompt, setPrompt] = useState("listening...");
  const [response, setResponse] = useState(false);
  const [speechEnd, setSpeechEnd] = useState(false);

  useEffect(() => {
    if (speechEnd === true) {
      setSpeaking(false);
      setSpeechEnd(false); // Reset for next speech
    }
  }, [speechEnd]);

  function speak(text) {
    console.log("Attempting to speak:", text);

    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "en-IN";

    text_speak.onstart = () => console.log("✓ Speech started");
    text_speak.onend = () => {
      console.log("✓ Speech ended");
      setSpeechEnd(true);
    };
    text_speak.onerror = (e) => console.error("✗ Speech error:", e);

    window.speechSynthesis.speak(text_speak);
  }

  const aiResponse = async (prompt) => {
    try {
      let text = await run(prompt);
      let newText = text
        .split("**")
        .join("")
        .split("*")
        .join("")
        .replace(/Google/g, "Chakravarthi")
        .replace(/google/g, "Chakravarthi");
      console.log("AI Response:", text);
      setPrompt(newText);
      speak(newText); // Optional: speak the AI response
      setResponse(true);
      // setTimeout(() => {
      //   setSpeaking(false);
      // }, 5000);
      // {
      //   if (speechEnd == true) {
      //     setSpeaking(false);
      //   }
      // }
    } catch (error) {
      console.error("Error getting AI response:", error);
    }
  };

  let speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new speechRecognition();

  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;
    setPrompt(transcript);
    console.log(transcript);
    // aiResponse(transcript);
    takeCommand(transcript.toLowerCase());
  };

  const takeCommand = (command) => {
    if (command.includes("open") && command.includes("youtube")) {
      window.open("https://www.youtube.com/", "_blank");
      speak("opening youtube");
      setResponse(true);
      setPrompt("Opening Youtube...");
    } else if (command.includes("open") && command.includes("google")) {
      window.open("https://www.google.com/", "_blank");
      speak("opening Google");
      setResponse(true);
      setPrompt("Opening Google...");
    } else if (command.includes("open") && command.includes("instagram")) {
      window.open("https://www.instagram.com/", "_blank");
      speak("opening instagram");
      setResponse(true);
      setPrompt("Opening Instagram...");
    } else if (command.includes("time")) {
      let time = new Date().toLocaleDateString(undefined, {
        hour: "numeric",
        minute: "numeric",
      });
      speak(time);
      setResponse(true);
      setPrompt(time);
    } else if (command.includes("date")) {
      let date = new Date().toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
      });
      speak(date);
      setResponse(true);
      setPrompt(date);
    } else {
      aiResponse(command);
    }
  };

  let value = {
    recognition,
    speak,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    response,
    setResponse,
  };

  return (
    <>
      <div>
        <dataContext.Provider value={value}>{children}</dataContext.Provider>
      </div>
      ;
    </>
  );
};

export default UserContext;
