---
title: "TripRoute"
order: 4
featured: true
monogram: "TR"
accent: "lime"
kind: "Web · Travel Planner"
period: "2026"
role: "Full-stack Developer"
focus: "일정 시각화 · 여행 경로 공유 · API 예외 처리"
summary: "여행지를 날짜별로 구성하고 지도 위에서 경로를 확인하며, 다른 사용자의 여행 계획을 참고하고 복사할 수 있는 여행 플래너입니다."
stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Google Maps API", "Vercel"]
github: "https://github.com/77romin/trip-route"
demo: "https://triproute.vercel.app/"
---
## 계획부터 공유까지 한곳에서

TripRoute는 여행지와 이동 순서를 날짜별로 정리하고 Google Maps 위에서 실제 경로를 확인할 수 있는 여행 플래너입니다. 공개된 여행 계획을 둘러보고 내 일정으로 복사하는 소셜 기능까지 하나의 흐름으로 연결했습니다.

## 구현한 핵심

- 날짜별 장소와 이동 경로를 Google Maps에 시각화했습니다.
- Google OAuth와 여행 계획 CRUD, 공개·비공개 설정을 구현했습니다.
- 다른 사용자의 경로 복사, 좋아요, 지역별 인기 순위를 제공했습니다.
- Places, Directions, Geocoding API를 연동하고 대중교통 경유지 제한 시 대체 경로를 안내하도록 처리했습니다.

## 기술적 선택

일정 데이터는 Supabase와 PostgreSQL에 구조화하고, 지도와 장소 탐색은 Google Maps API로 분리했습니다. 외부 경로 API가 모든 이동 조건을 지원하지 않는 경우에도 사용자가 작업을 이어갈 수 있도록 명시적인 폴백을 설계했습니다.
