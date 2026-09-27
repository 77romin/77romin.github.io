---
title: "!WEARy"
order: 1
featured: true
monogram: "WY"
accent: "violet"
image: "https://raw.githubusercontent.com/77romin/weary/main/docs/images/weary-closet.png"
kind: "iOS · Fashion Platform"
period: "2026"
role: "iOS Developer"
focus: "로컬 우선 데이터 · 온디바이스 비전 · 커뮤니티"
summary: "매일의 착장을 기록하고 옷의 활용도 확인, 스타일 공유와 중고거래까지 연결하는 iOS 패션 플랫폼입니다."
stack: ["SwiftUI", "SwiftData", "Apple Vision", "Supabase", "PostgreSQL", "Realtime"]
github: "https://github.com/77romin/weary"
---
## 옷장 관리부터 재사용까지 하나의 흐름으로

!WEARy는 옷장 관리, 착장 기록, 패션 커뮤니티와 중고거래를 하나의 사용자 흐름으로 연결한 iOS 앱입니다. 사용자가 보유한 옷과 실제 착장을 기록하고, 활용도가 낮은 옷은 다른 사용자에게 다시 연결할 수 있도록 설계했습니다.

## 구현한 핵심

- SwiftUI로 옷장, 착장 기록, 커뮤니티, 중고거래 화면을 하나의 앱 경험으로 구성했습니다.
- Apple Vision을 이용해 촬영한 의류 사진의 배경을 제거하고 온디바이스 착장 후보를 추천했습니다.
- 개인 옷장과 착장 기록은 SwiftData에, 공개 게시물과 거래 데이터는 Supabase에 저장하는 로컬 우선 구조를 적용했습니다.
- PostgreSQL RLS·RPC·Trigger로 사용자별 접근 권한과 데이터 무결성을 서버에서 보호했습니다.

## 기술적 선택

개인 데이터와 공개 데이터의 생명주기와 접근 범위가 다르다는 점을 기준으로 저장소를 분리했습니다. 네트워크가 없어도 개인 옷장과 착장을 사용할 수 있게 하면서, 공유가 필요한 데이터만 서버의 권한 정책 아래 동기화하도록 경계를 설정했습니다.
