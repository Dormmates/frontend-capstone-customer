import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "../api";

export interface DepartmentMenuData {
  departmentId: string;
  name: string;
}

interface ShowMenuData {
  showId: string;
  title: string;
  departmentId: string;
  showCover: string;
  showType: string;
}

interface MenuData {
  shows: ShowMenuData[];
  departments: DepartmentMenuData[];
}

export const useGetShowsForMenu = () => {
  return useQuery<MenuData, Error>({
    queryKey: ["menu-shows"],
    queryFn: async () => {
      const res = await request<MenuData>(`/api/customer`, {}, "get");
      return res.data;
    },
  });
};
