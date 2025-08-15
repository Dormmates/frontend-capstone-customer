import { useQuery } from "@tanstack/react-query";
import { request } from "../api";

interface DepartmentMenuData {
  departmentId: string;
  name: string;
  logoUrl: string;
}

interface ShowMenuData {
  showId: string;
  title: string;
  departmentId: string;
  showCover: string;
  showType: string;
}

export interface SelectedShowData {
  title: string;
  showCover: string;
  description: string;
  genreNames?: string[];
  showSchedules: { scheduleId: string; datetime: string }[];
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

export const useGetSelectedShowDetails = (showId: string) => {
  return useQuery<SelectedShowData, Error>({
    queryKey: ["selected-show", showId],
    queryFn: async () => {
      const res = await request<SelectedShowData>(`/api/customer/${showId}`, {}, "get");
      return res.data;
    },
  });
};
