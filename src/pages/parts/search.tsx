import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
interface ComponentData  {
  [key: string]: string;
}
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<ComponentData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`https://csjo3isol4gw64twlbklytyg640zdorr.lambda-url.us-east-1.on.aws/searchmpn/${searchTerm}`);
      // console.log(res);
      if (res.status === 404) {
        setError('No results found.');
        setSearchResults([]);
      } else {
        let data = await res.json();
        data = JSON.parse(data);
        setSearchResults(data);
      }
    } catch (e) {
      setError('An error occurred while fetching the data.');
      console.log(e);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="max-w-md mx-auto mt-10" style={{marginTop:'100px',marginBottom:'100px'}}>
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search MPN"
          aria-label="Search MPN"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {Object.entries(searchResults).length > 0 ? (
        <table className="min-w-full leading-normal mt-5">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                MPN
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                URL
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(searchResults).map((result,index) => (
              <tr key={''+ result[1]}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {''+ result[1]}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <a style={{color:'blue'}} href={'/parts/' + result[1]}>View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) :null}
    </div>
  );
};

export default SearchComponent;
