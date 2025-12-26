import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 z-10">
      {/* Formulário só pede login quando for necessário */}
      <div>
        <CommentForm user={user} />
      </div>
      

      {/* Lista de comentários é pública */}
      {/* <div className="h-[110px] overflow-y-scroll">
        <CommentList user={user} />
      </div> */}
      
    </div>
  );
}
