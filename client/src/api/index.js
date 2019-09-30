import axios from 'axios'

const api = axios.create({
   // baseURL: 'http://localhost:3000/api',
   baseURL: 'http://localhost:'+process.env.PORT+'/api',
})

export const createComment = payload => api.post(`/comment`, payload)
export const getComments = () => api.get(`/comment`)
export const updateComment = (id, payload) => api.put(`/comment/${id}`, payload)
export const deleteComment = id => api.delete(`/comment/${id}`)
export const getCommentById = id => api.get(`/comment/${id}`)

const apis = {
    createComment,
    updateComment,
    deleteComment,
    getComments,
    getCommentById,
}

export default apis