(function() {
    var audio = {
        dom: document.getElementById('bgSound'),
        start: function() {
            this.dom.src = './audio/start.mp3';
            this.dom.play();
        },
        end: function() {
            this.dom.src = './audio/end.mp3';
            this.dom.play();
        },
        boom: function() {
            this.dom.src = './audio/boom.mp3';
            this.dom.play();
        },
        done: function() {
            this.dom.src = './audio/done.mp3';
            this.dom.play();
        },
        init: function() {
            var sound = ['start', 'end', 'boom', 'done'];
            var index = 0;
            var self = this;

            var callback = function() {
                index++;
                if(index < sound.length) {
                    self.dom.src = './audio/' + sound[index] + '.mp3';
                } else {
                    console.log('audio inited');

                    self.dom.removeEventListener('loadeddata', callback);
                    audio.start();
                }
            };

            this.dom.src = './audio/' + sound[index] + '.mp3';

            this.dom.addEventListener('loadeddata', callback);
        }
    };

    audio.init();

    window.audio = audio;
})();

