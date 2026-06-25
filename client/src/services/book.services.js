import api from './api';

const getAllBooks = async (filters = {}) => {
  try {
    const response = await api.get('/books', { params: filters });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching books.';
  }
};

const getMyBooks = async () => {
  try {
    const response = await api.get('/admin/books');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching your books.';
  }
};

const addBook = async (bookData) => {
  try {
    const response = await api.post('/admin/books', bookData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error adding book.';
  }
};

const updateBook = async (bookId, bookData) => {
  try {
    const response = await api.put(`/admin/books/${bookId}`, bookData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error updating book.';
  }
};

const deleteBook = async (bookId) => {
  try {
    const response = await api.delete(`/admin/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error deleting book.';
  }
};

const bookService = {
  getAllBooks,
  getMyBooks,
  addBook,
  updateBook,
  deleteBook,
};

export default bookService;