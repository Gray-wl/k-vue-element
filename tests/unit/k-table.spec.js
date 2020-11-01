import { shallowMount } from '@vue/test-utils'
import KTable from '@/components/KTable.vue'

describe('KTable.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(KTable, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
