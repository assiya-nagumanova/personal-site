import { useState, useEffect, useCallback } from "react";

export function useLocalStorage(key, initialValue) {
  const isWindow = typeof window !== "undefined";

  const [state, setState] = useState(() => {
    if (!isWindow) return typeof initialValue === "function" ? initialValue() : initialValue;
    try {
      const raw = window.localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : (typeof initialValue === "function" ? initialValue() : initialValue);
    } catch (err) {
      console.warn("useLocalStorage read error:", err);
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  });

  const setValue = useCallback((valueOrUpdater) => {
    try {
      setState(prev => {
        const newValue = typeof valueOrUpdater === "function" ? valueOrUpdater(prev) : valueOrUpdater;
        if (isWindow) window.localStorage.setItem(key, JSON.stringify(newValue));
        return newValue;
      });
    } catch (err) {
      console.warn("useLocalStorage write error:", err);
    }
  }, [key, isWindow]);

  const remove = useCallback(() => {
    try {
      if (isWindow) window.localStorage.removeItem(key);
      setState(undefined);
    } catch (err) {
      console.warn("useLocalStorage remove error:", err);
    }
  }, [key, isWindow]);

  useEffect(() => {
    if (!isWindow) return;
    const handle = (e) => {
      if (e.key !== key) return;
      try {
        setState(e.newValue ? JSON.parse(e.newValue) : undefined);
      } catch (err) {
        console.warn("useLocalStorage storage event parse error:", err);
      }
    };
    window.addEventListener("storage", handle);
    return () => window.removeEventListener("storage", handle);
  }, [key, isWindow]);

  return [state, setValue, remove];
}

export default useLocalStorage;