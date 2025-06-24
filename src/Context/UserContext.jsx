import React, { createContext, useEffect, useState } from "react";
import run from "../gemini";

export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [speaking, setSpeaking] = useState(false);
  const [prompt, setPrompt] = useState("listening...");
  const [response, setResponse] = useState(false);
  const [speechEnd, setSpeechEnd] = useState(false);
  const [recognition, setRecognition] = useState(null); // 👈

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recog = new SpeechRecognition();
        recog.onresult = (e) => {
          let currentIndex = e.resultIndex;
          let transcript = e.results[currentIndex][0].transcript;
          setPrompt(transcript);
          console.log(transcript);
          takeCommand(transcript.toLowerCase());
        };
        setRecognition(recog); // ✅ set after ready
      } else {
        console.warn("Speech Recognition not supported.");
      }
    }
  }, []); // Run once on mount

  useEffect(() => {
    if (speechEnd === true) {
      setSpeaking(false);
      setSpeechEnd(false);
    }
  }, [speechEnd]);

  function speak(text) {
    // console.log("Attempting to speak:", text);
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "en-IN";

    text_speak.onstart = () => console.log("✓ Speech started");
    text_speak.onend = () => {
      // console.log("✓ Speech ended");
      setSpeechEnd(false);
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
      // console.log("AI Response:", text);
      setPrompt(newText);
      speak(newText);
      setResponse(true);
    } catch (error) {
      console.error("Error getting AI response:", error);
    }
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
      let time = new Date().toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "numeric",
      });
      speak(time);
      setResponse(true);
      setPrompt(time);
    } else if (command.includes("date")) {
      let date = new Date().toLocaleDateString("en-IN", {
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

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export default UserContext;
