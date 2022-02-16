let endpoint = "https://jsonplaceholder.typicode.com/users";

fetch(endpoint)
  .then((response) => response.json())
  .then((users) => {
    let mainBlock = document.createElement("div");
    mainBlock.setAttribute("class", "main-block");

    for (const user of users) {
      let userBlock = document.createElement("div");
      userBlock.setAttribute("class", "user-block");
      let header = document.createElement("div");
      header.setAttribute("class", "header");
      header.innerHTML = `
      <h4>ID: ${user.id}</h4>
      <h3>${user.name}</h3>
      `;
      let url = document.createElement("a");
      url.href = `/HTML/user-details.html/${user.id}`;
      url.innerText = "Details";
      userBlock.append(header, url);
      mainBlock.appendChild(userBlock);
    }
    document.body.appendChild(mainBlock);
  });
