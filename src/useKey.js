import { useEffect } from "react";

export function useKey(key,action){
  // use Effect for escape key
  useEffect(() => {
    const callBa = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        // onCloseMovie();
        action()
        console.log("CLOSING..");
      }
    };

    document.addEventListener("keydown", callBa);

    return () => {
      document.removeEventListener("keydown", callBa);
    };
  }, [action,key]);

}