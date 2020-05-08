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
