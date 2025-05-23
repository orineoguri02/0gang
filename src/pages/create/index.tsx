'use client';

import Image from 'next/image';
import styles from './learn.module.css';
import { useEffect, useState } from 'react';
import { postLearningNote } from '@/lib/axiosMain';

const QUESTIONS = [
  '오늘 수업이 주는 가장 중요한 질문은 무엇이었을까?',
];

export default function LearningNote() {
  const [question, setQuestion] = useState(QUESTIONS[0]);
  const [tag, setTag] = useState('@논리설계');
  const [date, setDate] = useState('');
  const [answers, setAnswers] = useState(Array(5).fill(''));

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    const content = answers.join('\n');
    const payload = { question, tag, date, content };

    try {
      const res = await postLearningNote(payload);
      if (res.status === 200) {
        alert('저장 성공!');
        setAnswers(Array(5).fill(''));
      } else {
        alert('저장 실패...');
      }
    } catch (err) {
      console.error(err);
      alert('에러 발생!');
    }
  };

  return (
    <div className={styles.container}>
      {/* 상단 로고 + 닫기 */}
      <div className={styles.titleRow}>
          <Image src="/Group 32.png" alt="로고" width={60} height={60} className={styles.logo} />
          <h1 className={styles.title}>학고록</h1>
      </div>

      <div className={styles.centered}>
          <div className={styles.card}>
            {/* 질문 + 취소 버튼 수평 정렬 */}
            <div className={styles.questionRow}>
              <h2 className={styles.question}>{question}</h2>
              <Image src="/cancel.png" alt="닫기" width={24} height={24} className={styles.cancelIcon} />
            </div>

          <div className={styles.meta}>
            <div className={styles.metaRow}>
              <span className={styles.metaLabels}>날짜</span>
              <span className={styles.metaValue}>{date}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>태그</span>
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>

          {/* 다섯 개 질문 입력 */}
          <div className={styles.inputs}>
            <label>오늘 수업의 핵심 내용은?</label>
            <input type="text" value={answers[0]} onChange={(e) => handleChange(0, e.target.value)} className={styles.input} placeholder=">"/>

            <label>왜 이 내용이 중요하지?</label>
            <input type="text" value={answers[1]} onChange={(e) => handleChange(1, e.target.value)} className={styles.input}placeholder=">" />

            <label>오늘 배운 내용 중 인상 깊었던 점은?</label>
            <input type="text" value={answers[2]} onChange={(e) => handleChange(2, e.target.value)} className={styles.input} placeholder=">"/>

            <label>이걸 어디에 활용할 수 있지?</label>
            <input type="text" value={answers[3]} onChange={(e) => handleChange(3, e.target.value)} className={styles.input} placeholder=">"/>

            <label>오늘의 질문에 대한 답변은?</label>
            <input type="text" value={answers[4]} onChange={(e) => handleChange(4, e.target.value)} className={styles.input} placeholder=">"/>
          </div>

          <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={handleSubmit}>
              회고하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
