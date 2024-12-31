import React, { useRef } from "react";

const UseRefNotes = () => {
  const headingRef = useRef();

  const handleChangeContent = () => {
    headingRef.current.textContent = "useRef kam kar raha hai...!!!";
    console.log(headingRef.current.textContent);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        10. useRef()
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          It is one of the hooks in React which can be used to target the
          elements.
        </li>
        <li>
          <strong>useRef() hook is used in three steps:</strong>
          <ol className="list-decimal pl-6">
            <li className="mb-2">
              <strong>Declare:</strong>
              <pre className="bg-gray-200 p-4 rounded-md">
                <code>{`let headingRef = useRef();`}</code>
              </pre>
            </li>
            <li className="mb-2">
              <strong>Apply the reference:</strong>
              <pre className="bg-gray-200 p-4 rounded-md">
                <code>{`<h1 ref={headingRef}>`}</code>
              </pre>
            </li>
            <li>
              <strong>Using declared ref:</strong>
              <p className="mb-2">
                We can use <code className="text-blue-600">ref</code> passed to
                the element throughout the component to modify the current
                element.
              </p>
              <pre className="bg-gray-200 p-4 rounded-md">
                <code>
                  {`headingRef.current.textContent = 'useRef kam kar raha hai...!!!';
console.log(headingRef.current.textContent);`}
                </code>
              </pre>
            </li>
          </ol>
        </li>
      </ul>
      <p className="text-green-600 font-semibold mb-4">
        Using too many useRef() hooks is not recommended because useRef() hook
        skips the virtual DOM and directly makes changes in the real DOM.
      </p>
      <ul className="list-disc pl-6 mt-6">
        <li className="mb-2">
          If we are using useRef() hook in any component, that component gets
          converted from a controlled to an uncontrolled component.
        </li>
        <li className="mb-2">
          If our component is an uncontrolled component, it can cause
          performance issues, slow down the application, and there are chances
          that using too many refs may crash your application.
        </li>
        <li>
          <code className="text-blue-600">refs</code> should also be unique like{" "}
          <code className="text-blue-600">ids</code>, and we should not use the
          same refs for multiple elements.
        </li>
      </ul>
    </div>
  );
};

export default UseRefNotes;
