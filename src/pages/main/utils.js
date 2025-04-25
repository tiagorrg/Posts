export const filterPosts = (posts, input) => {
    return posts.filter((post) => post.title.includes(input))
}