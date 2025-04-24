export const postsAPI = {
    fetchPosts() {
        try {
            return fetch(`https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc&_limit=3`)
                .then(response => response.json())
                .then(posts => posts)
        } catch (ex) {
            console.log(ex)
        }
    },
    fetchFreshPosts(limit = 3) {
        try {
            return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`)
                .then(response => response.json())
                .then(posts => posts)
        } catch (ex) {
            console.log(ex)
        }
    },
    fetchById(id) {
        try {
            if (!id) {
                throw new Error('Id is broken')
            }

            return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => response.json())
                .then(post => post)
        } catch (ex) {
            console.log(ex)
        }
    }
}