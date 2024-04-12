const Post = require("../models/Post");

const rootPost = {

    postPost: async ({ input }) => {
        try {
          const post = await Post.create(input)
          return post;
        } catch (error) {
            console.log(error)
            throw new Error(`Error creating post: ${error.post}`)
        }
    },
    getAllPost: async () => {
        try{
            const post = await Post.findAll()
            return post
        } catch (error) {
            console.log(error)
            throw new Error(`Error fetching post: ${error.post}`)
          }
    },
    getIdPost : async ( {id} ) => {
        try{
            const post = await Post.findByPk(id)
            if(!post) return new Error(`No post exists with id ${id}`)

            return post
        } catch (error) {
            console.log(error)
            throw new Error(`Error fetching post: ${error.post}`)
        }
    },
    putPost : async ( {id, input} ) => {
        try{
            const post = await Post.findByPk(id)
            if(!post) return new Error(`No post exists with id ${id}`)
            await post.update(input)
            return post
        } catch (error) {
            console.log(error)
            throw new Error(`Error fetching post: ${error.post}`)
        }
    },
    deletePost : async ( {id} ) => {
        try{
            const post = await Post.findByPk(id)
            if(!post) return new Error(`No post exists with id ${id}`)
            await post.destroy()
            return "This Post is Deleted"
        } catch (error) {
            console.log(error)
            throw new Error(`Error fetching post: ${error.post}`)
        }
    }


}

module.exports = rootPost

