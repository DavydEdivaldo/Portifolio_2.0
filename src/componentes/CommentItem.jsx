import { db } from "./firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default function CommentItem({ comment, user }) {
    const canDelete = user && user.uid === comment.userId;

    const deleteComment = async () => {
        await deleteDoc(doc(db, "comments", comment.id));
    };

    return (
        <div style={{
            width: 300,
            padding: 10,
            background: "#212121",
            border: "1px solid #ddd",
            borderRadius: 6,
            marginBottom: 10,
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                    src={comment.avatar}
                    alt="avatar"
                    style={{ width: 35, borderRadius: "50%" }}
                />
                <strong>{comment.username}</strong>
            </div>

            <p>{comment.text}</p>

            {canDelete && (
                <button
                    onClick={deleteComment}
                    style={{ color: "red", background: "none", border: "none" }}
                >
                    Deletar
                </button>
            )}
        </div>
    );
}
