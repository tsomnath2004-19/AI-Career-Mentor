import { useState } from "react";

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = () => {
    if (question === "") return;

    setAnswer(
      "This is a demo AI response. Later, connect this with OpenAI or Gemini API."
    );
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>AI Career Chat</h1>

      <textarea
        rows={5}
        cols={50}
        placeholder="Ask your career question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br />
      <br />

      <button onClick={askAI}>Ask AI</button>

      <br />
      <br />

      <h2>Response</h2>

      <p>{answer}</p>
    </div>
  );
}

export default Chat;