// pages/index.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, password }),
    });
    const data = await res.json();

    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="wrapper">
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
            #fffefa 0%,
            #f9f0ec 100%
          );
        }
        .form-container {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          padding: 32px;
          width: 100%;
          max-width: 360px;
          
        }
        .title {
          margin: 0 0 24px;
          text-align: center;
          font-size: 1.75rem;
          color: #333;
        }
        .fields {
          display: flex;
          flex-direction: column;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
        }
        .fields input {
          font-size: 1rem;
          padding: 12px;
          border: none;
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
          background-color: #f7c6c0;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        button:hover {
          background-color: #e9b1ab;
        }
      `}</style>
    </div>
  );
}
