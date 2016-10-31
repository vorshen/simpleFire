(function() {
    var camera = {
        rx: 0,
        ry: 0,
        mx: 0,
        my: 0,
        mz: 0,
        toMatrix: function() {
            var rx = this.rx;
            var ry = this.ry;
            var mx = this.mx;
            var my = this.my;
            var mz = this.mz;

            var F = normalize3D([Math.sin(rx)*Math.cos(ry), Math.sin(ry), -Math.cos(rx) * Math.cos(ry)]);

            var x = F[0];
            var z = F[2];

            var angle = getAngle([0, -1], [x, z]);


            var R = [Math.cos(angle), 0, Math.sin(angle)];

            var U = cross3D(R, F);

            F[0] = -F[0];
            F[1] = -F[1];
            F[2] = -F[2];

            var s = [];

            s.push(R[0], U[0], F[0], 0);
            s.push(R[1], U[1], F[1], 0);
            s.push(R[2], U[2], F[2], 0);

            s.push(
                R[0] * mx + R[1] * my + R[2] * mz,
                U[0] * mx + U[1] * my + U[2] * mz,
                F[0] * mx + F[1] * my + F[2] * mz,
                1
            );

            return s;
        }
    };

    document.onkeydown = function(e) {
        return ;
        var code = e.keyCode;

        switch(code) {
            case 87:
                // 前
                camera.mz += 0.4*Math.cos(camera.rx)*Math.cos(camera.ry);
                camera.mx -= 0.4*Math.sin(camera.rx);
                camera.my -= 0.4*Math.sin(camera.ry);
                break;
            case 83:
                // 后
                camera.mz -= 0.4*Math.cos(camera.rx)*Math.cos(camera.ry);
                camera.mx += 0.4*Math.sin(camera.rx);
                camera.my += 0.4*Math.sin(camera.ry);
                break;
            case 65:
                // 左
                camera.mx += 0.4*Math.cos(camera.rx);
                camera.mz += 0.4*Math.sin(camera.rx);
                break;
            case 68:
                // 右
                camera.mx -= 0.4*Math.cos(camera.rx);
                camera.mz -= 0.4*Math.sin(camera.rx);
                break;
        }
    };

    var mouse = {
        x: oC.width / 2,
        y: oC.height / 2
    };

    oC.addEventListener('mousedown', function(e) {
        if(!level.isStart) {
            level.isStart = true;
            level.start();
        }
        oC.requestPointerLock();
    }, false);

    oC.addEventListener("mousemove", function(event) {

        if(document.pointerLockElement) {

            camera.rx += (event.movementX / 200);
            camera.ry += (-event.movementY / 200);
        }

        if(camera.ry >= Math.PI/2) {
            camera.ry = Math.PI/2;
        } else if(camera.ry <= -Math.PI/2) {
            camera.ry = -Math.PI/2;
        }
    }, false);

    oC.onclick = function(e) {
        if(gun.firing) {
            return ;
        }
        gun.fire();

        var x = width / 2;
        var y = height / 2;
        
        webgl.uniform1i(uIsFrame, true);
        webgl.bindFramebuffer(webgl.FRAMEBUFFER, framebuffer);
        webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);

        targets.drawFrame();

        var readout = new Uint8Array(1*1*4);

        webgl.bindFramebuffer(webgl.FRAMEBUFFER, framebuffer);
        webgl.readPixels(x, y, 1, 1, webgl.RGBA, webgl.UNSIGNED_BYTE, readout);
        webgl.bindFramebuffer(webgl.FRAMEBUFFER, null);

        targets.check(readout);

        webgl.uniform1i(uIsFrame, false);
    };

    window.camera = camera;
})();