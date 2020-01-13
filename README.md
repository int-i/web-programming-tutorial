# Web Programming Tutorial

## 시작하기

1. 메모장으로 진행해도 되지만 정신건강을 위해 코딩용 텍스트 에디터 [Visual Studio Code](https://code.visualstudio.com/)를 설치합니다. Git은 설치하지 않아도 됩니다.
2. Visual Studio Code를 실행합니다.
3. <kbd>Ctrl</kbd>+<kbd>N</kbd> 또는 `파일>새 파일`을 눌러 파일을 생성합니다.
4. <kbd>Ctrl</kbd>+<kbd>K</kbd><kbd>M</kbd> 또는 하단 탭 우측의 `일반 텍스트` 글자를 눌러 언어모드를 `HTML`로 변경합니다.
5. <kbd>Ctrl</kbd>+<kbd>Space</kbd>으로 자동완성 탭을 보이게 한 후 `HTML sample`을 클릭합니다.
6. 이제 웹 프로그래밍을 시작할 준비가 되었습니다. 아래와 같은 코드가 보이면 성공입니다.

참고: [VSCode Tutorial](https://demun.github.io/vscode-tutorial/)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>

</body>
</html>
```

## 개발하기

1. `*.html` 파일은 Chrome 브라우저 등을 이용해 열 수 있습니다.
2. [Web과 함께 시작하기](https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web)를 참고하면 웹 프로그래밍에 대한 기초를 다질 수 있습니다.
3. [개발자 로드맵(한글)](https://github.com/devJang/developer-roadmap)을 통해 앞으로 무엇을 배워야하는지 확인할 수 있습니다.
4. HTML/CSS 쉽게 알려주는 사이트 [웨버스터디](http://webberstudy.com/) 예제를 통해 코딩하는 방법을 배울 수 있습니다.
5. [레진 마크업 가이드](https://github.com/lezhin/markup-guide)에서 더 나은 코드를 작성하는 방법을 배울 수 있습니다.

참고: [고퀄리티⚡️개발 컨텐츠 모음](https://github.com/Integerous/goQuality-dev-contents#웹-관련)

### 서버에서 데이터 가져오기

1. [코드](https://github.com/int-i/web-programming-tutorial/archive/master.zip)를 다운로드받아 [src/simple-server](./src/simple-server/)에 들어갑니다.
2. API 서버를 실행시키기 위한 도구로 [Node.js](https://nodejs.org/ko/)를 설치합니다. LTS가 아닌 **현재버전(최신기능)**으로 설치해야합니다.
3. `simple-server` 폴더에서 <kbd>Shift</kbd> 우클릭을 통해 나오는 메뉴에서 `여기서 PowerShell 창 열기`를 클릭하여 명령창을 열어줍니다.
4. `npm install`을 입력해 서버 실행에 필요한 코드를 다운로드 받습니다. `install` 명령은 `package.json`의 `dependencies`에 있는 라이브러리를 자동으로 설치하는 명령입니다.
5. `npm start`을 입력해 서버를 실행시켜줍니다. 방화벽 해제가 필요하다면 Node.js가 서버를 열 수 있도록 방화벽을 풀어줍니다.
6. [http://localhost:3000/](http://localhost:3000/)에 접속해 서버가 정상적으로 실행되었는지 확인합니다.

### 로그인 구현하기

1. [코드](https://github.com/int-i/web-programming-tutorial/archive/master.zip)를 다운로드받아 [src/jwt-server](./src/jwt-server/)에 들어갑니다.
2. API 서버를 실행시키기 위한 도구로 [Node.js](https://nodejs.org/ko/)를 설치합니다. LTS가 아닌 **현재버전(최신기능)**으로 설치해야합니다.
3. `jwt-server` 폴더에서 <kbd>Shift</kbd> 우클릭을 통해 나오는 메뉴에서 `여기서 PowerShell 창 열기`를 클릭하여 명령창을 열어줍니다.
4. `npm install`을 입력해 서버 실행에 필요한 코드를 다운로드 받습니다. `install` 명령은 `package.json`의 `dependencies`에 있는 라이브러리를 자동으로 설치하는 명령입니다.
5. `npm start`을 입력해 서버를 실행시켜줍니다. 방화벽 해제가 필요하다면 Node.js가 서버를 열 수 있도록 방화벽을 풀어줍니다.
6. [http://localhost:3000/](http://localhost:3000/)에 접속해 서버가 정상적으로 실행되었는지 확인합니다.

## 배포하기

1. [GitHub Pages](https://pages.github.com/)를 이용하면 무료로 개인 홈페이지를 배포할 수 있습니다. [GitHub](https://github.com/)에 가입해 아이디를 만들어주세요.
2. 상단 탭 우측의 `+` 버튼을 눌러 `New repository`을 선택해주세요.
3. `Repository name`을 `[username].github.io`으로 설정하고 저장소를 생성해주세요. (ex. `int-i.github.io`)
4. 생성한 저장소에 들어가 본인의 웹 페이지 코드가 들어있는 `index.html`을 업로드해주세요.
5. `https://[username].github.io/`에 접속해 본인의 페이지가 성공적으로 배포되었는지 확인해주세요. (배포까지 5분 정도 소요됨)

참고: [Github Pages 사용하기](https://mygumi.tistory.com/285)
