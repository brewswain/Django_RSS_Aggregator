var rssApp = new Vue({
  el: "#rss-app",

  data: {
    items: [],
    feeds: [],
    newLink: "",
    route: "feeds"
  },

  methods: {
    setRoute: function(route) {
      this.route = route;
    },

    setup: function() {
      var hash = window.location.hash;

      if (hash) {
        this.route = hash.slice(1);
      }

      this.reload();
    },

    api: function(endpoint, method, data) {
      var config = {
        method: method || "GET",
        body: data !== undefined ? JSON.stringify(data) : null,
        headers: {
          "content-type": "application/json"
        }
      };

      return fetch(endpoint, config)
        .then(response => response.json())
        .catch(error => console.log(error));
    },

    reload: function() {
      this.getItems();
      this.getFeeds();
    },

    getFeeds: function() {
      this.api("/esports/feeds/").then(feeds => {
        this.feeds = feeds;
      });
    },

    getItems: function() {
      this.api("/esports/items/").then(items => {
        this.items = items;
      });
    },

    newFeed: function() {
      this.api("/esports/feeds/", "POST", { url: this.newLink }).then(() => {
        this.reload();
      });
    },

    deleteFeed: function(id) {
      this.api("/esports/feeds/" + id + "/", "DELETE").then(() => {
        this.reload();
      });
    }
  }
});
