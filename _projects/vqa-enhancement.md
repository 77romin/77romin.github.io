---
title: "VQA Enhancement"
order: 3
featured: true
monogram: "VQ"
accent: "violet"
kind: "AI · Experiment"
period: "2026"
role: "ML Engineer"
focus: "데이터 · 학습 목표 · 추론 정렬"
summary: "VQA 파이프라인의 병목을 분석하고 데이터 검증, answer-target 학습, 후보 점수 기반 추론으로 재설계한 실험입니다."
stack: ["Python", "PyTorch", "Jupyter", "VLM", "LoRA"]
github: "https://github.com/77romin/vqa-enhancement"
---
## 높은 점수보다 설명 가능한 개선

기존 VQA baseline은 전체 데이터 중 일부만 사용하고, 정답보다 긴 prompt 전체에 loss를 적용하며, 4지선다 문제를 자유 생성과 문자열 파서로 해결하고 있었습니다. 평가 문제의 구조와 데이터·학습·추론 목표를 다시 맞추는 데 집중했습니다.

## 개선한 핵심

- 데이터 checksum, 중복 이미지와 질문 분포를 감사하고 group-safe split을 적용했습니다.
- prompt와 padding을 가려 assistant 정답 구간에 학습을 집중했습니다.
- 자유 생성 대신 a·b·c·d 후보의 log probability를 직접 비교하도록 추론 방식을 변경했습니다.
- checkpoint, 재개 가능한 추론, atomic save, 제출 형식 검증으로 실험 운영의 실패 지점을 줄였습니다.

## 결과와 해석

기록된 실험에서 정확도는 0.70837에서 0.95829로 상승했습니다. 다만 여러 요소가 동시에 변경되었기 때문에 단일 변경의 기여로 과장하지 않고, 재현 가능한 결과를 위해 ablation과 실행 산출물 보존이 다음 단계라는 한계도 함께 문서화했습니다.
