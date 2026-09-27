---
title: "minstock"
order: 2
featured: true
monogram: "MS"
accent: "blue"
image: "https://raw.githubusercontent.com/77romin/minstock/main/docs/images/dashboard.png"
kind: "Go · Terminal UI"
period: "2026"
role: "Go Developer"
focus: "멀티 증권사 통합 · 빠른 로딩 · 자격증명 보호"
summary: "여러 증권사의 국내·미국주식 자산을 하나의 터미널에서 조회하는 Go 기반 포트폴리오 TUI입니다."
stack: ["Go", "Bubble Tea", "SQLite", "REST API", "OAuth", "go-keyring"]
github: "https://github.com/77romin/minstock"
---
## 흩어진 증권 계좌를 하나의 터미널로

minstock은 NH투자증권과 키움증권의 국내·미국주식 자산을 하나의 화면에서 확인하는 조회 전용 TUI입니다. 증권사마다 다른 인증과 응답 구조를 공통 도메인으로 통합해 일관된 포트폴리오 경험을 제공합니다.

## 구현한 핵심

- 서로 다른 증권사 API 응답을 공통 계좌·보유종목·시세 모델로 변환했습니다.
- SQLite 캐시를 먼저 표시하고 원격 데이터를 점진적으로 갱신해 빠른 첫 화면을 제공했습니다.
- 종목 검색, 캔들 차트, 이동평균선, 관심종목과 규칙 기반 분석 기능을 구현했습니다.
- 주문 기능을 범위에서 제외하고 조회 API allowlist와 OS 키링을 적용해 안전 경계를 명확히 했습니다.

## 기술적 선택

외부 API 지연이나 장애가 첫 화면을 막지 않도록 캐시와 원격 조회를 분리했습니다. 또한 투자 도구에서 불필요한 권한은 위험이라는 기준으로 주문 기능을 배제하고, 토큰과 자격증명은 설정 파일이 아닌 운영체제 키링에 보관하도록 설계했습니다.
