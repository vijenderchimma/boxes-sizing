const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <p className={`p ${className}`}>{text}</p>;
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="box-container">
      <div className="box1">
        <Box text="Small" className="paragraph" />
      </div>
      <div className="box2">
        <Box text="Medium" className="paragraph" />
      </div>
      <div className="box3">
        <Box text="Large" className="paragraph" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
