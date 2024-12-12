import Child from "./Child";

let PropsEx1 = () => {

  const obj = {
    name : "Mahesh",
    mobile : 7030116520,
    qualification : "B.Tech"
  }

  const arr = ['HTML', 'CSS', 'JS', 'ReactJs'];

  return (
    <div> 
      <h3>Props Example 1</h3>
      {/* <Child data = {obj} /> */}

      <Child data = {arr} />
      
    </div>
  )
}

export default PropsEx1;