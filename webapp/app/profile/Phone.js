Ext.define("App.profile.Phone", {
    extend: "Ext.app.Profile",

    config: {
        views: [
            // Infrastructure
            "App.view.Container",

            // News
            // "App.view.news.phone.Explorer",
            // "App.view.news.Stories",
            // "App.view.blog.Story",

            // Twitter
            "App.view.twitter.Explorer",
            "App.view.twitter.Tweets"
        ],

        controllers: [
            // "App.controller.news.phone.Controller",
            "App.controller.twitter.Controller"
        ]
    },

    isActive: function() {
        return Ext.os.is.Phone;
    },

    launch: function() {
        console.log("App.profile.Phone::launch()");

        Ext.create("App.view.Container");
    }
});
