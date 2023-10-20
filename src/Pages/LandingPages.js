import React, { useEffect, useRef, useState } from "react";
import Typewriter from "./TypeWriter";
import ThemeSwitcher from "./ThemeSwitcher";

function LandingPages() {
  const [inputString, setInputString] = useState('');
  const [res, setRes] = useState([]);
  const paragraphs = [
    " OpenAI is an artificial intelligence research organization and company that focuses on developing advanced AI technologies. It was founded in December 2015 by Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, Wojciech Zaremba, and John Schulman.",
    "   OpenAI's mission is to ensure that artificial general intelligence(AGI), which refers to highly autonomous systems that outperformhumans at most economically valuable work, benefits all of humanity.OpenAI conducts research in a variety of AI-related fields, includingnatural language processing, reinforcement learning, computer vision,and more. The organization has been responsible for the development of several prominent AI models, including GPT-3 (Generative Pre-trained Transformer 3) and GPT-2.",
    "This is the third paragraph...",
    // Add more paragraphs as needed
  ];

  useEffect(() => {
    console.log(res);
  }, [res]);

  const stringsplit=()=>{
    const substrings = inputString.split(/\n|<p>/);
    setRes(substrings);
  }

  // const addStringToArray = (newString) => {



  //   setRes([...res, newString]);
  // };
  const [inputSearch, setInputSearch] = useState("");
  async function sendRequest(event) {
    try {
      const response = await fetch(
        "https://8wywus1hvf.execute-api.ap-south-1.amazonaws.com/aihelper",
        {
          method: "POST", // Use 'POST' or 'GET' depending on your API
          body: JSON.stringify({ input_text: inputSearch }), // Send user input to the API
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      // Assuming the API returns JSON data
      setInputString(data.body.generated_text);
      stringsplit()
      // addStringToArray(data.body.generated_text);
      console.log(data.body.generated_text);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  }

  const textareaRef = useRef(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <div className="">
      <div className="logo-container">
        <img src="/aihelper-dark.png" alt="" />
      </div>
      <div class="chatgpt-input-container">
        <textarea
          ref={textareaRef}
          className="chatgpt-input"
          placeholder="Ask ChatGPT..."
          onInput={(e) => setInputSearch(e.target.value)}
          onChange={(e) => setInputSearch(e.target.value)}
        ></textarea>
        <button class="chatgpt-submit-button" onClick={() => sendRequest()}>
          Submit
        </button>
      </div>

      <div className="result-div">
        <Typewriter paragraphs={res} />

        <div className="textbox-container">
          <div className="text-field-heading">
            <span>heading</span>
            <span>Copy Code</span>
          </div>
          <div className="text-field-result">
            <span># Taking user input</span>
            <span>user_name = input("Please enter your name: ")</span>
            <span># Displaying a greeting</span>
            <span>
              print("Hello, " + user_name + "! Welcome to our program.")
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPages;
