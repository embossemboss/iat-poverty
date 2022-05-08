define(['managerAPI'], function(Manager){
    var API = new Manager();
    API.addSettings('logger',{type:'csv', url:'csv.php'});

    API.addSequence([
        {
            type: 'message',
            keys: ' ',
            template:'こんにちは。社会的格差IATへようこそ (次に行くにはスペースキーを押してください)'
        },
        {
            name:'my-quest',
            type:'quest', 
            scriptUrl:'quest.js'
        },
        {
            name:'my-time',
            type:'time', 
            scriptUrl:'time.js',
        },

        // this is needed only if you want to post before the end of the study
        { type:'postCsv', load: console.log },
        {
            type: 'message',
            template:'これで終了となります。ご協力ありがとうございました。おつかれさまでした。'
        }
    ]);

    return API.script;
});
