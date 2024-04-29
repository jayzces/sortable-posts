import PostItem from '@/components/PostItem.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('<PostItem />', () => {
  it('renders properly', () => {
    let wrapper = mount(PostItem, {
      props: {
        post: { id: 1 },
        first: true,
        last: false,
        latest: true
      }
    })

    expect(wrapper.get('.post__content').text()).toBe('Post 1')
    expect(wrapper.find('.post__move-up').exists()).toBeFalsy()
    expect(wrapper.get('.post__move-down')).toBeTruthy()
    expect(wrapper.classes('scale-105')).toBeTruthy()

    wrapper = mount(PostItem, {
      props: {
        post: { id: 1 },
        first: false,
        last: true
      }
    })

    expect(wrapper.get('.post__move-up')).toBeTruthy()
    expect(wrapper.find('.post__move-down').exists()).toBeFalsy()
    expect(wrapper.classes('scale-105')).toBeFalsy()

    wrapper = mount(PostItem, {
      props: {
        post: { id: 1 },
        first: false,
        last: false
      }
    })

    expect(wrapper.get('.post__move-up')).toBeTruthy()
    expect(wrapper.get('.post__move-down')).toBeTruthy()
  })

  it('emits the right actions', () => {
    const wrapper = mount(PostItem, {
      props: {
        post: { id: 1 },
        first: false,
        last: false
      }
    })

    wrapper.get('.post__move-up').trigger('click')
    expect(wrapper.emitted().move[0]).toEqual(['up'])

    wrapper.get('.post__move-down').trigger('click')
    expect(wrapper.emitted().move[1]).toEqual(['down'])
  })
})
