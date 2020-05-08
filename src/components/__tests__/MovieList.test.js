import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import MovieList from '../MovieList'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('MovieList Component', () => {
  let wrapper
  beforeEach(() => {
    // 설정 & 동작
    wrapper = shallowMount(MovieList, {
      localVue,
      mocks: {
        $store: {
          state: {
            movie: {
              movies: [
                {
                  imdbID: '123456',
                  Title: '영화 제목',
                  Poster: 'image.jpg',
                  Year: '2020'
                }
              ]
            }
          }
        }
      }
    })
  })

  test('영화 제목이 출력되어야 합니다', () => {
    // 확인
    expect(wrapper.find('v-card-title-stub').text()).toBe('영화 제목')
  })

  test('개봉년도가 출력되어야 합니다', () => {
    // 확인
    expect(wrapper.find('v-card-subtitle-stub').text()).toBe('2020')
  })

  test('이미지가 경로가 있는 경우', () => {
    // 확인
    const img = wrapper.find('v-img-stub')
    expect(img.attributes('src')).toBe('image.jpg')
    expect(img.attributes('height')).toBe('300')
  })

  test('이미지 경로가 없는 경우', () => {
    // 설정 & 동작
    let wrapper = shallowMount(MovieList, {
      localVue,
      mocks: {
        $store: {
          state: {
            movie: {
              movies: [
                {
                  imdbID: '123456',
                  Title: '영화 제목',
                  Poster: 'N/A',
                  Year: '2020'
                }
              ]
            }
          }
        }
      }
    })
    // 확인
    const img = wrapper.find('v-img-stub')
    expect(img.attributes('src')).toBe('')
    expect(img.attributes('height')).toBe('100')
  })
})
