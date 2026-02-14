# 🚀 Quick Start Guide

Job Navigator를 5분 안에 시작하는 방법

## ⚡ 빠른 시작 (3단계)

### 1️⃣ 의존성 설치

```bash
npm install
```

### 2️⃣ 환경변수 설정

```bash
cp .env.example .env.local
```

`.env.local` 파일을 열고 Supabase 정보 입력:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3️⃣ 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 📋 Supabase 설정이 필요한 경우

### 1. Supabase 프로젝트 생성
1. [supabase.com](https://supabase.com) 접속
2. "New Project" 생성
3. 프로젝트 이름: `job-navigator`
4. Region: `Northeast Asia (Seoul)`

### 2. 데이터베이스 스키마 실행
1. Supabase 대시보드 > SQL Editor
2. `supabase/schema.sql` 내용 복사 & 붙여넣기
3. "Run" 클릭

### 3. API 키 복사
1. Settings > API
2. "Project URL" 복사
3. "anon public" 키 복사
4. `.env.local`에 붙여넣기

## 📁 프로젝트 구조

```
careerroadmap/
├── app/                    # 페이지 및 라우팅
│   ├── (dashboard)/
│   │   ├── page.tsx        # 대시보드
│   │   └── roadmap/        # 로드맵
├── components/             # UI 컴포넌트
│   ├── ui/                 # Shadcn/UI
│   └── Sidebar.tsx
├── lib/                    # 유틸리티
│   ├── supabase.ts
│   └── utils.ts
└── supabase/
    └── schema.sql          # DB 스키마
```

## 🎨 주요 기능

### ✅ 구현 완료
- 📊 대시보드 (통계, 활동 로그, 잔디)
- 🎯 로드맵 (3년 타임라인)
- 🎨 Royal Blue + Mint Green 디자인
- 📱 반응형 레이아웃

### 🚧 개발 예정
- ☑️ 데일리 퀘스트
- 📁 프로젝트 아카이브
- 🔐 인증 시스템
- ⚙️ 설정 페이지

## 📚 상세 문서

- **[README.md](./README.md)** - 프로젝트 소개
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - 상세 설치 가이드
- **[STRUCTURE.md](./STRUCTURE.md)** - 프로젝트 구조 설명

## 🐛 문제 해결

### 포트 충돌
```bash
PORT=3001 npm run dev
```

### 캐시 문제
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Supabase 연결 오류
1. `.env.local` 확인
2. 개발 서버 재시작
3. Supabase 프로젝트 활성 상태 확인

## 💡 다음 단계

1. **Supabase 데이터 연동**
   - 실제 사용자 데이터로 대시보드 채우기
   - CRUD 기능 구현

2. **인증 추가**
   - 로그인/회원가입
   - 소셜 로그인 (Google, GitHub)

3. **나머지 페이지 구현**
   - Daily Quest
   - Projects
   - Settings

## 🤝 도움이 필요하신가요?

- 📖 [Next.js 문서](https://nextjs.org/docs)
- 📖 [Supabase 문서](https://supabase.com/docs)
- 📖 [Tailwind CSS](https://tailwindcss.com)
- 🐛 GitHub Issues에 버그 리포트

---

**Happy Coding! 🎉**
