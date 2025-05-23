import { create } from "zustand";
import axios from "axios";

const API_URL = "http://172.18.130.119:8080/post";

export interface Card {
  id: number;
  text: string;
}

interface SubjectState {
  subjects: string[];
  count: number;
  cards: Card[];
  fetchData: (userId: string) => Promise<void>;
}

export const useSubjectStore = create<SubjectState>((set) => ({
  subjects: [],
  count: 0,
  cards: [],
  fetchData: async (userId) => {
    try {
      const res = await axios.get<{
        count: number;
        subjects: string[];
        cards: Card[];
      }>(`${API_URL}/subjects/${userId}`);
      set({
        subjects: res.data.subjects,
        count: res.data.count,
        cards: res.data.cards,
      });
    } catch (error) {
      console.error("🚨 데이터 불러오기 실패:", error);
      set({ subjects: [], count: 0, cards: [] });
    }
  },
}));