var Bullet = function(webgl) {
    var i;
    var bullet = {
        z: -1,
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        length: 0,
        init: function() {
            bullet.poData.push(0, -0, this.z);
            bullet.coData.push(1, 1, 1);
            bullet.length++;

            webgl.bindBuffer(webgl.ARRAY_BUFFER, bullet.poBuf);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(bullet.poData), webgl.STATIC_DRAW);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, bullet.coBuf);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(bullet.coData), webgl.STATIC_DRAW);
            this.z = -1;
        },
        tick: function() {

            bullet.poData = [];
            bullet.coData = [];
            bullet.length = 0;
            if(this.z < -405) {
                boom = false;
                this.model = null;
                return ;
            }

            for(i = this.z; i < 20; i += 0.1) {
                bullet.poData.push(0.3/-this.z, -0.15/-this.z, this.z - i);
                bullet.coData.push(1, 1, 1);
                bullet.length++;
            }


            this.z -= 20;
            webgl.bindBuffer(webgl.ARRAY_BUFFER, bullet.poBuf);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(bullet.poData), webgl.STATIC_DRAW);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, bullet.coBuf);
            webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(bullet.coData), webgl.STATIC_DRAW);

            
        },
        draw: function() {
            if(!this.model) {
                var sx = Math.sin(camera.ry);
                var cx = Math.cos(camera.ry);
                var sy = Math.sin(-camera.rx);
                var cy = Math.cos(-camera.rx);
                this.model = [
                    cy/15,    0,      -sy/15,    0,
                    sy*sx/15, cx/15,  sx*cy/15,  0,
                    sy*cx/15, -sx/15, cx*cy/15,  0,
                    0,0,0,1
                ];

                this.init();
            }
            
            webgl.uniformMatrix4fv(
                uMMatrix, false, this.model
            );

            webgl.uniformMatrix4fv(
                uVMatrix, false, camera.toMatrix()
            );

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);

            webgl.drawArrays(webgl.POINTS, 0, this.length);
        
            this.tick();
        }
    };

    

    return bullet;
};