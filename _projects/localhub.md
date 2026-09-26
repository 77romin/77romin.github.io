---
title: "LocalHub"
order: 1
featured: true
monogram: "LH"
accent: "lime"
image: "https://raw.githubusercontent.com/77romin/localhub/main/docs/images/localhub-home.png"
kind: "Full-stack · AI"
period: "2026"
role: "Full-stack Developer"
focus: "지역 탐색 · 커뮤니티 · 근거 기반 AI"
summary: "공공 관광 데이터에 지역의 실제 경험과 근거 기반 AI 안내를 연결한 대전·충청 로컬 커뮤니티입니다."
stack: ["Vue.js", "FastAPI", "Python", "SQLite", "OpenAI API", "Chart.js"]
github: "https://github.com/77romin/localhub"
demo: "https://tkv00-localhub.netlify.app"
---
## 흩어진 정보와 지역의 경험을 한 흐름으로

관광 정보는 유형별로 흩어져 있고, 장소 데이터만으로는 현지의 맥락을 알기 어렵습니다. LocalHub는 한국관광공사 TourAPI의 대전·충청권 지역정보를 정규화하고, 장소 중심의 익명 커뮤니티와 AI 안내를 하나의 사용자 흐름으로 연결했습니다.

## 구현한 핵심

- 8개 콘텐츠 유형, 1,365건의 지역정보를 검색·필터·정렬할 수 있는 탐색 경험을 구현했습니다.
- 게시글과 댓글을 실제 장소에 연결하고 멱등 좋아요, 비밀번호 해시, 서버 사이드 페이지네이션을 적용했습니다.
- AI가 임의의 정보를 만들지 않도록 SQLite의 공개 장소·게시글만 문맥으로 전달하고, 인용은 서버의 허용 목록에서 조립했습니다.
- 다국어 UI, 라이트·다크 테마, 로딩·빈 상태·오류 상태와 키보드 포커스를 포함한 반응형 경험을 구성했습니다.

## 기술적 선택

SQLite 운영 환경에서는 무리한 수평 확장보다 단일 인스턴스와 영속 디스크라는 명확한 배포 계약을 선택했습니다. 원본 데이터는 checksum과 전체 검증을 통과한 뒤 멱등하게 적재하며, OpenAI 호출은 데이터베이스 write transaction 밖으로 분리해 외부 장애가 데이터 정합성에 영향을 주지 않게 했습니다.
