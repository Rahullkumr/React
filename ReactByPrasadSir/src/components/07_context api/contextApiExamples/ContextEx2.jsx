import React, { useContext } from 'react'
import { context } from '../AppContext'

const ContextEx2 = () => {
    let data = useContext(context)
    console.log(data);
    
  return (
    <div className="flex flex-col w-70%">
      <div className="w-6/12  border border-slate-200 rounded-xl overflow-x-auto">
        <table className="w-full divide-y divide-slate-200">
          <thead className="bg-slate-400 text-slate-200 font-bold">
            <tr>
              <th className="px-4 py-2 text-start">Name</th>
              <th className="px-4 py-2 text-start">Age</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
            {Array.isArray(data) > 0 &&
              data.map((val, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-100 cursor-pointer odd:bg-white even:bg-slate-50"
                >
                  <td className="px-4 py-2">{val.name}</td>
                  <td className="px-4 py-2">{val.age}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContextEx2
