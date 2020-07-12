var app = new Vue({
    el: '#app',
    data: {
	errors: [],
	name: null,
	email: null,
	mobile: null,
	address: null,
	city: null,
	profession: null,
    },
    methods: {
	checkForm: function(e) {
	    error = false;

	    this.errors = [];

	    if (!this.name) {
		this.errors.push('Name required');
	    }
	    if (!this.mobile) {
		this.errors.push('Mobile number required');
	    }

	    if (!this.profession) {
		this.errors.push('Profession required');
	    }

	    if (this.email && !this.validEmail(this.email)) {
		this.errors.push('Please enter a valid e-mail ID');
	    }

	    e.preventDefault();
	},
	
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    }
});
