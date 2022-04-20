define(['timeAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat8.js'], function (APIConstructor, iatExtension) {
    var API = new APIConstructor();

    return iatExtension({
        category1: {
            name: 'Poor people', //Will appear in the data.
            title: {
                media: { word: 'Poor people' }, //Name of the category presented in the task.
                css: { color: '#31940F', 'font-size': '2em' }, //Style of the category title.
                height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
                { image: 'poverty1.jpg' },
                { image: 'poverty2.jpg' },
                { image: 'poverty3.jpg' },
                { image: 'poverty4.jpg' },
                { image: 'poverty5.jpg' },
                { image: 'poverty6.jpg' }
            ],
            //Stimulus css (style)
            stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
        },
        category2: {
            name: 'Middle people', //Will appear in the data.
            title: {
                media: { word: 'Middle people' }, //Name of the category presented in the task.
                css: { color: '#31940F', 'font-size': '2em' }, //Style of the category title.
                height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
                { image: 'rich1.jpg' },
                { image: 'rich2.jpg' },
                { image: 'rich3.jpg' },
                { image: 'rich4.jpg' },
                { image: 'rich5.jpg' },
                { image: 'rich6.jpg' }],
            //Stimulus css
            stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
        },
        attribute2:
                {
                    name: 'Good words',
                    title: {
                        media: { word: 'Good words' },
                        css: { color: '#0000FF', 'font-size': '1.8em' },
                        height: 4 //Used to position the "Or" in the combined block.
                    },
                    stimulusMedia: [ //Stimuli content as PIP's media objects
                        { word: '笑顔' },
                        { word: '楽しい' },
                        { word: 'すばらしい' },
                        { word: '楽しい' },
                        { word: '素晴らしい' },
                        { word: '平和' },
                        { word: '栄光' },
                        { word: '愛' }
                    ],
                    //Stimulus css
                    stimulusCss: { color: '#0000FF', 'font-size': '2.3em' }
                },
                attribute1:
                {
                    name: 'Bad words',
                    title: {
                        media: { word: 'Bad words' },
                        css: { color: '#0000FF', 'font-size': '1.8em' },
                        height: 4 //Used to position the "Or" in the combined block.
                    },
                    stimulusMedia: [ //Stimuli content as PIP's media objects
                        { word: 'ひどい' },
                        { word: '失敗' },
                        { word: '苦しみ' },
                        { word: '傷' },
                        { word: '最悪' },
                        { word: 'ひどい' },
                        { word: '汚い' },
                        { word: '悪' }
                    ],
                    //Stimulus css
                    stimulusCss: { color: '#0000FF', 'font-size': '2.3em' }
                },

                base_url: {//Where are your images at?
                  image: 'images/'
        }
    });
});
