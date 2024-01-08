import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
//import the RootState and AppDispatch from your store.ts file.
import type { RootState, AppDispatch } from "./store";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
