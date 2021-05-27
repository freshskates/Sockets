import React, { useEffect, useState } from "react";
export default function useLocalStorage(key, initialValue) {
  const PREFIX = "chat-app-";
  const validKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(validKey);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") return initialValue();
    else return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(validKey, JSON.stringify(value));
  }, [validKey, value]);

  return [value, setValue];
}
