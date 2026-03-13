# Developer Portfolio (Vanilla + Vercel)

Vercel에 바로 배포할 수 있도록 구성한 정적 개발자 포트폴리오 템플릿입니다.

## 구성

- `index.html`: 4개 섹션(`Home`, `About`, `Projects`, `Contact`) 마크업
- `styles.css`: 디자인 토큰, 반응형 레이아웃, 애니메이션
- `script.js`: 데이터 객체 기반 렌더링, `mailto` 링크, 모바일 내비게이션
- `assets/`: 이미지 및 정적 리소스 폴더

## 콘텐츠 수정

`script.js`의 `portfolioData` 객체를 수정하면 화면이 자동으로 갱신됩니다.

- `profile`: 이름, 한줄 소개, 상세 소개
- `techStack`: 기술 목록 배열
- `projects`: 프로젝트 4개 배열 (`title`, `summary`, `tech`, `role`, `period`, `link`)
- `contact`: `email`, `github`, `etcLinks`

## 로컬 실행

아래 중 하나로 정적 서버를 실행합니다.

```bash
python -m http.server 5500
```

브라우저에서 `http://localhost:5500` 접속 후 UI/링크/반응형을 점검합니다.

## Vercel 배포 (GitHub 자동배포)

1. GitHub 저장소를 만들고 코드를 `main` 브랜치에 푸시합니다.
2. [Vercel](https://vercel.com)에서 `Add New Project`를 선택합니다.
3. GitHub 저장소를 Import 후 기본 설정으로 배포합니다.
4. 이후 `main` 브랜치에 푸시하면 자동으로 재배포됩니다.

## 점검 체크리스트

- 섹션 앵커 이동(`home/about/projects/contact`) 정상 동작
- 프로젝트 카드 4개 렌더링 및 링크 이동 동작
- `mailto` 클릭 시 메일 클라이언트 실행 및 제목 프리필 확인
- 모바일/태블릿/데스크톱에서 레이아웃 깨짐 없음
