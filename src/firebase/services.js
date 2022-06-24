import firebase, { db } from "./config";


// Lưu data vào firebase
export const addDocuments = (collection, data) => {
    const query = db.collection(collection);

    query.add({
        ...data,
        createAt: firebase.firestore.FieldValue.serverTimestamp(), // Lấy thời gian hiện tại trên firebase
    });
};