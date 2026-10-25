# WELLGOING · Premium Website V7 (Public Preview)

웰고잉 B안 프리미엄 홈페이지의 **독립된 공개 테스트 저장소**입니다. 기존 `beduleham/wellgoing-site`는 변경하지 않습니다.

## Vercel 미리보기 배포
- 신규 Vercel 프로젝트에서 이 저장소 `beduleham/wellgoing-premium-v7`을 Import
- Framework Preset: **Other**
- Root Directory: `./`
- Build Command: 비워두기 (빌드 불필요)
- Output Directory: `.` 또는 기본값 유지
- 신규 `.vercel.app` 도메인에서 테스트

## 공개 테스트 범위
- 9개 콘텐츠 페이지 + 개인정보처리방침 **검토용 초안**
- 이미지, 편백 숲 무음 모션, 반응형 화면 및 UI 효과
- 문의 폼: **mailto** 방식 (서버에 개인정보를 저장하지 않음)
- 관리자 로그인/문의 DB/API: **미배포**. 별도 DB와 서버리스 API 연동 필요.
- 검색 노출 방지: 임시로 `X-Robots-Tag: noindex, nofollow` 설정.

## 주의
- 원본 제품·시험·인증 문구는 정식 공개 전 최종 검수 필요.
- 절대로 .env, 관리자 비밀번호, 고객 데이터, SQLite DB를 공개 저장소에 올리지 마세요.
- V7 정적 테스트 소스는 별도 업로드 패키지에서 추가합니다.

V7 source, design and content are for WELLGOING website preview.
