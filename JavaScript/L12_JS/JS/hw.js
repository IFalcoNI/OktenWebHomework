// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((posts) => {
//     let postsContainer = document.createElement("div");
//     postsContainer.setAttribute("class", "postsContainer");
//     for (const itarator of posts) {
//       let post = document.createElement("div");
//       post.setAttribute("class", "post");
//       post.innerHTML = `
//         <div class="Id"> ${itarator.id}</div>
//         <h2 class="Title"> ${itarator.title}</h2>
//         <div class="Body"> ${itarator.body}</div>
//       `;
//       postsContainer.appendChild(post);
//       document.body.appendChild(postsContainer);
//     }
//   });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    return response.json();
  })
  .then((comments) => {
    let commentsContainer = document.createElement("div");
    commentsContainer.setAttribute("class", "commentsContainer");
    for (const itarator of comments) {
      let comment = document.createElement("div");
      comment.setAttribute("class", "post");
      comment.innerHTML = `
        <div class="Id"> ${itarator.id}</div>
        <h2 class="Name"> ${itarator.name}</h2>
        <h3 class="Title"> ${itarator.email}</h3>
        <div class="Body"> ${itarator.body}</div>
      `;
      commentsContainer.appendChild(comment);
      document.body.appendChild(commentsContainer);
    }
  });
