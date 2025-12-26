import { useState } from "react";
import { db, auth, provider } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import CommentList from "./CommentList";


export default function CommentForm({ user }) {
  const [text, setText] = useState("");

  const sendComment = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    let currentUser = user;

    // Se não estiver logado → faz login agora
    if (!currentUser) {
      const result = await signInWithPopup(auth, provider);
      currentUser = result.user;
    }

    // Agora pode enviar o comentário
    await addDoc(collection(db, "comments"), {
      text,
      userId: currentUser.uid,
      username: currentUser.displayName,
      avatar: currentUser.photoURL,
      timestamp: serverTimestamp(),
    });

    setText("");
  };

  return (
    <div class="form-container">
      <form class="form" onSubmit={sendComment}>
        <div class="form-group">
          <label for="textarea">Deixe um comentário</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea" value={text}
            onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <button type="submit" class="form-submit-btn">Enviar</button>
      </form>

      <div className="h-[110px] overflow-y-scroll scrollbar-width">
        <CommentList user={user} />
      </div>
    </div>
  );
}
