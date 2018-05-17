// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store/store'
import moment from 'moment'

Vue.config.productionTip = false


Vue.filter('formatDate', function (date) {
	if (!isNaN(Date.parse(date)) && moment(new Date(date).toISOString()).isValid()){
    	return moment(new Date(date).toISOString()).format('DD MMMM YYYY');
	} else {
		return date;
	}
});

Vue.filter('getYears', function (startDate, endDate) {
	var start = moment(new Date(startDate).toISOString());

	if (!isNaN(Date.parse(endDate)) && moment(new Date(endDate).toISOString()).isValid()){
		var end  = moment(new Date(endDate).toISOString());
	} else {
		var end  = moment(new Date().toISOString());
	}

	var years = moment.duration(end.diff(start)).years();
	var months = moment.duration(end.diff(start)).months();
	var days = moment.duration(end.diff(start)).days();
	
	var result;
	if (years!=0){
		result=years+' years';
		if (months!=0) {
			result=result+' '+months+' months';
		}
	} else if (months!=0){
		result=months+' months';
	} else {
		result=days+' days'
	}

	return result;

});




new Vue({
	store,
	el: '#app',
	components: { App },
	template: '<App/>'
})
