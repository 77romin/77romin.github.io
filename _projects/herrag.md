---
title: "HERRAG"
order: 3
featured: true
monogram: "HR"
accent: "amber"
image: "https://raw.githubusercontent.com/77romin/herrag/main/docs/screenshots/story-chat.png"
kind: "AI · RAG Chat Game"
period: "2026"
role: "AI / Backend Developer"
focus: "문서 격리 검색 · 근거 판단 · 분기형 대화"
summary: "업로드한 MD·TXT·PDF 스토리 문서를 바탕으로 캐릭터 대화와 장면 분기, 엔딩을 만들어가는 RAG 기반 연애 시뮬레이션입니다."
stack: ["Python", "FastAPI", "LangChain", "Chroma", "RAG", "BM25", "JavaScript"]
github: "https://github.com/77romin/herrag"
---
## 문서가 곧 세계관이 되는 대화형 게임

HERRAG는 사용자가 업로드한 스토리 문서를 근거로 캐릭터와 대화하고, 선택과 상태 변화에 따라 장면과 엔딩이 달라지는 RAG 기반 연애 시뮬레이션입니다. 2인 팀으로 개발하며 문서 검색과 근거 판정, 대화 흐름을 연결했습니다.

## 구현한 핵심

- 스토리팩 단위로 검색 범위를 격리해 서로 다른 작품의 설정이 섞이지 않도록 했습니다.
- 검색 결과를 `supported`, `unspecified`, `contradiction`으로 판정해 문서 근거가 부족한 답변을 제어했습니다.
- Dense 검색과 BM25 결과를 가중 RRF로 결합해 현재 문서 안에서 의미와 키워드를 함께 탐색했습니다.
- 장면 진행, 선택지 분기, 엔딩, 상태 검증과 콘텐츠 해시 기반 캐시를 구현했습니다.
- 별도 RAG 평가 흐름을 구성해 검색과 답변 품질을 반복적으로 확인할 수 있게 했습니다.

## 기술적 선택

캐릭터의 자연스러운 말투보다 먼저 원문 세계관을 지키는 것을 목표로 삼았습니다. 검색 범위를 현재 스토리팩으로 제한하고 근거 상태를 명시적으로 판정해, 생성 모델이 문서 밖 설정을 임의로 확장하는 문제를 줄였습니다.
