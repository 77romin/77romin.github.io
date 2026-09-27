---
title: "카페 메뉴 관리 서비스"
order: 5
featured: true
monogram: "CF"
accent: "blue"
image: "https://raw.githubusercontent.com/77romin/NBE10-12-1-Team5/main/front/public/coffee_bean.jpg"
kind: "Full-stack · Team Project"
period: "2026.06"
role: "Frontend Lead / Project Coordinator"
focus: "고객 주문 · 관리자 운영 · 실시간 상태 반영"
summary: "고객의 메뉴 주문부터 관리자의 상품·주문·재고 운영까지 하나의 흐름으로 연결한 카페 메뉴 관리 서비스입니다."
stack: ["Java", "Spring Boot", "Spring Data JPA", "Next.js", "TypeScript", "MySQL", "Docker", "SSE"]
github: "https://github.com/77romin/NBE10-12-1-Team5"
---
## 주문 경험과 매장 운영을 함께 설계

고객은 메뉴를 탐색하고 주문할 수 있으며, 관리자는 상품과 주문, 재고와 통계를 한 화면에서 운영할 수 있는 팀 프로젝트입니다. 프론트엔드 설계와 구현을 주도하고 백엔드 코드 리뷰와 품질 관리, 프로젝트 조율을 맡았습니다.

## 구현한 핵심

- Next.js로 고객 주문 화면과 관리자용 상품·주문·통계 대시보드를 구현했습니다.
- Spring Boot REST API와 SSE를 연동해 주문 상태가 관리자 화면에 실시간으로 반영되도록 했습니다.
- 주문 상태 전이, 배송일 관리, 취소 시 재고 복원, 상품 소프트 삭제를 구현했습니다.
- 프론트엔드 구조와 사용자 흐름을 설계하고 백엔드 리뷰와 팀 일정 조율을 함께 수행했습니다.

## 기술적 선택

주문 상태와 재고처럼 정합성이 중요한 데이터는 서버에서 전이 규칙을 관리하고, 화면 갱신은 SSE로 전달했습니다. 상품은 즉시 삭제하는 대신 소프트 삭제를 적용해 과거 주문 기록과 운영 데이터를 안전하게 유지했습니다.

[시연 영상 보기](https://www.youtube.com/watch?v=1s7iyjXlGFQ)
