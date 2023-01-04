const Form = (props) => {
  if (props.value === "select") return;
  return <div>Value = {props.value}</div>;
};

export default Form;
