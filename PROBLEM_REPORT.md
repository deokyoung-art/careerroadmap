# 🔍 GitHub Pages 배포 문제 분석 리포트

## 📊 문제 요약

| 항목 | 내용 |
|------|------|
| **배포 URL** | https://deokyoung-art.github.io/careerroadmap/ |
| **로컬 URL** | http://localhost:3000/settings |
| **문제** | 배포된 사이트와 로컬 환경이 다르게 표시됨 |
| **심각도** | 🔴 Critical (사이트가 제대로 작동하지 않음) |
| **발견 시각** | 2026-02-14 22:23 |

---

## 🔍 발견된 문제점

### 1. 빈 페이지 표시
- **현상**: 배포된 사이트에서 빈 페이지 또는 "careerroadmap", "gongjutoursite" 같은 이상한 텍스트만 표시
- **원인**: Next.js 앱을 정적 파일로 export하지 않고 소스 코드를 직접 배포

### 2. Next.js와 GitHub Pages 호환성
- **문제**: GitHub Pages는 정적 HTML만 지원하지만, Next.js는 기본적으로 Node.js 서버 필요
- **결과**: 서버 사이드 렌더링이 작동하지 않아 빈 페이지 표시

### 3. 설정 파일 누락
- **누락된 설정**:
  - `output: 'export'` (정적 파일 export)
  - `basePath` (GitHub Pages 서브경로)
  - `.nojekyll` 파일

---

## ✅ 수정 사항

### 1. `next.config.js` 수정

**변경 전:**
```javascript
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
}
```

**변경 후:**
```javascript
const nextConfig = {
  output: 'export',              // ✅ 정적 파일로 export
  basePath: '/careerroadmap',    // ✅ GitHub Pages 서브패스
  images: { unoptimized: true }, // ✅ 이미지 최적화 비활성화
  trailingSlash: true,           // ✅ URL 슬래시 추가
}
```

**변경 이유:**
- `output: 'export'`: Next.js를 정적 HTML로 변환
- `basePath`: GitHub Pages의 `/careerroadmap/` 경로 처리
- `images.unoptimized`: GitHub Pages에서 이미지 최적화 불가능
- `trailingSlash`: 라우팅 호환성 향상

---

### 2. `package.json` 스크립트 추가

**추가된 스크립트:**
```json
{
  "scripts": {
    "export": "next build && next export",
    "deploy": "npm run build && touch out/.nojekyll"
  }
}
```

**용도:**
- `export`: 정적 파일 생성
- `deploy`: 빌드 + .nojekyll 파일 생성

---

### 3. `.nojekyll` 파일 생성

**목적:** GitHub Pages가 Jekyll 처리를 건너뛰도록 설정

**생성 명령:**
```bash
touch out/.nojekyll
```

---

### 4. 자동 배포 스크립트 작성

**파일:** `deploy.sh`

**기능:**
1. 프로젝트 빌드 (`npm run build`)
2. `.nojekyll` 파일 생성
3. `gh-pages` 브랜치로 전환
4. 빌드 파일 복사
5. 커밋 및 푸시
6. 원래 브랜치로 복귀

**사용 방법:**
```bash
./deploy.sh
```

---

## 📦 빌드 결과

### 생성된 정적 파일

```
out/
├── .nojekyll              ✅
├── index.html             ✅ 대시보드
├── 404.html               ✅ 404 페이지
├── _next/                 ✅ Next.js 리소스
│   ├── static/css/
│   └── static/chunks/
├── daily-quest/
│   └── index.html         ✅ 데일리 퀘스트
├── projects/
│   └── index.html         ✅ 프로젝트
├── roadmap/
│   └── index.html         ✅ 로드맵
└── settings/
    └── index.html         ✅ 설정
```

### 빌드 통계

