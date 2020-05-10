import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import store from '@/store'
import SearchBar from '../SearchBar'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('SearchBar Component', () => {
  let wrapper
  beforeEach(() => {
    // 설정
    wrapper = mount(SearchBar, {
      localVue,
      store
    })
  })

  test('제목을 입력했을 때 스토어 업데이트', () => {
    // 설정 & 동작
    wrapper.vm.title = 'lion'
    // 확인
    expect(wrapper.vm.title).toBe('lion')
  })

  test('로딩 중 아이콘 확인', async () => {
    // 확인
    expect(wrapper.find('.v-progress-circular__info').exists()).toBe(false)
    // 설정
    wrapper.vm.$store.commit('movie/updateState', {
      loading: true
    })
    // 동작
    await wrapper.vm.$nextTick()
    // 확인
    expect(wrapper.find('.v-progress-circular__info').exists()).toBe(true)
  })
})
