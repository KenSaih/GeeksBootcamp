
async function fetchStarship() {
  try {
    // Send a GET request to the API
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    
    // Check if the HTTP status is OK (status code 200-299)
    if (!response.ok) {
      // If response status is not OK, throw an error with the status code
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response body as JSON
    const objStarWars = await response.json();

    // Log the 'result' property from the JSON response
    console.log(objStarWars.result);

  } catch (error) {
    // Catch and log any errors that occur during fetch or JSON parsing
    console.error("Error during fetch:", error);
  }
}

// Call the async function to perform the request
fetchStarship();