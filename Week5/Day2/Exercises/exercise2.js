

const url = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function fetchGifs() {
  try {
    // Send a GET request to the Giphy API with the specified URL
    const response = await fetch(url);

    // Check if the HTTP response status is OK (status code 200-299)
    if (!response.ok) {
      // If not OK, throw an error with the status code
      throw new Error(`Error: ${response.status}`);
    }

    // Parse the response body as JSON
    const data = await response.json();

    // Log the retrieved data (10 gifs starting from position 2)
    console.log("10 gifs starting from position 2:", data);

  } catch (error) {
    // Catch and log any errors that occur during fetch or parsing
    console.error("Caught error:", error);
  }
}

// Call the async function to execute the fetch operation
fetchGifs();