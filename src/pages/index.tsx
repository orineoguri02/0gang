import { useState } from "react";
import { useRouter } from "next/router";
import "../styles/login.css";
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
      <img src="/book.jpg" alt="학교록 로고" className="logo" />
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
    </div>
  );
}