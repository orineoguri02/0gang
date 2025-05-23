// pages/index.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // 서버 호출 없이, 단순히 빈 값 아닌지만 확인
    if (id.trim() !== "" && password.trim() !== "") {
      // 로그인 성공 → 대시보드로 이동
      router.push("/main/index");
    } else {
      // 로그인 실패 → 에러 메시지
      setError("아이디와 비밀번호를 모두 입력해주세요.");
    }
  };

  return (

  <div className="wrapper">
    {/* 2. 로고 추가 (public/book.png 경로) */}
    <img src="/book.png" alt="학교록 로고" className="logo" />
      <div className="form-container">
        <h1 className="title">로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <input
              type="text"
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">로그인</button>
        </form>
      </div>

      {/* styled-jsx 로 CSS 작성 */}
      <style jsx>{`
      
        .wrapper {  
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(
            135deg,
rgb(255, 255, 255) 0%,
rgb(254, 254, 254) 100%
          );
        }
        
        .title {
         margin: 0 0 32px;      
         text-align: center;
         font-size: 1.75rem;
         color: #000;      
         margin-top: 250px;  
      }
        .fields {
          display: flex;
          flex-direction: column;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          width: 400px;
          margin-top: 5px;
          
        }
        .fields input {
          font-size: 1rem;
          padding: 12px;
          border: none;
          color: #000;
        }
        .fields input:not(:last-child) {
          border-bottom: 1px solid #ddd;
        }
        .fields input:focus {
          outline: none;
          background: #fafafa;
        }
        .error {
          margin: 8px 0 0;
          color: #d33;
          font-size: 0.9rem;
          text-align: center;
        }
        button {
        margin-top: 24px;
        width: 100%;
        padding: 12px;
        font-size: 1rem;
        border: none;
        border-radius: 8px;

        
        background-color: #A3B79C;
        color: #000;

        cursor: pointer;
        transition: background-color 0.2s;
        }
      `}</style>
    </div>
  );
}
