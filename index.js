var wialon = require( 'wialon' );

// using session.start()
var session = wialon().session;
session.start( { token : '86732315073bfe909b25bc061d7cd30dA14F48855BB015033E8B03E313679402083E026E' } )
    .then( function ( data ) {
        console.log( data );
    } )
    .catch( function ( err ) {
        console.log( err );
    } );


// auto-initialise a session by passing in authorization parameters to the factory method
var opts = {
    // authz params
    authz : {
        token : '86732315073bfe909b25bc061d7cd30dA14F48855BB015033E8B03E313679402083E026E',
        operateAs : 'mangotracking_mgr'
    }
};

var session = wialon( opts ).session;