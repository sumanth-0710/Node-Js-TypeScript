export async function fetchData(): Promise<any> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
}

// Call the function and log the result
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
  });
