
import HomePage from '../pages/home.svelte';
import AboutPage from '../pages/about.svelte';
import AddFriend from '../pages/add-friend.svelte';
import FormPage from '../pages/form.svelte';
import GamePage from '../pages/game.svelte';
import GameRoundPage from '../pages/game-round.svelte';
import newGamePage from '../pages/new-game.svelte';
import ProductPage from '../pages/product.svelte';
import SettingsPage from '../pages/settings.svelte';

import DynamicRoutePage from '../pages/dynamic-route.svelte';
import RequestAndLoad from '../pages/request-and-load.svelte';
import NotFoundPage from '../pages/404.svelte';

var routes = [
  {
    path: '/',
    async: function (routeTo, routeFrom, resolve, reject) {
      var router = this;
      var app = router.app;
      app.preloader.show();

      app.request.get("/static/mock/me.json", data => {
        const user = JSON.parse(data);
        app.preloader.hide();
        resolve({
          component: HomePage,
        },
        {
          context: {
            user: user,
          }
        })
      });
    }
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/new-game/',
    component: newGamePage,
  },
  {
    path: '/add-friend/',
    component: AddFriend,
  },
  {
    path: '/game/:gameId',
    async: function (routeTo, routeFrom, resolve, reject) {
      console.log(routeTo.params.gameId);
      var router = this;
      var app = router.app;
      app.preloader.show();

      var game, gameRounds;

      app.request.get("/static/mock/gameSingle.json", data => {
        game = JSON.parse(data);

        app.request.get("/static/mock/gameRounds.json", data => {
          gameRounds = JSON.parse(data);
          app.preloader.hide();

          resolve(
            {
              component: GamePage
            },
            {
              context: {
                game,
                gameRounds,
              }
            }
          )
        })
      });
    }
  },
  {
    path: '/game/:gameId/:gameRoundId',
    async: function (routeTo, routeFrom, resolve, reject) {
      console.log(routeTo.params.gameRoundId);
      console.log(routeFrom);
      resolve(
        {
          component: GameRoundPage
        },
        {
          context: {
            game: routeFrom.context.game,
            gameRound: routeFrom.context.gameRounds[0],
          }
        }
      )
      /** 
       * Todo: if direct access via url (not in route params)
       * make ajax request
      */

      /* var router = this;
      var app = router.app;
      app.preloader.show();

      var game, gameRounds;

      app.request.get("/static/mock/gameSingle.json", data => {
        game = JSON.parse(data);

        app.request.get("/static/mock/gameRounds.json", data => {
          gameRounds = JSON.parse(data)[0];
          app.preloader.hide();
        })
      }); */
    }
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '/game/:gameId/',
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
