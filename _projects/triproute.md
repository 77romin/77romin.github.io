---
title: "TripRoute"
order: 4
featured: true
monogram: "TR"
accent: "lime"
image: "https://raw.githubusercontent.com/77romin/trip-route/main/public/screenshots/02-demo-route.jpg"
kind: "Web · Travel Planner"
period: "2026.03 · 1일"
role: "Full-stack Developer"
focus: "동선 시각화 · 원클릭 복사 · 지역별 랭킹"
summary: "여행 동선을 직접 설계하고 지도에서 확인하며, 다른 사용자의 검증된 여행 계획을 복사해 활용할 수 있는 여행 플래너이자 커뮤니티입니다."
stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL", "Google Maps API", "Vercel"]
github: "https://github.com/77romin/trip-route"
demo: "https://triproute.vercel.app/"
---
## 계획부터 공유까지 한곳에서

TripRoute는 여행지와 이동 순서를 날짜별로 정리하고 Google Maps 위에서 실제 경로를 확인할 수 있는 여행 플래너입니다. 공개된 여행 계획을 탐색하고 내 일정으로 복사하는 커뮤니티 경험까지 하나의 흐름으로 연결했으며, 기획부터 배포까지 하루 만에 완성했습니다.

## 구현한 핵심

- 로그인 없이 데모 여행을 체험하고, Google OAuth 로그인 후 여행 계획을 저장할 수 있도록 구성했습니다.
- 자동차·대중교통·자전거·도보·직선 이동과 지도 레이어 전환, 날짜별 색상 구분을 구현했습니다.
- Places 검색과 지도 더블클릭으로 장소를 추가하고, 드래그 앤 드롭으로 방문 순서를 변경할 수 있게 했습니다.
- 공개 여행 원클릭 복사, 좋아요, 지역 필터와 복사 횟수·좋아요 기반 랭킹을 구현했습니다.
- Supabase PostgreSQL, RLS, Realtime으로 데이터 저장과 사용자별 접근 제어를 구성했습니다.

## 기술적 선택

일정 데이터는 Supabase와 PostgreSQL에 구조화하고, 지도와 장소 탐색은 Google Maps API로 분리했습니다. 대중교통 경유지 제약은 구간별 계산과 직선 폴백으로 대응했으며, 장소 순서가 바뀌면 지도 경로를 즉시 재계산해 화면과 데이터의 불일치를 막았습니다.

## 문제 해결

- Supabase 스키마 캐시 오류를 컬럼 마이그레이션으로 해결했습니다.
- 조건부 Hook 실행을 제거해 React 렌더링 순서 오류를 해소했습니다.
- Vercel 환경변수와 Supabase·Google OAuth 리디렉션 설정을 정비해 배포 환경의 500 오류와 로그인 실패를 해결했습니다.
