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

function updateSearchHistory(searchValue) {  
    const searchHistoryContainer = document.getElementById("search-history");  // Create a new search history item  
    const searchHistoryItem = document.createElement("div");  searchHistoryItem.classList.add("search-history-item");  
    searchHistoryItem.innerText = searchValue;  // Add the new search history item to the container  
    searchHistoryContainer.prepend(searchHistoryItem);  // Check if there are more than 3 search history items  // If so, remove the oldest item  
    if (searchHistoryContainer.children.length > 3) {    
        searchHistoryContainer.lastChild.remove();  
    }
}


getUser("dptk2311");


