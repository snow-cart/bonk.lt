//TODO: rewrite

// import db from '../data/articles.json';

// function loadContent() {

// // Define the articles variable in the global scope
// var articles;

// // Fetch articles.json using Fetch API
// fetch(db)
//   .then((response) => response.json())
//   .then((data) => {
//     articles = data;
//     setupSearch();
//   })
//   .catch((error) => console.error(db, error));

// function setupSearch() {
//   // Set up event listener after the DOM is loaded
//   document
//     .getElementById("search-form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault(); // Prevent default form submission

//       // Get the search query entered by the user
//       var searchQuery = document
//         .getElementById("search-input")
//         .value.trim()
//         .toLowerCase();

//       // Perform the search
//       searchArticles(searchQuery);
//     });
// }

// // Define the searchArticles and displaySearchResults functions here
// function searchArticles(query) {
//   // Here you can use the articles array since it's now available
//   var matchingArticles = articles.filter(function (article) {
//     // Search by title, author, or content
//     return (
//       article.title.toLowerCase().includes(query) ||
//       article.author.toLowerCase().includes(query) ||
//       article.content.toLowerCase().includes(query)
//     );
//   });

//   // Sort the matching articles by title
//   matchingArticles.sort(function (a, b) {
//     // Convert titles to lowercase for case-insensitive sorting
//     var titleA = a.title.toLowerCase();
//     var titleB = b.title.toLowerCase();
//     if (titleA < titleB) return -1;
//     if (titleA > titleB) return 1;
//     return 0;
//   });

//   displaySearchResults(matchingArticles);

// }

// function displaySearchResults(results) {
//   var searchResultsContainer = document.getElementById("search-results");
//   searchResultsContainer.innerHTML = "";

//   if (results.length === 0) {
//     searchResultsContainer.innerHTML = "<p>No matching articles found.</p>";
//   } else {
//     results.forEach(function (article) {
//       var articleElement = document.createElement("div");
//       articleElement.innerHTML = `
//         <div class="search-result">
//           <div class="contTitle">${article.title}</div>
//           <div class="contAuthor">${article.author}</div>
//           <div class="contContent">${article.content.replace(/\n/g,"<br>")}</div>
//           <audio controls>
//             <source src="/skautaisearch/audio/${encodeURIComponent(article.fileName)}.mp3" type="audio/mpeg">
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       `;
//       searchResultsContainer.appendChild(articleElement);
//     });
//   }
// }
// }

// export default loadContent;