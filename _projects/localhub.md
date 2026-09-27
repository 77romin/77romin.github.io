---
title: "LocalHub"
order: 7
featured: true
monogram: "LH"
accent: "lime"
image: "https://raw.githubusercontent.com/77romin/localhub/main/docs/images/localhub-home.png"
image_alt: "LocalHub 홈의 지역 탐색과 Local Pulse 화면"
kind: "Full-stack · AI"
period: "2026"
role: "Full-stack Developer"
focus: "지역 탐색 · 커뮤니티 · 근거 기반 AI"
summary: "공공 관광 데이터에 지역의 실제 경험과 근거 기반 AI 안내를 연결한 대전·충청 로컬 커뮤니티입니다."
stack: ["Vue 3", "FastAPI", "SQLAlchemy", "SQLite", "OpenAI Responses API", "Chart.js", "Netlify", "Render"]
github: "https://github.com/77romin/localhub"
demo: "https://tkv00-localhub.netlify.app"
---
## 프로젝트 개요

LocalHub는 한국관광공사 TourAPI 4.0의 대전·충청권 지역정보와 장소 중심 익명 커뮤니티, SQLite 근거 기반 AI 안내를 연결한 Vue 3·FastAPI 풀스택 서비스입니다. 관광 정보를 나열하는 데서 끝나지 않고 실제 장소에 지역 경험과 데이터 흐름을 연결했습니다.

## 숫자로 보는 서비스

| 지역 데이터 | 커뮤니티 | 데이터 구조 |
| --- | --- | --- |
| 원본 JSON 8개 | 장소 연결 게시글 500개 | 애플리케이션 테이블 11개 |
| 지역정보 1,365건 | 댓글 1,785개 | Alembic revision 4개 |
| 콘텐츠 유형 8종 | seed 좋아요 14,620건 | 지역 9개, 분류 10·49·128 |

이 수치는 저장소의 JSON, SQLAlchemy 모델, migration과 결정적 seed를 기준으로 하며 근거 없는 사용자 수나 성과 지표를 사용하지 않았습니다.

## 핵심 기능

- 8개 콘텐츠 유형의 장소 검색, 유형 필터, 정렬과 서버 페이지네이션
- 장소와 게시글을 TourAPI `contentid`로 연결한 익명 커뮤니티
- 게시글·댓글 CRUD, PBKDF2 비밀번호 해시와 멱등 좋아요
- 조회수·좋아요·지역별 게시글을 집계하는 Chart.js Local Pulse
- 한국어·영어 전환, 라이트·다크 테마와 반응형·접근성 상태 설계
- 장소·게시글·최근 대화를 근거로 답하는 AI 로컬 도우미

## 근거 기반 AI 경계

AI에는 SQLite에서 조회한 공개 장소 최대 5건, 게시글 최대 5건과 최근 대화 최대 10건만 전달합니다. 모델은 자연어 답변만 생성하고 장소·게시글 식별자와 citation은 서버가 retrieval 허용 목록에서 조립합니다. Markdown은 `DOMPurify`로 정화하고, OpenAI 장애는 데이터베이스 작업과 분리해 `503 AI_UNAVAILABLE`로 격리합니다.

## 데이터 신뢰성과 보안

원본 JSON은 SHA-256 checksum과 필수값·좌표·지역 계층·중복 검증을 모두 통과한 뒤 transaction 안에서 멱등하게 적재합니다. 게시글 비밀번호는 요청에서만 받고 salt를 적용한 해시만 저장하며, 응답·로그·AI 문맥에서 제외합니다. Prompt injection을 막기 위해 장소와 게시글 텍스트는 명령이 아닌 데이터로 취급합니다.

## 배포와 검증

Vue SPA는 Netlify, FastAPI는 Render의 단일 worker와 1GB Persistent Disk에 배포했습니다. SQLite의 제약을 숨기지 않고 WAL, foreign key, busy timeout과 단일 인스턴스 운영을 계약으로 명시했습니다.

README에 기록된 검증 기준으로 Backend pytest 200개와 production build를 통과했습니다. 데이터 부트스트랩의 재실행, rollback, checksum과 멱등성도 테스트 범위에 포함합니다.
