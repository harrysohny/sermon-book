시냇가에 심은 나무 — 디지털 아카이브 완성형

업로드 위치
- index.html → 저장소 루트
- style.css → 저장소 루트
- app.js → 저장소 루트
- sermons.json → data/sermons.json
- images/site-qr.png → images/site-qr.png

추가 기능
- 오늘의 한 문장
- 최근 읽은 설교 3편
- 읽은 설교 ✓ 표시
- 설교 공유 / 주소 복사
- 설교별 공유 주소
- 제작 취지
- QR 코드
- 오탈자·내용 수정 제안
- Harry’s Bible Notes 연결
- 방문자 수 없음

업로드 후 service-worker.js 캐시 버전을 한 단계 올리고 Commit 하십시오.

수정 제안·문의 이메일: harrysohny@aol.com

TTS 괄호 읽기 제외
- 화면의 괄호 표기는 그대로 유지합니다.
- TTS에서는 ( ... ) 및 （ ... ） 안의 내용을 읽지 않습니다.
- 예: 빅토리아 여왕(Queen Victoria) → 음성: 빅토리아 여왕
- 예: 셰익스피어(William Shakespeare) → 음성: 셰익스피어

목록 이동 보정
- 설교 상세 화면의 '← 목록으로' 버튼이 스크롤을 따라 상단에 고정됩니다.
- 긴 설교를 읽다가도 맨 위로 올라갈 필요 없이 바로 목록으로 돌아갈 수 있습니다.
- iPhone Safari/PWA의 안전영역을 고려했습니다.

최신 sermons.json 반영
- 사용자 업로드 최신본으로 교체
- 설교 수: 102편
- 기존 기능 유지:
  · TTS 괄호 안 내용 읽지 않기
  · ← 목록으로 버튼 스크롤 고정
  · 오늘의 한 문장
  · 최근 읽은 설교
  · 읽음 표시
  · 공유 / 주소 복사
  · QR 코드
  · 수정 제안 이메일
