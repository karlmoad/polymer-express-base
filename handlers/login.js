'use strict';

/**
 * Operations on /login
 */
module.exports = {
    /**
     * summary: submit a request ticket
     * description: 
     * parameters: body
     * produces: application/json
     * responses: 200, 400, 401
     */
    post: function authenticate(req, res, next) {

        var test = {id:"testp", username:"Test Person", email:"tp@test.com", token:"90382657h3jrvhubfdbnbdiuhdi19hj03hj10dj1.9u0326f48cb2u3cy382bcc8yb3bcb239u.uy03g7y83y4cv92cb7y9v34yc8vb29b"};
        var d1 = new Date ();
        var d2 = new Date ( d1 );
        d2.setHours ( d1.getHours() + 6 );
        test.expires = d2.toISOString();

        res.status(200).send(test);
    }
};
