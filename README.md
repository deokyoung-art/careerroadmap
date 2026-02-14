# Job Navigator

특성화고 학생을 위한 취업 및 진로 관리 웹 플랫폼

## 프로젝트 소개

Job Navigator는 특성화고 학생들이 고교 3년 동안의 취업 로드맵을 설정하고, 매일의 목표를 달성하며, 프로젝트와 학습 기록을 아카이빙하여 취업용 포트폴리오로 활용할 수 있는 플랫폼입니다.

**핵심 가치**: "나의 성장을 시각화한다"

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI
- **Database & Auth**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: GitHub

## 폴더 구조

```
careerroadmap/
├── app/                          # Next.js 14 App Router
│   ├── (dashboard)/              # 대시보드 레이아웃 그룹
│   │   ├── layout.tsx            # 대시보드 레이아웃
│   │   ├── page.tsx              # 메인 대시보드
│   │   ├── roadmap/              # 로드맵 페이지
│   │   ├── daily-quest/          # 데일리 퀘스트 (예정)
│   │   ├── projects/             # 프로젝트 아카이브 (예정)
│   │   └── settings/             # 설정 (예정)
│   ├── globals.css               # 글로벌 스타일
│   └── layout.tsx                # 루트 레이아웃
│
├── components/                   # 재사용 가능한 컴포넌트
│   ├── ui/                       # Shadcn/UI 컴포넌트
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   └── progress.tsx
│   └── Sidebar.tsx               # 사이드바 네비게이션
│
├── lib/                          # 유틸리티 함수
│   ├── supabase.ts               # Supabase 클라이언트
│   └── utils.ts                  # 헬퍼 함수
│
├── supabase/                     # Supabase 설정
│   └── schema.sql                # 데이터베이스 스키마
│
├── .env.example                  # 환경변수 예시
├── next.config.js                # Next.js 설정
├── tailwind.config.ts            # Tailwind CSS 설정
├── tsconfig.json                 # TypeScript 설정
└── package.json                  # 프로젝트 의존성
```

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경변수 설정

`.env.example` 파일을 `.env.local`로 복사하고 Supabase 프로젝트 정보를 입력하세요.

```bash
cp .env.example .env.local
```

`.env.local` 파일에 다음 값을 입력하세요:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Supabase 설정

1. [Supabase](https://supabase.com)에 프로젝트를 생성합니다
2. SQL Editor에서 `supabase/schema.sql` 파일의 내용을 실행합니다
3. Project Settings > API에서 URL과 anon key를 복사하여 `.env.local`에 입력합니다

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 핵심 기능

### 1. Career Roadmap (비전 설정)
- 1학년, 2학년, 3학년별 주요 목표 설정
- 타임라인 UI로 현재 위치 시각화
- 목표 달성률 실시간 추적

### 2. Daily Quest (일일 목표 관리)
- 매일 아침 "오늘의 목표" 3가지 설정
- 체크리스트 형태의 완료 관리
- GitHub 스타일의 잔디 심기 UI

### 3. Archive & Project (포트폴리오)
- 수업 결과물, 개인 프로젝트 업로드
- 텍스트, 이미지, GitHub 링크, 배포 URL 관리
- 태그 기능으로 분류 (#React, #Python 등)

### 4. Dashboard (내 상황판)
- 현재 로드맵 달성률 표시
- 최근 활동 로그 요약
- D-Day 카운터 (취업 박람회, 시험 등)

## 데이터베이스 스키마

### users
- 사용자 기본 정보 (이메일, 이름, 학교, 전공, 자기소개)

### roadmaps
- 학년별 목표 관리 (1/2/3학년)
- 상태 추적 (예정/진행중/완료)

### daily_goals
- 일일 목표 내용
- 완료 여부 및 완료 시간

### projects
- 프로젝트 정보
- 기술 스택 및 태그
- 이미지, 링크, GitHub URL

## UI/UX 디자인 가이드

- **메인 컬러**: Royal Blue (#3B82F6) - 신뢰감
- **포인트 컬러**: Mint Green (#10B981) - 성장
- **폰트**: Inter (산세리프 계열)
- **레이아웃**: 반응형 웹 (모바일 우선)

## 다음 단계

- [ ] 데일리 퀘스트 페이지 구현
- [ ] 프로젝트 아카이브 페이지 구현
- [ ] Supabase 인증 연동
- [ ] 설정 페이지 구현
- [ ] 배포 (Vercel)

## 라이센스

MIT
