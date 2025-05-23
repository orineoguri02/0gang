// src/pages/api/learning.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { question, tag, content } = req.body;

    console.log('[서버 수신]', { question, tag, content });

    // 예시: DB에 저장할 수도 있고, 임시 응답만 해도 OK
    return res.status(200).json({ message: '저장 완료', received: { question, tag, content } });
  }

  res.status(405).json({ message: '허용되지 않은 메서드입니다.' });
}
