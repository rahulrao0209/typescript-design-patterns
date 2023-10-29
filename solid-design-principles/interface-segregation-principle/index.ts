/**
 * Interface segregation principle.
 * No client should be forced to depend on interfaces they
 * do not use.
 *
 * In layman's terms, do not add additional functionality to
 * an existing interface by adding new methods, instead create
 * a new interface.
 */

/**
 * Example:
 * Write a program modelling a blog-website where different
 * functionalities related to blogs will be available based
 * on the type of user.
 *
 * Functions
 * 1. Create a post. (Only admin user)
 * 2. Comment on a post. (Both admin and regular user)
 * 3. Share a post. (Both admin and regular user)
 *
 * Write code in a way that it adheres to the Interface segregation principle.
 * and other solid design principles.
 *
 * Solution:
 * The solution implemented below, implements the required functionality by adhering
 * to the Interface segregation principle (ISP). The solution divides or segregates the available
 * features of creating, commenting and sharing posts into small and separate
 * interfaces rather than combining all the features into a single interface. This allows
 * the different type of users (admin and regular users here) to only implement the features
 * they need.
 */

interface Post {
  title: string;
  content: string;
}

interface Comment {
  username: string;
  content: string;
}

interface CreatePost {
  create(post: Post): void;
}

interface CommentPost {
  comment(comment: Comment): void;
}

interface SharePost {
  share(post: Post): void;
}

class AdminUser implements CreatePost, CommentPost, SharePost {
  create(post: Post): void {
    console.log(`Created post with title: ${post.title}`);
  }

  comment(comment: Comment): void {
    console.log(`Added comment by user ${comment.username}`);
  }

  share(post: Post): void {
    console.log(`Shared post with title: ${post.title}`);
  }
}

class RegularUser implements CommentPost, SharePost {
  comment(comment: Comment): void {
    console.log(`Added comment by user ${comment.username}`);
  }

  share(post: Post): void {
    console.log(`Shared post with title: ${post.title}`);
  }
}
