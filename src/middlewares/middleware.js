exports.middlewareGlobal = ( req, res , next ) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.outromiddleware = (req, res, next ) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err){
       return res.render('404'); 
     } 
    next();   
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

exports.loginRequired = (req, res, next) =>  {
  if(!req.session.user){
    req.flash('errors', 'Você precisa fazer login');
    req.session.save(() => res.redirect('/'));
    return;
  }
  next();
};

//MONGODB   gilvansantos   218386gilvan

//mongodb+srv://gilvansantos:<password>@cluster0.dseck.mongodb.net/myFirstDatabase?retryWrites=true&w=majority