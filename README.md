# 77romin Portfolio

김강민의 프로젝트, 활동, 개발 방식을 소개하는 Jekyll 기반 포트폴리오입니다.

## Pages

- `/` — 소개와 대표 프로젝트
- `/projects/` — 전체 프로젝트와 상세 사례
- `/activities/` — 학습, 실험, 협업 활동
- `/about/` — 개발 방식과 기술 경험

## Content

- 프로필 문구: `_data/profile.yml`
- 기술 목록: `_data/skills.yml`
- 활동 목록: `_data/activities.yml`
- 프로젝트 상세: `_projects/*.md`
- 공통 스타일: `assets/css/portfolio.css`

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
