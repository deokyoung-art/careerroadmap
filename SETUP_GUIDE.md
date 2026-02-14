# Job Navigator 설치 가이드

이 문서는 프로젝트를 처음 시작하는 학생 개발자를 위한 상세한 설치 가이드입니다.

## 사전 준비물

1. **Node.js** (v18 이상)
   - [https://nodejs.org](https://nodejs.org)에서 다운로드
   - 설치 확인: `node --version`

2. **Git**
   - [https://git-scm.com](https://git-scm.com)에서 다운로드
   - 설치 확인: `git --version`

3. **코드 에디터**
   - VS Code 권장: [https://code.visualstudio.com](https://code.visualstudio.com)

## 1단계: 프로젝트 클론 및 설치

```bash
# 프로젝트 폴더로 이동
cd careerroadmap

# 의존성 설치
npm install
```

## 2단계: Supabase 프로젝트 생성

### 2.1. Supabase 계정 생성
1. [https://supabase.com](https://supabase.com) 접속
2. "Start your project" 클릭
3. GitHub 계정으로 로그인

### 2.2. 새 프로젝트 생성
1. "New Project" 클릭
2. 프로젝트 정보 입력:
   - Name: `job-navigator`
   - Database Password: 안전한 비밀번호 생성 (저장해두세요!)
   - Region: `Northeast Asia (Seoul)` 선택
3. "Create new project" 클릭 (1-2분 소요)

### 2.3. 데이터베이스 스키마 생성
1. 왼쪽 메뉴에서 "SQL Editor" 클릭
2. "New query" 클릭
3. `supabase/schema.sql` 파일의 내용을 복사하여 붙여넣기
4. "Run" 버튼 클릭 (초록색 재생 버튼)
5. "Success. No rows returned" 메시지 확인

### 2.4. API 키 복사
1. 왼쪽 메뉴에서 Settings > API 클릭
2. "Project URL" 복사
3. "Project API keys" 섹션에서 `anon` `public` 키 복사

## 3단계: 환경변수 설정

```bash
# .env.example을 .env.local로 복사
cp .env.example .env.local
```

`.env.local` 파일을 열고 다음과 같이 수정:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

> ⚠️ 주의: `.env.local` 파일은 절대 GitHub에 업로드하지 마세요!

## 4단계: 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

성공적으로 실행되면 다음 화면을 볼 수 있습니다:
- 왼쪽: Job Navigator 사이드바
- 메인: 대시보드 화면

## 5단계: 페이지 확인

1. **대시보드** (/)
   - 통계 카드 4개
   - 최근 활동 목록
   - 다가오는 일정
   - 활동 잔디

2. **로드맵** (/roadmap)
   - 1학년, 2학년, 3학년별 목표
   - 타임라인 형태의 UI
   - 진행률 표시

## 문제 해결

### 포트 3000이 이미 사용중인 경우

```bash
# 다른 포트로 실행
PORT=3001 npm run dev
```

### node_modules 오류가 발생하는 경우

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
npm install
```

### Supabase 연결 오류

1. `.env.local` 파일의 URL과 키가 정확한지 확인
2. Supabase 프로젝트가 활성 상태인지 확인
3. 개발 서버 재시작 (`Ctrl+C` 후 `npm run dev`)

## 다음 단계

1. **인증 기능 추가**
   - Supabase Auth 설정
   - 로그인/회원가입 페이지 구현

2. **실제 데이터 연동**
   - Dashboard에서 Supabase 데이터 불러오기
   - CRUD 기능 구현

3. **추가 페이지 개발**
   - Daily Quest 페이지
   - Projects 페이지
   - Settings 페이지

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Supabase 공식 문서](https://supabase.com/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Shadcn/UI 컴포넌트](https://ui.shadcn.com)

## 문의 및 지원

문제가 발생하면 GitHub Issues에 등록해주세요.
