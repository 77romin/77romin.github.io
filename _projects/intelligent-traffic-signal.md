---
title: "Intelligent Traffic Signal"
order: 8
featured: false
monogram: "IT"
accent: "blue"
image: "https://raw.githubusercontent.com/77romin/CapstoneProject2019/master/README_Image/structure.png"
image_alt: "Raspberry Pi와 YOLOv3를 이용한 지능형 교통 신호 전체 시스템 구성도"
image_fit: "contain"
kind: "Capstone · Computer Vision"
period: "2019"
role: "Team Developer"
focus: "실시간 차량 인식과 신호 정책"
summary: "Raspberry Pi와 YOLOv3 차량 인식을 이용해 교차로 대기 시간을 줄이는 지능형 교통 신호 캡스톤 프로젝트입니다."
stack: ["Java", "Python", "C#", "YOLOv3", "OpenCV", "imagezmq", "Raspberry Pi", "Unity"]
github: "https://github.com/77romin/CapstoneProject2019"
video: "https://youtu.be/scfMT4KhBmE"
---
## 프로젝트 개요

시간대에 따라 고정된 교통 신호는 실제 차량 수가 적은 상황에도 불필요한 대기를 만듭니다. 고가의 매설형 차량 검지기 대신 Raspberry Pi 카메라와 객체 인식을 이용해 도로별 차량 수를 파악하고, 그 결과로 신호 정책을 조정하는 캡스톤 시스템을 구현했습니다.

## 전체 데이터 흐름

1. Raspberry Pi가 교차로 시뮬레이션 화면을 촬영합니다.
2. `imagezmq`로 영상을 인식용 컴퓨터에 실시간 전송합니다.
3. OpenCV와 YOLOv3가 도로 영역별 차량 수를 계산합니다.
4. 인식 결과를 JSON으로 Java 서버에 전달합니다.
5. 서버가 차량 수와 대기시간을 종합해 신호 정책을 선택합니다.
6. Unity가 시간대별 차량·보행자 흐름과 정책 결과를 시각화합니다.

## 객체 인식 데이터

차량 1,030개를 Bounding Box로 라벨링한 이미지로 YOLOv3 custom weight를 학습했습니다. 이 중 810개는 Raspberry Pi 카메라로 촬영해 품질이 낮아진 이미지이고, 220개는 Unity 디스플레이 원본을 기반으로 구성했습니다. 실제 입력 장치의 화질 저하를 학습 데이터에 포함해 시뮬레이션 원본에만 맞는 모델이 되지 않도록 했습니다.

## 신호 정책과 시뮬레이션

Unity 환경에서 출퇴근, 한적한 낮과 새벽의 차량 수·보행자 수·차량 속도를 다르게 구성했습니다. Java 서버는 날짜와 시간대, 각 도로의 차량 수와 대기시간을 받아 평균 대기시간을 줄이는 정책을 분배했습니다.

한적한 새벽 예시에서는 고정 정책과 지능형 정책의 차량·보행자 평균 대기시간을 비교해 개선 방향을 확인했습니다.

## 배운 점

카메라, 인식 모델, Java 서버와 Unity 시뮬레이터처럼 서로 다른 실행 환경을 하나의 데이터 흐름으로 연결했습니다. 모델 정확도뿐 아니라 영상 전송, 도로 영역 구분, 정책 판단과 평가 지표까지 전체 시스템 관점에서 설계한 경험입니다.
