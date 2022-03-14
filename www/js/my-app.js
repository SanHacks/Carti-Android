 // Dom7
var $ = Dom7;

// Theme
var theme = 'md';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
 
 var app = new Framework7({
      // App root element
      root: '#app',
      // App Name
      name: 'IntelliCart',
      // App id
      id: 'com.intelli.cart',
      // Enable swipe panel
      panel: {
        swipe: 'left',
      },
      // Add default routes
      routes: [
        {
          path: '/lists/',
          url: 'lists.html',
        },
		   {
          path: '/home/',
          url: 'index.html',
        }, 
		   {
          path: '/list/',
          url: 'list.html',
        },
		   {
          path: '/submit/',
          url: 'adsubmit.html',
        },
		   {
          path: '/submission/',
          url: 'submit.html',
        },
		   {
          path: '/sale/',
          url: 'sale.html',
        },
		   {
          path: '/create/',
          url: 'create.html',
        },
		   {
          path: '/login/',
          url: 'login.html',
        },
		   {
          path: '/signup/',
          url: 'signup.html',
        },
		   {
          path: '/product/',
          url: 'product.html',
        },
      ],
      // ... other parameters
    });
	var mainView = app.views.create('.view-main');