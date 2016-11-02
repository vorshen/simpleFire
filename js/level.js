(function() {
    // 第一关
    var first = {
        total: 2,
        init: function() {
            targets.add({
                x: -100,
                y: 0,
                z: -400,
                ry: 0,
                leave: function() {
                    this.rx += 0.3;
                    this.z -= 1.5;
                    if(this.z <= -450) {
                        this.destory();
                    }
                }
            });
            

            targets.add({
                x: 100,
                y: 0,
                z: -400,
                ry: 0,
                leave: function() {
                    this.rx += 0.3;
                    this.z -= 1.5;
                    if(this.z <= -450) {
                        this.destory();
                    }
                }
            });
        },
        over: function() {
            second.init();

            targets.remove(obstacles[0].index);
            targets.remove(obstacles[1].index);
        }
    };

    // 第二关
    var second = {
        total: 3,
        init: function() {
            var i;
            for(i = 0; i < 3; i++) {
                targets.add({
                    x: 400,
                    y: Math.random() * 300,
                    z: 200 - Math.random() * 400,
                    moveDirZ: 0.5 + Math.random(),
                    ry: Math.PI / 2,
                    leave: function() {
                        this.rx += 0.3;
                        this.x += 1.5;
                        if(this.x >= 450) {
                            this.destory();
                        }
                    }
                }, function() {
                    this.z += this.moveDirZ;
                    if(this.z >= 400) {
                        this.moveDirZ *= -1;
                    } else if(this.z <= -400) {
                        this.moveDirZ *= -1;
                    }
                });
            }

            
        }
    };

    // 第三关
    var third = {
        total: 5,
        init: function() {
            var i;
            for(i = 0; i < 5; i++) {
                targets.add({
                    x: 200 - (Math.random() * 400),
                    y: Math.random() * 300,
                    z: 400,
                    moveDirX: 1 + Math.random() * 2,
                    ry: 0,
                    leave: function() {
                        this.rx += 0.3;
                        this.z += 1.5;
                        if(this.z >= 450) {
                            this.destory();
                        }
                    }
                }, function() {
                    this.x += this.moveDirX;
                    if(this.x >= 400) {
                        this.moveDirX *= -1;
                    } else if(this.x <= -400) {
                        this.moveDirX *= -1;
                    }
                });
            }
        }
    };

    // 第四关
    var fourth = {
        total: 5,
        init: function() {
            var i;
            for(i = 0; i < 5; i++) {
                targets.add({
                    x: -400,
                    y: Math.random() * 300,
                    z: 200 - Math.random() * 400,
                    moveDirY: 1.5*(2 - Math.random() * 2),
                    moveDirZ: 3*(2 - Math.random() * 3 + 1),
                    ry: Math.PI / 2,
                    leave: function() {
                        this.rx += 0.3;
                        this.x -= 1.5;
                        if(this.x <= -450) {
                            this.destory();
                        }
                    }
                }, function() {
                    this.z += this.moveDirZ;
                    if(this.z >= 400) {
                        this.moveDirZ *= -1;
                    } else if(this.z <= -400) {
                        this.moveDirZ *= -1;
                    }

                    this.y += this.moveDirY;
                    if(this.y >= 300) {
                        this.moveDirY *= -1;
                    } else if(this.y <= 10) {
                        this.moveDirY *= -1;
                    }
                });
            }
        }
    };

    var level = {
        prompt: document.getElementById('prompt'),
        isStart: false,
        curr: 0,
        levels: [first, second, third, fourth],
        start: function() {
            audio.start();
            time.start();
        },
        over: function(sign) {
            if(sign) {
                console.log('游戏胜利');
            } else {
                console.log('游戏失败');
            }

            setTimeout(function() {
                audio.end();
                time.end();
            }, 1000);
        },
        init: function() {
            this.levels[this.curr].init();
        },
        next: function() {
            var self = this;
            this.curr++;

            if(this.curr < this.levels.length) {
                this.init();
                this.prompt.innerHTML = '第' + (this.curr+1) + '关';
                this.prompt.className = 'prompt animate';
                setTimeout(function() {
                    audio.done();
                }, 1000);

                setTimeout(function() {
                    self.prompt.className = 'prompt';
                }, 3000);
            } else {
                this.over(true);
            }
            
        },
        check: function() {
            --this.levels[this.curr].total;
            if(this.levels[this.curr].total === 0) {
                this.next();
            }
        },
        showBoard: function() {

        }
    };

    window.level = level;
})();
