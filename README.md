# 77romin Portfolio

김강민의 프로젝트, 활동, 개발 방식을 소개하는 Jekyll 기반 포트폴리오입니다.

## Pages

- `/` — 소개와 대표 프로젝트
- `/projects/` — 전체 프로젝트와 상세 사례
- `/activities/` — 학습, 실험, 협업 활동
- `/about/` — 개발 방식과 기술 경험
- `/sk-aigen/` — SK AIGEN 지원용 사례·성장 계획, PDF 다운로드 (noindex)

## Content

- 프로필 문구: `_data/profile.yml`
- 기술 목록: `_data/skills.yml`
- 활동 목록: `_data/activities.yml`
- 자격·수상·어학: `_data/credentials.yml`
- 프로젝트 상세: `_projects/*.md`
- 공통 스타일: `assets/css/portfolio.css`
- AIGEN 지원 페이지: `sk-aigen/index.html`, `_layouts/application.html`
- AIGEN 문구: `_data/aigen.json` (승인된 PDF HTML에서 옮긴 원문)
- AIGEN 스타일·동작: `assets/css/aigen.css`, `assets/js/aigen.js`
- AIGEN 그림·PDF: `assets/sk-aigen/`

## Local development

Ruby 3.4 환경을 권장합니다.

```bash
bundle install
bundle exec jekyll serve
```

프로덕션 빌드와 내부 링크 검사는 다음 명령으로 실행합니다.

```bash
bash tools/test.sh
```

`main` 또는 `master` 브랜치에 push하면 GitHub Actions가 사이트를 빌드하고 GitHub Pages로 배포합니다.
