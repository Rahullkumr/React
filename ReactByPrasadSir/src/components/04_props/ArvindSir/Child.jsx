let Child = (props) => {

  console.log(props);

  // const {name, mobile, qualification} = props.data;

  const [a, b, c, d] = props.data;

  return (
    <div>
      {<li>{a}</li>}
      {<li>{b}</li>}
      {<li>{c}</li>}
      {<li>{d}</li>}
    </div>
  )
}

export default Child;