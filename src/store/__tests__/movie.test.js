import cloneDeep from 'lodash/cloneDeep'
import axios from 'axios'
import movie from '../movie'

// 모의(Mock) 모듈
jest.mock('axios')

describe('movie store', () => {
  let store
  beforeEach(() => {
    // 설정
    store = cloneDeep(movie)
    store.state = movie.state()
    store.commit = function (name, payload) {
      store.mutations[name](store.state, payload)
    }
    store.dispatch = function (name, payload) {
      // context 구조
      // https://vuex.vuejs.org/kr/api/#actions
      const context = {
        state: store.state,
        commit: store.commit,
        dispatch: store.dispatch
      }
      // 실행 결과(Promise)를 반환해야 합니다!
      return store.actions[name](context, payload)
    }
  })

  test('state 업데이트', () => {
    // 설정
    const payload = {
      title: 'Hello!',
      movies: [1, 2, 3],
      loading: true
    }
    // 동작
    store.commit('updateState', payload)
    // 확인
    expect(store.state.title).toBe('Hello!')
    expect(store.state.movies).toEqual([1, 2, 3])
    expect(store.state.loading).toBe(true)
  })

  test('영화 목록에 push', () => {
    // 설정
    expect(store.state.movies).toEqual([])
    // 동작
    store.commit('pushIntoMovies', [{ Title: '영화 제목' }])
    // 확인
    expect(store.state.movies).toEqual([{ Title: '영화 제목' }])
  })

  test('영화 목록을 잘 가져왔을 때', async () => {
    // 설정
    // Mocking
    axios.get.mockResolvedValue({
      data: {
        totalResults: '1',
        Search: [
          {
            imdbID: '123456',
            Title: '영화 제목',
            Poster: 'image.jpg',
            Year: '2020'
          }
        ]
      }
    })
    // 동작
    await store.dispatch('searchMovies')
    // 확인
    expect(store.state.movies).toEqual([
      {
        imdbID: '123456',
        Title: '영화 제목',
        Poster: 'image.jpg',
        Year: '2020'
      }
    ])
  })

  test('영화 목록을 가져오지 못했을 때', async () => {
    // 설정
    axios.get.mockRejectedValue(new Error('Network Error'))
    // 동작
    await store.dispatch('searchMovies')
    // 확인
    expect(store.state.error).toEqual(new Error('Network Error'))
  })
})
