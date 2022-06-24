import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export default function useFirestore(collection, condition) {
  const [documents, setDocuments] = useState([]);
  // Convert data firebase => array js
  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createAt");

    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(documents);
    });
    return unsubscribe;
  }, [collection, condition]);

  return documents;
}
