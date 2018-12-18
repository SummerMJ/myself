import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Resume from '@/views/resume.vue'
import Artical from '@/views/Artical.vue'

Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
		{
			path: '/',
			name: 'Home',
			meta: {
				index: 0
			},
			component: Home
		},{
			path: '/resume',
			name: 'Resume',
			meta: {
				index: 1
			},
			component: Resume
		},{
			path: '/artical/:id',
			name: 'Artical',
			meta: {
				index: 1
			},
			component: Artical
		},
	]
})
