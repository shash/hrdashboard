
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
	dataSubmitted: false,
	submitting: false,
    },
    methods: {
	checkForm: function(e) {
	    error = false;
	    this.submitting = true;

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

	    const url = 'https://g0y0pcgx36.execute-api.us-west-2.amazonaws.com/default';

	    const data = {
		MobileNumber: this.mobile,
		Name: this.name,
		Address: this.address,
		ProfessionalCategory: this.profession,
		EMail: this.email,
	    }

	    var apigClient = apigClientFactory.newClient({
		apiKey: 'M5vp7oAwFK9Nxa0PEwojT9qu4krGM4jQ4DLsrIFm'
	    });

	    apigClient.saveToDashboardPost([], data, {}).then(function(result) {
		console.log(result);
		this.dataSubmitted = true;
		this.submitting = false;

	    }.bind(this)).catch(function(result) {
		console.log(result);
		this.submitting = false;
	    });

	    e.preventDefault();
	},
	
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    }
});
