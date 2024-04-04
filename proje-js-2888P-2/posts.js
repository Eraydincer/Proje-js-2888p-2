$(document).ready(async function () {
   const postID = window.location.search.split('=')[1];
   const commentsURL = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`;

   try {
       const response = await fetch(commentsURL);
       const posts = await response.json();
       console.log(posts)
       
       const postsContainer = $('#posts-container');

       posts.forEach(post => {
           const postHTML = `
          <div class="col-12  container postDetails mt-5 mb-5">
          <div class="card w-100 container">
          <h4>${post.name}</h4>
          <h6>${post.email}</h6>
          <p ><i class="fa-solid fa-comment"></i> ${post.body}</p>
          <a href="index.html" class="text-decoration-none" style="color:black;"> kullanıcıya Dön</a>
          </div>
          </div>
         
           `;
           postsContainer.append(postHTML);
       });
   } catch (error) {
       console.error('hata :', error);
   }
});
