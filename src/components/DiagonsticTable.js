import React from 'react';

const DiagnosticTable = ({ diagnosticList }) => {
  return (
    <div className="overflow-hidden shadow-md sm:rounded-lg">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Problem/Diagnosis
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Description
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody >
          {diagnosticList?.map((diagnostic, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">{diagnostic.name}</td>
              <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">{diagnostic.description}</td>
              <td className={`px-6 py-4 whitespace-normal ${diagnostic.status === 'Cured' ? 'text-green-500' : 'text-yellow-500'} font-semibold`}>{diagnostic.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



const App = ({diagnosticList}) => {
  return (
    <div className="p-4">
      <DiagnosticTable diagnosticList={diagnosticList} />
    </div>
  );
};

export default App;
