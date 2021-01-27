//import BootstrapVue from 'bootstrap-vue';
import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

//const localVue = createLocalVue();
//localVue.use(BootstrapVue);

const wrapper = shallowMount(Login, { 
    //localVue,
    //stubs: ['router-link', 'router-view'] 
});

describe('Login.vue',() =>{

    test('Comprobar correo usuario incorrecto', async () =>{

        await wrapper.setData({ email :'luis'})
        const input1 = wrapper.find('#inputEmail')
        await input1.trigger('blur')
        expect(wrapper.vm.emailValid).toBe(false)
    })
    test('Comprobar correo usuario correcto', () =>{

        wrapper.setData({ email :'luis@luis.cl'})
        const input2 = wrapper.find('#inputEmail')
        input2.trigger('blur')
        expect(wrapper.vm.emailValid).toBe(true)
    })


})
