// module.exports = function (app, passport) {

//     app.get("/", function (req, res) {
//         res.render('login.ejs');
        
//     });

//     app.get("/register", function (req, res) {
//         res.render("register.ejs");
//     });

//     app.get("/logout", function (req, res) {
//         req.logout();
//         res.redirect("/");
//     })
// }

// function isLoggedIn(req, res) {
//     if (req.isAuthenticated()) {
//         res.render('../../client/src/pages/ProductList');
//     }
//     res.redirect("/");
// }