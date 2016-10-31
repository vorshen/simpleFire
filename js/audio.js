(function() {
    var audio = {
        dom1: document.getElementById('bgSound1'),
        dom2: document.getElementById('bgSound2'),
        start: function() {
            this.dom2.src = './audio/start.mp3';
            this.dom2.play();
        },
        end: function() {
            this.dom2.src = './audio/end.mp3';
            this.dom2.play();
        },
        boom: function() {
            this.dom1.src = './audio/boom.mp3';
            this.dom1.play();
        },
        done: function() {
            this.dom2.src = './audio/done.mp3';
            this.dom2.play();
        },
        init: function() {
            var sound = ['start', 'end', 'boom', 'done'];
            var index = 0;
            var self = this;

            var callback = function() {
                index++;
                if(index < sound.length) {
                    self.dom1.src = './audio/' + sound[index] + '.mp3';
                } else {
                    console.log('audio inited');

                    self.dom1.removeEventListener('loadeddata', callback);
                    
                }
            };

            this.dom1.src = './audio/' + sound[index] + '.mp3';

            this.dom1.addEventListener('loadeddata', callback);
        }
    };

    audio.init();

    window.audio = audio;
})();

