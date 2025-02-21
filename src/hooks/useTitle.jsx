import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / MovieMate`;
  }, [title]);
  return null;
};
