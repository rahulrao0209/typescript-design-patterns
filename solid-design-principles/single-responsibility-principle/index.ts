/**
 * Single responsibility principle
 * A class should have only one reason to change.
 */

/**
 * In the below example both the BlogPost and DisplayBlogPost classes
 * follow the single responsibility principle.
 * The BlogPost class only has the responsibilty of managing a BlogPost. (creating, updating and deleting blog posts.)
 * and the DisplayBlogPost class is only concerned with displaying the BlogPost.
 *
 * Such a separation of concerns improves maintainability of the code, and makes it easy to understand and reason about.
 */
class BlogPost {
  #title: string;
  #content: string;

  constructor(title: string, content: string) {
    this.#title = title;
    this.#content = content;
  }

  createPost(): void {
    console.log("Creating post.");
  }

  updatePost(): void {
    console.log("Updating post.");
  }

  deletePost(): void {
    console.log("Deleting post.");
  }

  get title(): string {
    return this.#title;
  }

  get content(): string {
    return this.#content;
  }
}

class DisplayBlogPost {
  #blogPost: BlogPost;

  constructor(blogPost: BlogPost) {
    this.#blogPost = blogPost;
  }

  displayPost() {
    return `
        ${this.#blogPost.title}
        ${this.#blogPost.content}
    `;
  }
}

const blogPost = new BlogPost("My first blog", "This is my first blog");
const displayBlogPost = new DisplayBlogPost(blogPost);

console.log(displayBlogPost.displayPost());
