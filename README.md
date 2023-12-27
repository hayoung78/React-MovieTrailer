
# :movie_camera: TOY-PROJECT :  OMEGA3BOX
### 영화 트레일러 오픈 API를 활용하여 영화 목록을 조회하고 사이트 구현하기
---
### :calendar: 개발기간 
#### 2023.12.17~ 2023.12.25
---

### 배포 주소 or 시연 영상 : https://frontend-6-2-2.vercel.app/
---
### 프로젝트 폴더 구조 :
![image](https://github.com/secondflow02/FRONTEND6-2-2/assets/142880051/270266dc-ffc8-4be7-afba-0340c1851507)

---
### :busts_in_silhouette:팀원 : 

|<img src="https://github.com/secondflow02/FRONTEND6-2-2/assets/98089768/91c294f0-a405-42a2-914b-c9574dd06968" width="100px">|<img src="https://github.com/secondflow02/FRONTEND6-2-2/assets/142880051/008794f2-ba60-47e5-8694-9f219399b398" width="100px">|<img src="https://github.com/secondflow02/FRONTEND6-2-2/assets/142880051/6a2d6301-52a3-49f3-a92f-8cc1190a1b84" width="100px">|
|:---:|:---:|:---:|
|[](https://github.com/ijimlnosk)|[](https://github.com/hayoung78)||[](https://github.com/KR-HeoJU)|
|:mouse:김진솔| :rabbit:최하영|:chicken:허진욱|

---
### 🚀 기능 요구 사항

영화 트레일러 오픈 API를 활용하여 영화 목록을 조회하고 사이트 구현해야 한다.

```
- https://developers.themoviedb.org/3/movies/get-movie-videos
- API Key를 발급 받아야 한다.
- react-query를 사용하여 데이터를 캐싱한다.
- 로딩 중에는 목록 가장 하단 부에 skeleton UI를 나타낸다.
- useInfinitQuery를 사용하여 무한 스크롤링으로 불러온다.
```

```
페이지 구성

- home page
- now playing page
- upcoming page
- top-rated page
- 영화 상세 페이지
- 검색 결과 페이지
```

```
- 스크롤을 감지하여 scrollUp button 표시되고, 누르면 최상단으로 스크롤 이동한다.
- favicon을 이용하여 웹 표시 아이콘을 수정한다.
```

```
페이지 별 구현 사항

movies / 리스트 페이지
- 한번 당 가져올 데이터 최대 20
- 제목, 포스터, 미리보기(소재), 별점 표시
- 포스터 없는 경우, 대체 이미지 사용

movie / 상세 페이지
- 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
- 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
- 그 외의 데이터 추가 활용 여부는 자유
    
search
- 제목, 포스터, 미리보기(소개), 별점
- 포스터 없는 경우, 대체 이미지 사용
```

```
협업 시스템화 하기

- 기능별 브랜치를 나누어 작업하고 merge 과정이 히스토리에 보여야 한다.
- 컨플릭트 방지를 위해 코드 컨벤션을 명확히 한다.
- 애자일 방식을 도입한다. 애자일의 내용은 노션, 지라 등을 통해 관리하여 링크를 README.md에 포함한다.
- 각 조마다의 코드 컨벤션 및 커밋 컨벤션 등을 통일화 한다.
- Eslint와 Prettier를 통해 코드 포맷팅을 통일화 한다.
```

### 요구 사항 구현 내역 : 
* NowPlaying, TopRanking , UpComing페이지별 api 데이터 받아오기
![image](https://github.com/secondflow02/FRONTEND6-2-2/assets/142880051/3a477b15-20a8-4833-b4b5-2faba6f2280d)

* 각 페이지 별 InfiniteQuery 와 useIntersectionObserver 를 활용하여 인피니트스크롤 & 스크롤바 기능 구현
  <img src="https://github.com/secondflow02/FRONTEND6-2-2/assets/142880051/d0433eff-0b9c-459d-b640-3d249a05a77b" width="1000px">

* 영화 목록 조회 & 검색 기능 구현
![image](https://github.com/secondflow02/FRONTEND6-2-2/assets/142880051/b7af0590-e2ce-4c83-b24a-7ea57365cb40)

* favicon 바꾸기

![image](https://github.com/secondflow02/FRONTEND6-2-2/assets/142880051/51b61432-8508-4941-98ad-693fde07e9cc)

* scrollbar 만들기

![image](https://github.com/secondflow02/FRONTEND6-2-2/assets/142880051/6973c78e-4b15-4959-8f08-d2eefe509269)


---
### 사용기술 스택 :
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css&logoColor=white">

---
### 코드 및 깃허브 커밋 컨벤션

코드 컨벤션 https://www.notion.so/Code-Convention-b7072bccc00941f7a57c179ac07d1cd6

깃허브 커밋 컨벤션 https://www.notion.so/Git-Commit-Convention-5aa75099024e4ec0b4c95057a5fbbcf7
