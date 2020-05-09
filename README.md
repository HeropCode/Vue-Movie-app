# Vue Movie list app

- 단위 테스트(Unit test) 버전이 추가되었습니다.
  - `unit-test` Branch에서 확인할 수 있습니다.
- 같은 테스트 환경을 위해 Vue CLI를 `4.1.2` 버전으로 설치하도록 문서를 수정했습니다.
- 모든 모듈의 버전은 [Package.json](https://github.com/HeropCode/Vue-Movie-app/blob/master/package.json) 파일을 참고해주세요.
- 강의 영상의 NodeJS 버전은 `10.15.0`이며, 그 이상의 LTS 버전(짝수 버전)을 사용하시길 권장합니다.
- 강의 영상의 NPM 버전은 `6.5.0`이며, 역시 그 이상의 버전을 사용하시길 권장합니다.
- 버그 및 수정/건의 사항 등은 [Issues](https://github.com/HeropCode/Vue-Movie-app/issues) 혹은 thesecon@gmail.com으로 문의 부탁드립니다.

[Todo App](https://github.com/HeropCode/Vue-Todo-app) 예제를 통해 Vue CLI 없이 개발 환경을 구성했다면,<br>
이번에는 [Vue CLI](https://cli.vuejs.org/)를 사용해 손쉽고 빠르게 개발 환경을 구성합니다.<br>

Movie API를 사용해 <strong>영화 검색 페이지</strong>를 만듭니다.

[DEMO](https://vue-movie-app-for-fastcampus.web.app/)

## Vue CLI

Vue CLI를 전역 모드(`-g`)로 설치합니다.<br>
`vue`명령어를 사용할 수 있습니다.

```bash
$ npm i @vue/cli@4.1.2 -g
```

다음과 설치 및 버전을 확인할 수 있습니다.

```bash
$ vue --version
# @vue/cli 4.1.2
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

# 단위 테스트(Unit test)

단위(Unit) 테스트란 상태, 메소드, 컴포넌트 등의 정의된 프로그램 최소 단위들이 독립적으로 정상 동작하는지 확인하는 것을 말합니다.<br>
이를 통해 프로그램 전체의 신뢰도를 향상하고 코드 리팩터링(Code refactoring)의 부담을 줄일 수 있습니다.

CLI에서 Jest를 직접 실행하기 위해 전역 설치합니다.

```bash
$ npm install -g jest
```

테스트를 위해 프로젝트에 다음 모듈들을 설치합니다.

```bash
$ npm install -D jest @vue/test-utils vue-jest babel-jest babel-core@bridge
```

모듈 | 설명
--|--
jest | 페이스북에서 만든 테스트 프레임워크로 Vue Test Utils에서 권장하는 테스트 러너입니다.
@vue/test-utils | Vue.js 환경에서 단위 테스트를 하기 위한 공식(Official) 라이브러리 입니다.
vue-jest | Vue 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일합니다.
babel-jest | JS/JSX 파일을 Jest가 실행할 수 있는 자바스크립트로 컴파일합니다.
babel-core@bridge | Babel 6버전과의 호환을 위해 설치합니다. [관련 이슈](https://github.com/facebook/jest/issues/6913#issuecomment-417637086)가 있습니다.

`jest.config.js` 파일을 생성하고 다음과 같이 Jest 구성 옵션을 추가합니다.

```js
module.exports = {
  // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목록입니다.
  // 일반적으로 많이 사용되는 모듈의 확장자를 지정합니다.
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  // `@` 같은 경로 별칭을 매핑합니다.
  // E.g. `import SearchBar from '@/components/SearchBar'`
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // 일치하는 경로에서는 모듈을 가져오지 않습니다.
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/dist'
  ],
  // 정규식과 일치하는 파일의 변환 모듈을 지정합니다.
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // 각 테스트 파일이 실행되기 전,
  // 테스트 프레임워크를 구성하거나 설정하기 위해,
  // 일부 코드 실행 모듈의 경로를 지정합니다.
  // Vuetify UI 프레임워크를 사용하는 경우 필요합니다.
  // https://github.com/vuetifyjs/vuetify/issues/4964
  setupFilesAfterEnv: [
    './jest.setup.js'
  ]
}
```

`jest.setup.js` 파일을 추가하고 다음과 같이 Vuetify 설정을 추가합니다.
https://github.com/vuetifyjs/vuetify/issues/4964

```js
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
```

`package.json` 파일에 `eslintConfig`에 다음과 같이 Jest 옵션을 추가합니다.

```json
{
  "eslintConfig": {
    "env": {
      "jest": true
    }
  }
}
```
