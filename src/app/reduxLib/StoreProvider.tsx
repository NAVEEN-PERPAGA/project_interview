"use client";
import { makeStore } from "@/app/reduxLib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  // Initialize the Redux store eagerly and type the ref to avoid nullability issues
  // This ensures `storeRef.current` is always an `AppStore` instance
  const storeRef = useRef(makeStore());

  // Store is already created above; no need for lazy init branch

  useEffect(() => {
    // configure listeners using the provided defaults
    // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
    const unsubscribe = setupListeners(storeRef.current.dispatch);
    return unsubscribe;
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
