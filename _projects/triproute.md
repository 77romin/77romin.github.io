---
title: "TripRoute"
order: 4
featured: true
monogram: "TR"
accent: "lime"
image: "https://raw.githubusercontent.com/77romin/trip-route/main/public/screenshots/02-demo-route.jpg"
image_alt: "TripRoute 파리 여행 데모의 날짜별 장소와 지도 동선"
kind: "Web · Travel Planner"
period: "2026.03 · 1일"
role: "Full-stack Developer"
focus: "동선 시각화 · 원클릭 복사 · 지역별 랭킹"
summary: "여행 동선을 직접 설계하고 지도에서 확인하며, 다른 사용자의 검증된 여행 계획을 복사해 활용할 수 있는 여행 플래너이자 커뮤니티입니다."
stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL", "Google Maps API", "Vercel"]
github: "https://github.com/77romin/trip-route"
demo: "https://triproute.vercel.app/"
---
## 프로젝트 개요

TripRoute는 직접 만든 여행 동선을 Google Maps에서 확인하고, 다른 사용자의 검증된 여행 계획을 참고하거나 그대로 복사해 활용하는 여행 플래너이자 커뮤니티입니다. 기획, 데이터베이스 설계, UI 구현과 Vercel 배포까지 하루 동안 완성했습니다.

로그인하지 않아도 파리 4박 5일 데모와 핵심 기능을 체험할 수 있으며, Google 계정으로 로그인하면 여행을 저장하고 공개 범위를 관리할 수 있습니다.

## 지도와 여행 계획

- 자동차·대중교통·자전거·도보·직선 이동 경로 지원
- 기본·위성·하이브리드·지형 지도 레이어 전환
- 날짜별 장소와 경로를 서로 다른 색으로 구분
- Google Places Autocomplete와 지도 더블클릭으로 장소 추가
- Framer Motion 드래그 앤 드롭으로 방문 순서 변경
- 장소별 카테고리, 메모, 체류시간과 Day 단위 일정 관리

## 공유와 발견

- 여행 계획 공개·비공개 설정
- 다른 사용자의 일정을 내 여행으로 원클릭 복사
- 좋아요와 지역별 인기 여행 루트 랭킹
- 대분류·중분류·소분류 지역 필터
- 나의 지도, 최고의 지도, 전체 여행 지도와 사용 가이드 페이지

랭킹은 복사 횟수를 우선하고, 동률일 때 좋아요 수를 비교합니다. 여행 계획을 단순히 보여주는 데서 그치지 않고 실제 다음 여행의 출발점으로 재사용할 수 있게 했습니다.

## 기술적 설계

Next.js 16 App Router와 TypeScript로 화면을 구성하고, Supabase Auth·PostgreSQL·RLS·Realtime으로 인증과 데이터 접근을 관리했습니다. 지도 탐색은 Google Maps JavaScript, Places, Directions와 Geocoding API를 역할별로 연동했습니다.

## 문제 해결

- 대중교통 모드의 경유지 제한을 구간별 계산 또는 직선 폴백으로 처리했습니다.
- 장소 순서 변경 시 경로를 즉시 다시 계산해 목록과 지도의 불일치를 해결했습니다.
- 조건부 `useMemo` 실행을 제거해 React Hooks 순서 오류를 수정했습니다.
- 누락된 Supabase 지역 컬럼을 마이그레이션하고 스키마 캐시 오류를 해결했습니다.
- Vercel 환경변수와 Supabase·Google OAuth 리디렉션을 정비해 배포 후 500 오류와 로그인 실패를 해결했습니다.
