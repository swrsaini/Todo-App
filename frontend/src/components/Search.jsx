import axios from "axios";
import { useState, useEffect } from "react";

export function Search({todoRef}) {
    const [search, setSearch] = useState(""); // State for search input
    const [results, setResults] = useState([]); // Initialize results as an empty array

    function highlightDiv(id){
        if(todoRef.current[id]){
            todoRef.current[id].scrollIntoView({
                behaviour: 'smooth',
                block: 'start',
            })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            if (search.trim() === "") {
                setResults([]); // Clear results if search input is empty
                return;
            }

            try {
                const response = await axios.get('http://localhost:3000/search-todos', {
                    params: {search: search}// Pass search query as a parameter
                });
                console.log(response)
                setResults(response.data); // Update results with API response
            } catch (error) {
                console.error("Error fetching search results:", error);
                setResults([]); // Reset results on error
            }
        };

        const debounceTimeout = setTimeout(fetchData, 1000); // Debounce API call

        return () => clearTimeout(debounceTimeout); // Cleanup timeout
    }, [search]); // Run effect when search changes

    return (
        <div>
            <input
                className="py-2 px-4 text-sm font-medium m-1"
                type="text"
                placeholder="search"
                onChange={(e) => setSearch(e.target.value)} // Update search state
            />
            <div className="flex-col justify-center items-center">
                {results.length > 0 ? (
                    results.map((item, index) => (
                        <div className="hover:cursor-pointer hover:bg-gray-900  " onClick={()=> highlightDiv(item._id)} key={index}>{item.title}</div>
                    ))
                ) : null}
            </div>
        </div>
    );
}
