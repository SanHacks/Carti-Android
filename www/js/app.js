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
          url: 'lists.php',
        },
		   {
          path: '/home/',
          url: 'index.php',
        },
		   {
          path: '/list/',
          url: 'list.php',
        },
		   {
          path: '/submit/',
          url: 'adsubmit.php',
        },
		   {
          path: '/submission/',
          url: 'submit.php',
        },
		   {
          path: '/sale/',
          url: 'sale.php',
        },
		   {
          path: '/create/',
          url: 'create.php',
        },
		   {
          path: '/login/',
          url: 'login.php',
        },
		   {
          path: '/signup/',
          url: 'signup.php',
        },
		   {
          path: '/product/',
          url: 'product.php?',
        },
		  // Default route, match to all pages (e.g. 404 page)
    {
      path: '(.*)',
      url: '.404.php',
    },
      ],
      // ... other parameters
    });
	
	
	var mainView = app.views.create('.view-main');