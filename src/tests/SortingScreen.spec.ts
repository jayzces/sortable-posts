import SortingScreen from '@/components/SortingScreen.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

describe('<SortingScreen />', () => {
  const mockFetch = (data: any): Promise<any> =>
    new Promise((resolve) =>
      resolve({
        json: () => new Promise((r) => r(data))
      })
    )

  it('renders properly', async () => {
    global.fetch = vi
      .fn()
      .mockImplementation(() =>
        mockFetch([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }])
      )

    const wrapper = mount(SortingScreen, {
      global: {
        stubs: {
          PostItem: {
            template: '<div class="post"></div>'
          },
          ActionsList: true
        }
      }
    })

    // macro tick, wait for layout to rerender
    await new Promise((r) => setTimeout(r))
    expect(wrapper.findAll('.post')).toHaveLength(5)
  })
})
