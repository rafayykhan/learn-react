import { useState } from "react";

function App() {
  // useState lets us store the current background color in React state.
  // We use a hook here (instead of a plain variable) because we need the UI
  // to re-render whenever the color changes — plain variables don't trigger
  // re-renders. `color` holds the value; `setColor` updates it and re-renders.
  const [color, setColor] = useState("olive");
  console.log(color);
  return (
    <>
      {/* The background color is driven by the `color` state,
          so it re-paints automatically whenever state changes. */}
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {/* Each button calls setColor with its color, which updates
                state and re-renders App so the background reflects the choice. */}
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "red" }}
            >
              {" "}
              red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "blue" }}
            >
              {" "}
              blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "yellow" }}
            >
              {" "}
              yellow
            </button>
            <button
              onClick={() => setColor("cyan")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "cyan" }}
            >
              {" "}
              cyan
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "green" }}
            >
              {" "}
              green
            </button>
            <button
              onClick={() => setColor("skyblue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "skyblue" }}
            >
              {" "}
              sky blue
            </button>
            <button
              onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "brown" }}
            >
              {" "}
              brown
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
