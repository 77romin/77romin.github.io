---
title: "Gospel Choir Practice"
order: 2
featured: true
monogram: "GP"
accent: "amber"
image: "https://raw.githubusercontent.com/77romin/gospel.letsgomin/main/docs/screenshots/practice-desktop.png"
kind: "Web · Realtime Audio"
period: "2026"
role: "Full-stack Developer"
focus: "멀티 디바이스 오디오 동기화"
summary: "성가대원이 자신의 파트를 듣고, 지휘자가 지정한 구간을 여러 기기에서 함께 연습하는 웹 연습실입니다."
stack: ["JavaScript", "Web Audio API", "WebSocket", "Supabase", "Vite", "Vercel"]
github: "https://github.com/77romin/gospel.letsgomin"
demo: "https://gospel.letsgomin.com"
---
## 각자의 파트를 같은 시간에

합창 연습에서는 파트별 음원을 반복해 듣는 개인 연습과 여러 기기가 동시에 시작하는 합주 경험이 모두 필요합니다. 다섯 파트 중 하나를 선택해 듣고, 지휘자가 표시한 구간을 반복하거나 함께 연습할 수 있는 웹 연습실을 구현했습니다.

## 구현한 핵심

- 파트별 재생, 위치 이동, 볼륨과 키보드 단축키를 포함한 개인 연습 경험을 만들었습니다.
- Web Audio의 예약 재생과 서버 공통 시각을 이용해 여러 기기의 재생·정지 시점을 맞췄습니다.
- 지휘자가 연습 구간을 생성·수정·강조·완료할 수 있도록 Supabase Auth, PostgreSQL, Realtime을 연결했습니다.
- 데스크톱과 모바일에서 동일하게 사용할 수 있도록 반응형 UI와 영상 표시 전환을 구현했습니다.

## 기술적 선택

브라우저와 출력 장치마다 존재하는 지연을 단순한 `play()` 호출만으로 맞추기 어렵습니다. 음원을 미리 디코딩하고 충분한 준비 시간을 둔 공통 시작 시각을 배포한 뒤 각 기기의 Web Audio 시계로 변환하는 방식을 사용했습니다. 진단 모드에서는 서버 기준 위치, 시계 보정값, 출력 지연을 함께 확인할 수 있습니다.
