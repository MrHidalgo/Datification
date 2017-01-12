var	express	    =	require('express'),
    app         =	express();

app.set('port',	(process.env.PORT	||	3333));


// MAIN PAGE
app.use('/',	        express.static('./dist/', {
        'index' : 'index.html'
}));
// SECOND PAGE
app.use('/internal',	        express.static('./dist/', {
        'index' : 'internal.html'
}));
// DICTIONARY PAGE
app.use('/dictionary',	        express.static('./dist/', {
        'index' : 'dictionary.html'
}));


app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});