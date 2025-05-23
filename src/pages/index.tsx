import { NextPage } from "next";
import styles from "../styles/main.module.css";
import Image from "next/image";

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
  const userName = "이건우";
  const reviewCount = 24;
  const currentPage = 1;

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
            <p className="w-24 h-24 text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-black">
              {userName}
            </h2>
            <p className="text-gray-600 mb-4">
              <span className="text-[#A3C9A8]">{reviewCount}</span>개의 회고가
              쌓였어요
            </p>

            <ul className="space-y-2 text-gray-700">
              <li className="text-[#A3C9A8]">논리설계</li>
              <li>디자인리서치앤리획</li>
              <li>AI개론</li>
              <li>오픈소스 AI</li>
            </ul>
          </aside>

          <main className="flex-1 bg-white rounded-2xl p-6">
            <div className="flex items-center justify-end mb-6">
              <select className="ml-4 text-gray-700">
                <option>최신순</option>
                <option>오래된순</option>
              </select>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-6">
              {cards.map((card) => (
                <div key={card.id} className={styles.card}>
                  <div className={styles.cardImage} />
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2 mt-6">
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

            <main className="flex-1 bg-white rounded-2xl p-6 flex flex-col">
              <button className="self-end bg-[#A3C9A8] text-white py-2 px-4 rounded-full shadow">
                오늘의 회고를 진행해봐요 📝
              </button>
            </main>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