| 페이지 | 크기 | First Load JS |
|--------|------|---------------|
| / | 2.59 kB | 97.2 kB |
| /daily-quest | 3.65 kB | 98.2 kB |
| /projects | 3.52 kB | 98.1 kB |
| /roadmap | 3.21 kB | 97.8 kB |
| /settings | 3.67 kB | 98.3 kB |

✅ 모든 페이지 정상 빌드 완료!

---

## 🚀 배포 방법

### 방법 1: 자동 스크립트 (권장)

```bash
./deploy.sh
```

### 방법 2: 수동 배포

```bash
# 1. 빌드
npm run build

# 2. gh-pages 브랜치로 전환
git checkout gh-pages

# 3. 기존 파일 삭제
git rm -rf .

# 4. out 폴더 내용 복사
cp -r out/* .
cp out/.nojekyll .

# 5. 커밋 및 푸시
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

# 6. main 브랜치로 복귀
git checkout main
```

---

## 🔗 배포 후 URL 구조

| 페이지 | URL |
|--------|-----|
| 대시보드 | https://deokyoung-art.github.io/careerroadmap/ |
| 로드맵 | https://deokyoung-art.github.io/careerroadmap/roadmap/ |
| 데일리 퀘스트 | https://deokyoung-art.github.io/careerroadmap/daily-quest/ |
| 프로젝트 | https://deokyoung-art.github.io/careerroadmap/projects/ |
| 설정 | https://deokyoung-art.github.io/careerroadmap/settings/ |

---

## ⚠️ 주의사항

### 1. 환경변수
- `.env.local`의 환경변수는 빌드 시 번들에 포함됨
- 민감한 정보는 포함하지 말 것 (공개 저장소인 경우)
- Supabase의 `anon` 키는 공개되어도 안전 (RLS로 보호됨)

### 2. 이미지
- Next.js Image 최적화가 비활성화됨
- 이미지는 원본 크기로 제공
- 필요 시 이미지를 미리 최적화할 것

### 3. 서버 기능
- Server Actions 사용 불가
- API Routes 사용 불가
- 클라이언트 사이드에서만 Supabase 호출 가능

### 4. 배포 시간
- 첫 배포: 5-10분 소요
- 이후 업데이트: 1-2분 소요
- GitHub Actions 빌드 시간 포함

---

## 📝 체크리스트

배포 전 확인:
- [ ] `npm run build` 성공
- [ ] `out/` 폴더에 파일 생성 확인
- [ ] `out/.nojekyll` 파일 존재 확인
- [ ] Git 커밋 완료
- [ ] GitHub 저장소 푸시 완료

배포 후 확인:
- [ ] 메인 페이지 로드 확인
- [ ] 모든 페이지 링크 작동 확인
- [ ] 사이드바 네비게이션 작동 확인
- [ ] 모바일 반응형 확인
- [ ] 브라우저 콘솔 에러 없음

---

## 🎯 예상 결과

### 배포 후

**로컬 환경:**
- http://localhost:3000/settings
- ✅ 설정 페이지 정상 표시

**배포 환경:**
- https://deokyoung-art.github.io/careerroadmap/settings/
- ✅ 설정 페이지 정상 표시 (로컬과 동일)

---

## 📚 참고 자료

- [Next.js Static Exports 공식 문서](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [DEPLOY_GITHUB_PAGES.md](./DEPLOY_GITHUB_PAGES.md) - 상세 배포 가이드

---

## ✨ 결론

### 문제 원인
Next.js 앱을 정적 파일로 export 하지 않고 GitHub Pages에 배포

### 해결 방법
1. `next.config.js`에 `output: 'export'` 추가
2. `basePath` 설정
3. 빌드 후 `out/` 폴더를 `gh-pages` 브랜치에 배포

### 현재 상태
- ✅ 설정 완료
- ✅ 빌드 성공
- ⏳ 배포 대기 중 (수동 배포 필요)

**이제 `./deploy.sh`를 실행하면 정상적으로 배포됩니다!**
