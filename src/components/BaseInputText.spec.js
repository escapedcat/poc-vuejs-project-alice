import { shallow } from '@vue/test-utils'
import BaseInputText from './BaseInputText.vue'

describe('BaseInputText.vue', () => {
  it('is an empty positive test', () => {
    
    const wrapper = shallow(BaseInputText, {
      propsData: { label: "Animal" }
    })
    
    expect(wrapper.vm.label).toBe("Animal")
  })
})