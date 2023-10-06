const APIURL = "https://api.github.com/users/";
const main = document.getElementById("main");



getUser("dptk2311");

async function getUser(username){  
    const resp = await fetch(APIURL + username);  
    const respData = await resp.json();  
    createUserCard(respData);  
    getRepos(username);
}

async function getRepos(username){  
    const resp = await fetch(APIURL + username + "/repos");  
    const respData = await resp.json();  
    addReposToCard(respData);
}


function createUserCard(user){  
    const cardHTML = `    
    <div class="card">      
        <div>        
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>      
        </div>      
            <div class="user-info">        
                <h2>${user.name}</h2>        
                <p>${user.bio}</p>        
                <ul class="info">          
                    <li>${user.followers}<strong>Followers</strong></li>          
                    <li>${user.following}<strong>Following</strong></li>          
                    <li>${user.public_repos}<strong>Public Repositories</strong></li>        
                </ul>        
                <div id="repos"></div>      
            </div>    
    </div>  
    `;  
    main.innerHTML = cardHTML;
}

function addReposToCard(repos){  
    const reposEl = document.getElementById("repos");  
    repos    
        .sort((a, b) => b.stargazers_count - a.stargazers_count)    
        .slice(0, 10)    
        .forEach((repo) => {      
            const repoEl = document.createElement("a");      
            repoEl.classList.add("repo");      
            repoEl.href = repo.html_url;      
            repoEl.target = "_blank";      
            repoEl.innerText = repo.name;      
            reposEl.appendChild(repoEl);    
        });
}

//Seearchbox
form.addEventListener("submit", (e) => {  
    e.preventDefault();  
    const user = search.value;  
    if (user) {    
        getUser(user);    
        updateSearchHistory(user);
        search.value = "";  
    }
});

/*function updateSearchHistory(searchValue) {  
    const searchHistoryContainer = document.getElementById("search-history");  // Create a new search history item  
    const searchHistoryItem = document.createElement("div");  searchHistoryItem.classList.add("search-history-item");  
    searchHistoryItem.innerText = searchValue;  // Add the new search history item to the container  
    searchHistoryContainer.prepend(searchHistoryItem);  // Check if there are more than 3 search history items  // If so, remove the oldest item  
    if (searchHistoryContainer.children.length > 5) {    
        searchHistoryContainer.lastChild.remove();  
    }
}*/

function updateSearchHistory(searchValue) {  
    const searchHistoryContainer = document.getElementById("search-history");  
    const searchHistoryItem = document.createElement("div");  
    searchHistoryItem.classList.add("search-history-item");  
    searchHistoryItem.innerText = searchValue;  

    // Add a timestamp to the search history item
    const timestamp = new Date().getTime();
    searchHistoryItem.dataset.timestamp = timestamp;
    
    searchHistoryContainer.prepend(searchHistoryItem);  

    // Check if there are more than 10 search history items  
    // If so, remove the oldest item  
    if (searchHistoryContainer.children.length > 10) {    
        searchHistoryContainer.lastChild.remove();  
    }
}

// Function to sort search history items by timestamp (oldest to newest)
function sortSearchItemsByTimestampAsc() {
    const searchHistoryContainer = document.getElementById("search-history");
    const searchHistoryItems = Array.from(searchHistoryContainer.children);

    searchHistoryItems.sort((a, b) => {
        const timestampA = parseInt(a.dataset.timestamp);
        const timestampB = parseInt(b.dataset.timestamp);

        return timestampA - timestampB;
    });

    searchHistoryContainer.innerHTML = "";
    searchHistoryItems.forEach((item) => {
        searchHistoryContainer.appendChild(item);
    });
}

// Function to sort search history items by timestamp (newest to oldest)
function sortSearchItemsByTimestampDesc() {
    const searchHistoryContainer = document.getElementById("search-history");
    const searchHistoryItems = Array.from(searchHistoryContainer.children);

    searchHistoryItems.sort((a, b) => {
        const timestampA = parseInt(a.dataset.timestamp);
        const timestampB = parseInt(b.dataset.timestamp);

        return timestampB - timestampA;
    });

    searchHistoryContainer.innerHTML = "";
    searchHistoryItems.forEach((item) => {
        searchHistoryContainer.appendChild(item);
    });
}

// Function to sort search history items by occurrence count (descending order)
function sortSearchItemsByOccurrenceDesc() {
    const searchHistoryContainer = document.getElementById("search-history");
    const searchHistoryItems = Array.from(searchHistoryContainer.children);

    searchHistoryItems.sort((a, b) => {
        const countA = getSearchItemOccurrenceCount(a.innerText);
        const countB = getSearchItemOccurrenceCount(b.innerText);

        return countB - countA;
    });

    searchHistoryContainer.innerHTML = "";
    searchHistoryItems.forEach((item) => {
        searchHistoryContainer.appendChild(item);
    });
}

// Helper function to get the occurrence count of a search history item
function getSearchItemOccurrenceCount(searchItem) {
    const searchHistoryContainer = document.getElementById("search-history");
    const searchHistoryItems = Array.from(searchHistoryContainer.children);

    let count = 0;
    searchHistoryItems.forEach((item) => {
        if (item.innerText === searchItem) {
            count++;
        }
    });

    return count;
}
// Sort by oldest to newest
document.getElementById("sort-oldest-btn").addEventListener("click", () => {
    sortSearchItemsByTimestampAsc();
});

// Sort by newest to oldest
document.getElementById("sort-newest-btn").addEventListener("click", () => {
    sortSearchItemsByTimestampDesc();
});

// Sort by occurrence count (descending order)
document.getElementById("sort-occurrence-btn").addEventListener("click", () => {
    sortSearchItemsByOccurrenceDesc();
});


getUser("dptk2311");


