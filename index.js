 // create Request instance
 var req = new W.Request('https://hst-api.wialon.com');

 // execute 'core/login' request with 'api' method
 req.api(
	 'core/login',
	 {user: 'mangotracking_mgr', password: 'Admin@1234'},
	 function() {
		console.log("---Success---");
	 }
 );

 // execute 'core/login' request with 'send' method
 req.send(
	 '/wialon/ajax.html?svc=core/login',
	 {user: 'mangotracking_mgr', password: 'Admin@1234'},
	 function success() {
		 console.log("---Success---");
	 },
	 function error() {
		 // error callback
	 }
 );