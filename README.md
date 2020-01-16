# Vue Movie list app

[Todo App](https://github.com/HeropCode/Vue-Todo-app) 예제를 통해 Vue CLI 없이 개발 환경을 구성했다면,<br>
이번에는 [Vue CLI](https://cli.vuejs.org/)를 사용해 손쉽고 빠르게 개발 환경을 구성합니다.<br>

Movie API를 사용해 <strong>영화 검색 페이지</strong>를 만듭니다.

[DEMO](https://vue-movie-app-for-fastcampus.web.app/)

## Vue CLI

Vue CLI를 전역 모드(`-g`)로 설치합니다.<br>
`vue`명령어를 사용할 수 있습니다.

```bash
$ npm i @vue/cli -g
```

다음과 설치 및 버전을 확인할 수 있습니다.

```bash
$ vue --version
```

Vue CLI를 통해 쉽게 프로젝트를 (바탕화면에 혹은 원하는 위치에) 생성합니다.

```bash
$ cd desktop
$ vue create YOUR_PROJECT_NAME
```

## Vue UI

Vue CLI는 그래픽 인터페이스(GUI)를 사용하여 프로젝트를 작성하고 관리하는 기능을 제공합니다.

```bash
$ vue ui
```

## Vuex

https://vuex.vuejs.org/kr/

상태 관리 패턴(Store)을 사용하기 위해 Vuex를 설치합니다.

## Vuetify

https://vuetifyjs.com/ko/

Vuetify는 Material Design 사양을 기준으로 웹앱 구축에 필요한 다양한 기능을 제공합니다.<br>
특히 UI components를 사용해 손쉽고 빠르게 프로젝트의 UI를 구성할 수 있습니다.

## OMDb API

http://www.omdbapi.com/

OMDb API는 영화 정보를 얻기 위한 RESTful 웹 서비스입니다.<br>
무료로 API키를 발급받아(하루 1000건 제한) 사용할 수 있습니다.

## Axios

https://github.com/axios/axios

Axios는 HTTP 클라이언트 라이브러리로써, OMDb API를 통해 영화 정보(비동기 HTTP 데이터)를 요청하기 위해 사용합니다.<br>
이 예제에서는 비동기 방식에 대한 이해가 매우 중요합니다.

## Masonry(for Vue)

https://github.com/shershen08/vue-masonry#readme

검색된 영화 목록을 핀터레스트 스타일의 레이아웃으로 구성하기 위해 사용합니다.<br>
[vue-masonry](https://github.com/shershen08/vue-masonry#readme)는 [Masonry](https://masonry.desandro.com/) 라이브러리를 Vue.js로 랩핑한 모듈입니다.

## Firebase Hosting

https://firebase.google.com/<br>
https://firebase.google.com/docs/hosting/?authuser=0&hl=ko#implementation_path

웹 사이트 호스팅을 위해 Firebase Hosting을 사용합니다.<br>
회원가입 후 무료로 사용할 수 있습니다.<br>

Firebase CLI를 전역으로 설치합니다.<br>
`firebase`명령어를 사용할 수 있습니다.

```bash
$ npm install -g firebase-tools
$ firebase login
$ firebase init
$ firebase deploy
```
