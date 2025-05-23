import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

if (!API_URL) {
  throw new Error('🚨 API_URL이 정의되지 않았습니다! .env.local을 확인하세요.');
}

interface LearningNotePayload {
  question: string;
  tag: string;
  content: string;
}

export const postLearningNote = async (payload: LearningNotePayload) => {
  try {
    console.log("📦 보내는 payload:", payload); 
    const res = await axios.post(API_URL, payload);
    console.log('서버 응답:', res.data);
    return res;
  } catch (error) {
    console.error('노트 저장 실패:', error);
    throw error;
  }
};
