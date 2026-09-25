---
title: "Intelligent Traffic Signal"
order: 4
featured: false
monogram: "IT"
accent: "blue"
kind: "Capstone · Computer Vision"
period: "2019"
role: "Team Developer"
focus: "실시간 차량 인식과 신호 정책"
summary: "Raspberry Pi와 YOLOv3 차량 인식을 이용해 교차로 대기 시간을 줄이는 지능형 교통 신호 캡스톤 프로젝트입니다."
stack: ["Java", "Python", "YOLOv3", "OpenCV", "Raspberry Pi", "Unity"]
github: "https://github.com/77romin/CapstoneProject2019"
---
## 교통량에 반응하는 신호 체계

고정된 신호 주기는 실제 교통량이 적은 시간에도 불필요한 대기를 만듭니다. 고가의 매설형 검지 장치 대신 Raspberry Pi 카메라와 객체 인식을 활용해 각 도로의 차량 수를 파악하고 신호 정책에 반영하는 시스템을 팀으로 구현했습니다.

## 구현한 핵심

- Raspberry Pi가 촬영한 영상을 `imagezmq`로 인식용 컴퓨터에 실시간 전송했습니다.
- OpenCV와 YOLOv3 custom weight로 도로 영역별 차량 수를 인식했습니다.
- 인식 결과를 JSON으로 Java 서버에 전달해 교차로 신호 정책을 계산했습니다.
- Unity로 시간대별 차량과 보행자 흐름을 시뮬레이션하고 기존 정책과 대기 시간을 비교했습니다.

## 배운 점

카메라, 인식 모델, 서버, 시뮬레이터처럼 서로 다른 실행 환경을 하나의 데이터 흐름으로 연결한 경험입니다. 모델 정확도뿐 아니라 전송 지연, 도로 영역 구분, 정책의 평가 방법까지 전체 시스템 관점에서 살피는 계기가 되었습니다.
