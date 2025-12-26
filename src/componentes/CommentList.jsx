import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import CommentItem from "./CommentItem";

export default function CommentList({ user }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      orderBy("timestamp", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })));
    });

    return () => unsub();
  }, []);

  return (
    <div>
      {comments.map((c) => (
        <CommentItem key={c.id} comment={c} user={user} />
      ))}
    </div>
  );
}
