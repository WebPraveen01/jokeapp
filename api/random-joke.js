export default async function handler(request, response) {
    if (request.method !== 'GET') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const jokeResponse = await fetch(
            'https://official-joke-api.appspot.com/random_joke'
        );

        if (!jokeResponse.ok) {
            return response.status(jokeResponse.status).json({
                error: 'Could not fetch a joke. Try again.'
            });
        }

        const joke = await jokeResponse.json();
        return response.status(200).json(joke);
    } catch (error) {
        return response.status(500).json({
            error: 'Could not fetch a joke. Try again.'
        });
    }
}
