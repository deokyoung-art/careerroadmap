#!/bin/bash

# Job Navigator - GitHub Pages 배포 스크립트

echo "🚀 GitHub Pages 배포 시작..."

# 1. 빌드
echo "📦 프로젝트 빌드 중..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 빌드 실패!"
    exit 1
fi

echo "✅ 빌드 완료!"

# 2. .nojekyll 파일 확인
if [ ! -f "out/.nojekyll" ]; then
    echo "📝 .nojekyll 파일 생성 중..."
    touch out/.nojekyll
fi

# 3. gh-pages 브랜치로 전환
echo "🔀 gh-pages 브랜치 준비 중..."

# 현재 브랜치 저장
CURRENT_BRANCH=$(git branch --show-current)

# gh-pages 브랜치가 있는지 확인
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "✅ gh-pages 브랜치 존재"
    git checkout gh-pages
else
    echo "📝 gh-pages 브랜치 생성 중..."
    git checkout --orphan gh-pages
fi

# 4. 기존 파일 삭제 (out 폴더 제외)
echo "🗑️  기존 파일 정리 중..."
git rm -rf . 2>/dev/null || true
rm -rf * .* 2>/dev/null || true

# 5. out 폴더 내용 복사
echo "📋 빌드 파일 복사 중..."
git checkout $CURRENT_BRANCH -- out
mv out/* .
mv out/.nojekyll .
rm -rf out

# 6. 커밋 및 푸시
echo "💾 커밋 준비 중..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "📤 GitHub에 푸시 중..."
git push origin gh-pages --force

if [ $? -eq 0 ]; then
    echo "✅ 배포 완료!"
    echo "🌐 사이트 주소: https://deokyoung-art.github.io/careerroadmap/"
    echo "⏳ 배포 반영까지 1-2분 소요될 수 있습니다."
else
    echo "❌ 푸시 실패!"
    exit 1
fi

# 7. 원래 브랜치로 복귀
echo "🔙 원래 브랜치로 복귀 중..."
git checkout $CURRENT_BRANCH

echo "🎉 모든 작업 완료!"
