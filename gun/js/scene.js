var Scenes = function(webgl) {
    var sceneFront = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 0,
            y: -75,
            z: 500
        },
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);
            // webgl.vertexAttrib4f(aColor, 0.2, 0, 0, 1);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);

            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var sceneBack = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 0,
            y: -75,
            z: -500
        },
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);
            // webgl.vertexAttrib4f(aColor, 0, 0.2, 0, 1);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);

            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var sceneLeft = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: -500,
            y: -75,
            z: 0
        },
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);
            // webgl.vertexAttrib4f(aColor, 0, 0, 0.2, 1);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);

            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var sceneRight = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 500,
            y: -75,
            z: 0
        },
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);
            // webgl.vertexAttrib4f(aColor, 0.2, 0.2, 0, 1);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);

            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var sceneFloor = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 0,
            y: -75,
            z: 0
        },
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);
            // webgl.vertexAttrib4f(aColor, 0.2, 0.2, 0.2, 1);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);

            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var sceneCeiling = {
        poData: [],
        poBuf: webgl.createBuffer(),
        coData: [],
        coBuf: webgl.createBuffer(),
        indexData: [],
        indexBuf: webgl.createBuffer(),
        length: 0,
        translate: {
            x: 0,
            y: 100,
            z: 0
        },
        draw: function() {
            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
            webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

            webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
            webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);
            // webgl.vertexAttrib4f(aColor, 0, 0, 0, 1);

            webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, this.indexBuf);
            // webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), webgl.STATIC_DRAW);

            webgl.drawElements(webgl.TRIANGLES, this.length, webgl.UNSIGNED_SHORT, 0);
        }
    };

    var scenes = {
        front: sceneFront,
        back: sceneBack,
        left: sceneLeft,
        right: sceneRight,
        floor: sceneFloor,
        ceiling: sceneCeiling,
        component: [sceneFront, sceneBack, sceneLeft, sceneRight, sceneFloor, sceneCeiling],
        scale: 15,
        draw: function() {
            webgl.uniformMatrix4fv(
                uMMatrix, false, [
                    1/15,0,0,0,
                    0,1/15,0,0,
                    0,0,1/15,0,
                    0,0,0,1
                ]
            );

            webgl.uniformMatrix4fv(uVMatrix, false, camera.toMatrix());

            this.component.forEach(function(item) {
                item.draw();
            });
        }
    };

    tmp = [];
    s = 0;

    /** 计算sceneFront相关 start **/

    (function() {
        sceneFront.poData.push(-500, sceneFront.translate.y, sceneFront.translate.z);
        sceneFront.poData.push(500, sceneFront.translate.y, sceneFront.translate.z);
        sceneFront.poData.push(500, 500+sceneFront.translate.y, sceneFront.translate.z);
        sceneFront.poData.push(-500, 500+sceneFront.translate.y, sceneFront.translate.z);

        sceneFront.coData.push(0.8, 0.2, 0.2);
        sceneFront.coData.push(0.8, 0.2, 0.2);
        sceneFront.coData.push(0.8, 0.2, 0.2);
        sceneFront.coData.push(0.8, 0.2, 0.2);

        sceneFront.indexData.push(s, s+1, s+2, s, s+2, s+3);
        sceneFront.length += 6;

        webgl.bindBuffer(webgl.ARRAY_BUFFER, sceneFront.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(sceneFront.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, sceneFront.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(sceneFront.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, sceneFront.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sceneFront.indexData), webgl.STATIC_DRAW);
    })();
    /** 计算sceneFront相关 end **/

    tmp = [];
    s = 0;

    /** 计算sceneBack相关 start **/

    (function() {
        sceneBack.poData.push(-500, sceneBack.translate.y, sceneBack.translate.z);
        sceneBack.poData.push(500, sceneBack.translate.y, sceneBack.translate.z);
        sceneBack.poData.push(500, 500+sceneBack.translate.y, sceneBack.translate.z);
        sceneBack.poData.push(-500, 500+sceneBack.translate.y, sceneBack.translate.z);

        sceneBack.coData.push(0.2, 0.6, 0.2);
        sceneBack.coData.push(0.2, 0.6, 0.2);
        sceneBack.coData.push(0.2, 0.6, 0.2);
        sceneBack.coData.push(0.2, 0.6, 0.2);

        sceneBack.indexData.push(s, s+1, s+2, s, s+2, s+3);
        sceneBack.length += 6;

        webgl.bindBuffer(webgl.ARRAY_BUFFER, sceneBack.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(sceneBack.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, sceneBack.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(sceneBack.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, sceneBack.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sceneBack.indexData), webgl.STATIC_DRAW);
    })();

    /** 计算sceneBack相关 end **/

    tmp = [];
    s = 0;

    /** 计算sceneLeft相关 start **/

    (function() {
        sceneLeft.poData.push(sceneLeft.translate.x, 500+sceneLeft.translate.y, -500);
        sceneLeft.poData.push(sceneLeft.translate.x, 500+sceneLeft.translate.y, 500);
        sceneLeft.poData.push(sceneLeft.translate.x, sceneLeft.translate.y, 500);
        sceneLeft.poData.push(sceneLeft.translate.x, sceneLeft.translate.y, -500);

        sceneLeft.coData.push(0.2, 0.2, 0.8);
        sceneLeft.coData.push(0.2, 0.2, 0.8);
        sceneLeft.coData.push(0.2, 0.2, 0.8);
        sceneLeft.coData.push(0.2, 0.2, 0.8);

        sceneLeft.indexData.push(s, s+1, s+2, s, s+2, s+3);
        sceneLeft.length += 6;

        webgl.bindBuffer(webgl.ARRAY_BUFFER, sceneLeft.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(sceneLeft.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, sceneLeft.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(sceneLeft.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, sceneLeft.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sceneLeft.indexData), webgl.STATIC_DRAW);
    })();

    /** 计算sceneLeft相关 end **/

    tmp = [];
    s = 0;

    /** 计算sceneRight相关 start **/

    (function() {
        sceneRight.poData.push(sceneRight.translate.x, 500+sceneRight.translate.y, -500);
        sceneRight.poData.push(sceneRight.translate.x, 500+sceneRight.translate.y, 500);
        sceneRight.poData.push(sceneRight.translate.x, sceneRight.translate.y, 500);
        sceneRight.poData.push(sceneRight.translate.x, sceneRight.translate.y, -500);

        sceneRight.coData.push(0.8, 0.8, 0);
        sceneRight.coData.push(0.8, 0.8, 0);
        sceneRight.coData.push(0.8, 0.8, 0);
        sceneRight.coData.push(0.8, 0.8, 0);

        sceneRight.indexData.push(s, s+1, s+2, s, s+2, s+3);
        sceneRight.length += 6;

        webgl.bindBuffer(webgl.ARRAY_BUFFER, sceneRight.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(sceneRight.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, sceneRight.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(sceneRight.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, sceneRight.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sceneRight.indexData), webgl.STATIC_DRAW);
    })();

    /** 计算sceneRight相关 end **/

    tmp = [];
    s = 0;

    /** 计算sceneFloor相关 start **/

    (function() {
        sceneFloor.poData.push(-500, -75, 500);
        sceneFloor.poData.push(500, -75, 500);
        sceneFloor.poData.push(500, -75, -500);
        sceneFloor.poData.push(-500, -75, -500);

        sceneFloor.coData.push(0.3, 0.3, 0.3);
        sceneFloor.coData.push(0.3, 0.3, 0.3);
        sceneFloor.coData.push(0.3, 0.3, 0.3);
        sceneFloor.coData.push(0.3, 0.3, 0.3);

        sceneFloor.indexData.push(s, s+1, s+2, s, s+2, s+3);
        sceneFloor.length += 6;

        webgl.bindBuffer(webgl.ARRAY_BUFFER, sceneFloor.poBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(sceneFloor.poData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ARRAY_BUFFER, sceneFloor.coBuf);
        webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(sceneFloor.coData), webgl.STATIC_DRAW);
        webgl.bindBuffer(webgl.ELEMENT_ARRAY_BUFFER, sceneFloor.indexBuf);
        webgl.bufferData(webgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(sceneFloor.indexData), webgl.STATIC_DRAW);
    })();

    /** 计算sceneFloor相关 end **/

    return scenes;
};