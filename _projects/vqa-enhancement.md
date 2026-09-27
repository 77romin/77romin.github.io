---
title: "VQA Enhancement"
order: 9
featured: true
monogram: "VQ"
accent: "violet"
image: "https://raw.githubusercontent.com/77romin/vqa-enhancement/main/docs/images/vqa-architecture-data-pipeline.png"
image_alt: "VQA 모델의 데이터 파이프라인과 학습·추론 구조"
kind: "AI · Experiment"
period: "2026"
role: "ML Engineer"
focus: "데이터 신뢰성 · 목표 정렬 · 후보 확률 추론"
summary: "VQA 파이프라인을 데이터 검증부터 학습 목표와 추론까지 재설계해 기록된 Kaggle 점수를 0.70837에서 0.95829로 개선한 분석 프로젝트입니다."
stack: ["Python", "PyTorch", "Transformers", "Qwen-VL", "LoRA", "VQA", "Computer Vision"]
github: "https://github.com/77romin/vqa-enhancement"
---
## 프로젝트 개요

기존 VQA baseline은 전체 데이터 중 200개만 사용하고, 정답이 아닌 긴 프롬프트 전체에 loss를 적용하며, 4지선다 문제를 자유 생성과 취약한 문자열 파서로 해결하고 있었습니다. 데이터 신뢰성부터 학습 목표, 모델 용량, 추론 의사결정과 제출 안정성까지 한 흐름으로 다시 설계했습니다.

## 기록된 결과

| 지표 | 기존 | 개선 | 변화 |
| --- | ---: | ---: | ---: |
| Kaggle score | 0.70837 | 0.95829 | +0.24992 |
| 정확도 | 70.837% | 95.829% | +24.992%p |
| 오류율 | 29.163% | 4.171% | −24.992%p |

두 노트북에는 저장된 실행 출력이 없어 점수는 사용자 제공 Kaggle 결과입니다. 여러 변경을 동시에 적용했기 때문에 개별 변경의 기여도를 단정하지 않았습니다.

## 기존 파이프라인 진단

- 실제 학습 데이터가 약 180개에 불과해 분포를 충분히 보지 못했습니다.
- prompt와 padding까지 label로 사용해 gradient 대부분이 질문 복원에 쓰였습니다.
- 같은 이미지의 train·validation 중복 여부를 확인하지 않았습니다.
- 3B·4-bit 모델과 384×384 고정 입력이 작은 글자와 복합 추론을 제한했습니다.
- 최대 2 token을 생성한 뒤 파싱하고, 실패하면 `a`로 처리해 오류가 숨겨졌습니다.
- checkpoint, 추론 재개와 제출 schema 검증이 없었습니다.

## 데이터와 학습 개선

train·dev·test·sample submission의 열, ID, 결측값, 이미지와 답 범위를 fail-fast로 검사합니다. SHA-256과 pHash로 동일하거나 유사한 이미지를 묶고 `StratifiedGroupKFold`로 같은 이미지 그룹이 양쪽 split에 들어가지 않게 했습니다.

모델은 Qwen2.5-VL-3B 4-bit에서 Qwen3.5-9B BF16으로 확장하고 이미지 입력 범위를 최대 768 image token까지 늘렸습니다. `AnswerOnlyCollator`에서 prompt와 padding을 `-100`으로 가려 정답을 포함한 assistant target 구간에만 loss가 적용되도록 변경했습니다.

## 후보 확률 기반 추론

답을 자유 생성하지 않고 같은 prompt 뒤에 `a`, `b`, `c`, `d`를 각각 붙여 continuation의 평균 log-probability를 직접 비교합니다. 출력 형식 오류와 parser fallback을 제거하고 후보별 score와 confidence를 저장할 수 있게 했습니다.

선택지 순서는 학습 중 무작위로 바꾸고, 추론에서는 cyclic permutation 결과를 원래 위치로 복원해 평균함으로써 특정 문자 위치 편향을 줄였습니다.

## 운영 안정성

파이프라인을 `precheck → audit → zero-shot → smoke → train → validate → infer → submit_check` 단계로 분리했습니다. checkpoint와 재개 가능한 추론, atomic CSV 저장, sample submission 기반 schema·ID·허용 문자 검증으로 장시간 학습과 제출 과정의 실패 비용을 줄였습니다.

## 해석의 한계

개선판은 여러 요소가 동시에 바뀌었고 ablation 결과가 없습니다. 따라서 점수 상승을 더 큰 모델이나 특정 기법 하나의 효과로 설명할 수 없습니다. 모델 revision 고정, 중복 차단 범위와 학습·추론 길이 설정 등 남은 재현성 문제도 README에 함께 기록했습니다.
