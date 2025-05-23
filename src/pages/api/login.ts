import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { id, password } = req.body;
  if (!id || !password) {
    return res.status(400).json({ message: "아이디와 비밀번호를 모두 입력해주세요." });
  }

  // 환경 변수에서 가져온 ID/PW
  const ADMIN_ID = process.env.ADMIN_ID!;
  const ADMIN_PW = process.env.ADMIN_PW!;

  // 문자열 비교
  if (id === ADMIN_ID && password === ADMIN_PW) {
    // 로그인 성공 시, 예: 세션이나 쿠키 발급 로직 추가 가능
    return res.status(200).json({ message: "로그인 성공" });
  } else {
    return res.status(401).json({ message: "아이디 또는 비밀번호가 올바르지 않습니다." });
  }
}
