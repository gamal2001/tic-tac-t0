import "./Square.css";

function Square({ value }) {
  function handelClick() {
    console.log("clicked");
  }
  return (
    <button className="square" onClick={handelClick}>
      {value}
    </button>
  );
}

export default Square;
