import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Resume from '@/views/resume.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},{
			path: '/resume',
			name: 'Resume',
			component: Resume
		},
	]
})
