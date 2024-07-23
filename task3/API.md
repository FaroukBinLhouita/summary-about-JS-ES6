<!-- 111111111 -->

XHR

The xmlhttprequest (xhr) object is the original way to interact with servers in JavaScript. It's more verbose than modern alternatives but still widely used

first we create a new request
then using open method and it takes three arguments
then create a method and use it in on reader state
then using send method

Example:
function fetchDataUsingXHR() {
const xhr = new XMLHttpRequest();
xhr.open("GET", "URL", true);
xhr.onreadystatechange = function () {
if (xhr.readyState === 4 && xhr.status === 200) {
const data = JSON.parse(xhr.responseText);
}
};
xhr.send();
}

fetchDataUsingXHR();

<!-- 22222222 -->

FETCH

The Fetch API is a modern interface that allows you to make network requests similar to XMLHttpRequest and it is more powerful and flexible
and we can use await with async function and it's better

first we using fetch with url
then using json the resolve the data

Example:
function fetchDataUsingFetch() {
fetch("URL")
.then(response => response.json())
.then(data => data)
}

fetchDataUsingFetch();

<!-- 33333333 -->

Axios is a third-party library

First install it using npm or using <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

Example:
function fetchDataUsingAxios() {
axios.get("URL")
.then(response => response.data)
}

fetchDataUsingAxios()
