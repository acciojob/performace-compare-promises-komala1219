// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here

const fetchApi = async (url) => {
  const startTime = new Date();
  await fetch(url); // replace this with your actual API call
  const endTime = new Date();
  return (endTime - startTime) / 1000; // return time taken in seconds
};

const fetchData = async () => {
  const allStart = new Date();
  const allResults = await Promise.all(apiUrls.map(fetchApi));
  const allEnd = new Date();
  const allTimeTaken = (allEnd - allStart) / 1000;

  const anyStart = new Date();
  const anyResult = await Promise.any(apiUrls.map(fetchApi));
  const anyEnd = new Date();
  const anyTimeTaken = (anyEnd - anyStart) / 1000;

  document.getElementById('output-all').innerHTML = allTimeTaken;
  document.getElementById('output-any').innerHTML = anyTimeTaken;
};
