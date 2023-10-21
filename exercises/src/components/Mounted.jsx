import { useRef, useEffect } from "react";

export const Mounted = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("The component is mounted");
    } 
  }, []);

  return <div>Hello World</div>;
};
