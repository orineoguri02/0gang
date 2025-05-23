import { NextPage } from "next";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/main.module.css";
import { useSubjectStore, Card } from "../store/useSubjectStore";
import Link from 'next/link';

const Home: NextPage = () => {
  const { subjects, count, cards, fetchData } = useSubjectStore();
  const userId = "1";
  const userName = "이건우";
  const currentPage = 1;

  useEffect(() => {
    fetchData(userId);
  }, [fetchData, userId]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-4">
          <Image src="/book.png" alt="서비스 로고" width={48} height={48} />
          <h1 className={styles.title}>학고록</h1>
        </div>
          <div className={styles.loginWrapper}>
            <Link href="/login">
              <Image src="/login.png" alt="서비스 로고" width={36} height={36} />
            </Link>
          </div>
      </header>

      <div className="px-8 pb-8">
        <div className="flex gap-6">
          {/* Sidebar */}
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

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-2xl p-6 flex flex-col">
            <div className="flex justify-end mb-6">
              <select className="ml-4 text-gray-700 border border-gray-300 rounded">
                <option>최신순</option>
                <option>오래된순</option>
              </select>
            </div>

            {/* 카드 그리드: state에서 불러온 cards 사용 */}
            <div className="grid grid-cols-3 grid-rows-2 gap-6 flex-grow">
              {cards.map((card: Card) => (
                <div key={card.id} className={styles.card}>
                  <div className={styles.cardImage} />
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              ))}
            </div>

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
                <Link href="/create">
                  <button className="bg-[#A3C9A8] text-[#3C3C3C] py-2 px-4 rounded-full shadow">
                    오늘의 회고를 진행해봐요 📝
                  </button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;