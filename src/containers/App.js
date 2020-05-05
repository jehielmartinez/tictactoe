import React from "react";
import "../styles/App.css";

function App() {
  return (
    <div className="main-container">
      <table>
        <tr>
          <td></td>
          <td class="vertical"></td>
          <td></td>
        </tr>
        <tr>
          <td class="horizontal"></td>
          <td class="vertical horizontal"></td>
          <td class="horizontal"></td>
        </tr>
        <tr>
          <td></td>
          <td class="vertical"></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
