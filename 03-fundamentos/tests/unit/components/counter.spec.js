
import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Conunter Component', ()=> {


    test('Debe de hacer match con el snapshot', ()=> {


        const wrapper = shallowMount(Counter)

        expect(wrapper.html() ).toMatchSnapshot()

    })
})