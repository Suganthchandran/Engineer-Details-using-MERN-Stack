import React, { useState, useEffect } from 'react';

const SearchResult = ({ query }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const res = await fetch(`http://localhost:5000/search?query=${query}`);
                const data = await res.json();
                setResults(data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        if (query) {
            fetchSearchResults();
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <ul>
                {results.map((user) => (
                    <li key={user._id}>
                        <div>
                            <strong>Name:</strong> {user.name}<br />
                            <strong>Email:</strong> {user.email}<br />
                            <strong>Phone:</strong> {user.phone}<br />
                            {/* Add more fields as needed */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResult;
