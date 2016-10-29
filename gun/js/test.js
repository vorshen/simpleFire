var test = {
    poData: [],
    poBuf: webgl.createBuffer(),
    coData: [],
    coBuf: webgl.createBuffer(),
    indexData: [],
    indexBuf: webgl.createBuffer(),
    length: 0,
    draw: function() {
        var sx = Math.sin(camera.ry);
        var cx = Math.cos(camera.ry);
        var sy = Math.sin(-camera.rx);
        var cy = Math.cos(-camera.rx);
        webgl.uniformMatrix4fv(
            uMMatrix, false, [
                cy,    0,      -sy,    0,
                sy*sx, cx,  sx*cy,  0,
                sy*cx, -sx, cx*cy,  0,
                0,0,0,1
            ]
        );

        webgl.uniformMatrix4fv(uVMatrix, false, camera.toMatrix());
        webgl.bindBuffer(webgl.ARRAY_BUFFER, this.poBuf);
        webgl.vertexAttribPointer(aPosition, 3, webgl.FLOAT, false, 0, 0);

        webgl.bindBuffer(webgl.ARRAY_BUFFER, this.coBuf);
        webgl.vertexAttribPointer(aColor, 3, webgl.FLOAT, false, 0, 0);

        webgl.drawArrays(webgl.LINES, 0, this.length);
    }
};

test.poData.push(0, 0, 0);
test.poData.push(0, 0, -400);

test.coData.push(1,0,0);
test.coData.push(1,0,0);

test.length += 2;

test.poData.push(-0.005, 0.005, -0.1);
test.poData.push(0.005, 0.005, -0.1);

test.coData.push(1,0,0);
test.coData.push(1,0,0);
test.length += 2;

test.poData.push(-0.005, 0.005, -0.1);
test.poData.push(-0.005, -0.005, -0.1);

test.coData.push(1,0,0);
test.coData.push(1,0,0);
test.length += 2;

test.poData.push(0.005, 0.005, -0.1);
test.poData.push(0.005, -0.005, -0.1);

test.coData.push(1,0,0);
test.coData.push(1,0,0);
test.length += 2;

test.poData.push(-0.005, -0.005, -0.1);
test.poData.push(0.005, -0.005, -0.1);

test.coData.push(1,0,0);
test.coData.push(1,0,0);
test.length += 2;

webgl.bindBuffer(webgl.ARRAY_BUFFER, test.poBuf);
webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(test.poData), webgl.STATIC_DRAW);
webgl.bindBuffer(webgl.ARRAY_BUFFER, test.coBuf);
webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(test.coData), webgl.STATIC_DRAW);