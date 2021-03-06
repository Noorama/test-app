import axios from 'axios'

const api = axios.create({
   baseURL: 'http://localhost:4000/api',
})

export const createComment = payload => api.post(`/comment`, payload)
export const getComments = () => api.get(`/comment`)
export const updateComment = (id, payload) => api.put(`/comment/${id}`, payload)
export const deleteComment = id => api.delete(`/comment/${id}`)
export const getCommentById = id => api.get(`/comment/${id}`)

export const createCount = () => api.post(`/count`)
export const getCountSum = () => api.get(`/count`)


const apis = {
    createComment,
    updateComment,
    deleteComment,
    getComments,
    getCommentById,
    createCount,
    getCountSum,
}

export default apis