import ActionsList from '@/components/ActionsList.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('<ActionsList />', () => {
  it('renders properly', () => {
    let wrapper = mount(ActionsList, {
      props: {
        actions: [
          { id: 3, postId: 2, indexFrom: 0, indexTo: 1 },
          { id: 2, postId: 1, indexFrom: 1, indexTo: 2 },
          { id: 1, postId: 1, indexFrom: 0, indexTo: 1 }
        ]
      }
    })

    expect(wrapper.findAll('.action')).toHaveLength(3)
    expect(wrapper.get('.action:first-child').text()).toContain(
      'Moved Post 2 from index 0 to index 1'
    )
    expect(wrapper.get('.action:first-child').classes('border-t')).toBeFalsy()
    expect(wrapper.get('.action:nth-child(2)').classes('border-t')).toBeTruthy()

    wrapper = mount(ActionsList, {
      props: {
        actions: []
      }
    })

    expect(wrapper.get('.list').text()).toContain('No actions yet')
  })

  it('emits correctly', () => {
    const wrapper = mount(ActionsList, {
      props: {
        actions: [{ id: 1, postId: 1, indexFrom: 0, indexTo: 1 }]
      }
    })

    wrapper.get('.time-travel-btn').trigger('click')
    expect(wrapper.emitted().travel[0]).toEqual([0])
  })
})
