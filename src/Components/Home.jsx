import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="MainDiv">
        <div className="LeftDiv">
          <p>Rule 1:</p>
          <input type="text" />
          <br />
          <p>Rule 2:</p>
          <input type="text" />
          <br />
          <p>Rule 3:</p>
          <input type="text" />
          <br />
          <p>Rule 4:</p>
          <input type="text" />
          <br />
          <p>Rule 5:</p>
          <input type="text" />
          <br />
        </div>
        <div className="RightDiv">
          <h3>Default Rule</h3>
          <h4>Button Name</h4>
          <input type="text" />
          <br />
          <br />
          <hr />
          Condition 1: <input type="text" />
          <br />
          Condition 2: <input type="text" />
          <br />
          Condition 3: <input type="text" />
          <br />
          Condition 4: <input type="text" />
          <br />
          Condition 5: <input type="text" />
          <br />
          Condition 6: <input type="text" />
          <br />
          Condition 7: <input type="text" />
          <br />
          Condition 8: <input type="text" />
          <br />
          <hr />
          <p>Perform the following actions:</p>
          Action 1: <input type="text" />
          <br />
          Action 2: <input type="text" />
          <br />
          Action 3: <input type="text" />
          <br />
          Action 4: <input type="text" />
          <br />
          Action 5: <input type="text" />
          <br />
          <div>
            <button>SAVE</button>
            <button>SUBMIT</button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};
