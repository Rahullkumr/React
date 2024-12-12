let CounterProps = (props) => {

  console.log(props.children);

  return (
    <div className="flex justify-center items-center mt-8">
      <button
        onClick={() => {
          props.data();
        }}
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
      >
        Increment
      </button>
    </div>
  );
};

export default CounterProps;
