Ext.define("App.profile.Tablet", {
    extend: "Ext.app.Profile",

    requires: [
        "Ext.TitleBar"
    ],

    config: {
        views: [
            // Infrastructure
            "App.view.Container",
            
            // News
            // "App.view.news.tablet.Explorer",
            // "App.view.news.Stories",
            // "App.view.news.Story",
            // "App.view.news.tablet.PostsOverlay",

            // Twitter
            "App.view.twitter.Explorer",
            "App.view.twitter.Tweets"
        ],

        controllers: [
            // "App.controller.news.tablet.Controller",
            "App.controller.twitter.Controller"
        ]
    },

    isActive: function() {
        // NOTE: make sure we have a fallback profile (e.g. for desktop)
        return Ext.os.is.Tablet || true; // Ext.os.is.Desktop;
    },

    launch: function() {
        console.log("App.profile.Tablet::launch()");

        Ext.create("App.view.Container");
    }
});
