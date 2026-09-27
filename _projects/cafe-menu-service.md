---
title: "카페 메뉴 관리 서비스"
order: 5
featured: true
monogram: "CF"
accent: "blue"
image: "https://raw.githubusercontent.com/77romin/NBE10-12-1-Team5/main/front/public/coffee_bean.jpg"
image_alt: "카페 메뉴 관리 서비스의 커피 원두 이미지"
kind: "Full-stack · Team Project"
period: "2026.06 · 8일"
role: "Frontend Lead / Project Coordinator"
focus: "고객 주문 · 관리자 운영 · 실시간 상태 반영"
summary: "고객의 메뉴 주문부터 관리자의 상품·주문·재고 운영까지 하나의 흐름으로 연결한 카페 메뉴 관리 서비스입니다."
stack: ["Java 25", "Spring Boot 4", "Spring Data JPA", "Next.js 16", "React 19", "TypeScript", "MySQL 8.4", "Docker", "SSE"]
github: "https://github.com/77romin/NBE10-12-1-Team5"
video: "https://www.youtube.com/watch?v=1s7iyjXlGFQ"
---
## 프로젝트 개요

고객의 메뉴 탐색과 주문부터 관리자의 상품·주문·계정·통계 운영까지 연결한 5인 팀 풀스택 프로젝트입니다. 2026년 6월 4일부터 11일까지 8일 동안 개발했으며, 프론트엔드 설계와 구현, 백엔드 코드 리뷰와 품질 관리, 프로젝트 총괄과 시연 영상 제작을 담당했습니다.

## 고객과 관리자 기능

### 고객

- 상품 목록과 상세 조회
- 클라이언트 사이드 장바구니
- 배송지 입력과 주문 생성
- 주문 내역과 상태 조회

### 관리자

- 상품 등록·수정·삭제와 이미지 URL·재고 관리
- 주문 목록 조회, 상태 변경과 취소
- 사용자 정보 조회·수정·삭제
- 일별·월별 매출 차트와 판매량 상위 원두 조회
- 신규 주문 SSE 실시간 알림

## 핵심 비즈니스 규칙

오후 2시 이전 주문은 당일, 이후 주문은 다음 날 배송되도록 자동 계산합니다. 주문 상태는 `PENDING → PROCESSING → SHIPPED → DELIVERED` 순서로 전이하며, 취소는 `PENDING` 상태에서만 허용합니다. 주문을 취소하면 포함된 상품의 재고를 자동으로 복원합니다.

사용자·주문·주문상품은 즉시 삭제하지 않고 `deleteDate`를 이용해 소프트 삭제합니다. 사용자를 삭제할 때는 기존 이메일을 별도로 보존하고 원래 필드를 비워 재가입 가능성을 유지합니다.

## 시스템 구성

프론트엔드는 Next.js 16, React 19와 TypeScript로 구성했고, 백엔드는 Spring Boot 4 REST API와 Spring Data JPA를 사용했습니다. MySQL 8.4는 Docker Compose로 실행하며 H2 인메모리 데이터베이스로 테스트를 분리했습니다. API 계약은 SpringDoc OpenAPI와 Swagger UI로 확인할 수 있습니다.

## 담당과 협업

고객 주문 화면과 관리자 대시보드의 구조와 사용자 흐름을 설계하고 구현했습니다. 동시에 백엔드 코드 리뷰와 품질 기준을 관리하고, 프론트엔드와 API 일정이 어긋나지 않도록 팀 작업을 조율했습니다.
