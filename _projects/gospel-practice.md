---
title: "Gospel Choir Practice"
order: 6
featured: true
monogram: "GP"
accent: "amber"
image: "https://raw.githubusercontent.com/77romin/gospel.letsgomin/main/docs/screenshots/practice-desktop.png"
image_alt: "Gospel Choir Practice 데스크톱 개인 연습 화면"
kind: "Web · Realtime Audio"
period: "2026"
role: "Full-stack Developer"
focus: "멀티 디바이스 오디오 동기화"
summary: "성가대원이 자신의 파트를 듣고, 지휘자가 지정한 구간을 여러 기기에서 함께 연습하는 웹 연습실입니다."
stack: ["JavaScript", "Web Audio API", "WebSocket", "Node.js", "Supabase", "Vite", "Vercel"]
github: "https://github.com/77romin/gospel.letsgomin"
demo: "https://gospel.letsgomin.com"
---
## 프로젝트 개요

성가대원이 합창·소프라노·알토·테너·바리톤 중 자신의 파트를 반복해서 듣고, 지휘자가 지정한 구간을 여러 기기에서 함께 연습할 수 있는 웹 연습실입니다. 데스크톱과 모바일에서 별도 설치 없이 같은 기능을 사용할 수 있습니다.

## 개인 연습과 지휘자 도구

- 다섯 파트 선택, 재생·일시정지·위치 이동과 볼륨 조절
- 재생 버튼의 10초 이동과 방향키 기반 5초 이동·볼륨 단축키
- 영상이 있는 곡의 악보 영상 표시와 숨기기
- 이름과 색상을 가진 연습 구간으로 즉시 이동
- 지휘자의 구간 시작·종료 기록, 수정·강조·완료·삭제
- Supabase Auth를 이용한 지휘자 권한과 읽기 전용 일반 사용자 구분

## 멀티 디바이스 같이 연습

단순히 각 브라우저에서 `play()`를 호출하면 네트워크와 디코딩, 출력 장치 지연 때문에 시작 시각이 달라집니다. 음원을 먼저 디코딩하고 서버가 충분한 준비 시간을 둔 공통 시각을 전달한 뒤, 각 기기가 그 시각을 자신의 Web Audio 시계로 변환해 예약 재생하도록 구성했습니다.

진단 모드에서는 서버 기준 위치, 기기 오디오 위치, 시계 보정값과 브라우저가 보고한 출력 지연을 함께 확인할 수 있습니다. 컴퓨터와 iPhone 내장 스피커 조합은 확인했으며 Bluetooth 출력은 추가 검증 범위로 남아 있습니다.

## 데이터와 배포

로컬 환경에서는 Node.js HTTP 서버와 WebSocket으로 실행합니다. 운영 환경에서는 Supabase Auth·PostgreSQL·Realtime에 지휘자 권한과 연습 구간을 저장하고, Vite로 빌드한 정적 사이트를 Vercel과 Route 53 서브도메인에 배포했습니다.

다섯 파트 MP3와 공통 무음 악보 영상의 시작 지점과 길이를 동일하게 맞추고, 곡 ID와 미디어 경로를 `tracks.json`에서 관리합니다.

## 검증

서버 권한, 구간 변경, 영상·음원 분리 제공, 공동 재생 예약 시각과 시계 변환을 자동 테스트합니다. 실기기 검증에서는 준비 신호와 공통 재생 시각, 화면 잠금 후 복귀 흐름을 확인할 수 있게 했습니다.
