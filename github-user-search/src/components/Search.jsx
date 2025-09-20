import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const advancedUserSearch = async ({ username, location, minRepos }) => {
  const response = await axios.get('https://api.github.com/search/users', {
    params: {
      q: `${username ? `user:${username}` : ''} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>${minRepos}` : ''}`.trim(),
      per_page: 10,
    },
  });
  return response.data;
};


import { useState } from 'react';
import { advancedUserSearch } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    try {
      const data = await advancedUserSearch({ username, location, minRepos });
      setUsers(data.items);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          min="0"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={e => setMinRepos(e.target.value)}
        />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">
          Search
        </button>
      </form>
      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">Looks like we cant find the user</p>}
      <div className="mt-6">
        {users.length > 0 && (
          <ul className="space-y-4">
            {users.map(user => (
              <li key={user.id} className="flex items-center gap-4 p-2 border rounded">
                <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                <div>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700">
                    {user.login}
                  </a>
                  {/* Location and repo count require extra API calls per user */}
                </div>
              </li>
            ))}
          </ul>
        )}
        {users.length === 0 && !loading && !error && <p className="text-gray-500">No results yet.</p>}
      </div>
    </div>
  );
};

export default Search;