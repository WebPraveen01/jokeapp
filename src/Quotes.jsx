import { useState, useEffect } from "react";
import './Quotes.css';

export default function Quotes() {

    const [randomJoke, setRandomJoke] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchJoke = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                'https://official-joke-api.appspot.com/random_joke'
            );

            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }

            const data = await response.json();
            setRandomJoke(data);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className="wrapper">

            <h1>Random Joke</h1>

            <p>Click the button to fetch a fresh one.</p>

            <button
                type="button"
                onClick={fetchJoke}
                disabled={loading}
            >
                {loading ? "Fetching..." : "Fetch joke"}
            </button>

            {loading && <p>Fetching...</p>}

            {randomJoke && (
                <div>
                    <p>{randomJoke.setup}</p>
                    <p>{randomJoke.punchline}</p>
                </div>
            )}

        </div>
    );
}
