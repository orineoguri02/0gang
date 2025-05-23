import { useEffect } from "react";
import { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/main.module.css";
import { useSubjectStore } from "../store/useSubjectStore";

interface Card {
  id: number;
  text: string;
}

const cards: Card[] = [
  { id: 1, text: "오늘 배운걸 어디에 접목할 수 있을까?" },
  { id: 2, text: "오늘 새롭게 이해하게 된 개념이나 지식은?" },
  { id: 3, text: "프로젝트에서 배운 핵심 원리는?" },
  { id: 4, text: "수업 중 가장 흥미로웠던 토론 주제는?" },
  { id: 5, text: "다음에 더 깊게 다뤄보고 싶은 주제는?" },
  { id: 6, text: "오늘 배운 내용을 실무에 어떻게 적용할까?" },
];

const Home: NextPage = () => {
  const { subjects, count, fetchSubjects } = useSubjectStore();
  const userId = "1";
  const userName = "이건우";
  const currentPage = 1;

  useEffect(() => {
    fetchSubjects(userId);
  }, [fetchSubjects, userId]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-4">
          <Image src="/logo.jpg" alt="서비스 로고" width={48} height={48} />
          <h1 className={styles.title}>학고록</h1>
        </div>
      </header>

      <div className="px-8 pb-8">
        <div className="flex gap-6">
          <aside className="w-64 bg-white rounded-2xl p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2 text-black">
              {userName}
            </h2>
            <p className="text-gray-600 mb-4">
              <span className="text-[#A3C9A8]">{count}</span>개의 회고가
              쌓였어요
            </p>
            <ul className="w-full space-y-2 text-gray-700">
              {subjects.map((subj, idx) => (
                <li
                  key={idx}
                  className={
                    idx === 0
                      ? "text-[#A3C9A8] font-medium"
                      : "hover:text-[#A3C9A8] cursor-pointer"
                  }
                >
                  {subj}
                </li>
              ))}
            </ul>
          </aside>

          <main className="flex-1 bg-white rounded-2xl p-6 flex flex-col">
            <div className="flex justify-end mb-6">
              <select className="ml-4 text-gray-700 border border-gray-300 rounded">
                <option>최신순</option>
                <option>오래된순</option>
              </select>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-6 flex-grow">
              {cards.map((card) => (
                <div key={card.id} className={styles.card}>
                  <div className={styles.cardImage} />
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              ))}
            </div>

            {/* Pagination & Action */}
            <div className="mt-6 flex flex-col">
              <div className="flex justify-center space-x-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded-full ${
                      page === currentPage
                        ? "bg-pink-100 text-pink-400"
                        : "text-gray-400"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <div className="w-full flex justify-end mt-4">
                <button className="bg-[#A3C9A8] text-[#3C3C3C] py-2 px-4 rounded-full shadow">
                  오늘의 회고를 진행해봐요 📝
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
