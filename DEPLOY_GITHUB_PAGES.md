# GitHub Pages 배포 가이드

## 🔍 문제 분석 결과

### 현재 상태
- **배포된 사이트**: https://deokyoung-art.github.io/careerroadmap/
- **문제점**: 빈 페이지 또는 잘못된 콘텐츠 표시
- **원인**: Next.js 앱을 정적 파일로 export 하지 않고 소스 코드를 직접 배포

### 해결 방법
Next.js를 GitHub Pages에 배포하려면 **정적 HTML로 export** 필요

---

## ✅ 수정 완료 사항

### 1. `next.config.js` 수정
```javascript
output: 'export',              // 정적 파일로 export
basePath: '/careerroadmap',    // GitHub Pages 서브패스
images: { unoptimized: true }, // 이미지 최적화 비활성화
trailingSlash: true,           // URL에 슬래시 추가
```

### 2. `package.json` 스크립트 추가
```json
"deploy": "npm run build && touch out/.nojekyll"
```

### 3. 빌드 완료
- ✅ 정적 파일 생성 완료 (`out/` 폴더)
- ✅ 6개 페이지 모두 export 성공
- ✅ `.nojekyll` 파일 생성

---

## 🚀 GitHub Pages 배포 방법

### 방법 1: 수동 배포

#### Step 1: 프로젝트 배포
```bash
cd /Users/deokyounghwang/Documents/AI\ Project/vibecodingexercise/careerroadmap
npm run deploy
```
이 명령어는 자동으로 프로젝트를 빌드하고 `gh-pages` 브랜치에 배포합니다.


#### Step 2: out 폴더 확인
```bash
ls out/
# 다음 파일들이 있어야 함:
# - index.html
# - _next/ (폴더)
# - daily-quest/
# - projects/
# - roadmap/
# - settings/
# - .nojekyll
```

#### Step 3: GitHub Pages 설정 확인
1. GitHub 저장소 → Settings → Pages
2. Source가 `gh-pages` 브랜치로 설정되었는지 확인
3. Custom domain 필요 시 설정
4. "Your site is live at ..." 메시지 확인

#### Step 4: GitHub Pages 설정 확인
1. GitHub 저장소 → Settings → Pages
2. Source가 `gh-pages` 브랜치로 설정되었는지 확인
3. Custom domain 필요 시 설정
4. "Your site is live at ..." 메시지 확인

---

### 방법 2: GitHub Actions 자동 배포 (권장)

#### `.github/workflows/deploy.yml` 생성

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

이 방법을 사용하면 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다!

---

## 📝 배포 후 확인사항

### 1. URL 구조
- 메인: https://deokyoung-art.github.io/careerroadmap/
- 로드맵: https://deokyoung-art.github.io/careerroadmap/roadmap/
- 데일리 퀘스트: https://deokyoung-art.github.io/careerroadmap/daily-quest/
- 프로젝트: https://deokyoung-art.github.io/careerroadmap/projects/
- 설정: https://deokyoung-art.github.io/careerroadmap/settings/

### 2. 확인할 항목
- ✅ 대시보드 페이지 정상 로드
- ✅ 사이드바 네비게이션 작동
- ✅ 모든 페이지 링크 작동
- ✅ 통계 카드 표시
- ✅ 모바일 반응형 정상

### 3. 배포 시간
- 첫 배포: 약 5-10분 소요
- 이후 업데이트: 약 1-2분 소요

---

## ⚠️ 주의사항

### 1. Supabase 연동
GitHub Pages는 **정적 사이트**이므로:
- ✅ 클라이언트 사이드 Supabase 호출은 작동
- ❌ 서버 사이드 API는 사용 불가
- `.env.local`의 환경변수는 빌드 시 포함됨

### 2. 이미지 최적화
- Next.js Image 컴포넌트의 최적화 기능은 비활성화됨
- 이미지는 원본 크기로 제공됨
- 필요 시 수동으로 이미지 최적화 권장

### 3. 동적 라우팅
- `[id]` 같은 동적 라우트는 추가 설정 필요
- 현재 프로젝트는 정적 라우트만 사용하므로 문제없음

---

## 🐛 문제 해결

### 404 오류
```bash
# .nojekyll 파일이 있는지 확인
ls out/.nojekyll

# 없으면 다시 생성
touch out/.nojekyll
```

### CSS가 로드되지 않음
- `basePath` 설정 확인
- 브라우저 캐시 삭제
- 하드 새로고침 (Cmd+Shift+R)

### 페이지가 빈 화면
- `npm run build` 재실행
- `out/` 폴더 삭제 후 재빌드
- 브라우저 콘솔에서 에러 확인

---

## 📦 빌드된 파일 구조

```
out/
├── .nojekyll              # Jekyll 비활성화
├── index.html             # 메인 페이지
├── 404.html               # 404 페이지
├── _next/                 # Next.js 리소스
│   ├── static/
│   └── ...
├── daily-quest/
│   └── index.html
├── projects/
│   └── index.html
├── roadmap/
│   └── index.html
└── settings/
    └── index.html
```

---


---

## ✨ 요약

| 항목 | 상태 |
|------|------|
| Next.js 설정 | ✅ 완료 |
| 정적 빌드 | ✅ 완료 |
| GitHub Pages 준비 | ✅ 완료 |
| 배포 대기 | 🚀 `npm run deploy` 실행 필요 |

**이제 `npm run deploy` 명령어로 간편하게 배포하세요!**
