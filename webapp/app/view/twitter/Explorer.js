Ext.define("App.view.twitter.Explorer", {
    extend: "Ext.Panel",
    xtype: "twitterexplorer",

    config: {
        layout: "fit",

        items: [
            {
                xtype: "toolbar",
                itemId: "toolBar",

                docked: "top",
                title: "Tweets",

                items: [
                    {
                        xtype: "selectfield",
                        itemId: "twitterAccountSelect",

                        options: [
                            {
                                text: "@zenpartner",
                                value: "@zenpartner"
                            },
                            {
                                text: "@zeninternet",
                                value: "@zeninternet"
                            }
                        ]
                    },
                    {
                        xtype: "spacer"
                    },
                    {
                        xtype: "button",
                        itemId: "refreshButton",
                        iconCls: "refresh",
                        iconMask: true,
                        ui: "plain"
                    }
                ]
            },
            {
                xtype: "twittertweets",
                itemId: "tweets"
            }
        ]
    }
});
