import Vue from 'vue'
import Vuex from 'vuex'

import aboutData from '../data/about.json'
import experienceData from '../data/experience.json'
import skillData from '../data/skill.json'

Vue.use(Vuex)

const aboutModule = {
	state : {
		about_me: aboutData.about_me.replace('{{age}}', Math.floor((new Date()-new Date(aboutData.birthday))/31557600000)),
		msg: aboutData.msg,
		about_tech: aboutData.about_tech,
		links: aboutData.links
	}
}

const experienceModule = {
	state: experienceData
}

const skillModule = {
	state: skillData
}

export default new Vuex.Store({
	modules: {
		about: aboutModule,
		experience: experienceModule,
		skill: skillModule
	}
})