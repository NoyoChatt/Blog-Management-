import { firestore } from "../firebase/firebase.js";
import { collection, addDoc, getDocs, doc, getDoc, deleteDoc } from "firebase/firestore";

const blogsCollection = collection(firestore, "blogs");

export const getBlogs = async () => {
    try {
        const blogs = await getDocs(blogsCollection);
        return blogs.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getBlog = async (id) => {
    try {
        const blog = await getDoc(doc(firestore, "blogs", id));
        return blog;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const createBlog = async (blog) => {
    try {
        const newBlog = await addDoc(blogsCollection, blog);
        return newBlog;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteBlog = async (id) => {
    try {
        await deleteDoc(doc(firestore, "blogs", id));
    } catch (error) {
        console.log(error);
        return error;
    }
}