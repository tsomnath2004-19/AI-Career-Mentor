function Roadmap() {
  const topics = [
    "Python Basics",
    "Variables",
    "If Else",
    "Loops",
    "Functions",
    "OOP",
    "SQL",
    "Pandas",
    "NumPy",
    "FastAPI"
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Learning Roadmap</h1>

      {topics.map((topic, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
          }}
        >
          {index + 1}. {topic}
        </div>
      ))}
    </div>
  );
}

export default Roadmap;