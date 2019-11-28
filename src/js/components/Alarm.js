function Alarm(props) {
  return (
    <div style={{visibility: props.visible ? "visible" : "hidden"}} className="alarm">{props.text}</div>
  );
}

export {Alarm};
