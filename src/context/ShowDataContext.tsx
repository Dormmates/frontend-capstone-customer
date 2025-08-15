import { createContext } from "react";
import { type SelectedShowData } from "../_lib/@react-client-query/customer";

export const ShowDataContext = createContext<SelectedShowData | null>(null);
