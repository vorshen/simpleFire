var Gun = function(webgl) {

    var gunBarrel = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 0,
            y: 0,
            z: 0
        },
        scale: 10,
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);

            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var gunPipe = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 1,
            y: -1.2,
            z: 1
        },
        scale: 10,
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);
            // webgl.vertexAttrib4f(aColor, 1, 1, 1, 1);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);


            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var gunWheel = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 1,
            y: -2,
            z: 1
        },
        scale: 10,
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);


            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var gunHat = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 0,
            y: 0.1,
            z: 0
        },
        scale: 10,
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);


            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var gunButt = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 0,
            y: -3.7,
            z: 0
        },
        scale: 10,
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);
            // webgl.vertexAttrib4f(aColor, 0.9, 0.9, 0.9, 1);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);

            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var gunTrigger = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 0,
            y: 0,
            z: 0
        },
        scale: 10,
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);

            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var gunBack = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 0,
            y: 0,
            z: 0
        },
        scale: 10,
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);


            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var gunAim = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 0,
            y: 0,
            z: 0
        },
        scale: 10,
        draw: function() {
            var sx = Math.sin(camera.ry);
            var cx = Math.cos(camera.ry);
            var sy = Math.sin(-camera.rx);
            var cy = Math.cos(-camera.rx);

            /*webgl.uniformMatrix4fv(
                uMMatrix, false, [
                    cy/15,    sx*sy/15,      -cx*sy/15,    0,
                    0, cx/15,  sx/15,  0,
                    sy/15, -sx*cy/15, cx*cy/15,  0,
                    0,0,-400/15,1
                ]
            );*/
            webgl.uniformMatrix4fv(
                uMMatrix, false, [
                    1/15,0,0,0,
                    0,1/15,0,0,
                    0,0,1/15,0,
                    0,0,-400/15,1
                ]
            );

            /*webgl.uniformMatrix4fv(
                uVMatrix, false, camera.toMatrix()
            );*/

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);


            webgl.drawArrays(webgl.LINES, 0, 4);
        }
    };

    var gun = {
        component: [gunBarrel, gunPipe, gunWheel, gunHat, gunButt, gunTrigger, gunBack/*, gunAim*/],
        angleY: -1.57,
        angleX: 0,
        gunSinY: 0.8414,
        gunCosY: 0.5403,
        scale: 15,
        draw: function() {

            var s1 = Math.sin(this.angleX);
            var c1 = Math.cos(this.angleX);
            var s2 = Math.sin(this.angleY);
            var c2 = Math.cos(this.angleY);
            var scale = this.scale;

            webgl.uniformMatrix4fv(
                uMMatrix, false, [
                    c2/scale, s1*s2/scale,-c1*s2/scale, 2/scale,
                    0, c1/scale, s1/scale, 1/scale,
                    s2/scale, -s1*c2/scale, c1*c2/scale, 0,
                    0.3, -0.15, -0.8, 1
                ]
            );

            webgl.uniformMatrix4fv(
                uVMatrix, false, [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]
            );

            this.component.forEach(function(item) {
                item.draw();
            });
        },
        fire: function() {
            this.angleX = 0.3;
            this.firing = true;
            boom = true;

            audio.boom();

            setTimeout(function() {
                this.angleX = 0;
                this.firing = false;
            }.bind(this), 160);
        }
    };

    var tmp = [];
    var s = 0;

    /** 计算gunBarrel相关 start **/

    (function() {
        for(j = 0; j < 21; j++) {
            angle = 2 * Math.PI * (j / 20);

            tmp.push({
                y: Math.cos(angle),
                z: Math.sin(angle)
            });
        }

        for(i = -5; i < 3; i++) {
            for(j = 0; j < 20; j++) {
                gunBarrel.poData.push(i, tmp[j].y, tmp[j].z*0.9);
                gunBarrel.poData.push(i+1, tmp[j].y, tmp[j].z*0.9);

                gunBarrel.poData.push(i+1, tmp[j+1].y, tmp[j+1].z*0.9);
                gunBarrel.poData.push(i, tmp[j+1].y, tmp[j+1].z*0.9);

                gunBarrel.coData.push(0.8, 0.8, 0.8);
                gunBarrel.coData.push(0.8, 0.8, 0.8);
                gunBarrel.coData.push(0.8, 0.8, 0.8);
                gunBarrel.coData.push(0.8, 0.8, 0.8);

                gunBarrel.indexData.push(s, s+1, s+2, s, s+2, s+3);

                s += 4;

                gunBarrel.length += 6;
            }
        }

        i = -5;
        for(j = 0; j < 20; j++) {
            gunBarrel.poData.push(i, 0, 0);
            gunBarrel.poData.push(i, tmp[j].y, tmp[j].z*0.9);
            gunBarrel.poData.push(i, tmp[j+1].y, tmp[j+1].z*0.9);

            gunBarrel.coData.push(0.8, 0.8, 0.8);
            gunBarrel.coData.push(0.8, 0.8, 0.8);
            gunBarrel.coData.push(0.8, 0.8, 0.8);

            gunBarrel.indexData.push(s, s+1, s+2);

            s += 3;

            gunBarrel.length += 3;
        }

        i = 3;
        for(j = 0; j < 20; j++) {
            gunBarrel.poData.push(i, 0, 0);
            gunBarrel.poData.push(i, tmp[j].y, tmp[j].z*0.9);
            gunBarrel.poData.push(i, tmp[j+1].y, tmp[j+1].z*0.9);

            gunBarrel.coData.push(0.8, 0.8, 0.8);
            gunBarrel.coData.push(0.8, 0.8, 0.8);
            gunBarrel.coData.push(0.8, 0.8, 0.8);

            gunBarrel.indexData.push(s, s+1, s+2);

            s += 3;

            gunBarrel.length += 3;
        }

        var tmpJ;
        var k;
        tmp = [];

        for(j = 0; j < 81; j++) {
            angle = 2 * Math.PI * (j / 80);

            tmp.push({
                y: Math.cos(angle),
                z: Math.sin(angle)
            });
        }

        for(i = 3; i < 5; i++) {
            for(j = -20; j < 21; j++) {
                if(j < 0) {
                    tmpJ = j + 80;
                } else {
                    tmpJ = j;
                }

                k = 1 - (Math.abs(j) / 20);

                gunBarrel.poData.push(i-k, tmp[tmpJ].y, tmp[tmpJ].z*0.63);
                gunBarrel.poData.push(i+1-k, tmp[tmpJ].y, tmp[tmpJ].z*0.63);

                gunBarrel.poData.push(i+1-k, tmp[tmpJ+1].y, tmp[tmpJ+1].z*0.63);
                gunBarrel.poData.push(i-k, tmp[tmpJ+1].y, tmp[tmpJ+1].z*0.63);

                gunBarrel.coData.push(0.9, 0.9, 0.9);
                gunBarrel.coData.push(0.9, 0.9, 0.9);
                gunBarrel.coData.push(0.9, 0.9, 0.9);
                gunBarrel.coData.push(0.9, 0.9, 0.9);

                gunBarrel.indexData.push(s, s+1, s+2, s, s+2, s+3);

                s += 4;

                gunBarrel.length += 6;
            }
        }

        i = 5;
        var k1, k2;
        for(j = -20; j < 21; j++) {
            if(j < 0) {
                tmpJ = j + 80;
            } else {
                tmpJ = j;
            }

            k1 = 1 - (Math.abs(j) / 20);
            k2 = 1 - (Math.abs(j+1) / 20);

            gunBarrel.poData.push(i-k1, tmp[tmpJ].y, tmp[tmpJ].z*0.65);
            gunBarrel.poData.push(i-k2, tmp[tmpJ+1].y, tmp[tmpJ+1].z*0.65);
            gunBarrel.poData.push(4.5, 0.5, 0);

            gunBarrel.coData.push(0.8, 0.8, 0.8);
            gunBarrel.coData.push(0.8, 0.8, 0.8);
            gunBarrel.coData.push(0.8, 0.8, 0.8);

            gunBarrel.indexData.push(s, s+1, s+2);

            s += 3;

            gunBarrel.length += 3;
        }

        gunBarrel.poData.push(4, tmp[0].y, tmp[0].z*0.63);
        gunBarrel.poData.push(5, tmp[60].y, tmp[60].z*0.63);
        gunBarrel.poData.push(4.5, 0.5, 0);
        gunBarrel.coData.push(0.8, 0.8, 0.8);
        gunBarrel.coData.push(0.8, 0.8, 0.8);
        gunBarrel.coData.push(0.8, 0.8, 0.8);
        gunBarrel.indexData.push(s, s+1, s+2);
        s += 3;
        gunBarrel.length += 3;

        gunBarrel.poData.push(4, tmp[0].y, tmp[0].z*0.63);
        gunBarrel.poData.push(5, tmp[20].y, tmp[20].z*0.63);
        gunBarrel.poData.push(4.5, 0.5, 0);
        gunBarrel.coData.push(0.8, 0.8, 0.8);
        gunBarrel.coData.push(0.8, 0.8, 0.8);
        gunBarrel.coData.push(0.8, 0.8, 0.8);
        gunBarrel.indexData.push(s, s+1, s+2);
        s += 3;
        gunBarrel.length += 3;

        gunBarrel.poData.push(i, tmp[20].y, tmp[20].z*0.63);
        gunBarrel.poData.push(i, tmp[60].y, tmp[60].z*0.63);
        gunBarrel.poData.push(4.5, 0.5, 0);
        gunBarrel.coData.push(0.8, 0.8, 0.8);
        gunBarrel.coData.push(0.8, 0.8, 0.8);
        gunBarrel.coData.push(0.8, 0.8, 0.8);
        gunBarrel.indexData.push(s, s+1, s+2);
        s += 3;
        gunBarrel.length += 3;

        tmp = [];

        for(j = 0; j < 41; j++) {
            angle = 2 * Math.PI * (j / 40);

            tmp.push({
                y: Math.cos(angle),
                z: Math.sin(angle)
            });
        }

        // 前面
        gunBarrel.poData.push(3, 0, tmp[35].z*0.9);
        gunBarrel.poData.push(4.99, 0, tmp[35].z*0.9);
        gunBarrel.poData.push(4.99, tmp[35].y-2, tmp[35].z);
        gunBarrel.poData.push(3, tmp[35].y-2, tmp[35].z);
        gunBarrel.coData.push(0.9, 0.9, 0.9);
        gunBarrel.coData.push(0.9, 0.9, 0.9);
        gunBarrel.coData.push(0.9, 0.9, 0.9);
        gunBarrel.coData.push(0.9, 0.9, 0.9);
        gunBarrel.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunBarrel.length += 6;

        // 后面
        gunBarrel.poData.push(3, 0, tmp[5].z*0.9);
        gunBarrel.poData.push(4.99, 0, tmp[5].z*0.9);
        gunBarrel.poData.push(4.99, tmp[5].y-2, tmp[5].z);
        gunBarrel.poData.push(3, tmp[5].y-2, tmp[5].z);
        gunBarrel.coData.push(0.9, 0.9, 0.9);
        gunBarrel.coData.push(0.9, 0.9, 0.9);
        gunBarrel.coData.push(0.9, 0.9, 0.9);
        gunBarrel.coData.push(0.9, 0.9, 0.9);
        gunBarrel.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunBarrel.length += 6;
        
        var tmp1, tmp2;
        for(j = -5; j < 5; j++) {
            if(j < 0) {
                tmp1 = j + 40;
            } else {
                tmp1 = j;
            }

            tmp2 = j / 10 * 20;

            if(tmp2 < 0) {
                tmp2 = tmp2 + 40;
            }

            gunBarrel.poData.push(4.99, 0, tmp[tmp1].z);
            gunBarrel.poData.push(4.99, 0, tmp[tmp1+1].z);
            gunBarrel.poData.push(4.99, tmp[tmp1+1].y-2, tmp[tmp1+1].z);
            gunBarrel.poData.push(4.99, tmp[tmp1].y-2, tmp[tmp1].z);
            gunBarrel.coData.push(0.8, 0.8, 0.8);
            gunBarrel.coData.push(0.8, 0.8, 0.8);
            gunBarrel.coData.push(0.8, 0.8, 0.8);
            gunBarrel.coData.push(0.8, 0.8, 0.8);
            gunBarrel.indexData.push(s, s+1, s+2, s, s+2, s+3);
            s += 4;
            gunBarrel.length += 6;
        }

        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunBarrel.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunBarrel.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunBarrel.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunBarrel.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, gunBarrel.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(gunBarrel.indexData), webgl.STATIC_DRAW);
    })();

    /** 计算gunBarrel相关 end **/

    tmp = [];
    s = 0;

    /** 计算gunPipe相关 start **/

    (function() {
        for(j = 0; j < 21; j++) {
            angle = 2 * Math.PI * (j / 20);

            tmp.push({
                y: Math.cos(angle),
                z: Math.sin(angle)
            });
        }

        for(i = -4.9; i < 3; i++) {
            for(j = 0; j < 20; j++) {
                gunPipe.poData.push(i, tmp[j].y * 0.8 + gunPipe.translate.y, tmp[j].z * 0.6);
                gunPipe.poData.push(i+1, tmp[j].y * 0.8 + gunPipe.translate.y, tmp[j].z * 0.6);

                gunPipe.poData.push(i+1, tmp[j+1].y * 0.8 + gunPipe.translate.y, tmp[j+1].z * 0.6);
                gunPipe.poData.push(i, tmp[j+1].y * 0.8 + gunPipe.translate.y, tmp[j+1].z * 0.6);

                gunPipe.coData.push(1, 1, 1);
                gunPipe.coData.push(1, 1, 1);
                gunPipe.coData.push(1, 1, 1);
                gunPipe.coData.push(1, 1, 1);

                gunPipe.indexData.push(s, s+1, s+2, s, s+2, s+3);

                s += 4;

                gunPipe.length += 6;
            }
        }

        i = -4.9;
        for(j = 0; j < 20; j++) {
            gunPipe.poData.push(i, gunPipe.translate.y, 0);
            gunPipe.poData.push(i, tmp[j].y * 0.8 + gunPipe.translate.y, tmp[j].z * 0.6);
            gunPipe.poData.push(i, tmp[j+1].y * 0.8 + gunPipe.translate.y, tmp[j+1].z * 0.6);

            gunPipe.coData.push(1, 1, 1);
            gunPipe.coData.push(1, 1, 1);
            gunPipe.coData.push(1, 1, 1);

            gunPipe.indexData.push(s, s+1, s+2);

            s += 3;

            gunPipe.length += 3;
        }

        i = 3;
        for(j = 0; j < 20; j++) {
            gunPipe.poData.push(i, gunPipe.translate.y, 0);
            gunPipe.poData.push(i, tmp[j].y * 0.8 + gunPipe.translate.y, tmp[j].z * 0.6);
            gunPipe.poData.push(i, tmp[j+1].y * 0.8 + gunPipe.translate.y, tmp[j+1].z * 0.6);

            gunPipe.coData.push(1, 1, 1);
            gunPipe.coData.push(1, 1, 1);
            gunPipe.coData.push(1, 1, 1);

            gunPipe.indexData.push(s, s+1, s+2);

            s += 3;

            gunPipe.length += 3;
        }

        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunPipe.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunPipe.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunPipe.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunPipe.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, gunPipe.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(gunPipe.indexData), webgl.STATIC_DRAW);
    })();

    /** 计算gunPipe相关 end **/

    tmp = [];
    s = 0;

    /** 计算gunWheel相关 start **/

    (function() {
        for(j = 0; j < 41; j++) {
            angle = 2 * Math.PI * (j / 40);

            tmp.push({
                y: Math.cos(angle),
                z: Math.sin(angle)
            });
        }

        var color1;
        var color2;

        for(i = 3; i < 5; i+=0.2) {
            for(j = 0; j < 40; j++) {
                color1 = (i - 3) * 0.24;
                color2 = (i + 0.2 - 3) * 0.24;

                gunWheel.poData.push(i, tmp[j].y + gunWheel.translate.y, tmp[j].z);
                gunWheel.poData.push(i+0.2, tmp[j].y + gunWheel.translate.y, tmp[j].z);

                gunWheel.poData.push(i+0.2, tmp[j+1].y + gunWheel.translate.y, tmp[j+1].z);
                gunWheel.poData.push(i, tmp[j+1].y + gunWheel.translate.y, tmp[j+1].z);

                gunWheel.coData.push(color1, color1, color1)
                gunWheel.coData.push(color2, color2, color2);
                gunWheel.coData.push(color2, color2, color2);
                gunWheel.coData.push(color1, color1, color1)

                gunWheel.indexData.push(s, s+1, s+2, s, s+2, s+3);

                s += 4;

                gunWheel.length += 6;
            }
        }

        i = 3;
        for(j = 0; j < 40; j++) {
            gunWheel.poData.push(i, gunWheel.translate.y, 0);
            gunWheel.poData.push(i, tmp[j].y + gunWheel.translate.y, tmp[j].z);
            gunWheel.poData.push(i, tmp[j+1].y + gunWheel.translate.y, tmp[j+1].z);

            gunWheel.coData.push(0, 0, 0);
            gunWheel.coData.push(0, 0, 0);
            gunWheel.coData.push(0, 0, 0);

            gunWheel.indexData.push(s, s+1, s+2);

            s += 3;

            gunWheel.length += 3;
        }

        i = 5;
        for(j = 0; j < 40; j++) {
            gunWheel.poData.push(i, gunWheel.translate.y, 0);
            gunWheel.poData.push(i, tmp[j].y + gunWheel.translate.y, tmp[j].z);
            gunWheel.poData.push(i, tmp[j+1].y + gunWheel.translate.y, tmp[j+1].z);

            gunWheel.coData.push(0.29, 0.29, 0.29);
            gunWheel.coData.push(0.29, 0.29, 0.29);
            gunWheel.coData.push(0.29, 0.29, 0.29);

            gunWheel.indexData.push(s, s+1, s+2);

            s += 3;

            gunWheel.length += 3;
        }

        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunWheel.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunWheel.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunWheel.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunWheel.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, gunWheel.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(gunWheel.indexData), webgl.STATIC_DRAW);
    })();

    /** 计算gunWheel相关 end **/

    tmp = [];
    s = 0;

    /** 计算gunHat相关 start **/

    (function() {
        [9, 0, 1].forEach(function(item) {
            angle = 2 * Math.PI * (item / 10);

            tmp.push({
                y: Math.cos(angle),
                z: Math.sin(angle)
            });
        });

        for(i = -5; i < -3; i++) {
            for(j = 0; j < 2; j++) {
                gunHat.poData.push(i, tmp[j].y, tmp[j].z*0.9);
                gunHat.poData.push(i+1, tmp[j].y, tmp[j].z*0.9);

                gunHat.poData.push(i+1, tmp[j+1].y, tmp[j+1].z*0.9);
                gunHat.poData.push(i, tmp[j+1].y, tmp[j+1].z*0.9);

                gunHat.coData.push(0, 0, 0);
                gunHat.coData.push(0, 0, 0);
                gunHat.coData.push(0, 0, 0);
                gunHat.coData.push(0, 0, 0);

                gunHat.indexData.push(s, s+1, s+2, s, s+2, s+3);

                s += 4;

                gunHat.length += 6;
            }
        }

        for(i = -5; i < -3; i++) {
            for(j = 0; j < 2; j++) {
                gunHat.poData.push(i, tmp[j].y + gunHat.translate.y, tmp[j].z*0.9);
                gunHat.poData.push(i+1, tmp[j].y + gunHat.translate.y, tmp[j].z*0.9);

                gunHat.poData.push(i+1, tmp[j+1].y + gunHat.translate.y, tmp[j+1].z*0.9);
                gunHat.poData.push(i, tmp[j+1].y + gunHat.translate.y, tmp[j+1].z*0.9);

                gunHat.coData.push(0, 0, 0);
                gunHat.coData.push(0, 0, 0);
                gunHat.coData.push(0, 0, 0);
                gunHat.coData.push(0, 0, 0);

                gunHat.indexData.push(s, s+1, s+2, s, s+2, s+3);

                s += 4;

                gunHat.length += 6;
            }
        }

        gunHat.poData.push(-4.6, tmp[1].y + 0.4, 0);
        gunHat.poData.push(-4, tmp[1].y + 0.4, 0);

        gunHat.poData.push(-4, tmp[1].y, 0);
        gunHat.poData.push(-4.6, tmp[1].y, 0);

        gunHat.coData.push(0, 0, 0);
        gunHat.coData.push(0, 0, 0);
        gunHat.coData.push(0, 0, 0);
        gunHat.coData.push(0, 0, 0);

        gunHat.indexData.push(s, s+1, s+2, s, s+2, s+3);

        s += 4;

        gunHat.length += 6;


        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunHat.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunHat.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunHat.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunHat.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, gunHat.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(gunHat.indexData), webgl.STATIC_DRAW);
    })();

    /** 计算gunHat相关 end **/

    tmp = [];
    s = 0;

    /** 计算gunButt相关 start **/

    (function() {
        i = 5;
        var z = 0.9;

        // 上面
        gunButt.poData.push(i, 1 + gunButt.translate.y, z*0.6);
        gunButt.poData.push(i+1.6, 1 + gunButt.translate.y, z*0.6);
        gunButt.poData.push(i+1.6, 1 + gunButt.translate.y, -z*0.6);
        gunButt.poData.push(i, 1 + gunButt.translate.y, -z*0.6);

        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);

        gunButt.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunButt.length += 6;

        // 下面
        gunButt.poData.push(i+0.7, -2.3 + gunButt.translate.y, z*0.6);
        gunButt.poData.push(i+1.6, -2.3 + gunButt.translate.y, z*0.6);
        gunButt.poData.push(i+1.6, -2.3 + gunButt.translate.y, -z*0.6);
        gunButt.poData.push(i+0.7, -2.3 + gunButt.translate.y, -z*0.6);

        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);

        gunButt.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunButt.length += 6;

        // 左面
        gunButt.poData.push(i, 1 + gunButt.translate.y, -z*0.6);
        gunButt.poData.push(i, 1 + gunButt.translate.y, z*0.6);
        gunButt.poData.push(i+0.7, -2.3 + gunButt.translate.y, z*0.6);
        gunButt.poData.push(i+0.7, -2.3 + gunButt.translate.y, -z*0.6);

        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);

        gunButt.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunButt.length += 6;

        // 右面
        gunButt.poData.push(i+1.6, 1 + gunButt.translate.y, z*0.6);
        gunButt.poData.push(i+1.6, 1 + gunButt.translate.y, -z*0.6);
        gunButt.poData.push(i+2.3, -2.3 + gunButt.translate.y, -z*0.6);
        gunButt.poData.push(i+2.3, -2.3 + gunButt.translate.y, z*0.6);

        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);

        gunButt.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunButt.length += 6;

        // 前面
        gunButt.poData.push(i, 1 + gunButt.translate.y, z*0.6);
        gunButt.poData.push(i+1.6, 1 + gunButt.translate.y, z*0.6);
        gunButt.poData.push(i+2.3, -2.3 + gunButt.translate.y, z*0.6);
        gunButt.poData.push(i+0.7, -2.3 + gunButt.translate.y, z*0.6);

        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);

        gunButt.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunButt.length += 6;

        // 后面
        gunButt.poData.push(i, 1 + gunButt.translate.y, -z*0.6);
        gunButt.poData.push(i+1.6, 1 + gunButt.translate.y, -z*0.6);
        gunButt.poData.push(i+2.3, -2.3 + gunButt.translate.y, -z*0.6);
        gunButt.poData.push(i+0.7, -2.3 + gunButt.translate.y, -z*0.6);

        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);
        gunButt.coData.push(0.9, 0.9, 0.9);

        gunButt.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunButt.length += 6;

        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunButt.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunButt.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunButt.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunButt.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, gunButt.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(gunButt.indexData), webgl.STATIC_DRAW);

    })();

    /** 计算gunButt相关 end **/

    tmp = [];
    s = 0;

    /** 计算gunTrigger相关 start **/

    (function() {
        var x = 3.3;
        var y = -2.2;
        var z1 = 0.2;
        var z2 = -0.2;
        var k = 0;
        var angle;

        // 右边
        for(k = 0; k < 5; k++) {
            angle = Math.PI/2 * (k/5);

            tmp.push({
                x: 2 - 2 * Math.sin(angle),
                y: -2 * Math.cos(angle)
            });
        }

        for(k = 0; k < 4; k++) {
            gunTrigger.poData.push(x+tmp[k].x, y+tmp[k].y, z2);
            gunTrigger.poData.push(x+tmp[k].x, y+tmp[k].y, z1);

            gunTrigger.poData.push(x+tmp[k+1].x, y+tmp[k+1].y, z1);
            gunTrigger.poData.push(x+tmp[k+1].x, y+tmp[k+1].y, z2);

            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);

            gunTrigger.indexData.push(s, s+1, s+2, s, s+2, s+3);

            s += 4;

            gunTrigger.length += 6;
        }

        // 左边
        for(k = 0; k < 5; k++) {
            angle = Math.PI/2 * (k/5);

            tmp.push({
                x: 2.1 - 2.1 * Math.sin(angle),
                y: -2.1 * Math.cos(angle)
            });
        }

        for(k = 0; k < 4; k++) {
            gunTrigger.poData.push(x+tmp[k+5].x - 0.1, y+tmp[k+5].y, z2);
            gunTrigger.poData.push(x+tmp[k+5].x - 0.1, y+tmp[k+5].y, z1);

            gunTrigger.poData.push(x+tmp[k+5+1].x - 0.1, y+tmp[k+5+1].y, z1);
            gunTrigger.poData.push(x+tmp[k+5+1].x - 0.1, y+tmp[k+5+1].y, z2);

            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);

            gunTrigger.indexData.push(s, s+1, s+2, s, s+2, s+3);

            s += 4;

            gunTrigger.length += 6;
        }

        // 前面
        for(k = 0; k < 4; k++) {
            gunTrigger.poData.push(x+tmp[k+5].x - 0.1, y+tmp[k+5].y, z1);
            gunTrigger.poData.push(x+tmp[k].x, y+tmp[k].y, z1);

            gunTrigger.poData.push(x+tmp[k+1].x, y+tmp[k+1].y, z1);
            gunTrigger.poData.push(x+tmp[k+5+1].x - 0.1, y+tmp[k+5+1].y, z1);

            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);

            gunTrigger.indexData.push(s, s+1, s+2, s, s+2, s+3);

            s += 4;

            gunTrigger.length += 6;
        }

        // 后面
        for(k = 0; k < 4; k++) {
            gunTrigger.poData.push(x+tmp[k+5].x - 0.1, y+tmp[k+5].y, z2);
            gunTrigger.poData.push(x+tmp[k].x, y+tmp[k].y, z2);

            gunTrigger.poData.push(x+tmp[k+1].x, y+tmp[k+1].y, z2);
            gunTrigger.poData.push(x+tmp[k+5+1].x - 0.1, y+tmp[k+5+1].y, z2);

            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);
            gunTrigger.coData.push(0, 0, 0);

            gunTrigger.indexData.push(s, s+1, s+2, s, s+2, s+3);

            s += 4;

            gunTrigger.length += 6;
        }

        // 修饰
        gunTrigger.poData.push(x+tmp[2].x - 0.1, y+tmp[2].y, z1);
        gunTrigger.poData.push(x+tmp[0].x + 0.1, y+tmp[0].y, z1);
        gunTrigger.poData.push(x+tmp[0].x + 0.1, y+tmp[0].y-0.5, z1);

        gunTrigger.coData.push(0, 0, 0);
        gunTrigger.coData.push(0, 0, 0);
        gunTrigger.coData.push(0, 0, 0);
        
        gunTrigger.indexData.push(s, s+1, s+2);
        s += 3;
        gunTrigger.length += 3;

        gunTrigger.poData.push(x+tmp[2].x - 0.1, y+tmp[2].y, z2);
        gunTrigger.poData.push(x+tmp[0].x + 0.1, y+tmp[0].y, z2);
        gunTrigger.poData.push(x+tmp[0].x + 0.1, y+tmp[0].y-0.5, z2);

        gunTrigger.coData.push(0, 0, 0);
        gunTrigger.coData.push(0, 0, 0);
        gunTrigger.coData.push(0, 0, 0);
        
        gunTrigger.indexData.push(s, s+1, s+2);
        s += 3;
        gunTrigger.length += 3;

        gunTrigger.poData.push(x+tmp[2].x - 0.1, y+tmp[2].y, z2);
        gunTrigger.poData.push(x+tmp[2].x - 0.1, y+tmp[2].y, z1);
        gunTrigger.poData.push(x+tmp[0].x + 0.1, y+tmp[0].y-0.5, z1);
        gunTrigger.poData.push(x+tmp[0].x + 0.1, y+tmp[0].y-0.5, z2);

        gunTrigger.coData.push(0, 0, 0);
        gunTrigger.coData.push(0, 0, 0);
        gunTrigger.coData.push(0, 0, 0);
        gunTrigger.coData.push(0, 0, 0);
        
        gunTrigger.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunTrigger.length += 6;

        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunTrigger.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunTrigger.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunTrigger.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunTrigger.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, gunTrigger.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(gunTrigger.indexData), webgl.STATIC_DRAW);
    })();

    /** 计算gunTrigger相关 end **/

    tmp = [];
    s = 0;

    /** 计算gunBack相关 start **/
    (function() {
        gunBack.poData.push(3, 1, 0.5);
        gunBack.poData.push(6.6, 1.2, 0.5);

        gunBack.poData.push(6.6, 1.2, -0.5);
        gunBack.poData.push(3, 1, -0.5);

        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunBack.length += 6;

        gunBack.poData.push(3, 1.2, 0.5);
        gunBack.poData.push(3, 1, 0.5);
        gunBack.poData.push(4.2, 1, 0.35);

        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2);
        s += 3;
        gunBack.length += 3;

        gunBack.poData.push(3, 1.2, -0.5);
        gunBack.poData.push(3, 1, -0.5);
        gunBack.poData.push(4.2, 1, -0.35);

        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2);
        s += 3;
        gunBack.length += 3;

        gunBack.poData.push(6.6, 1.2, 0.5);
        gunBack.poData.push(5, 0.0, 0.5);
        gunBack.poData.push(4.2, 1.07, 0.5);

        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2);
        s += 3;
        gunBack.length += 3;

        gunBack.poData.push(6.6, 1.2, -0.5);
        gunBack.poData.push(5, 0.0, -0.5);
        gunBack.poData.push(4.2, 1.07, -0.5);

        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2);
        s += 3;
        gunBack.length += 3;

        gunBack.poData.push(6.6, 1.2, 0.5);
        gunBack.poData.push(6, 0, 0.5);
        gunBack.poData.push(5, 0, 0.5);

        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2);
        s += 3;
        gunBack.length += 3;

        gunBack.poData.push(6.6, 1.2, -0.5);
        gunBack.poData.push(6, 0, -0.5);
        gunBack.poData.push(5, 0, -0.5);

        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2);
        s += 3;
        gunBack.length += 3;

        gunBack.poData.push(6.6, 1.2, 0.5);
        gunBack.poData.push(6.6, 1.2, -0.5);
        gunBack.poData.push(6, 0, -0.5);
        gunBack.poData.push(6, 0, 0.5);

        gunBack.coData.push(1, 0, 0);
        gunBack.coData.push(0.6, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunBack.length += 6;

        // 前面
        gunBack.poData.push(5, 0, 0.5);
        gunBack.poData.push(6, 0, 0.5);
        gunBack.poData.push(6.4, -2.7, 0.5);
        gunBack.poData.push(5, -2.7, 0.5);

        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunBack.length += 6;

        // 后面
        gunBack.poData.push(5, 0, -0.5);
        gunBack.poData.push(6, 0, -0.5);
        gunBack.poData.push(6.4, -2.7, -0.5);
        gunBack.poData.push(5, -2.7, -0.5);

        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunBack.length += 6;

        gunBack.poData.push(6, 0, 0.5);
        gunBack.poData.push(6, 0, -0.5);
        gunBack.poData.push(6.4, -2.7, -0.5);
        gunBack.poData.push(6.4, -2.7, 0.5);

        gunBack.coData.push(1, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);
        gunBack.coData.push(0, 0, 0);

        gunBack.indexData.push(s, s+1, s+2, s, s+2, s+3);
        s += 4;
        gunBack.length += 6;

        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunBack.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunBack.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunBack.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunBack.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, gunBack.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(gunBack.indexData), webgl.STATIC_DRAW);
    })();

    /** 计算gunBack相关 end **/

    tmp = [];
    s = 0;

    /** 计算gunAim相关 start **/

    (function() {
        gunAim.poData.push(-5, 0, 0);
        gunAim.poData.push(5, 0, 0);
        gunAim.poData.push(0, -5, 0);
        gunAim.poData.push(0, 5, 0);

        gunAim.coData.push(1, 1, 1);
        gunAim.coData.push(1, 1, 1);
        gunAim.coData.push(1, 1, 1);
        gunAim.coData.push(1, 1, 1);

        gunAim.length = 4;

        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunAim.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunAim.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, gunAim.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(gunAim.coData), webgl.STATIC_DRAW);
    })();

    /** 计算gunAim相关 end **/

    return gun;
};
    