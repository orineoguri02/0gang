import { NextPage } from "next";

interface Card {
  id: number;
  text: string;
}

const cards: Card[] = [
  { id: 1, text: "오늘 수업에서 가장 인상 깊었던 내용은?" },
  { id: 2, text: "오늘 새롭게 이해하게 된 개념이나 지식은?" },
  { id: 3, text: "오늘 새롭게 이해하게 된 개념이나 지식은?" },
  { id: 4, text: "오늘 수업에서 가장 인상 깊었던 내용은?" },
  { id: 3, text: "오늘 새롭게 이해하게 된 개념이나 지식은?" },
  { id: 4, text: "오늘 수업에서 가장 인상 깊었던 내용은?" },
];

const Home: NextPage = () => {
  const userName = "이건우";
  const reviewCount = 24;
  const currentPage = 1;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-3xl font-bold text-black">서비스명</h1>
        <p className="w-12 h-12 text-gray" />
      </header>

      <div className="px-8 pb-8">
        <div className="flex gap-6">
          <aside className="w-64 bg-white rounded-2xl p-6 flex flex-col items-center">
            <p className="w-24 h-24 text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-black">
              {userName}
            </h2>
            <p className="text-gray-600">
              <span className="text-pink-400">{reviewCount}</span>개의 회고가
              쌓였어요
            </p>
          </aside>

          <main className="flex-1 bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <select className="ml-4 text-gray-700">
                <option>최신순</option>
                <option>오래된순</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-lg overflow-hidden bg-white shadow"
                >
                  <div className="bg-gray-200 h-40"></div>
                  <p className="p-4 text-gray-700">{card.text}</p>
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
