import { shallowMount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('MyCounter.vue', () => {
  it('renders initial count', () => {
    const wrapper = shallowMount(MyCounter);
    expect(wrapper.text()).toContain('Count: 0');
  });

  it('increments the count when button is clicked', async () => {
    const wrapper = shallowMount(MyCounter);
    
    const button = wrapper.find('button');
    await button.trigger('click');
    
    expect(wrapper.text()).toContain('Count: 1');
  });
});
