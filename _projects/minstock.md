---
title: "Minstock"
order: 2
featured: true
monogram: "MS"
accent: "blue"
image: "https://raw.githubusercontent.com/77romin/minstock/main/docs/images/dashboard.png"
image_alt: "Minstock 통합 자산 현황 터미널 대시보드"
kind: "Go · Terminal UI"
period: "2026"
role: "Go Developer"
focus: "멀티 증권사 통합 · 빠른 로딩 · 자격증명 보호"
summary: "여러 증권사의 국내·미국주식 자산을 하나의 터미널에서 조회하는 Go 기반 포트폴리오 TUI입니다."
stack: ["Go", "Bubble Tea", "Lip Gloss", "SQLite", "REST API", "OAuth", "go-keyring"]
github: "https://github.com/77romin/minstock"
---
## 프로젝트 개요

Minstock은 NH투자증권과 키움증권의 국내·미국주식 자산을 한 화면에서 확인하는 Go 기반 조회 전용 TUI입니다. 증권사마다 다른 인증, 시장, 통화와 종목 식별 체계를 공통 모델로 정규화하고 자산 조회부터 차트 탐색까지 키보드만으로 이어지게 했습니다.

실제 API 연결뿐 아니라 모의 서버와 자격증명 없는 데모 모드를 제공해 계좌 정보 없이도 전체 흐름을 확인할 수 있습니다.

## 핵심 구현

- 서로 다른 응답을 `Account`, `Balance`, `Position`, `Symbol`, `Candle` 공통 도메인으로 변환
- SQLite 스냅샷을 먼저 복원한 뒤 계좌·환율·시세·분석을 단계적으로 갱신
- 티커·종목코드·한글/영문 종목명 기반 로컬 검색과 관심종목 통합
- OHLC 캔들 차트와 MA5·20·60·120, 틱부터 년 단위까지 봉 전환
- Vim 스타일 이동, 콜론 명령과 좁은 터미널을 고려한 자산 열 탐색
- 변화율·거래량·고점 거리·체결강도에 근거한 설명 가능한 규칙 분석

## 아키텍처와 성능 전략

Bubble Tea의 단방향 상태 흐름 위에서 애플리케이션 서비스는 증권사 응답 필드가 아닌 포트 인터페이스에만 의존합니다. 공급자별 변경을 어댑터 내부로 격리해 다른 증권사를 같은 방식으로 추가할 수 있게 했습니다.

첫 화면은 `SQLite 스냅샷 → 최신 계좌·환율 → 종목별 시세·분석` 순서로 표시합니다. 외부 API가 느리거나 일시적으로 실패해도 마지막 정상 화면을 즉시 보여주고, 원격 데이터가 도착하는 대로 교체합니다.

## 조회 전용 안전 경계

- 실행 경로에서 주문 기능과 주문 포트를 제외했습니다.
- 키움 API는 허용된 조회 API ID와 경로 조합만 요청합니다.
- App Key, Secret과 토큰은 SQLite나 설정 파일이 아닌 OS 키링에 저장합니다.
- 진단 출력에서 토큰·계좌번호·비밀값을 제외합니다.
- NH 토큰은 만료 시각과 함께 캐시해 불필요한 재발급을 줄였습니다.

## 검증과 범위

Go test, `httptest`, `go vet`으로 도메인 계산, API 계약, 저장소와 TUI 회귀를 검증합니다. 금액과 수익률은 `decimal`로 계산해 부동소수점 오차를 피했습니다. 이 프로젝트는 개인 투자 현황을 조회하는 도구이며 주문 실행이나 투자 수익을 보장하는 기능은 포함하지 않습니다.
