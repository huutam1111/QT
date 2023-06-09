!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.THREE = {})
}(this, function(t) {
    function e() {}
    function W(t, e) {
        this.x = t || 0,
        this.y = e || 0
    }
    function wt() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    function w(t, e, i, n) {
        this._x = t || 0,
        this._y = e || 0,
        this._z = i || 0,
        this._w = void 0 !== n ? n : 1
    }
    function Mt(t, e, i) {
        this.x = t || 0,
        this.y = e || 0,
        this.z = i || 0
    }
    function g() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    function p(t, e, i, n, r, a, o, s, c, h) {
        Object.defineProperty(this, "id", {
            value: Ia++
        }),
        this.uuid = fa.generateUUID(),
        this.name = "",
        this.image = void 0 !== t ? t : p.DEFAULT_IMAGE,
        this.mipmaps = [],
        this.mapping = void 0 !== e ? e : p.DEFAULT_MAPPING,
        this.wrapS = void 0 !== i ? i : 1001,
        this.wrapT = void 0 !== n ? n : 1001,
        this.magFilter = void 0 !== r ? r : 1006,
        this.minFilter = void 0 !== a ? a : 1008,
        this.anisotropy = void 0 !== c ? c : 1,
        this.format = void 0 !== o ? o : 1023,
        this.type = void 0 !== s ? s : 1009,
        this.offset = new W(0,0),
        this.repeat = new W(1,1),
        this.center = new W(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new g,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.encoding = void 0 !== h ? h : 3e3,
        this.version = 0,
        this.onUpdate = null
    }
    function Et(t, e, i, n) {
        this.x = t || 0,
        this.y = e || 0,
        this.z = i || 0,
        this.w = void 0 !== n ? n : 1
    }
    function A(t, e, i) {
        this.width = t,
        this.height = e,
        this.scissor = new Et(0,0,t,e),
        this.scissorTest = !1,
        this.viewport = new Et(0,0,t,e),
        void 0 === (i = i || {}).minFilter && (i.minFilter = 1006),
        this.texture = new p(void 0,void 0,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),
        this.texture.generateMipmaps = void 0 === i.generateMipmaps || i.generateMipmaps,
        this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer,
        this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer,
        this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
    }
    function n(t, e, i) {
        A.call(this, t, e, i),
        this.activeMipMapLevel = this.activeCubeFace = 0
    }
    function Tt(t, e, i, n, r, a, o, s, c, h, l, u) {
        p.call(this, null, a, o, s, c, h, n, r, l, u),
        this.image = {
            data: t,
            width: e,
            height: i
        },
        this.magFilter = void 0 !== c ? c : 1003,
        this.minFilter = void 0 !== h ? h : 1003,
        this.flipY = this.generateMipmaps = !1,
        this.unpackAlignment = 1
    }
    function i(t, e) {
        this.min = void 0 !== t ? t : new Mt(1 / 0,1 / 0,1 / 0),
        this.max = void 0 !== e ? e : new Mt(-1 / 0,-1 / 0,-1 / 0)
    }
    function o(t, e) {
        this.center = void 0 !== t ? t : new Mt,
        this.radius = void 0 !== e ? e : 0
    }
    function v(t, e) {
        this.normal = void 0 !== t ? t : new Mt(1,0,0),
        this.constant = void 0 !== e ? e : 0
    }
    function St(t, e, i, n, r, a) {
        this.planes = [void 0 !== t ? t : new v, void 0 !== e ? e : new v, void 0 !== i ? i : new v, void 0 !== n ? n : new v, void 0 !== r ? r : new v, void 0 !== a ? a : new v]
    }
    function M(t, e, i) {
        return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
    }
    function At() {
        function i(t, e) {
            !1 !== r && (a(t, e),
            n.requestAnimationFrame(i))
        }
        var n = null
          , r = !1
          , a = null;
        return {
            start: function() {
                !0 !== r && null !== a && (n.requestAnimationFrame(i),
                r = !0)
            },
            stop: function() {
                r = !1
            },
            setAnimationLoop: function(t) {
                a = t
            },
            setContext: function(t) {
                n = t
            }
        }
    }
    function Lt(u) {
        var p = new WeakMap;
        return {
            get: function(t) {
                return t.isInterleavedBufferAttribute && (t = t.data),
                p.get(t)
            },
            remove: function(t) {
                t.isInterleavedBufferAttribute && (t = t.data);
                var e = p.get(t);
                e && (u.deleteBuffer(e.buffer),
                p.delete(t))
            },
            update: function(t, e) {
                t.isInterleavedBufferAttribute && (t = t.data);
                var i, n, r, a, o, s = p.get(t);
                if (void 0 === s)
                    p.set(t, (n = e,
                    r = (i = t).array,
                    a = i.dynamic ? u.DYNAMIC_DRAW : u.STATIC_DRAW,
                    o = u.createBuffer(),
                    u.bindBuffer(n, o),
                    u.bufferData(n, r, a),
                    i.onUploadCallback(),
                    n = u.FLOAT,
                    r instanceof Float32Array ? n = u.FLOAT : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? n = u.UNSIGNED_SHORT : r instanceof Int16Array ? n = u.SHORT : r instanceof Uint32Array ? n = u.UNSIGNED_INT : r instanceof Int32Array ? n = u.INT : r instanceof Int8Array ? n = u.BYTE : r instanceof Uint8Array && (n = u.UNSIGNED_BYTE),
                    {
                        buffer: o,
                        type: n,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: i.version
                    }));
                else if (s.version < t.version) {
                    var c = t
                      , h = c.array
                      , l = c.updateRange;
                    u.bindBuffer(e, s.buffer),
                    !1 === c.dynamic ? u.bufferData(e, h, u.STATIC_DRAW) : -1 === l.count ? u.bufferSubData(e, 0, h) : 0 === l.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (u.bufferSubData(e, l.offset * h.BYTES_PER_ELEMENT, h.subarray(l.offset, l.offset + l.count)),
                    l.count = -1),
                    s.version = t.version
                }
            }
        }
    }
    function U(t, e, i, n, r, a) {
        this.a = t,
        this.b = e,
        this.c = i,
        this.normal = n && n.isVector3 ? n : new Mt,
        this.vertexNormals = Array.isArray(n) ? n : [],
        this.color = r && r.isColor ? r : new M,
        this.vertexColors = Array.isArray(r) ? r : [],
        this.materialIndex = void 0 !== a ? a : 0
    }
    function r(t, e, i, n) {
        this._x = t || 0,
        this._y = e || 0,
        this._z = i || 0,
        this._order = n || r.DefaultOrder
    }
    function a() {
        this.mask = 1
    }
    function l() {
        Object.defineProperty(this, "id", {
            value: so++
        }),
        this.uuid = fa.generateUUID(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = l.DefaultUp.clone();
        var t = new Mt
          , e = new r
          , i = new w
          , n = new Mt(1,1,1);
        e.onChange(function() {
            i.setFromEuler(e, !1)
        }),
        i.onChange(function() {
            e.setFromQuaternion(i, void 0, !1)
        }),
        Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: t
            },
            rotation: {
                enumerable: !0,
                value: e
            },
            quaternion: {
                enumerable: !0,
                value: i
            },
            scale: {
                enumerable: !0,
                value: n
            },
            modelViewMatrix: {
                value: new wt
            },
            normalMatrix: {
                value: new g
            }
        }),
        this.matrix = new wt,
        this.matrixWorld = new wt,
        this.matrixAutoUpdate = l.DefaultMatrixAutoUpdate,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new a,
        this.visible = !0,
        this.receiveShadow = this.castShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.userData = {}
    }
    function E() {
        Object.defineProperty(this, "id", {
            value: go += 2
        }),
        this.uuid = fa.generateUUID(),
        this.name = "",
        this.type = "Geometry",
        this.vertices = [],
        this.colors = [],
        this.faces = [],
        this.faceVertexUvs = [[]],
        this.morphTargets = [],
        this.morphNormals = [],
        this.skinWeights = [],
        this.skinIndices = [],
        this.lineDistances = [],
        this.boundingSphere = this.boundingBox = null,
        this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1
    }
    function f(t, e, i) {
        if (Array.isArray(t))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "",
        this.array = t,
        this.itemSize = e,
        this.count = void 0 !== t ? t.length / e : 0,
        this.normalized = !0 === i,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    function s(t, e, i) {
        f.call(this, new Int8Array(t), e, i)
    }
    function c(t, e, i) {
        f.call(this, new Uint8Array(t), e, i)
    }
    function h(t, e, i) {
        f.call(this, new Uint8ClampedArray(t), e, i)
    }
    function u(t, e, i) {
        f.call(this, new Int16Array(t), e, i)
    }
    function d(t, e, i) {
        f.call(this, new Uint16Array(t), e, i)
    }
    function m(t, e, i) {
        f.call(this, new Int32Array(t), e, i)
    }
    function y(t, e, i) {
        f.call(this, new Uint32Array(t), e, i)
    }
    function R(t, e, i) {
        f.call(this, new Float32Array(t), e, i)
    }
    function x(t, e, i) {
        f.call(this, new Float64Array(t), e, i)
    }
    function b() {
        this.vertices = [],
        this.normals = [],
        this.colors = [],
        this.uvs = [],
        this.uvs2 = [],
        this.groups = [],
        this.morphTargets = {},
        this.skinWeights = [],
        this.skinIndices = [],
        this.boundingSphere = this.boundingBox = null,
        this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
    }
    function _(t) {
        if (0 === t.length)
            return -1 / 0;
        for (var e = t[0], i = 1, n = t.length; i < n; ++i)
            t[i] > e && (e = t[i]);
        return e
    }
    function P() {
        Object.defineProperty(this, "id", {
            value: Ao += 2
        }),
        this.uuid = fa.generateUUID(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingSphere = this.boundingBox = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    function T(t, e, i, n, r, a) {
        E.call(this),
        this.type = "BoxGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        },
        this.fromBufferGeometry(new S(t,e,i,n,r,a)),
        this.mergeVertices()
    }
    function S(t, e, i, n, r, a) {
        function o(t, e, i, n, r, a, o, s, c, h, l) {
            var u = a / c
              , p = o / h
              , d = a / 2
              , f = o / 2
              , m = s / 2;
            o = c + 1;
            var g, v, y = h + 1, x = a = 0, b = new Mt;
            for (v = 0; v < y; v++) {
                var _ = v * p - f;
                for (g = 0; g < o; g++)
                    b[t] = (g * u - d) * n,
                    b[e] = _ * r,
                    b[i] = m,
                    E.push(b.x, b.y, b.z),
                    b[t] = 0,
                    b[e] = 0,
                    b[i] = 0 < s ? 1 : -1,
                    T.push(b.x, b.y, b.z),
                    S.push(g / c),
                    S.push(1 - v / h),
                    a += 1
            }
            for (v = 0; v < h; v++)
                for (g = 0; g < c; g++)
                    t = A + g + o * (v + 1),
                    e = A + (g + 1) + o * (v + 1),
                    i = A + (g + 1) + o * v,
                    M.push(A + g + o * v, t, i),
                    M.push(t, e, i),
                    x += 6;
            w.addGroup(L, x, l),
            L += x,
            A += a
        }
        P.call(this),
        this.type = "BoxBufferGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        };
        var w = this;
        t = t || 1,
        e = e || 1,
        i = i || 1,
        n = Math.floor(n) || 1,
        r = Math.floor(r) || 1,
        a = Math.floor(a) || 1;
        var M = []
          , E = []
          , T = []
          , S = []
          , A = 0
          , L = 0;
        o("z", "y", "x", -1, -1, i, e, t, a, r, 0),
        o("z", "y", "x", 1, -1, i, e, -t, a, r, 1),
        o("x", "z", "y", 1, 1, t, i, e, n, a, 2),
        o("x", "z", "y", 1, -1, t, i, -e, n, a, 3),
        o("x", "y", "z", 1, -1, t, e, i, n, r, 4),
        o("x", "y", "z", -1, -1, t, e, -i, n, r, 5),
        this.setIndex(M),
        this.addAttribute("position", new R(E,3)),
        this.addAttribute("normal", new R(T,3)),
        this.addAttribute("uv", new R(S,2))
    }
    function L(t, e, i, n) {
        E.call(this),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
        },
        this.fromBufferGeometry(new C(t,e,i,n)),
        this.mergeVertices()
    }
    function C(t, e, i, n) {
        P.call(this),
        this.type = "PlaneBufferGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
        };
        var r = (t = t || 1) / 2
          , a = (e = e || 1) / 2
          , o = (i = Math.floor(i) || 1) + 1
          , s = (n = Math.floor(n) || 1) + 1
          , c = t / i
          , h = e / n
          , l = []
          , u = []
          , p = []
          , d = [];
        for (t = 0; t < s; t++) {
            var f = t * h - a;
            for (e = 0; e < o; e++)
                u.push(e * c - r, -f, 0),
                p.push(0, 0, 1),
                d.push(e / i),
                d.push(1 - t / n)
        }
        for (t = 0; t < n; t++)
            for (e = 0; e < i; e++)
                r = e + o * (t + 1),
                a = e + 1 + o * (t + 1),
                s = e + 1 + o * t,
                l.push(e + o * t, r, s),
                l.push(r, a, s);
        this.setIndex(l),
        this.addAttribute("position", new R(u,3)),
        this.addAttribute("normal", new R(p,3)),
        this.addAttribute("uv", new R(d,2))
    }
    function I() {
        Object.defineProperty(this, "id", {
            value: $o++
        }),
        this.uuid = fa.generateUUID(),
        this.name = "",
        this.type = "Material",
        this.lights = this.fog = !0,
        this.blending = 1,
        this.side = 0,
        this.flatShading = !1,
        this.vertexColors = 0,
        this.opacity = 1,
        this.transparent = !1,
        this.blendSrc = 204,
        this.blendDst = 205,
        this.blendEquation = 100,
        this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null,
        this.depthFunc = 3,
        this.depthWrite = this.depthTest = !0,
        this.clippingPlanes = null,
        this.clipShadows = this.clipIntersection = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetUnits = this.polygonOffsetFactor = 0,
        this.dithering = !1,
        this.alphaTest = 0,
        this.premultipliedAlpha = !1,
        this.overdraw = 0,
        this.visible = !0,
        this.userData = {},
        this.needsUpdate = !0
    }
    function O(t) {
        I.call(this),
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(t))
    }
    function B(t, e) {
        this.origin = void 0 !== t ? t : new Mt,
        this.direction = void 0 !== e ? e : new Mt
    }
    function F(t, e, i) {
        this.a = void 0 !== t ? t : new Mt,
        this.b = void 0 !== e ? e : new Mt,
        this.c = void 0 !== i ? i : new Mt
    }
    function N(t) {
        I.call(this),
        this.type = "MeshBasicMaterial",
        this.color = new M(16777215),
        this.lightMap = this.map = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.envMap = this.alphaMap = this.specularMap = null,
        this.combine = 0,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinejoin = this.wireframeLinecap = "round",
        this.lights = this.morphTargets = this.skinning = !1,
        this.setValues(t)
    }
    function D(t, e) {
        l.call(this),
        this.type = "Mesh",
        this.geometry = void 0 !== t ? t : new P,
        this.material = void 0 !== e ? e : new N({
            color: 16777215 * Math.random()
        }),
        this.drawMode = 0,
        this.updateMorphTargets()
    }
    function Rt(r, i, a, n) {
        function o(t, e) {
            i.buffers.color.setClear(t.r, t.g, t.b, e, n)
        }
        var s, c, h = new M(0), l = 0;
        return {
            getClearColor: function() {
                return h
            },
            setClearColor: function(t, e) {
                h.set(t),
                o(h, l = void 0 !== e ? e : 1)
            },
            getClearAlpha: function() {
                return l
            },
            setClearAlpha: function(t) {
                o(h, l = t)
            },
            render: function(t, e, i, n) {
                null === (e = e.background) ? o(h, l) : e && e.isColor && (o(e, 1),
                n = !0),
                (r.autoClear || n) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
                e && e.isCubeTexture ? (void 0 === c && ((c = new D(new S(1,1,1),new O({
                    uniforms: Ba.clone(Va.cube.uniforms),
                    vertexShader: Va.cube.vertexShader,
                    fragmentShader: Va.cube.fragmentShader,
                    side: 1,
                    depthTest: !0,
                    depthWrite: !1,
                    fog: !1
                }))).geometry.removeAttribute("normal"),
                c.geometry.removeAttribute("uv"),
                c.onBeforeRender = function(t, e, i) {
                    this.matrixWorld.copyPosition(i.matrixWorld)
                }
                ,
                a.update(c)),
                c.material.uniforms.tCube.value = e,
                t.push(c, c.geometry, c.material, 0, null)) : e && e.isTexture && (void 0 === s && ((s = new D(new C(2,2),new O({
                    uniforms: Ba.clone(Va.background.uniforms),
                    vertexShader: Va.background.vertexShader,
                    fragmentShader: Va.background.fragmentShader,
                    side: 0,
                    depthTest: !0,
                    depthWrite: !1,
                    fog: !1
                }))).geometry.removeAttribute("normal"),
                a.update(s)),
                s.material.uniforms.t2D.value = e,
                t.push(s, s.geometry, s.material, 0, null))
            }
        }
    }
    function Pt(r, a, o, s) {
        var c;
        this.setMode = function(t) {
            c = t
        }
        ,
        this.render = function(t, e) {
            r.drawArrays(c, t, e),
            o.update(e, c)
        }
        ,
        this.renderInstances = function(t, e, i) {
            if (s.isWebGL2)
                var n = r;
            else if (null === (n = a.get("ANGLE_instanced_arrays")))
                return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            n[s.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](c, e, i, t.maxInstancedCount),
            o.update(i, c, t.maxInstancedCount)
        }
    }
    function Ct(e, i, t) {
        function n(t) {
            if ("highp" === t) {
                if (0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision)
                    return "highp";
                t = "mediump"
            }
            return "mediump" === t && 0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
        }
        var r, a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext, o = void 0 !== t.precision ? t.precision : "highp", s = n(o);
        s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."),
        o = s),
        t = !0 === t.logarithmicDepthBuffer,
        s = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
        var c = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
          , h = e.getParameter(e.MAX_TEXTURE_SIZE)
          , l = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
          , u = e.getParameter(e.MAX_VERTEX_ATTRIBS)
          , p = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
          , d = e.getParameter(e.MAX_VARYING_VECTORS)
          , f = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
          , m = 0 < c
          , g = a || !!i.get("OES_texture_float");
        return {
            isWebGL2: a,
            getMaxAnisotropy: function() {
                if (void 0 !== r)
                    return r;
                var t = i.get("EXT_texture_filter_anisotropic");
                return r = null !== t ? e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: n,
            precision: o,
            logarithmicDepthBuffer: t,
            maxTextures: s,
            maxVertexTextures: c,
            maxTextureSize: h,
            maxCubemapSize: l,
            maxAttributes: u,
            maxVertexUniforms: p,
            maxVaryings: d,
            maxFragmentUniforms: f,
            vertexTextures: m,
            floatFragmentTextures: g,
            floatVertexTextures: m && g
        }
    }
    function It() {
        function c() {
            m.value !== l && (m.value = l,
            m.needsUpdate = 0 < u),
            o.numPlanes = u,
            o.numIntersection = 0
        }
        function h(t, e, i, n) {
            var r = null !== t ? t.length : 0
              , a = null;
            if (0 !== r) {
                if (a = m.value,
                !0 !== n || null === a)
                    for (n = i + 4 * r,
                    e = e.matrixWorldInverse,
                    f.getNormalMatrix(e),
                    (null === a || a.length < n) && (a = new Float32Array(n)),
                    n = 0; n !== r; ++n,
                    i += 4)
                        s.copy(t[n]).applyMatrix4(e, f),
                        s.normal.toArray(a, i),
                        a[i + 3] = s.constant;
                m.value = a,
                m.needsUpdate = !0
            }
            return o.numPlanes = r,
            a
        }
        var o = this
          , l = null
          , u = 0
          , p = !1
          , d = !1
          , s = new v
          , f = new g
          , m = {
            value: null,
            needsUpdate: !1
        };
        this.uniform = m,
        this.numIntersection = this.numPlanes = 0,
        this.init = function(t, e, i) {
            var n = 0 !== t.length || e || 0 !== u || p;
            return p = e,
            l = h(t, i, 0),
            u = t.length,
            n
        }
        ,
        this.beginShadows = function() {
            d = !0,
            h(null)
        }
        ,
        this.endShadows = function() {
            d = !1,
            c()
        }
        ,
        this.setState = function(t, e, i, n, r, a) {
            if (!p || null === t || 0 === t.length || d && !i)
                d ? h(null) : c();
            else {
                var o = 4 * (i = d ? 0 : u)
                  , s = r.clippingState || null;
                for (m.value = s,
                s = h(t, n, o, a),
                t = 0; t !== o; ++t)
                    s[t] = l[t];
                r.clippingState = s,
                this.numIntersection = e ? this.numPlanes : 0,
                this.numPlanes += i
            }
        }
    }
    function Ot(i) {
        var n = {};
        return {
            get: function(t) {
                if (void 0 !== n[t])
                    return n[t];
                switch (t) {
                case "WEBGL_depth_texture":
                    var e = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    e = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    e = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    e = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    e = i.getExtension(t)
                }
                return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."),
                n[t] = e
            }
        }
    }
    function Nt(c, h, n) {
        function r(t) {
            var e = t.target;
            for (var i in null !== (t = a[e.id]).index && h.remove(t.index),
            t.attributes)
                h.remove(t.attributes[i]);
            e.removeEventListener("dispose", r),
            delete a[e.id],
            (i = l[t.id]) && (h.remove(i),
            delete l[t.id]),
            n.memory.geometries--
        }
        var a = {}
          , l = {};
        return {
            get: function(t, e) {
                var i = a[e.id];
                return i || (e.addEventListener("dispose", r),
                e.isBufferGeometry ? i = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new P).setFromObject(t)),
                i = e._bufferGeometry),
                a[e.id] = i,
                n.memory.geometries++,
                i)
            },
            update: function(t) {
                var e = t.index
                  , i = t.attributes;
                for (var n in null !== e && h.update(e, c.ELEMENT_ARRAY_BUFFER),
                i)
                    h.update(i[n], c.ARRAY_BUFFER);
                for (n in t = t.morphAttributes) {
                    i = 0;
                    for (var r = (e = t[n]).length; i < r; i++)
                        h.update(e[i], c.ARRAY_BUFFER)
                }
            },
            getWireframeAttribute: function(t) {
                var e = l[t.id];
                if (e)
                    return e;
                e = [];
                var i = t.index
                  , n = t.attributes;
                if (null !== i) {
                    n = 0;
                    for (var r = (i = i.array).length; n < r; n += 3) {
                        var a = i[n + 0]
                          , o = i[n + 1]
                          , s = i[n + 2];
                        e.push(a, o, o, s, s, a)
                    }
                } else
                    for (i = n.position.array,
                    n = 0,
                    r = i.length / 3 - 1; n < r; n += 3)
                        a = n + 0,
                        o = n + 1,
                        s = n + 2,
                        e.push(a, o, o, s, s, a);
                return e = new (65535 < _(e) ? y : d)(e,1),
                h.update(e, c.ELEMENT_ARRAY_BUFFER),
                l[t.id] = e
            }
        }
    }
    function Dt(r, a, o, s) {
        var c, h, l;
        this.setMode = function(t) {
            c = t
        }
        ,
        this.setIndex = function(t) {
            h = t.type,
            l = t.bytesPerElement
        }
        ,
        this.render = function(t, e) {
            r.drawElements(c, e, h, t * l),
            o.update(e, c)
        }
        ,
        this.renderInstances = function(t, e, i) {
            if (s.isWebGL2)
                var n = r;
            else if (null === (n = a.get("ANGLE_instanced_arrays")))
                return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            n[s.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](c, i, h, e * l, t.maxInstancedCount),
            o.update(i, c, t.maxInstancedCount)
        }
    }
    function Ut(n) {
        var r = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: r,
            programs: null,
            autoReset: !0,
            reset: function() {
                r.frame++,
                r.calls = 0,
                r.triangles = 0,
                r.points = 0,
                r.lines = 0
            },
            update: function(t, e, i) {
                switch (i = i || 1,
                r.calls++,
                e) {
                case n.TRIANGLES:
                    r.triangles += t / 3 * i;
                    break;
                case n.TRIANGLE_STRIP:
                case n.TRIANGLE_FAN:
                    r.triangles += i * (t - 2);
                    break;
                case n.LINES:
                    r.lines += t / 2 * i;
                    break;
                case n.LINE_STRIP:
                    r.lines += i * (t - 1);
                    break;
                case n.LINE_LOOP:
                    r.lines += i * t;
                    break;
                case n.POINTS:
                    r.points += i * t;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", e)
                }
            }
        }
    }
    function z(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
    }
    function Bt(h) {
        var l = {}
          , u = new Float32Array(8);
        return {
            update: function(t, e, i, n) {
                var r = t.morphTargetInfluences
                  , a = r.length;
                if (void 0 === (t = l[e.id])) {
                    t = [];
                    for (var o = 0; o < a; o++)
                        t[o] = [o, 0];
                    l[e.id] = t
                }
                var s = i.morphTargets && e.morphAttributes.position;
                for (i = i.morphNormals && e.morphAttributes.normal,
                o = 0; o < a; o++) {
                    var c = t[o];
                    0 !== c[1] && (s && e.removeAttribute("morphTarget" + o),
                    i && e.removeAttribute("morphNormal" + o))
                }
                for (o = 0; o < a; o++)
                    (c = t[o])[0] = o,
                    c[1] = r[o];
                for (t.sort(z),
                o = 0; o < 8; o++)
                    (c = t[o]) && (r = c[0],
                    a = c[1]) ? (s && e.addAttribute("morphTarget" + o, s[r]),
                    i && e.addAttribute("morphNormal" + o, i[r]),
                    u[o] = a) : u[o] = 0;
                n.getUniforms().setValue(h, "morphTargetInfluences", u)
            }
        }
    }
    function Ft(r, a) {
        var o = {};
        return {
            update: function(t) {
                var e = a.render.frame
                  , i = t.geometry
                  , n = r.get(t, i);
                return o[n.id] !== e && (i.isGeometry && n.updateFromObject(t),
                r.update(n),
                o[n.id] = e),
                n
            },
            dispose: function() {
                o = {}
            }
        }
    }
    function G(t, e, i, n, r, a, o, s, c, h) {
        p.call(this, t = void 0 !== t ? t : [], void 0 !== e ? e : 301, i, n, r, a, o, s, c, h),
        this.flipY = !1
    }
    function H(t, e, i, n) {
        p.call(this, null),
        this.image = {
            data: t,
            width: e,
            height: i,
            depth: n
        },
        this.minFilter = this.magFilter = 1003,
        this.flipY = this.generateMipmaps = !1
    }
    function V(t, e, i) {
        var n = t[0];
        if (n <= 0 || 0 < n)
            return t;
        var r = e * i
          , a = ns[r];
        if (void 0 === a && (a = new Float32Array(r),
        ns[r] = a),
        0 !== e)
            for (n.toArray(a, 0),
            n = 1,
            r = 0; n !== e; ++n)
                r += i,
                t[n].toArray(a, r);
        return a
    }
    function k(t, e) {
        if (t.length !== e.length)
            return !1;
        for (var i = 0, n = t.length; i < n; i++)
            if (t[i] !== e[i])
                return !1;
        return !0
    }
    function j(t, e) {
        for (var i = 0, n = e.length; i < n; i++)
            t[i] = e[i]
    }
    function X(t, e) {
        var i = rs[e];
        void 0 === i && (i = new Int32Array(e),
        rs[e] = i);
        for (var n = 0; n !== e; ++n)
            i[n] = t.allocTextureUnit();
        return i
    }
    function q(t, e) {
        var i = this.cache;
        i[0] !== e && (t.uniform1f(this.addr, e),
        i[0] = e)
    }
    function Y(t, e) {
        var i = this.cache;
        i[0] !== e && (t.uniform1i(this.addr, e),
        i[0] = e)
    }
    function J(t, e) {
        var i = this.cache;
        void 0 !== e.x ? i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y),
        i[0] = e.x,
        i[1] = e.y) : k(i, e) || (t.uniform2fv(this.addr, e),
        j(i, e))
    }
    function Z(t, e) {
        var i = this.cache;
        void 0 !== e.x ? i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z),
        i[0] = e.x,
        i[1] = e.y,
        i[2] = e.z) : void 0 !== e.r ? i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b),
        i[0] = e.r,
        i[1] = e.g,
        i[2] = e.b) : k(i, e) || (t.uniform3fv(this.addr, e),
        j(i, e))
    }
    function Q(t, e) {
        var i = this.cache;
        void 0 !== e.x ? i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        i[0] = e.x,
        i[1] = e.y,
        i[2] = e.z,
        i[3] = e.w) : k(i, e) || (t.uniform4fv(this.addr, e),
        j(i, e))
    }
    function K(t, e) {
        var i = this.cache
          , n = e.elements;
        void 0 === n ? k(i, e) || (t.uniformMatrix2fv(this.addr, !1, e),
        j(i, e)) : k(i, n) || (ss.set(n),
        t.uniformMatrix2fv(this.addr, !1, ss),
        j(i, n))
    }
    function $(t, e) {
        var i = this.cache
          , n = e.elements;
        void 0 === n ? k(i, e) || (t.uniformMatrix3fv(this.addr, !1, e),
        j(i, e)) : k(i, n) || (os.set(n),
        t.uniformMatrix3fv(this.addr, !1, os),
        j(i, n))
    }
    function tt(t, e) {
        var i = this.cache
          , n = e.elements;
        void 0 === n ? k(i, e) || (t.uniformMatrix4fv(this.addr, !1, e),
        j(i, e)) : k(i, n) || (as.set(n),
        t.uniformMatrix4fv(this.addr, !1, as),
        j(i, n))
    }
    function et(t, e, i) {
        var n = this.cache
          , r = i.allocTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r),
        n[0] = r),
        i.setTexture2D(e || ts, r)
    }
    function it(t, e, i) {
        var n = this.cache
          , r = i.allocTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r),
        n[0] = r),
        i.setTexture3D(e || es, r)
    }
    function nt(t, e, i) {
        var n = this.cache
          , r = i.allocTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r),
        n[0] = r),
        i.setTextureCube(e || is, r)
    }
    function rt(t, e) {
        var i = this.cache;
        k(i, e) || (t.uniform2iv(this.addr, e),
        j(i, e))
    }
    function at(t, e) {
        var i = this.cache;
        k(i, e) || (t.uniform3iv(this.addr, e),
        j(i, e))
    }
    function ot(t, e) {
        var i = this.cache;
        k(i, e) || (t.uniform4iv(this.addr, e),
        j(i, e))
    }
    function st(t, e) {
        var i = this.cache;
        k(i, e) || (t.uniform1fv(this.addr, e),
        j(i, e))
    }
    function ct(t, e) {
        var i = this.cache;
        k(i, e) || (t.uniform1iv(this.addr, e),
        j(i, e))
    }
    function ht(t, e) {
        k(this.cache, e = V(e, this.size, 2)) || (t.uniform2fv(this.addr, e),
        this.updateCache(e))
    }
    function lt(t, e) {
        k(this.cache, e = V(e, this.size, 3)) || (t.uniform3fv(this.addr, e),
        this.updateCache(e))
    }
    function ut(t, e) {
        k(this.cache, e = V(e, this.size, 4)) || (t.uniform4fv(this.addr, e),
        this.updateCache(e))
    }
    function pt(t, e) {
        k(this.cache, e = V(e, this.size, 4)) || (t.uniformMatrix2fv(this.addr, !1, e),
        this.updateCache(e))
    }
    function dt(t, e) {
        k(this.cache, e = V(e, this.size, 9)) || (t.uniformMatrix3fv(this.addr, !1, e),
        this.updateCache(e))
    }
    function ft(t, e) {
        k(this.cache, e = V(e, this.size, 16)) || (t.uniformMatrix4fv(this.addr, !1, e),
        this.updateCache(e))
    }
    function mt(t, e, i) {
        var n = this.cache
          , r = e.length
          , a = X(i, r);
        for (!1 === k(n, a) && (t.uniform1iv(this.addr, a),
        j(n, a)),
        t = 0; t !== r; ++t)
            i.setTexture2D(e[t] || ts, a[t])
    }
    function gt(t, e, i) {
        var n = this.cache
          , r = e.length
          , a = X(i, r);
        for (!1 === k(n, a) && (t.uniform1iv(this.addr, a),
        j(n, a)),
        t = 0; t !== r; ++t)
            i.setTextureCube(e[t] || is, a[t])
    }
    function vt(t, e, i) {
        this.id = t,
        this.addr = i,
        this.cache = [],
        this.setValue = function(t) {
            switch (t) {
            case 5126:
                return q;
            case 35664:
                return J;
            case 35665:
                return Z;
            case 35666:
                return Q;
            case 35674:
                return K;
            case 35675:
                return $;
            case 35676:
                return tt;
            case 35678:
            case 36198:
                return et;
            case 35679:
                return it;
            case 35680:
                return nt;
            case 5124:
            case 35670:
                return Y;
            case 35667:
            case 35671:
                return rt;
            case 35668:
            case 35672:
                return at;
            case 35669:
            case 35673:
                return ot
            }
        }(e.type)
    }
    function yt(t, e, i) {
        this.id = t,
        this.addr = i,
        this.cache = [],
        this.size = e.size,
        this.setValue = function(t) {
            switch (t) {
            case 5126:
                return st;
            case 35664:
                return ht;
            case 35665:
                return lt;
            case 35666:
                return ut;
            case 35674:
                return pt;
            case 35675:
                return dt;
            case 35676:
                return ft;
            case 35678:
                return mt;
            case 35680:
                return gt;
            case 5124:
            case 35670:
                return ct;
            case 35667:
            case 35671:
                return rt;
            case 35668:
            case 35672:
                return at;
            case 35669:
            case 35673:
                return ot
            }
        }(e.type)
    }
    function xt(t) {
        this.id = t,
        this.seq = [],
        this.map = {}
    }
    function zt(t, e, i) {
        this.seq = [],
        this.map = {},
        this.renderer = i,
        i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
        for (var n = 0; n < i; ++n) {
            var r = t.getActiveUniform(e, n)
              , a = t.getUniformLocation(e, r.name)
              , o = this
              , s = r.name
              , c = s.length;
            for (cs.lastIndex = 0; ; ) {
                var h = cs.exec(s)
                  , l = cs.lastIndex
                  , u = h[1]
                  , p = h[3];
                if ("]" === h[2] && (u |= 0),
                void 0 === p || "[" === p && l + 2 === c) {
                    s = o,
                    r = void 0 === p ? new vt(u,r,a) : new yt(u,r,a),
                    s.seq.push(r),
                    s.map[r.id] = r;
                    break
                }
                void 0 === (p = o.map[u]) && (p = new xt(u),
                u = o,
                o = p,
                u.seq.push(o),
                u.map[o.id] = o),
                o = p
            }
        }
    }
    function bt(t, e, i) {
        var n = t.createShader(e);
        return t.shaderSource(n, i),
        t.compileShader(n),
        !1 === t.getShaderParameter(n, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."),
        "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(n), function(t) {
            t = t.split("\n");
            for (var e = 0; e < t.length; e++)
                t[e] = e + 1 + ": " + t[e];
            return t.join("\n")
        }(i)),
        n
    }
    function _t(t) {
        switch (t) {
        case 3e3:
            return ["Linear", "( value )"];
        case 3001:
            return ["sRGB", "( value )"];
        case 3002:
            return ["RGBE", "( value )"];
        case 3004:
            return ["RGBM", "( value, 7.0 )"];
        case 3005:
            return ["RGBM", "( value, 16.0 )"];
        case 3006:
            return ["RGBD", "( value, 256.0 )"];
        case 3007:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw Error("unsupported encoding: " + t)
        }
    }
    function Gt(t, e) {
        return "vec4 " + t + "( vec4 value ) { return " + (e = _t(e))[0] + "ToLinear" + e[1] + "; }"
    }
    function Ht(t) {
        return "" !== t
    }
    function Vt(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    }
    function kt(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
    }
    function jt(t) {
        return t.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function(t, e) {
            if (void 0 === (t = Ua[e]))
                throw Error("Can not resolve #include <" + e + ">");
            return jt(t)
        })
    }
    function Wt(t) {
        return t.replace(/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, i, n) {
            for (t = "",
            e = parseInt(e); e < parseInt(i); e++)
                t += n.replace(/\[ i \]/g, "[ " + e + " ]");
            return t
        })
    }
    function Xt(t, e, i, n, r, a, o) {
        var s = t.context
          , c = n.defines
          , h = r.vertexShader
          , l = r.fragmentShader
          , u = "SHADOWMAP_TYPE_BASIC";
        1 === a.shadowMapType ? u = "SHADOWMAP_TYPE_PCF" : 2 === a.shadowMapType && (u = "SHADOWMAP_TYPE_PCF_SOFT");
        var p = "ENVMAP_TYPE_CUBE"
          , d = "ENVMAP_MODE_REFLECTION"
          , f = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) {
            switch (n.envMap.mapping) {
            case 301:
            case 302:
                p = "ENVMAP_TYPE_CUBE";
                break;
            case 306:
            case 307:
                p = "ENVMAP_TYPE_CUBE_UV";
                break;
            case 303:
            case 304:
                p = "ENVMAP_TYPE_EQUIREC";
                break;
            case 305:
                p = "ENVMAP_TYPE_SPHERE"
            }
            switch (n.envMap.mapping) {
            case 302:
            case 304:
                d = "ENVMAP_MODE_REFRACTION"
            }
            switch (n.combine) {
            case 0:
                f = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                f = "ENVMAP_BLENDING_MIX";
                break;
            case 2:
                f = "ENVMAP_BLENDING_ADD"
            }
        }
        var m, g, v, y, x, b, _, w = 0 < t.gammaFactor ? t.gammaFactor : 1, M = o.isWebGL2 ? "" : (m = n.extensions,
        g = a,
        v = e,
        [(m = m || {}).derivatives || g.envMapCubeUV || g.bumpMap || g.normalMap && !g.objectSpaceNormalMap || g.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (m.fragDepth || g.logarithmicDepthBuffer) && v.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", m.drawBuffers && v.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (m.shaderTextureLOD || g.envMap) && v.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ht).join("\n")), E = function(t) {
            var e, i = [];
            for (e in t) {
                var n = t[e];
                !1 !== n && i.push("#define " + e + " " + n)
            }
            return i.join("\n")
        }(c), T = s.createProgram();
        return n.isRawShaderMaterial ? (0 < (c = [E].filter(Ht).join("\n")).length && (c += "\n"),
        0 < (e = [M, E].filter(Ht).join("\n")).length && (e += "\n")) : (c = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, E, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + w, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Ht).join("\n"),
        e = [M, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, E, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + w, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", 0 !== a.toneMapping ? "#define TONE_MAPPING" : "", 0 !== a.toneMapping ? Ua.tonemapping_pars_fragment : "", 0 !== a.toneMapping ? function(t, e) {
            switch (e) {
            case 1:
                e = "Linear";
                break;
            case 2:
                e = "Reinhard";
                break;
            case 3:
                e = "Uncharted2";
                break;
            case 4:
                e = "OptimizedCineon";
                break;
            default:
                throw Error("unsupported toneMapping: " + e)
            }
            return "vec3 " + t + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
        }("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? Ua.encodings_pars_fragment : "", a.mapEncoding ? Gt("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? Gt("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? Gt("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? Gt("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? (y = "linearToOutputTexel",
        x = a.outputEncoding,
        "vec4 " + y + "( vec4 value ) { return LinearTo" + (x = _t(x))[0] + x[1] + "; }") : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Ht).join("\n")),
        h = kt(h = Vt(h = jt(h), a), a),
        l = kt(l = Vt(l = jt(l), a), a),
        h = Wt(h),
        l = Wt(l),
        o.isWebGL2 && !n.isRawShaderMaterial && (o = !1,
        u = /^\s*#version\s+300\s+es\s*\n/,
        n.isShaderMaterial && null !== h.match(u) && null !== l.match(u) && (o = !0,
        h = h.replace(u, ""),
        l = l.replace(u, "")),
        c = "#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n" + c,
        e = ["#version 300 es\n\n#define varying in", o ? "" : "out highp vec4 pc_fragColor;", o ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + e),
        l = e + l,
        h = bt(s, s.VERTEX_SHADER, c + h),
        l = bt(s, s.FRAGMENT_SHADER, l),
        s.attachShader(T, h),
        s.attachShader(T, l),
        void 0 !== n.index0AttributeName ? s.bindAttribLocation(T, 0, n.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(T, 0, "position"),
        s.linkProgram(T),
        a = s.getProgramInfoLog(T).trim(),
        o = s.getShaderInfoLog(h).trim(),
        u = s.getShaderInfoLog(l).trim(),
        d = p = !0,
        !1 === s.getProgramParameter(T, s.LINK_STATUS) ? (p = !1,
        console.error("THREE.WebGLProgram: shader error: ", s.getError(), "gl.VALIDATE_STATUS", s.getProgramParameter(T, s.VALIDATE_STATUS), "gl.getProgramInfoLog", a, o, u)) : "" !== a ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", a) : "" !== o && "" !== u || (d = !1),
        d && (this.diagnostics = {
            runnable: p,
            material: n,
            programLog: a,
            vertexShader: {
                log: o,
                prefix: c
            },
            fragmentShader: {
                log: u,
                prefix: e
            }
        }),
        s.deleteShader(h),
        s.deleteShader(l),
        this.getUniforms = function() {
            return void 0 === b && (b = new zt(s,T,t)),
            b
        }
        ,
        this.getAttributes = function() {
            if (void 0 === _) {
                for (var t = {}, e = s.getProgramParameter(T, s.ACTIVE_ATTRIBUTES), i = 0; i < e; i++) {
                    var n = s.getActiveAttrib(T, i).name;
                    t[n] = s.getAttribLocation(T, n)
                }
                _ = t
            }
            return _
        }
        ,
        this.destroy = function() {
            s.deleteProgram(T),
            this.program = void 0
        }
        ,
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                    this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                    this.getAttributes()
                }
            }
        }),
        this.name = r.name,
        this.id = Ts++,
        this.code = i,
        this.usedTimes = 1,
        this.program = T,
        this.vertexShader = h,
        this.fragmentShader = l,
        this
    }
    function qt(u, c, p) {
        function d(t, e) {
            if (t)
                t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
                i = t.texture.encoding);
            else
                var i = 3e3;
            return 3e3 === i && e && (i = 3007),
            i
        }
        var h = []
          , f = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        }
          , r = "precision supportsVertexTextures map mapEncoding matcapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
        this.getParameters = function(t, e, i, n, r, a, o) {
            var s = f[t.type];
            if (o.isSkinnedMesh) {
                var c = o.skeleton.bones;
                if (p.floatVertexTextures)
                    c = 1024;
                else {
                    var h = Math.min(Math.floor((p.maxVertexUniforms - 20) / 4), c.length);
                    c = h < c.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + c.length + " bones. This GPU supports " + h + "."),
                    0) : h
                }
            } else
                c = 0;
            h = p.precision,
            null !== t.precision && ((h = p.getMaxPrecision(t.precision)) !== t.precision && console.warn("THREE.WebGLProgram.getParameters:", t.precision, "not supported, using", h, "instead."));
            var l = u.getRenderTarget();
            return {
                shaderID: s,
                precision: h,
                supportsVertexTextures: p.vertexTextures,
                outputEncoding: d(l ? l.texture : null, u.gammaOutput),
                map: !!t.map,
                mapEncoding: d(t.map, u.gammaInput),
                matcap: !!t.matcap,
                matcapEncoding: d(t.matcap, u.gammaInput),
                envMap: !!t.envMap,
                envMapMode: t.envMap && t.envMap.mapping,
                envMapEncoding: d(t.envMap, u.gammaInput),
                envMapCubeUV: !!t.envMap && (306 === t.envMap.mapping || 307 === t.envMap.mapping),
                lightMap: !!t.lightMap,
                aoMap: !!t.aoMap,
                emissiveMap: !!t.emissiveMap,
                emissiveMapEncoding: d(t.emissiveMap, u.gammaInput),
                bumpMap: !!t.bumpMap,
                normalMap: !!t.normalMap,
                objectSpaceNormalMap: 1 === t.normalMapType,
                displacementMap: !!t.displacementMap,
                roughnessMap: !!t.roughnessMap,
                metalnessMap: !!t.metalnessMap,
                specularMap: !!t.specularMap,
                alphaMap: !!t.alphaMap,
                gradientMap: !!t.gradientMap,
                combine: t.combine,
                vertexColors: t.vertexColors,
                fog: !!n,
                useFog: t.fog,
                fogExp: n && n.isFogExp2,
                flatShading: t.flatShading,
                sizeAttenuation: t.sizeAttenuation,
                logarithmicDepthBuffer: p.logarithmicDepthBuffer,
                skinning: t.skinning && 0 < c,
                maxBones: c,
                useVertexTexture: p.floatVertexTextures,
                morphTargets: t.morphTargets,
                morphNormals: t.morphNormals,
                maxMorphTargets: u.maxMorphTargets,
                maxMorphNormals: u.maxMorphNormals,
                numDirLights: e.directional.length,
                numPointLights: e.point.length,
                numSpotLights: e.spot.length,
                numRectAreaLights: e.rectArea.length,
                numHemiLights: e.hemi.length,
                numClippingPlanes: r,
                numClipIntersection: a,
                dithering: t.dithering,
                shadowMapEnabled: u.shadowMap.enabled && o.receiveShadow && 0 < i.length,
                shadowMapType: u.shadowMap.type,
                toneMapping: u.toneMapping,
                physicallyCorrectLights: u.physicallyCorrectLights,
                premultipliedAlpha: t.premultipliedAlpha,
                alphaTest: t.alphaTest,
                doubleSided: 2 === t.side,
                flipSided: 1 === t.side,
                depthPacking: void 0 !== t.depthPacking && t.depthPacking
            }
        }
        ,
        this.getProgramCode = function(t, e) {
            var i = [];
            if (e.shaderID ? i.push(e.shaderID) : (i.push(t.fragmentShader),
            i.push(t.vertexShader)),
            void 0 !== t.defines)
                for (var n in t.defines)
                    i.push(n),
                    i.push(t.defines[n]);
            for (n = 0; n < r.length; n++)
                i.push(e[r[n]]);
            return i.push(t.onBeforeCompile.toString()),
            i.push(u.gammaOutput),
            i.join()
        }
        ,
        this.acquireProgram = function(t, e, i, n) {
            for (var r, a = 0, o = h.length; a < o; a++) {
                var s = h[a];
                if (s.code === n) {
                    ++(r = s).usedTimes;
                    break
                }
            }
            return void 0 === r && (r = new Xt(u,c,n,t,e,i,p),
            h.push(r)),
            r
        }
        ,
        this.releaseProgram = function(t) {
            if (0 == --t.usedTimes) {
                var e = h.indexOf(t);
                h[e] = h[h.length - 1],
                h.pop(),
                t.destroy()
            }
        }
        ,
        this.programs = h
    }
    function Yt() {
        var n = new WeakMap;
        return {
            get: function(t) {
                var e = n.get(t);
                return void 0 === e && (e = {},
                n.set(t, e)),
                e
            },
            remove: function(t) {
                n.delete(t)
            },
            update: function(t, e, i) {
                n.get(t)[e] = i
            },
            dispose: function() {
                n = new WeakMap
            }
        }
    }
    function Jt(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }
    function Zt(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }
    function Qt() {
        var o = []
          , s = 0
          , c = []
          , h = [];
        return {
            opaque: c,
            transparent: h,
            init: function() {
                s = 0,
                c.length = 0,
                h.length = 0
            },
            push: function(t, e, i, n, r) {
                var a = o[s];
                void 0 === a ? (a = {
                    id: t.id,
                    object: t,
                    geometry: e,
                    material: i,
                    program: i.program,
                    renderOrder: t.renderOrder,
                    z: n,
                    group: r
                },
                o[s] = a) : (a.id = t.id,
                a.object = t,
                a.geometry = e,
                a.material = i,
                a.program = i.program,
                a.renderOrder = t.renderOrder,
                a.z = n,
                a.group = r),
                (!0 === i.transparent ? h : c).push(a),
                s++
            },
            sort: function() {
                1 < c.length && c.sort(Jt),
                1 < h.length && h.sort(Zt)
            }
        }
    }
    function Kt() {
        var i = {};
        return {
            get: function(t, e) {
                return t = t.id + "," + e.id,
                void 0 === (e = i[t]) && (e = new Qt,
                i[t] = e),
                e
            },
            dispose: function() {
                i = {}
            }
        }
    }
    function $t() {
        var i = {};
        return {
            get: function(t) {
                if (void 0 !== i[t.id])
                    return i[t.id];
                switch (t.type) {
                case "DirectionalLight":
                    var e = {
                        direction: new Mt,
                        color: new M,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new W
                    };
                    break;
                case "SpotLight":
                    e = {
                        position: new Mt,
                        direction: new Mt,
                        color: new M,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new W
                    };
                    break;
                case "PointLight":
                    e = {
                        position: new Mt,
                        color: new M,
                        distance: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new W,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    };
                    break;
                case "HemisphereLight":
                    e = {
                        direction: new Mt,
                        skyColor: new M,
                        groundColor: new M
                    };
                    break;
                case "RectAreaLight":
                    e = {
                        color: new M,
                        position: new Mt,
                        halfWidth: new Mt,
                        halfHeight: new Mt
                    }
                }
                return i[t.id] = e
            }
        }
    }
    function te() {
        var x = new $t
          , b = {
            id: Ss++,
            hash: {
                stateID: -1,
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                shadowsLength: -1
            },
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        }
          , _ = new Mt
          , w = new wt
          , M = new wt;
        return {
            setup: function(t, e, i) {
                var n = 0
                  , r = 0
                  , a = 0
                  , o = 0
                  , s = 0
                  , c = 0
                  , h = 0
                  , l = 0;
                i = i.matrixWorldInverse;
                for (var u = 0, p = t.length; u < p; u++) {
                    var d = t[u]
                      , f = d.color
                      , m = d.intensity
                      , g = d.distance
                      , v = d.shadow && d.shadow.map ? d.shadow.map.texture : null;
                    if (d.isAmbientLight)
                        n += f.r * m,
                        r += f.g * m,
                        a += f.b * m;
                    else if (d.isDirectionalLight) {
                        var y = x.get(d);
                        y.color.copy(d.color).multiplyScalar(d.intensity),
                        y.direction.setFromMatrixPosition(d.matrixWorld),
                        _.setFromMatrixPosition(d.target.matrixWorld),
                        y.direction.sub(_),
                        y.direction.transformDirection(i),
                        (y.shadow = d.castShadow) && (f = d.shadow,
                        y.shadowBias = f.bias,
                        y.shadowRadius = f.radius,
                        y.shadowMapSize = f.mapSize),
                        b.directionalShadowMap[o] = v,
                        b.directionalShadowMatrix[o] = d.shadow.matrix,
                        b.directional[o] = y,
                        o++
                    } else
                        d.isSpotLight ? ((y = x.get(d)).position.setFromMatrixPosition(d.matrixWorld),
                        y.position.applyMatrix4(i),
                        y.color.copy(f).multiplyScalar(m),
                        y.distance = g,
                        y.direction.setFromMatrixPosition(d.matrixWorld),
                        _.setFromMatrixPosition(d.target.matrixWorld),
                        y.direction.sub(_),
                        y.direction.transformDirection(i),
                        y.coneCos = Math.cos(d.angle),
                        y.penumbraCos = Math.cos(d.angle * (1 - d.penumbra)),
                        y.decay = d.decay,
                        (y.shadow = d.castShadow) && (f = d.shadow,
                        y.shadowBias = f.bias,
                        y.shadowRadius = f.radius,
                        y.shadowMapSize = f.mapSize),
                        b.spotShadowMap[c] = v,
                        b.spotShadowMatrix[c] = d.shadow.matrix,
                        b.spot[c] = y,
                        c++) : d.isRectAreaLight ? ((y = x.get(d)).color.copy(f).multiplyScalar(m),
                        y.position.setFromMatrixPosition(d.matrixWorld),
                        y.position.applyMatrix4(i),
                        M.identity(),
                        w.copy(d.matrixWorld),
                        w.premultiply(i),
                        M.extractRotation(w),
                        y.halfWidth.set(.5 * d.width, 0, 0),
                        y.halfHeight.set(0, .5 * d.height, 0),
                        y.halfWidth.applyMatrix4(M),
                        y.halfHeight.applyMatrix4(M),
                        b.rectArea[h] = y,
                        h++) : d.isPointLight ? ((y = x.get(d)).position.setFromMatrixPosition(d.matrixWorld),
                        y.position.applyMatrix4(i),
                        y.color.copy(d.color).multiplyScalar(d.intensity),
                        y.distance = d.distance,
                        y.decay = d.decay,
                        (y.shadow = d.castShadow) && (f = d.shadow,
                        y.shadowBias = f.bias,
                        y.shadowRadius = f.radius,
                        y.shadowMapSize = f.mapSize,
                        y.shadowCameraNear = f.camera.near,
                        y.shadowCameraFar = f.camera.far),
                        b.pointShadowMap[s] = v,
                        b.pointShadowMatrix[s] = d.shadow.matrix,
                        b.point[s] = y,
                        s++) : d.isHemisphereLight && ((y = x.get(d)).direction.setFromMatrixPosition(d.matrixWorld),
                        y.direction.transformDirection(i),
                        y.direction.normalize(),
                        y.skyColor.copy(d.color).multiplyScalar(m),
                        y.groundColor.copy(d.groundColor).multiplyScalar(m),
                        b.hemi[l] = y,
                        l++)
                }
                b.ambient[0] = n,
                b.ambient[1] = r,
                b.ambient[2] = a,
                b.directional.length = o,
                b.spot.length = c,
                b.rectArea.length = h,
                b.point.length = s,
                b.hemi.length = l,
                b.hash.stateID = b.id,
                b.hash.directionalLength = o,
                b.hash.pointLength = s,
                b.hash.spotLength = c,
                b.hash.rectAreaLength = h,
                b.hash.hemiLength = l,
                b.hash.shadowsLength = e.length
            },
            state: b
        }
    }
    function ee() {
        var e = new te
          , i = []
          , n = [];
        return {
            init: function() {
                i.length = 0,
                n.length = 0
            },
            state: {
                lightsArray: i,
                shadowsArray: n,
                lights: e
            },
            setupLights: function(t) {
                e.setup(i, n, t)
            },
            pushLight: function(t) {
                i.push(t)
            },
            pushShadow: function(t) {
                n.push(t)
            }
        }
    }
    function ie() {
        var n = {};
        return {
            get: function(t, e) {
                if (void 0 === n[t.id]) {
                    var i = new ee;
                    n[t.id] = {},
                    n[t.id][e.id] = i
                } else
                    void 0 === n[t.id][e.id] ? (i = new ee,
                    n[t.id][e.id] = i) : i = n[t.id][e.id];
                return i
            },
            dispose: function() {
                n = {}
            }
        }
    }
    function ne(t) {
        I.call(this),
        this.type = "MeshDepthMaterial",
        this.depthPacking = 3200,
        this.morphTargets = this.skinning = !1,
        this.displacementMap = this.alphaMap = this.map = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.lights = this.fog = !1,
        this.setValues(t)
    }
    function re(t) {
        I.call(this),
        this.type = "MeshDistanceMaterial",
        this.referencePosition = new Mt,
        this.nearDistance = 1,
        this.farDistance = 1e3,
        this.morphTargets = this.skinning = !1,
        this.displacementMap = this.alphaMap = this.map = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.lights = this.fog = !1,
        this.setValues(t)
    }
    function ae(p, u, t) {
        function d(t, e, i, n, r, a) {
            var o = t.geometry
              , s = h
              , c = t.customDepthMaterial;
            return i && (s = l,
            c = t.customDistanceMaterial),
            s = c || (c = !1,
            e.morphTargets && (o && o.isBufferGeometry ? c = o.morphAttributes && o.morphAttributes.position && 0 < o.morphAttributes.position.length : o && o.isGeometry && (c = o.morphTargets && 0 < o.morphTargets.length)),
            t.isSkinnedMesh && !1 === e.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t),
            o = 0,
            c && (o |= 1),
            (t = t.isSkinnedMesh && e.skinning) && (o |= 2),
            s[o]),
            p.localClippingEnabled && !0 === e.clipShadows && 0 !== e.clippingPlanes.length && (o = s.uuid,
            c = e.uuid,
            void 0 === (t = _[o]) && (t = {},
            _[o] = t),
            void 0 === (o = t[c]) && (o = s.clone(),
            t[c] = o),
            s = o),
            s.visible = e.visible,
            s.wireframe = e.wireframe,
            s.side = null != e.shadowSide ? e.shadowSide : w[e.side],
            s.clipShadows = e.clipShadows,
            s.clippingPlanes = e.clippingPlanes,
            s.clipIntersection = e.clipIntersection,
            s.wireframeLinewidth = e.wireframeLinewidth,
            s.linewidth = e.linewidth,
            i && s.isMeshDistanceMaterial && (s.referencePosition.copy(n),
            s.nearDistance = r,
            s.farDistance = a),
            s
        }
        function f(t, e, i, n) {
            if (!1 !== t.visible) {
                if (t.layers.test(e.layers) && (t.isMesh || t.isLine || t.isPoints) && t.castShadow && (!t.frustumCulled || m.intersectsObject(t))) {
                    t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld);
                    var r = u.update(t)
                      , a = t.material;
                    if (Array.isArray(a))
                        for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
                            var h = o[s]
                              , l = a[h.materialIndex];
                            l && l.visible && (l = d(t, l, n, b, i.near, i.far),
                            p.renderBufferDirect(i, null, r, l, t, h))
                        }
                    else
                        a.visible && (l = d(t, a, n, b, i.near, i.far),
                        p.renderBufferDirect(i, null, r, l, t, null))
                }
                for (r = 0,
                a = (t = t.children).length; r < a; r++)
                    f(t[r], e, i, n)
            }
        }
        var m = new St
          , g = new wt
          , v = new W
          , y = new W(t,t)
          , x = new Mt
          , b = new Mt
          , h = Array(4)
          , l = Array(4)
          , _ = {}
          , w = {
            0: 1,
            1: 0,
            2: 2
        }
          , M = [new Mt(1,0,0), new Mt(-1,0,0), new Mt(0,0,1), new Mt(0,0,-1), new Mt(0,1,0), new Mt(0,-1,0)]
          , E = [new Mt(0,1,0), new Mt(0,1,0), new Mt(0,1,0), new Mt(0,1,0), new Mt(0,0,1), new Mt(0,0,-1)]
          , T = [new Et, new Et, new Et, new Et, new Et, new Et];
        for (t = 0; 4 !== t; ++t) {
            var e = 0 != (1 & t)
              , i = 0 != (2 & t)
              , n = new ne({
                depthPacking: 3201,
                morphTargets: e,
                skinning: i
            });
            h[t] = n,
            e = new re({
                morphTargets: e,
                skinning: i
            }),
            l[t] = e
        }
        var S = this;
        this.enabled = !1,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this.type = 1,
        this.render = function(t, e, i) {
            if (!1 !== S.enabled && (!1 !== S.autoUpdate || !1 !== S.needsUpdate) && 0 !== t.length) {
                var n = p.state;
                n.disable(p.context.BLEND),
                n.buffers.color.setClear(1, 1, 1, 1),
                n.buffers.depth.setTest(!0),
                n.setScissorTest(!1);
                for (var r, a = 0, o = t.length; a < o; a++) {
                    var s = t[a];
                    r = s.shadow;
                    var c = s && s.isPointLight;
                    if (void 0 === r)
                        console.warn("THREE.WebGLShadowMap:", s, "has no shadow.");
                    else {
                        var h = r.camera;
                        if (v.copy(r.mapSize),
                        v.min(y),
                        c) {
                            var l = v.x
                              , u = v.y;
                            T[0].set(2 * l, u, l, u),
                            T[1].set(0, u, l, u),
                            T[2].set(3 * l, u, l, u),
                            T[3].set(l, u, l, u),
                            T[4].set(3 * l, 0, l, u),
                            T[5].set(l, 0, l, u),
                            v.x *= 4,
                            v.y *= 2
                        }
                        for (null === r.map && (r.map = new A(v.x,v.y,{
                            minFilter: 1003,
                            magFilter: 1003,
                            format: 1023
                        }),
                        r.map.texture.name = s.name + ".shadowMap",
                        h.updateProjectionMatrix()),
                        r.isSpotLightShadow && r.update(s),
                        l = r.map,
                        u = r.matrix,
                        b.setFromMatrixPosition(s.matrixWorld),
                        h.position.copy(b),
                        c ? (r = 6,
                        u.makeTranslation(-b.x, -b.y, -b.z)) : (r = 1,
                        x.setFromMatrixPosition(s.target.matrixWorld),
                        h.lookAt(x),
                        h.updateMatrixWorld(),
                        u.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                        u.multiply(h.projectionMatrix),
                        u.multiply(h.matrixWorldInverse)),
                        p.setRenderTarget(l),
                        p.clear(),
                        s = 0; s < r; s++)
                            c && (x.copy(h.position),
                            x.add(M[s]),
                            h.up.copy(E[s]),
                            h.lookAt(x),
                            h.updateMatrixWorld(),
                            n.viewport(T[s])),
                            g.multiplyMatrices(h.projectionMatrix, h.matrixWorldInverse),
                            m.setFromMatrix(g),
                            f(e, i, h, c)
                    }
                }
                S.needsUpdate = !1
            }
        }
    }
    function oe(l, i, c, n) {
        function t(t, e, i) {
            var n = new Uint8Array(4)
              , r = l.createTexture();
            for (l.bindTexture(t, r),
            l.texParameteri(t, l.TEXTURE_MIN_FILTER, l.NEAREST),
            l.texParameteri(t, l.TEXTURE_MAG_FILTER, l.NEAREST),
            t = 0; t < i; t++)
                l.texImage2D(e + t, 0, l.RGBA, 1, 1, 0, l.RGBA, l.UNSIGNED_BYTE, n);
            return r
        }
        function e(t, e) {
            v[t] = 1,
            0 === y[t] && (l.enableVertexAttribArray(t),
            y[t] = 1),
            x[t] !== e && ((n.isWebGL2 ? l : i.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](t, e),
            x[t] = e)
        }
        function u(t) {
            !0 !== b[t] && (l.enable(t),
            b[t] = !0)
        }
        function p(t) {
            !1 !== b[t] && (l.disable(t),
            b[t] = !1)
        }
        function r(t, e, i, n, r, a, o, s) {
            if (0 === t)
                M && (p(l.BLEND),
                M = !1);
            else if (M || (u(l.BLEND),
            M = !0),
            5 !== t) {
                if (t !== E || s !== C) {
                    if (100 === T && 100 === L || (l.blendEquation(l.FUNC_ADD),
                    L = T = 100),
                    s)
                        switch (t) {
                        case 1:
                            l.blendFuncSeparate(l.ONE, l.ONE_MINUS_SRC_ALPHA, l.ONE, l.ONE_MINUS_SRC_ALPHA);
                            break;
                        case 2:
                            l.blendFunc(l.ONE, l.ONE);
                            break;
                        case 3:
                            l.blendFuncSeparate(l.ZERO, l.ZERO, l.ONE_MINUS_SRC_COLOR, l.ONE_MINUS_SRC_ALPHA);
                            break;
                        case 4:
                            l.blendFuncSeparate(l.ZERO, l.SRC_COLOR, l.ZERO, l.SRC_ALPHA);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", t)
                        }
                    else
                        switch (t) {
                        case 1:
                            l.blendFuncSeparate(l.SRC_ALPHA, l.ONE_MINUS_SRC_ALPHA, l.ONE, l.ONE_MINUS_SRC_ALPHA);
                            break;
                        case 2:
                            l.blendFunc(l.SRC_ALPHA, l.ONE);
                            break;
                        case 3:
                            l.blendFunc(l.ZERO, l.ONE_MINUS_SRC_COLOR);
                            break;
                        case 4:
                            l.blendFunc(l.ZERO, l.SRC_COLOR);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", t)
                        }
                    P = R = A = S = null,
                    E = t,
                    C = s
                }
            } else
                r = r || e,
                a = a || i,
                o = o || n,
                e === T && r === L || (l.blendEquationSeparate(c.convert(e), c.convert(r)),
                T = e,
                L = r),
                i === S && n === A && a === R && o === P || (l.blendFuncSeparate(c.convert(i), c.convert(n), c.convert(a), c.convert(o)),
                S = i,
                A = n,
                R = a,
                P = o),
                E = t,
                C = null
        }
        function a(t) {
            I !== t && (t ? l.frontFace(l.CW) : l.frontFace(l.CCW),
            I = t)
        }
        function o(t) {
            0 !== t ? (u(l.CULL_FACE),
            t !== O && (1 === t ? l.cullFace(l.BACK) : 2 === t ? l.cullFace(l.FRONT) : l.cullFace(l.FRONT_AND_BACK))) : p(l.CULL_FACE),
            O = t
        }
        function s(t, e, i) {
            t ? (u(l.POLYGON_OFFSET_FILL),
            (D !== e || U !== i) && (l.polygonOffset(e, i),
            D = e,
            U = i)) : p(l.POLYGON_OFFSET_FILL)
        }
        function h(t) {
            void 0 === t && (t = l.TEXTURE0 + B - 1),
            z !== t && (l.activeTexture(t),
            z = t)
        }
        var d = new function() {
            var e = !1
              , a = new Et
              , i = null
              , o = new Et(0,0,0,0);
            return {
                setMask: function(t) {
                    i === t || e || (l.colorMask(t, t, t, t),
                    i = t)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(t, e, i, n, r) {
                    !0 === r && (t *= n,
                    e *= n,
                    i *= n),
                    a.set(t, e, i, n),
                    !1 === o.equals(a) && (l.clearColor(t, e, i, n),
                    o.copy(a))
                },
                reset: function() {
                    e = !1,
                    i = null,
                    o.set(-1, 0, 0, 0)
                }
            }
        }
          , f = new function() {
            var e = !1
              , i = null
              , n = null
              , r = null;
            return {
                setTest: function(t) {
                    t ? u(l.DEPTH_TEST) : p(l.DEPTH_TEST)
                },
                setMask: function(t) {
                    i === t || e || (l.depthMask(t),
                    i = t)
                },
                setFunc: function(t) {
                    if (n !== t) {
                        if (t)
                            switch (t) {
                            case 0:
                                l.depthFunc(l.NEVER);
                                break;
                            case 1:
                                l.depthFunc(l.ALWAYS);
                                break;
                            case 2:
                                l.depthFunc(l.LESS);
                                break;
                            case 3:
                                l.depthFunc(l.LEQUAL);
                                break;
                            case 4:
                                l.depthFunc(l.EQUAL);
                                break;
                            case 5:
                                l.depthFunc(l.GEQUAL);
                                break;
                            case 6:
                                l.depthFunc(l.GREATER);
                                break;
                            case 7:
                                l.depthFunc(l.NOTEQUAL);
                                break;
                            default:
                                l.depthFunc(l.LEQUAL)
                            }
                        else
                            l.depthFunc(l.LEQUAL);
                        n = t
                    }
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(t) {
                    r !== t && (l.clearDepth(t),
                    r = t)
                },
                reset: function() {
                    e = !1,
                    r = n = i = null
                }
            }
        }
          , m = new function() {
            var e = !1
              , i = null
              , n = null
              , r = null
              , a = null
              , o = null
              , s = null
              , c = null
              , h = null;
            return {
                setTest: function(t) {
                    t ? u(l.STENCIL_TEST) : p(l.STENCIL_TEST)
                },
                setMask: function(t) {
                    i === t || e || (l.stencilMask(t),
                    i = t)
                },
                setFunc: function(t, e, i) {
                    n === t && r === e && a === i || (l.stencilFunc(t, e, i),
                    n = t,
                    r = e,
                    a = i)
                },
                setOp: function(t, e, i) {
                    o === t && s === e && c === i || (l.stencilOp(t, e, i),
                    o = t,
                    s = e,
                    c = i)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(t) {
                    h !== t && (l.clearStencil(t),
                    h = t)
                },
                reset: function() {
                    e = !1,
                    h = c = s = o = a = r = n = i = null
                }
            }
        }
          , g = l.getParameter(l.MAX_VERTEX_ATTRIBS)
          , v = new Uint8Array(g)
          , y = new Uint8Array(g)
          , x = new Uint8Array(g)
          , b = {}
          , _ = null
          , w = null
          , M = null
          , E = null
          , T = null
          , S = null
          , A = null
          , L = null
          , R = null
          , P = null
          , C = !1
          , I = null
          , O = null
          , N = null
          , D = null
          , U = null
          , B = l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
          , F = !1;
        g = 0,
        -1 !== (g = l.getParameter(l.VERSION)).indexOf("WebGL") ? (g = parseFloat(/^WebGL ([0-9])/.exec(g)[1]),
        F = 1 <= g) : -1 !== g.indexOf("OpenGL ES") && (g = parseFloat(/^OpenGL ES ([0-9])/.exec(g)[1]),
        F = 2 <= g);
        var z = null
          , G = {}
          , H = new Et
          , V = new Et
          , k = {};
        return k[l.TEXTURE_2D] = t(l.TEXTURE_2D, l.TEXTURE_2D, 1),
        k[l.TEXTURE_CUBE_MAP] = t(l.TEXTURE_CUBE_MAP, l.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
        d.setClear(0, 0, 0, 1),
        f.setClear(1),
        m.setClear(0),
        u(l.DEPTH_TEST),
        f.setFunc(3),
        a(!1),
        o(1),
        u(l.CULL_FACE),
        r(0),
        {
            buffers: {
                color: d,
                depth: f,
                stencil: m
            },
            initAttributes: function() {
                for (var t = 0, e = v.length; t < e; t++)
                    v[t] = 0
            },
            enableAttribute: function(t) {
                e(t, 0)
            },
            enableAttributeAndDivisor: e,
            disableUnusedAttributes: function() {
                for (var t = 0, e = y.length; t !== e; ++t)
                    y[t] !== v[t] && (l.disableVertexAttribArray(t),
                    y[t] = 0)
            },
            enable: u,
            disable: p,
            getCompressedTextureFormats: function() {
                if (null === _ && (_ = [],
                i.get("WEBGL_compressed_texture_pvrtc") || i.get("WEBGL_compressed_texture_s3tc") || i.get("WEBGL_compressed_texture_etc1") || i.get("WEBGL_compressed_texture_astc")))
                    for (var t = l.getParameter(l.COMPRESSED_TEXTURE_FORMATS), e = 0; e < t.length; e++)
                        _.push(t[e]);
                return _
            },
            useProgram: function(t) {
                return w !== t && (l.useProgram(t),
                w = t,
                !0)
            },
            setBlending: r,
            setMaterial: function(t, e) {
                2 === t.side ? p(l.CULL_FACE) : u(l.CULL_FACE);
                var i = 1 === t.side;
                e && (i = !i),
                a(i),
                1 === t.blending && !1 === t.transparent ? r(0) : r(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha),
                f.setFunc(t.depthFunc),
                f.setTest(t.depthTest),
                f.setMask(t.depthWrite),
                d.setMask(t.colorWrite),
                s(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
            },
            setFlipSided: a,
            setCullFace: o,
            setLineWidth: function(t) {
                t !== N && (F && l.lineWidth(t),
                N = t)
            },
            setPolygonOffset: s,
            setScissorTest: function(t) {
                t ? u(l.SCISSOR_TEST) : p(l.SCISSOR_TEST)
            },
            activeTexture: h,
            bindTexture: function(t, e) {
                null === z && h();
                var i = G[z];
                void 0 === i && (i = {
                    type: void 0,
                    texture: void 0
                },
                G[z] = i),
                i.type === t && i.texture === e || (l.bindTexture(t, e || k[t]),
                i.type = t,
                i.texture = e)
            },
            compressedTexImage2D: function() {
                try {
                    l.compressedTexImage2D.apply(l, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage2D: function() {
                try {
                    l.texImage2D.apply(l, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage3D: function() {
                try {
                    l.texImage3D.apply(l, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            scissor: function(t) {
                !1 === H.equals(t) && (l.scissor(t.x, t.y, t.z, t.w),
                H.copy(t))
            },
            viewport: function(t) {
                !1 === V.equals(t) && (l.viewport(t.x, t.y, t.z, t.w),
                V.copy(t))
            },
            reset: function() {
                for (var t = 0; t < y.length; t++)
                    1 === y[t] && (l.disableVertexAttribArray(t),
                    y[t] = 0);
                b = {},
                z = _ = null,
                G = {},
                O = I = E = w = null,
                d.reset(),
                f.reset(),
                m.reset()
            }
        }
    }
    function se(m, n, g, v, y, x, b) {
        function _(t, e) {
            if (t.width > e || t.height > e) {
                if ("data"in t)
                    return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big (" + t.width + "x" + t.height + ").");
                e /= Math.max(t.width, t.height);
                var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                return i.width = Math.floor(t.width * e),
                i.height = Math.floor(t.height * e),
                i.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, i.width, i.height),
                console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + i.width + "x" + i.height),
                i
            }
            return t
        }
        function w(t) {
            return fa.isPowerOfTwo(t.width) && fa.isPowerOfTwo(t.height)
        }
        function M(t, e) {
            return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter
        }
        function E(t, e, i, n) {
            m.generateMipmap(t),
            v.get(e).__maxMipLevel = Math.log(Math.max(i, n)) * Math.LOG2E
        }
        function T(t, e) {
            if (!y.isWebGL2)
                return t;
            if (t === m.RED) {
                if (e === m.FLOAT)
                    return m.R32F;
                if (e === m.HALF_FLOAT)
                    return m.R16F;
                if (e === m.UNSIGNED_BYTE)
                    return m.R8
            }
            if (t === m.RGB) {
                if (e === m.FLOAT)
                    return m.RGB32F;
                if (e === m.HALF_FLOAT)
                    return m.RGB16F;
                if (e === m.UNSIGNED_BYTE)
                    return m.RGB8
            }
            if (t === m.RGBA) {
                if (e === m.FLOAT)
                    return m.RGBA32F;
                if (e === m.HALF_FLOAT)
                    return m.RGBA16F;
                if (e === m.UNSIGNED_BYTE)
                    return m.RGBA8
            }
            return t
        }
        function r(t) {
            return 1003 === t || 1004 === t || 1005 === t ? m.NEAREST : m.LINEAR
        }
        function S(t) {
            (t = t.target).removeEventListener("dispose", S);
            t: {
                var e = v.get(t);
                if (t.image && e.__image__webglTextureCube)
                    m.deleteTexture(e.__image__webglTextureCube);
                else {
                    if (void 0 === e.__webglInit)
                        break t;
                    m.deleteTexture(e.__webglTexture)
                }
                v.remove(t)
            }
            t.isVideoTexture && delete l[t.id],
            b.memory.textures--
        }
        function o(t) {
            (t = t.target).removeEventListener("dispose", o);
            var e = v.get(t)
              , i = v.get(t.texture);
            if (t) {
                if (void 0 !== i.__webglTexture && m.deleteTexture(i.__webglTexture),
                t.depthTexture && t.depthTexture.dispose(),
                t.isWebGLRenderTargetCube)
                    for (i = 0; i < 6; i++)
                        m.deleteFramebuffer(e.__webglFramebuffer[i]),
                        e.__webglDepthbuffer && m.deleteRenderbuffer(e.__webglDepthbuffer[i]);
                else
                    m.deleteFramebuffer(e.__webglFramebuffer),
                    e.__webglDepthbuffer && m.deleteRenderbuffer(e.__webglDepthbuffer);
                v.remove(t.texture),
                v.remove(t)
            }
            b.memory.textures--
        }
        function s(t, e) {
            var i = v.get(t);
            if (t.isVideoTexture) {
                var n = t.id
                  , r = b.render.frame;
                l[n] !== r && (l[n] = r,
                t.update())
            }
            if (0 < t.version && i.__version !== t.version)
                if (void 0 === (n = t.image))
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== n.complete)
                        return void a(i, t, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                }
            g.activeTexture(m.TEXTURE0 + e),
            g.bindTexture(m.TEXTURE_2D, i.__webglTexture)
        }
        function A(t, e, i) {
            i ? (m.texParameteri(t, m.TEXTURE_WRAP_S, x.convert(e.wrapS)),
            m.texParameteri(t, m.TEXTURE_WRAP_T, x.convert(e.wrapT)),
            m.texParameteri(t, m.TEXTURE_MAG_FILTER, x.convert(e.magFilter)),
            m.texParameteri(t, m.TEXTURE_MIN_FILTER, x.convert(e.minFilter))) : (m.texParameteri(t, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE),
            m.texParameteri(t, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE),
            1001 === e.wrapS && 1001 === e.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
            m.texParameteri(t, m.TEXTURE_MAG_FILTER, r(e.magFilter)),
            m.texParameteri(t, m.TEXTURE_MIN_FILTER, r(e.minFilter)),
            1003 !== e.minFilter && 1006 !== e.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
            !(i = n.get("EXT_texture_filter_anisotropic")) || 1015 === e.type && null === n.get("OES_texture_float_linear") || 1016 === e.type && null === (y.isWebGL2 || n.get("OES_texture_half_float_linear")) || !(1 < e.anisotropy || v.get(e).__currentAnisotropy) || (m.texParameterf(t, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e.anisotropy, y.getMaxAnisotropy())),
            v.get(e).__currentAnisotropy = e.anisotropy)
        }
        function a(t, e, i) {
            var n = e.isDataTexture3D ? m.TEXTURE_3D : m.TEXTURE_2D;
            void 0 === t.__webglInit && (t.__webglInit = !0,
            e.addEventListener("dispose", S),
            t.__webglTexture = m.createTexture(),
            b.memory.textures++),
            g.activeTexture(m.TEXTURE0 + i),
            g.bindTexture(n, t.__webglTexture),
            m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, e.flipY),
            m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha),
            m.pixelStorei(m.UNPACK_ALIGNMENT, e.unpackAlignment),
            i = _(e.image, y.maxTextureSize);
            var r = !y.isWebGL2 && (1001 !== e.wrapS || 1001 !== e.wrapT || 1003 !== e.minFilter && 1006 !== e.minFilter);
            r && !1 === w(i) && (i instanceof HTMLImageElement || i instanceof HTMLCanvasElement || i instanceof ImageBitmap) && (void 0 === u && (u = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")),
            u.width = fa.floorPowerOfTwo(i.width),
            u.height = fa.floorPowerOfTwo(i.height),
            u.getContext("2d").drawImage(i, 0, 0, u.width, u.height),
            console.warn("THREE.WebGLRenderer: image is not power of two (" + i.width + "x" + i.height + "). Resized to " + u.width + "x" + u.height),
            i = u),
            r = w(i);
            var a = x.convert(e.format)
              , o = x.convert(e.type)
              , s = T(a, o);
            A(n, e, r);
            var c = e.mipmaps;
            if (e.isDepthTexture) {
                if (s = m.DEPTH_COMPONENT,
                1015 === e.type) {
                    if (!y.isWebGL2)
                        throw Error("Float Depth Texture only supported in WebGL2.0");
                    s = m.DEPTH_COMPONENT32F
                } else
                    y.isWebGL2 && (s = m.DEPTH_COMPONENT16);
                1026 === e.format && s === m.DEPTH_COMPONENT && 1012 !== e.type && 1014 !== e.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                e.type = 1012,
                o = x.convert(e.type)),
                1027 === e.format && (s = m.DEPTH_STENCIL,
                1020 !== e.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                e.type = 1020,
                o = x.convert(e.type))),
                g.texImage2D(m.TEXTURE_2D, 0, s, i.width, i.height, 0, a, o, null)
            } else if (e.isDataTexture)
                if (0 < c.length && r) {
                    for (var h = 0, l = c.length; h < l; h++)
                        n = c[h],
                        g.texImage2D(m.TEXTURE_2D, h, s, n.width, n.height, 0, a, o, n.data);
                    e.generateMipmaps = !1,
                    t.__maxMipLevel = c.length - 1
                } else
                    g.texImage2D(m.TEXTURE_2D, 0, s, i.width, i.height, 0, a, o, i.data),
                    t.__maxMipLevel = 0;
            else if (e.isCompressedTexture) {
                for (h = 0,
                l = c.length; h < l; h++)
                    n = c[h],
                    1023 !== e.format && 1022 !== e.format ? -1 < g.getCompressedTextureFormats().indexOf(a) ? g.compressedTexImage2D(m.TEXTURE_2D, h, s, n.width, n.height, 0, n.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : g.texImage2D(m.TEXTURE_2D, h, s, n.width, n.height, 0, a, o, n.data);
                t.__maxMipLevel = c.length - 1
            } else if (e.isDataTexture3D)
                g.texImage3D(m.TEXTURE_3D, 0, s, i.width, i.height, i.depth, 0, a, o, i.data),
                t.__maxMipLevel = 0;
            else if (0 < c.length && r) {
                for (h = 0,
                l = c.length; h < l; h++)
                    n = c[h],
                    g.texImage2D(m.TEXTURE_2D, h, s, a, o, n);
                e.generateMipmaps = !1,
                t.__maxMipLevel = c.length - 1
            } else
                g.texImage2D(m.TEXTURE_2D, 0, s, a, o, i),
                t.__maxMipLevel = 0;
            M(e, r) && E(m.TEXTURE_2D, e, i.width, i.height),
            t.__version = e.version,
            e.onUpdate && e.onUpdate(e)
        }
        function c(t, e, i, n) {
            var r = x.convert(e.texture.format)
              , a = x.convert(e.texture.type)
              , o = T(r, a);
            g.texImage2D(n, 0, o, e.width, e.height, 0, r, a, null),
            m.bindFramebuffer(m.FRAMEBUFFER, t),
            m.framebufferTexture2D(m.FRAMEBUFFER, i, n, v.get(e.texture).__webglTexture, 0),
            m.bindFramebuffer(m.FRAMEBUFFER, null)
        }
        function h(t, e) {
            m.bindRenderbuffer(m.RENDERBUFFER, t),
            e.depthBuffer && !e.stencilBuffer ? (m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_COMPONENT16, e.width, e.height),
            m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_ATTACHMENT, m.RENDERBUFFER, t)) : e.depthBuffer && e.stencilBuffer ? (m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_STENCIL, e.width, e.height),
            m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.RENDERBUFFER, t)) : m.renderbufferStorage(m.RENDERBUFFER, m.RGBA4, e.width, e.height),
            m.bindRenderbuffer(m.RENDERBUFFER, null)
        }
        var u, l = {};
        this.setTexture2D = s,
        this.setTexture3D = function(t, e) {
            var i = v.get(t);
            0 < t.version && i.__version !== t.version ? a(i, t, e) : (g.activeTexture(m.TEXTURE0 + e),
            g.bindTexture(m.TEXTURE_3D, i.__webglTexture))
        }
        ,
        this.setTextureCube = function(t, e) {
            var i = v.get(t);
            if (6 === t.image.length)
                if (0 < t.version && i.__version !== t.version) {
                    i.__image__webglTextureCube || (t.addEventListener("dispose", S),
                    i.__image__webglTextureCube = m.createTexture(),
                    b.memory.textures++),
                    g.activeTexture(m.TEXTURE0 + e),
                    g.bindTexture(m.TEXTURE_CUBE_MAP, i.__image__webglTextureCube),
                    m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, t.flipY),
                    e = t && t.isCompressedTexture;
                    for (var n = t.image[0] && t.image[0].isDataTexture, r = [], a = 0; a < 6; a++)
                        r[a] = e || n ? n ? t.image[a].image : t.image[a] : _(t.image[a], y.maxCubemapSize);
                    var o = r[0]
                      , s = w(o)
                      , c = x.convert(t.format)
                      , h = x.convert(t.type)
                      , l = T(c, h);
                    for (A(m.TEXTURE_CUBE_MAP, t, s),
                    a = 0; a < 6; a++)
                        if (e)
                            for (var u, p = r[a].mipmaps, d = 0, f = p.length; d < f; d++)
                                u = p[d],
                                1023 !== t.format && 1022 !== t.format ? -1 < g.getCompressedTextureFormats().indexOf(c) ? g.compressedTexImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + a, d, l, u.width, u.height, 0, u.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : g.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + a, d, l, u.width, u.height, 0, c, h, u.data);
                        else
                            n ? g.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, l, r[a].width, r[a].height, 0, c, h, r[a].data) : g.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, l, c, h, r[a]);
                    i.__maxMipLevel = e ? p.length - 1 : 0,
                    M(t, s) && E(m.TEXTURE_CUBE_MAP, t, o.width, o.height),
                    i.__version = t.version,
                    t.onUpdate && t.onUpdate(t)
                } else
                    g.activeTexture(m.TEXTURE0 + e),
                    g.bindTexture(m.TEXTURE_CUBE_MAP, i.__image__webglTextureCube)
        }
        ,
        this.setTextureCubeDynamic = function(t, e) {
            g.activeTexture(m.TEXTURE0 + e),
            g.bindTexture(m.TEXTURE_CUBE_MAP, v.get(t).__webglTexture)
        }
        ,
        this.setupRenderTarget = function(t) {
            var e = v.get(t)
              , i = v.get(t.texture);
            t.addEventListener("dispose", o),
            i.__webglTexture = m.createTexture(),
            b.memory.textures++;
            var n = !0 === t.isWebGLRenderTargetCube
              , r = w(t);
            if (n) {
                e.__webglFramebuffer = [];
                for (var a = 0; a < 6; a++)
                    e.__webglFramebuffer[a] = m.createFramebuffer()
            } else
                e.__webglFramebuffer = m.createFramebuffer();
            if (n) {
                for (g.bindTexture(m.TEXTURE_CUBE_MAP, i.__webglTexture),
                A(m.TEXTURE_CUBE_MAP, t.texture, r),
                a = 0; a < 6; a++)
                    c(e.__webglFramebuffer[a], t, m.COLOR_ATTACHMENT0, m.TEXTURE_CUBE_MAP_POSITIVE_X + a);
                M(t.texture, r) && E(m.TEXTURE_CUBE_MAP, t.texture, t.width, t.height),
                g.bindTexture(m.TEXTURE_CUBE_MAP, null)
            } else
                g.bindTexture(m.TEXTURE_2D, i.__webglTexture),
                A(m.TEXTURE_2D, t.texture, r),
                c(e.__webglFramebuffer, t, m.COLOR_ATTACHMENT0, m.TEXTURE_2D),
                M(t.texture, r) && E(m.TEXTURE_2D, t.texture, t.width, t.height),
                g.bindTexture(m.TEXTURE_2D, null);
            if (t.depthBuffer) {
                if (e = v.get(t),
                i = !0 === t.isWebGLRenderTargetCube,
                t.depthTexture) {
                    if (i)
                        throw Error("target.depthTexture not supported in Cube render targets");
                    if (t && t.isWebGLRenderTargetCube)
                        throw Error("Depth Texture with cube render targets is not supported");
                    if (m.bindFramebuffer(m.FRAMEBUFFER, e.__webglFramebuffer),
                    !t.depthTexture || !t.depthTexture.isDepthTexture)
                        throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    if (v.get(t.depthTexture).__webglTexture && t.depthTexture.image.width === t.width && t.depthTexture.image.height === t.height || (t.depthTexture.image.width = t.width,
                    t.depthTexture.image.height = t.height,
                    t.depthTexture.needsUpdate = !0),
                    s(t.depthTexture, 0),
                    e = v.get(t.depthTexture).__webglTexture,
                    1026 === t.depthTexture.format)
                        m.framebufferTexture2D(m.FRAMEBUFFER, m.DEPTH_ATTACHMENT, m.TEXTURE_2D, e, 0);
                    else {
                        if (1027 !== t.depthTexture.format)
                            throw Error("Unknown depthTexture format");
                        m.framebufferTexture2D(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.TEXTURE_2D, e, 0)
                    }
                } else if (i)
                    for (e.__webglDepthbuffer = [],
                    i = 0; i < 6; i++)
                        m.bindFramebuffer(m.FRAMEBUFFER, e.__webglFramebuffer[i]),
                        e.__webglDepthbuffer[i] = m.createRenderbuffer(),
                        h(e.__webglDepthbuffer[i], t);
                else
                    m.bindFramebuffer(m.FRAMEBUFFER, e.__webglFramebuffer),
                    e.__webglDepthbuffer = m.createRenderbuffer(),
                    h(e.__webglDepthbuffer, t);
                m.bindFramebuffer(m.FRAMEBUFFER, null)
            }
        }
        ,
        this.updateRenderTargetMipmap = function(t) {
            var e = t.texture
              , i = w(t);
            if (M(e, i)) {
                i = t.isWebGLRenderTargetCube ? m.TEXTURE_CUBE_MAP : m.TEXTURE_2D;
                var n = v.get(e).__webglTexture;
                g.bindTexture(i, n),
                E(i, e, t.width, t.height),
                g.bindTexture(i, null)
            }
        }
    }
    function ce(i, n, r) {
        return {
            convert: function(t) {
                if (1e3 === t)
                    return i.REPEAT;
                if (1001 === t)
                    return i.CLAMP_TO_EDGE;
                if (1002 === t)
                    return i.MIRRORED_REPEAT;
                if (1003 === t)
                    return i.NEAREST;
                if (1004 === t)
                    return i.NEAREST_MIPMAP_NEAREST;
                if (1005 === t)
                    return i.NEAREST_MIPMAP_LINEAR;
                if (1006 === t)
                    return i.LINEAR;
                if (1007 === t)
                    return i.LINEAR_MIPMAP_NEAREST;
                if (1008 === t)
                    return i.LINEAR_MIPMAP_LINEAR;
                if (1009 === t)
                    return i.UNSIGNED_BYTE;
                if (1017 === t)
                    return i.UNSIGNED_SHORT_4_4_4_4;
                if (1018 === t)
                    return i.UNSIGNED_SHORT_5_5_5_1;
                if (1019 === t)
                    return i.UNSIGNED_SHORT_5_6_5;
                if (1010 === t)
                    return i.BYTE;
                if (1011 === t)
                    return i.SHORT;
                if (1012 === t)
                    return i.UNSIGNED_SHORT;
                if (1013 === t)
                    return i.INT;
                if (1014 === t)
                    return i.UNSIGNED_INT;
                if (1015 === t)
                    return i.FLOAT;
                if (1016 === t) {
                    if (r.isWebGL2)
                        return i.HALF_FLOAT;
                    var e = n.get("OES_texture_half_float");
                    if (null !== e)
                        return e.HALF_FLOAT_OES
                }
                if (1021 === t)
                    return i.ALPHA;
                if (1022 === t)
                    return i.RGB;
                if (1023 === t)
                    return i.RGBA;
                if (1024 === t)
                    return i.LUMINANCE;
                if (1025 === t)
                    return i.LUMINANCE_ALPHA;
                if (1026 === t)
                    return i.DEPTH_COMPONENT;
                if (1027 === t)
                    return i.DEPTH_STENCIL;
                if (1028 === t)
                    return i.RED;
                if (100 === t)
                    return i.FUNC_ADD;
                if (101 === t)
                    return i.FUNC_SUBTRACT;
                if (102 === t)
                    return i.FUNC_REVERSE_SUBTRACT;
                if (200 === t)
                    return i.ZERO;
                if (201 === t)
                    return i.ONE;
                if (202 === t)
                    return i.SRC_COLOR;
                if (203 === t)
                    return i.ONE_MINUS_SRC_COLOR;
                if (204 === t)
                    return i.SRC_ALPHA;
                if (205 === t)
                    return i.ONE_MINUS_SRC_ALPHA;
                if (206 === t)
                    return i.DST_ALPHA;
                if (207 === t)
                    return i.ONE_MINUS_DST_ALPHA;
                if (208 === t)
                    return i.DST_COLOR;
                if (209 === t)
                    return i.ONE_MINUS_DST_COLOR;
                if (210 === t)
                    return i.SRC_ALPHA_SATURATE;
                if ((33776 === t || 33777 === t || 33778 === t || 33779 === t) && null !== (e = n.get("WEBGL_compressed_texture_s3tc"))) {
                    if (33776 === t)
                        return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (33777 === t)
                        return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (33778 === t)
                        return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (33779 === t)
                        return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if ((35840 === t || 35841 === t || 35842 === t || 35843 === t) && null !== (e = n.get("WEBGL_compressed_texture_pvrtc"))) {
                    if (35840 === t)
                        return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (35841 === t)
                        return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (35842 === t)
                        return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (35843 === t)
                        return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (36196 === t && null !== (e = n.get("WEBGL_compressed_texture_etc1")))
                    return e.COMPRESSED_RGB_ETC1_WEBGL;
                if ((37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t) && null !== (e = n.get("WEBGL_compressed_texture_astc")))
                    return t;
                if (103 === t || 104 === t) {
                    if (r.isWebGL2) {
                        if (103 === t)
                            return i.MIN;
                        if (104 === t)
                            return i.MAX
                    }
                    if (null !== (e = n.get("EXT_blend_minmax"))) {
                        if (103 === t)
                            return e.MIN_EXT;
                        if (104 === t)
                            return e.MAX_EXT
                    }
                }
                if (1020 === t) {
                    if (r.isWebGL2)
                        return i.UNSIGNED_INT_24_8;
                    if (null !== (e = n.get("WEBGL_depth_texture")))
                        return e.UNSIGNED_INT_24_8_WEBGL
                }
                return 0
            }
        }
    }
    function he() {
        l.call(this),
        this.type = "Group"
    }
    function le() {
        l.call(this),
        this.type = "Camera",
        this.matrixWorldInverse = new wt,
        this.projectionMatrix = new wt,
        this.projectionMatrixInverse = new wt
    }
    function ue(t, e, i, n) {
        le.call(this),
        this.type = "PerspectiveCamera",
        this.fov = void 0 !== t ? t : 50,
        this.zoom = 1,
        this.near = void 0 !== i ? i : .1,
        this.far = void 0 !== n ? n : 2e3,
        this.focus = 10,
        this.aspect = void 0 !== e ? e : 1,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    function pe(t) {
        ue.call(this),
        this.cameras = t || []
    }
    function de(i) {
        function n() {
            return null !== c && !0 === c.isPresenting
        }
        function t() {
            if (n()) {
                var t = c.getEyeParameters("left")
                  , e = t.renderWidth;
                t = t.renderHeight,
                o = i.getPixelRatio(),
                a = i.getSize(),
                i.setDrawingBufferSize(2 * e, t, 1),
                s.start()
            } else
                r.enabled && i.setDrawingBufferSize(a.width, a.height, o),
                s.stop()
        }
        var r = this
          , c = null
          , h = null
          , l = null
          , u = []
          , p = new wt
          , d = new wt
          , f = "stage";
        "undefined" != typeof window && "VRFrameData"in window && (h = new window.VRFrameData,
        window.addEventListener("vrdisplaypresentchange", t, !1));
        var m = new wt
          , g = new w
          , v = new Mt
          , y = new ue;
        y.bounds = new Et(0,0,.5,1),
        y.layers.enable(1);
        var x = new ue;
        x.bounds = new Et(.5,0,.5,1),
        x.layers.enable(2);
        var b = new pe([y, x]);
        b.layers.enable(1),
        b.layers.enable(2);
        var a, o, _ = [];
        this.enabled = !1,
        this.getController = function(t) {
            var e = u[t];
            return void 0 === e && ((e = new he).matrixAutoUpdate = !1,
            e.visible = !1,
            u[t] = e),
            e
        }
        ,
        this.getDevice = function() {
            return c
        }
        ,
        this.setDevice = function(t) {
            void 0 !== t && (c = t),
            s.setContext(t)
        }
        ,
        this.setFrameOfReferenceType = function(t) {
            f = t
        }
        ,
        this.setPoseTarget = function(t) {
            void 0 !== t && (l = t)
        }
        ,
        this.getCamera = function(t) {
            var e = "stage" === f ? 1.6 : 0;
            if (null === c)
                return t.position.set(0, e, 0),
                t;
            if (c.depthNear = t.near,
            c.depthFar = t.far,
            c.getFrameData(h),
            "stage" === f) {
                var i = c.stageParameters;
                i ? p.fromArray(i.sittingToStandingTransform) : p.makeTranslation(0, e, 0)
            }
            if (e = h.pose,
            (i = null !== l ? l : t).matrix.copy(p),
            i.matrix.decompose(i.position, i.quaternion, i.scale),
            null !== e.orientation && (g.fromArray(e.orientation),
            i.quaternion.multiply(g)),
            null !== e.position && (g.setFromRotationMatrix(p),
            v.fromArray(e.position),
            v.applyQuaternion(g),
            i.position.add(v)),
            i.updateMatrixWorld(),
            !1 === c.isPresenting)
                return t;
            y.near = t.near,
            x.near = t.near,
            y.far = t.far,
            x.far = t.far,
            b.matrixWorld.copy(t.matrixWorld),
            b.matrixWorldInverse.copy(t.matrixWorldInverse),
            y.matrixWorldInverse.fromArray(h.leftViewMatrix),
            x.matrixWorldInverse.fromArray(h.rightViewMatrix),
            d.getInverse(p),
            "stage" === f && (y.matrixWorldInverse.multiply(d),
            x.matrixWorldInverse.multiply(d)),
            null !== (t = i.parent) && (m.getInverse(t.matrixWorld),
            y.matrixWorldInverse.multiply(m),
            x.matrixWorldInverse.multiply(m)),
            y.matrixWorld.getInverse(y.matrixWorldInverse),
            x.matrixWorld.getInverse(x.matrixWorldInverse),
            y.projectionMatrix.fromArray(h.leftProjectionMatrix),
            x.projectionMatrix.fromArray(h.rightProjectionMatrix),
            b.projectionMatrix.copy(y.projectionMatrix),
            (t = c.getLayers()).length && (null !== (t = t[0]).leftBounds && 4 === t.leftBounds.length && y.bounds.fromArray(t.leftBounds),
            null !== t.rightBounds && 4 === t.rightBounds.length && x.bounds.fromArray(t.rightBounds));
            t: for (t = 0; t < u.length; t++) {
                e = u[t];
                e: {
                    i = t;
                    for (var n = navigator.getGamepads && navigator.getGamepads(), r = 0, a = 0, o = n.length; r < o; r++) {
                        var s = n[r];
                        if (s && ("Daydream Controller" === s.id || "Gear VR Controller" === s.id || "Oculus Go Controller" === s.id || "OpenVR Gamepad" === s.id || s.id.startsWith("Oculus Touch") || s.id.startsWith("Spatial Controller"))) {
                            if (a === i) {
                                i = s;
                                break e
                            }
                            a++
                        }
                    }
                    i = void 0
                }
                if (void 0 !== i && void 0 !== i.pose) {
                    if (null === i.pose)
                        break t;
                    !1 === (n = i.pose).hasPosition && e.position.set(.2, -.6, -.05),
                    null !== n.position && e.position.fromArray(n.position),
                    null !== n.orientation && e.quaternion.fromArray(n.orientation),
                    e.matrix.compose(e.position, e.quaternion, e.scale),
                    e.matrix.premultiply(p),
                    e.matrix.decompose(e.position, e.quaternion, e.scale),
                    e.matrixWorldNeedsUpdate = !0,
                    e.visible = !0,
                    n = "Daydream Controller" === i.id ? 0 : 1,
                    _[t] !== i.buttons[n].pressed && (_[t] = i.buttons[n].pressed,
                    !0 === _[t] ? e.dispatchEvent({
                        type: "selectstart"
                    }) : (e.dispatchEvent({
                        type: "selectend"
                    }),
                    e.dispatchEvent({
                        type: "select"
                    })))
                } else
                    e.visible = !1
            }
            return b
        }
        ,
        this.getStandingMatrix = function() {
            return p
        }
        ,
        this.isPresenting = n;
        var s = new At;
        this.setAnimationLoop = function(t) {
            s.setAnimationLoop(t)
        }
        ,
        this.submitFrame = function() {
            n() && c.submitFrame()
        }
        ,
        this.dispose = function() {
            "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", t)
        }
    }
    function fe(e) {
        function r() {
            return null !== h && null !== l
        }
        function i(t) {
            var e = p[d.indexOf(t.inputSource)];
            e && e.dispatchEvent({
                type: t.type
            })
        }
        function n() {
            e.setFramebuffer(null),
            v.stop()
        }
        function a(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
            t.matrixWorldInverse.getInverse(t.matrixWorld)
        }
        var o = e.context
          , s = null
          , h = null
          , l = null
          , c = "stage"
          , u = null
          , p = []
          , d = []
          , t = new ue;
        t.layers.enable(1),
        t.viewport = new Et;
        var f = new ue;
        f.layers.enable(2),
        f.viewport = new Et;
        var m = new pe([t, f]);
        m.layers.enable(1),
        m.layers.enable(2),
        this.enabled = !1,
        this.getController = function(t) {
            var e = p[t];
            return void 0 === e && ((e = new he).matrixAutoUpdate = !1,
            e.visible = !1,
            p[t] = e),
            e
        }
        ,
        this.getDevice = function() {
            return s
        }
        ,
        this.setDevice = function(t) {
            void 0 !== t && (s = t),
            t instanceof XRDevice && o.setCompatibleXRDevice(t)
        }
        ,
        this.setFrameOfReferenceType = function(t) {
            c = t
        }
        ,
        this.setSession = function(t) {
            null !== (h = t) && (h.addEventListener("select", i),
            h.addEventListener("selectstart", i),
            h.addEventListener("selectend", i),
            h.addEventListener("end", n),
            h.baseLayer = new XRWebGLLayer(h,o),
            h.requestFrameOfReference(c).then(function(t) {
                l = t,
                e.setFramebuffer(h.baseLayer.framebuffer),
                v.setContext(h),
                v.start()
            }),
            d = h.getInputSources(),
            h.addEventListener("inputsourceschange", function() {
                d = h.getInputSources(),
                console.log(d)
            }))
        }
        ,
        this.getCamera = function(t) {
            if (r()) {
                var e = t.parent
                  , i = m.cameras;
                a(m, e);
                for (var n = 0; n < i.length; n++)
                    a(i[n], e);
                for (t.matrixWorld.copy(m.matrixWorld),
                n = 0,
                e = (t = t.children).length; n < e; n++)
                    t[n].updateMatrixWorld(!0);
                return m
            }
            return t
        }
        ,
        this.isPresenting = r;
        var g = null
          , v = new At;
        v.setAnimationLoop(function(t, e) {
            if (null !== (u = e.getDevicePose(l)))
                for (var i = h.baseLayer, n = e.views, r = 0; r < n.length; r++) {
                    var a = n[r]
                      , o = i.getViewport(a)
                      , s = u.getViewMatrix(a)
                      , c = m.cameras[r];
                    c.matrix.fromArray(s).getInverse(c.matrix),
                    c.projectionMatrix.fromArray(a.projectionMatrix),
                    c.viewport.set(o.x, o.y, o.width, o.height),
                    0 === r && (m.matrix.copy(c.matrix),
                    m.projectionMatrix.copy(c.projectionMatrix))
                }
            for (r = 0; r < p.length; r++)
                i = p[r],
                (n = d[r]) && null !== (n = e.getInputPose(n, l)) ? ("targetRay"in n ? i.matrix.elements = n.targetRay.transformMatrix : "pointerMatrix"in n && (i.matrix.elements = n.pointerMatrix),
                i.matrix.decompose(i.position, i.rotation, i.scale),
                i.visible = !0) : i.visible = !1;
            g && g(t)
        }),
        this.setAnimationLoop = function(t) {
            g = t
        }
        ,
        this.dispose = function() {}
        ,
        this.getStandingMatrix = function() {
            return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."),
            new THREE.Matrix4
        }
        ,
        this.submitFrame = function() {}
    }
    function me(t) {
        var w;
        function e() {
            T = new Ot(ft),
            (S = new Ct(ft,T,t)).isWebGL2 || (T.get("WEBGL_depth_texture"),
            T.get("OES_texture_float"),
            T.get("OES_texture_half_float"),
            T.get("OES_texture_half_float_linear"),
            T.get("OES_standard_derivatives"),
            T.get("OES_element_index_uint"),
            T.get("ANGLE_instanced_arrays")),
            T.get("OES_texture_float_linear"),
            H = new ce(ft,T,S),
            (A = new oe(ft,T,H,S)).scissor($.copy(ot).multiplyScalar(rt)),
            A.viewport(K.copy(at).multiplyScalar(rt)),
            L = new Ut(ft),
            R = new Yt,
            P = new se(ft,T,A,R,S,H,L),
            C = new Lt(ft),
            I = new Nt(ft,C,L),
            O = new Ft(I,L),
            F = new Bt(ft),
            N = new qt(V,T,S),
            D = new Kt,
            U = new ie,
            B = new Rt(V,A,O,y),
            z = new Pt(ft,T,L,S),
            G = new Dt(ft,T,L,S),
            L.programs = N.programs,
            V.context = ft,
            V.capabilities = S,
            V.extensions = T,
            V.properties = R,
            V.renderLists = D,
            V.state = A,
            V.info = L
        }
        function i(t) {
            t.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            k = !0
        }
        function n() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            k = !1,
            e()
        }
        function l(t) {
            (t = t.target).removeEventListener("dispose", l),
            u(t),
            R.remove(t)
        }
        function u(t) {
            var e = R.get(t).program;
            (t.program = void 0) !== e && N.releaseProgram(e)
        }
        function o(t, e, i, n) {
            for (var r = 0, a = t.length; r < a; r++) {
                var o = t[r]
                  , s = o.object
                  , c = o.geometry
                  , h = void 0 === n ? o.material : n;
                if (o = o.group,
                i.isArrayCamera)
                    for (var l = (Q = i).cameras, u = 0, p = l.length; u < p; u++) {
                        var d = l[u];
                        if (s.layers.test(d.layers)) {
                            if ("viewport"in d)
                                A.viewport(K.copy(d.viewport));
                            else {
                                var f = d.bounds;
                                A.viewport(K.set(f.x * it, f.y * nt, f.z * it, f.w * nt).multiplyScalar(rt))
                            }
                            E.setupLights(d),
                            m(s, e, d, c, h, o)
                        }
                    }
                else
                    Q = null,
                    m(s, e, i, c, h, o)
            }
        }
        function m(t, e, i, n, r, a) {
            if (t.onBeforeRender(V, e, i, n, r, a),
            E = U.get(e, Q || i),
            t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld),
            t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
            t.isImmediateRenderObject) {
                A.setMaterial(r);
                var o = M(i, e.fog, r, t);
                Y = w = null,
                J = !1,
                s = o,
                t.render(function(t) {
                    V.renderBufferImmediate(t, s)
                })
            } else
                V.renderBufferDirect(i, e.fog, n, r, t, a);
            var s;
            t.onAfterRender(V, e, i, n, r, a),
            E = U.get(e, Q || i)
        }
        function d(t, e, i) {
            var n = R.get(t)
              , r = E.state.lights
              , a = n.lightsHash
              , o = r.state.hash;
            i = N.getParameters(t, r.state, E.state.shadowsArray, e, ht.numPlanes, ht.numIntersection, i);
            var s = N.getProgramCode(t, i)
              , c = n.program
              , h = !0;
            if (void 0 === c)
                t.addEventListener("dispose", l);
            else if (c.code !== s)
                u(t);
            else {
                if (a.stateID !== o.stateID || a.directionalLength !== o.directionalLength || a.pointLength !== o.pointLength || a.spotLength !== o.spotLength || a.rectAreaLength !== o.rectAreaLength || a.hemiLength !== o.hemiLength || a.shadowsLength !== o.shadowsLength)
                    a.stateID = o.stateID,
                    a.directionalLength = o.directionalLength,
                    a.pointLength = o.pointLength,
                    a.spotLength = o.spotLength,
                    a.rectAreaLength = o.rectAreaLength,
                    a.hemiLength = o.hemiLength,
                    a.shadowsLength = o.shadowsLength;
                else if (void 0 !== i.shaderID)
                    return;
                h = !1
            }
            if (h && (i.shaderID ? (s = Va[i.shaderID],
            n.shader = {
                name: t.type,
                uniforms: Ba.clone(s.uniforms),
                vertexShader: s.vertexShader,
                fragmentShader: s.fragmentShader
            }) : n.shader = {
                name: t.type,
                uniforms: t.uniforms,
                vertexShader: t.vertexShader,
                fragmentShader: t.fragmentShader
            },
            t.onBeforeCompile(n.shader, V),
            s = N.getProgramCode(t, i),
            c = N.acquireProgram(t, n.shader, i, s),
            n.program = c,
            t.program = c),
            i = c.getAttributes(),
            t.morphTargets)
                for (s = t.numSupportedMorphTargets = 0; s < V.maxMorphTargets; s++)
                    0 <= i["morphTarget" + s] && t.numSupportedMorphTargets++;
            if (t.morphNormals)
                for (s = t.numSupportedMorphNormals = 0; s < V.maxMorphNormals; s++)
                    0 <= i["morphNormal" + s] && t.numSupportedMorphNormals++;
            i = n.shader.uniforms,
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = ht.numPlanes,
            n.numIntersection = ht.numIntersection,
            i.clippingPlanes = ht.uniform),
            n.fog = e,
            void 0 === a && (n.lightsHash = a = {}),
            a.stateID = o.stateID,
            a.directionalLength = o.directionalLength,
            a.pointLength = o.pointLength,
            a.spotLength = o.spotLength,
            a.rectAreaLength = o.rectAreaLength,
            a.hemiLength = o.hemiLength,
            a.shadowsLength = o.shadowsLength,
            t.lights && (i.ambientLightColor.value = r.state.ambient,
            i.directionalLights.value = r.state.directional,
            i.spotLights.value = r.state.spot,
            i.rectAreaLights.value = r.state.rectArea,
            i.pointLights.value = r.state.point,
            i.hemisphereLights.value = r.state.hemi,
            i.directionalShadowMap.value = r.state.directionalShadowMap,
            i.directionalShadowMatrix.value = r.state.directionalShadowMatrix,
            i.spotShadowMap.value = r.state.spotShadowMap,
            i.spotShadowMatrix.value = r.state.spotShadowMatrix,
            i.pointShadowMap.value = r.state.pointShadowMap,
            i.pointShadowMatrix.value = r.state.pointShadowMatrix),
            t = n.program.getUniforms(),
            t = zt.seqWithValue(t.seq, i),
            n.uniformsList = t
        }
        function M(t, e, i, n) {
            et = 0;
            var r = R.get(i)
              , a = r.lightsHash
              , o = E.state.lights.state.hash;
            lt && (ut || t !== Z) && ht.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, t === Z && i.id === q),
            !1 === i.needsUpdate && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i.needsUpdate = !0 : (!i.lights || a.stateID === o.stateID && a.directionalLength === o.directionalLength && a.pointLength === o.pointLength && a.spotLength === o.spotLength && a.rectAreaLength === o.rectAreaLength && a.hemiLength === o.hemiLength && a.shadowsLength === o.shadowsLength) && (void 0 === r.numClippingPlanes || r.numClippingPlanes === ht.numPlanes && r.numIntersection === ht.numIntersection) || (i.needsUpdate = !0)),
            i.needsUpdate && (d(i, e, n),
            i.needsUpdate = !1);
            var s = !1
              , c = !1
              , h = !1;
            o = (a = r.program).getUniforms();
            var l = r.shader.uniforms;
            if (A.useProgram(a.program) && (h = c = s = !0),
            i.id !== q && (q = i.id,
            c = !0),
            (s || Z !== t) && (o.setValue(ft, "projectionMatrix", t.projectionMatrix),
            S.logarithmicDepthBuffer && o.setValue(ft, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
            Z !== t && (Z = t,
            h = c = !0),
            (i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) && (void 0 !== (s = o.map.cameraPosition) && s.setValue(ft, dt.setFromMatrixPosition(t.matrixWorld))),
            (i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && o.setValue(ft, "viewMatrix", t.matrixWorldInverse)),
            i.skinning && (o.setOptional(ft, n, "bindMatrix"),
            o.setOptional(ft, n, "bindMatrixInverse"),
            t = n.skeleton))
                if (s = t.bones,
                S.floatVertexTextures) {
                    if (void 0 === t.boneTexture) {
                        s = Math.sqrt(4 * s.length),
                        s = fa.ceilPowerOfTwo(s),
                        s = Math.max(s, 4);
                        var u = new Float32Array(s * s * 4);
                        u.set(t.boneMatrices);
                        var p = new Tt(u,s,s,1023,1015);
                        p.needsUpdate = !0,
                        t.boneMatrices = u,
                        t.boneTexture = p,
                        t.boneTextureSize = s
                    }
                    o.setValue(ft, "boneTexture", t.boneTexture),
                    o.setValue(ft, "boneTextureSize", t.boneTextureSize)
                } else
                    o.setOptional(ft, t, "boneMatrices");
            return c && (o.setValue(ft, "toneMappingExposure", V.toneMappingExposure),
            o.setValue(ft, "toneMappingWhitePoint", V.toneMappingWhitePoint),
            i.lights && (c = h,
            l.ambientLightColor.needsUpdate = c,
            l.directionalLights.needsUpdate = c,
            l.pointLights.needsUpdate = c,
            l.spotLights.needsUpdate = c,
            l.rectAreaLights.needsUpdate = c,
            l.hemisphereLights.needsUpdate = c),
            e && i.fog && (l.fogColor.value = e.color,
            e.isFog ? (l.fogNear.value = e.near,
            l.fogFar.value = e.far) : e.isFogExp2 && (l.fogDensity.value = e.density)),
            i.isMeshBasicMaterial ? f(l, i) : i.isMeshLambertMaterial ? (f(l, i),
            i.emissiveMap && (l.emissiveMap.value = i.emissiveMap)) : i.isMeshPhongMaterial ? (f(l, i),
            i.isMeshToonMaterial ? (g(l, i),
            i.gradientMap && (l.gradientMap.value = i.gradientMap)) : g(l, i)) : i.isMeshStandardMaterial ? (f(l, i),
            i.isMeshPhysicalMaterial ? (v(l, i),
            l.reflectivity.value = i.reflectivity,
            l.clearCoat.value = i.clearCoat,
            l.clearCoatRoughness.value = i.clearCoatRoughness) : v(l, i)) : i.isMeshMatcapMaterial ? (f(l, i),
            i.matcap && (l.matcap.value = i.matcap),
            i.bumpMap && (l.bumpMap.value = i.bumpMap,
            l.bumpScale.value = i.bumpScale,
            1 === i.side && (l.bumpScale.value *= -1)),
            i.normalMap && (l.normalMap.value = i.normalMap,
            l.normalScale.value.copy(i.normalScale),
            1 === i.side && l.normalScale.value.negate()),
            i.displacementMap && (l.displacementMap.value = i.displacementMap,
            l.displacementScale.value = i.displacementScale,
            l.displacementBias.value = i.displacementBias)) : i.isMeshDepthMaterial ? (f(l, i),
            i.displacementMap && (l.displacementMap.value = i.displacementMap,
            l.displacementScale.value = i.displacementScale,
            l.displacementBias.value = i.displacementBias)) : i.isMeshDistanceMaterial ? (f(l, i),
            i.displacementMap && (l.displacementMap.value = i.displacementMap,
            l.displacementScale.value = i.displacementScale,
            l.displacementBias.value = i.displacementBias),
            l.referencePosition.value.copy(i.referencePosition),
            l.nearDistance.value = i.nearDistance,
            l.farDistance.value = i.farDistance) : i.isMeshNormalMaterial ? (f(l, i),
            i.bumpMap && (l.bumpMap.value = i.bumpMap,
            l.bumpScale.value = i.bumpScale,
            1 === i.side && (l.bumpScale.value *= -1)),
            i.normalMap && (l.normalMap.value = i.normalMap,
            l.normalScale.value.copy(i.normalScale),
            1 === i.side && l.normalScale.value.negate()),
            i.displacementMap && (l.displacementMap.value = i.displacementMap,
            l.displacementScale.value = i.displacementScale,
            l.displacementBias.value = i.displacementBias)) : i.isLineBasicMaterial ? (l.diffuse.value = i.color,
            l.opacity.value = i.opacity,
            i.isLineDashedMaterial && (l.dashSize.value = i.dashSize,
            l.totalSize.value = i.dashSize + i.gapSize,
            l.scale.value = i.scale)) : i.isPointsMaterial ? (l.diffuse.value = i.color,
            l.opacity.value = i.opacity,
            l.size.value = i.size * rt,
            l.scale.value = .5 * nt,
            l.map.value = i.map,
            null !== i.map && (!0 === i.map.matrixAutoUpdate && i.map.updateMatrix(),
            l.uvTransform.value.copy(i.map.matrix))) : i.isSpriteMaterial ? (l.diffuse.value = i.color,
            l.opacity.value = i.opacity,
            l.rotation.value = i.rotation,
            l.map.value = i.map,
            null !== i.map && (!0 === i.map.matrixAutoUpdate && i.map.updateMatrix(),
            l.uvTransform.value.copy(i.map.matrix))) : i.isShadowMaterial && (l.color.value = i.color,
            l.opacity.value = i.opacity),
            void 0 !== l.ltc_1 && (l.ltc_1.value = Ha.LTC_1),
            void 0 !== l.ltc_2 && (l.ltc_2.value = Ha.LTC_2),
            zt.upload(ft, r.uniformsList, l, V)),
            i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (zt.upload(ft, r.uniformsList, l, V),
            i.uniformsNeedUpdate = !1),
            i.isSpriteMaterial && o.setValue(ft, "center", n.center),
            o.setValue(ft, "modelViewMatrix", n.modelViewMatrix),
            o.setValue(ft, "normalMatrix", n.normalMatrix),
            o.setValue(ft, "modelMatrix", n.matrixWorld),
            a
        }
        function f(t, e) {
            if (t.opacity.value = e.opacity,
            e.color && (t.diffuse.value = e.color),
            e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity),
            e.map && (t.map.value = e.map),
            e.alphaMap && (t.alphaMap.value = e.alphaMap),
            e.specularMap && (t.specularMap.value = e.specularMap),
            e.envMap && (t.envMap.value = e.envMap,
            t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1,
            t.reflectivity.value = e.reflectivity,
            t.refractionRatio.value = e.refractionRatio,
            t.maxMipLevel.value = R.get(e.envMap).__maxMipLevel),
            e.lightMap && (t.lightMap.value = e.lightMap,
            t.lightMapIntensity.value = e.lightMapIntensity),
            e.aoMap && (t.aoMap.value = e.aoMap,
            t.aoMapIntensity.value = e.aoMapIntensity),
            e.map)
                var i = e.map;
            else
                e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap);
            void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture),
            !0 === i.matrixAutoUpdate && i.updateMatrix(),
            t.uvTransform.value.copy(i.matrix))
        }
        function g(t, e) {
            t.specular.value = e.specular,
            t.shininess.value = Math.max(e.shininess, 1e-4),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap && (t.bumpMap.value = e.bumpMap,
            t.bumpScale.value = e.bumpScale,
            1 === e.side && (t.bumpScale.value *= -1)),
            e.normalMap && (t.normalMap.value = e.normalMap,
            t.normalScale.value.copy(e.normalScale),
            1 === e.side && t.normalScale.value.negate()),
            e.displacementMap && (t.displacementMap.value = e.displacementMap,
            t.displacementScale.value = e.displacementScale,
            t.displacementBias.value = e.displacementBias)
        }
        function v(t, e) {
            t.roughness.value = e.roughness,
            t.metalness.value = e.metalness,
            e.roughnessMap && (t.roughnessMap.value = e.roughnessMap),
            e.metalnessMap && (t.metalnessMap.value = e.metalnessMap),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap && (t.bumpMap.value = e.bumpMap,
            t.bumpScale.value = e.bumpScale,
            1 === e.side && (t.bumpScale.value *= -1)),
            e.normalMap && (t.normalMap.value = e.normalMap,
            t.normalScale.value.copy(e.normalScale),
            1 === e.side && t.normalScale.value.negate()),
            e.displacementMap && (t.displacementMap.value = e.displacementMap,
            t.displacementScale.value = e.displacementScale,
            t.displacementBias.value = e.displacementBias),
            e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
        }
        console.log("THREE.WebGLRenderer", "97");
        var r = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
          , a = void 0 !== t.context ? t.context : null
          , s = void 0 !== t.alpha && t.alpha
          , c = void 0 === t.depth || t.depth
          , h = void 0 === t.stencil || t.stencil
          , p = void 0 !== t.antialias && t.antialias
          , y = void 0 === t.premultipliedAlpha || t.premultipliedAlpha
          , x = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer
          , b = void 0 !== t.powerPreference ? t.powerPreference : "default"
          , _ = null
          , E = null;
        this.domElement = r,
        this.context = null,
        this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.gammaFactor = 2,
        this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1,
        this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1,
        this.maxMorphTargets = 8,
        this.maxMorphNormals = 4;
        var T, S, A, L, R, P, C, I, O, N, D, U, B, F, z, G, H, V = this, k = !1, j = null, W = null, X = null, q = -1, Y = w = null, J = !1, Z = null, Q = null, K = new Et, $ = new Et, tt = null, et = 0, it = r.width, nt = r.height, rt = 1, at = new Et(0,0,it,nt), ot = new Et(0,0,it,nt), st = !1, ct = new St, ht = new It, lt = !1, ut = !1, pt = new wt, dt = new Mt;
        try {
            s = {
                alpha: s,
                depth: c,
                stencil: h,
                antialias: p,
                premultipliedAlpha: y,
                preserveDrawingBuffer: x,
                powerPreference: b
            },
            r.addEventListener("webglcontextlost", i, !1),
            r.addEventListener("webglcontextrestored", n, !1);
            var ft = a || r.getContext("webgl", s) || r.getContext("experimental-webgl", s);
            if (null === ft) {
                if (null !== r.getContext("webgl"))
                    throw Error("Error creating WebGL context with your selected attributes.");
                throw Error("Error creating WebGL context.")
            }
            void 0 === ft.getShaderPrecisionFormat && (ft.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            )
        } catch (t) {
            console.error("THREE.WebGLRenderer: " + t.message)
        }
        e();
        var mt = null;
        "undefined" != typeof navigator && (mt = "xr"in navigator ? new fe(V) : new de(V)),
        this.vr = mt;
        var gt = new ae(V,O,S.maxTextureSize);
        this.shadowMap = gt,
        this.getContext = function() {
            return ft
        }
        ,
        this.getContextAttributes = function() {
            return ft.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            var t = T.get("WEBGL_lose_context");
            t && t.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            var t = T.get("WEBGL_lose_context");
            t && t.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return rt
        }
        ,
        this.setPixelRatio = function(t) {
            void 0 !== t && (rt = t,
            this.setSize(it, nt, !1))
        }
        ,
        this.getSize = function() {
            return {
                width: it,
                height: nt
            }
        }
        ,
        this.setSize = function(t, e, i) {
            mt.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (it = t,
            nt = e,
            r.width = t * rt,
            r.height = e * rt,
            !1 !== i && (r.style.width = t + "px",
            r.style.height = e + "px"),
            this.setViewport(0, 0, t, e))
        }
        ,
        this.getDrawingBufferSize = function() {
            return {
                width: it * rt,
                height: nt * rt
            }
        }
        ,
        this.setDrawingBufferSize = function(t, e, i) {
            it = t,
            nt = e,
            rt = i,
            r.width = t * i,
            r.height = e * i,
            this.setViewport(0, 0, t, e)
        }
        ,
        this.getCurrentViewport = function() {
            return K
        }
        ,
        this.setViewport = function(t, e, i, n) {
            at.set(t, nt - e - n, i, n),
            A.viewport(K.copy(at).multiplyScalar(rt))
        }
        ,
        this.setScissor = function(t, e, i, n) {
            ot.set(t, nt - e - n, i, n),
            A.scissor($.copy(ot).multiplyScalar(rt))
        }
        ,
        this.setScissorTest = function(t) {
            A.setScissorTest(st = t)
        }
        ,
        this.getClearColor = function() {
            return B.getClearColor()
        }
        ,
        this.setClearColor = function() {
            B.setClearColor.apply(B, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return B.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            B.setClearAlpha.apply(B, arguments)
        }
        ,
        this.clear = function(t, e, i) {
            var n = 0;
            (void 0 === t || t) && (n |= ft.COLOR_BUFFER_BIT),
            (void 0 === e || e) && (n |= ft.DEPTH_BUFFER_BIT),
            (void 0 === i || i) && (n |= ft.STENCIL_BUFFER_BIT),
            ft.clear(n)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            r.removeEventListener("webglcontextlost", i, !1),
            r.removeEventListener("webglcontextrestored", n, !1),
            D.dispose(),
            U.dispose(),
            R.dispose(),
            O.dispose(),
            mt.dispose(),
            _t.stop()
        }
        ,
        this.renderBufferImmediate = function(t, e) {
            A.initAttributes();
            var i = R.get(t);
            t.hasPositions && !i.position && (i.position = ft.createBuffer()),
            t.hasNormals && !i.normal && (i.normal = ft.createBuffer()),
            t.hasUvs && !i.uv && (i.uv = ft.createBuffer()),
            t.hasColors && !i.color && (i.color = ft.createBuffer()),
            e = e.getAttributes(),
            t.hasPositions && (ft.bindBuffer(ft.ARRAY_BUFFER, i.position),
            ft.bufferData(ft.ARRAY_BUFFER, t.positionArray, ft.DYNAMIC_DRAW),
            A.enableAttribute(e.position),
            ft.vertexAttribPointer(e.position, 3, ft.FLOAT, !1, 0, 0)),
            t.hasNormals && (ft.bindBuffer(ft.ARRAY_BUFFER, i.normal),
            ft.bufferData(ft.ARRAY_BUFFER, t.normalArray, ft.DYNAMIC_DRAW),
            A.enableAttribute(e.normal),
            ft.vertexAttribPointer(e.normal, 3, ft.FLOAT, !1, 0, 0)),
            t.hasUvs && (ft.bindBuffer(ft.ARRAY_BUFFER, i.uv),
            ft.bufferData(ft.ARRAY_BUFFER, t.uvArray, ft.DYNAMIC_DRAW),
            A.enableAttribute(e.uv),
            ft.vertexAttribPointer(e.uv, 2, ft.FLOAT, !1, 0, 0)),
            t.hasColors && (ft.bindBuffer(ft.ARRAY_BUFFER, i.color),
            ft.bufferData(ft.ARRAY_BUFFER, t.colorArray, ft.DYNAMIC_DRAW),
            A.enableAttribute(e.color),
            ft.vertexAttribPointer(e.color, 3, ft.FLOAT, !1, 0, 0)),
            A.disableUnusedAttributes(),
            ft.drawArrays(ft.TRIANGLES, 0, t.count),
            t.count = 0
        }
        ,
        this.renderBufferDirect = function(t, e, i, n, r, a) {
            var o = r.isMesh && r.normalMatrix.determinant() < 0;
            A.setMaterial(n, o);
            var s = M(t, e, n, r)
              , c = !1;
            w === i.id && Y === s.id && J === (!0 === n.wireframe) || (w = i.id,
            Y = s.id,
            J = !0 === n.wireframe,
            c = !0),
            r.morphTargetInfluences && (F.update(r, i, n, s),
            c = !0),
            o = i.index;
            var h = i.attributes.position;
            if (e = 1,
            !0 === n.wireframe && (o = I.getWireframeAttribute(i),
            e = 2),
            t = z,
            null !== o) {
                var l = C.get(o);
                (t = G).setIndex(l)
            }
            if (c) {
                if (i && i.isInstancedBufferGeometry & !S.isWebGL2 && null === T.get("ANGLE_instanced_arrays"))
                    console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                else {
                    A.initAttributes(),
                    c = i.attributes,
                    s = s.getAttributes();
                    var u = n.defaultAttributeValues;
                    for (_ in s) {
                        var p = s[_];
                        if (0 <= p) {
                            var d = c[_];
                            if (void 0 !== d) {
                                var f = d.normalized
                                  , m = d.itemSize
                                  , g = C.get(d);
                                if (void 0 !== g) {
                                    var v = g.buffer
                                      , y = g.type;
                                    if (g = g.bytesPerElement,
                                    d.isInterleavedBufferAttribute) {
                                        var x = d.data
                                          , b = x.stride;
                                        d = d.offset,
                                        x && x.isInstancedInterleavedBuffer ? (A.enableAttributeAndDivisor(p, x.meshPerAttribute),
                                        void 0 === i.maxInstancedCount && (i.maxInstancedCount = x.meshPerAttribute * x.count)) : A.enableAttribute(p),
                                        ft.bindBuffer(ft.ARRAY_BUFFER, v),
                                        ft.vertexAttribPointer(p, m, y, f, b * g, d * g)
                                    } else
                                        d.isInstancedBufferAttribute ? (A.enableAttributeAndDivisor(p, d.meshPerAttribute),
                                        void 0 === i.maxInstancedCount && (i.maxInstancedCount = d.meshPerAttribute * d.count)) : A.enableAttribute(p),
                                        ft.bindBuffer(ft.ARRAY_BUFFER, v),
                                        ft.vertexAttribPointer(p, m, y, f, 0, 0)
                                }
                            } else if (void 0 !== u && void 0 !== (f = u[_]))
                                switch (f.length) {
                                case 2:
                                    ft.vertexAttrib2fv(p, f);
                                    break;
                                case 3:
                                    ft.vertexAttrib3fv(p, f);
                                    break;
                                case 4:
                                    ft.vertexAttrib4fv(p, f);
                                    break;
                                default:
                                    ft.vertexAttrib1fv(p, f)
                                }
                        }
                    }
                    A.disableUnusedAttributes()
                }
                null !== o && ft.bindBuffer(ft.ELEMENT_ARRAY_BUFFER, l.buffer)
            }
            l = 1 / 0,
            null !== o ? l = o.count : void 0 !== h && (l = h.count),
            o = i.drawRange.start * e,
            h = null !== a ? a.start * e : 0;
            var _ = Math.max(o, h);
            if (0 !== (a = Math.max(0, Math.min(l, o + i.drawRange.count * e, h + (null !== a ? a.count * e : 1 / 0)) - 1 - _ + 1))) {
                if (r.isMesh)
                    if (!0 === n.wireframe)
                        A.setLineWidth(n.wireframeLinewidth * (null === W ? rt : 1)),
                        t.setMode(ft.LINES);
                    else
                        switch (r.drawMode) {
                        case 0:
                            t.setMode(ft.TRIANGLES);
                            break;
                        case 1:
                            t.setMode(ft.TRIANGLE_STRIP);
                            break;
                        case 2:
                            t.setMode(ft.TRIANGLE_FAN)
                        }
                else
                    r.isLine ? (void 0 === (n = n.linewidth) && (n = 1),
                    A.setLineWidth(n * (null === W ? rt : 1)),
                    r.isLineSegments ? t.setMode(ft.LINES) : r.isLineLoop ? t.setMode(ft.LINE_LOOP) : t.setMode(ft.LINE_STRIP)) : r.isPoints ? t.setMode(ft.POINTS) : r.isSprite && t.setMode(ft.TRIANGLES);
                i && i.isInstancedBufferGeometry ? 0 < i.maxInstancedCount && t.renderInstances(i, _, a) : t.render(_, a)
            }
        }
        ,
        this.compile = function(i, t) {
            (E = U.get(i, t)).init(),
            i.traverse(function(t) {
                t.isLight && (E.pushLight(t),
                t.castShadow && E.pushShadow(t))
            }),
            E.setupLights(t),
            i.traverse(function(t) {
                if (t.material)
                    if (Array.isArray(t.material))
                        for (var e = 0; e < t.material.length; e++)
                            d(t.material[e], i.fog, t);
                    else
                        d(t.material, i.fog, t)
            })
        }
        ;
        var vt, yt, xt, bt = null, _t = new At;
        _t.setAnimationLoop(function(t) {
            mt.isPresenting() || bt && bt(t)
        }),
        "undefined" != typeof window && _t.setContext(window),
        this.setAnimationLoop = function(t) {
            bt = t,
            mt.setAnimationLoop(t),
            _t.start()
        }
        ,
        this.render = function(t, e, i, n) {
            if (e && e.isCamera) {
                if (!k) {
                    Y = w = null,
                    J = !1,
                    q = -1,
                    !(Z = null) === t.autoUpdate && t.updateMatrixWorld(),
                    null === e.parent && e.updateMatrixWorld(),
                    mt.enabled && (e = mt.getCamera(e)),
                    (E = U.get(t, e)).init(),
                    t.onBeforeRender(V, t, e, i),
                    pt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
                    ct.setFromMatrix(pt),
                    ut = this.localClippingEnabled,
                    lt = ht.init(this.clippingPlanes, ut, e),
                    (_ = D.get(t, e)).init(),
                    function t(e, i, n) {
                        if (!1 !== e.visible) {
                            if (e.layers.test(i.layers))
                                if (e.isLight)
                                    E.pushLight(e),
                                    e.castShadow && E.pushShadow(e);
                                else if (e.isSprite) {
                                    if (!e.frustumCulled || ct.intersectsSprite(e)) {
                                        n && dt.setFromMatrixPosition(e.matrixWorld).applyMatrix4(pt);
                                        var r = O.update(e)
                                          , a = e.material;
                                        _.push(e, r, a, dt.z, null)
                                    }
                                } else if (e.isImmediateRenderObject)
                                    n && dt.setFromMatrixPosition(e.matrixWorld).applyMatrix4(pt),
                                    _.push(e, null, e.material, dt.z, null);
                                else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(),
                                !e.frustumCulled || ct.intersectsObject(e)))
                                    if (n && dt.setFromMatrixPosition(e.matrixWorld).applyMatrix4(pt),
                                    r = O.update(e),
                                    a = e.material,
                                    Array.isArray(a))
                                        for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
                                            var h = o[s]
                                              , l = a[h.materialIndex];
                                            l && l.visible && _.push(e, r, l, dt.z, h)
                                        }
                                    else
                                        a.visible && _.push(e, r, a, dt.z, null);
                            for (s = 0,
                            c = (e = e.children).length; s < c; s++)
                                t(e[s], i, n)
                        }
                    }(t, e, V.sortObjects),
                    !0 === V.sortObjects && _.sort(),
                    lt && ht.beginShadows(),
                    gt.render(E.state.shadowsArray, t, e),
                    E.setupLights(e),
                    lt && ht.endShadows(),
                    this.info.autoReset && this.info.reset(),
                    void 0 === i && (i = null),
                    this.setRenderTarget(i),
                    B.render(_, t, e, n),
                    n = _.opaque;
                    var r = _.transparent;
                    if (t.overrideMaterial) {
                        var a = t.overrideMaterial;
                        n.length && o(n, t, e, a),
                        r.length && o(r, t, e, a)
                    } else
                        n.length && o(n, t, e),
                        r.length && o(r, t, e);
                    i && P.updateRenderTargetMipmap(i),
                    A.buffers.depth.setTest(!0),
                    A.buffers.depth.setMask(!0),
                    A.buffers.color.setMask(!0),
                    A.setPolygonOffset(!1),
                    t.onAfterRender(V, t, e),
                    mt.enabled && mt.submitFrame(),
                    E = _ = null
                }
            } else
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        }
        ,
        this.allocTextureUnit = function() {
            var t = et;
            return t >= S.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + S.maxTextures),
            et += 1,
            t
        }
        ,
        this.setTexture2D = (vt = !1,
        function(t, e) {
            t && t.isWebGLRenderTarget && (vt || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),
            vt = !0),
            t = t.texture),
            P.setTexture2D(t, e)
        }
        ),
        this.setTexture3D = function(t, e) {
            P.setTexture3D(t, e)
        }
        ,
        this.setTexture = (yt = !1,
        function(t, e) {
            yt || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
            yt = !0),
            P.setTexture2D(t, e)
        }
        ),
        this.setTextureCube = (xt = !1,
        function(t, e) {
            t && t.isWebGLRenderTargetCube && (xt || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
            xt = !0),
            t = t.texture),
            t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? P.setTextureCube(t, e) : P.setTextureCubeDynamic(t, e)
        }
        ),
        this.setFramebuffer = function(t) {
            j = t
        }
        ,
        this.getRenderTarget = function() {
            return W
        }
        ,
        this.setRenderTarget = function(t) {
            (W = t) && void 0 === R.get(t).__webglFramebuffer && P.setupRenderTarget(t);
            var e = j
              , i = !1;
            tt = t ? (e = R.get(t).__webglFramebuffer,
            t.isWebGLRenderTargetCube && (e = e[t.activeCubeFace],
            i = !0),
            K.copy(t.viewport),
            $.copy(t.scissor),
            t.scissorTest) : (K.copy(at).multiplyScalar(rt),
            $.copy(ot).multiplyScalar(rt),
            st),
            X !== e && (ft.bindFramebuffer(ft.FRAMEBUFFER, e),
            X = e),
            A.viewport(K),
            A.scissor($),
            A.setScissorTest(tt),
            i && (i = R.get(t.texture),
            ft.framebufferTexture2D(ft.FRAMEBUFFER, ft.COLOR_ATTACHMENT0, ft.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, i.__webglTexture, t.activeMipMapLevel))
        }
        ,
        this.readRenderTargetPixels = function(t, e, i, n, r, a) {
            if (t && t.isWebGLRenderTarget) {
                var o = R.get(t).__webglFramebuffer;
                if (o) {
                    var s = !1;
                    o !== X && (ft.bindFramebuffer(ft.FRAMEBUFFER, o),
                    s = !0);
                    try {
                        var c = t.texture
                          , h = c.format
                          , l = c.type;
                        1023 !== h && H.convert(h) !== ft.getParameter(ft.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === l || H.convert(l) === ft.getParameter(ft.IMPLEMENTATION_COLOR_READ_TYPE) || 1015 === l && (S.isWebGL2 || T.get("OES_texture_float") || T.get("WEBGL_color_buffer_float")) || 1016 === l && (S.isWebGL2 ? T.get("EXT_color_buffer_float") : T.get("EXT_color_buffer_half_float")) ? ft.checkFramebufferStatus(ft.FRAMEBUFFER) === ft.FRAMEBUFFER_COMPLETE ? 0 <= e && e <= t.width - n && 0 <= i && i <= t.height - r && ft.readPixels(e, i, n, r, H.convert(h), H.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                    } finally {
                        s && ft.bindFramebuffer(ft.FRAMEBUFFER, X)
                    }
                }
            } else
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }
        ,
        this.copyFramebufferToTexture = function(t, e, i) {
            var n = e.image.width
              , r = e.image.height
              , a = H.convert(e.format);
            this.setTexture2D(e, 0),
            ft.copyTexImage2D(ft.TEXTURE_2D, i || 0, a, t.x, t.y, n, r, 0)
        }
        ,
        this.copyTextureToTexture = function(t, e, i, n) {
            var r = e.image.width
              , a = e.image.height
              , o = H.convert(i.format)
              , s = H.convert(i.type);
            this.setTexture2D(i, 0),
            e.isDataTexture ? ft.texSubImage2D(ft.TEXTURE_2D, n || 0, t.x, t.y, r, a, o, s, e.image.data) : ft.texSubImage2D(ft.TEXTURE_2D, n || 0, t.x, t.y, o, s, e.image)
        }
    }
    function ge(t, e) {
        this.name = "",
        this.color = new M(t),
        this.density = void 0 !== e ? e : 25e-5
    }
    function ve(t, e, i) {
        this.name = "",
        this.color = new M(t),
        this.near = void 0 !== e ? e : 1,
        this.far = void 0 !== i ? i : 1e3
    }
    function ye() {
        l.call(this),
        this.type = "Scene",
        this.overrideMaterial = this.fog = this.background = null,
        this.autoUpdate = !0
    }
    function xe(t, e) {
        this.array = t,
        this.stride = e,
        this.count = void 0 !== t ? t.length / e : 0,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    function be(t, e, i, n) {
        this.data = t,
        this.itemSize = e,
        this.offset = i,
        this.normalized = !0 === n
    }
    function _e(t) {
        I.call(this),
        this.type = "SpriteMaterial",
        this.color = new M(16777215),
        this.map = null,
        this.rotation = 0,
        this.sizeAttenuation = !0,
        this.lights = !1,
        this.transparent = !0,
        this.setValues(t)
    }
    function we(t) {
        if (l.call(this),
        this.type = "Sprite",
        void 0 === hs) {
            hs = new P;
            var e = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]);
            e = new xe(e,5),
            hs.setIndex([0, 1, 2, 0, 2, 3]),
            hs.addAttribute("position", new be(e,3,0,!1)),
            hs.addAttribute("uv", new be(e,2,3,!1))
        }
        this.geometry = hs,
        this.material = void 0 !== t ? t : new _e,
        this.center = new W(.5,.5)
    }
    function Me() {
        l.call(this),
        this.type = "LOD",
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }
    function Ee(t, e) {
        if (t = t || [],
        this.bones = t.slice(0),
        this.boneMatrices = new Float32Array(16 * this.bones.length),
        void 0 === e)
            this.calculateInverses();
        else if (this.bones.length === e.length)
            this.boneInverses = e.slice(0);
        else
            for (console.warn("THREE.Skeleton boneInverses is the wrong length."),
            this.boneInverses = [],
            t = 0,
            e = this.bones.length; t < e; t++)
                this.boneInverses.push(new wt)
    }
    function Te() {
        l.call(this),
        this.type = "Bone"
    }
    function Se(t, e) {
        D.call(this, t, e),
        this.type = "SkinnedMesh",
        this.bindMode = "attached",
        this.bindMatrix = new wt,
        this.bindMatrixInverse = new wt,
        t = new Ee(t = this.initBones()),
        this.bind(t, this.matrixWorld),
        this.normalizeSkinWeights()
    }
    function Ae(t) {
        I.call(this),
        this.type = "LineBasicMaterial",
        this.color = new M(16777215),
        this.linewidth = 1,
        this.linejoin = this.linecap = "round",
        this.lights = !1,
        this.setValues(t)
    }
    function Le(t, e, i) {
        1 === i && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),
        l.call(this),
        this.type = "Line",
        this.geometry = void 0 !== t ? t : new P,
        this.material = void 0 !== e ? e : new Ae({
            color: 16777215 * Math.random()
        })
    }
    function Re(t, e) {
        Le.call(this, t, e),
        this.type = "LineSegments"
    }
    function Pe(t, e) {
        Le.call(this, t, e),
        this.type = "LineLoop"
    }
    function Ce(t) {
        I.call(this),
        this.type = "PointsMaterial",
        this.color = new M(16777215),
        this.map = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.lights = this.morphTargets = !1,
        this.setValues(t)
    }
    function Ie(t, e) {
        l.call(this),
        this.type = "Points",
        this.geometry = void 0 !== t ? t : new P,
        this.material = void 0 !== e ? e : new Ce({
            color: 16777215 * Math.random()
        })
    }
    function Oe(t, e, i, n, r, a, o, s, c) {
        p.call(this, t, e, i, n, r, a, o, s, c),
        this.generateMipmaps = !1
    }
    function Ne(t, e, i, n, r, a, o, s, c, h, l, u) {
        p.call(this, null, a, o, s, c, h, n, r, l, u),
        this.image = {
            width: e,
            height: i
        },
        this.mipmaps = t,
        this.generateMipmaps = this.flipY = !1
    }
    function De(t, e, i, n, r, a, o, s, c) {
        p.call(this, t, e, i, n, r, a, o, s, c),
        this.needsUpdate = !0
    }
    function Ue(t, e, i, n, r, a, o, s, c, h) {
        if (1026 !== (h = void 0 !== h ? h : 1026) && 1027 !== h)
            throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === i && 1026 === h && (i = 1012),
        void 0 === i && 1027 === h && (i = 1020),
        p.call(this, null, n, r, a, o, s, h, i, c),
        this.image = {
            width: t,
            height: e
        },
        this.magFilter = void 0 !== o ? o : 1003,
        this.minFilter = void 0 !== s ? s : 1003,
        this.generateMipmaps = this.flipY = !1
    }
    function Be(t) {
        P.call(this),
        this.type = "WireframeGeometry";
        var e, i, n, r = [], a = [0, 0], o = {}, s = ["a", "b", "c"];
        if (t && t.isGeometry) {
            var c = t.faces
              , h = 0;
            for (i = c.length; h < i; h++) {
                var l = c[h];
                for (e = 0; e < 3; e++) {
                    var u = l[s[e]]
                      , p = l[s[(e + 1) % 3]];
                    a[0] = Math.min(u, p),
                    a[1] = Math.max(u, p),
                    void 0 === o[u = a[0] + "," + a[1]] && (o[u] = {
                        index1: a[0],
                        index2: a[1]
                    })
                }
            }
            for (u in o)
                h = o[u],
                s = t.vertices[h.index1],
                r.push(s.x, s.y, s.z),
                s = t.vertices[h.index2],
                r.push(s.x, s.y, s.z)
        } else if (t && t.isBufferGeometry)
            if (s = new Mt,
            null !== t.index) {
                c = t.attributes.position,
                l = t.index;
                var d = t.groups;
                for (0 === d.length && (d = [{
                    start: 0,
                    count: l.count,
                    materialIndex: 0
                }]),
                t = 0,
                n = d.length; t < n; ++t)
                    for (e = (h = d[t]).start,
                    i = h.count,
                    i = (h = e) + i; h < i; h += 3)
                        for (e = 0; e < 3; e++)
                            u = l.getX(h + e),
                            p = l.getX(h + (e + 1) % 3),
                            a[0] = Math.min(u, p),
                            a[1] = Math.max(u, p),
                            void 0 === o[u = a[0] + "," + a[1]] && (o[u] = {
                                index1: a[0],
                                index2: a[1]
                            });
                for (u in o)
                    h = o[u],
                    s.fromBufferAttribute(c, h.index1),
                    r.push(s.x, s.y, s.z),
                    s.fromBufferAttribute(c, h.index2),
                    r.push(s.x, s.y, s.z)
            } else
                for (h = 0,
                i = (c = t.attributes.position).count / 3; h < i; h++)
                    for (e = 0; e < 3; e++)
                        o = 3 * h + e,
                        s.fromBufferAttribute(c, o),
                        r.push(s.x, s.y, s.z),
                        o = 3 * h + (e + 1) % 3,
                        s.fromBufferAttribute(c, o),
                        r.push(s.x, s.y, s.z);
        this.addAttribute("position", new R(r,3))
    }
    function Fe(t, e, i) {
        E.call(this),
        this.type = "ParametricGeometry",
        this.parameters = {
            func: t,
            slices: e,
            stacks: i
        },
        this.fromBufferGeometry(new ze(t,e,i)),
        this.mergeVertices()
    }
    function ze(t, e, i) {
        P.call(this),
        this.type = "ParametricBufferGeometry",
        this.parameters = {
            func: t,
            slices: e,
            stacks: i
        };
        var n, r, a = [], o = [], s = [], c = [], h = new Mt, l = new Mt, u = new Mt, p = new Mt, d = new Mt;
        t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        var f = e + 1;
        for (n = 0; n <= i; n++) {
            var m = n / i;
            for (r = 0; r <= e; r++) {
                var g = r / e;
                t(g, m, l),
                o.push(l.x, l.y, l.z),
                0 <= g - 1e-5 ? (t(g - 1e-5, m, u),
                p.subVectors(l, u)) : (t(g + 1e-5, m, u),
                p.subVectors(u, l)),
                0 <= m - 1e-5 ? (t(g, m - 1e-5, u),
                d.subVectors(l, u)) : (t(g, m + 1e-5, u),
                d.subVectors(u, l)),
                h.crossVectors(p, d).normalize(),
                s.push(h.x, h.y, h.z),
                c.push(g, m)
            }
        }
        for (n = 0; n < i; n++)
            for (r = 0; r < e; r++)
                t = n * f + r + 1,
                h = (n + 1) * f + r + 1,
                l = (n + 1) * f + r,
                a.push(n * f + r, t, l),
                a.push(t, h, l);
        this.setIndex(a),
        this.addAttribute("position", new R(o,3)),
        this.addAttribute("normal", new R(s,3)),
        this.addAttribute("uv", new R(c,2))
    }
    function Ge(t, e, i, n) {
        E.call(this),
        this.type = "PolyhedronGeometry",
        this.parameters = {
            vertices: t,
            indices: e,
            radius: i,
            detail: n
        },
        this.fromBufferGeometry(new He(t,e,i,n)),
        this.mergeVertices()
    }
    function He(i, m, t, e) {
        function g(t) {
            u.push(t.x, t.y, t.z)
        }
        function v(t, e) {
            t *= 3,
            e.x = i[t + 0],
            e.y = i[t + 1],
            e.z = i[t + 2]
        }
        function l(t, e, i, n) {
            n < 0 && 1 === t.x && (p[e] = t.x - 1),
            0 === i.x && 0 === i.z && (p[e] = n / 2 / Math.PI + .5)
        }
        P.call(this),
        this.type = "PolyhedronBufferGeometry",
        this.parameters = {
            vertices: i,
            indices: m,
            radius: t,
            detail: e
        },
        t = t || 1;
        var u = []
          , p = [];
        !function(t) {
            for (var e = new Mt, i = new Mt, n = new Mt, r = 0; r < m.length; r += 3) {
                v(m[r + 0], e),
                v(m[r + 1], i),
                v(m[r + 2], n);
                var a, o, s = e, c = i, h = n, l = Math.pow(2, t), u = [];
                for (o = 0; o <= l; o++) {
                    u[o] = [];
                    var p = s.clone().lerp(h, o / l)
                      , d = c.clone().lerp(h, o / l)
                      , f = l - o;
                    for (a = 0; a <= f; a++)
                        u[o][a] = 0 === a && o === l ? p : p.clone().lerp(d, a / f)
                }
                for (o = 0; o < l; o++)
                    for (a = 0; a < 2 * (l - o) - 1; a++)
                        s = Math.floor(a / 2),
                        0 == a % 2 ? (g(u[o][s + 1]),
                        g(u[o + 1][s]),
                        g(u[o][s])) : (g(u[o][s + 1]),
                        g(u[o + 1][s + 1]),
                        g(u[o + 1][s]))
            }
        }(e = e || 0),
        function(t) {
            for (var e = new Mt, i = 0; i < u.length; i += 3)
                e.x = u[i + 0],
                e.y = u[i + 1],
                e.z = u[i + 2],
                e.normalize().multiplyScalar(t),
                u[i + 0] = e.x,
                u[i + 1] = e.y,
                u[i + 2] = e.z
        }(t),
        function() {
            for (var t = new Mt, e = 0; e < u.length; e += 3)
                t.x = u[e + 0],
                t.y = u[e + 1],
                t.z = u[e + 2],
                p.push(Math.atan2(t.z, -t.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z)) / Math.PI + .5));
            t = new Mt,
            e = new Mt;
            for (var i = new Mt, n = new Mt, r = new W, a = new W, o = new W, s = 0, c = 0; s < u.length; s += 9,
            c += 6) {
                t.set(u[s + 0], u[s + 1], u[s + 2]),
                e.set(u[s + 3], u[s + 4], u[s + 5]),
                i.set(u[s + 6], u[s + 7], u[s + 8]),
                r.set(p[c + 0], p[c + 1]),
                a.set(p[c + 2], p[c + 3]),
                o.set(p[c + 4], p[c + 5]),
                n.copy(t).add(e).add(i).divideScalar(3);
                var h = Math.atan2(n.z, -n.x);
                l(r, c + 0, t, h),
                l(a, c + 2, e, h),
                l(o, c + 4, i, h)
            }
            for (t = 0; t < p.length; t += 6)
                e = p[t + 0],
                i = p[t + 2],
                n = p[t + 4],
                r = Math.min(e, i, n),
                .9 < Math.max(e, i, n) && r < .1 && (e < .2 && (p[t + 0] += 1),
                i < .2 && (p[t + 2] += 1),
                n < .2 && (p[t + 4] += 1))
        }(),
        this.addAttribute("position", new R(u,3)),
        this.addAttribute("normal", new R(u.slice(),3)),
        this.addAttribute("uv", new R(p,2)),
        0 === e ? this.computeVertexNormals() : this.normalizeNormals()
    }
    function Ve(t, e) {
        E.call(this),
        this.type = "TetrahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new ke(t,e)),
        this.mergeVertices()
    }
    function ke(t, e) {
        He.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e),
        this.type = "TetrahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function je(t, e) {
        E.call(this),
        this.type = "OctahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new We(t,e)),
        this.mergeVertices()
    }
    function We(t, e) {
        He.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e),
        this.type = "OctahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function Xe(t, e) {
        E.call(this),
        this.type = "IcosahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new qe(t,e)),
        this.mergeVertices()
    }
    function qe(t, e) {
        var i = (1 + Math.sqrt(5)) / 2;
        He.call(this, [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e),
        this.type = "IcosahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function Ye(t, e) {
        E.call(this),
        this.type = "DodecahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new Je(t,e)),
        this.mergeVertices()
    }
    function Je(t, e) {
        var i = (1 + Math.sqrt(5)) / 2
          , n = 1 / i;
        He.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e),
        this.type = "DodecahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function Ze(t, e, i, n, r, a) {
        E.call(this),
        this.type = "TubeGeometry",
        this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: r
        },
        void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed."),
        t = new Qe(t,e,i,n,r),
        this.tangents = t.tangents,
        this.normals = t.normals,
        this.binormals = t.binormals,
        this.fromBufferGeometry(t),
        this.mergeVertices()
    }
    function Qe(r, a, o, s, t) {
        function e(t) {
            p = r.getPointAt(t / a, p);
            var e = c.normals[t];
            for (t = c.binormals[t],
            h = 0; h <= s; h++) {
                var i = h / s * Math.PI * 2
                  , n = Math.sin(i);
                i = -Math.cos(i),
                u.x = i * e.x + n * t.x,
                u.y = i * e.y + n * t.y,
                u.z = i * e.z + n * t.z,
                u.normalize(),
                f.push(u.x, u.y, u.z),
                l.x = p.x + o * u.x,
                l.y = p.y + o * u.y,
                l.z = p.z + o * u.z,
                d.push(l.x, l.y, l.z)
            }
        }
        P.call(this),
        this.type = "TubeBufferGeometry",
        this.parameters = {
            path: r,
            tubularSegments: a,
            radius: o,
            radialSegments: s,
            closed: t
        },
        a = a || 64,
        o = o || 1,
        s = s || 8,
        t = t || !1;
        var c = r.computeFrenetFrames(a, t);
        this.tangents = c.tangents,
        this.normals = c.normals,
        this.binormals = c.binormals;
        var n, h, l = new Mt, u = new Mt, i = new W, p = new Mt, d = [], f = [], m = [], g = [];
        for (n = 0; n < a; n++)
            e(n);
        for (e(!1 === t ? a : 0),
        n = 0; n <= a; n++)
            for (h = 0; h <= s; h++)
                i.x = n / a,
                i.y = h / s,
                m.push(i.x, i.y);
        !function() {
            for (h = 1; h <= a; h++)
                for (n = 1; n <= s; n++) {
                    var t = (s + 1) * h + (n - 1)
                      , e = (s + 1) * h + n
                      , i = (s + 1) * (h - 1) + n;
                    g.push((s + 1) * (h - 1) + (n - 1), t, i),
                    g.push(t, e, i)
                }
        }(),
        this.setIndex(g),
        this.addAttribute("position", new R(d,3)),
        this.addAttribute("normal", new R(f,3)),
        this.addAttribute("uv", new R(m,2))
    }
    function Ke(t, e, i, n, r, a, o) {
        E.call(this),
        this.type = "TorusKnotGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        },
        void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
        this.fromBufferGeometry(new $e(t,e,i,n,r,a)),
        this.mergeVertices()
    }
    function $e(t, e, i, n, r, a) {
        function o(t, e, i, n, r) {
            var a = Math.sin(t);
            e = i / e * t,
            i = Math.cos(e),
            r.x = n * (2 + i) * .5 * Math.cos(t),
            r.y = n * (2 + i) * a * .5,
            r.z = n * Math.sin(e) * .5
        }
        P.call(this),
        this.type = "TorusKnotBufferGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        },
        t = t || 1,
        e = e || .4,
        i = Math.floor(i) || 64,
        n = Math.floor(n) || 8,
        r = r || 2,
        a = a || 3;
        var s, c = [], h = [], l = [], u = [], p = new Mt, d = new Mt, f = new Mt, m = new Mt, g = new Mt, v = new Mt, y = new Mt;
        for (s = 0; s <= i; ++s) {
            var x = s / i * r * Math.PI * 2;
            for (o(x, r, a, t, f),
            o(x + .01, r, a, t, m),
            v.subVectors(m, f),
            y.addVectors(m, f),
            g.crossVectors(v, y),
            y.crossVectors(g, v),
            g.normalize(),
            y.normalize(),
            x = 0; x <= n; ++x) {
                var b = x / n * Math.PI * 2
                  , _ = -e * Math.cos(b);
                b = e * Math.sin(b),
                p.x = f.x + (_ * y.x + b * g.x),
                p.y = f.y + (_ * y.y + b * g.y),
                p.z = f.z + (_ * y.z + b * g.z),
                h.push(p.x, p.y, p.z),
                d.subVectors(p, f).normalize(),
                l.push(d.x, d.y, d.z),
                u.push(s / i),
                u.push(x / n)
            }
        }
        for (x = 1; x <= i; x++)
            for (s = 1; s <= n; s++)
                t = (n + 1) * x + (s - 1),
                e = (n + 1) * x + s,
                r = (n + 1) * (x - 1) + s,
                c.push((n + 1) * (x - 1) + (s - 1), t, r),
                c.push(t, e, r);
        this.setIndex(c),
        this.addAttribute("position", new R(h,3)),
        this.addAttribute("normal", new R(l,3)),
        this.addAttribute("uv", new R(u,2))
    }
    function ti(t, e, i, n, r) {
        E.call(this),
        this.type = "TorusGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        },
        this.fromBufferGeometry(new ei(t,e,i,n,r)),
        this.mergeVertices()
    }
    function ei(t, e, i, n, r) {
        P.call(this),
        this.type = "TorusBufferGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        },
        t = t || 1,
        e = e || .4,
        i = Math.floor(i) || 8,
        n = Math.floor(n) || 6,
        r = r || 2 * Math.PI;
        var a, o, s = [], c = [], h = [], l = [], u = new Mt, p = new Mt, d = new Mt;
        for (a = 0; a <= i; a++)
            for (o = 0; o <= n; o++) {
                var f = o / n * r
                  , m = a / i * Math.PI * 2;
                p.x = (t + e * Math.cos(m)) * Math.cos(f),
                p.y = (t + e * Math.cos(m)) * Math.sin(f),
                p.z = e * Math.sin(m),
                c.push(p.x, p.y, p.z),
                u.x = t * Math.cos(f),
                u.y = t * Math.sin(f),
                d.subVectors(p, u).normalize(),
                h.push(d.x, d.y, d.z),
                l.push(o / n),
                l.push(a / i)
            }
        for (a = 1; a <= i; a++)
            for (o = 1; o <= n; o++)
                t = (n + 1) * (a - 1) + o - 1,
                e = (n + 1) * (a - 1) + o,
                r = (n + 1) * a + o,
                s.push((n + 1) * a + o - 1, t, r),
                s.push(t, e, r);
        this.setIndex(s),
        this.addAttribute("position", new R(c,3)),
        this.addAttribute("normal", new R(h,3)),
        this.addAttribute("uv", new R(l,2))
    }
    function ii(t, e, i, n, r) {
        for (var a, o = 0, s = e, c = i - n; s < i; s += n)
            o += (t[c] - t[s]) * (t[s + 1] + t[c + 1]),
            c = s;
        if (r === 0 < o)
            for (r = e; r < i; r += n)
                a = fi(r, t[r], t[r + 1], a);
        else
            for (r = i - n; e <= r; r -= n)
                a = fi(r, t[r], t[r + 1], a);
        return a && li(a, a.next) && (mi(a),
        a = a.next),
        a
    }
    function ni(t, e) {
        if (!t)
            return t;
        e || (e = t);
        do {
            var i = !1;
            if (t.steiner || !li(t, t.next) && 0 !== hi(t.prev, t, t.next))
                t = t.next;
            else {
                if (mi(t),
                (t = e = t.prev) === t.next)
                    break;
                i = !0
            }
        } while (i || t !== e);
        return e
    }
    function ri(t, e) {
        return t.x - e.x
    }
    function ai(t, e) {
        var i = e
          , n = t.x
          , r = t.y
          , a = -1 / 0;
        do {
            if (r <= i.y && r >= i.next.y && i.next.y !== i.y) {
                var o = i.x + (r - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                if (o <= n && a < o) {
                    if ((a = o) === n) {
                        if (r === i.y)
                            return i;
                        if (r === i.next.y)
                            return i.next
                    }
                    var s = i.x < i.next.x ? i : i.next
                }
            }
            i = i.next
        } while (i !== e);
        if (!s)
            return null;
        if (n === a)
            return s.prev;
        o = (e = s).x;
        var c = s.y
          , h = 1 / 0;
        for (i = s.next; i !== e; ) {
            if (n >= i.x && i.x >= o && n !== i.x && ci(r < c ? n : a, r, o, c, r < c ? a : n, r, i.x, i.y)) {
                var l = Math.abs(r - i.y) / (n - i.x);
                (l < h || l === h && i.x > s.x) && pi(i, t) && (s = i,
                h = l)
            }
            i = i.next
        }
        return s
    }
    function oi(t, e, i, n, r) {
        return 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1) | (1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }
    function si(t) {
        for (var e = t, i = t; e.x < i.x && (i = e),
        (e = e.next) !== t; )
            ;
        return i
    }
    function ci(t, e, i, n, r, a, o, s) {
        return 0 <= (r - o) * (e - s) - (t - o) * (a - s) && 0 <= (t - o) * (n - s) - (i - o) * (e - s) && 0 <= (i - o) * (a - s) - (r - o) * (n - s)
    }
    function hi(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
    }
    function li(t, e) {
        return t.x === e.x && t.y === e.y
    }
    function ui(t, e, i, n) {
        return !!(li(t, e) && li(i, n) || li(t, n) && li(i, e)) || 0 < hi(t, e, i) != 0 < hi(t, e, n) && 0 < hi(i, n, t) != 0 < hi(i, n, e)
    }
    function pi(t, e) {
        return hi(t.prev, t, t.next) < 0 ? 0 <= hi(t, e, t.next) && 0 <= hi(t, t.prev, e) : hi(t, e, t.prev) < 0 || hi(t, t.next, e) < 0
    }
    function di(t, e) {
        var i = new gi(t.i,t.x,t.y)
          , n = new gi(e.i,e.x,e.y)
          , r = t.next
          , a = e.prev;
        return (t.next = e).prev = t,
        (i.next = r).prev = i,
        (n.next = i).prev = n,
        (a.next = n).prev = a,
        n
    }
    function fi(t, e, i, n) {
        return t = new gi(t,e,i),
        n ? (t.next = n.next,
        (t.prev = n).next.prev = t,
        n.next = t) : (t.prev = t).next = t,
        t
    }
    function mi(t) {
        t.next.prev = t.prev,
        t.prev.next = t.next,
        t.prevZ && (t.prevZ.nextZ = t.nextZ),
        t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }
    function gi(t, e, i) {
        this.i = t,
        this.x = e,
        this.y = i,
        this.nextZ = this.prevZ = this.z = this.next = this.prev = null,
        this.steiner = !1
    }
    function vi(t) {
        var e = t.length;
        2 < e && t[e - 1].equals(t[0]) && t.pop()
    }
    function yi(t, e) {
        for (var i = 0; i < e.length; i++)
            t.push(e[i].x),
            t.push(e[i].y)
    }
    function xi(t, e) {
        E.call(this),
        this.type = "ExtrudeGeometry",
        this.parameters = {
            shapes: t,
            options: e
        },
        this.fromBufferGeometry(new bi(t,e)),
        this.mergeVertices()
    }
    function bi(t, H) {
        function e(t) {
            function e(t, e, i) {
                return e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
                e.clone().multiplyScalar(i).add(t)
            }
            function i(t, e, i) {
                var n = t.x - e.x
                  , r = t.y - e.y
                  , a = i.x - t.x
                  , o = i.y - t.y
                  , s = n * n + r * r;
                if (Math.abs(n * o - r * a) > Number.EPSILON) {
                    var c = Math.sqrt(s)
                      , h = Math.sqrt(a * a + o * o);
                    if (s = e.x - r / c,
                    e = e.y + n / c,
                    (r = (a = s + n * (o = ((i.x - o / h - s) * o - (i.y + a / h - e) * a) / (n * o - r * a)) - t.x) * a + (n = e + r * o - t.y) * n) <= 2)
                        return new W(a,n);
                    r = Math.sqrt(r / 2)
                } else
                    t = !1,
                    n > Number.EPSILON ? a > Number.EPSILON && (t = !0) : n < -Number.EPSILON ? a < -Number.EPSILON && (t = !0) : Math.sign(r) === Math.sign(o) && (t = !0),
                    r = t ? (a = -r,
                    Math.sqrt(s)) : (a = n,
                    n = r,
                    Math.sqrt(s / 2));
                return new W(a / r,n / r)
            }
            function n(t, e) {
                for (N = t.length; 0 <= --N; ) {
                    var i = N
                      , n = N - 1;
                    n < 0 && (n = t.length - 1);
                    var r, a = p + 2 * m;
                    for (r = 0; r < a; r++) {
                        var o = I * r
                          , s = I * (r + 1)
                          , c = e + n + o
                          , h = e + n + s;
                        s = e + i + s,
                        l(e + i + o),
                        l(c),
                        l(s),
                        l(c),
                        l(h),
                        l(s),
                        o = k.length / 3,
                        u((o = v.generateSideWallUV(V, k, o - 6, o - 3, o - 2, o - 1))[0]),
                        u(o[1]),
                        u(o[3]),
                        u(o[1]),
                        u(o[2]),
                        u(o[3])
                    }
                }
            }
            function r(t, e, i) {
                o.push(t),
                o.push(e),
                o.push(i)
            }
            function a(t, e, i) {
                l(t),
                l(e),
                l(i),
                t = k.length / 3,
                u((t = v.generateTopUV(V, k, t - 3, t - 2, t - 1))[0]),
                u(t[1]),
                u(t[2])
            }
            function l(t) {
                k.push(o[3 * t]),
                k.push(o[3 * t + 1]),
                k.push(o[3 * t + 2])
            }
            function u(t) {
                j.push(t.x),
                j.push(t.y)
            }
            var o = []
              , s = void 0 !== H.curveSegments ? H.curveSegments : 12
              , p = void 0 !== H.steps ? H.steps : 1
              , c = void 0 !== H.depth ? H.depth : 100
              , h = void 0 === H.bevelEnabled || H.bevelEnabled
              , d = void 0 !== H.bevelThickness ? H.bevelThickness : 6
              , f = void 0 !== H.bevelSize ? H.bevelSize : d - 2
              , m = void 0 !== H.bevelSegments ? H.bevelSegments : 3
              , g = H.extrudePath
              , v = void 0 !== H.UVGenerator ? H.UVGenerator : Rs;
            void 0 !== H.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),
            c = H.amount);
            var y, x = !1;
            if (g) {
                var b = g.getSpacedPoints(p);
                h = !(x = !0);
                var _ = g.computeFrenetFrames(p, !1)
                  , w = new Mt
                  , M = new Mt
                  , E = new Mt
            }
            h || (f = d = m = 0),
            t = (s = t.extractPoints(s)).shape;
            var T = s.holes;
            if (!Ls.isClockWise(t)) {
                t = t.reverse();
                var S = 0;
                for (y = T.length; S < y; S++) {
                    var A = T[S];
                    Ls.isClockWise(A) && (T[S] = A.reverse())
                }
            }
            var L = Ls.triangulateShape(t, T)
              , R = t;
            for (S = 0,
            y = T.length; S < y; S++)
                A = T[S],
                t = t.concat(A);
            var P, C, I = t.length, O = L.length;
            s = [];
            var N = 0
              , D = R.length
              , U = D - 1;
            for (P = N + 1; N < D; N++,
            U++,
            P++)
                U === D && (U = 0),
                P === D && (P = 0),
                s[N] = i(R[N], R[U], R[P]);
            g = [];
            var B = s.concat();
            for (S = 0,
            y = T.length; S < y; S++) {
                A = T[S];
                var F = [];
                for (N = 0,
                U = (D = A.length) - 1,
                P = N + 1; N < D; N++,
                U++,
                P++)
                    U === D && (U = 0),
                    P === D && (P = 0),
                    F[N] = i(A[N], A[U], A[P]);
                g.push(F),
                B = B.concat(F)
            }
            for (U = 0; U < m; U++) {
                D = U / m;
                var z = d * Math.cos(D * Math.PI / 2);
                for (P = f * Math.sin(D * Math.PI / 2),
                N = 0,
                D = R.length; N < D; N++) {
                    var G = e(R[N], s[N], P);
                    r(G.x, G.y, -z)
                }
                for (S = 0,
                y = T.length; S < y; S++)
                    for (A = T[S],
                    F = g[S],
                    N = 0,
                    D = A.length; N < D; N++)
                        r((G = e(A[N], F[N], P)).x, G.y, -z)
            }
            for (P = f,
            N = 0; N < I; N++)
                G = h ? e(t[N], B[N], P) : t[N],
                x ? (M.copy(_.normals[0]).multiplyScalar(G.x),
                w.copy(_.binormals[0]).multiplyScalar(G.y),
                E.copy(b[0]).add(M).add(w),
                r(E.x, E.y, E.z)) : r(G.x, G.y, 0);
            for (D = 1; D <= p; D++)
                for (N = 0; N < I; N++)
                    G = h ? e(t[N], B[N], P) : t[N],
                    x ? (M.copy(_.normals[D]).multiplyScalar(G.x),
                    w.copy(_.binormals[D]).multiplyScalar(G.y),
                    E.copy(b[D]).add(M).add(w),
                    r(E.x, E.y, E.z)) : r(G.x, G.y, c / p * D);
            for (U = m - 1; 0 <= U; U--) {
                for (D = U / m,
                z = d * Math.cos(D * Math.PI / 2),
                P = f * Math.sin(D * Math.PI / 2),
                N = 0,
                D = R.length; N < D; N++)
                    r((G = e(R[N], s[N], P)).x, G.y, c + z);
                for (S = 0,
                y = T.length; S < y; S++)
                    for (A = T[S],
                    F = g[S],
                    N = 0,
                    D = A.length; N < D; N++)
                        G = e(A[N], F[N], P),
                        x ? r(G.x, G.y + b[p - 1].y, b[p - 1].x + z) : r(G.x, G.y, c + z)
            }
            !function() {
                var t = k.length / 3;
                if (h) {
                    var e = 0 * I;
                    for (N = 0; N < O; N++)
                        a((C = L[N])[2] + e, C[1] + e, C[0] + e);
                    for (e = I * (p + 2 * m),
                    N = 0; N < O; N++)
                        a((C = L[N])[0] + e, C[1] + e, C[2] + e)
                } else {
                    for (N = 0; N < O; N++)
                        a((C = L[N])[2], C[1], C[0]);
                    for (N = 0; N < O; N++)
                        a((C = L[N])[0] + I * p, C[1] + I * p, C[2] + I * p)
                }
                V.addGroup(t, k.length / 3 - t, 0)
            }(),
            function() {
                var t = k.length / 3
                  , e = 0;
                for (n(R, e),
                e += R.length,
                S = 0,
                y = T.length; S < y; S++)
                    n(A = T[S], e),
                    e += A.length;
                V.addGroup(t, k.length / 3 - t, 1)
            }()
        }
        P.call(this),
        this.type = "ExtrudeBufferGeometry",
        this.parameters = {
            shapes: t,
            options: H
        },
        t = Array.isArray(t) ? t : [t];
        for (var V = this, k = [], j = [], i = 0, n = t.length; i < n; i++)
            e(t[i]);
        this.addAttribute("position", new R(k,3)),
        this.addAttribute("uv", new R(j,2)),
        this.computeVertexNormals()
    }
    function _i(t, e, i) {
        if (i.shapes = [],
        Array.isArray(t))
            for (var n = 0, r = t.length; n < r; n++)
                i.shapes.push(t[n].uuid);
        else
            i.shapes.push(t.uuid);
        return void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()),
        i
    }
    function wi(t, e) {
        E.call(this),
        this.type = "TextGeometry",
        this.parameters = {
            text: t,
            parameters: e
        },
        this.fromBufferGeometry(new Mi(t,e)),
        this.mergeVertices()
    }
    function Mi(t, e) {
        var i = (e = e || {}).font;
        if (!i || !i.isFont)
            return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
            new E;
        t = i.generateShapes(t, e.size),
        e.depth = void 0 !== e.height ? e.height : 50,
        void 0 === e.bevelThickness && (e.bevelThickness = 10),
        void 0 === e.bevelSize && (e.bevelSize = 8),
        void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
        bi.call(this, t, e),
        this.type = "TextBufferGeometry"
    }
    function Ei(t, e, i, n, r, a, o) {
        E.call(this),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        },
        this.fromBufferGeometry(new Ti(t,e,i,n,r,a,o)),
        this.mergeVertices()
    }
    function Ti(t, e, i, n, r, a, o) {
        P.call(this),
        this.type = "SphereBufferGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        },
        t = t || 1,
        e = Math.max(3, Math.floor(e) || 8),
        i = Math.max(2, Math.floor(i) || 6),
        n = void 0 !== n ? n : 0,
        r = void 0 !== r ? r : 2 * Math.PI;
        var s, c, h = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI), l = 0, u = [], p = new Mt, d = new Mt, f = [], m = [], g = [], v = [];
        for (c = 0; c <= i; c++) {
            var y = []
              , x = c / i;
            for (s = 0; s <= e; s++) {
                var b = s / e;
                p.x = -t * Math.cos(n + b * r) * Math.sin(a + x * o),
                p.y = t * Math.cos(a + x * o),
                p.z = t * Math.sin(n + b * r) * Math.sin(a + x * o),
                m.push(p.x, p.y, p.z),
                d.set(p.x, p.y, p.z).normalize(),
                g.push(d.x, d.y, d.z),
                v.push(b, 1 - x),
                y.push(l++)
            }
            u.push(y)
        }
        for (c = 0; c < i; c++)
            for (s = 0; s < e; s++)
                t = u[c][s + 1],
                n = u[c][s],
                r = u[c + 1][s],
                o = u[c + 1][s + 1],
                (0 !== c || 0 < a) && f.push(t, n, o),
                (c !== i - 1 || h < Math.PI) && f.push(n, r, o);
        this.setIndex(f),
        this.addAttribute("position", new R(m,3)),
        this.addAttribute("normal", new R(g,3)),
        this.addAttribute("uv", new R(v,2))
    }
    function Si(t, e, i, n, r, a) {
        E.call(this),
        this.type = "RingGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a
        },
        this.fromBufferGeometry(new Ai(t,e,i,n,r,a)),
        this.mergeVertices()
    }
    function Ai(t, e, i, n, r, a) {
        P.call(this),
        this.type = "RingBufferGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a
        },
        t = t || .5,
        e = e || 1,
        r = void 0 !== r ? r : 0,
        a = void 0 !== a ? a : 2 * Math.PI,
        i = void 0 !== i ? Math.max(3, i) : 8;
        var o, s, c = [], h = [], l = [], u = [], p = t, d = (e - t) / (n = void 0 !== n ? Math.max(1, n) : 1), f = new Mt, m = new W;
        for (o = 0; o <= n; o++) {
            for (s = 0; s <= i; s++)
                t = r + s / i * a,
                f.x = p * Math.cos(t),
                f.y = p * Math.sin(t),
                h.push(f.x, f.y, f.z),
                l.push(0, 0, 1),
                m.x = (f.x / e + 1) / 2,
                m.y = (f.y / e + 1) / 2,
                u.push(m.x, m.y);
            p += d
        }
        for (o = 0; o < n; o++)
            for (e = o * (i + 1),
            s = 0; s < i; s++)
                r = (t = s + e) + i + 1,
                a = t + i + 2,
                p = t + 1,
                c.push(t, r, p),
                c.push(r, a, p);
        this.setIndex(c),
        this.addAttribute("position", new R(h,3)),
        this.addAttribute("normal", new R(l,3)),
        this.addAttribute("uv", new R(u,2))
    }
    function Li(t, e, i, n) {
        E.call(this),
        this.type = "LatheGeometry",
        this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n
        },
        this.fromBufferGeometry(new Ri(t,e,i,n)),
        this.mergeVertices()
    }
    function Ri(t, e, i, n) {
        P.call(this),
        this.type = "LatheBufferGeometry",
        this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n
        },
        e = Math.floor(e) || 12,
        i = i || 0,
        n = n || 2 * Math.PI,
        n = fa.clamp(n, 0, 2 * Math.PI);
        var r, a = [], o = [], s = [], c = 1 / e, h = new Mt, l = new W;
        for (r = 0; r <= e; r++) {
            var u = i + r * c * n
              , p = Math.sin(u)
              , d = Math.cos(u);
            for (u = 0; u <= t.length - 1; u++)
                h.x = t[u].x * p,
                h.y = t[u].y,
                h.z = t[u].x * d,
                o.push(h.x, h.y, h.z),
                l.x = r / e,
                l.y = u / (t.length - 1),
                s.push(l.x, l.y)
        }
        for (r = 0; r < e; r++)
            for (u = 0; u < t.length - 1; u++)
                c = (i = u + r * t.length) + t.length,
                h = i + t.length + 1,
                l = i + 1,
                a.push(i, c, l),
                a.push(c, h, l);
        if (this.setIndex(a),
        this.addAttribute("position", new R(o,3)),
        this.addAttribute("uv", new R(s,2)),
        this.computeVertexNormals(),
        n === 2 * Math.PI)
            for (n = this.attributes.normal.array,
            a = new Mt,
            o = new Mt,
            s = new Mt,
            i = e * t.length * 3,
            u = r = 0; r < t.length; r++,
            u += 3)
                a.x = n[u + 0],
                a.y = n[u + 1],
                a.z = n[u + 2],
                o.x = n[i + u + 0],
                o.y = n[i + u + 1],
                o.z = n[i + u + 2],
                s.addVectors(a, o).normalize(),
                n[u + 0] = n[i + u + 0] = s.x,
                n[u + 1] = n[i + u + 1] = s.y,
                n[u + 2] = n[i + u + 2] = s.z
    }
    function Pi(t, e) {
        E.call(this),
        this.type = "ShapeGeometry",
        "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."),
        e = e.curveSegments),
        this.parameters = {
            shapes: t,
            curveSegments: e
        },
        this.fromBufferGeometry(new Ci(t,e)),
        this.mergeVertices()
    }
    function Ci(t, s) {
        function e(t) {
            var e, i = h.length / 3, n = (t = t.extractPoints(s)).shape, r = t.holes;
            if (!1 === Ls.isClockWise(n))
                for (n = n.reverse(),
                t = 0,
                e = r.length; t < e; t++) {
                    var a = r[t];
                    !0 === Ls.isClockWise(a) && (r[t] = a.reverse())
                }
            var o = Ls.triangulateShape(n, r);
            for (t = 0,
            e = r.length; t < e; t++)
                a = r[t],
                n = n.concat(a);
            for (t = 0,
            e = n.length; t < e; t++)
                a = n[t],
                h.push(a.x, a.y, 0),
                l.push(0, 0, 1),
                u.push(a.x, a.y);
            for (t = 0,
            e = o.length; t < e; t++)
                n = o[t],
                c.push(n[0] + i, n[1] + i, n[2] + i),
                p += 3
        }
        P.call(this),
        this.type = "ShapeBufferGeometry",
        this.parameters = {
            shapes: t,
            curveSegments: s
        },
        s = s || 12;
        var c = []
          , h = []
          , l = []
          , u = []
          , i = 0
          , p = 0;
        if (!1 === Array.isArray(t))
            e(t);
        else
            for (var n = 0; n < t.length; n++)
                e(t[n]),
                this.addGroup(i, p, n),
                i += p,
                p = 0;
        this.setIndex(c),
        this.addAttribute("position", new R(h,3)),
        this.addAttribute("normal", new R(l,3)),
        this.addAttribute("uv", new R(u,2))
    }
    function Ii(t, e) {
        if (e.shapes = [],
        Array.isArray(t))
            for (var i = 0, n = t.length; i < n; i++)
                e.shapes.push(t[i].uuid);
        else
            e.shapes.push(t.uuid);
        return e
    }
    function Oi(t, e) {
        P.call(this),
        this.type = "EdgesGeometry",
        this.parameters = {
            thresholdAngle: e
        };
        var i = [];
        e = Math.cos(fa.DEG2RAD * (void 0 !== e ? e : 1));
        var n = [0, 0]
          , r = {}
          , a = ["a", "b", "c"];
        if (t.isBufferGeometry) {
            var o = new E;
            o.fromBufferGeometry(t)
        } else
            o = t.clone();
        o.mergeVertices(),
        o.computeFaceNormals(),
        t = o.vertices;
        for (var s = 0, c = (o = o.faces).length; s < c; s++)
            for (var h = o[s], l = 0; l < 3; l++) {
                var u = h[a[l]]
                  , p = h[a[(l + 1) % 3]];
                n[0] = Math.min(u, p),
                n[1] = Math.max(u, p),
                void 0 === r[u = n[0] + "," + n[1]] ? r[u] = {
                    index1: n[0],
                    index2: n[1],
                    face1: s,
                    face2: void 0
                } : r[u].face2 = s
            }
        for (u in r)
            (void 0 === (n = r[u]).face2 || o[n.face1].normal.dot(o[n.face2].normal) <= e) && (a = t[n.index1],
            i.push(a.x, a.y, a.z),
            a = t[n.index2],
            i.push(a.x, a.y, a.z));
        this.addAttribute("position", new R(i,3))
    }
    function Ni(t, e, i, n, r, a, o, s) {
        E.call(this),
        this.type = "CylinderGeometry",
        this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        },
        this.fromBufferGeometry(new Di(t,e,i,n,r,a,o,s)),
        this.mergeVertices()
    }
    function Di(p, d, f, m, g, t, v, y) {
        function e(t) {
            var e, i = new W, n = new Mt, r = 0, a = !0 === t ? p : d, o = !0 === t ? 1 : -1, s = E;
            for (e = 1; e <= m; e++)
                _.push(0, S * o, 0),
                w.push(0, o, 0),
                M.push(.5, .5),
                E++;
            var c = E;
            for (e = 0; e <= m; e++) {
                var h = e / m * y + v
                  , l = Math.cos(h);
                h = Math.sin(h),
                n.x = a * h,
                n.y = S * o,
                n.z = a * l,
                _.push(n.x, n.y, n.z),
                w.push(0, o, 0),
                i.x = .5 * l + .5,
                i.y = .5 * h * o + .5,
                M.push(i.x, i.y),
                E++
            }
            for (e = 0; e < m; e++)
                i = s + e,
                n = c + e,
                !0 === t ? b.push(n, n + 1, i) : b.push(n + 1, n, i),
                r += 3;
            x.addGroup(A, r, !0 === t ? 1 : 2),
            A += r
        }
        P.call(this),
        this.type = "CylinderBufferGeometry",
        this.parameters = {
            radiusTop: p,
            radiusBottom: d,
            height: f,
            radialSegments: m,
            heightSegments: g,
            openEnded: t,
            thetaStart: v,
            thetaLength: y
        };
        var x = this;
        p = void 0 !== p ? p : 1,
        d = void 0 !== d ? d : 1,
        f = f || 1,
        m = Math.floor(m) || 8,
        g = Math.floor(g) || 1,
        t = void 0 !== t && t,
        v = void 0 !== v ? v : 0,
        y = void 0 !== y ? y : 2 * Math.PI;
        var b = []
          , _ = []
          , w = []
          , M = []
          , E = 0
          , T = []
          , S = f / 2
          , A = 0;
        !function() {
            var t, e, i = new Mt, n = new Mt, r = 0, a = (d - p) / f;
            for (e = 0; e <= g; e++) {
                var o = []
                  , s = e / g
                  , c = s * (d - p) + p;
                for (t = 0; t <= m; t++) {
                    var h = t / m
                      , l = h * y + v
                      , u = Math.sin(l);
                    l = Math.cos(l),
                    n.x = c * u,
                    n.y = -s * f + S,
                    n.z = c * l,
                    _.push(n.x, n.y, n.z),
                    i.set(u, a, l).normalize(),
                    w.push(i.x, i.y, i.z),
                    M.push(h, 1 - s),
                    o.push(E++)
                }
                T.push(o)
            }
            for (t = 0; t < m; t++)
                for (e = 0; e < g; e++)
                    i = T[e + 1][t],
                    n = T[e + 1][t + 1],
                    a = T[e][t + 1],
                    b.push(T[e][t], i, a),
                    b.push(i, n, a),
                    r += 6;
            x.addGroup(A, r, 0),
            A += r
        }(),
        !1 === t && (0 < p && e(!0),
        0 < d && e(!1)),
        this.setIndex(b),
        this.addAttribute("position", new R(_,3)),
        this.addAttribute("normal", new R(w,3)),
        this.addAttribute("uv", new R(M,2))
    }
    function Ui(t, e, i, n, r, a, o) {
        Ni.call(this, 0, t, e, i, n, r, a, o),
        this.type = "ConeGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }
    function Bi(t, e, i, n, r, a, o) {
        Di.call(this, 0, t, e, i, n, r, a, o),
        this.type = "ConeBufferGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }
    function Fi(t, e, i, n) {
        E.call(this),
        this.type = "CircleGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n
        },
        this.fromBufferGeometry(new zi(t,e,i,n)),
        this.mergeVertices()
    }
    function zi(t, e, i, n) {
        P.call(this),
        this.type = "CircleBufferGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n
        },
        t = t || 1,
        e = void 0 !== e ? Math.max(3, e) : 8,
        i = void 0 !== i ? i : 0,
        n = void 0 !== n ? n : 2 * Math.PI;
        var r, a = [], o = [], s = [], c = [], h = new Mt, l = new W;
        o.push(0, 0, 0),
        s.push(0, 0, 1),
        c.push(.5, .5);
        var u = 0;
        for (r = 3; u <= e; u++,
        r += 3) {
            var p = i + u / e * n;
            h.x = t * Math.cos(p),
            h.y = t * Math.sin(p),
            o.push(h.x, h.y, h.z),
            s.push(0, 0, 1),
            l.x = (o[r] / t + 1) / 2,
            l.y = (o[r + 1] / t + 1) / 2,
            c.push(l.x, l.y)
        }
        for (r = 1; r <= e; r++)
            a.push(r, r + 1, 0);
        this.setIndex(a),
        this.addAttribute("position", new R(o,3)),
        this.addAttribute("normal", new R(s,3)),
        this.addAttribute("uv", new R(c,2))
    }
    function Gi(t) {
        I.call(this),
        this.type = "ShadowMaterial",
        this.color = new M(0),
        this.transparent = !0,
        this.setValues(t)
    }
    function Hi(t) {
        O.call(this, t),
        this.type = "RawShaderMaterial"
    }
    function Vi(t) {
        I.call(this),
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new M(16777215),
        this.metalness = this.roughness = .5,
        this.lightMap = this.map = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new M(0),
        this.emissiveIntensity = 1,
        this.bumpMap = this.emissiveMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new W(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null,
        this.envMapIntensity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinejoin = this.wireframeLinecap = "round",
        this.morphNormals = this.morphTargets = this.skinning = !1,
        this.setValues(t)
    }
    function ki(t) {
        Vi.call(this),
        this.defines = {
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.reflectivity = .5,
        this.clearCoatRoughness = this.clearCoat = 0,
        this.setValues(t)
    }
    function ji(t) {
        I.call(this),
        this.type = "MeshPhongMaterial",
        this.color = new M(16777215),
        this.specular = new M(1118481),
        this.shininess = 30,
        this.lightMap = this.map = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new M(0),
        this.emissiveIntensity = 1,
        this.bumpMap = this.emissiveMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new W(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.envMap = this.alphaMap = this.specularMap = null,
        this.combine = 0,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinejoin = this.wireframeLinecap = "round",
        this.morphNormals = this.morphTargets = this.skinning = !1,
        this.setValues(t)
    }
    function Wi(t) {
        ji.call(this),
        this.defines = {
            TOON: ""
        },
        this.type = "MeshToonMaterial",
        this.gradientMap = null,
        this.setValues(t)
    }
    function Xi(t) {
        I.call(this),
        this.type = "MeshNormalMaterial",
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new W(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.morphNormals = this.morphTargets = this.skinning = this.lights = this.fog = !1,
        this.setValues(t)
    }
    function qi(t) {
        I.call(this),
        this.type = "MeshLambertMaterial",
        this.color = new M(16777215),
        this.lightMap = this.map = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new M(0),
        this.emissiveIntensity = 1,
        this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null,
        this.combine = 0,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinejoin = this.wireframeLinecap = "round",
        this.morphNormals = this.morphTargets = this.skinning = !1,
        this.setValues(t)
    }
    function Yi(t) {
        if (I.call(this),
        this.defines = {
            MATCAP: ""
        },
        this.type = "MeshMatcapMaterial",
        this.color = new M(16777215),
        this.bumpMap = this.map = this.matcap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new W(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.alphaMap = null,
        this.lights = this.morphNormals = this.morphTargets = this.skinning = !1,
        this.setValues(t),
        null === this.matcap) {
            (t = document.createElement("canvas")).width = 1,
            t.height = 1;
            var e = t.getContext("2d");
            e.fillStyle = "#fff",
            e.fillRect(0, 0, 1, 1),
            this.matcap = new THREE.CanvasTexture(t)
        }
    }
    function Ji(t) {
        Ae.call(this),
        this.type = "LineDashedMaterial",
        this.scale = 1,
        this.dashSize = 3,
        this.gapSize = 1,
        this.setValues(t)
    }
    function Zi(t, e, i) {
        var n = this
          , r = !1
          , a = 0
          , o = 0
          , s = void 0;
        this.onStart = void 0,
        this.onLoad = t,
        this.onProgress = e,
        this.onError = i,
        this.itemStart = function(t) {
            o++,
            !1 === r && void 0 !== n.onStart && n.onStart(t, a, o),
            r = !0
        }
        ,
        this.itemEnd = function(t) {
            a++,
            void 0 !== n.onProgress && n.onProgress(t, a, o),
            a === o && (r = !1,
            void 0 !== n.onLoad) && n.onLoad()
        }
        ,
        this.itemError = function(t) {
            void 0 !== n.onError && n.onError(t)
        }
        ,
        this.resolveURL = function(t) {
            return s ? s(t) : t
        }
        ,
        this.setURLModifier = function(t) {
            return s = t,
            this
        }
    }
    function Qi(t) {
        this.manager = void 0 !== t ? t : Os
    }
    function Ki(t) {
        this.manager = void 0 !== t ? t : Os,
        this._parser = null
    }
    function $i(t) {
        this.manager = void 0 !== t ? t : Os,
        this._parser = null
    }
    function tn(t) {
        this.manager = void 0 !== t ? t : Os
    }
    function en(t) {
        this.manager = void 0 !== t ? t : Os
    }
    function nn(t) {
        this.manager = void 0 !== t ? t : Os
    }
    function rn() {
        this.type = "Curve",
        this.arcLengthDivisions = 200
    }
    function an(t, e, i, n, r, a, o, s) {
        rn.call(this),
        this.type = "EllipseCurve",
        this.aX = t || 0,
        this.aY = e || 0,
        this.xRadius = i || 1,
        this.yRadius = n || 1,
        this.aStartAngle = r || 0,
        this.aEndAngle = a || 2 * Math.PI,
        this.aClockwise = o || !1,
        this.aRotation = s || 0
    }
    function on(t, e, i, n, r, a) {
        an.call(this, t, e, i, i, n, r, a),
        this.type = "ArcCurve"
    }
    function sn() {
        var s = 0
          , c = 0
          , h = 0
          , l = 0;
        return {
            initCatmullRom: function(t, e, i, n, r) {
                h = -3 * (s = e) + 3 * i - 2 * (c = t = r * (i - t)) - (n = r * (n - e)),
                l = 2 * e - 2 * i + t + n
            },
            initNonuniformCatmullRom: function(t, e, i, n, r, a, o) {
                h = -3 * (s = e) + 3 * i - 2 * (c = t = ((e - t) / r - (i - t) / (r + a) + (i - e) / a) * a) - (n = ((i - e) / a - (n - e) / (a + o) + (n - i) / o) * a),
                l = 2 * e - 2 * i + t + n
            },
            calc: function(t) {
                var e = t * t;
                return s + c * t + h * e + l * e * t
            }
        }
    }
    function cn(t, e, i, n) {
        rn.call(this),
        this.type = "CatmullRomCurve3",
        this.points = t || [],
        this.closed = e || !1,
        this.curveType = i || "centripetal",
        this.tension = n || .5
    }
    function hn(t, e, i, n, r) {
        var a = t * t;
        return (2 * i - 2 * n + (e = .5 * (n - e)) + (r = .5 * (r - i))) * t * a + (-3 * i + 3 * n - 2 * e - r) * a + e * t + i
    }
    function ln(t, e, i, n) {
        var r = 1 - t;
        return r * r * e + 2 * (1 - t) * t * i + t * t * n
    }
    function un(t, e, i, n, r) {
        var a = 1 - t
          , o = 1 - t;
        return a * a * a * e + 3 * o * o * t * i + 3 * (1 - t) * t * t * n + t * t * t * r
    }
    function pn(t, e, i, n) {
        rn.call(this),
        this.type = "CubicBezierCurve",
        this.v0 = t || new W,
        this.v1 = e || new W,
        this.v2 = i || new W,
        this.v3 = n || new W
    }
    function dn(t, e, i, n) {
        rn.call(this),
        this.type = "CubicBezierCurve3",
        this.v0 = t || new Mt,
        this.v1 = e || new Mt,
        this.v2 = i || new Mt,
        this.v3 = n || new Mt
    }
    function fn(t, e) {
        rn.call(this),
        this.type = "LineCurve",
        this.v1 = t || new W,
        this.v2 = e || new W
    }
    function mn(t, e) {
        rn.call(this),
        this.type = "LineCurve3",
        this.v1 = t || new Mt,
        this.v2 = e || new Mt
    }
    function gn(t, e, i) {
        rn.call(this),
        this.type = "QuadraticBezierCurve",
        this.v0 = t || new W,
        this.v1 = e || new W,
        this.v2 = i || new W
    }
    function vn(t, e, i) {
        rn.call(this),
        this.type = "QuadraticBezierCurve3",
        this.v0 = t || new Mt,
        this.v1 = e || new Mt,
        this.v2 = i || new Mt
    }
    function yn(t) {
        rn.call(this),
        this.type = "SplineCurve",
        this.points = t || []
    }
    function xn() {
        rn.call(this),
        this.type = "CurvePath",
        this.curves = [],
        this.autoClose = !1
    }
    function bn(t) {
        xn.call(this),
        this.type = "Path",
        this.currentPoint = new W,
        t && this.setFromPoints(t)
    }
    function _n(t) {
        bn.call(this, t),
        this.uuid = fa.generateUUID(),
        this.type = "Shape",
        this.holes = []
    }
    function wn(t, e) {
        l.call(this),
        this.type = "Light",
        this.color = new M(t),
        this.intensity = void 0 !== e ? e : 1,
        this.receiveShadow = void 0
    }
    function Mn(t, e, i) {
        wn.call(this, t, i),
        this.type = "HemisphereLight",
        this.castShadow = void 0,
        this.position.copy(l.DefaultUp),
        this.updateMatrix(),
        this.groundColor = new M(e)
    }
    function En(t) {
        this.camera = t,
        this.bias = 0,
        this.radius = 1,
        this.mapSize = new W(512,512),
        this.map = null,
        this.matrix = new wt
    }
    function Tn() {
        En.call(this, new ue(50,1,.5,500))
    }
    function Sn(t, e, i, n, r, a) {
        wn.call(this, t, e),
        this.type = "SpotLight",
        this.position.copy(l.DefaultUp),
        this.updateMatrix(),
        this.target = new l,
        Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / Math.PI
            }
        }),
        this.distance = void 0 !== i ? i : 0,
        this.angle = void 0 !== n ? n : Math.PI / 3,
        this.penumbra = void 0 !== r ? r : 0,
        this.decay = void 0 !== a ? a : 1,
        this.shadow = new Tn
    }
    function An(t, e, i, n) {
        wn.call(this, t, e),
        this.type = "PointLight",
        Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / (4 * Math.PI)
            }
        }),
        this.distance = void 0 !== i ? i : 0,
        this.decay = void 0 !== n ? n : 1,
        this.shadow = new En(new ue(90,1,.5,500))
    }
    function Ln(t, e, i, n, r, a) {
        le.call(this),
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = t,
        this.right = e,
        this.top = i,
        this.bottom = n,
        this.near = void 0 !== r ? r : .1,
        this.far = void 0 !== a ? a : 2e3,
        this.updateProjectionMatrix()
    }
    function Rn() {
        En.call(this, new Ln(-5,5,5,-5,.5,500))
    }
    function Pn(t, e) {
        wn.call(this, t, e),
        this.type = "DirectionalLight",
        this.position.copy(l.DefaultUp),
        this.updateMatrix(),
        this.target = new l,
        this.shadow = new Rn
    }
    function Cn(t, e) {
        wn.call(this, t, e),
        this.type = "AmbientLight",
        this.castShadow = void 0
    }
    function In(t, e, i, n) {
        wn.call(this, t, e),
        this.type = "RectAreaLight",
        this.width = void 0 !== i ? i : 10,
        this.height = void 0 !== n ? n : 10
    }
    function On(t, e, i, n) {
        this.parameterPositions = t,
        this._cachedIndex = 0,
        this.resultBuffer = void 0 !== n ? n : new e.constructor(i),
        this.sampleValues = e,
        this.valueSize = i
    }
    function Nn(t, e, i, n) {
        On.call(this, t, e, i, n),
        this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0
    }
    function Dn(t, e, i, n) {
        On.call(this, t, e, i, n)
    }
    function Un(t, e, i, n) {
        On.call(this, t, e, i, n)
    }
    function Bn(t, e, i, n) {
        if (void 0 === t)
            throw Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length)
            throw Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t,
        this.times = Gs.convertArray(e, this.TimeBufferType),
        this.values = Gs.convertArray(i, this.ValueBufferType),
        this.setInterpolation(n || this.DefaultInterpolation)
    }
    function Fn(t, e, i) {
        Bn.call(this, t, e, i)
    }
    function zn(t, e, i, n) {
        Bn.call(this, t, e, i, n)
    }
    function Gn(t, e, i, n) {
        Bn.call(this, t, e, i, n)
    }
    function Hn(t, e, i, n) {
        On.call(this, t, e, i, n)
    }
    function Vn(t, e, i, n) {
        Bn.call(this, t, e, i, n)
    }
    function kn(t, e, i, n) {
        Bn.call(this, t, e, i, n)
    }
    function jn(t, e, i, n) {
        Bn.call(this, t, e, i, n)
    }
    function Wn(t, e, i) {
        this.name = t,
        this.tracks = i,
        this.duration = void 0 !== e ? e : -1,
        this.uuid = fa.generateUUID(),
        this.duration < 0 && this.resetDuration()
    }
    function Xn(t) {
        if (void 0 === t.type)
            throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
        var e = function(t) {
            switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return Gn;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return jn;
            case "color":
                return zn;
            case "quaternion":
                return Vn;
            case "bool":
            case "boolean":
                return Fn;
            case "string":
                return kn
            }
            throw Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
        }(t.type);
        if (void 0 === t.times) {
            var i = []
              , n = [];
            Gs.flattenJSON(t.keys, i, n, "value"),
            t.times = i,
            t.values = n
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name,t.times,t.values,t.interpolation)
    }
    function qn(t) {
        this.manager = void 0 !== t ? t : Os,
        this.textures = {}
    }
    function Yn(t) {
        this.manager = void 0 !== t ? t : Os
    }
    function Jn() {}
    function Zn(t) {
        "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
        t = void 0),
        this.manager = void 0 !== t ? t : Os,
        this.withCredentials = !1
    }
    function Qn(t) {
        this.manager = void 0 !== t ? t : Os,
        this.texturePath = ""
    }
    function Kn(t) {
        "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),
        "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        this.manager = void 0 !== t ? t : Os,
        this.options = void 0
    }
    function $n() {
        this.type = "ShapePath",
        this.color = new M,
        this.subPaths = [],
        this.currentPath = null
    }
    function tr(t) {
        this.type = "Font",
        this.data = t
    }
    function er(t) {
        this.manager = void 0 !== t ? t : Os
    }
    function ir(t) {
        this.manager = void 0 !== t ? t : Os
    }
    function nr() {
        this.type = "StereoCamera",
        this.aspect = 1,
        this.eyeSep = .064,
        this.cameraL = new ue,
        this.cameraL.layers.enable(1),
        this.cameraL.matrixAutoUpdate = !1,
        this.cameraR = new ue,
        this.cameraR.layers.enable(2),
        this.cameraR.matrixAutoUpdate = !1
    }
    function rr(t, e, i) {
        l.call(this),
        this.type = "CubeCamera";
        var r = new ue(90,1,t,e);
        r.up.set(0, -1, 0),
        r.lookAt(new Mt(1,0,0)),
        this.add(r);
        var a = new ue(90,1,t,e);
        a.up.set(0, -1, 0),
        a.lookAt(new Mt(-1,0,0)),
        this.add(a);
        var o = new ue(90,1,t,e);
        o.up.set(0, 0, 1),
        o.lookAt(new Mt(0,1,0)),
        this.add(o);
        var s = new ue(90,1,t,e);
        s.up.set(0, 0, -1),
        s.lookAt(new Mt(0,-1,0)),
        this.add(s);
        var c = new ue(90,1,t,e);
        c.up.set(0, -1, 0),
        c.lookAt(new Mt(0,0,1)),
        this.add(c);
        var h = new ue(90,1,t,e);
        h.up.set(0, -1, 0),
        h.lookAt(new Mt(0,0,-1)),
        this.add(h),
        this.renderTarget = new n(i,i,{
            format: 1022,
            magFilter: 1006,
            minFilter: 1006
        }),
        this.renderTarget.texture.name = "CubeCamera",
        this.update = function(t, e) {
            null === this.parent && this.updateMatrixWorld();
            var i = this.renderTarget
              , n = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1,
            i.activeCubeFace = 0,
            t.render(e, r, i),
            i.activeCubeFace = 1,
            t.render(e, a, i),
            i.activeCubeFace = 2,
            t.render(e, o, i),
            i.activeCubeFace = 3,
            t.render(e, s, i),
            i.activeCubeFace = 4,
            t.render(e, c, i),
            i.texture.generateMipmaps = n,
            i.activeCubeFace = 5,
            t.render(e, h, i),
            t.setRenderTarget(null)
        }
        ,
        this.clear = function(t, e, i, n) {
            for (var r = this.renderTarget, a = 0; a < 6; a++)
                r.activeCubeFace = a,
                t.setRenderTarget(r),
                t.clear(e, i, n);
            t.setRenderTarget(null)
        }
    }
    function ar() {
        l.call(this),
        this.type = "AudioListener",
        this.context = kc.getContext(),
        this.gain = this.context.createGain(),
        this.gain.connect(this.context.destination),
        this.filter = null
    }
    function or(t) {
        l.call(this),
        this.type = "Audio",
        this.context = t.context,
        this.gain = this.context.createGain(),
        this.gain.connect(t.getInput()),
        this.autoplay = !1,
        this.buffer = null,
        this.loop = !1,
        this.offset = this.startTime = 0,
        this.playbackRate = 1,
        this.isPlaying = !1,
        this.hasPlaybackControl = !0,
        this.sourceType = "empty",
        this.filters = []
    }
    function sr(t) {
        or.call(this, t),
        this.panner = this.context.createPanner(),
        this.panner.connect(this.gain)
    }
    function cr(t, e) {
        this.analyser = t.context.createAnalyser(),
        this.analyser.fftSize = void 0 !== e ? e : 2048,
        this.data = new Uint8Array(this.analyser.frequencyBinCount),
        t.getOutput().connect(this.analyser)
    }
    function hr(t, e, i) {
        switch (this.binding = t,
        this.valueSize = i,
        t = Float64Array,
        e) {
        case "quaternion":
            e = this._slerp;
            break;
        case "string":
        case "bool":
            t = Array,
            e = this._select;
            break;
        default:
            e = this._lerp
        }
        this.buffer = new t(4 * i),
        this._mixBufferRegion = e,
        this.referenceCount = this.useCount = this.cumulativeWeight = 0
    }
    function lr(t, e, i) {
        i = i || ur.parseTrackName(e),
        this._targetGroup = t,
        this._bindings = t.subscribe_(e, i)
    }
    function ur(t, e, i) {
        this.path = e,
        this.parsedPath = i || ur.parseTrackName(e),
        this.node = ur.findNode(t, this.parsedPath.nodeName) || t,
        this.rootNode = t
    }
    function pr() {
        this.uuid = fa.generateUUID(),
        this._objects = Array.prototype.slice.call(arguments),
        this.nCachedObjects_ = 0;
        var t = {};
        this._indicesByUUID = t;
        for (var e = 0, i = arguments.length; e !== i; ++e)
            t[arguments[e].uuid] = e;
        this._paths = [],
        this._parsedPaths = [],
        this._bindings = [],
        this._bindingsIndicesByPath = {};
        var n = this;
        this.stats = {
            objects: {
                get total() {
                    return n._objects.length
                },
                get inUse() {
                    return this.total - n.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return n._bindings.length
            }
        }
    }
    function dr(t, e, i) {
        this._mixer = t,
        this._clip = e,
        this._localRoot = i || null,
        e = (t = e.tracks).length,
        i = Array(e);
        for (var n = {
            endingStart: 2400,
            endingEnd: 2400
        }, r = 0; r !== e; ++r) {
            var a = t[r].createInterpolant(null);
            (i[r] = a).settings = n
        }
        this._interpolantSettings = n,
        this._interpolants = i,
        this._propertyBindings = Array(e),
        this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null,
        this.loop = 2201,
        this._loopCount = -1,
        this._startTime = null,
        this.time = 0,
        this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1,
        this.repetitions = 1 / 0,
        this.paused = !1,
        this.enabled = !0,
        this.clampWhenFinished = !1,
        this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
    }
    function fr(t) {
        this._root = t,
        this._initMemoryManager(),
        this.time = this._accuIndex = 0,
        this.timeScale = 1
    }
    function mr(t, e) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
        t = e),
        this.value = t
    }
    function gr() {
        P.call(this),
        this.type = "InstancedBufferGeometry",
        this.maxInstancedCount = void 0
    }
    function vr(t, e, i) {
        xe.call(this, t, e),
        this.meshPerAttribute = i || 1
    }
    function yr(t, e, i, n) {
        "number" == typeof i && (n = i,
        i = !1,
        console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),
        f.call(this, t, e, i),
        this.meshPerAttribute = n || 1
    }
    function xr(t, e, i, n) {
        this.ray = new B(t,e),
        this.near = i || 0,
        this.far = n || 1 / 0,
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        },
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                    this.Points
                }
            }
        })
    }
    function br(t, e) {
        return t.distance - e.distance
    }
    function _r(t, e, i, n) {
        if (!1 !== t.visible && (t.raycast(e, i),
        !0 === n)) {
            n = 0;
            for (var r = (t = t.children).length; n < r; n++)
                _r(t[n], e, i, !0)
        }
    }
    function wr(t) {
        this.autoStart = void 0 === t || t,
        this.elapsedTime = this.oldTime = this.startTime = 0,
        this.running = !1
    }
    function Mr(t, e, i) {
        return this.radius = void 0 !== t ? t : 1,
        this.phi = void 0 !== e ? e : 0,
        this.theta = void 0 !== i ? i : 0,
        this
    }
    function Er(t, e, i) {
        return this.radius = void 0 !== t ? t : 1,
        this.theta = void 0 !== e ? e : 0,
        this.y = void 0 !== i ? i : 0,
        this
    }
    function Tr(t, e) {
        this.min = void 0 !== t ? t : new W(1 / 0,1 / 0),
        this.max = void 0 !== e ? e : new W(-1 / 0,-1 / 0)
    }
    function Sr(t, e) {
        this.start = void 0 !== t ? t : new Mt,
        this.end = void 0 !== e ? e : new Mt
    }
    function Ar(t) {
        l.call(this),
        this.material = t,
        this.render = function() {}
    }
    function Lr(t, e, i, n) {
        this.object = t,
        this.size = void 0 !== e ? e : 1,
        t = void 0 !== i ? i : 16711680,
        n = void 0 !== n ? n : 1,
        e = 0,
        (i = this.object.geometry) && i.isGeometry ? e = 3 * i.faces.length : i && i.isBufferGeometry && (e = i.attributes.normal.count),
        i = new P,
        e = new R(6 * e,3),
        i.addAttribute("position", e),
        Re.call(this, i, new Ae({
            color: t,
            linewidth: n
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function Rr(t, e) {
        l.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = e,
        t = new P,
        e = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
        for (var i = 0, n = 1; i < 32; i++,
        n++) {
            var r = i / 32 * Math.PI * 2
              , a = n / 32 * Math.PI * 2;
            e.push(Math.cos(r), Math.sin(r), 1, Math.cos(a), Math.sin(a), 1)
        }
        t.addAttribute("position", new R(e,3)),
        e = new Ae({
            fog: !1
        }),
        this.cone = new Re(t,e),
        this.add(this.cone),
        this.update()
    }
    function Pr(t) {
        for (var e = function t(e) {
            var i = [];
            e && e.isBone && i.push(e);
            for (var n = 0; n < e.children.length; n++)
                i.push.apply(i, t(e.children[n]));
            return i
        }(t), i = new P, n = [], r = [], a = new M(0,0,1), o = new M(0,1,0), s = 0; s < e.length; s++) {
            var c = e[s];
            c.parent && c.parent.isBone && (n.push(0, 0, 0),
            n.push(0, 0, 0),
            r.push(a.r, a.g, a.b),
            r.push(o.r, o.g, o.b))
        }
        i.addAttribute("position", new R(n,3)),
        i.addAttribute("color", new R(r,3)),
        n = new Ae({
            vertexColors: 2,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }),
        Re.call(this, i, n),
        this.root = t,
        this.bones = e,
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1
    }
    function Cr(t, e, i) {
        this.light = t,
        this.light.updateMatrixWorld(),
        this.color = i,
        t = new Ti(e,4,2),
        e = new N({
            wireframe: !0,
            fog: !1
        }),
        D.call(this, t, e),
        this.matrix = this.light.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function Ir(t, e) {
        l.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = e,
        t = new Ae({
            fog: !1
        }),
        (e = new P).addAttribute("position", new f(new Float32Array(15),3)),
        this.line = new Le(e,t),
        this.add(this.line),
        this.update()
    }
    function Or(t, e, i) {
        l.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = i,
        (t = new We(e)).rotateY(.5 * Math.PI),
        this.material = new N({
            wireframe: !0,
            fog: !1
        }),
        void 0 === this.color && (this.material.vertexColors = 2),
        e = t.getAttribute("position"),
        e = new Float32Array(3 * e.count),
        t.addAttribute("color", new f(e,3)),
        this.add(new D(t,this.material)),
        this.update()
    }
    function Nr(t, e, i, n) {
        t = t || 10,
        e = e || 10,
        i = new M(void 0 !== i ? i : 4473924),
        n = new M(void 0 !== n ? n : 8947848);
        var r = e / 2
          , a = t / e
          , o = t / 2;
        t = [];
        for (var s = [], c = 0, h = 0, l = -o; c <= e; c++,
        l += a) {
            t.push(-o, 0, l, o, 0, l),
            t.push(l, 0, -o, l, 0, o);
            var u = c === r ? i : n;
            u.toArray(s, h),
            h += 3,
            u.toArray(s, h),
            h += 3,
            u.toArray(s, h),
            h += 3,
            u.toArray(s, h),
            h += 3
        }
        (e = new P).addAttribute("position", new R(t,3)),
        e.addAttribute("color", new R(s,3)),
        i = new Ae({
            vertexColors: 2
        }),
        Re.call(this, e, i)
    }
    function Dr(t, e, i, n, r, a) {
        t = t || 10,
        e = e || 16,
        i = i || 8,
        n = n || 64,
        r = new M(void 0 !== r ? r : 4473924),
        a = new M(void 0 !== a ? a : 8947848);
        var o, s = [], c = [];
        for (o = 0; o <= e; o++) {
            var h = o / e * 2 * Math.PI
              , l = Math.sin(h) * t;
            h = Math.cos(h) * t,
            s.push(0, 0, 0),
            s.push(l, 0, h);
            var u = 1 & o ? r : a;
            c.push(u.r, u.g, u.b),
            c.push(u.r, u.g, u.b)
        }
        for (o = 0; o <= i; o++) {
            u = 1 & o ? r : a;
            var p = t - t / i * o;
            for (e = 0; e < n; e++)
                h = e / n * 2 * Math.PI,
                l = Math.sin(h) * p,
                h = Math.cos(h) * p,
                s.push(l, 0, h),
                c.push(u.r, u.g, u.b),
                h = (e + 1) / n * 2 * Math.PI,
                l = Math.sin(h) * p,
                h = Math.cos(h) * p,
                s.push(l, 0, h),
                c.push(u.r, u.g, u.b)
        }
        (t = new P).addAttribute("position", new R(s,3)),
        t.addAttribute("color", new R(c,3)),
        s = new Ae({
            vertexColors: 2
        }),
        Re.call(this, t, s)
    }
    function Ur(t, e, i, n) {
        this.object = t,
        this.size = void 0 !== e ? e : 1,
        t = void 0 !== i ? i : 16776960,
        n = void 0 !== n ? n : 1,
        e = 0,
        (i = this.object.geometry) && i.isGeometry ? e = i.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."),
        i = new P,
        e = new R(6 * e,3),
        i.addAttribute("position", e),
        Re.call(this, i, new Ae({
            color: t,
            linewidth: n
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function Br(t, e, i) {
        l.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = i,
        void 0 === e && (e = 1),
        (t = new P).addAttribute("position", new R([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0],3)),
        e = new Ae({
            fog: !1
        }),
        this.lightPlane = new Le(t,e),
        this.add(this.lightPlane),
        (t = new P).addAttribute("position", new R([0, 0, 0, 0, 0, 1],3)),
        this.targetLine = new Le(t,e),
        this.add(this.targetLine),
        this.update()
    }
    function Fr(t) {
        function e(t, e, i) {
            n(t, i),
            n(e, i)
        }
        function n(t, e) {
            a.push(0, 0, 0),
            o.push(e.r, e.g, e.b),
            void 0 === s[t] && (s[t] = []),
            s[t].push(a.length / 3 - 1)
        }
        var i = new P
          , r = new Ae({
            color: 16777215,
            vertexColors: 1
        })
          , a = []
          , o = []
          , s = {}
          , c = new M(16755200)
          , h = new M(16711680)
          , l = new M(43775)
          , u = new M(16777215)
          , p = new M(3355443);
        e("n1", "n2", c),
        e("n2", "n4", c),
        e("n4", "n3", c),
        e("n3", "n1", c),
        e("f1", "f2", c),
        e("f2", "f4", c),
        e("f4", "f3", c),
        e("f3", "f1", c),
        e("n1", "f1", c),
        e("n2", "f2", c),
        e("n3", "f3", c),
        e("n4", "f4", c),
        e("p", "n1", h),
        e("p", "n2", h),
        e("p", "n3", h),
        e("p", "n4", h),
        e("u1", "u2", l),
        e("u2", "u3", l),
        e("u3", "u1", l),
        e("c", "t", u),
        e("p", "c", p),
        e("cn1", "cn2", p),
        e("cn3", "cn4", p),
        e("cf1", "cf2", p),
        e("cf3", "cf4", p),
        i.addAttribute("position", new R(a,3)),
        i.addAttribute("color", new R(o,3)),
        Re.call(this, i, r),
        this.camera = t,
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.pointMap = s,
        this.update()
    }
    function zr(t, e) {
        this.object = t,
        void 0 === e && (e = 16776960),
        t = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
        var i = new Float32Array(24)
          , n = new P;
        n.setIndex(new f(t,1)),
        n.addAttribute("position", new f(i,3)),
        Re.call(this, n, new Ae({
            color: e
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function Gr(t, e) {
        this.type = "Box3Helper",
        this.box = t,
        t = void 0 !== e ? e : 16776960,
        e = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
        var i = new P;
        i.setIndex(new f(e,1)),
        i.addAttribute("position", new R([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],3)),
        Re.call(this, i, new Ae({
            color: t
        })),
        this.geometry.computeBoundingSphere()
    }
    function Hr(t, e, i) {
        this.type = "PlaneHelper",
        this.plane = t,
        this.size = void 0 === e ? 1 : e,
        t = void 0 !== i ? i : 16776960,
        (e = new P).addAttribute("position", new R([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],3)),
        e.computeBoundingSphere(),
        Le.call(this, e, new Ae({
            color: t
        })),
        (e = new P).addAttribute("position", new R([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],3)),
        e.computeBoundingSphere(),
        this.add(new D(e,new N({
            color: t,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        })))
    }
    function Vr(t, e, i, n, r, a) {
        l.call(this),
        void 0 === n && (n = 16776960),
        void 0 === i && (i = 1),
        void 0 === r && (r = .2 * i),
        void 0 === a && (a = .2 * r),
        void 0 === Fc && ((Fc = new P).addAttribute("position", new R([0, 0, 0, 0, 1, 0],3)),
        (zc = new Di(0,.5,1,5,1)).translate(0, -.5, 0)),
        this.position.copy(e),
        this.line = new Le(Fc,new Ae({
            color: n
        })),
        this.line.matrixAutoUpdate = !1,
        this.add(this.line),
        this.cone = new D(zc,new N({
            color: n
        })),
        this.cone.matrixAutoUpdate = !1,
        this.add(this.cone),
        this.setDirection(t),
        this.setLength(i, r, a)
    }
    function kr(t) {
        var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t];
        (t = new P).addAttribute("position", new R(e,3)),
        t.addAttribute("color", new R([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],3)),
        e = new Ae({
            vertexColors: 2
        }),
        Re.call(this, t, e)
    }
    function jr(t) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),
        cn.call(this, t),
        this.type = "catmullrom",
        this.closed = !0
    }
    function Wr(t) {
        console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),
        cn.call(this, t),
        this.type = "catmullrom"
    }
    function Xr(t) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),
        cn.call(this, t),
        this.type = "catmullrom"
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
    void 0 === Number.isInteger && (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }
    ),
    void 0 === Math.sign && (Math.sign = function(t) {
        return t < 0 ? -1 : 0 < t ? 1 : +t
    }
    ),
    !1 == "name"in Function.prototype && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }),
    void 0 === Object.assign && (Object.assign = function(t) {
        if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var n = arguments[i];
            if (null != n)
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ),
    Object.assign(e.prototype, {
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var i = this._listeners;
            void 0 === i[t] && (i[t] = []),
            -1 === i[t].indexOf(e) && i[t].push(e)
        },
        hasEventListener: function(t, e) {
            if (void 0 === this._listeners)
                return !1;
            var i = this._listeners;
            return void 0 !== i[t] && -1 !== i[t].indexOf(e)
        },
        removeEventListener: function(t, e) {
            void 0 !== this._listeners && (void 0 !== (t = this._listeners[t]) && (-1 !== (e = t.indexOf(e)) && t.splice(e, 1)))
        },
        dispatchEvent: function(t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners[t.type];
                if (void 0 !== e) {
                    t.target = this;
                    for (var i = 0, n = (e = e.slice(0)).length; i < n; i++)
                        e[i].call(this, t)
                }
            }
        }
    });
    var qr, Yr, Jr, Zr, Qr, Kr, $r, ta, ea, ia, na, ra, aa, oa, sa, ca, ha, la, ua, pa, da, fa = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            for (var r = [], t = 0; t < 256; t++)
                r[t] = (t < 16 ? "0" : "") + t.toString(16);
            return function() {
                var t = 4294967295 * Math.random() | 0
                  , e = 4294967295 * Math.random() | 0
                  , i = 4294967295 * Math.random() | 0
                  , n = 4294967295 * Math.random() | 0;
                return (r[255 & t] + r[t >> 8 & 255] + r[t >> 16 & 255] + r[t >> 24 & 255] + "-" + r[255 & e] + r[e >> 8 & 255] + "-" + r[e >> 16 & 15 | 64] + r[e >> 24 & 255] + "-" + r[63 & i | 128] + r[i >> 8 & 255] + "-" + r[i >> 16 & 255] + r[i >> 24 & 255] + r[255 & n] + r[n >> 8 & 255] + r[n >> 16 & 255] + r[n >> 24 & 255]).toUpperCase()
            }
        }(),
        clamp: function(t, e, i) {
            return Math.max(e, Math.min(i, t))
        },
        euclideanModulo: function(t, e) {
            return (t % e + e) % e
        },
        mapLinear: function(t, e, i, n, r) {
            return n + (t - e) * (r - n) / (i - e)
        },
        lerp: function(t, e, i) {
            return (1 - i) * t + i * e
        },
        smoothstep: function(t, e, i) {
            return t <= e ? 0 : i <= t ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
        },
        smootherstep: function(t, e, i) {
            return t <= e ? 0 : i <= t ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random())
        },
        degToRad: function(t) {
            return t * fa.DEG2RAD
        },
        radToDeg: function(t) {
            return t * fa.RAD2DEG
        },
        isPowerOfTwo: function(t) {
            return 0 == (t & t - 1) && 0 !== t
        },
        ceilPowerOfTwo: function(t) {
            return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
        },
        floorPowerOfTwo: function(t) {
            return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
        }
    };
    Object.defineProperties(W.prototype, {
        width: {
            get: function() {
                return this.x
            },
            set: function(t) {
                this.x = t
            }
        },
        height: {
            get: function() {
                return this.y
            },
            set: function(t) {
                this.y = t
            }
        }
    }),
    Object.assign(W.prototype, {
        isVector2: !0,
        set: function(t, e) {
            return this.x = t,
            this.y = e,
            this
        },
        setScalar: function(t) {
            return this.y = this.x = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this
        },
        multiply: function(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this
        },
        multiplyScalar: function(t) {
            return this.x *= t,
            this.y *= t,
            this
        },
        divide: function(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        applyMatrix3: function(t) {
            var e = this.x
              , i = this.y;
            return t = t.elements,
            this.x = t[0] * e + t[3] * i + t[6],
            this.y = t[1] * e + t[4] * i + t[7],
            this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this
        },
        clampScalar: (qr = new W,
        Yr = new W,
        function(t, e) {
            return qr.set(t, t),
            Yr.set(e, e),
            this.clamp(qr, Yr)
        }
        ),
        clampLength: function(t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        cross: function(t) {
            return this.x * t.y - this.y * t.x
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        angle: function() {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI),
            t
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x;
            return e * e + (t = this.y - t.y) * t
        },
        manhattanDistanceTo: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this
        },
        lerpVectors: function(t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t
        },
        fromBufferAttribute: function(t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this
        },
        rotateAround: function(t, e) {
            var i = Math.cos(e);
            e = Math.sin(e);
            var n = this.x - t.x
              , r = this.y - t.y;
            return this.x = n * i - r * e + t.x,
            this.y = n * e + r * i + t.y,
            this
        }
    }),
    Object.assign(wt.prototype, {
        isMatrix4: !0,
        set: function(t, e, i, n, r, a, o, s, c, h, l, u, p, d, f, m) {
            var g = this.elements;
            return g[0] = t,
            g[4] = e,
            g[8] = i,
            g[12] = n,
            g[1] = r,
            g[5] = a,
            g[9] = o,
            g[13] = s,
            g[2] = c,
            g[6] = h,
            g[10] = l,
            g[14] = u,
            g[3] = p,
            g[7] = d,
            g[11] = f,
            g[15] = m,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new wt).fromArray(this.elements)
        },
        copy: function(t) {
            var e = this.elements;
            return t = t.elements,
            e[0] = t[0],
            e[1] = t[1],
            e[2] = t[2],
            e[3] = t[3],
            e[4] = t[4],
            e[5] = t[5],
            e[6] = t[6],
            e[7] = t[7],
            e[8] = t[8],
            e[9] = t[9],
            e[10] = t[10],
            e[11] = t[11],
            e[12] = t[12],
            e[13] = t[13],
            e[14] = t[14],
            e[15] = t[15],
            this
        },
        copyPosition: function(t) {
            var e = this.elements;
            return t = t.elements,
            e[12] = t[12],
            e[13] = t[13],
            e[14] = t[14],
            this
        },
        extractBasis: function(t, e, i) {
            return t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            i.setFromMatrixColumn(this, 2),
            this
        },
        makeBasis: function(t, e, i) {
            return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1),
            this
        },
        extractRotation: (na = new Mt,
        function(t) {
            var e = this.elements
              , i = t.elements
              , n = 1 / na.setFromMatrixColumn(t, 0).length()
              , r = 1 / na.setFromMatrixColumn(t, 1).length();
            return t = 1 / na.setFromMatrixColumn(t, 2).length(),
            e[0] = i[0] * n,
            e[1] = i[1] * n,
            e[2] = i[2] * n,
            e[3] = 0,
            e[4] = i[4] * r,
            e[5] = i[5] * r,
            e[6] = i[6] * r,
            e[7] = 0,
            e[8] = i[8] * t,
            e[9] = i[9] * t,
            e[10] = i[10] * t,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        }
        ),
        makeRotationFromEuler: function(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements
              , i = t.x
              , n = t.y
              , r = t.z
              , a = Math.cos(i);
            i = Math.sin(i);
            var o = Math.cos(n);
            n = Math.sin(n);
            var s = Math.cos(r);
            if (r = Math.sin(r),
            "XYZ" === t.order) {
                t = a * s;
                var c = a * r
                  , h = i * s
                  , l = i * r;
                e[0] = o * s,
                e[4] = -o * r,
                e[8] = n,
                e[1] = c + h * n,
                e[5] = t - l * n,
                e[9] = -i * o,
                e[2] = l - t * n,
                e[6] = h + c * n,
                e[10] = a * o
            } else
                "YXZ" === t.order ? (t = o * s,
                c = o * r,
                h = n * s,
                l = n * r,
                e[0] = t + l * i,
                e[4] = h * i - c,
                e[8] = a * n,
                e[1] = a * r,
                e[5] = a * s,
                e[9] = -i,
                e[2] = c * i - h,
                e[6] = l + t * i,
                e[10] = a * o) : "ZXY" === t.order ? (t = o * s,
                c = o * r,
                h = n * s,
                l = n * r,
                e[0] = t - l * i,
                e[4] = -a * r,
                e[8] = h + c * i,
                e[1] = c + h * i,
                e[5] = a * s,
                e[9] = l - t * i,
                e[2] = -a * n,
                e[6] = i,
                e[10] = a * o) : "ZYX" === t.order ? (t = a * s,
                c = a * r,
                h = i * s,
                l = i * r,
                e[0] = o * s,
                e[4] = h * n - c,
                e[8] = t * n + l,
                e[1] = o * r,
                e[5] = l * n + t,
                e[9] = c * n - h,
                e[2] = -n,
                e[6] = i * o,
                e[10] = a * o) : "YZX" === t.order ? (t = a * o,
                c = a * n,
                h = i * o,
                l = i * n,
                e[0] = o * s,
                e[4] = l - t * r,
                e[8] = h * r + c,
                e[1] = r,
                e[5] = a * s,
                e[9] = -i * s,
                e[2] = -n * s,
                e[6] = c * r + h,
                e[10] = t - l * r) : "XZY" === t.order && (t = a * o,
                c = a * n,
                h = i * o,
                l = i * n,
                e[0] = o * s,
                e[4] = -r,
                e[8] = n * s,
                e[1] = t * r + l,
                e[5] = a * s,
                e[9] = c * r - h,
                e[2] = h * r - c,
                e[6] = i * s,
                e[10] = l * r + t);
            return e[3] = 0,
            e[7] = 0,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        },
        makeRotationFromQuaternion: (ea = new Mt(0,0,0),
        ia = new Mt(1,1,1),
        function(t) {
            return this.compose(ea, t, ia)
        }
        ),
        lookAt: (Kr = new Mt,
        $r = new Mt,
        ta = new Mt,
        function(t, e, i) {
            var n = this.elements;
            return ta.subVectors(t, e),
            0 === ta.lengthSq() && (ta.z = 1),
            ta.normalize(),
            Kr.crossVectors(i, ta),
            0 === Kr.lengthSq() && (1 === Math.abs(i.z) ? ta.x += 1e-4 : ta.z += 1e-4,
            ta.normalize(),
            Kr.crossVectors(i, ta)),
            Kr.normalize(),
            $r.crossVectors(ta, Kr),
            n[0] = Kr.x,
            n[4] = $r.x,
            n[8] = ta.x,
            n[1] = Kr.y,
            n[5] = $r.y,
            n[9] = ta.y,
            n[2] = Kr.z,
            n[6] = $r.z,
            n[10] = ta.z,
            this
        }
        ),
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
            this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var i = t.elements
              , n = e.elements;
            e = this.elements,
            t = i[0];
            var r = i[4]
              , a = i[8]
              , o = i[12]
              , s = i[1]
              , c = i[5]
              , h = i[9]
              , l = i[13]
              , u = i[2]
              , p = i[6]
              , d = i[10]
              , f = i[14]
              , m = i[3]
              , g = i[7]
              , v = i[11];
            i = i[15];
            var y = n[0]
              , x = n[4]
              , b = n[8]
              , _ = n[12]
              , w = n[1]
              , M = n[5]
              , E = n[9]
              , T = n[13]
              , S = n[2]
              , A = n[6]
              , L = n[10]
              , R = n[14]
              , P = n[3]
              , C = n[7]
              , I = n[11];
            return n = n[15],
            e[0] = t * y + r * w + a * S + o * P,
            e[4] = t * x + r * M + a * A + o * C,
            e[8] = t * b + r * E + a * L + o * I,
            e[12] = t * _ + r * T + a * R + o * n,
            e[1] = s * y + c * w + h * S + l * P,
            e[5] = s * x + c * M + h * A + l * C,
            e[9] = s * b + c * E + h * L + l * I,
            e[13] = s * _ + c * T + h * R + l * n,
            e[2] = u * y + p * w + d * S + f * P,
            e[6] = u * x + p * M + d * A + f * C,
            e[10] = u * b + p * E + d * L + f * I,
            e[14] = u * _ + p * T + d * R + f * n,
            e[3] = m * y + g * w + v * S + i * P,
            e[7] = m * x + g * M + v * A + i * C,
            e[11] = m * b + g * E + v * L + i * I,
            e[15] = m * _ + g * T + v * R + i * n,
            this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t,
            e[4] *= t,
            e[8] *= t,
            e[12] *= t,
            e[1] *= t,
            e[5] *= t,
            e[9] *= t,
            e[13] *= t,
            e[2] *= t,
            e[6] *= t,
            e[10] *= t,
            e[14] *= t,
            e[3] *= t,
            e[7] *= t,
            e[11] *= t,
            e[15] *= t,
            this
        },
        applyToBufferAttribute: (Qr = new Mt,
        function(t) {
            for (var e = 0, i = t.count; e < i; e++)
                Qr.x = t.getX(e),
                Qr.y = t.getY(e),
                Qr.z = t.getZ(e),
                Qr.applyMatrix4(this),
                t.setXYZ(e, Qr.x, Qr.y, Qr.z);
            return t
        }
        ),
        determinant: function() {
            var t = this.elements
              , e = t[0]
              , i = t[4]
              , n = t[8]
              , r = t[12]
              , a = t[1]
              , o = t[5]
              , s = t[9]
              , c = t[13]
              , h = t[2]
              , l = t[6]
              , u = t[10]
              , p = t[14];
            return t[3] * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * p - i * s * p) + t[7] * (+e * s * p - e * c * u + r * a * u - n * a * p + n * c * h - r * s * h) + t[11] * (+e * c * l - e * o * p - r * a * l + i * a * p + r * o * h - i * c * h) + t[15] * (-n * o * h - e * s * l + e * o * u + n * a * l - i * a * u + i * s * h)
        },
        transpose: function() {
            var t = this.elements
              , e = t[1];
            return t[1] = t[4],
            t[4] = e,
            e = t[2],
            t[2] = t[8],
            t[8] = e,
            e = t[6],
            t[6] = t[9],
            t[9] = e,
            e = t[3],
            t[3] = t[12],
            t[12] = e,
            e = t[7],
            t[7] = t[13],
            t[13] = e,
            e = t[11],
            t[11] = t[14],
            t[14] = e,
            this
        },
        setPosition: function(t) {
            var e = this.elements;
            return e[12] = t.x,
            e[13] = t.y,
            e[14] = t.z,
            this
        },
        getInverse: function(t, e) {
            var i = this.elements
              , n = t.elements;
            t = n[0];
            var r = n[1]
              , a = n[2]
              , o = n[3]
              , s = n[4]
              , c = n[5]
              , h = n[6]
              , l = n[7]
              , u = n[8]
              , p = n[9]
              , d = n[10]
              , f = n[11]
              , m = n[12]
              , g = n[13]
              , v = n[14]
              , y = p * v * l - g * d * l + g * h * f - c * v * f - p * h * (n = n[15]) + c * d * n
              , x = m * d * l - u * v * l - m * h * f + s * v * f + u * h * n - s * d * n
              , b = u * g * l - m * p * l + m * c * f - s * g * f - u * c * n + s * p * n
              , _ = m * p * h - u * g * h - m * c * d + s * g * d + u * c * v - s * p * v
              , w = t * y + r * x + a * b + o * _;
            if (0 !== w)
                return e = 1 / w,
                i[0] = y * e,
                i[1] = (g * d * o - p * v * o - g * a * f + r * v * f + p * a * n - r * d * n) * e,
                i[2] = (c * v * o - g * h * o + g * a * l - r * v * l - c * a * n + r * h * n) * e,
                i[3] = (p * h * o - c * d * o - p * a * l + r * d * l + c * a * f - r * h * f) * e,
                i[4] = x * e,
                i[5] = (u * v * o - m * d * o + m * a * f - t * v * f - u * a * n + t * d * n) * e,
                i[6] = (m * h * o - s * v * o - m * a * l + t * v * l + s * a * n - t * h * n) * e,
                i[7] = (s * d * o - u * h * o + u * a * l - t * d * l - s * a * f + t * h * f) * e,
                i[8] = b * e,
                i[9] = (m * p * o - u * g * o - m * r * f + t * g * f + u * r * n - t * p * n) * e,
                i[10] = (s * g * o - m * c * o + m * r * l - t * g * l - s * r * n + t * c * n) * e,
                i[11] = (u * c * o - s * p * o - u * r * l + t * p * l + s * r * f - t * c * f) * e,
                i[12] = _ * e,
                i[13] = (u * g * a - m * p * a + m * r * d - t * g * d - u * r * v + t * p * v) * e,
                i[14] = (m * c * a - s * g * a - m * r * h + t * g * h + s * r * v - t * c * v) * e,
                i[15] = (s * p * a - u * c * a + u * r * h - t * p * h - s * r * d + t * c * d) * e,
                this;
            if (!0 === e)
                throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");
            return console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"),
            this.identity()
        },
        scale: function(t) {
            var e = this.elements
              , i = t.x
              , n = t.y;
            return t = t.z,
            e[0] *= i,
            e[4] *= n,
            e[8] *= t,
            e[1] *= i,
            e[5] *= n,
            e[9] *= t,
            e[2] *= i,
            e[6] *= n,
            e[10] *= t,
            e[3] *= i,
            e[7] *= n,
            e[11] *= t,
            this
        },
        getMaxScaleOnAxis: function() {
            var t = this.elements;
            return Math.sqrt(Math.max(t[0] * t[0] + t[1] * t[1] + t[2] * t[2], t[4] * t[4] + t[5] * t[5] + t[6] * t[6], t[8] * t[8] + t[9] * t[9] + t[10] * t[10]))
        },
        makeTranslation: function(t, e, i) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1),
            this
        },
        makeRotationX: function(t) {
            var e = Math.cos(t);
            return t = Math.sin(t),
            this.set(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1),
            this
        },
        makeRotationY: function(t) {
            var e = Math.cos(t);
            return t = Math.sin(t),
            this.set(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1),
            this
        },
        makeRotationZ: function(t) {
            var e = Math.cos(t);
            return t = Math.sin(t),
            this.set(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        makeRotationAxis: function(t, e) {
            var i = Math.cos(e);
            e = Math.sin(e);
            var n = 1 - i
              , r = t.x
              , a = t.y;
            t = t.z;
            var o = n * r
              , s = n * a;
            return this.set(o * r + i, o * a - e * t, o * t + e * a, 0, o * a + e * t, s * a + i, s * t - e * r, 0, o * t - e * a, s * t + e * r, n * t * t + i, 0, 0, 0, 0, 1),
            this
        },
        makeScale: function(t, e, i) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1),
            this
        },
        makeShear: function(t, e, i) {
            return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1),
            this
        },
        compose: function(t, e, i) {
            var n = this.elements
              , r = e._x
              , a = e._y
              , o = e._z
              , s = e._w
              , c = r + r
              , h = a + a
              , l = o + o;
            e = r * c;
            var u = r * h;
            r *= l;
            var p = a * h;
            a *= l,
            o *= l,
            c *= s,
            h *= s,
            s *= l,
            l = i.x;
            var d = i.y;
            return i = i.z,
            n[0] = (1 - (p + o)) * l,
            n[1] = (u + s) * l,
            n[2] = (r - h) * l,
            n[3] = 0,
            n[4] = (u - s) * d,
            n[5] = (1 - (e + o)) * d,
            n[6] = (a + c) * d,
            n[7] = 0,
            n[8] = (r + h) * i,
            n[9] = (a - c) * i,
            n[10] = (1 - (e + p)) * i,
            n[11] = 0,
            n[12] = t.x,
            n[13] = t.y,
            n[14] = t.z,
            n[15] = 1,
            this
        },
        decompose: (Jr = new Mt,
        Zr = new wt,
        function(t, e, i) {
            var n = this.elements
              , r = Jr.set(n[0], n[1], n[2]).length()
              , a = Jr.set(n[4], n[5], n[6]).length()
              , o = Jr.set(n[8], n[9], n[10]).length();
            this.determinant() < 0 && (r = -r),
            t.x = n[12],
            t.y = n[13],
            t.z = n[14],
            Zr.copy(this),
            t = 1 / r,
            n = 1 / a;
            var s = 1 / o;
            return Zr.elements[0] *= t,
            Zr.elements[1] *= t,
            Zr.elements[2] *= t,
            Zr.elements[4] *= n,
            Zr.elements[5] *= n,
            Zr.elements[6] *= n,
            Zr.elements[8] *= s,
            Zr.elements[9] *= s,
            Zr.elements[10] *= s,
            e.setFromRotationMatrix(Zr),
            i.x = r,
            i.y = a,
            i.z = o,
            this
        }
        ),
        makePerspective: function(t, e, i, n, r, a) {
            void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var o = this.elements;
            return o[0] = 2 * r / (e - t),
            o[4] = 0,
            o[8] = (e + t) / (e - t),
            o[12] = 0,
            o[1] = 0,
            o[5] = 2 * r / (i - n),
            o[9] = (i + n) / (i - n),
            o[13] = 0,
            o[2] = 0,
            o[6] = 0,
            o[10] = -(a + r) / (a - r),
            o[14] = -2 * a * r / (a - r),
            o[3] = 0,
            o[7] = 0,
            o[11] = -1,
            o[15] = 0,
            this
        },
        makeOrthographic: function(t, e, i, n, r, a) {
            var o = this.elements
              , s = 1 / (e - t)
              , c = 1 / (i - n)
              , h = 1 / (a - r);
            return o[0] = 2 * s,
            o[4] = 0,
            o[8] = 0,
            o[12] = -(e + t) * s,
            o[1] = 0,
            o[5] = 2 * c,
            o[9] = 0,
            o[13] = -(i + n) * c,
            o[2] = 0,
            o[6] = 0,
            o[10] = -2 * h,
            o[14] = -(a + r) * h,
            o[3] = 0,
            o[7] = 0,
            o[11] = 0,
            o[15] = 1,
            this
        },
        equals: function(t) {
            var e = this.elements;
            t = t.elements;
            for (var i = 0; i < 16; i++)
                if (e[i] !== t[i])
                    return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var i = 0; i < 16; i++)
                this.elements[i] = t[i + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0);
            var i = this.elements;
            return t[e] = i[0],
            t[e + 1] = i[1],
            t[e + 2] = i[2],
            t[e + 3] = i[3],
            t[e + 4] = i[4],
            t[e + 5] = i[5],
            t[e + 6] = i[6],
            t[e + 7] = i[7],
            t[e + 8] = i[8],
            t[e + 9] = i[9],
            t[e + 10] = i[10],
            t[e + 11] = i[11],
            t[e + 12] = i[12],
            t[e + 13] = i[13],
            t[e + 14] = i[14],
            t[e + 15] = i[15],
            t
        }
    }),
    Object.assign(w, {
        slerp: function(t, e, i, n) {
            return i.copy(t).slerp(e, n)
        },
        slerpFlat: function(t, e, i, n, r, a, o) {
            var s = i[n + 0]
              , c = i[n + 1]
              , h = i[n + 2];
            i = i[n + 3],
            n = r[a + 0];
            var l = r[a + 1]
              , u = r[a + 2];
            if (i !== (r = r[a + 3]) || s !== n || c !== l || h !== u) {
                a = 1 - o;
                var p = s * n + c * l + h * u + i * r
                  , d = 0 <= p ? 1 : -1
                  , f = 1 - p * p;
                f > Number.EPSILON && (f = Math.sqrt(f),
                p = Math.atan2(f, p * d),
                a = Math.sin(a * p) / f,
                o = Math.sin(o * p) / f),
                s = s * a + n * (d *= o),
                c = c * a + l * d,
                h = h * a + u * d,
                i = i * a + r * d,
                a === 1 - o && (s *= o = 1 / Math.sqrt(s * s + c * c + h * h + i * i),
                c *= o,
                h *= o,
                i *= o)
            }
            t[e] = s,
            t[e + 1] = c,
            t[e + 2] = h,
            t[e + 3] = i
        }
    }),
    Object.defineProperties(w.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = t,
                this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = t,
                this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(t) {
                this._z = t,
                this.onChangeCallback()
            }
        },
        w: {
            get: function() {
                return this._w
            },
            set: function(t) {
                this._w = t,
                this.onChangeCallback()
            }
        }
    }),
    Object.assign(w.prototype, {
        isQuaternion: !0,
        set: function(t, e, i, n) {
            return this._x = t,
            this._y = e,
            this._z = i,
            this._w = n,
            this.onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        },
        copy: function(t) {
            return this._x = t.x,
            this._y = t.y,
            this._z = t.z,
            this._w = t.w,
            this.onChangeCallback(),
            this
        },
        setFromEuler: function(t, e) {
            if (!t || !t.isEuler)
                throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var i = t._x
              , n = t._y
              , r = t._z;
            t = t.order;
            var a = Math.cos
              , o = Math.sin
              , s = a(i / 2)
              , c = a(n / 2);
            return a = a(r / 2),
            i = o(i / 2),
            n = o(n / 2),
            r = o(r / 2),
            "XYZ" === t ? (this._x = i * c * a + s * n * r,
            this._y = s * n * a - i * c * r,
            this._z = s * c * r + i * n * a,
            this._w = s * c * a - i * n * r) : "YXZ" === t ? (this._x = i * c * a + s * n * r,
            this._y = s * n * a - i * c * r,
            this._z = s * c * r - i * n * a,
            this._w = s * c * a + i * n * r) : "ZXY" === t ? (this._x = i * c * a - s * n * r,
            this._y = s * n * a + i * c * r,
            this._z = s * c * r + i * n * a,
            this._w = s * c * a - i * n * r) : "ZYX" === t ? (this._x = i * c * a - s * n * r,
            this._y = s * n * a + i * c * r,
            this._z = s * c * r - i * n * a,
            this._w = s * c * a + i * n * r) : "YZX" === t ? (this._x = i * c * a + s * n * r,
            this._y = s * n * a + i * c * r,
            this._z = s * c * r - i * n * a,
            this._w = s * c * a - i * n * r) : "XZY" === t && (this._x = i * c * a - s * n * r,
            this._y = s * n * a - i * c * r,
            this._z = s * c * r + i * n * a,
            this._w = s * c * a + i * n * r),
            !1 !== e && this.onChangeCallback(),
            this
        },
        setFromAxisAngle: function(t, e) {
            e /= 2;
            var i = Math.sin(e);
            return this._x = t.x * i,
            this._y = t.y * i,
            this._z = t.z * i,
            this._w = Math.cos(e),
            this.onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(t) {
            var e = t.elements
              , i = e[0];
            t = e[4];
            var n = e[8]
              , r = e[1]
              , a = e[5]
              , o = e[9]
              , s = e[2]
              , c = e[6]
              , h = i + a + (e = e[10]);
            return 0 < h ? (i = .5 / Math.sqrt(h + 1),
            this._w = .25 / i,
            this._x = (c - o) * i,
            this._y = (n - s) * i,
            this._z = (r - t) * i) : a < i && e < i ? (i = 2 * Math.sqrt(1 + i - a - e),
            this._w = (c - o) / i,
            this._x = .25 * i,
            this._y = (t + r) / i,
            this._z = (n + s) / i) : e < a ? (i = 2 * Math.sqrt(1 + a - i - e),
            this._w = (n - s) / i,
            this._x = (t + r) / i,
            this._y = .25 * i,
            this._z = (o + c) / i) : (i = 2 * Math.sqrt(1 + e - i - a),
            this._w = (r - t) / i,
            this._x = (n + s) / i,
            this._y = (o + c) / i,
            this._z = .25 * i),
            this.onChangeCallback(),
            this
        },
        setFromUnitVectors: (aa = new Mt,
        function(t, e) {
            return void 0 === aa && (aa = new Mt),
            (ra = t.dot(e) + 1) < 1e-6 ? (ra = 0,
            Math.abs(t.x) > Math.abs(t.z) ? aa.set(-t.y, t.x, 0) : aa.set(0, -t.z, t.y)) : aa.crossVectors(t, e),
            this._x = aa.x,
            this._y = aa.y,
            this._z = aa.z,
            this._w = ra,
            this.normalize()
        }
        ),
        angleTo: function(t) {
            return 2 * Math.acos(Math.abs(fa.clamp(this.dot(t), -1, 1)))
        },
        rotateTowards: function(t, e) {
            var i = this.angleTo(t);
            return 0 === i || this.slerp(t, Math.min(1, e / i)),
            this
        },
        inverse: function() {
            return this.conjugate()
        },
        conjugate: function() {
            return this._x *= -1,
            this._y *= -1,
            this._z *= -1,
            this.onChangeCallback(),
            this
        },
        dot: function(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var t = this.length();
            return 0 === t ? (this._z = this._y = this._x = 0,
            this._w = 1) : (t = 1 / t,
            this._x *= t,
            this._y *= t,
            this._z *= t,
            this._w *= t),
            this.onChangeCallback(),
            this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        },
        premultiply: function(t) {
            return this.multiplyQuaternions(t, this)
        },
        multiplyQuaternions: function(t, e) {
            var i = t._x
              , n = t._y
              , r = t._z;
            t = t._w;
            var a = e._x
              , o = e._y
              , s = e._z;
            return e = e._w,
            this._x = i * e + t * a + n * s - r * o,
            this._y = n * e + t * o + r * a - i * s,
            this._z = r * e + t * s + i * o - n * a,
            this._w = t * e - i * a - n * o - r * s,
            this.onChangeCallback(),
            this
        },
        slerp: function(t, e) {
            if (0 === e)
                return this;
            if (1 === e)
                return this.copy(t);
            var i = this._x
              , n = this._y
              , r = this._z
              , a = this._w
              , o = a * t._w + i * t._x + n * t._y + r * t._z;
            if (o < 0 ? (this._w = -t._w,
            this._x = -t._x,
            this._y = -t._y,
            this._z = -t._z,
            o = -o) : this.copy(t),
            1 <= o)
                return this._w = a,
                this._x = i,
                this._y = n,
                this._z = r,
                this;
            if ((t = 1 - o * o) <= Number.EPSILON)
                return o = 1 - e,
                this._w = o * a + e * this._w,
                this._x = o * i + e * this._x,
                this._y = o * n + e * this._y,
                this._z = o * r + e * this._z,
                this.normalize();
            t = Math.sqrt(t);
            var s = Math.atan2(t, o);
            return o = Math.sin((1 - e) * s) / t,
            e = Math.sin(e * s) / t,
            this._w = a * o + this._w * e,
            this._x = i * o + this._x * e,
            this._y = n * o + this._y * e,
            this._z = r * o + this._z * e,
            this.onChangeCallback(),
            this
        },
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this._x = t[e],
            this._y = t[e + 1],
            this._z = t[e + 2],
            this._w = t[e + 3],
            this.onChangeCallback(),
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._w,
            t
        },
        onChange: function(t) {
            return this.onChangeCallback = t,
            this
        },
        onChangeCallback: function() {}
    }),
    Object.assign(Mt.prototype, {
        isVector3: !0,
        set: function(t, e, i) {
            return this.x = t,
            this.y = e,
            this.z = i,
            this
        },
        setScalar: function(t) {
            return this.z = this.y = this.x = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setZ: function(t) {
            return this.z = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
            this.multiplyVectors(t, e)) : (this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this)
        },
        multiplyScalar: function(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this
        },
        multiplyVectors: function(t, e) {
            return this.x = t.x * e.x,
            this.y = t.y * e.y,
            this.z = t.z * e.z,
            this
        },
        applyEuler: (pa = new w,
        function(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
            this.applyQuaternion(pa.setFromEuler(t))
        }
        ),
        applyAxisAngle: (ua = new w,
        function(t, e) {
            return this.applyQuaternion(ua.setFromAxisAngle(t, e))
        }
        ),
        applyMatrix3: function(t) {
            var e = this.x
              , i = this.y
              , n = this.z;
            return t = t.elements,
            this.x = t[0] * e + t[3] * i + t[6] * n,
            this.y = t[1] * e + t[4] * i + t[7] * n,
            this.z = t[2] * e + t[5] * i + t[8] * n,
            this
        },
        applyMatrix4: function(t) {
            var e = this.x
              , i = this.y
              , n = this.z
              , r = 1 / ((t = t.elements)[3] * e + t[7] * i + t[11] * n + t[15]);
            return this.x = (t[0] * e + t[4] * i + t[8] * n + t[12]) * r,
            this.y = (t[1] * e + t[5] * i + t[9] * n + t[13]) * r,
            this.z = (t[2] * e + t[6] * i + t[10] * n + t[14]) * r,
            this
        },
        applyQuaternion: function(t) {
            var e = this.x
              , i = this.y
              , n = this.z
              , r = t.x
              , a = t.y
              , o = t.z
              , s = (t = t.w) * e + a * n - o * i
              , c = t * i + o * e - r * n
              , h = t * n + r * i - a * e;
            return e = -r * e - a * i - o * n,
            this.x = s * t + e * -r + c * -o - h * -a,
            this.y = c * t + e * -a + h * -r - s * -o,
            this.z = h * t + e * -o + s * -a - c * -r,
            this
        },
        project: function(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
        },
        unproject: (la = new wt,
        function(t) {
            return this.applyMatrix4(la.getInverse(t.projectionMatrix)).applyMatrix4(t.matrixWorld)
        }
        ),
        transformDirection: function(t) {
            var e = this.x
              , i = this.y
              , n = this.z;
            return t = t.elements,
            this.x = t[0] * e + t[4] * i + t[8] * n,
            this.y = t[1] * e + t[5] * i + t[9] * n,
            this.z = t[2] * e + t[6] * i + t[10] * n,
            this.normalize()
        },
        divide: function(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this.z /= t.z,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this
        },
        clampScalar: (ca = new Mt,
        ha = new Mt,
        function(t, e) {
            return ca.set(t, t, t),
            ha.set(e, e, e),
            this.clamp(ca, ha)
        }
        ),
        clampLength: function(t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this
        },
        lerpVectors: function(t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        cross: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(t, e)) : this.crossVectors(this, t)
        },
        crossVectors: function(t, e) {
            var i = t.x
              , n = t.y;
            t = t.z;
            var r = e.x
              , a = e.y;
            return e = e.z,
            this.x = n * e - t * a,
            this.y = t * r - i * e,
            this.z = i * a - n * r,
            this
        },
        projectOnVector: function(t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        },
        projectOnPlane: (sa = new Mt,
        function(t) {
            return sa.copy(this).projectOnVector(t),
            this.sub(sa)
        }
        ),
        reflect: (oa = new Mt,
        function(t) {
            return this.sub(oa.copy(t).multiplyScalar(2 * this.dot(t)))
        }
        ),
        angleTo: function(t) {
            return t = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq()),
            Math.acos(fa.clamp(t, -1, 1))
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x
              , i = this.y - t.y;
            return e * e + i * i + (t = this.z - t.z) * t
        },
        manhattanDistanceTo: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        },
        setFromSpherical: function(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
        },
        setFromSphericalCoords: function(t, e, i) {
            var n = Math.sin(e) * t;
            return this.x = n * Math.sin(i),
            this.y = Math.cos(e) * t,
            this.z = n * Math.cos(i),
            this
        },
        setFromCylindrical: function(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
        },
        setFromCylindricalCoords: function(t, e, i) {
            return this.x = t * Math.sin(e),
            this.y = i,
            this.z = t * Math.cos(e),
            this
        },
        setFromMatrixPosition: function(t) {
            return t = t.elements,
            this.x = t[12],
            this.y = t[13],
            this.z = t[14],
            this
        },
        setFromMatrixScale: function(t) {
            var e = this.setFromMatrixColumn(t, 0).length()
              , i = this.setFromMatrixColumn(t, 1).length();
            return t = this.setFromMatrixColumn(t, 2).length(),
            this.x = e,
            this.y = i,
            this.z = t,
            this
        },
        setFromMatrixColumn: function(t, e) {
            return this.fromArray(t.elements, 4 * e)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t
        },
        fromBufferAttribute: function(t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this
        }
    }),
    Object.assign(g.prototype, {
        isMatrix3: !0,
        set: function(t, e, i, n, r, a, o, s, c) {
            var h = this.elements;
            return h[0] = t,
            h[1] = n,
            h[2] = o,
            h[3] = e,
            h[4] = r,
            h[5] = s,
            h[6] = i,
            h[7] = a,
            h[8] = c,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(t) {
            var e = this.elements;
            return t = t.elements,
            e[0] = t[0],
            e[1] = t[1],
            e[2] = t[2],
            e[3] = t[3],
            e[4] = t[4],
            e[5] = t[5],
            e[6] = t[6],
            e[7] = t[7],
            e[8] = t[8],
            this
        },
        setFromMatrix4: function(t) {
            return t = t.elements,
            this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
            this
        },
        applyToBufferAttribute: (da = new Mt,
        function(t) {
            for (var e = 0, i = t.count; e < i; e++)
                da.x = t.getX(e),
                da.y = t.getY(e),
                da.z = t.getZ(e),
                da.applyMatrix3(this),
                t.setXYZ(e, da.x, da.y, da.z);
            return t
        }
        ),
        multiply: function(t) {
            return this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var i = t.elements
              , n = e.elements;
            e = this.elements,
            t = i[0];
            var r = i[3]
              , a = i[6]
              , o = i[1]
              , s = i[4]
              , c = i[7]
              , h = i[2]
              , l = i[5];
            i = i[8];
            var u = n[0]
              , p = n[3]
              , d = n[6]
              , f = n[1]
              , m = n[4]
              , g = n[7]
              , v = n[2]
              , y = n[5];
            return n = n[8],
            e[0] = t * u + r * f + a * v,
            e[3] = t * p + r * m + a * y,
            e[6] = t * d + r * g + a * n,
            e[1] = o * u + s * f + c * v,
            e[4] = o * p + s * m + c * y,
            e[7] = o * d + s * g + c * n,
            e[2] = h * u + l * f + i * v,
            e[5] = h * p + l * m + i * y,
            e[8] = h * d + l * g + i * n,
            this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t,
            e[3] *= t,
            e[6] *= t,
            e[1] *= t,
            e[4] *= t,
            e[7] *= t,
            e[2] *= t,
            e[5] *= t,
            e[8] *= t,
            this
        },
        determinant: function() {
            var t = this.elements
              , e = t[0]
              , i = t[1]
              , n = t[2]
              , r = t[3]
              , a = t[4]
              , o = t[5]
              , s = t[6]
              , c = t[7];
            return e * a * (t = t[8]) - e * o * c - i * r * t + i * o * s + n * r * c - n * a * s
        },
        getInverse: function(t, e) {
            t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
            var i = t.elements;
            t = this.elements;
            var n = i[0]
              , r = i[1]
              , a = i[2]
              , o = i[3]
              , s = i[4]
              , c = i[5]
              , h = i[6]
              , l = i[7]
              , u = (i = i[8]) * s - c * l
              , p = c * h - i * o
              , d = l * o - s * h
              , f = n * u + r * p + a * d;
            if (0 !== f)
                return e = 1 / f,
                t[0] = u * e,
                t[1] = (a * l - i * r) * e,
                t[2] = (c * r - a * s) * e,
                t[3] = p * e,
                t[4] = (i * n - a * h) * e,
                t[5] = (a * o - c * n) * e,
                t[6] = d * e,
                t[7] = (r * h - l * n) * e,
                t[8] = (s * n - r * o) * e,
                this;
            if (!0 === e)
                throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
            return console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"),
            this.identity()
        },
        transpose: function() {
            var t = this.elements
              , e = t[1];
            return t[1] = t[3],
            t[3] = e,
            e = t[2],
            t[2] = t[6],
            t[6] = e,
            e = t[5],
            t[5] = t[7],
            t[7] = e,
            this
        },
        getNormalMatrix: function(t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function(t) {
            var e = this.elements;
            return t[0] = e[0],
            t[1] = e[3],
            t[2] = e[6],
            t[3] = e[1],
            t[4] = e[4],
            t[5] = e[7],
            t[6] = e[2],
            t[7] = e[5],
            t[8] = e[8],
            this
        },
        setUvTransform: function(t, e, i, n, r, a, o) {
            var s = Math.cos(r);
            r = Math.sin(r),
            this.set(i * s, i * r, -i * (s * a + r * o) + a + t, -n * r, n * s, -n * (-r * a + s * o) + o + e, 0, 0, 1)
        },
        scale: function(t, e) {
            var i = this.elements;
            return i[0] *= t,
            i[3] *= t,
            i[6] *= t,
            i[1] *= e,
            i[4] *= e,
            i[7] *= e,
            this
        },
        rotate: function(t) {
            var e = Math.cos(t);
            t = Math.sin(t);
            var i = this.elements
              , n = i[0]
              , r = i[3]
              , a = i[6]
              , o = i[1]
              , s = i[4]
              , c = i[7];
            return i[0] = e * n + t * o,
            i[3] = e * r + t * s,
            i[6] = e * a + t * c,
            i[1] = -t * n + e * o,
            i[4] = -t * r + e * s,
            i[7] = -t * a + e * c,
            this
        },
        translate: function(t, e) {
            var i = this.elements;
            return i[0] += t * i[2],
            i[3] += t * i[5],
            i[6] += t * i[8],
            i[1] += e * i[2],
            i[4] += e * i[5],
            i[7] += e * i[8],
            this
        },
        equals: function(t) {
            var e = this.elements;
            t = t.elements;
            for (var i = 0; i < 9; i++)
                if (e[i] !== t[i])
                    return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var i = 0; i < 9; i++)
                this.elements[i] = t[i + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0);
            var i = this.elements;
            return t[e] = i[0],
            t[e + 1] = i[1],
            t[e + 2] = i[2],
            t[e + 3] = i[3],
            t[e + 4] = i[4],
            t[e + 5] = i[5],
            t[e + 6] = i[6],
            t[e + 7] = i[7],
            t[e + 8] = i[8],
            t
        }
    });
    var ma, ga, va, ya, xa, ba, _a, wa, Ma, Ea, Ta, Sa, Aa, La, Ra, Pa, Ca = {
        getDataURL: function(t) {
            if (t instanceof HTMLCanvasElement)
                var e = t;
            else {
                (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = t.width,
                e.height = t.height;
                var i = e.getContext("2d");
                t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height)
            }
            return 2048 < e.width || 2048 < e.height ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
        }
    }, Ia = 0;
    p.DEFAULT_IMAGE = void 0,
    p.DEFAULT_MAPPING = 300,
    p.prototype = Object.assign(Object.create(e.prototype), {
        constructor: p,
        isTexture: !0,
        updateMatrix: function() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.name = t.name,
            this.image = t.image,
            this.mipmaps = t.mipmaps.slice(0),
            this.mapping = t.mapping,
            this.wrapS = t.wrapS,
            this.wrapT = t.wrapT,
            this.magFilter = t.magFilter,
            this.minFilter = t.minFilter,
            this.anisotropy = t.anisotropy,
            this.format = t.format,
            this.type = t.type,
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.center.copy(t.center),
            this.rotation = t.rotation,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrix.copy(t.matrix),
            this.generateMipmaps = t.generateMipmaps,
            this.premultiplyAlpha = t.premultiplyAlpha,
            this.flipY = t.flipY,
            this.unpackAlignment = t.unpackAlignment,
            this.encoding = t.encoding,
            this
        },
        toJSON: function(t) {
            var e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid])
                return t.textures[this.uuid];
            var i = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var n = this.image;
                if (void 0 === n.uuid && (n.uuid = fa.generateUUID()),
                !e && void 0 === t.images[n.uuid]) {
                    if (Array.isArray(n))
                        for (var r = [], a = 0, o = n.length; a < o; a++)
                            r.push(Ca.getDataURL(n[a]));
                    else
                        r = Ca.getDataURL(n);
                    t.images[n.uuid] = {
                        uuid: n.uuid,
                        url: r
                    }
                }
                i.image = n.uuid
            }
            return e || (t.textures[this.uuid] = i),
            i
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(t) {
            if (300 !== this.mapping)
                return t;
            if (t.applyMatrix3(this.matrix),
            t.x < 0 || 1 < t.x)
                switch (this.wrapS) {
                case 1e3:
                    t.x -= Math.floor(t.x);
                    break;
                case 1001:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case 1002:
                    t.x = 1 === Math.abs(Math.floor(t.x) % 2) ? Math.ceil(t.x) - t.x : t.x - Math.floor(t.x)
                }
            if (t.y < 0 || 1 < t.y)
                switch (this.wrapT) {
                case 1e3:
                    t.y -= Math.floor(t.y);
                    break;
                case 1001:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case 1002:
                    t.y = 1 === Math.abs(Math.floor(t.y) % 2) ? Math.ceil(t.y) - t.y : t.y - Math.floor(t.y)
                }
            return this.flipY && (t.y = 1 - t.y),
            t
        }
    }),
    Object.defineProperty(p.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.assign(Et.prototype, {
        isVector4: !0,
        set: function(t, e, i, n) {
            return this.x = t,
            this.y = e,
            this.z = i,
            this.w = n,
            this
        },
        setScalar: function(t) {
            return this.w = this.z = this.y = this.x = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setZ: function(t) {
            return this.z = t,
            this
        },
        setW: function(t) {
            return this.w = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this.w = void 0 !== t.w ? t.w : 1,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this.w += t.w,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this.w += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this.w = t.w + e.w,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this.w += t.w * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this.w -= t.w,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this.w -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this.w = t.w - e.w,
            this
        },
        multiplyScalar: function(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this.w *= t,
            this
        },
        applyMatrix4: function(t) {
            var e = this.x
              , i = this.y
              , n = this.z
              , r = this.w;
            return t = t.elements,
            this.x = t[0] * e + t[4] * i + t[8] * n + t[12] * r,
            this.y = t[1] * e + t[5] * i + t[9] * n + t[13] * r,
            this.z = t[2] * e + t[6] * i + t[10] * n + t[14] * r,
            this.w = t[3] * e + t[7] * i + t[11] * n + t[15] * r,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function(t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1,
            this.z = this.y = 0) : (this.x = t.x / e,
            this.y = t.y / e,
            this.z = t.z / e),
            this
        },
        setAxisAngleFromRotationMatrix: function(t) {
            var e = (t = t.elements)[0]
              , i = t[4]
              , n = t[8]
              , r = t[1]
              , a = t[5]
              , o = t[9]
              , s = t[2]
              , c = t[6]
              , h = t[10];
            return Math.abs(i - r) < .01 && Math.abs(n - s) < .01 && Math.abs(o - c) < .01 ? Math.abs(i + r) < .1 && Math.abs(n + s) < .1 && Math.abs(o + c) < .1 && Math.abs(e + a + h - 3) < .1 ? this.set(1, 0, 0, 0) : (t = Math.PI,
            h = (h + 1) / 2,
            i = (i + r) / 4,
            n = (n + s) / 4,
            o = (o + c) / 4,
            (a = (a + 1) / 2) < (e = (e + 1) / 2) && h < e ? i = e < .01 ? (c = 0,
            s = .707106781) : (s = i / (c = Math.sqrt(e)),
            n / c) : h < a ? i = a < .01 ? (s = 0,
            c = .707106781) : (c = i / (s = Math.sqrt(a)),
            o / s) : h < .01 ? (s = c = .707106781,
            i = 0) : (c = n / (i = Math.sqrt(h)),
            s = o / i),
            this.set(c, s, i, t)) : (t = Math.sqrt((c - o) * (c - o) + (n - s) * (n - s) + (r - i) * (r - i)),
            Math.abs(t) < .001 && (t = 1),
            this.x = (c - o) / t,
            this.y = (n - s) / t,
            this.z = (r - i) / t,
            this.w = Math.acos((e + a + h - 1) / 2)),
            this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this.w = Math.min(this.w, t.w),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this.w = Math.max(this.w, t.w),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this.w = Math.max(t.w, Math.min(e.w, this.w)),
            this
        },
        clampScalar: function(t, e) {
            return void 0 === ma && (ma = new Et,
            ga = new Et),
            ma.set(t, t, t, t),
            ga.set(e, e, e, e),
            this.clamp(ma, ga)
        },
        clampLength: function(t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this.w = -this.w,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this.w += (t.w - this.w) * e,
            this
        },
        lerpVectors: function(t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this.w = t[e + 3],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t[e + 3] = this.w,
            t
        },
        fromBufferAttribute: function(t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this.w = t.getW(e),
            this
        }
    }),
    A.prototype = Object.assign(Object.create(e.prototype), {
        constructor: A,
        isWebGLRenderTarget: !0,
        setSize: function(t, e) {
            this.width === t && this.height === e || (this.width = t,
            this.height = e,
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.width = t.width,
            this.height = t.height,
            this.viewport.copy(t.viewport),
            this.texture = t.texture.clone(),
            this.depthBuffer = t.depthBuffer,
            this.stencilBuffer = t.stencilBuffer,
            this.depthTexture = t.depthTexture,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    ((n.prototype = Object.create(A.prototype)).constructor = n).prototype.isWebGLRenderTargetCube = !0,
    ((Tt.prototype = Object.create(p.prototype)).constructor = Tt).prototype.isDataTexture = !0,
    Object.assign(i.prototype, {
        isBox3: !0,
        set: function(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        },
        setFromArray: function(t) {
            for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                var h = t[s]
                  , l = t[s + 1]
                  , u = t[s + 2];
                h < e && (e = h),
                l < i && (i = l),
                u < n && (n = u),
                r < h && (r = h),
                a < l && (a = l),
                o < u && (o = u)
            }
            return this.min.set(e, i, n),
            this.max.set(r, a, o),
            this
        },
        setFromBufferAttribute: function(t) {
            for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
                var h = t.getX(s)
                  , l = t.getY(s)
                  , u = t.getZ(s);
                h < e && (e = h),
                l < i && (i = l),
                u < n && (n = u),
                r < h && (r = h),
                a < l && (a = l),
                o < u && (o = u)
            }
            return this.min.set(e, i, n),
            this.max.set(r, a, o),
            this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++)
                this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: (_a = new Mt,
        function(t, e) {
            return e = _a.copy(e).multiplyScalar(.5),
            this.min.copy(t).sub(e),
            this.max.copy(t).add(e),
            this
        }
        ),
        setFromObject: function(t) {
            return this.makeEmpty(),
            this.expandByObject(t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = 1 / 0,
            this.max.x = this.max.y = this.max.z = -1 / 0,
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"),
            t = new Mt),
            this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"),
            t = new Mt),
            this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        },
        expandByVector: function(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        },
        expandByObject: function() {
            function e(t) {
                var e = t.geometry;
                if (void 0 !== e)
                    if (e.isGeometry)
                        for (e = e.vertices,
                        n = 0,
                        r = e.length; n < r; n++)
                            a.copy(e[n]),
                            a.applyMatrix4(t.matrixWorld),
                            i.expandByPoint(a);
                    else if (e.isBufferGeometry && void 0 !== (e = e.attributes.position))
                        for (n = 0,
                        r = e.count; n < r; n++)
                            a.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld),
                            i.expandByPoint(a)
            }
            var i, n, r, a = new Mt;
            return function(t) {
                return i = this,
                t.updateMatrixWorld(!0),
                t.traverse(e),
                this
            }
        }(),
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"),
            e = new Mt),
            e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: (ba = new Mt,
        function(t) {
            return this.clampPoint(t.center, ba),
            ba.distanceToSquared(t.center) <= t.radius * t.radius
        }
        ),
        intersectsPlane: function(t) {
            if (0 < t.normal.x)
                var e = t.normal.x * this.min.x
                  , i = t.normal.x * this.max.x;
            else
                e = t.normal.x * this.max.x,
                i = t.normal.x * this.min.x;
            return 0 < t.normal.y ? (e += t.normal.y * this.min.y,
            i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
            i += t.normal.y * this.min.y),
            0 < t.normal.z ? (e += t.normal.z * this.min.z,
            i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
            i += t.normal.z * this.min.z),
            e <= -t.constant && i >= -t.constant
        },
        intersectsTriangle: function() {
            function e(t) {
                var e, i = 0;
                for (e = t.length - 3; i <= e; i += 3) {
                    l.fromArray(t, i);
                    var n = u.x * Math.abs(l.x) + u.y * Math.abs(l.y) + u.z * Math.abs(l.z)
                      , r = s.dot(l)
                      , a = c.dot(l)
                      , o = h.dot(l);
                    if (Math.max(-Math.max(r, a, o), Math.min(r, a, o)) > n)
                        return !1
                }
                return !0
            }
            var s = new Mt
              , c = new Mt
              , h = new Mt
              , i = new Mt
              , n = new Mt
              , r = new Mt
              , l = new Mt
              , a = new Mt
              , u = new Mt
              , o = new Mt;
            return function(t) {
                return !this.isEmpty() && (this.getCenter(a),
                u.subVectors(this.max, a),
                s.subVectors(t.a, a),
                c.subVectors(t.b, a),
                h.subVectors(t.c, a),
                i.subVectors(c, s),
                n.subVectors(h, c),
                r.subVectors(s, h),
                !!e(t = [0, -i.z, i.y, 0, -n.z, n.y, 0, -r.z, r.y, i.z, 0, -i.x, n.z, 0, -n.x, r.z, 0, -r.x, -i.y, i.x, 0, -n.y, n.x, 0, -r.y, r.x, 0]) && (!!e(t = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (o.crossVectors(i, n),
                e(t = [o.x, o.y, o.z]))))
            }
        }(),
        clampPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"),
            e = new Mt),
            e.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: (xa = new Mt,
        function(t) {
            return xa.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        ),
        getBoundingSphere: (ya = new Mt,
        function(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"),
            t = new o),
            this.getCenter(t.center),
            t.radius = .5 * this.getSize(ya).length(),
            t
        }
        ),
        intersect: function(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
        },
        union: function(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        },
        applyMatrix4: (va = [new Mt, new Mt, new Mt, new Mt, new Mt, new Mt, new Mt, new Mt],
        function(t) {
            return this.isEmpty() || (va[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            va[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            va[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            va[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            va[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            va[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            va[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            va[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.setFromPoints(va)),
            this
        }
        ),
        translate: function(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }),
    Object.assign(o.prototype, {
        set: function(t, e) {
            return this.center.copy(t),
            this.radius = e,
            this
        },
        setFromPoints: (wa = new i,
        function(t, e) {
            var i = this.center;
            void 0 !== e ? i.copy(e) : wa.setFromPoints(t).getCenter(i);
            for (var n = e = 0, r = t.length; n < r; n++)
                e = Math.max(e, i.distanceToSquared(t[n]));
            return this.radius = Math.sqrt(e),
            this
        }
        ),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.center.copy(t.center),
            this.radius = t.radius,
            this
        },
        empty: function() {
            return this.radius <= 0
        },
        containsPoint: function(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function(t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        },
        clampPoint: function(t, e) {
            var i = this.center.distanceToSquared(t);
            return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"),
            e = new Mt),
            e.copy(t),
            i > this.radius * this.radius && (e.sub(this.center).normalize(),
            e.multiplyScalar(this.radius).add(this.center)),
            e
        },
        getBoundingBox: function(t) {
            return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
            t = new i),
            t.set(this.center, this.center),
            t.expandByScalar(this.radius),
            t
        },
        applyMatrix4: function(t) {
            return this.center.applyMatrix4(t),
            this.radius *= t.getMaxScaleOnAxis(),
            this
        },
        translate: function(t) {
            return this.center.add(t),
            this
        },
        equals: function(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    }),
    Object.assign(v.prototype, {
        set: function(t, e) {
            return this.normal.copy(t),
            this.constant = e,
            this
        },
        setComponents: function(t, e, i, n) {
            return this.normal.set(t, e, i),
            this.constant = n,
            this
        },
        setFromNormalAndCoplanarPoint: function(t, e) {
            return this.normal.copy(t),
            this.constant = -e.dot(this.normal),
            this
        },
        setFromCoplanarPoints: (Sa = new Mt,
        Aa = new Mt,
        function(t, e, i) {
            return e = Sa.subVectors(i, e).cross(Aa.subVectors(t, e)).normalize(),
            this.setFromNormalAndCoplanarPoint(e, t),
            this
        }
        ),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.normal.copy(t.normal),
            this.constant = t.constant,
            this
        },
        normalize: function() {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t),
            this.constant *= t,
            this
        },
        negate: function() {
            return this.constant *= -1,
            this.normal.negate(),
            this
        },
        distanceToPoint: function(t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function(t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"),
            e = new Mt),
            e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        },
        intersectLine: (Ta = new Mt,
        function(t, e) {
            void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"),
            e = new Mt);
            var i = t.delta(Ta)
              , n = this.normal.dot(i);
            if (0 === n) {
                if (0 === this.distanceToPoint(t.start))
                    return e.copy(t.start)
            } else if (!((n = -(t.start.dot(this.normal) + this.constant) / n) < 0 || 1 < n))
                return e.copy(i).multiplyScalar(n).add(t.start)
        }
        ),
        intersectsLine: function(t) {
            var e = this.distanceToPoint(t.start);
            return t = this.distanceToPoint(t.end),
            e < 0 && 0 < t || t < 0 && 0 < e
        },
        intersectsBox: function(t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function(t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function(t) {
            return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
            t = new Mt),
            t.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: (Ma = new Mt,
        Ea = new g,
        function(t, e) {
            return e = e || Ea.getNormalMatrix(t),
            t = this.coplanarPoint(Ma).applyMatrix4(t),
            e = this.normal.applyMatrix3(e).normalize(),
            this.constant = -t.dot(e),
            this
        }
        ),
        translate: function(t) {
            return this.constant -= t.dot(this.normal),
            this
        },
        equals: function(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    }),
    Object.assign(St.prototype, {
        set: function(t, e, i, n, r, a) {
            var o = this.planes;
            return o[0].copy(t),
            o[1].copy(e),
            o[2].copy(i),
            o[3].copy(n),
            o[4].copy(r),
            o[5].copy(a),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            for (var e = this.planes, i = 0; i < 6; i++)
                e[i].copy(t.planes[i]);
            return this
        },
        setFromMatrix: function(t) {
            var e = this.planes
              , i = t.elements;
            t = i[0];
            var n = i[1]
              , r = i[2]
              , a = i[3]
              , o = i[4]
              , s = i[5]
              , c = i[6]
              , h = i[7]
              , l = i[8]
              , u = i[9]
              , p = i[10]
              , d = i[11]
              , f = i[12]
              , m = i[13]
              , g = i[14];
            return i = i[15],
            e[0].setComponents(a - t, h - o, d - l, i - f).normalize(),
            e[1].setComponents(a + t, h + o, d + l, i + f).normalize(),
            e[2].setComponents(a + n, h + s, d + u, i + m).normalize(),
            e[3].setComponents(a - n, h - s, d - u, i - m).normalize(),
            e[4].setComponents(a - r, h - c, d - p, i - g).normalize(),
            e[5].setComponents(a + r, h + c, d + p, i + g).normalize(),
            this
        },
        intersectsObject: (Pa = new o,
        function(t) {
            var e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(),
            Pa.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            this.intersectsSphere(Pa)
        }
        ),
        intersectsSprite: (Ra = new o,
        function(t) {
            return Ra.center.set(0, 0, 0),
            Ra.radius = .7071067811865476,
            Ra.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(Ra)
        }
        ),
        intersectsSphere: function(t) {
            var e = this.planes
              , i = t.center;
            t = -t.radius;
            for (var n = 0; n < 6; n++)
                if (e[n].distanceToPoint(i) < t)
                    return !1;
            return !0
        },
        intersectsBox: (La = new Mt,
        function(t) {
            for (var e = this.planes, i = 0; i < 6; i++) {
                var n = e[i];
                if (La.x = 0 < n.normal.x ? t.max.x : t.min.x,
                La.y = 0 < n.normal.y ? t.max.y : t.min.y,
                La.z = 0 < n.normal.z ? t.max.z : t.min.z,
                n.distanceToPoint(La) < 0)
                    return !1
            }
            return !0
        }
        ),
        containsPoint: function(t) {
            for (var e = this.planes, i = 0; i < 6; i++)
                if (e[i].distanceToPoint(t) < 0)
                    return !1;
            return !0
        }
    });
    var Oa, Na, Da, Ua = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
        alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "\nvec3 transformed = vec3( position );\n",
        beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
        bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif\n",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
        color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
        color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
        defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
        encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}\n",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
        envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
        fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif\n",
        fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif\n",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
        gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
        lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif\n",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif\n",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
        map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
        map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
        map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
        normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n",
        normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif\n",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
        project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
        dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
        dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
        tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
        uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
        uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
        uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n}\n",
        background_vert: "varying vec2 vUv;\nvoid main() {\n\tvUv = uv;\n\tgl_Position = vec4( position, 1.0 );\n\tgl_Position.z = 1.0;\n}\n",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
        cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
        equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\tvec4 matcapColor = texture2D( matcap, uv );\n\tmatcapColor = matcapTexelToLinear( matcapColor );\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}\n",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
        shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n"
    }, Ba = {
        merge: function(t) {
            for (var e = {}, i = 0; i < t.length; i++) {
                var n, r = this.clone(t[i]);
                for (n in r)
                    e[n] = r[n]
            }
            return e
        },
        clone: function(t) {
            var e, i = {};
            for (e in t)
                for (var n in i[e] = {},
                t[e]) {
                    var r = t[e][n];
                    r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? i[e][n] = r.clone() : Array.isArray(r) ? i[e][n] = r.slice() : i[e][n] = r
                }
            return i
        }
    }, Fa = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    Object.assign(M.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
            this
        },
        setScalar: function(t) {
            return this.b = this.g = this.r = t,
            this
        },
        setHex: function(t) {
            return t = Math.floor(t),
            this.r = (t >> 16 & 255) / 255,
            this.g = (t >> 8 & 255) / 255,
            this.b = (255 & t) / 255,
            this
        },
        setRGB: function(t, e, i) {
            return this.r = t,
            this.g = e,
            this.b = i,
            this
        },
        setHSL: function() {
            function n(t, e, i) {
                return i < 0 && (i += 1),
                1 < i && --i,
                i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            return function(t, e, i) {
                return t = fa.euclideanModulo(t, 1),
                e = fa.clamp(e, 0, 1),
                i = fa.clamp(i, 0, 1),
                0 === e ? this.r = this.g = this.b = i : (i = 2 * i - (e = i <= .5 ? i * (1 + e) : i + e - i * e),
                this.r = n(i, e, t + 1 / 3),
                this.g = n(i, e, t),
                this.b = n(i, e, t - 1 / 3)),
                this
            }
        }(),
        setStyle: function(e) {
            function t(t) {
                void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
            }
            var i;
            if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
                var n = i[2];
                switch (i[1]) {
                case "rgb":
                case "rgba":
                    if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n))
                        return this.r = Math.min(255, parseInt(i[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(i[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(i[3], 10)) / 255,
                        t(i[5]),
                        this;
                    if (i = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n))
                        return this.r = Math.min(100, parseInt(i[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(i[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(i[3], 10)) / 100,
                        t(i[5]),
                        this;
                    break;
                case "hsl":
                case "hsla":
                    if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n)) {
                        n = parseFloat(i[1]) / 360;
                        var r = parseInt(i[2], 10) / 100
                          , a = parseInt(i[3], 10) / 100;
                        return t(i[5]),
                        this.setHSL(n, r, a)
                    }
                }
            } else if (i = /^#([A-Fa-f0-9]+)$/.exec(e)) {
                if (3 === (n = (i = i[1]).length))
                    return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255,
                    this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255,
                    this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255,
                    this;
                if (6 === n)
                    return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255,
                    this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255,
                    this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255,
                    this
            }
            return e && 0 < e.length && (void 0 !== (i = Fa[e]) ? this.setHex(i) : console.warn("THREE.Color: Unknown color " + e)),
            this
        },
        clone: function() {
            return new this.constructor(this.r,this.g,this.b)
        },
        copy: function(t) {
            return this.r = t.r,
            this.g = t.g,
            this.b = t.b,
            this
        },
        copyGammaToLinear: function(t, e) {
            return void 0 === e && (e = 2),
            this.r = Math.pow(t.r, e),
            this.g = Math.pow(t.g, e),
            this.b = Math.pow(t.b, e),
            this
        },
        copyLinearToGamma: function(t, e) {
            return void 0 === e && (e = 2),
            e = 0 < e ? 1 / e : 1,
            this.r = Math.pow(t.r, e),
            this.g = Math.pow(t.g, e),
            this.b = Math.pow(t.b, e),
            this
        },
        convertGammaToLinear: function(t) {
            return this.copyGammaToLinear(this, t),
            this
        },
        convertLinearToGamma: function(t) {
            return this.copyLinearToGamma(this, t),
            this
        },
        copySRGBToLinear: function() {
            function e(t) {
                return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
            }
            return function(t) {
                return this.r = e(t.r),
                this.g = e(t.g),
                this.b = e(t.b),
                this
            }
        }(),
        copyLinearToSRGB: function() {
            function e(t) {
                return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
            }
            return function(t) {
                return this.r = e(t.r),
                this.g = e(t.g),
                this.b = e(t.b),
                this
            }
        }(),
        convertSRGBToLinear: function() {
            return this.copySRGBToLinear(this),
            this
        },
        convertLinearToSRGB: function() {
            return this.copyLinearToSRGB(this),
            this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(t) {
            void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"),
            t = {
                h: 0,
                s: 0,
                l: 0
            });
            var e, i = this.r, n = this.g, r = this.b, a = Math.max(i, n, r), o = Math.min(i, n, r), s = (o + a) / 2;
            if (o === a)
                o = e = 0;
            else {
                var c = a - o;
                switch (o = s <= .5 ? c / (a + o) : c / (2 - a - o),
                a) {
                case i:
                    e = (n - r) / c + (n < r ? 6 : 0);
                    break;
                case n:
                    e = (r - i) / c + 2;
                    break;
                case r:
                    e = (i - n) / c + 4
                }
                e /= 6
            }
            return t.h = e,
            t.s = o,
            t.l = s,
            t
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: (Da = {},
        function(t, e, i) {
            return this.getHSL(Da),
            Da.h += t,
            Da.s += e,
            Da.l += i,
            this.setHSL(Da.h, Da.s, Da.l),
            this
        }
        ),
        add: function(t) {
            return this.r += t.r,
            this.g += t.g,
            this.b += t.b,
            this
        },
        addColors: function(t, e) {
            return this.r = t.r + e.r,
            this.g = t.g + e.g,
            this.b = t.b + e.b,
            this
        },
        addScalar: function(t) {
            return this.r += t,
            this.g += t,
            this.b += t,
            this
        },
        sub: function(t) {
            return this.r = Math.max(0, this.r - t.r),
            this.g = Math.max(0, this.g - t.g),
            this.b = Math.max(0, this.b - t.b),
            this
        },
        multiply: function(t) {
            return this.r *= t.r,
            this.g *= t.g,
            this.b *= t.b,
            this
        },
        multiplyScalar: function(t) {
            return this.r *= t,
            this.g *= t,
            this.b *= t,
            this
        },
        lerp: function(t, e) {
            return this.r += (t.r - this.r) * e,
            this.g += (t.g - this.g) * e,
            this.b += (t.b - this.b) * e,
            this
        },
        lerpHSL: (Oa = {
            h: 0,
            s: 0,
            l: 0
        },
        Na = {
            h: 0,
            s: 0,
            l: 0
        },
        function(t, e) {
            this.getHSL(Oa),
            t.getHSL(Na),
            t = fa.lerp(Oa.h, Na.h, e);
            var i = fa.lerp(Oa.s, Na.s, e);
            return e = fa.lerp(Oa.l, Na.l, e),
            this.setHSL(t, i, e),
            this
        }
        ),
        equals: function(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.r = t[e],
            this.g = t[e + 1],
            this.b = t[e + 2],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.r,
            t[e + 1] = this.g,
            t[e + 2] = this.b,
            t
        },
        toJSON: function() {
            return this.getHex()
        }
    });
    var za, Ga, Ha = {
        common: {
            diffuse: {
                value: new M(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new g
            },
            alphaMap: {
                value: null
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new W(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new M(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new M(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new g
            }
        },
        sprite: {
            diffuse: {
                value: new M(15658734)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new W(.5,.5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new g
            }
        }
    }, Va = {
        basic: {
            uniforms: Ba.merge([Ha.common, Ha.specularmap, Ha.envmap, Ha.aomap, Ha.lightmap, Ha.fog]),
            vertexShader: Ua.meshbasic_vert,
            fragmentShader: Ua.meshbasic_frag
        },
        lambert: {
            uniforms: Ba.merge([Ha.common, Ha.specularmap, Ha.envmap, Ha.aomap, Ha.lightmap, Ha.emissivemap, Ha.fog, Ha.lights, {
                emissive: {
                    value: new M(0)
                }
            }]),
            vertexShader: Ua.meshlambert_vert,
            fragmentShader: Ua.meshlambert_frag
        },
        phong: {
            uniforms: Ba.merge([Ha.common, Ha.specularmap, Ha.envmap, Ha.aomap, Ha.lightmap, Ha.emissivemap, Ha.bumpmap, Ha.normalmap, Ha.displacementmap, Ha.gradientmap, Ha.fog, Ha.lights, {
                emissive: {
                    value: new M(0)
                },
                specular: {
                    value: new M(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: Ua.meshphong_vert,
            fragmentShader: Ua.meshphong_frag
        },
        standard: {
            uniforms: Ba.merge([Ha.common, Ha.envmap, Ha.aomap, Ha.lightmap, Ha.emissivemap, Ha.bumpmap, Ha.normalmap, Ha.displacementmap, Ha.roughnessmap, Ha.metalnessmap, Ha.fog, Ha.lights, {
                emissive: {
                    value: new M(0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: .5
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: Ua.meshphysical_vert,
            fragmentShader: Ua.meshphysical_frag
        },
        matcap: {
            uniforms: Ba.merge([Ha.common, Ha.bumpmap, Ha.normalmap, Ha.displacementmap, Ha.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: Ua.meshmatcap_vert,
            fragmentShader: Ua.meshmatcap_frag
        },
        points: {
            uniforms: Ba.merge([Ha.points, Ha.fog]),
            vertexShader: Ua.points_vert,
            fragmentShader: Ua.points_frag
        },
        dashed: {
            uniforms: Ba.merge([Ha.common, Ha.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: Ua.linedashed_vert,
            fragmentShader: Ua.linedashed_frag
        },
        depth: {
            uniforms: Ba.merge([Ha.common, Ha.displacementmap]),
            vertexShader: Ua.depth_vert,
            fragmentShader: Ua.depth_frag
        },
        normal: {
            uniforms: Ba.merge([Ha.common, Ha.bumpmap, Ha.normalmap, Ha.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Ua.normal_vert,
            fragmentShader: Ua.normal_frag
        },
        sprite: {
            uniforms: Ba.merge([Ha.sprite, Ha.fog]),
            vertexShader: Ua.sprite_vert,
            fragmentShader: Ua.sprite_frag
        },
        background: {
            uniforms: {
                t2D: {
                    value: null
                }
            },
            vertexShader: Ua.background_vert,
            fragmentShader: Ua.background_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: Ua.cube_vert,
            fragmentShader: Ua.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Ua.equirect_vert,
            fragmentShader: Ua.equirect_frag
        },
        distanceRGBA: {
            uniforms: Ba.merge([Ha.common, Ha.displacementmap, {
                referencePosition: {
                    value: new Mt
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }]),
            vertexShader: Ua.distanceRGBA_vert,
            fragmentShader: Ua.distanceRGBA_frag
        },
        shadow: {
            uniforms: Ba.merge([Ha.lights, Ha.fog, {
                color: {
                    value: new M(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Ua.shadow_vert,
            fragmentShader: Ua.shadow_frag
        }
    };
    Va.physical = {
        uniforms: Ba.merge([Va.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: Ua.meshphysical_vert,
        fragmentShader: Ua.meshphysical_frag
    },
    Object.assign(U.prototype, {
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.a = t.a,
            this.b = t.b,
            this.c = t.c,
            this.normal.copy(t.normal),
            this.color.copy(t.color),
            this.materialIndex = t.materialIndex;
            for (var e = 0, i = t.vertexNormals.length; e < i; e++)
                this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (e = 0,
            i = t.vertexColors.length; e < i; e++)
                this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    }),
    r.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "),
    r.DefaultOrder = "XYZ",
    Object.defineProperties(r.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = t,
                this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = t,
                this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(t) {
                this._z = t,
                this.onChangeCallback()
            }
        },
        order: {
            get: function() {
                return this._order
            },
            set: function(t) {
                this._order = t,
                this.onChangeCallback()
            }
        }
    }),
    Object.assign(r.prototype, {
        isEuler: !0,
        set: function(t, e, i, n) {
            return this._x = t,
            this._y = e,
            this._z = i,
            this._order = n || this._order,
            this.onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._order)
        },
        copy: function(t) {
            return this._x = t._x,
            this._y = t._y,
            this._z = t._z,
            this._order = t._order,
            this.onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(t, e, i) {
            var n = fa.clamp
              , r = t.elements;
            t = r[0];
            var a = r[4]
              , o = r[8]
              , s = r[1]
              , c = r[5]
              , h = r[9]
              , l = r[2]
              , u = r[6];
            return r = r[10],
            "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(o, -1, 1)),
            Math.abs(o) < .99999 ? (this._x = Math.atan2(-h, r),
            this._z = Math.atan2(-a, t)) : (this._x = Math.atan2(u, c),
            this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(h, -1, 1)),
            Math.abs(h) < .99999 ? (this._y = Math.atan2(o, r),
            this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-l, t),
            this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(u, -1, 1)),
            Math.abs(u) < .99999 ? (this._y = Math.atan2(-l, r),
            this._z = Math.atan2(-a, c)) : (this._y = 0,
            this._z = Math.atan2(s, t))) : "ZYX" === e ? (this._y = Math.asin(-n(l, -1, 1)),
            Math.abs(l) < .99999 ? (this._x = Math.atan2(u, r),
            this._z = Math.atan2(s, t)) : (this._x = 0,
            this._z = Math.atan2(-a, c))) : "YZX" === e ? (this._z = Math.asin(n(s, -1, 1)),
            Math.abs(s) < .99999 ? (this._x = Math.atan2(-h, c),
            this._y = Math.atan2(-l, t)) : (this._x = 0,
            this._y = Math.atan2(o, r))) : "XZY" === e ? (this._z = Math.asin(-n(a, -1, 1)),
            Math.abs(a) < .99999 ? (this._x = Math.atan2(u, c),
            this._y = Math.atan2(o, t)) : (this._x = Math.atan2(-h, r),
            this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e),
            this._order = e,
            !1 !== i && this.onChangeCallback(),
            this
        },
        setFromQuaternion: (Ga = new wt,
        function(t, e, i) {
            return Ga.makeRotationFromQuaternion(t),
            this.setFromRotationMatrix(Ga, e, i)
        }
        ),
        setFromVector3: function(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: (za = new w,
        function(t) {
            return za.setFromEuler(this),
            this.setFromQuaternion(za, t)
        }
        ),
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function(t) {
            return this._x = t[0],
            this._y = t[1],
            this._z = t[2],
            void 0 !== t[3] && (this._order = t[3]),
            this.onChangeCallback(),
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._order,
            t
        },
        toVector3: function(t) {
            return t ? t.set(this._x, this._y, this._z) : new Mt(this._x,this._y,this._z)
        },
        onChange: function(t) {
            return this.onChangeCallback = t,
            this
        },
        onChangeCallback: function() {}
    }),
    Object.assign(a.prototype, {
        set: function(t) {
            this.mask = 1 << t | 0
        },
        enable: function(t) {
            this.mask = this.mask | 1 << t | 0
        },
        toggle: function(t) {
            this.mask ^= 1 << t | 0
        },
        disable: function(t) {
            this.mask &= ~(1 << t | 0)
        },
        test: function(t) {
            return 0 != (this.mask & t.mask)
        }
    });
    var ka, ja, Wa, Xa, qa, Ya, Ja, Za, Qa, Ka, $a, to, eo, io, no, ro, ao, oo, so = 0;
    l.DefaultUp = new Mt(0,1,0),
    l.DefaultMatrixAutoUpdate = !0,
    l.prototype = Object.assign(Object.create(e.prototype), {
        constructor: l,
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix: function(t) {
            this.matrix.multiplyMatrices(t, this.matrix),
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function(t) {
            return this.quaternion.premultiply(t),
            this
        },
        setRotationFromAxisAngle: function(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function(t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function(t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function(t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: (oo = new w,
        function(t, e) {
            return oo.setFromAxisAngle(t, e),
            this.quaternion.multiply(oo),
            this
        }
        ),
        rotateOnWorldAxis: (ao = new w,
        function(t, e) {
            return ao.setFromAxisAngle(t, e),
            this.quaternion.premultiply(ao),
            this
        }
        ),
        rotateX: (ro = new Mt(1,0,0),
        function(t) {
            return this.rotateOnAxis(ro, t)
        }
        ),
        rotateY: (no = new Mt(0,1,0),
        function(t) {
            return this.rotateOnAxis(no, t)
        }
        ),
        rotateZ: (io = new Mt(0,0,1),
        function(t) {
            return this.rotateOnAxis(io, t)
        }
        ),
        translateOnAxis: (eo = new Mt,
        function(t, e) {
            return eo.copy(t).applyQuaternion(this.quaternion),
            this.position.add(eo.multiplyScalar(e)),
            this
        }
        ),
        translateX: (to = new Mt(1,0,0),
        function(t) {
            return this.translateOnAxis(to, t)
        }
        ),
        translateY: ($a = new Mt(0,1,0),
        function(t) {
            return this.translateOnAxis($a, t)
        }
        ),
        translateZ: (Ka = new Mt(0,0,1),
        function(t) {
            return this.translateOnAxis(Ka, t)
        }
        ),
        localToWorld: function(t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: (Qa = new wt,
        function(t) {
            return t.applyMatrix4(Qa.getInverse(this.matrixWorld))
        }
        ),
        lookAt: (qa = new w,
        Ya = new wt,
        Ja = new Mt,
        Za = new Mt,
        function(t, e, i) {
            t.isVector3 ? Ja.copy(t) : Ja.set(t, e, i),
            t = this.parent,
            this.updateWorldMatrix(!0, !1),
            Za.setFromMatrixPosition(this.matrixWorld),
            this.isCamera ? Ya.lookAt(Za, Ja, this.up) : Ya.lookAt(Ja, Za, this.up),
            this.quaternion.setFromRotationMatrix(Ya),
            t && (Ya.extractRotation(t.matrixWorld),
            qa.setFromRotationMatrix(Ya),
            this.quaternion.premultiply(qa.inverse()))
        }
        ),
        add: function(t) {
            if (1 < arguments.length) {
                for (var e = 0; e < arguments.length; e++)
                    this.add(arguments[e]);
                return this
            }
            return t === this ? console.error("THREE.Object3D.add: object can't be added as a child of itself.", t) : t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
            t.parent = this,
            t.dispatchEvent({
                type: "added"
            }),
            this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
            this
        },
        remove: function(t) {
            if (1 < arguments.length) {
                for (var e = 0; e < arguments.length; e++)
                    this.remove(arguments[e]);
                return this
            }
            return -1 !== (e = this.children.indexOf(t)) && (t.parent = null,
            t.dispatchEvent({
                type: "removed"
            }),
            this.children.splice(e, 1)),
            this
        },
        getObjectById: function(t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function(t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function(t, e) {
            if (this[t] === e)
                return this;
            for (var i = 0, n = this.children.length; i < n; i++) {
                var r = this.children[i].getObjectByProperty(t, e);
                if (void 0 !== r)
                    return r
            }
        },
        getWorldPosition: function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"),
            t = new Mt),
            this.updateMatrixWorld(!0),
            t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: (Wa = new Mt,
        Xa = new Mt,
        function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),
            t = new w),
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(Wa, t, Xa),
            t
        }
        ),
        getWorldScale: (ka = new Mt,
        ja = new w,
        function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"),
            t = new Mt),
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(ka, ja, t),
            t
        }
        ),
        getWorldDirection: function(t) {
            void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"),
            t = new Mt),
            this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize()
        },
        raycast: function() {},
        traverse: function(t) {
            t(this);
            for (var e = this.children, i = 0, n = e.length; i < n; i++)
                e[i].traverse(t)
        },
        traverseVisible: function(t) {
            if (!1 !== this.visible) {
                t(this);
                for (var e = this.children, i = 0, n = e.length; i < n; i++)
                    e[i].traverseVisible(t)
            }
        },
        traverseAncestors: function(t) {
            var e = this.parent;
            null !== e && (t(e),
            e.traverseAncestors(t))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale),
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            t = !(this.matrixWorldNeedsUpdate = !1));
            for (var e = this.children, i = 0, n = e.length; i < n; i++)
                e[i].updateMatrixWorld(t)
        },
        updateWorldMatrix: function(t, e) {
            var i = this.parent;
            if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            !0 === e)
                for (e = 0,
                i = (t = this.children).length; e < i; e++)
                    t[e].updateWorldMatrix(!1, !0)
        },
        toJSON: function(i) {
            function t(t, e) {
                return void 0 === t[e.uuid] && (t[e.uuid] = e.toJSON(i)),
                e.uuid
            }
            function e(t) {
                var e, i = [];
                for (e in t) {
                    var n = t[e];
                    delete n.metadata,
                    i.push(n)
                }
                return i
            }
            var n = void 0 === i || "string" == typeof i
              , r = {};
            n && (i = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {}
            },
            r.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var a = {};
            if (a.uuid = this.uuid,
            a.type = this.type,
            "" !== this.name && (a.name = this.name),
            !0 === this.castShadow && (a.castShadow = !0),
            !0 === this.receiveShadow && (a.receiveShadow = !0),
            !1 === this.visible && (a.visible = !1),
            !1 === this.frustumCulled && (a.frustumCulled = !1),
            0 !== this.renderOrder && (a.renderOrder = this.renderOrder),
            "{}" !== JSON.stringify(this.userData) && (a.userData = this.userData),
            a.layers = this.layers.mask,
            a.matrix = this.matrix.toArray(),
            !1 === this.matrixAutoUpdate && (a.matrixAutoUpdate = !1),
            this.isMesh || this.isLine || this.isPoints) {
                a.geometry = t(i.geometries, this.geometry);
                var o = this.geometry.parameters;
                if (void 0 !== o && void 0 !== o.shapes)
                    if (o = o.shapes,
                    Array.isArray(o))
                        for (var s = 0, c = o.length; s < c; s++)
                            t(i.shapes, o[s]);
                    else
                        t(i.shapes, o)
            }
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    for (o = [],
                    s = 0,
                    c = this.material.length; s < c; s++)
                        o.push(t(i.materials, this.material[s]));
                    a.material = o
                } else
                    a.material = t(i.materials, this.material);
            if (0 < this.children.length)
                for (a.children = [],
                s = 0; s < this.children.length; s++)
                    a.children.push(this.children[s].toJSON(i).object);
            if (n) {
                n = e(i.geometries),
                s = e(i.materials),
                c = e(i.textures);
                var h = e(i.images);
                o = e(i.shapes),
                0 < n.length && (r.geometries = n),
                0 < s.length && (r.materials = s),
                0 < c.length && (r.textures = c),
                0 < h.length && (r.images = h),
                0 < o.length && (r.shapes = o)
            }
            return r.object = a,
            r
        },
        clone: function(t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function(t, e) {
            if (void 0 === e && (e = !0),
            this.name = t.name,
            this.up.copy(t.up),
            this.position.copy(t.position),
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
            this.layers.mask = t.layers.mask,
            this.visible = t.visible,
            this.castShadow = t.castShadow,
            this.receiveShadow = t.receiveShadow,
            this.frustumCulled = t.frustumCulled,
            this.renderOrder = t.renderOrder,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            !0 === e)
                for (e = 0; e < t.children.length; e++)
                    this.add(t.children[e].clone());
            return this
        }
    });
    var co, ho, lo, uo, po, fo, mo, go = 0;
    E.prototype = Object.assign(Object.create(e.prototype), {
        constructor: E,
        isGeometry: !0,
        applyMatrix: function(t) {
            for (var e = (new g).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++)
                this.vertices[i].applyMatrix4(t);
            for (i = 0,
            n = this.faces.length; i < n; i++) {
                (t = this.faces[i]).normal.applyMatrix3(e).normalize();
                for (var r = 0, a = t.vertexNormals.length; r < a; r++)
                    t.vertexNormals[r].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this.normalsNeedUpdate = this.verticesNeedUpdate = !0,
            this
        },
        rotateX: (mo = new wt,
        function(t) {
            return mo.makeRotationX(t),
            this.applyMatrix(mo),
            this
        }
        ),
        rotateY: (fo = new wt,
        function(t) {
            return fo.makeRotationY(t),
            this.applyMatrix(fo),
            this
        }
        ),
        rotateZ: (po = new wt,
        function(t) {
            return po.makeRotationZ(t),
            this.applyMatrix(po),
            this
        }
        ),
        translate: (uo = new wt,
        function(t, e, i) {
            return uo.makeTranslation(t, e, i),
            this.applyMatrix(uo),
            this
        }
        ),
        scale: (lo = new wt,
        function(t, e, i) {
            return lo.makeScale(t, e, i),
            this.applyMatrix(lo),
            this
        }
        ),
        lookAt: (ho = new l,
        function(t) {
            ho.lookAt(t),
            ho.updateMatrix(),
            this.applyMatrix(ho.matrix)
        }
        ),
        fromBufferGeometry: function(t) {
            function e(t, e, i, n) {
                n = new U(t,e,i,void 0 !== o ? [l[t].clone(), l[e].clone(), l[i].clone()] : [],void 0 !== s ? [r.colors[t].clone(), r.colors[e].clone(), r.colors[i].clone()] : [],n),
                r.faces.push(n),
                void 0 !== c && r.faceVertexUvs[0].push([u[t].clone(), u[e].clone(), u[i].clone()]),
                void 0 !== h && r.faceVertexUvs[1].push([p[t].clone(), p[e].clone(), p[i].clone()])
            }
            var r = this
              , i = null !== t.index ? t.index.array : void 0
              , n = t.attributes
              , a = n.position.array
              , o = void 0 !== n.normal ? n.normal.array : void 0
              , s = void 0 !== n.color ? n.color.array : void 0
              , c = void 0 !== n.uv ? n.uv.array : void 0
              , h = void 0 !== n.uv2 ? n.uv2.array : void 0;
            void 0 !== h && (this.faceVertexUvs[1] = []);
            for (var l = [], u = [], p = [], d = n = 0; n < a.length; n += 3,
            d += 2)
                r.vertices.push(new Mt(a[n],a[n + 1],a[n + 2])),
                void 0 !== o && l.push(new Mt(o[n],o[n + 1],o[n + 2])),
                void 0 !== s && r.colors.push(new M(s[n],s[n + 1],s[n + 2])),
                void 0 !== c && u.push(new W(c[d],c[d + 1])),
                void 0 !== h && p.push(new W(h[d],h[d + 1]));
            var f = t.groups;
            if (0 < f.length)
                for (n = 0; n < f.length; n++) {
                    var m = (a = f[n]).start;
                    for (d = m,
                    m += a.count; d < m; d += 3)
                        void 0 !== i ? e(i[d], i[d + 1], i[d + 2], a.materialIndex) : e(d, d + 1, d + 2, a.materialIndex)
                }
            else if (void 0 !== i)
                for (n = 0; n < i.length; n += 3)
                    e(i[n], i[n + 1], i[n + 2]);
            else
                for (n = 0; n < a.length / 3; n += 3)
                    e(n, n + 1, n + 2);
            return this.computeFaceNormals(),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            this
        },
        center: (co = new Mt,
        function() {
            return this.computeBoundingBox(),
            this.boundingBox.getCenter(co).negate(),
            this.translate(co.x, co.y, co.z),
            this
        }
        ),
        normalize: function() {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center
              , e = this.boundingSphere.radius;
            e = 0 === e ? 1 : 1 / e;
            var i = new wt;
            return i.set(e, 0, 0, -e * t.x, 0, e, 0, -e * t.y, 0, 0, e, -e * t.z, 0, 0, 0, 1),
            this.applyMatrix(i),
            this
        },
        computeFaceNormals: function() {
            for (var t = new Mt, e = new Mt, i = 0, n = this.faces.length; i < n; i++) {
                var r = this.faces[i]
                  , a = this.vertices[r.a]
                  , o = this.vertices[r.b];
                t.subVectors(this.vertices[r.c], o),
                e.subVectors(a, o),
                t.cross(e),
                t.normalize(),
                r.normal.copy(t)
            }
        },
        computeVertexNormals: function(t) {
            var e;
            void 0 === t && (t = !0);
            var i = Array(this.vertices.length)
              , n = 0;
            for (e = this.vertices.length; n < e; n++)
                i[n] = new Mt;
            if (t) {
                var r = new Mt
                  , a = new Mt;
                for (t = 0,
                n = this.faces.length; t < n; t++) {
                    e = this.faces[t];
                    var o = this.vertices[e.a]
                      , s = this.vertices[e.b]
                      , c = this.vertices[e.c];
                    r.subVectors(c, s),
                    a.subVectors(o, s),
                    r.cross(a),
                    i[e.a].add(r),
                    i[e.b].add(r),
                    i[e.c].add(r)
                }
            } else
                for (this.computeFaceNormals(),
                t = 0,
                n = this.faces.length; t < n; t++)
                    i[(e = this.faces[t]).a].add(e.normal),
                    i[e.b].add(e.normal),
                    i[e.c].add(e.normal);
            for (n = 0,
            e = this.vertices.length; n < e; n++)
                i[n].normalize();
            for (t = 0,
            n = this.faces.length; t < n; t++)
                3 === (o = (e = this.faces[t]).vertexNormals).length ? (o[0].copy(i[e.a]),
                o[1].copy(i[e.b]),
                o[2].copy(i[e.c])) : (o[0] = i[e.a].clone(),
                o[1] = i[e.b].clone(),
                o[2] = i[e.c].clone());
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var t;
            this.computeFaceNormals();
            var e = 0;
            for (t = this.faces.length; e < t; e++) {
                var i = this.faces[e]
                  , n = i.vertexNormals;
                3 === n.length ? (n[0].copy(i.normal),
                n[1].copy(i.normal),
                n[2].copy(i.normal)) : (n[0] = i.normal.clone(),
                n[1] = i.normal.clone(),
                n[2] = i.normal.clone())
            }
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var t, e, i = 0;
            for (e = this.faces.length; i < e; i++) {
                var n = this.faces[i];
                n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(),
                n.__originalVertexNormals || (n.__originalVertexNormals = []);
                var r = 0;
                for (t = n.vertexNormals.length; r < t; r++)
                    n.__originalVertexNormals[r] ? n.__originalVertexNormals[r].copy(n.vertexNormals[r]) : n.__originalVertexNormals[r] = n.vertexNormals[r].clone()
            }
            var a = new E;
            for (a.faces = this.faces,
            r = 0,
            t = this.morphTargets.length; r < t; r++) {
                if (!this.morphNormals[r]) {
                    this.morphNormals[r] = {},
                    this.morphNormals[r].faceNormals = [],
                    this.morphNormals[r].vertexNormals = [],
                    n = this.morphNormals[r].faceNormals;
                    var o = this.morphNormals[r].vertexNormals;
                    for (i = 0,
                    e = this.faces.length; i < e; i++) {
                        var s = new Mt
                          , c = {
                            a: new Mt,
                            b: new Mt,
                            c: new Mt
                        };
                        n.push(s),
                        o.push(c)
                    }
                }
                for (o = this.morphNormals[r],
                a.vertices = this.morphTargets[r].vertices,
                a.computeFaceNormals(),
                a.computeVertexNormals(),
                i = 0,
                e = this.faces.length; i < e; i++)
                    n = this.faces[i],
                    s = o.faceNormals[i],
                    c = o.vertexNormals[i],
                    s.copy(n.normal),
                    c.a.copy(n.vertexNormals[0]),
                    c.b.copy(n.vertexNormals[1]),
                    c.c.copy(n.vertexNormals[2])
            }
            for (i = 0,
            e = this.faces.length; i < e; i++)
                (n = this.faces[i]).normal = n.__originalFaceNormal,
                n.vertexNormals = n.__originalVertexNormals
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new i),
            this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new o),
            this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(t, e, i) {
            if (t && t.isGeometry) {
                var n, r = this.vertices.length, a = this.vertices, o = t.vertices, s = this.faces, c = t.faces, h = this.faceVertexUvs[0], l = t.faceVertexUvs[0], u = this.colors, p = t.colors;
                void 0 === i && (i = 0),
                void 0 !== e && (n = (new g).getNormalMatrix(e)),
                t = 0;
                for (var d = o.length; t < d; t++) {
                    var f = o[t].clone();
                    void 0 !== e && f.applyMatrix4(e),
                    a.push(f)
                }
                for (t = 0,
                d = p.length; t < d; t++)
                    u.push(p[t].clone());
                for (t = 0,
                d = c.length; t < d; t++) {
                    var m = (o = c[t]).vertexNormals;
                    for (p = o.vertexColors,
                    (u = new U(o.a + r,o.b + r,o.c + r)).normal.copy(o.normal),
                    void 0 !== n && u.normal.applyMatrix3(n).normalize(),
                    e = 0,
                    a = m.length; e < a; e++)
                        f = m[e].clone(),
                        void 0 !== n && f.applyMatrix3(n).normalize(),
                        u.vertexNormals.push(f);
                    for (u.color.copy(o.color),
                    e = 0,
                    a = p.length; e < a; e++)
                        f = p[e],
                        u.vertexColors.push(f.clone());
                    u.materialIndex = o.materialIndex + i,
                    s.push(u)
                }
                for (t = 0,
                d = l.length; t < d; t++)
                    if (n = [],
                    void 0 !== (i = l[t])) {
                        for (e = 0,
                        a = i.length; e < a; e++)
                            n.push(i[e].clone());
                        h.push(n)
                    }
            } else
                console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
        },
        mergeMesh: function(t) {
            t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(),
            this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
        },
        mergeVertices: function() {
            var t, e = {}, i = [], n = [], r = Math.pow(10, 4), a = 0;
            for (t = this.vertices.length; a < t; a++) {
                var o = this.vertices[a];
                void 0 === e[o = Math.round(o.x * r) + "_" + Math.round(o.y * r) + "_" + Math.round(o.z * r)] ? (e[o] = a,
                i.push(this.vertices[a]),
                n[a] = i.length - 1) : n[a] = n[e[o]]
            }
            for (e = [],
            a = 0,
            t = this.faces.length; a < t; a++)
                for ((r = this.faces[a]).a = n[r.a],
                r.b = n[r.b],
                r.c = n[r.c],
                r = [r.a, r.b, r.c],
                o = 0; o < 3; o++)
                    if (r[o] === r[(o + 1) % 3]) {
                        e.push(a);
                        break
                    }
            for (a = e.length - 1; 0 <= a; a--)
                for (r = e[a],
                this.faces.splice(r, 1),
                n = 0,
                t = this.faceVertexUvs.length; n < t; n++)
                    this.faceVertexUvs[n].splice(r, 1);
            return a = this.vertices.length - i.length,
            this.vertices = i,
            a
        },
        setFromPoints: function(t) {
            this.vertices = [];
            for (var e = 0, i = t.length; e < i; e++) {
                var n = t[e];
                this.vertices.push(new Mt(n.x,n.y,n.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function() {
            for (var t = this.faces, e = t.length, i = 0; i < e; i++)
                t[i]._id = i;
            t.sort(function(t, e) {
                return t.materialIndex - e.materialIndex
            });
            var n, r, a = this.faceVertexUvs[0], o = this.faceVertexUvs[1];
            for (a && a.length === e && (n = []),
            o && o.length === e && (r = []),
            i = 0; i < e; i++) {
                var s = t[i]._id;
                n && n.push(a[s]),
                r && r.push(o[s])
            }
            n && (this.faceVertexUvs[0] = n),
            r && (this.faceVertexUvs[1] = r)
        },
        toJSON: function() {
            function t(t, e, i) {
                return i ? t | 1 << e : t & ~(1 << e)
            }
            function e(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== h[e] || (h[e] = c.length / 3,
                c.push(t.x, t.y, t.z)),
                h[e]
            }
            function i(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== u[e] || (u[e] = l.length,
                l.push(t.getHex())),
                u[e]
            }
            function n(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== d[e] || (d[e] = p.length / 2,
                p.push(t.x, t.y)),
                d[e]
            }
            var r = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (r.uuid = this.uuid,
            r.type = this.type,
            "" !== this.name && (r.name = this.name),
            void 0 !== this.parameters) {
                var a, o = this.parameters;
                for (a in o)
                    void 0 !== o[a] && (r[a] = o[a]);
                return r
            }
            for (o = [],
            a = 0; a < this.vertices.length; a++) {
                var s = this.vertices[a];
                o.push(s.x, s.y, s.z)
            }
            s = [];
            var c = []
              , h = {}
              , l = []
              , u = {}
              , p = []
              , d = {};
            for (a = 0; a < this.faces.length; a++) {
                var f = this.faces[a]
                  , m = void 0 !== this.faceVertexUvs[0][a]
                  , g = 0 < f.normal.length()
                  , v = 0 < f.vertexNormals.length
                  , y = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b
                  , x = 0 < f.vertexColors.length
                  , b = 0;
                b = t(b = t(b = t(b = t(b = t(b = t(b = t(b = t(b, 0, 0), 1, !0), 2, !1), 3, m), 4, g), 5, v), 6, y), 7, x),
                s.push(b),
                s.push(f.a, f.b, f.c),
                s.push(f.materialIndex),
                m && (m = this.faceVertexUvs[0][a],
                s.push(n(m[0]), n(m[1]), n(m[2]))),
                g && s.push(e(f.normal)),
                v && (g = f.vertexNormals,
                s.push(e(g[0]), e(g[1]), e(g[2]))),
                y && s.push(i(f.color)),
                x && (f = f.vertexColors,
                s.push(i(f[0]), i(f[1]), i(f[2])))
            }
            return r.data = {},
            r.data.vertices = o,
            r.data.normals = c,
            0 < l.length && (r.data.colors = l),
            0 < p.length && (r.data.uvs = [p]),
            r.data.faces = s,
            r
        },
        clone: function() {
            return (new E).copy(this)
        },
        copy: function(t) {
            var e, i, n;
            this.vertices = [],
            this.colors = [],
            this.faces = [],
            this.faceVertexUvs = [[]],
            this.morphTargets = [],
            this.morphNormals = [],
            this.skinWeights = [],
            this.skinIndices = [],
            this.lineDistances = [],
            this.boundingSphere = this.boundingBox = null,
            this.name = t.name;
            var r = t.vertices
              , a = 0;
            for (e = r.length; a < e; a++)
                this.vertices.push(r[a].clone());
            for (a = 0,
            e = (r = t.colors).length; a < e; a++)
                this.colors.push(r[a].clone());
            for (a = 0,
            e = (r = t.faces).length; a < e; a++)
                this.faces.push(r[a].clone());
            for (a = 0,
            e = t.faceVertexUvs.length; a < e; a++) {
                var o = t.faceVertexUvs[a];
                for (void 0 === this.faceVertexUvs[a] && (this.faceVertexUvs[a] = []),
                r = 0,
                i = o.length; r < i; r++) {
                    var s = o[r]
                      , c = []
                      , h = 0;
                    for (n = s.length; h < n; h++)
                        c.push(s[h].clone());
                    this.faceVertexUvs[a].push(c)
                }
            }
            for (a = 0,
            e = (h = t.morphTargets).length; a < e; a++) {
                if ((n = {}).name = h[a].name,
                void 0 !== h[a].vertices)
                    for (n.vertices = [],
                    r = 0,
                    i = h[a].vertices.length; r < i; r++)
                        n.vertices.push(h[a].vertices[r].clone());
                if (void 0 !== h[a].normals)
                    for (n.normals = [],
                    r = 0,
                    i = h[a].normals.length; r < i; r++)
                        n.normals.push(h[a].normals[r].clone());
                this.morphTargets.push(n)
            }
            for (a = 0,
            e = (h = t.morphNormals).length; a < e; a++) {
                if (n = {},
                void 0 !== h[a].vertexNormals)
                    for (n.vertexNormals = [],
                    r = 0,
                    i = h[a].vertexNormals.length; r < i; r++)
                        o = h[a].vertexNormals[r],
                        (s = {}).a = o.a.clone(),
                        s.b = o.b.clone(),
                        s.c = o.c.clone(),
                        n.vertexNormals.push(s);
                if (void 0 !== h[a].faceNormals)
                    for (n.faceNormals = [],
                    r = 0,
                    i = h[a].faceNormals.length; r < i; r++)
                        n.faceNormals.push(h[a].faceNormals[r].clone());
                this.morphNormals.push(n)
            }
            for (a = 0,
            e = (r = t.skinWeights).length; a < e; a++)
                this.skinWeights.push(r[a].clone());
            for (a = 0,
            e = (r = t.skinIndices).length; a < e; a++)
                this.skinIndices.push(r[a].clone());
            for (a = 0,
            e = (r = t.lineDistances).length; a < e; a++)
                this.lineDistances.push(r[a]);
            return null !== (a = t.boundingBox) && (this.boundingBox = a.clone()),
            null !== (a = t.boundingSphere) && (this.boundingSphere = a.clone()),
            this.elementsNeedUpdate = t.elementsNeedUpdate,
            this.verticesNeedUpdate = t.verticesNeedUpdate,
            this.uvsNeedUpdate = t.uvsNeedUpdate,
            this.normalsNeedUpdate = t.normalsNeedUpdate,
            this.colorsNeedUpdate = t.colorsNeedUpdate,
            this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate,
            this.groupsNeedUpdate = t.groupsNeedUpdate,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    Object.defineProperty(f.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.assign(f.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function() {},
        setArray: function(t) {
            if (Array.isArray(t))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            return this.count = void 0 !== t ? t.length / this.itemSize : 0,
            this.array = t,
            this
        },
        setDynamic: function(t) {
            return this.dynamic = t,
            this
        },
        copy: function(t) {
            return this.name = t.name,
            this.array = new t.array.constructor(t.array),
            this.itemSize = t.itemSize,
            this.count = t.count,
            this.normalized = t.normalized,
            this.dynamic = t.dynamic,
            this
        },
        copyAt: function(t, e, i) {
            t *= this.itemSize,
            i *= e.itemSize;
            for (var n = 0, r = this.itemSize; n < r; n++)
                this.array[t + n] = e.array[i + n];
            return this
        },
        copyArray: function(t) {
            return this.array.set(t),
            this
        },
        copyColorsArray: function(t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n),
                a = new M),
                e[i++] = a.r,
                e[i++] = a.g,
                e[i++] = a.b
            }
            return this
        },
        copyVector2sArray: function(t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n),
                a = new W),
                e[i++] = a.x,
                e[i++] = a.y
            }
            return this
        },
        copyVector3sArray: function(t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n),
                a = new Mt),
                e[i++] = a.x,
                e[i++] = a.y,
                e[i++] = a.z
            }
            return this
        },
        copyVector4sArray: function(t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n),
                a = new Et),
                e[i++] = a.x,
                e[i++] = a.y,
                e[i++] = a.z,
                e[i++] = a.w
            }
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0),
            this.array.set(t, e),
            this
        },
        getX: function(t) {
            return this.array[t * this.itemSize]
        },
        setX: function(t, e) {
            return this.array[t * this.itemSize] = e,
            this
        },
        getY: function(t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function(t, e) {
            return this.array[t * this.itemSize + 1] = e,
            this
        },
        getZ: function(t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function(t, e) {
            return this.array[t * this.itemSize + 2] = e,
            this
        },
        getW: function(t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function(t, e) {
            return this.array[t * this.itemSize + 3] = e,
            this
        },
        setXY: function(t, e, i) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = i,
            this
        },
        setXYZ: function(t, e, i, n) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = i,
            this.array[t + 2] = n,
            this
        },
        setXYZW: function(t, e, i, n, r) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = i,
            this.array[t + 2] = n,
            this.array[t + 3] = r,
            this
        },
        onUpload: function(t) {
            return this.onUploadCallback = t,
            this
        },
        clone: function() {
            return new this.constructor(this.array,this.itemSize).copy(this)
        }
    }),
    (s.prototype = Object.create(f.prototype)).constructor = s,
    (c.prototype = Object.create(f.prototype)).constructor = c,
    (h.prototype = Object.create(f.prototype)).constructor = h,
    (u.prototype = Object.create(f.prototype)).constructor = u,
    (d.prototype = Object.create(f.prototype)).constructor = d,
    (m.prototype = Object.create(f.prototype)).constructor = m,
    (y.prototype = Object.create(f.prototype)).constructor = y,
    (R.prototype = Object.create(f.prototype)).constructor = R,
    (x.prototype = Object.create(f.prototype)).constructor = x,
    Object.assign(b.prototype, {
        computeGroups: function(t) {
            var e = []
              , i = void 0;
            t = t.faces;
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (r.materialIndex !== i) {
                    i = r.materialIndex,
                    void 0 !== a && (a.count = 3 * n - a.start,
                    e.push(a));
                    var a = {
                        start: 3 * n,
                        materialIndex: i
                    }
                }
            }
            void 0 !== a && (a.count = 3 * n - a.start,
            e.push(a)),
            this.groups = e
        },
        fromGeometry: function(t) {
            var e = t.faces
              , i = t.vertices
              , n = t.faceVertexUvs
              , r = n[0] && 0 < n[0].length
              , a = n[1] && 0 < n[1].length
              , o = t.morphTargets
              , s = o.length;
            if (0 < s) {
                for (var c = [], h = 0; h < s; h++)
                    c[h] = {
                        name: o[h].name,
                        data: []
                    };
                this.morphTargets.position = c
            }
            var l = t.morphNormals
              , u = l.length;
            if (0 < u) {
                var p = [];
                for (h = 0; h < u; h++)
                    p[h] = {
                        name: l[h].name,
                        data: []
                    };
                this.morphTargets.normal = p
            }
            var d = t.skinIndices
              , f = t.skinWeights
              , m = d.length === i.length
              , g = f.length === i.length;
            for (0 < i.length && 0 === e.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported."),
            h = 0; h < e.length; h++) {
                var v = e[h];
                this.vertices.push(i[v.a], i[v.b], i[v.c]);
                var y = v.vertexNormals;
                for (3 === y.length ? this.normals.push(y[0], y[1], y[2]) : (y = v.normal,
                this.normals.push(y, y, y)),
                3 === (y = v.vertexColors).length ? this.colors.push(y[0], y[1], y[2]) : (y = v.color,
                this.colors.push(y, y, y)),
                !0 === r && (void 0 !== (y = n[0][h]) ? this.uvs.push(y[0], y[1], y[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h),
                this.uvs.push(new W, new W, new W))),
                !0 === a && (void 0 !== (y = n[1][h]) ? this.uvs2.push(y[0], y[1], y[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h),
                this.uvs2.push(new W, new W, new W))),
                y = 0; y < s; y++) {
                    var x = o[y].vertices;
                    c[y].data.push(x[v.a], x[v.b], x[v.c])
                }
                for (y = 0; y < u; y++)
                    x = l[y].vertexNormals[h],
                    p[y].data.push(x.a, x.b, x.c);
                m && this.skinIndices.push(d[v.a], d[v.b], d[v.c]),
                g && this.skinWeights.push(f[v.a], f[v.b], f[v.c])
            }
            return this.computeGroups(t),
            this.verticesNeedUpdate = t.verticesNeedUpdate,
            this.normalsNeedUpdate = t.normalsNeedUpdate,
            this.colorsNeedUpdate = t.colorsNeedUpdate,
            this.uvsNeedUpdate = t.uvsNeedUpdate,
            this.groupsNeedUpdate = t.groupsNeedUpdate,
            this
        }
    });
    var vo, yo, xo, bo, _o, wo, Mo, Eo, To, So, Ao = 1;
    P.prototype = Object.assign(Object.create(e.prototype), {
        constructor: P,
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(t) {
            Array.isArray(t) ? this.index = new (65535 < _(t) ? y : d)(t,1) : this.index = t
        },
        addAttribute: function(t, e, i) {
            return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? ("index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
            this.setIndex(e)) : this.attributes[t] = e,
            this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
            this.addAttribute(t, new f(e,i)))
        },
        getAttribute: function(t) {
            return this.attributes[t]
        },
        removeAttribute: function(t) {
            return delete this.attributes[t],
            this
        },
        addGroup: function(t, e, i) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: void 0 !== i ? i : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(t, e) {
            this.drawRange.start = t,
            this.drawRange.count = e
        },
        applyMatrix: function(t) {
            var e = this.attributes.position;
            return void 0 !== e && (t.applyToBufferAttribute(e),
            e.needsUpdate = !0),
            void 0 !== (e = this.attributes.normal) && ((new g).getNormalMatrix(t).applyToBufferAttribute(e),
            e.needsUpdate = !0),
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
        },
        rotateX: (So = new wt,
        function(t) {
            return So.makeRotationX(t),
            this.applyMatrix(So),
            this
        }
        ),
        rotateY: (To = new wt,
        function(t) {
            return To.makeRotationY(t),
            this.applyMatrix(To),
            this
        }
        ),
        rotateZ: (Eo = new wt,
        function(t) {
            return Eo.makeRotationZ(t),
            this.applyMatrix(Eo),
            this
        }
        ),
        translate: (Mo = new wt,
        function(t, e, i) {
            return Mo.makeTranslation(t, e, i),
            this.applyMatrix(Mo),
            this
        }
        ),
        scale: (wo = new wt,
        function(t, e, i) {
            return wo.makeScale(t, e, i),
            this.applyMatrix(wo),
            this
        }
        ),
        lookAt: (_o = new l,
        function(t) {
            _o.lookAt(t),
            _o.updateMatrix(),
            this.applyMatrix(_o.matrix)
        }
        ),
        center: (bo = new Mt,
        function() {
            return this.computeBoundingBox(),
            this.boundingBox.getCenter(bo).negate(),
            this.translate(bo.x, bo.y, bo.z),
            this
        }
        ),
        setFromObject: function(t) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                t = new R(3 * e.vertices.length,3);
                var i = new R(3 * e.colors.length,3);
                this.addAttribute("position", t.copyVector3sArray(e.vertices)),
                this.addAttribute("color", i.copyColorsArray(e.colors)),
                e.lineDistances && e.lineDistances.length === e.vertices.length && (t = new R(e.lineDistances.length,1),
                this.addAttribute("lineDistance", t.copyArray(e.lineDistances))),
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
                null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else
                t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        setFromPoints: function(t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.push(r.x, r.y, r.z || 0)
            }
            return this.addAttribute("position", new R(e,3)),
            this
        },
        updateFromObject: function(t) {
            var e = t.geometry;
            if (t.isMesh) {
                var i = e.__directGeometry;
                if (!0 === e.elementsNeedUpdate && (i = void 0,
                e.elementsNeedUpdate = !1),
                void 0 === i)
                    return this.fromGeometry(e);
                i.verticesNeedUpdate = e.verticesNeedUpdate,
                i.normalsNeedUpdate = e.normalsNeedUpdate,
                i.colorsNeedUpdate = e.colorsNeedUpdate,
                i.uvsNeedUpdate = e.uvsNeedUpdate,
                i.groupsNeedUpdate = e.groupsNeedUpdate,
                e.verticesNeedUpdate = !1,
                e.normalsNeedUpdate = !1,
                e.colorsNeedUpdate = !1,
                e.uvsNeedUpdate = !1,
                e.groupsNeedUpdate = !1,
                e = i
            }
            return !0 === e.verticesNeedUpdate && (void 0 !== (i = this.attributes.position) && (i.copyVector3sArray(e.vertices),
            i.needsUpdate = !0),
            e.verticesNeedUpdate = !1),
            !0 === e.normalsNeedUpdate && (void 0 !== (i = this.attributes.normal) && (i.copyVector3sArray(e.normals),
            i.needsUpdate = !0),
            e.normalsNeedUpdate = !1),
            !0 === e.colorsNeedUpdate && (void 0 !== (i = this.attributes.color) && (i.copyColorsArray(e.colors),
            i.needsUpdate = !0),
            e.colorsNeedUpdate = !1),
            e.uvsNeedUpdate && (void 0 !== (i = this.attributes.uv) && (i.copyVector2sArray(e.uvs),
            i.needsUpdate = !0),
            e.uvsNeedUpdate = !1),
            e.lineDistancesNeedUpdate && (void 0 !== (i = this.attributes.lineDistance) && (i.copyArray(e.lineDistances),
            i.needsUpdate = !0),
            e.lineDistancesNeedUpdate = !1),
            e.groupsNeedUpdate && (e.computeGroups(t.geometry),
            this.groups = e.groups,
            e.groupsNeedUpdate = !1),
            this
        },
        fromGeometry: function(t) {
            return t.__directGeometry = (new b).fromGeometry(t),
            this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function(t) {
            var e = new Float32Array(3 * t.vertices.length);
            for (var i in this.addAttribute("position", new f(e,3).copyVector3sArray(t.vertices)),
            0 < t.normals.length && (e = new Float32Array(3 * t.normals.length),
            this.addAttribute("normal", new f(e,3).copyVector3sArray(t.normals))),
            0 < t.colors.length && (e = new Float32Array(3 * t.colors.length),
            this.addAttribute("color", new f(e,3).copyColorsArray(t.colors))),
            0 < t.uvs.length && (e = new Float32Array(2 * t.uvs.length),
            this.addAttribute("uv", new f(e,2).copyVector2sArray(t.uvs))),
            0 < t.uvs2.length && (e = new Float32Array(2 * t.uvs2.length),
            this.addAttribute("uv2", new f(e,2).copyVector2sArray(t.uvs2))),
            this.groups = t.groups,
            t.morphTargets) {
                e = [];
                for (var n = t.morphTargets[i], r = 0, a = n.length; r < a; r++) {
                    var o = n[r]
                      , s = new R(3 * o.data.length,3);
                    s.name = o.name,
                    e.push(s.copyVector3sArray(o.data))
                }
                this.morphAttributes[i] = e
            }
            return 0 < t.skinIndices.length && (i = new R(4 * t.skinIndices.length,4),
            this.addAttribute("skinIndex", i.copyVector4sArray(t.skinIndices))),
            0 < t.skinWeights.length && (i = new R(4 * t.skinWeights.length,4),
            this.addAttribute("skinWeight", i.copyVector4sArray(t.skinWeights))),
            null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new i);
            var t = this.attributes.position;
            void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(),
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: (yo = new i,
        xo = new Mt,
        function() {
            null === this.boundingSphere && (this.boundingSphere = new o);
            var t = this.attributes.position;
            if (t) {
                var e = this.boundingSphere.center;
                yo.setFromBufferAttribute(t),
                yo.getCenter(e);
                for (var i = 0, n = 0, r = t.count; n < r; n++)
                    xo.x = t.getX(n),
                    xo.y = t.getY(n),
                    xo.z = t.getZ(n),
                    i = Math.max(i, e.distanceToSquared(xo));
                this.boundingSphere.radius = Math.sqrt(i),
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
        ),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var t = this.index
              , e = this.attributes;
            if (e.position) {
                var i = e.position.array;
                if (void 0 === e.normal)
                    this.addAttribute("normal", new f(new Float32Array(i.length),3));
                else
                    for (var n = e.normal.array, r = 0, a = n.length; r < a; r++)
                        n[r] = 0;
                n = e.normal.array;
                var o = new Mt
                  , s = new Mt
                  , c = new Mt
                  , h = new Mt
                  , l = new Mt;
                if (t) {
                    var u = t.array;
                    for (r = 0,
                    a = t.count; r < a; r += 3) {
                        t = 3 * u[r + 0];
                        var p = 3 * u[r + 1]
                          , d = 3 * u[r + 2];
                        o.fromArray(i, t),
                        s.fromArray(i, p),
                        c.fromArray(i, d),
                        h.subVectors(c, s),
                        l.subVectors(o, s),
                        h.cross(l),
                        n[t] += h.x,
                        n[t + 1] += h.y,
                        n[t + 2] += h.z,
                        n[p] += h.x,
                        n[p + 1] += h.y,
                        n[p + 2] += h.z,
                        n[d] += h.x,
                        n[d + 1] += h.y,
                        n[d + 2] += h.z
                    }
                } else
                    for (r = 0,
                    a = i.length; r < a; r += 9)
                        o.fromArray(i, r),
                        s.fromArray(i, r + 3),
                        c.fromArray(i, r + 6),
                        h.subVectors(c, s),
                        l.subVectors(o, s),
                        h.cross(l),
                        n[r] = h.x,
                        n[r + 1] = h.y,
                        n[r + 2] = h.z,
                        n[r + 3] = h.x,
                        n[r + 4] = h.y,
                        n[r + 5] = h.z,
                        n[r + 6] = h.x,
                        n[r + 7] = h.y,
                        n[r + 8] = h.z;
                this.normalizeNormals(),
                e.normal.needsUpdate = !0
            }
        },
        merge: function(t, e) {
            if (t && t.isBufferGeometry) {
                void 0 === e && (e = 0,
                console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                var i, n = this.attributes;
                for (i in n)
                    if (void 0 !== t.attributes[i]) {
                        var r = n[i].array
                          , a = t.attributes[i]
                          , o = a.array
                          , s = 0;
                        for (a = a.itemSize * e; s < o.length; s++,
                        a++)
                            r[a] = o[s]
                    }
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
        },
        normalizeNormals: (vo = new Mt,
        function() {
            for (var t = this.attributes.normal, e = 0, i = t.count; e < i; e++)
                vo.x = t.getX(e),
                vo.y = t.getY(e),
                vo.z = t.getZ(e),
                vo.normalize(),
                t.setXYZ(e, vo.x, vo.y, vo.z)
        }
        ),
        toNonIndexed: function() {
            if (null === this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
                this;
            var t, e = new P, i = this.index.array, n = this.attributes;
            for (t in n) {
                var r = n[t]
                  , a = r.array
                  , o = r.itemSize
                  , s = new a.constructor(i.length * o)
                  , c = 0;
                r = 0;
                for (var h = i.length; r < h; r++)
                    for (var l = i[r] * o, u = 0; u < o; u++)
                        s[c++] = a[l++];
                e.addAttribute(t, new f(s,o))
            }
            for (r = 0,
            h = (i = this.groups).length; r < h; r++)
                n = i[r],
                e.addGroup(n.start, n.count, n.materialIndex);
            return e
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid,
            t.type = this.type,
            "" !== this.name && (t.name = this.name),
            0 < Object.keys(this.userData).length && (t.userData = this.userData),
            void 0 !== this.parameters) {
                var e = this.parameters;
                for (r in e)
                    void 0 !== e[r] && (t[r] = e[r]);
                return t
            }
            t.data = {
                attributes: {}
            };
            var i = this.index;
            for (r in null !== i && (e = Array.prototype.slice.call(i.array),
            t.data.index = {
                type: i.array.constructor.name,
                array: e
            }),
            i = this.attributes) {
                var n = i[r];
                e = Array.prototype.slice.call(n.array),
                t.data.attributes[r] = {
                    itemSize: n.itemSize,
                    type: n.array.constructor.name,
                    array: e,
                    normalized: n.normalized
                }
            }
            var r = this.groups;
            return 0 < r.length && (t.data.groups = JSON.parse(JSON.stringify(r))),
            null !== (r = this.boundingSphere) && (t.data.boundingSphere = {
                center: r.center.toArray(),
                radius: r.radius
            }),
            t
        },
        clone: function() {
            return (new P).copy(this)
        },
        copy: function(t) {
            var e;
            this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.groups = [],
            this.boundingSphere = this.boundingBox = null,
            this.name = t.name;
            var i = t.index;
            for (o in null !== i && this.setIndex(i.clone()),
            i = t.attributes)
                this.addAttribute(o, i[o].clone());
            var n = t.morphAttributes;
            for (o in n) {
                var r = []
                  , a = n[o];
                for (i = 0,
                e = a.length; i < e; i++)
                    r.push(a[i].clone());
                this.morphAttributes[o] = r
            }
            var o = t.groups;
            for (i = 0,
            e = o.length; i < e; i++)
                n = o[i],
                this.addGroup(n.start, n.count, n.materialIndex);
            return null !== (o = t.boundingBox) && (this.boundingBox = o.clone()),
            null !== (o = t.boundingSphere) && (this.boundingSphere = o.clone()),
            this.drawRange.start = t.drawRange.start,
            this.drawRange.count = t.drawRange.count,
            this.userData = t.userData,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    (T.prototype = Object.create(E.prototype)).constructor = T,
    (S.prototype = Object.create(P.prototype)).constructor = S,
    (L.prototype = Object.create(E.prototype)).constructor = L,
    (C.prototype = Object.create(P.prototype)).constructor = C;
    var Lo, Ro, Po, Co, Io, Oo, No, Do, Uo, Bo, Fo, zo, Go, Ho, Vo, ko, jo, Wo, Xo, qo, Yo, Jo, Zo, Qo, Ko, $o = 0;
    I.prototype = Object.assign(Object.create(e.prototype), {
        constructor: I,
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(t) {
            if (void 0 !== t)
                for (var e in t) {
                    var i = t[e];
                    if (void 0 === i)
                        console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    else if ("shading" === e)
                        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                        this.flatShading = 1 === i;
                    else {
                        var n = this[e];
                        void 0 === n ? console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.") : n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = "overdraw" === e ? Number(i) : i
                    }
                }
        },
        toJSON: function(t) {
            function e(t) {
                var e, i = [];
                for (e in t) {
                    var n = t[e];
                    delete n.metadata,
                    i.push(n)
                }
                return i
            }
            var i = void 0 === t || "string" == typeof t;
            i && (t = {
                textures: {},
                images: {}
            });
            var n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            return n.uuid = this.uuid,
            n.type = this.type,
            "" !== this.name && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            void 0 !== this.roughness && (n.roughness = this.roughness),
            void 0 !== this.metalness && (n.metalness = this.metalness),
            this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
            1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
            this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
            void 0 !== this.shininess && (n.shininess = this.shininess),
            void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat),
            void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
            this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid),
            this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
            n.aoMapIntensity = this.aoMapIntensity),
            this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
            n.bumpScale = this.bumpScale),
            this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
            n.normalMapType = this.normalMapType,
            n.normalScale = this.normalScale.toArray()),
            this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
            n.displacementScale = this.displacementScale,
            n.displacementBias = this.displacementBias),
            this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
            this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
            n.reflectivity = this.reflectivity,
            void 0 !== this.combine && (n.combine = this.combine),
            void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)),
            this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
            void 0 !== this.size && (n.size = this.size),
            void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
            1 !== this.blending && (n.blending = this.blending),
            !0 === this.flatShading && (n.flatShading = this.flatShading),
            0 !== this.side && (n.side = this.side),
            0 !== this.vertexColors && (n.vertexColors = this.vertexColors),
            this.opacity < 1 && (n.opacity = this.opacity),
            !0 === this.transparent && (n.transparent = this.transparent),
            n.depthFunc = this.depthFunc,
            n.depthTest = this.depthTest,
            n.depthWrite = this.depthWrite,
            0 !== this.rotation && (n.rotation = this.rotation),
            !0 === this.polygonOffset && (n.polygonOffset = !0),
            0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
            0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
            1 !== this.linewidth && (n.linewidth = this.linewidth),
            void 0 !== this.dashSize && (n.dashSize = this.dashSize),
            void 0 !== this.gapSize && (n.gapSize = this.gapSize),
            void 0 !== this.scale && (n.scale = this.scale),
            !0 === this.dithering && (n.dithering = !0),
            0 < this.alphaTest && (n.alphaTest = this.alphaTest),
            !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
            !0 === this.wireframe && (n.wireframe = this.wireframe),
            1 < this.wireframeLinewidth && (n.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
            !0 === this.morphTargets && (n.morphTargets = !0),
            !0 === this.skinning && (n.skinning = !0),
            !1 === this.visible && (n.visible = !1),
            "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
            i && (i = e(t.textures),
            t = e(t.images),
            0 < i.length && (n.textures = i),
            0 < t.length && (n.images = t)),
            n
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.name = t.name,
            this.fog = t.fog,
            this.lights = t.lights,
            this.blending = t.blending,
            this.side = t.side,
            this.flatShading = t.flatShading,
            this.vertexColors = t.vertexColors,
            this.opacity = t.opacity,
            this.transparent = t.transparent,
            this.blendSrc = t.blendSrc,
            this.blendDst = t.blendDst,
            this.blendEquation = t.blendEquation,
            this.blendSrcAlpha = t.blendSrcAlpha,
            this.blendDstAlpha = t.blendDstAlpha,
            this.blendEquationAlpha = t.blendEquationAlpha,
            this.depthFunc = t.depthFunc,
            this.depthTest = t.depthTest,
            this.depthWrite = t.depthWrite,
            this.colorWrite = t.colorWrite,
            this.precision = t.precision,
            this.polygonOffset = t.polygonOffset,
            this.polygonOffsetFactor = t.polygonOffsetFactor,
            this.polygonOffsetUnits = t.polygonOffsetUnits,
            this.dithering = t.dithering,
            this.alphaTest = t.alphaTest,
            this.premultipliedAlpha = t.premultipliedAlpha,
            this.overdraw = t.overdraw,
            this.visible = t.visible,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            this.clipShadows = t.clipShadows,
            this.clipIntersection = t.clipIntersection;
            var e = t.clippingPlanes
              , i = null;
            if (null !== e) {
                var n = e.length;
                i = Array(n);
                for (var r = 0; r !== n; ++r)
                    i[r] = e[r].clone()
            }
            return this.clippingPlanes = i,
            this.shadowSide = t.shadowSide,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    ((O.prototype = Object.create(I.prototype)).constructor = O).prototype.isShaderMaterial = !0,
    O.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.fragmentShader = t.fragmentShader,
        this.vertexShader = t.vertexShader,
        this.uniforms = Ba.clone(t.uniforms),
        this.defines = Object.assign({}, t.defines),
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.lights = t.lights,
        this.clipping = t.clipping,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this.extensions = t.extensions,
        this
    }
    ,
    O.prototype.toJSON = function(t) {
        var e = I.prototype.toJSON.call(this, t);
        for (var i in e.uniforms = {},
        this.uniforms) {
            var n = this.uniforms[i].value;
            e.uniforms[i] = n.isTexture ? {
                type: "t",
                value: n.toJSON(t).uuid
            } : n.isColor ? {
                type: "c",
                value: n.getHex()
            } : n.isVector2 ? {
                type: "v2",
                value: n.toArray()
            } : n.isVector3 ? {
                type: "v3",
                value: n.toArray()
            } : n.isVector4 ? {
                type: "v4",
                value: n.toArray()
            } : n.isMatrix4 ? {
                type: "m4",
                value: n.toArray()
            } : {
                value: n
            }
        }
        return 0 < Object.keys(this.defines).length && (e.defines = this.defines),
        e.vertexShader = this.vertexShader,
        e.fragmentShader = this.fragmentShader,
        e
    }
    ,
    Object.assign(B.prototype, {
        set: function(t, e) {
            return this.origin.copy(t),
            this.direction.copy(e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.origin.copy(t.origin),
            this.direction.copy(t.direction),
            this
        },
        at: function(t, e) {
            return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"),
            e = new Mt),
            e.copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function(t) {
            return this.direction.copy(t).sub(this.origin).normalize(),
            this
        },
        recast: (Fo = new Mt,
        function(t) {
            return this.origin.copy(this.at(t, Fo)),
            this
        }
        ),
        closestPointToPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
            e = new Mt),
            e.subVectors(t, this.origin),
            (t = e.dot(this.direction)) < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        distanceToPoint: function(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: (Bo = new Mt,
        function(t) {
            var e = Bo.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (Bo.copy(this.direction).multiplyScalar(e).add(this.origin),
            Bo.distanceToSquared(t))
        }
        ),
        distanceSqToSegment: (No = new Mt,
        Do = new Mt,
        Uo = new Mt,
        function(t, e, i, n) {
            No.copy(t).add(e).multiplyScalar(.5),
            Do.copy(e).sub(t).normalize(),
            Uo.copy(this.origin).sub(No);
            var r = .5 * t.distanceTo(e)
              , a = -this.direction.dot(Do)
              , o = Uo.dot(this.direction)
              , s = -Uo.dot(Do)
              , c = Uo.lengthSq()
              , h = Math.abs(1 - a * a);
            if (0 < h) {
                e = a * o - s;
                var l = r * h;
                a = 0 <= (t = a * s - o) ? -l <= e ? e <= l ? (t *= r = 1 / h) * (t + a * (e *= r) + 2 * o) + e * (a * t + e + 2 * s) + c : (e = r,
                -(t = Math.max(0, -(a * e + o))) * t + e * (e + 2 * s) + c) : (e = -r,
                -(t = Math.max(0, -(a * e + o))) * t + e * (e + 2 * s) + c) : e <= -l ? -(t = Math.max(0, -(-a * r + o))) * t + (e = 0 < t ? -r : Math.min(Math.max(-r, -s), r)) * (e + 2 * s) + c : e <= l ? (t = 0,
                (e = Math.min(Math.max(-r, -s), r)) * (e + 2 * s) + c) : -(t = Math.max(0, -(a * r + o))) * t + (e = 0 < t ? r : Math.min(Math.max(-r, -s), r)) * (e + 2 * s) + c
            } else
                e = 0 < a ? -r : r,
                a = -(t = Math.max(0, -(a * e + o))) * t + e * (e + 2 * s) + c;
            return i && i.copy(this.direction).multiplyScalar(t).add(this.origin),
            n && n.copy(Do).multiplyScalar(e).add(No),
            a
        }
        ),
        intersectSphere: (Oo = new Mt,
        function(t, e) {
            Oo.subVectors(t.center, this.origin);
            var i = Oo.dot(this.direction)
              , n = Oo.dot(Oo) - i * i;
            return (t = t.radius * t.radius) < n ? null : (n = i - (t = Math.sqrt(t - n)),
            i += t,
            n < 0 && i < 0 ? null : n < 0 ? this.at(i, e) : this.at(n, e))
        }
        ),
        intersectsSphere: function(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius
        },
        distanceToPlane: function(t) {
            var e = t.normal.dot(this.direction);
            return 0 === e ? 0 === t.distanceToPoint(this.origin) ? 0 : null : 0 <= (t = -(this.origin.dot(t.normal) + t.constant) / e) ? t : null
        },
        intersectPlane: function(t, e) {
            return null === (t = this.distanceToPlane(t)) ? null : this.at(t, e)
        },
        intersectsPlane: function(t) {
            var e = t.distanceToPoint(this.origin);
            return 0 === e || t.normal.dot(this.direction) * e < 0
        },
        intersectBox: function(t, e) {
            var i = 1 / this.direction.x
              , n = 1 / this.direction.y
              , r = 1 / this.direction.z
              , a = this.origin;
            if (0 <= i) {
                var o = (t.min.x - a.x) * i;
                i *= t.max.x - a.x
            } else
                o = (t.max.x - a.x) * i,
                i *= t.min.x - a.x;
            if (0 <= n) {
                var s = (t.min.y - a.y) * n;
                n *= t.max.y - a.y
            } else
                s = (t.max.y - a.y) * n,
                n *= t.min.y - a.y;
            return n < o || i < s ? null : ((o < s || o != o) && (o = s),
            (n < i || i != i) && (i = n),
            (t = 0 <= r ? (s = (t.min.z - a.z) * r,
            (t.max.z - a.z) * r) : (s = (t.max.z - a.z) * r,
            (t.min.z - a.z) * r)) < o || i < s ? null : ((o < s || o != o) && (o = s),
            (t < i || i != i) && (i = t),
            i < 0 ? null : this.at(0 <= o ? o : i, e)))
        },
        intersectsBox: (Io = new Mt,
        function(t) {
            return null !== this.intersectBox(t, Io)
        }
        ),
        intersectTriangle: (Lo = new Mt,
        Ro = new Mt,
        Po = new Mt,
        Co = new Mt,
        function(t, e, i, n, r) {
            if (Ro.subVectors(e, t),
            Po.subVectors(i, t),
            Co.crossVectors(Ro, Po),
            0 < (e = this.direction.dot(Co))) {
                if (n)
                    return null;
                n = 1
            } else {
                if (!(e < 0))
                    return null;
                n = -1,
                e = -e
            }
            return Lo.subVectors(this.origin, t),
            (t = n * this.direction.dot(Po.crossVectors(Lo, Po))) < 0 ? null : (i = n * this.direction.dot(Ro.cross(Lo))) < 0 || e < t + i ? null : (t = -n * Lo.dot(Co)) < 0 ? null : this.at(t / e, r)
        }
        ),
        applyMatrix4: function(t) {
            return this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
        },
        equals: function(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    }),
    Object.assign(F, {
        getNormal: (jo = new Mt,
        function(t, e, i, n) {
            return void 0 === n && (console.warn("THREE.Triangle: .getNormal() target is now required"),
            n = new Mt),
            n.subVectors(i, e),
            jo.subVectors(t, e),
            n.cross(jo),
            0 < (t = n.lengthSq()) ? n.multiplyScalar(1 / Math.sqrt(t)) : n.set(0, 0, 0)
        }
        ),
        getBarycoord: (Ho = new Mt,
        Vo = new Mt,
        ko = new Mt,
        function(t, e, i, n, r) {
            Ho.subVectors(n, e),
            Vo.subVectors(i, e),
            ko.subVectors(t, e),
            t = Ho.dot(Ho),
            e = Ho.dot(Vo),
            i = Ho.dot(ko);
            var a = Vo.dot(Vo);
            n = Vo.dot(ko);
            var o = t * a - e * e;
            return void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
            r = new Mt),
            0 === o ? r.set(-2, -1, -1) : (a = (a * i - e * n) * (o = 1 / o),
            t = (t * n - e * i) * o,
            r.set(1 - a - t, t, a))
        }
        ),
        containsPoint: (Go = new Mt,
        function(t, e, i, n) {
            return F.getBarycoord(t, e, i, n, Go),
            0 <= Go.x && 0 <= Go.y && Go.x + Go.y <= 1
        }
        ),
        getUV: (zo = new Mt,
        function(t, e, i, n, r, a, o, s) {
            return this.getBarycoord(t, e, i, n, zo),
            s.set(0, 0),
            s.addScaledVector(r, zo.x),
            s.addScaledVector(a, zo.y),
            s.addScaledVector(o, zo.z),
            s
        }
        )
    }),
    Object.assign(F.prototype, {
        set: function(t, e, i) {
            return this.a.copy(t),
            this.b.copy(e),
            this.c.copy(i),
            this
        },
        setFromPointsAndIndices: function(t, e, i, n) {
            return this.a.copy(t[e]),
            this.b.copy(t[i]),
            this.c.copy(t[n]),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.a.copy(t.a),
            this.b.copy(t.b),
            this.c.copy(t.c),
            this
        },
        getArea: (Qo = new Mt,
        Ko = new Mt,
        function() {
            return Qo.subVectors(this.c, this.b),
            Ko.subVectors(this.a, this.b),
            .5 * Qo.cross(Ko).length()
        }
        ),
        getMidpoint: function(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
            t = new Mt),
            t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        getNormal: function(t) {
            return F.getNormal(this.a, this.b, this.c, t)
        },
        getPlane: function(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"),
            t = new Mt),
            t.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        getBarycoord: function(t, e) {
            return F.getBarycoord(t, this.a, this.b, this.c, e)
        },
        containsPoint: function(t) {
            return F.containsPoint(t, this.a, this.b, this.c)
        },
        getUV: function(t, e, i, n, r) {
            return F.getUV(t, this.a, this.b, this.c, e, i, n, r)
        },
        intersectsBox: function(t) {
            return t.intersectsTriangle(this)
        },
        closestPointToPoint: (Wo = new Mt,
        Xo = new Mt,
        qo = new Mt,
        Yo = new Mt,
        Jo = new Mt,
        Zo = new Mt,
        function(t, e) {
            void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),
            e = new Mt);
            var i = this.a
              , n = this.b
              , r = this.c;
            Wo.subVectors(n, i),
            Xo.subVectors(r, i),
            Yo.subVectors(t, i);
            var a = Wo.dot(Yo)
              , o = Xo.dot(Yo);
            if (a <= 0 && o <= 0)
                return e.copy(i);
            Jo.subVectors(t, n);
            var s = Wo.dot(Jo)
              , c = Xo.dot(Jo);
            if (0 <= s && c <= s)
                return e.copy(n);
            var h = a * c - s * o;
            if (h <= 0 && 0 <= a && s <= 0)
                return n = a / (a - s),
                e.copy(i).addScaledVector(Wo, n);
            Zo.subVectors(t, r),
            t = Wo.dot(Zo);
            var l = Xo.dot(Zo);
            return 0 <= l && t <= l ? e.copy(r) : (a = t * o - a * l) <= 0 && 0 <= o && l <= 0 ? (h = o / (o - l),
            e.copy(i).addScaledVector(Xo, h)) : (o = s * l - t * c) <= 0 && 0 <= c - s && 0 <= t - l ? (qo.subVectors(r, n),
            h = (c - s) / (c - s + (t - l)),
            e.copy(n).addScaledVector(qo, h)) : (n = a * (r = 1 / (o + a + h)),
            h *= r,
            e.copy(i).addScaledVector(Wo, n).addScaledVector(Xo, h))
        }
        ),
        equals: function(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }),
    ((N.prototype = Object.create(I.prototype)).constructor = N).prototype.isMeshBasicMaterial = !0,
    N.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this
    }
    ,
    D.prototype = Object.assign(Object.create(l.prototype), {
        constructor: D,
        isMesh: !0,
        setDrawMode: function(t) {
            this.drawMode = t
        },
        copy: function(t) {
            return l.prototype.copy.call(this, t),
            this.drawMode = t.drawMode,
            void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
            void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
            this
        },
        updateMorphTargets: function() {
            var t = this.geometry;
            if (t.isBufferGeometry) {
                t = t.morphAttributes;
                var e = Object.keys(t);
                if (0 < e.length) {
                    var i = t[e[0]];
                    if (void 0 !== i)
                        for (this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {},
                        t = 0,
                        e = i.length; t < e; t++) {
                            var n = i[t].name || String(t);
                            this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = t
                        }
                }
            } else if (void 0 !== (i = t.morphTargets) && 0 < i.length)
                for (this.morphTargetInfluences = [],
                this.morphTargetDictionary = {},
                t = 0,
                e = i.length; t < e; t++)
                    n = i[t].name || String(t),
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[n] = t
        },
        raycast: function() {
            function _(t, e, i, n, r, a, o, s) {
                return null === (1 === e.side ? n.intersectTriangle(o, a, r, !0, s) : n.intersectTriangle(r, a, o, 2 !== e.side, s)) ? null : (c.copy(s),
                c.applyMatrix4(t.matrixWorld),
                (e = i.ray.origin.distanceTo(c)) < i.near || e > i.far ? null : {
                    distance: e,
                    point: c.clone(),
                    object: t
                })
            }
            function w(t, e, i, n, r, a, o, s, c) {
                return S.fromBufferAttribute(r, o),
                A.fromBufferAttribute(r, s),
                L.fromBufferAttribute(r, c),
                (t = _(t, e, i, n, S, A, L, D)) && (a && (I.fromBufferAttribute(a, o),
                O.fromBufferAttribute(a, s),
                N.fromBufferAttribute(a, c),
                t.uv = F.getUV(D, S, A, L, I, O, N, new W)),
                a = new U(o,s,c),
                F.getNormal(S, A, L, a.normal),
                t.face = a),
                t
            }
            var M = new wt
              , E = new B
              , T = new o
              , S = new Mt
              , A = new Mt
              , L = new Mt
              , R = new Mt
              , P = new Mt
              , C = new Mt
              , I = new W
              , O = new W
              , N = new W
              , D = new Mt
              , c = new Mt;
            return function(t, e) {
                var i = this.geometry
                  , n = this.material
                  , r = this.matrixWorld;
                if (void 0 !== n && (null === i.boundingSphere && i.computeBoundingSphere(),
                T.copy(i.boundingSphere),
                T.applyMatrix4(r),
                !1 !== t.ray.intersectsSphere(T) && (M.getInverse(r),
                E.copy(t.ray).applyMatrix4(M),
                null === i.boundingBox || !1 !== E.intersectsBox(i.boundingBox))))
                    if (i.isBufferGeometry) {
                        var a, o = i.index, s = i.attributes.position, c = i.attributes.uv, h = i.groups;
                        if (i = i.drawRange,
                        null !== o)
                            if (Array.isArray(n)) {
                                var l = 0;
                                for (a = h.length; l < a; l++) {
                                    var u = h[l]
                                      , p = n[u.materialIndex];
                                    r = Math.max(u.start, i.start);
                                    var d = Math.min(u.start + u.count, i.start + i.count);
                                    for (u = r; u < d; u += 3) {
                                        r = o.getX(u);
                                        var f = o.getX(u + 1)
                                          , m = o.getX(u + 2);
                                        (r = w(this, p, t, E, s, c, r, f, m)) && (r.faceIndex = Math.floor(u / 3),
                                        e.push(r))
                                    }
                                }
                            } else
                                for (l = r = Math.max(0, i.start),
                                a = d = Math.min(o.count, i.start + i.count); l < a; l += 3)
                                    r = o.getX(l),
                                    f = o.getX(l + 1),
                                    m = o.getX(l + 2),
                                    (r = w(this, n, t, E, s, c, r, f, m)) && (r.faceIndex = Math.floor(l / 3),
                                    e.push(r));
                        else if (void 0 !== s)
                            if (Array.isArray(n))
                                for (l = 0,
                                a = h.length; l < a; l++)
                                    for (p = n[(u = h[l]).materialIndex],
                                    r = Math.max(u.start, i.start),
                                    d = Math.min(u.start + u.count, i.start + i.count),
                                    u = r; u < d; u += 3)
                                        (r = w(this, p, t, E, s, c, r = u, f = u + 1, m = u + 2)) && (r.faceIndex = Math.floor(u / 3),
                                        e.push(r));
                            else
                                for (l = r = Math.max(0, i.start),
                                a = d = Math.min(s.count, i.start + i.count); l < a; l += 3)
                                    (r = w(this, n, t, E, s, c, r = l, f = l + 1, m = l + 2)) && (r.faceIndex = Math.floor(l / 3),
                                    e.push(r))
                    } else if (i.isGeometry)
                        for (s = Array.isArray(n),
                        c = i.vertices,
                        h = i.faces,
                        0 < (r = i.faceVertexUvs[0]).length && (o = r),
                        u = 0,
                        d = h.length; u < d; u++)
                            if (f = h[u],
                            void 0 !== (r = s ? n[f.materialIndex] : n)) {
                                if (l = c[f.a],
                                a = c[f.b],
                                p = c[f.c],
                                !0 === r.morphTargets) {
                                    m = i.morphTargets;
                                    var g = this.morphTargetInfluences;
                                    S.set(0, 0, 0),
                                    A.set(0, 0, 0),
                                    L.set(0, 0, 0);
                                    for (var v = 0, y = m.length; v < y; v++) {
                                        var x = g[v];
                                        if (0 !== x) {
                                            var b = m[v].vertices;
                                            S.addScaledVector(R.subVectors(b[f.a], l), x),
                                            A.addScaledVector(P.subVectors(b[f.b], a), x),
                                            L.addScaledVector(C.subVectors(b[f.c], p), x)
                                        }
                                    }
                                    S.add(l),
                                    A.add(a),
                                    L.add(p),
                                    l = S,
                                    a = A,
                                    p = L
                                }
                                (r = _(this, r, t, E, l, a, p, D)) && (o && o[u] && (m = o[u],
                                I.copy(m[0]),
                                O.copy(m[1]),
                                N.copy(m[2]),
                                r.uv = F.getUV(D, l, a, p, I, O, N, new W)),
                                r.face = f,
                                r.faceIndex = u,
                                e.push(r))
                            }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    ((G.prototype = Object.create(p.prototype)).constructor = G).prototype.isCubeTexture = !0,
    Object.defineProperty(G.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(t) {
            this.image = t
        }
    }),
    ((H.prototype = Object.create(p.prototype)).constructor = H).prototype.isDataTexture3D = !0;
    var ts = new p
      , es = new H
      , is = new G
      , ns = []
      , rs = []
      , as = new Float32Array(16)
      , os = new Float32Array(9)
      , ss = new Float32Array(4);
    yt.prototype.updateCache = function(t) {
        var e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)),
        j(e, t)
    }
    ,
    xt.prototype.setValue = function(t, e, i) {
        for (var n = this.seq, r = 0, a = n.length; r !== a; ++r) {
            var o = n[r];
            o.setValue(t, e[o.id], i)
        }
    }
    ;
    var cs = /([\w\d_]+)(\])?(\[|\.)?/g;
    zt.prototype.setValue = function(t, e, i) {
        void 0 !== (e = this.map[e]) && e.setValue(t, i, this.renderer)
    }
    ,
    zt.prototype.setOptional = function(t, e, i) {
        void 0 !== (e = e[i]) && this.setValue(t, i, e)
    }
    ,
    zt.upload = function(t, e, i, n) {
        for (var r = 0, a = e.length; r !== a; ++r) {
            var o = e[r]
              , s = i[o.id];
            !1 !== s.needsUpdate && o.setValue(t, s.value, n)
        }
    }
    ,
    zt.seqWithValue = function(t, e) {
        for (var i = [], n = 0, r = t.length; n !== r; ++n) {
            var a = t[n];
            a.id in e && i.push(a)
        }
        return i
    }
    ;
    var hs, ls, us, ps, ds, fs, ms, gs, vs, ys, xs, bs, _s, ws, Ms, Es, Ts = 0, Ss = 0;
    ((ne.prototype = Object.create(I.prototype)).constructor = ne).prototype.isMeshDepthMaterial = !0,
    ne.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.depthPacking = t.depthPacking,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
    ,
    ((re.prototype = Object.create(I.prototype)).constructor = re).prototype.isMeshDistanceMaterial = !0,
    re.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.referencePosition.copy(t.referencePosition),
        this.nearDistance = t.nearDistance,
        this.farDistance = t.farDistance,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this
    }
    ,
    he.prototype = Object.assign(Object.create(l.prototype), {
        constructor: he,
        isGroup: !0
    }),
    le.prototype = Object.assign(Object.create(l.prototype), {
        constructor: le,
        isCamera: !0,
        copy: function(t, e) {
            return l.prototype.copy.call(this, t, e),
            this.matrixWorldInverse.copy(t.matrixWorldInverse),
            this.projectionMatrix.copy(t.projectionMatrix),
            this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
            this
        },
        getWorldDirection: function(t) {
            void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"),
            t = new Mt),
            this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize()
        },
        updateMatrixWorld: function(t) {
            l.prototype.updateMatrixWorld.call(this, t),
            this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }),
    ue.prototype = Object.assign(Object.create(le.prototype), {
        constructor: ue,
        isPerspectiveCamera: !0,
        copy: function(t, e) {
            return le.prototype.copy.call(this, t, e),
            this.fov = t.fov,
            this.zoom = t.zoom,
            this.near = t.near,
            this.far = t.far,
            this.focus = t.focus,
            this.aspect = t.aspect,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this.filmGauge = t.filmGauge,
            this.filmOffset = t.filmOffset,
            this
        },
        setFocalLength: function(t) {
            t = .5 * this.getFilmHeight() / t,
            this.fov = 2 * fa.RAD2DEG * Math.atan(t),
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var t = Math.tan(.5 * fa.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function() {
            return 2 * fa.RAD2DEG * Math.atan(Math.tan(.5 * fa.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(t, e, i, n, r, a) {
            this.aspect = t / e,
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = t,
            this.view.fullHeight = e,
            this.view.offsetX = i,
            this.view.offsetY = n,
            this.view.width = r,
            this.view.height = a,
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = this.near
              , e = t * Math.tan(.5 * fa.DEG2RAD * this.fov) / this.zoom
              , i = 2 * e
              , n = this.aspect * i
              , r = -.5 * n
              , a = this.view;
            if (null !== this.view && this.view.enabled) {
                var o = a.fullWidth
                  , s = a.fullHeight;
                r += a.offsetX * n / o,
                e -= a.offsetY * i / s,
                n *= a.width / o,
                i *= a.height / s
            }
            0 !== (a = this.filmOffset) && (r += t * a / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far),
            this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(t) {
            return (t = l.prototype.toJSON.call(this, t)).object.fov = this.fov,
            t.object.zoom = this.zoom,
            t.object.near = this.near,
            t.object.far = this.far,
            t.object.focus = this.focus,
            t.object.aspect = this.aspect,
            null !== this.view && (t.object.view = Object.assign({}, this.view)),
            t.object.filmGauge = this.filmGauge,
            t.object.filmOffset = this.filmOffset,
            t
        }
    }),
    pe.prototype = Object.assign(Object.create(ue.prototype), {
        constructor: pe,
        isArrayCamera: !0
    }),
    ge.prototype.isFogExp2 = !0,
    ge.prototype.clone = function() {
        return new ge(this.color,this.density)
    }
    ,
    ge.prototype.toJSON = function() {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }
    ,
    ve.prototype.isFog = !0,
    ve.prototype.clone = function() {
        return new ve(this.color,this.near,this.far)
    }
    ,
    ve.prototype.toJSON = function() {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }
    ,
    ye.prototype = Object.assign(Object.create(l.prototype), {
        constructor: ye,
        copy: function(t, e) {
            return l.prototype.copy.call(this, t, e),
            null !== t.background && (this.background = t.background.clone()),
            null !== t.fog && (this.fog = t.fog.clone()),
            null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
            this.autoUpdate = t.autoUpdate,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this
        },
        toJSON: function(t) {
            var e = l.prototype.toJSON.call(this, t);
            return null !== this.background && (e.object.background = this.background.toJSON(t)),
            null !== this.fog && (e.object.fog = this.fog.toJSON()),
            e
        }
    }),
    Object.defineProperty(xe.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.assign(xe.prototype, {
        isInterleavedBuffer: !0,
        onUploadCallback: function() {},
        setArray: function(t) {
            if (Array.isArray(t))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            return this.count = void 0 !== t ? t.length / this.stride : 0,
            this.array = t,
            this
        },
        setDynamic: function(t) {
            return this.dynamic = t,
            this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array),
            this.count = t.count,
            this.stride = t.stride,
            this.dynamic = t.dynamic,
            this
        },
        copyAt: function(t, e, i) {
            t *= this.stride,
            i *= e.stride;
            for (var n = 0, r = this.stride; n < r; n++)
                this.array[t + n] = e.array[i + n];
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0),
            this.array.set(t, e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(t) {
            return this.onUploadCallback = t,
            this
        }
    }),
    Object.defineProperties(be.prototype, {
        count: {
            get: function() {
                return this.data.count
            }
        },
        array: {
            get: function() {
                return this.data.array
            }
        }
    }),
    Object.assign(be.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e,
            this
        },
        setY: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e,
            this
        },
        setZ: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e,
            this
        },
        setW: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e,
            this
        },
        getX: function(t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function(t, e, i) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = i,
            this
        },
        setXYZ: function(t, e, i, n) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = i,
            this.data.array[t + 2] = n,
            this
        },
        setXYZW: function(t, e, i, n, r) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = i,
            this.data.array[t + 2] = n,
            this.data.array[t + 3] = r,
            this
        }
    }),
    ((_e.prototype = Object.create(I.prototype)).constructor = _e).prototype.isSpriteMaterial = !0,
    _e.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.rotation = t.rotation,
        this.sizeAttenuation = t.sizeAttenuation,
        this
    }
    ,
    we.prototype = Object.assign(Object.create(l.prototype), {
        constructor: we,
        isSprite: !0,
        raycast: function() {
            function o(t, e, i, n, r, a) {
                l.subVectors(t, i).addScalar(.5).multiply(n),
                void 0 !== r ? (u.x = a * l.x - r * l.y,
                u.y = r * l.x + a * l.y) : u.copy(l),
                t.copy(e),
                t.x += u.x,
                t.y += u.y,
                t.applyMatrix4(p)
            }
            var s = new Mt
              , c = new Mt
              , h = new Mt
              , l = new W
              , u = new W
              , p = new wt
              , d = new Mt
              , f = new Mt
              , m = new Mt
              , g = new W
              , v = new W
              , y = new W;
            return function(t, e) {
                c.setFromMatrixScale(this.matrixWorld),
                p.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld),
                h.setFromMatrixPosition(this.modelViewMatrix);
                var i = this.material.rotation;
                if (0 !== i)
                    var n = Math.cos(i)
                      , r = Math.sin(i);
                i = this.center,
                o(d.set(-.5, -.5, 0), h, i, c, r, n),
                o(f.set(.5, -.5, 0), h, i, c, r, n),
                o(m.set(.5, .5, 0), h, i, c, r, n),
                g.set(0, 0),
                v.set(1, 0),
                y.set(1, 1);
                var a = t.ray.intersectTriangle(d, f, m, !1, s);
                null === a && (o(f.set(-.5, .5, 0), h, i, c, r, n),
                v.set(0, 1),
                null === (a = t.ray.intersectTriangle(d, m, f, !1, s))) || (r = t.ray.origin.distanceTo(s)) < t.near || r > t.far || e.push({
                    distance: r,
                    point: s.clone(),
                    uv: F.getUV(s, d, f, m, g, v, y, new W),
                    face: null,
                    object: this
                })
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        },
        copy: function(t) {
            return l.prototype.copy.call(this, t),
            void 0 !== t.center && this.center.copy(t.center),
            this
        }
    }),
    Me.prototype = Object.assign(Object.create(l.prototype), {
        constructor: Me,
        copy: function(t) {
            l.prototype.copy.call(this, t, !1);
            for (var e = 0, i = (t = t.levels).length; e < i; e++) {
                var n = t[e];
                this.addLevel(n.object.clone(), n.distance)
            }
            return this
        },
        addLevel: function(t, e) {
            void 0 === e && (e = 0),
            e = Math.abs(e);
            for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++)
                ;
            i.splice(n, 0, {
                distance: e,
                object: t
            }),
            this.add(t)
        },
        getObjectForDistance: function(t) {
            for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++)
                ;
            return e[i - 1].object
        },
        raycast: (ps = new Mt,
        function(t, e) {
            ps.setFromMatrixPosition(this.matrixWorld);
            var i = t.ray.origin.distanceTo(ps);
            this.getObjectForDistance(i).raycast(t, e)
        }
        ),
        update: (ls = new Mt,
        us = new Mt,
        function(t) {
            var e = this.levels;
            if (1 < e.length) {
                ls.setFromMatrixPosition(t.matrixWorld),
                us.setFromMatrixPosition(this.matrixWorld),
                t = ls.distanceTo(us),
                e[0].object.visible = !0;
                for (var i = 1, n = e.length; i < n && t >= e[i].distance; i++)
                    e[i - 1].object.visible = !1,
                    e[i].object.visible = !0;
                for (; i < n; i++)
                    e[i].object.visible = !1
            }
        }
        ),
        toJSON: function(t) {
            (t = l.prototype.toJSON.call(this, t)).object.levels = [];
            for (var e = this.levels, i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                t.object.levels.push({
                    object: r.object.uuid,
                    distance: r.distance
                })
            }
            return t
        }
    }),
    Object.assign(Ee.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var i = new wt;
                this.bones[t] && i.getInverse(this.bones[t].matrixWorld),
                this.boneInverses.push(i)
            }
        },
        pose: function() {
            var t, e, i = 0;
            for (e = this.bones.length; i < e; i++)
                (t = this.bones[i]) && t.matrixWorld.getInverse(this.boneInverses[i]);
            for (i = 0,
            e = this.bones.length; i < e; i++)
                (t = this.bones[i]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld),
                t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld),
                t.matrix.decompose(t.position, t.quaternion, t.scale))
        },
        update: (ds = new wt,
        fs = new wt,
        function() {
            for (var t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture, r = 0, a = t.length; r < a; r++)
                ds.multiplyMatrices(t[r] ? t[r].matrixWorld : fs, e[r]),
                ds.toArray(i, 16 * r);
            void 0 !== n && (n.needsUpdate = !0)
        }
        ),
        clone: function() {
            return new Ee(this.bones,this.boneInverses)
        },
        getBoneByName: function(t) {
            for (var e = 0, i = this.bones.length; e < i; e++) {
                var n = this.bones[e];
                if (n.name === t)
                    return n
            }
        }
    }),
    Te.prototype = Object.assign(Object.create(l.prototype), {
        constructor: Te,
        isBone: !0
    }),
    Se.prototype = Object.assign(Object.create(D.prototype), {
        constructor: Se,
        isSkinnedMesh: !0,
        initBones: function() {
            var t, e = [];
            if (this.geometry && void 0 !== this.geometry.bones) {
                var i = 0;
                for (t = this.geometry.bones.length; i < t; i++) {
                    var n = this.geometry.bones[i]
                      , r = new Te;
                    e.push(r),
                    r.name = n.name,
                    r.position.fromArray(n.pos),
                    r.quaternion.fromArray(n.rotq),
                    void 0 !== n.scl && r.scale.fromArray(n.scl)
                }
                for (i = 0,
                t = this.geometry.bones.length; i < t; i++)
                    -1 !== (n = this.geometry.bones[i]).parent && null !== n.parent && void 0 !== e[n.parent] ? e[n.parent].add(e[i]) : this.add(e[i])
            }
            return this.updateMatrixWorld(!0),
            e
        },
        bind: function(t, e) {
            this.skeleton = t,
            void 0 === e && (this.updateMatrixWorld(!0),
            this.skeleton.calculateInverses(),
            e = this.matrixWorld),
            this.bindMatrix.copy(e),
            this.bindMatrixInverse.getInverse(e)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            var t;
            if (this.geometry && this.geometry.isGeometry)
                for (t = 0; t < this.geometry.skinWeights.length; t++) {
                    var e = this.geometry.skinWeights[t]
                      , i = 1 / e.manhattanLength();
                    1 / 0 !== i ? e.multiplyScalar(i) : e.set(1, 0, 0, 0)
                }
            else if (this.geometry && this.geometry.isBufferGeometry) {
                e = new Et;
                var n = this.geometry.attributes.skinWeight;
                for (t = 0; t < n.count; t++)
                    e.x = n.getX(t),
                    e.y = n.getY(t),
                    e.z = n.getZ(t),
                    e.w = n.getW(t),
                    1 / 0 !== (i = 1 / e.manhattanLength()) ? e.multiplyScalar(i) : e.set(1, 0, 0, 0),
                    n.setXYZW(t, e.x, e.y, e.z, e.w)
            }
        },
        updateMatrixWorld: function(t) {
            D.prototype.updateMatrixWorld.call(this, t),
            "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    ((Ae.prototype = Object.create(I.prototype)).constructor = Ae).prototype.isLineBasicMaterial = !0,
    Ae.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.linewidth = t.linewidth,
        this.linecap = t.linecap,
        this.linejoin = t.linejoin,
        this
    }
    ,
    Le.prototype = Object.assign(Object.create(l.prototype), {
        constructor: Le,
        isLine: !0,
        computeLineDistances: (ys = new Mt,
        xs = new Mt,
        function() {
            var t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    for (var e = t.attributes.position, i = [0], n = 1, r = e.count; n < r; n++)
                        ys.fromBufferAttribute(e, n - 1),
                        xs.fromBufferAttribute(e, n),
                        i[n] = i[n - 1],
                        i[n] += ys.distanceTo(xs);
                    t.addAttribute("lineDistance", new R(i,1))
                } else
                    console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (t.isGeometry)
                for (e = t.vertices,
                (i = t.lineDistances)[0] = 0,
                n = 1,
                r = e.length; n < r; n++)
                    i[n] = i[n - 1],
                    i[n] += e[n - 1].distanceTo(e[n]);
            return this
        }
        ),
        raycast: (ms = new wt,
        gs = new B,
        vs = new o,
        function(t, e) {
            var i = t.linePrecision
              , n = this.geometry
              , r = this.matrixWorld;
            if (null === n.boundingSphere && n.computeBoundingSphere(),
            vs.copy(n.boundingSphere),
            vs.applyMatrix4(r),
            vs.radius += i,
            !1 !== t.ray.intersectsSphere(vs)) {
                ms.getInverse(r),
                gs.copy(t.ray).applyMatrix4(ms),
                i /= (this.scale.x + this.scale.y + this.scale.z) / 3,
                i *= i;
                var a = new Mt
                  , o = new Mt;
                r = new Mt;
                var s = new Mt
                  , c = this && this.isLineSegments ? 2 : 1;
                if (n.isBufferGeometry) {
                    var h = n.index
                      , l = n.attributes.position.array;
                    if (null !== h) {
                        n = 0;
                        for (var u = (h = h.array).length - 1; n < u; n += c) {
                            var p = h[n + 1];
                            a.fromArray(l, 3 * h[n]),
                            o.fromArray(l, 3 * p),
                            i < (p = gs.distanceSqToSegment(a, o, s, r)) || (s.applyMatrix4(this.matrixWorld),
                            (p = t.ray.origin.distanceTo(s)) < t.near || p > t.far || e.push({
                                distance: p,
                                point: r.clone().applyMatrix4(this.matrixWorld),
                                index: n,
                                face: null,
                                faceIndex: null,
                                object: this
                            }))
                        }
                    } else
                        for (n = 0,
                        u = l.length / 3 - 1; n < u; n += c)
                            a.fromArray(l, 3 * n),
                            o.fromArray(l, 3 * n + 3),
                            i < (p = gs.distanceSqToSegment(a, o, s, r)) || (s.applyMatrix4(this.matrixWorld),
                            (p = t.ray.origin.distanceTo(s)) < t.near || p > t.far || e.push({
                                distance: p,
                                point: r.clone().applyMatrix4(this.matrixWorld),
                                index: n,
                                face: null,
                                faceIndex: null,
                                object: this
                            }))
                } else if (n.isGeometry)
                    for (o = (a = n.vertices).length,
                    n = 0; n < o - 1; n += c)
                        i < (p = gs.distanceSqToSegment(a[n], a[n + 1], s, r)) || (s.applyMatrix4(this.matrixWorld),
                        (p = t.ray.origin.distanceTo(s)) < t.near || p > t.far || e.push({
                            distance: p,
                            point: r.clone().applyMatrix4(this.matrixWorld),
                            index: n,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
            }
        }
        ),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    Re.prototype = Object.assign(Object.create(Le.prototype), {
        constructor: Re,
        isLineSegments: !0,
        computeLineDistances: (bs = new Mt,
        _s = new Mt,
        function() {
            var t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    for (var e = t.attributes.position, i = [], n = 0, r = e.count; n < r; n += 2)
                        bs.fromBufferAttribute(e, n),
                        _s.fromBufferAttribute(e, n + 1),
                        i[n] = 0 === n ? 0 : i[n - 1],
                        i[n + 1] = i[n] + bs.distanceTo(_s);
                    t.addAttribute("lineDistance", new R(i,1))
                } else
                    console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (t.isGeometry)
                for (e = t.vertices,
                i = t.lineDistances,
                n = 0,
                r = e.length; n < r; n += 2)
                    bs.copy(e[n]),
                    _s.copy(e[n + 1]),
                    i[n] = 0 === n ? 0 : i[n - 1],
                    i[n + 1] = i[n] + bs.distanceTo(_s);
            return this
        }
        )
    }),
    Pe.prototype = Object.assign(Object.create(Le.prototype), {
        constructor: Pe,
        isLineLoop: !0
    }),
    ((Ce.prototype = Object.create(I.prototype)).constructor = Ce).prototype.isPointsMaterial = !0,
    Ce.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.size = t.size,
        this.sizeAttenuation = t.sizeAttenuation,
        this.morphTargets = t.morphTargets,
        this
    }
    ,
    Ie.prototype = Object.assign(Object.create(l.prototype), {
        constructor: Ie,
        isPoints: !0,
        raycast: (ws = new wt,
        Ms = new B,
        Es = new o,
        function(n, r) {
            function t(t, e) {
                var i = Ms.distanceSqToPoint(t);
                i < s && (Ms.closestPointToPoint(t, c),
                c.applyMatrix4(o),
                (t = n.ray.origin.distanceTo(c)) < n.near || t > n.far || r.push({
                    distance: t,
                    distanceToRay: Math.sqrt(i),
                    point: c.clone(),
                    index: e,
                    face: null,
                    object: a
                }))
            }
            var a = this
              , e = this.geometry
              , o = this.matrixWorld
              , i = n.params.Points.threshold;
            if (null === e.boundingSphere && e.computeBoundingSphere(),
            Es.copy(e.boundingSphere),
            Es.applyMatrix4(o),
            Es.radius += i,
            !1 !== n.ray.intersectsSphere(Es)) {
                ws.getInverse(o),
                Ms.copy(n.ray).applyMatrix4(ws);
                var s = (i /= (this.scale.x + this.scale.y + this.scale.z) / 3) * i;
                i = new Mt;
                var c = new Mt;
                if (e.isBufferGeometry) {
                    var h = e.index;
                    if (e = e.attributes.position.array,
                    null !== h) {
                        var l = h.array;
                        h = 0;
                        for (var u = l.length; h < u; h++) {
                            var p = l[h];
                            i.fromArray(e, 3 * p),
                            t(i, p)
                        }
                    } else
                        for (h = 0,
                        l = e.length / 3; h < l; h++)
                            i.fromArray(e, 3 * h),
                            t(i, h)
                } else
                    for (h = 0,
                    l = (i = e.vertices).length; h < l; h++)
                        t(i[h], h)
            }
        }
        ),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    Oe.prototype = Object.assign(Object.create(p.prototype), {
        constructor: Oe,
        isVideoTexture: !0,
        update: function() {
            var t = this.image;
            t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    }),
    ((Ne.prototype = Object.create(p.prototype)).constructor = Ne).prototype.isCompressedTexture = !0,
    ((De.prototype = Object.create(p.prototype)).constructor = De).prototype.isCanvasTexture = !0,
    ((Ue.prototype = Object.create(p.prototype)).constructor = Ue).prototype.isDepthTexture = !0,
    (Be.prototype = Object.create(P.prototype)).constructor = Be,
    (Fe.prototype = Object.create(E.prototype)).constructor = Fe,
    (ze.prototype = Object.create(P.prototype)).constructor = ze,
    (Ge.prototype = Object.create(E.prototype)).constructor = Ge,
    (He.prototype = Object.create(P.prototype)).constructor = He,
    (Ve.prototype = Object.create(E.prototype)).constructor = Ve,
    (ke.prototype = Object.create(He.prototype)).constructor = ke,
    (je.prototype = Object.create(E.prototype)).constructor = je,
    (We.prototype = Object.create(He.prototype)).constructor = We,
    (Xe.prototype = Object.create(E.prototype)).constructor = Xe,
    (qe.prototype = Object.create(He.prototype)).constructor = qe,
    (Ye.prototype = Object.create(E.prototype)).constructor = Ye,
    (Je.prototype = Object.create(He.prototype)).constructor = Je,
    (Ze.prototype = Object.create(E.prototype)).constructor = Ze,
    (Qe.prototype = Object.create(P.prototype)).constructor = Qe,
    (Ke.prototype = Object.create(E.prototype)).constructor = Ke,
    ($e.prototype = Object.create(P.prototype)).constructor = $e,
    (ti.prototype = Object.create(E.prototype)).constructor = ti,
    (ei.prototype = Object.create(P.prototype)).constructor = ei;
    var As = function(t, e, i) {
        i = i || 2;
        var n, r = e && e.length, a = r ? e[0] * i : t.length, o = ii(t, 0, a, i, !0), s = [];
        if (!o)
            return s;
        if (r) {
            var c, h = i;
            r = [];
            var l = 0;
            for (c = e.length; l < c; l++) {
                var u = e[l] * h;
                (u = ii(t, u, l < c - 1 ? e[l + 1] * h : t.length, h, !1)) === u.next && (u.steiner = !0),
                r.push(si(u))
            }
            for (r.sort(ri),
            l = 0; l < r.length; l++)
                (h = ai(e = r[l], h = o)) && ni(e = di(h, e), e.next),
                o = ni(o, o.next)
        }
        if (t.length > 80 * i) {
            var p = n = t[0]
              , d = r = t[1];
            for (h = i; h < a; h += i)
                (l = t[h]) < p && (p = l),
                (e = t[h + 1]) < d && (d = e),
                n < l && (n = l),
                r < e && (r = e);
            n = 0 !== (n = Math.max(n - p, r - d)) ? 1 / n : 0
        }
        return function t(e, i, n, r, a, o, s) {
            if (e) {
                if (!s && o) {
                    for (var c = e, h = c; null === h.z && (h.z = oi(h.x, h.y, r, a, o)),
                    h.prevZ = h.prev,
                    (h = h.nextZ = h.next) !== c; )
                        ;
                    h.prevZ.nextZ = null,
                    h.prevZ = null,
                    c = h;
                    var l, u, p, d, f = 1;
                    do {
                        h = c;
                        var m = c = null;
                        for (u = 0; h; ) {
                            u++;
                            var g = h;
                            for (l = p = 0; l < f && (p++,
                            g = g.nextZ); l++)
                                ;
                            for (d = f; 0 < p || 0 < d && g; )
                                0 !== p && (0 === d || !g || h.z <= g.z) ? (h = (l = h).nextZ,
                                p--) : (g = (l = g).nextZ,
                                d--),
                                m ? m.nextZ = l : c = l,
                                l.prevZ = m,
                                m = l;
                            h = g
                        }
                        m.nextZ = null,
                        f *= 2
                    } while (1 < u)
                }
                for (c = e; e.prev !== e.next; ) {
                    if (h = e.prev,
                    g = e.next,
                    o)
                        t: {
                            d = r;
                            var v = a
                              , y = o;
                            if (0 <= hi(u = (m = e).prev, p = m, f = m.next))
                                m = !1;
                            else {
                                var x = u.x > p.x ? u.x > f.x ? u.x : f.x : p.x > f.x ? p.x : f.x
                                  , b = u.y > p.y ? u.y > f.y ? u.y : f.y : p.y > f.y ? p.y : f.y;
                                for (l = oi(u.x < p.x ? u.x < f.x ? u.x : f.x : p.x < f.x ? p.x : f.x, u.y < p.y ? u.y < f.y ? u.y : f.y : p.y < f.y ? p.y : f.y, d, v, y),
                                d = oi(x, b, d, v, y),
                                v = m.nextZ; v && v.z <= d; ) {
                                    if (v !== m.prev && v !== m.next && ci(u.x, u.y, p.x, p.y, f.x, f.y, v.x, v.y) && 0 <= hi(v.prev, v, v.next)) {
                                        m = !1;
                                        break t
                                    }
                                    v = v.nextZ
                                }
                                for (v = m.prevZ; v && v.z >= l; ) {
                                    if (v !== m.prev && v !== m.next && ci(u.x, u.y, p.x, p.y, f.x, f.y, v.x, v.y) && 0 <= hi(v.prev, v, v.next)) {
                                        m = !1;
                                        break t
                                    }
                                    v = v.prevZ
                                }
                                m = !0
                            }
                        }
                    else
                        t: if (m = e,
                        u = m.prev,
                        p = m,
                        f = m.next,
                        0 <= hi(u, p, f))
                            m = !1;
                        else {
                            for (l = m.next.next; l !== m.prev; ) {
                                if (ci(u.x, u.y, p.x, p.y, f.x, f.y, l.x, l.y) && 0 <= hi(l.prev, l, l.next)) {
                                    m = !1;
                                    break t
                                }
                                l = l.next
                            }
                            m = !0
                        }
                    if (m)
                        i.push(h.i / n),
                        i.push(e.i / n),
                        i.push(g.i / n),
                        mi(e),
                        c = e = g.next;
                    else if ((e = g) === c) {
                        if (s) {
                            if (1 === s) {
                                for (s = i,
                                c = n,
                                h = e; !li(g = h.prev, m = h.next.next) && ui(g, h, h.next, m) && pi(g, m) && pi(m, g) && (s.push(g.i / c),
                                s.push(h.i / c),
                                s.push(m.i / c),
                                mi(h),
                                mi(h.next),
                                h = e = m),
                                (h = h.next) !== e; )
                                    ;
                                t(e = h, i, n, r, a, o, 2)
                            } else if (2 === s)
                                t: {
                                    s = e;
                                    do {
                                        for (c = s.next.next; c !== s.prev; ) {
                                            if (h = s.i !== c.i) {
                                                if (g = c,
                                                m = (h = s).next.i !== g.i && h.prev.i !== g.i) {
                                                    e: {
                                                        m = h;
                                                        do {
                                                            if (m.i !== h.i && m.next.i !== h.i && m.i !== g.i && m.next.i !== g.i && ui(m, m.next, h, g)) {
                                                                m = !0;
                                                                break e
                                                            }
                                                            m = m.next
                                                        } while (m !== h);
                                                        m = !1
                                                    }
                                                    m = !m
                                                }
                                                if (m = m && pi(h, g) && pi(g, h)) {
                                                    for (u = !1,
                                                    p = ((m = h).x + g.x) / 2,
                                                    g = (h.y + g.y) / 2; m.y > g != m.next.y > g && m.next.y !== m.y && p < (m.next.x - m.x) * (g - m.y) / (m.next.y - m.y) + m.x && (u = !u),
                                                    (m = m.next) !== h; )
                                                        ;
                                                    m = u
                                                }
                                                h = m
                                            }
                                            if (h) {
                                                e = di(s, c),
                                                s = ni(s, s.next),
                                                e = ni(e, e.next),
                                                t(s, i, n, r, a, o),
                                                t(e, i, n, r, a, o);
                                                break t
                                            }
                                            c = c.next
                                        }
                                        s = s.next
                                    } while (s !== e)
                                }
                        } else
                            t(ni(e), i, n, r, a, o, 1);
                        break
                    }
                }
            }
        }(o, s, i, p, d, n),
        s
    }
      , Ls = {
        area: function(t) {
            for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++)
                i += t[n].x * t[r].y - t[r].x * t[n].y;
            return .5 * i
        },
        isClockWise: function(t) {
            return Ls.area(t) < 0
        },
        triangulateShape: function(t, e) {
            var i = []
              , n = []
              , r = [];
            vi(t),
            yi(i, t);
            var a = t.length;
            for (e.forEach(vi),
            t = 0; t < e.length; t++)
                n.push(a),
                a += e[t].length,
                yi(i, e[t]);
            for (e = As(i, n),
            t = 0; t < e.length; t += 3)
                r.push(e.slice(t, t + 3));
            return r
        }
    };
    ((xi.prototype = Object.create(E.prototype)).constructor = xi).prototype.toJSON = function() {
        var t = E.prototype.toJSON.call(this);
        return _i(this.parameters.shapes, this.parameters.options, t)
    }
    ,
    ((bi.prototype = Object.create(P.prototype)).constructor = bi).prototype.toJSON = function() {
        var t = P.prototype.toJSON.call(this);
        return _i(this.parameters.shapes, this.parameters.options, t)
    }
    ;
    var Rs = {
        generateTopUV: function(t, e, i, n, r) {
            t = e[3 * n],
            n = e[3 * n + 1];
            var a = e[3 * r];
            return r = e[3 * r + 1],
            [new W(e[3 * i],e[3 * i + 1]), new W(t,n), new W(a,r)]
        },
        generateSideWallUV: function(t, e, i, n, r, a) {
            t = e[3 * i];
            var o = e[3 * i + 1];
            i = e[3 * i + 2];
            var s = e[3 * n]
              , c = e[3 * n + 1];
            n = e[3 * n + 2];
            var h = e[3 * r]
              , l = e[3 * r + 1];
            r = e[3 * r + 2];
            var u = e[3 * a]
              , p = e[3 * a + 1];
            return e = e[3 * a + 2],
            Math.abs(o - c) < .01 ? [new W(t,1 - i), new W(s,1 - n), new W(h,1 - r), new W(u,1 - e)] : [new W(o,1 - i), new W(c,1 - n), new W(l,1 - r), new W(p,1 - e)]
        }
    };
    (wi.prototype = Object.create(E.prototype)).constructor = wi,
    (Mi.prototype = Object.create(bi.prototype)).constructor = Mi,
    (Ei.prototype = Object.create(E.prototype)).constructor = Ei,
    (Ti.prototype = Object.create(P.prototype)).constructor = Ti,
    (Si.prototype = Object.create(E.prototype)).constructor = Si,
    (Ai.prototype = Object.create(P.prototype)).constructor = Ai,
    (Li.prototype = Object.create(E.prototype)).constructor = Li,
    (Ri.prototype = Object.create(P.prototype)).constructor = Ri,
    ((Pi.prototype = Object.create(E.prototype)).constructor = Pi).prototype.toJSON = function() {
        var t = E.prototype.toJSON.call(this);
        return Ii(this.parameters.shapes, t)
    }
    ,
    ((Ci.prototype = Object.create(P.prototype)).constructor = Ci).prototype.toJSON = function() {
        var t = P.prototype.toJSON.call(this);
        return Ii(this.parameters.shapes, t)
    }
    ,
    (Oi.prototype = Object.create(P.prototype)).constructor = Oi,
    (Ni.prototype = Object.create(E.prototype)).constructor = Ni,
    (Di.prototype = Object.create(P.prototype)).constructor = Di,
    (Ui.prototype = Object.create(Ni.prototype)).constructor = Ui,
    (Bi.prototype = Object.create(Di.prototype)).constructor = Bi,
    (Fi.prototype = Object.create(E.prototype)).constructor = Fi,
    (zi.prototype = Object.create(P.prototype)).constructor = zi;
    var Ps = Object.freeze({
        WireframeGeometry: Be,
        ParametricGeometry: Fe,
        ParametricBufferGeometry: ze,
        TetrahedronGeometry: Ve,
        TetrahedronBufferGeometry: ke,
        OctahedronGeometry: je,
        OctahedronBufferGeometry: We,
        IcosahedronGeometry: Xe,
        IcosahedronBufferGeometry: qe,
        DodecahedronGeometry: Ye,
        DodecahedronBufferGeometry: Je,
        PolyhedronGeometry: Ge,
        PolyhedronBufferGeometry: He,
        TubeGeometry: Ze,
        TubeBufferGeometry: Qe,
        TorusKnotGeometry: Ke,
        TorusKnotBufferGeometry: $e,
        TorusGeometry: ti,
        TorusBufferGeometry: ei,
        TextGeometry: wi,
        TextBufferGeometry: Mi,
        SphereGeometry: Ei,
        SphereBufferGeometry: Ti,
        RingGeometry: Si,
        RingBufferGeometry: Ai,
        PlaneGeometry: L,
        PlaneBufferGeometry: C,
        LatheGeometry: Li,
        LatheBufferGeometry: Ri,
        ShapeGeometry: Pi,
        ShapeBufferGeometry: Ci,
        ExtrudeGeometry: xi,
        ExtrudeBufferGeometry: bi,
        EdgesGeometry: Oi,
        ConeGeometry: Ui,
        ConeBufferGeometry: Bi,
        CylinderGeometry: Ni,
        CylinderBufferGeometry: Di,
        CircleGeometry: Fi,
        CircleBufferGeometry: zi,
        BoxGeometry: T,
        BoxBufferGeometry: S
    });
    ((Gi.prototype = Object.create(I.prototype)).constructor = Gi).prototype.isShadowMaterial = !0,
    Gi.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this
    }
    ,
    ((Hi.prototype = Object.create(O.prototype)).constructor = Hi).prototype.isRawShaderMaterial = !0,
    ((Vi.prototype = Object.create(I.prototype)).constructor = Vi).prototype.isMeshStandardMaterial = !0,
    Vi.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(t.color),
        this.roughness = t.roughness,
        this.metalness = t.metalness,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.roughnessMap = t.roughnessMap,
        this.metalnessMap = t.metalnessMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapIntensity = t.envMapIntensity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ((ki.prototype = Object.create(Vi.prototype)).constructor = ki).prototype.isMeshPhysicalMaterial = !0,
    ki.prototype.copy = function(t) {
        return Vi.prototype.copy.call(this, t),
        this.defines = {
            PHYSICAL: ""
        },
        this.reflectivity = t.reflectivity,
        this.clearCoat = t.clearCoat,
        this.clearCoatRoughness = t.clearCoatRoughness,
        this
    }
    ,
    ((ji.prototype = Object.create(I.prototype)).constructor = ji).prototype.isMeshPhongMaterial = !0,
    ji.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.specular.copy(t.specular),
        this.shininess = t.shininess,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ((Wi.prototype = Object.create(ji.prototype)).constructor = Wi).prototype.isMeshToonMaterial = !0,
    Wi.prototype.copy = function(t) {
        return ji.prototype.copy.call(this, t),
        this.gradientMap = t.gradientMap,
        this
    }
    ,
    ((Xi.prototype = Object.create(I.prototype)).constructor = Xi).prototype.isMeshNormalMaterial = !0,
    Xi.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ((qi.prototype = Object.create(I.prototype)).constructor = qi).prototype.isMeshLambertMaterial = !0,
    qi.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ((Yi.prototype = Object.create(I.prototype)).constructor = Yi).prototype.isMeshMatcapMaterial = !0,
    Yi.prototype.copy = function(t) {
        return I.prototype.copy.call(this, t),
        this.defines = {
            MATCAP: ""
        },
        this.color.copy(t.color),
        this.matcap = t.matcap,
        this.map = t.map,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.alphaMap = t.alphaMap,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ((Ji.prototype = Object.create(Ae.prototype)).constructor = Ji).prototype.isLineDashedMaterial = !0,
    Ji.prototype.copy = function(t) {
        return Ae.prototype.copy.call(this, t),
        this.scale = t.scale,
        this.dashSize = t.dashSize,
        this.gapSize = t.gapSize,
        this
    }
    ;
    var Cs = Object.freeze({
        ShadowMaterial: Gi,
        SpriteMaterial: _e,
        RawShaderMaterial: Hi,
        ShaderMaterial: O,
        PointsMaterial: Ce,
        MeshPhysicalMaterial: ki,
        MeshStandardMaterial: Vi,
        MeshPhongMaterial: ji,
        MeshToonMaterial: Wi,
        MeshNormalMaterial: Xi,
        MeshLambertMaterial: qi,
        MeshDepthMaterial: ne,
        MeshDistanceMaterial: re,
        MeshBasicMaterial: N,
        MeshMatcapMaterial: Yi,
        LineDashedMaterial: Ji,
        LineBasicMaterial: Ae,
        Material: I
    })
      , Is = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            !1 !== this.enabled && (this.files[t] = e)
        },
        get: function(t) {
            if (!1 !== this.enabled)
                return this.files[t]
        },
        remove: function(t) {
            delete this.files[t]
        },
        clear: function() {
            this.files = {}
        }
    }
      , Os = new Zi
      , Ns = {};
    Object.assign(Qi.prototype, {
        load: function(o, t, e, i) {
            void 0 === o && (o = ""),
            void 0 !== this.path && (o = this.path + o),
            o = this.manager.resolveURL(o);
            var s = this
              , n = Is.get(o);
            if (void 0 !== n)
                return s.manager.itemStart(o),
                setTimeout(function() {
                    t && t(n),
                    s.manager.itemEnd(o)
                }, 0),
                n;
            if (void 0 === Ns[o]) {
                var r = o.match(/^data:(.*?)(;base64)?,(.*)$/);
                if (r) {
                    e = r[1];
                    var a = !!r[2];
                    r = r[3],
                    r = window.decodeURIComponent(r),
                    a && (r = window.atob(r));
                    try {
                        var c = (this.responseType || "").toLowerCase();
                        switch (c) {
                        case "arraybuffer":
                        case "blob":
                            var h = new Uint8Array(r.length);
                            for (a = 0; a < r.length; a++)
                                h[a] = r.charCodeAt(a);
                            var l = "blob" === c ? new Blob([h.buffer],{
                                type: e
                            }) : h.buffer;
                            break;
                        case "document":
                            l = (new DOMParser).parseFromString(r, e);
                            break;
                        case "json":
                            l = JSON.parse(r);
                            break;
                        default:
                            l = r
                        }
                        window.setTimeout(function() {
                            t && t(l),
                            s.manager.itemEnd(o)
                        }, 0)
                    } catch (t) {
                        window.setTimeout(function() {
                            i && i(t),
                            s.manager.itemEnd(o),
                            s.manager.itemError(o)
                        }, 0)
                    }
                } else {
                    Ns[o] = [],
                    Ns[o].push({
                        onLoad: t,
                        onProgress: e,
                        onError: i
                    });
                    var u = new XMLHttpRequest;
                    for (a in u.open("GET", o, !0),
                    u.addEventListener("load", function(t) {
                        var e = this.response;
                        Is.add(o, e);
                        var i = Ns[o];
                        if (delete Ns[o],
                        200 === this.status || 0 === this.status) {
                            0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                            for (var n = 0, r = i.length; n < r; n++) {
                                var a = i[n];
                                a.onLoad && a.onLoad(e)
                            }
                            s.manager.itemEnd(o)
                        } else {
                            for (n = 0,
                            r = i.length; n < r; n++)
                                (a = i[n]).onError && a.onError(t);
                            s.manager.itemEnd(o),
                            s.manager.itemError(o)
                        }
                    }, !1),
                    u.addEventListener("progress", function(t) {
                        for (var e = Ns[o], i = 0, n = e.length; i < n; i++) {
                            var r = e[i];
                            r.onProgress && r.onProgress(t)
                        }
                    }, !1),
                    u.addEventListener("error", function(t) {
                        var e = Ns[o];
                        delete Ns[o];
                        for (var i = 0, n = e.length; i < n; i++) {
                            var r = e[i];
                            r.onError && r.onError(t)
                        }
                        s.manager.itemEnd(o),
                        s.manager.itemError(o)
                    }, !1),
                    u.addEventListener("abort", function(t) {
                        var e = Ns[o];
                        delete Ns[o];
                        for (var i = 0, n = e.length; i < n; i++) {
                            var r = e[i];
                            r.onError && r.onError(t)
                        }
                        s.manager.itemEnd(o),
                        s.manager.itemError(o)
                    }, !1),
                    void 0 !== this.responseType && (u.responseType = this.responseType),
                    void 0 !== this.withCredentials && (u.withCredentials = this.withCredentials),
                    u.overrideMimeType && u.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"),
                    this.requestHeader)
                        u.setRequestHeader(a, this.requestHeader[a]);
                    u.send(null)
                }
                return s.manager.itemStart(o),
                u
            }
            Ns[o].push({
                onLoad: t,
                onProgress: e,
                onError: i
            })
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setResponseType: function(t) {
            return this.responseType = t,
            this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t,
            this
        },
        setMimeType: function(t) {
            return this.mimeType = t,
            this
        },
        setRequestHeader: function(t) {
            return this.requestHeader = t,
            this
        }
    }),
    Object.assign(Ki.prototype, {
        load: function(t, r, i, n) {
            function e(e) {
                c.load(t[e], function(t) {
                    t = a._parser(t, !0),
                    o[e] = {
                        width: t.width,
                        height: t.height,
                        format: t.format,
                        mipmaps: t.mipmaps
                    },
                    6 === (h += 1) && (1 === t.mipmapCount && (s.minFilter = 1006),
                    s.format = t.format,
                    s.needsUpdate = !0,
                    r && r(s))
                }, i, n)
            }
            var a = this
              , o = []
              , s = new Ne;
            s.image = o;
            var c = new Qi(this.manager);
            if (c.setPath(this.path),
            c.setResponseType("arraybuffer"),
            Array.isArray(t))
                for (var h = 0, l = 0, u = t.length; l < u; ++l)
                    e(l);
            else
                c.load(t, function(t) {
                    if ((t = a._parser(t, !0)).isCubemap)
                        for (var e = t.mipmaps.length / t.mipmapCount, i = 0; i < e; i++) {
                            o[i] = {
                                mipmaps: []
                            };
                            for (var n = 0; n < t.mipmapCount; n++)
                                o[i].mipmaps.push(t.mipmaps[i * t.mipmapCount + n]),
                                o[i].format = t.format,
                                o[i].width = t.width,
                                o[i].height = t.height
                        }
                    else
                        s.image.width = t.width,
                        s.image.height = t.height,
                        s.mipmaps = t.mipmaps;
                    1 === t.mipmapCount && (s.minFilter = 1006),
                    s.format = t.format,
                    s.needsUpdate = !0,
                    r && r(s)
                }, i, n);
            return s
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign($i.prototype, {
        load: function(t, e, i, n) {
            var r = this
              , a = new Tt
              , o = new Qi(this.manager);
            return o.setResponseType("arraybuffer"),
            o.load(t, function(t) {
                (t = r._parser(t)) && (void 0 !== t.image ? a.image = t.image : void 0 !== t.data && (a.image.width = t.width,
                a.image.height = t.height,
                a.image.data = t.data),
                a.wrapS = void 0 !== t.wrapS ? t.wrapS : 1001,
                a.wrapT = void 0 !== t.wrapT ? t.wrapT : 1001,
                a.magFilter = void 0 !== t.magFilter ? t.magFilter : 1006,
                a.minFilter = void 0 !== t.minFilter ? t.minFilter : 1008,
                a.anisotropy = void 0 !== t.anisotropy ? t.anisotropy : 1,
                void 0 !== t.format && (a.format = t.format),
                void 0 !== t.type && (a.type = t.type),
                void 0 !== t.mipmaps && (a.mipmaps = t.mipmaps),
                1 === t.mipmapCount && (a.minFilter = 1006),
                a.needsUpdate = !0,
                e && e(a, t))
            }, i, n),
            a
        }
    }),
    Object.assign(tn.prototype, {
        crossOrigin: "anonymous",
        load: function(e, t, i, n) {
            function r() {
                c.removeEventListener("load", r, !1),
                c.removeEventListener("error", a, !1),
                Is.add(e, this),
                t && t(this),
                o.manager.itemEnd(e)
            }
            function a(t) {
                c.removeEventListener("load", r, !1),
                c.removeEventListener("error", a, !1),
                n && n(t),
                o.manager.itemEnd(e),
                o.manager.itemError(e)
            }
            void 0 === e && (e = ""),
            void 0 !== this.path && (e = this.path + e),
            e = this.manager.resolveURL(e);
            var o = this
              , s = Is.get(e);
            if (void 0 !== s)
                return o.manager.itemStart(e),
                setTimeout(function() {
                    t && t(s),
                    o.manager.itemEnd(e)
                }, 0),
                s;
            var c = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            return c.addEventListener("load", r, !1),
            c.addEventListener("error", a, !1),
            "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (c.crossOrigin = this.crossOrigin),
            o.manager.itemStart(e),
            c.src = e,
            c
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(en.prototype, {
        crossOrigin: "anonymous",
        load: function(t, i, e, n) {
            function r(e) {
                o.load(t[e], function(t) {
                    a.images[e] = t,
                    6 === ++s && (a.needsUpdate = !0,
                    i && i(a))
                }, void 0, n)
            }
            var a = new G
              , o = new tn(this.manager);
            o.setCrossOrigin(this.crossOrigin),
            o.setPath(this.path);
            var s = 0;
            for (e = 0; e < t.length; ++e)
                r(e);
            return a
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(nn.prototype, {
        crossOrigin: "anonymous",
        load: function(e, i, t, n) {
            var r = new p
              , a = new tn(this.manager);
            return a.setCrossOrigin(this.crossOrigin),
            a.setPath(this.path),
            a.load(e, function(t) {
                r.image = t,
                t = 0 < e.search(/\.jpe?g$/i) || 0 === e.search(/^data:image\/jpeg/),
                r.format = t ? 1022 : 1023,
                r.needsUpdate = !0,
                void 0 !== i && i(r)
            }, t, n),
            r
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(rn.prototype, {
        getPoint: function() {
            return console.warn("THREE.Curve: .getPoint() not implemented."),
            null
        },
        getPointAt: function(t, e) {
            return t = this.getUtoTmapping(t),
            this.getPoint(t, e)
        },
        getPoints: function(t) {
            void 0 === t && (t = 5);
            for (var e = [], i = 0; i <= t; i++)
                e.push(this.getPoint(i / t));
            return e
        },
        getSpacedPoints: function(t) {
            void 0 === t && (t = 5);
            for (var e = [], i = 0; i <= t; i++)
                e.push(this.getPointAt(i / t));
            return e
        },
        getLength: function() {
            var t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function(t) {
            if (void 0 === t && (t = this.arcLengthDivisions),
            this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
                return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, i = [], n = this.getPoint(0), r = 0;
            for (i.push(0),
            e = 1; e <= t; e++) {
                var a = this.getPoint(e / t);
                r += a.distanceTo(n),
                i.push(r),
                n = a
            }
            return this.cacheArcLengths = i
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.getLengths()
        },
        getUtoTmapping: function(t, e) {
            var i = this.getLengths()
              , n = i.length;
            e = e || t * i[n - 1];
            for (var r, a = 0, o = n - 1; a <= o; )
                if ((r = i[t = Math.floor(a + (o - a) / 2)] - e) < 0)
                    a = t + 1;
                else {
                    if (!(0 < r)) {
                        o = t;
                        break
                    }
                    o = t - 1
                }
            return i[t = o] === e ? t / (n - 1) : (t + (e - (a = i[t])) / (i[t + 1] - a)) / (n - 1)
        },
        getTangent: function(t) {
            var e = t - 1e-4;
            return e < 0 && (e = 0),
            1 < (t += 1e-4) && (t = 1),
            e = this.getPoint(e),
            this.getPoint(t).clone().sub(e).normalize()
        },
        getTangentAt: function(t) {
            return t = this.getUtoTmapping(t),
            this.getTangent(t)
        },
        computeFrenetFrames: function(t, e) {
            var i, n = new Mt, r = [], a = [], o = [], s = new Mt, c = new wt;
            for (i = 0; i <= t; i++) {
                var h = i / t;
                r[i] = this.getTangentAt(h),
                r[i].normalize()
            }
            a[0] = new Mt,
            o[0] = new Mt,
            i = Number.MAX_VALUE,
            h = Math.abs(r[0].x);
            var l = Math.abs(r[0].y)
              , u = Math.abs(r[0].z);
            for (h <= i && (i = h,
            n.set(1, 0, 0)),
            l <= i && (i = l,
            n.set(0, 1, 0)),
            u <= i && n.set(0, 0, 1),
            s.crossVectors(r[0], n).normalize(),
            a[0].crossVectors(r[0], s),
            o[0].crossVectors(r[0], a[0]),
            i = 1; i <= t; i++)
                a[i] = a[i - 1].clone(),
                o[i] = o[i - 1].clone(),
                s.crossVectors(r[i - 1], r[i]),
                s.length() > Number.EPSILON && (s.normalize(),
                n = Math.acos(fa.clamp(r[i - 1].dot(r[i]), -1, 1)),
                a[i].applyMatrix4(c.makeRotationAxis(s, n))),
                o[i].crossVectors(r[i], a[i]);
            if (!0 === e)
                for (n = Math.acos(fa.clamp(a[0].dot(a[t]), -1, 1)),
                n /= t,
                0 < r[0].dot(s.crossVectors(a[0], a[t])) && (n = -n),
                i = 1; i <= t; i++)
                    a[i].applyMatrix4(c.makeRotationAxis(r[i], n * i)),
                    o[i].crossVectors(r[i], a[i]);
            return {
                tangents: r,
                normals: a,
                binormals: o
            }
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions,
            this
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions,
            t.type = this.type,
            t
        },
        fromJSON: function(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions,
            this
        }
    }),
    ((an.prototype = Object.create(rn.prototype)).constructor = an).prototype.isEllipseCurve = !0,
    an.prototype.getPoint = function(t, e) {
        e = e || new W;
        for (var i = 2 * Math.PI, n = this.aEndAngle - this.aStartAngle, r = Math.abs(n) < Number.EPSILON; n < 0; )
            n += i;
        for (; i < n; )
            n -= i;
        n < Number.EPSILON && (n = r ? 0 : i),
        !0 !== this.aClockwise || r || (n = n === i ? -i : n - i),
        i = this.aStartAngle + t * n,
        t = this.aX + this.xRadius * Math.cos(i);
        var a = this.aY + this.yRadius * Math.sin(i);
        return 0 !== this.aRotation && (i = Math.cos(this.aRotation),
        n = Math.sin(this.aRotation),
        t = (r = t - this.aX) * i - (a -= this.aY) * n + this.aX,
        a = r * n + a * i + this.aY),
        e.set(t, a)
    }
    ,
    an.prototype.copy = function(t) {
        return rn.prototype.copy.call(this, t),
        this.aX = t.aX,
        this.aY = t.aY,
        this.xRadius = t.xRadius,
        this.yRadius = t.yRadius,
        this.aStartAngle = t.aStartAngle,
        this.aEndAngle = t.aEndAngle,
        this.aClockwise = t.aClockwise,
        this.aRotation = t.aRotation,
        this
    }
    ,
    an.prototype.toJSON = function() {
        var t = rn.prototype.toJSON.call(this);
        return t.aX = this.aX,
        t.aY = this.aY,
        t.xRadius = this.xRadius,
        t.yRadius = this.yRadius,
        t.aStartAngle = this.aStartAngle,
        t.aEndAngle = this.aEndAngle,
        t.aClockwise = this.aClockwise,
        t.aRotation = this.aRotation,
        t
    }
    ,
    an.prototype.fromJSON = function(t) {
        return rn.prototype.fromJSON.call(this, t),
        this.aX = t.aX,
        this.aY = t.aY,
        this.xRadius = t.xRadius,
        this.yRadius = t.yRadius,
        this.aStartAngle = t.aStartAngle,
        this.aEndAngle = t.aEndAngle,
        this.aClockwise = t.aClockwise,
        this.aRotation = t.aRotation,
        this
    }
    ,
    ((on.prototype = Object.create(an.prototype)).constructor = on).prototype.isArcCurve = !0;
    var Ds = new Mt
      , Us = new sn
      , Bs = new sn
      , Fs = new sn;
    ((cn.prototype = Object.create(rn.prototype)).constructor = cn).prototype.isCatmullRomCurve3 = !0,
    cn.prototype.getPoint = function(t, e) {
        e = e || new Mt;
        var i = this.points
          , n = i.length;
        t *= n - (this.closed ? 0 : 1);
        var r = Math.floor(t);
        if (t -= r,
        this.closed ? r += 0 < r ? 0 : (Math.floor(Math.abs(r) / n) + 1) * n : 0 === t && r === n - 1 && (r = n - 2,
        t = 1),
        this.closed || 0 < r)
            var a = i[(r - 1) % n];
        else
            Ds.subVectors(i[0], i[1]).add(i[0]),
            a = Ds;
        var o = i[r % n]
          , s = i[(r + 1) % n];
        if (i = this.closed || r + 2 < n ? i[(r + 2) % n] : (Ds.subVectors(i[n - 1], i[n - 2]).add(i[n - 1]),
        Ds),
        "centripetal" === this.curveType || "chordal" === this.curveType) {
            var c = "chordal" === this.curveType ? .5 : .25;
            n = Math.pow(a.distanceToSquared(o), c),
            (r = Math.pow(o.distanceToSquared(s), c)) < 1e-4 && (r = 1),
            n < 1e-4 && (n = r),
            (c = Math.pow(s.distanceToSquared(i), c)) < 1e-4 && (c = r),
            Us.initNonuniformCatmullRom(a.x, o.x, s.x, i.x, n, r, c),
            Bs.initNonuniformCatmullRom(a.y, o.y, s.y, i.y, n, r, c),
            Fs.initNonuniformCatmullRom(a.z, o.z, s.z, i.z, n, r, c)
        } else
            "catmullrom" === this.curveType && (Us.initCatmullRom(a.x, o.x, s.x, i.x, this.tension),
            Bs.initCatmullRom(a.y, o.y, s.y, i.y, this.tension),
            Fs.initCatmullRom(a.z, o.z, s.z, i.z, this.tension));
        return e.set(Us.calc(t), Bs.calc(t), Fs.calc(t)),
        e
    }
    ,
    cn.prototype.copy = function(t) {
        rn.prototype.copy.call(this, t),
        this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++)
            this.points.push(t.points[e].clone());
        return this.closed = t.closed,
        this.curveType = t.curveType,
        this.tension = t.tension,
        this
    }
    ,
    cn.prototype.toJSON = function() {
        var t = rn.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, i = this.points.length; e < i; e++)
            t.points.push(this.points[e].toArray());
        return t.closed = this.closed,
        t.curveType = this.curveType,
        t.tension = this.tension,
        t
    }
    ,
    cn.prototype.fromJSON = function(t) {
        rn.prototype.fromJSON.call(this, t),
        this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push((new Mt).fromArray(n))
        }
        return this.closed = t.closed,
        this.curveType = t.curveType,
        this.tension = t.tension,
        this
    }
    ,
    ((pn.prototype = Object.create(rn.prototype)).constructor = pn).prototype.isCubicBezierCurve = !0,
    pn.prototype.getPoint = function(t, e) {
        e = e || new W;
        var i = this.v0
          , n = this.v1
          , r = this.v2
          , a = this.v3;
        return e.set(un(t, i.x, n.x, r.x, a.x), un(t, i.y, n.y, r.y, a.y)),
        e
    }
    ,
    pn.prototype.copy = function(t) {
        return rn.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
    }
    ,
    pn.prototype.toJSON = function() {
        var t = rn.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t.v3 = this.v3.toArray(),
        t
    }
    ,
    pn.prototype.fromJSON = function(t) {
        return rn.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
    }
    ,
    ((dn.prototype = Object.create(rn.prototype)).constructor = dn).prototype.isCubicBezierCurve3 = !0,
    dn.prototype.getPoint = function(t, e) {
        e = e || new Mt;
        var i = this.v0
          , n = this.v1
          , r = this.v2
          , a = this.v3;
        return e.set(un(t, i.x, n.x, r.x, a.x), un(t, i.y, n.y, r.y, a.y), un(t, i.z, n.z, r.z, a.z)),
        e
    }
    ,
    dn.prototype.copy = function(t) {
        return rn.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
    }
    ,
    dn.prototype.toJSON = function() {
        var t = rn.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t.v3 = this.v3.toArray(),
        t
    }
    ,
    dn.prototype.fromJSON = function(t) {
        return rn.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
    }
    ,
    ((fn.prototype = Object.create(rn.prototype)).constructor = fn).prototype.isLineCurve = !0,
    fn.prototype.getPoint = function(t, e) {
        return e = e || new W,
        1 === t ? e.copy(this.v2) : (e.copy(this.v2).sub(this.v1),
        e.multiplyScalar(t).add(this.v1)),
        e
    }
    ,
    fn.prototype.getPointAt = function(t, e) {
        return this.getPoint(t, e)
    }
    ,
    fn.prototype.getTangent = function() {
        return this.v2.clone().sub(this.v1).normalize()
    }
    ,
    fn.prototype.copy = function(t) {
        return rn.prototype.copy.call(this, t),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    fn.prototype.toJSON = function() {
        var t = rn.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    fn.prototype.fromJSON = function(t) {
        return rn.prototype.fromJSON.call(this, t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    ((mn.prototype = Object.create(rn.prototype)).constructor = mn).prototype.isLineCurve3 = !0,
    mn.prototype.getPoint = function(t, e) {
        return e = e || new Mt,
        1 === t ? e.copy(this.v2) : (e.copy(this.v2).sub(this.v1),
        e.multiplyScalar(t).add(this.v1)),
        e
    }
    ,
    mn.prototype.getPointAt = function(t, e) {
        return this.getPoint(t, e)
    }
    ,
    mn.prototype.copy = function(t) {
        return rn.prototype.copy.call(this, t),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    mn.prototype.toJSON = function() {
        var t = rn.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    mn.prototype.fromJSON = function(t) {
        return rn.prototype.fromJSON.call(this, t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    ((gn.prototype = Object.create(rn.prototype)).constructor = gn).prototype.isQuadraticBezierCurve = !0,
    gn.prototype.getPoint = function(t, e) {
        e = e || new W;
        var i = this.v0
          , n = this.v1
          , r = this.v2;
        return e.set(ln(t, i.x, n.x, r.x), ln(t, i.y, n.y, r.y)),
        e
    }
    ,
    gn.prototype.copy = function(t) {
        return rn.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    gn.prototype.toJSON = function() {
        var t = rn.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    gn.prototype.fromJSON = function(t) {
        return rn.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    ((vn.prototype = Object.create(rn.prototype)).constructor = vn).prototype.isQuadraticBezierCurve3 = !0,
    vn.prototype.getPoint = function(t, e) {
        e = e || new Mt;
        var i = this.v0
          , n = this.v1
          , r = this.v2;
        return e.set(ln(t, i.x, n.x, r.x), ln(t, i.y, n.y, r.y), ln(t, i.z, n.z, r.z)),
        e
    }
    ,
    vn.prototype.copy = function(t) {
        return rn.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    vn.prototype.toJSON = function() {
        var t = rn.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    vn.prototype.fromJSON = function(t) {
        return rn.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    ((yn.prototype = Object.create(rn.prototype)).constructor = yn).prototype.isSplineCurve = !0,
    yn.prototype.getPoint = function(t, e) {
        e = e || new W;
        var i = this.points
          , n = (i.length - 1) * t;
        n -= t = Math.floor(n);
        var r = i[0 === t ? t : t - 1]
          , a = i[t]
          , o = i[t > i.length - 2 ? i.length - 1 : t + 1];
        return i = i[t > i.length - 3 ? i.length - 1 : t + 2],
        e.set(hn(n, r.x, a.x, o.x, i.x), hn(n, r.y, a.y, o.y, i.y)),
        e
    }
    ,
    yn.prototype.copy = function(t) {
        rn.prototype.copy.call(this, t),
        this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++)
            this.points.push(t.points[e].clone());
        return this
    }
    ,
    yn.prototype.toJSON = function() {
        var t = rn.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, i = this.points.length; e < i; e++)
            t.points.push(this.points[e].toArray());
        return t
    }
    ,
    yn.prototype.fromJSON = function(t) {
        rn.prototype.fromJSON.call(this, t),
        this.points = [];
        for (var e = 0, i = t.points.length; e < i; e++) {
            var n = t.points[e];
            this.points.push((new W).fromArray(n))
        }
        return this
    }
    ;
    var zs = Object.freeze({
        ArcCurve: on,
        CatmullRomCurve3: cn,
        CubicBezierCurve: pn,
        CubicBezierCurve3: dn,
        EllipseCurve: an,
        LineCurve: fn,
        LineCurve3: mn,
        QuadraticBezierCurve: gn,
        QuadraticBezierCurve3: vn,
        SplineCurve: yn
    });
    xn.prototype = Object.assign(Object.create(rn.prototype), {
        constructor: xn,
        add: function(t) {
            this.curves.push(t)
        },
        closePath: function() {
            var t = this.curves[0].getPoint(0)
              , e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new fn(e,t))
        },
        getPoint: function(t) {
            var e = t * this.getLength()
              , i = this.getCurveLengths();
            for (t = 0; t < i.length; ) {
                if (i[t] >= e)
                    return e = i[t] - e,
                    i = (t = this.curves[t]).getLength(),
                    t.getPointAt(0 === i ? 0 : 1 - e / i);
                t++
            }
            return null
        },
        getLength: function() {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.cacheLengths = null,
            this.getCurveLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                return this.cacheLengths;
            for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++)
                e += this.curves[i].getLength(),
                t.push(e);
            return this.cacheLengths = t
        },
        getSpacedPoints: function(t) {
            void 0 === t && (t = 40);
            for (var e = [], i = 0; i <= t; i++)
                e.push(this.getPoint(i / t));
            return this.autoClose && e.push(e[0]),
            e
        },
        getPoints: function(t) {
            t = t || 12;
            for (var e, i = [], n = 0, r = this.curves; n < r.length; n++) {
                var a = r[n];
                a = a.getPoints(a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t);
                for (var o = 0; o < a.length; o++) {
                    var s = a[o];
                    e && e.equals(s) || (i.push(s),
                    e = s)
                }
            }
            return this.autoClose && 1 < i.length && !i[i.length - 1].equals(i[0]) && i.push(i[0]),
            i
        },
        copy: function(t) {
            rn.prototype.copy.call(this, t),
            this.curves = [];
            for (var e = 0, i = t.curves.length; e < i; e++)
                this.curves.push(t.curves[e].clone());
            return this.autoClose = t.autoClose,
            this
        },
        toJSON: function() {
            var t = rn.prototype.toJSON.call(this);
            t.autoClose = this.autoClose,
            t.curves = [];
            for (var e = 0, i = this.curves.length; e < i; e++)
                t.curves.push(this.curves[e].toJSON());
            return t
        },
        fromJSON: function(t) {
            rn.prototype.fromJSON.call(this, t),
            this.autoClose = t.autoClose,
            this.curves = [];
            for (var e = 0, i = t.curves.length; e < i; e++) {
                var n = t.curves[e];
                this.curves.push((new zs[n.type]).fromJSON(n))
            }
            return this
        }
    }),
    bn.prototype = Object.assign(Object.create(xn.prototype), {
        constructor: bn,
        setFromPoints: function(t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, i = t.length; e < i; e++)
                this.lineTo(t[e].x, t[e].y)
        },
        moveTo: function(t, e) {
            this.currentPoint.set(t, e)
        },
        lineTo: function(t, e) {
            var i = new fn(this.currentPoint.clone(),new W(t,e));
            this.curves.push(i),
            this.currentPoint.set(t, e)
        },
        quadraticCurveTo: function(t, e, i, n) {
            t = new gn(this.currentPoint.clone(),new W(t,e),new W(i,n)),
            this.curves.push(t),
            this.currentPoint.set(i, n)
        },
        bezierCurveTo: function(t, e, i, n, r, a) {
            t = new pn(this.currentPoint.clone(),new W(t,e),new W(i,n),new W(r,a)),
            this.curves.push(t),
            this.currentPoint.set(r, a)
        },
        splineThru: function(t) {
            var e = [this.currentPoint.clone()].concat(t);
            e = new yn(e),
            this.curves.push(e),
            this.currentPoint.copy(t[t.length - 1])
        },
        arc: function(t, e, i, n, r, a) {
            this.absarc(t + this.currentPoint.x, e + this.currentPoint.y, i, n, r, a)
        },
        absarc: function(t, e, i, n, r, a) {
            this.absellipse(t, e, i, i, n, r, a)
        },
        ellipse: function(t, e, i, n, r, a, o, s) {
            this.absellipse(t + this.currentPoint.x, e + this.currentPoint.y, i, n, r, a, o, s)
        },
        absellipse: function(t, e, i, n, r, a, o, s) {
            t = new an(t,e,i,n,r,a,o,s),
            0 < this.curves.length && ((e = t.getPoint(0)).equals(this.currentPoint) || this.lineTo(e.x, e.y)),
            this.curves.push(t),
            t = t.getPoint(1),
            this.currentPoint.copy(t)
        },
        copy: function(t) {
            return xn.prototype.copy.call(this, t),
            this.currentPoint.copy(t.currentPoint),
            this
        },
        toJSON: function() {
            var t = xn.prototype.toJSON.call(this);
            return t.currentPoint = this.currentPoint.toArray(),
            t
        },
        fromJSON: function(t) {
            return xn.prototype.fromJSON.call(this, t),
            this.currentPoint.fromArray(t.currentPoint),
            this
        }
    }),
    _n.prototype = Object.assign(Object.create(bn.prototype), {
        constructor: _n,
        getPointsHoles: function(t) {
            for (var e = [], i = 0, n = this.holes.length; i < n; i++)
                e[i] = this.holes[i].getPoints(t);
            return e
        },
        extractPoints: function(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        },
        copy: function(t) {
            bn.prototype.copy.call(this, t),
            this.holes = [];
            for (var e = 0, i = t.holes.length; e < i; e++)
                this.holes.push(t.holes[e].clone());
            return this
        },
        toJSON: function() {
            var t = bn.prototype.toJSON.call(this);
            t.uuid = this.uuid,
            t.holes = [];
            for (var e = 0, i = this.holes.length; e < i; e++)
                t.holes.push(this.holes[e].toJSON());
            return t
        },
        fromJSON: function(t) {
            bn.prototype.fromJSON.call(this, t),
            this.uuid = t.uuid,
            this.holes = [];
            for (var e = 0, i = t.holes.length; e < i; e++) {
                var n = t.holes[e];
                this.holes.push((new bn).fromJSON(n))
            }
            return this
        }
    }),
    wn.prototype = Object.assign(Object.create(l.prototype), {
        constructor: wn,
        isLight: !0,
        copy: function(t) {
            return l.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.intensity = t.intensity,
            this
        },
        toJSON: function(t) {
            return (t = l.prototype.toJSON.call(this, t)).object.color = this.color.getHex(),
            t.object.intensity = this.intensity,
            void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (t.object.distance = this.distance),
            void 0 !== this.angle && (t.object.angle = this.angle),
            void 0 !== this.decay && (t.object.decay = this.decay),
            void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
            void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
            t
        }
    }),
    Mn.prototype = Object.assign(Object.create(wn.prototype), {
        constructor: Mn,
        isHemisphereLight: !0,
        copy: function(t) {
            return wn.prototype.copy.call(this, t),
            this.groundColor.copy(t.groundColor),
            this
        }
    }),
    Object.assign(En.prototype, {
        copy: function(t) {
            return this.camera = t.camera.clone(),
            this.bias = t.bias,
            this.radius = t.radius,
            this.mapSize.copy(t.mapSize),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var t = {};
            return 0 !== this.bias && (t.bias = this.bias),
            1 !== this.radius && (t.radius = this.radius),
            512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()),
            t.camera = this.camera.toJSON(!1).object,
            delete t.camera.matrix,
            t
        }
    }),
    Tn.prototype = Object.assign(Object.create(En.prototype), {
        constructor: Tn,
        isSpotLightShadow: !0,
        update: function(t) {
            var e = this.camera
              , i = 2 * fa.RAD2DEG * t.angle
              , n = this.mapSize.width / this.mapSize.height;
            t = t.distance || e.far,
            i === e.fov && n === e.aspect && t === e.far || (e.fov = i,
            e.aspect = n,
            e.far = t,
            e.updateProjectionMatrix())
        }
    }),
    Sn.prototype = Object.assign(Object.create(wn.prototype), {
        constructor: Sn,
        isSpotLight: !0,
        copy: function(t) {
            return wn.prototype.copy.call(this, t),
            this.distance = t.distance,
            this.angle = t.angle,
            this.penumbra = t.penumbra,
            this.decay = t.decay,
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    An.prototype = Object.assign(Object.create(wn.prototype), {
        constructor: An,
        isPointLight: !0,
        copy: function(t) {
            return wn.prototype.copy.call(this, t),
            this.distance = t.distance,
            this.decay = t.decay,
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    Ln.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Ln,
        isOrthographicCamera: !0,
        copy: function(t, e) {
            return le.prototype.copy.call(this, t, e),
            this.left = t.left,
            this.right = t.right,
            this.top = t.top,
            this.bottom = t.bottom,
            this.near = t.near,
            this.far = t.far,
            this.zoom = t.zoom,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this
        },
        setViewOffset: function(t, e, i, n, r, a) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = t,
            this.view.fullHeight = e,
            this.view.offsetX = i,
            this.view.offsetY = n,
            this.view.width = r,
            this.view.height = a,
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = (this.right - this.left) / (2 * this.zoom)
              , e = (this.top - this.bottom) / (2 * this.zoom)
              , i = (this.right + this.left) / 2
              , n = (this.top + this.bottom) / 2
              , r = i - t;
            if (i += t,
            t = n + e,
            e = n - e,
            null !== this.view && this.view.enabled) {
                i = this.zoom / (this.view.width / this.view.fullWidth),
                e = this.zoom / (this.view.height / this.view.fullHeight);
                var a = (this.right - this.left) / this.view.width;
                n = (this.top - this.bottom) / this.view.height,
                i = (r += this.view.offsetX / i * a) + this.view.width / i * a,
                e = (t -= this.view.offsetY / e * n) - this.view.height / e * n
            }
            this.projectionMatrix.makeOrthographic(r, i, t, e, this.near, this.far),
            this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(t) {
            return (t = l.prototype.toJSON.call(this, t)).object.zoom = this.zoom,
            t.object.left = this.left,
            t.object.right = this.right,
            t.object.top = this.top,
            t.object.bottom = this.bottom,
            t.object.near = this.near,
            t.object.far = this.far,
            null !== this.view && (t.object.view = Object.assign({}, this.view)),
            t
        }
    }),
    Rn.prototype = Object.assign(Object.create(En.prototype), {
        constructor: Rn
    }),
    Pn.prototype = Object.assign(Object.create(wn.prototype), {
        constructor: Pn,
        isDirectionalLight: !0,
        copy: function(t) {
            return wn.prototype.copy.call(this, t),
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    Cn.prototype = Object.assign(Object.create(wn.prototype), {
        constructor: Cn,
        isAmbientLight: !0
    }),
    In.prototype = Object.assign(Object.create(wn.prototype), {
        constructor: In,
        isRectAreaLight: !0,
        copy: function(t) {
            return wn.prototype.copy.call(this, t),
            this.width = t.width,
            this.height = t.height,
            this
        },
        toJSON: function(t) {
            return (t = wn.prototype.toJSON.call(this, t)).object.width = this.width,
            t.object.height = this.height,
            t
        }
    });
    var Gs = {
        arraySlice: function(t, e, i) {
            return Gs.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
        },
        convertArray: function(t, e, i) {
            return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(i) {
            for (var t = i.length, e = Array(t), n = 0; n !== t; ++n)
                e[n] = n;
            return e.sort(function(t, e) {
                return i[t] - i[e]
            }),
            e
        },
        sortedArray: function(t, e, i) {
            for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
                for (var s = i[a] * e, c = 0; c !== e; ++c)
                    r[o++] = t[s + c];
            return r
        },
        flattenJSON: function(t, e, i, n) {
            for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n]; )
                a = t[r++];
            if (void 0 !== a) {
                var o = a[n];
                if (void 0 !== o)
                    if (Array.isArray(o))
                        for (; void 0 !== (o = a[n]) && (e.push(a.time),
                        i.push.apply(i, o)),
                        void 0 !== (a = t[r++]); )
                            ;
                    else if (void 0 !== o.toArray)
                        for (; void 0 !== (o = a[n]) && (e.push(a.time),
                        o.toArray(i, i.length)),
                        void 0 !== (a = t[r++]); )
                            ;
                    else
                        for (; void 0 !== (o = a[n]) && (e.push(a.time),
                        i.push(o)),
                        void 0 !== (a = t[r++]); )
                            ;
            }
        }
    };
    Object.assign(On.prototype, {
        evaluate: function(t) {
            var e = this.parameterPositions
              , i = this._cachedIndex
              , n = e[i]
              , r = e[i - 1];
            t: {
                e: {
                    i: {
                        n: if (!(t < n)) {
                            for (var a = i + 2; ; ) {
                                if (void 0 === n) {
                                    if (t < r)
                                        break n;
                                    return this._cachedIndex = i = e.length,
                                    this.afterEnd_(i - 1, t, r)
                                }
                                if (i === a)
                                    break;
                                if (r = n,
                                t < (n = e[++i]))
                                    break e
                            }
                            n = e.length;
                            break i
                        }
                        if (r <= t)
                            break t;
                        for (t < (a = e[1]) && (i = 2,
                        r = a),
                        a = i - 2; ; ) {
                            if (void 0 === r)
                                return this._cachedIndex = 0,
                                this.beforeStart_(0, t, n);
                            if (i === a)
                                break;
                            if (n = r,
                            (r = e[--i - 1]) <= t)
                                break e
                        }
                        n = i,
                        i = 0
                    }
                    for (; i < n; )
                        t < e[r = i + n >>> 1] ? n = r : i = r + 1;
                    if (n = e[i],
                    void 0 === (r = e[i - 1]))
                        return this._cachedIndex = 0,
                        this.beforeStart_(0, t, n);
                    if (void 0 === n)
                        return this._cachedIndex = i = e.length,
                        this.afterEnd_(i - 1, r, t)
                }
                this._cachedIndex = i,
                this.intervalChanged_(i, r, n)
            }
            return this.interpolate_(i, r, t, n)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(t) {
            var e = this.resultBuffer
              , i = this.sampleValues
              , n = this.valueSize;
            t *= n;
            for (var r = 0; r !== n; ++r)
                e[r] = i[t + r];
            return e
        },
        interpolate_: function() {
            throw Error("call to abstract method")
        },
        intervalChanged_: function() {}
    }),
    Object.assign(On.prototype, {
        beforeStart_: On.prototype.copySampleValue_,
        afterEnd_: On.prototype.copySampleValue_
    }),
    Nn.prototype = Object.assign(Object.create(On.prototype), {
        constructor: Nn,
        DefaultSettings_: {
            endingStart: 2400,
            endingEnd: 2400
        },
        intervalChanged_: function(t, e, i) {
            var n = this.parameterPositions
              , r = t - 2
              , a = t + 1
              , o = n[r]
              , s = n[a];
            if (void 0 === o)
                switch (this.getSettings_().endingStart) {
                case 2401:
                    r = t,
                    o = 2 * e - i;
                    break;
                case 2402:
                    o = e + n[r = n.length - 2] - n[r + 1];
                    break;
                default:
                    r = t,
                    o = i
                }
            if (void 0 === s)
                switch (this.getSettings_().endingEnd) {
                case 2401:
                    a = t,
                    s = 2 * i - e;
                    break;
                case 2402:
                    s = i + n[a = 1] - n[0];
                    break;
                default:
                    a = t - 1,
                    s = e
                }
            t = .5 * (i - e),
            n = this.valueSize,
            this._weightPrev = t / (e - o),
            this._weightNext = t / (s - i),
            this._offsetPrev = r * n,
            this._offsetNext = a * n
        },
        interpolate_: function(t, e, i, n) {
            var r = this.resultBuffer
              , a = this.sampleValues
              , o = this.valueSize
              , s = (t *= o) - o
              , c = this._offsetPrev
              , h = this._offsetNext
              , l = this._weightPrev
              , u = this._weightNext
              , p = (i - e) / (n - e);
            for (e = -l * (n = (i = p * p) * p) + 2 * l * i - l * p,
            l = (1 + l) * n + (-1.5 - 2 * l) * i + (-.5 + l) * p + 1,
            p = (-1 - u) * n + (1.5 + u) * i + .5 * p,
            u = u * n - u * i,
            i = 0; i !== o; ++i)
                r[i] = e * a[c + i] + l * a[s + i] + p * a[t + i] + u * a[h + i];
            return r
        }
    }),
    Dn.prototype = Object.assign(Object.create(On.prototype), {
        constructor: Dn,
        interpolate_: function(t, e, i, n) {
            var r = this.resultBuffer
              , a = this.sampleValues
              , o = this.valueSize
              , s = (t *= o) - o;
            for (i = 1 - (e = (i - e) / (n - e)),
            n = 0; n !== o; ++n)
                r[n] = a[s + n] * i + a[t + n] * e;
            return r
        }
    }),
    Un.prototype = Object.assign(Object.create(On.prototype), {
        constructor: Un,
        interpolate_: function(t) {
            return this.copySampleValue_(t - 1)
        }
    }),
    Object.assign(Bn, {
        toJSON: function(t) {
            var e = t.constructor;
            if (void 0 !== e.toJSON)
                e = e.toJSON(t);
            else {
                e = {
                    name: t.name,
                    times: Gs.convertArray(t.times, Array),
                    values: Gs.convertArray(t.values, Array)
                };
                var i = t.getInterpolation();
                i !== t.DefaultInterpolation && (e.interpolation = i)
            }
            return e.type = t.ValueTypeName,
            e
        }
    }),
    Object.assign(Bn.prototype, {
        constructor: Bn,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(t) {
            return new Un(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodLinear: function(t) {
            return new Dn(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodSmooth: function(t) {
            return new Nn(this.times,this.values,this.getValueSize(),t)
        },
        setInterpolation: function(t) {
            switch (t) {
            case 2300:
                var e = this.InterpolantFactoryMethodDiscrete;
                break;
            case 2301:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case 2302:
                e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 !== e)
                return this.createInterpolant = e,
                this;
            if (e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name,
            void 0 === this.createInterpolant) {
                if (t === this.DefaultInterpolation)
                    throw Error(e);
                this.setInterpolation(this.DefaultInterpolation)
            }
            return console.warn("THREE.KeyframeTrack:", e),
            this
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return 2300;
            case this.InterpolantFactoryMethodLinear:
                return 2301;
            case this.InterpolantFactoryMethodSmooth:
                return 2302
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(t) {
            if (0 !== t)
                for (var e = this.times, i = 0, n = e.length; i !== n; ++i)
                    e[i] += t;
            return this
        },
        scale: function(t) {
            if (1 !== t)
                for (var e = this.times, i = 0, n = e.length; i !== n; ++i)
                    e[i] *= t;
            return this
        },
        trim: function(t, e) {
            for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t; )
                ++r;
            for (; -1 !== a && i[a] > e; )
                --a;
            return ++a,
            0 === r && a === n || (a <= r && (r = (a = Math.max(a, 1)) - 1),
            t = this.getValueSize(),
            this.times = Gs.arraySlice(i, r, a),
            this.values = Gs.arraySlice(this.values, r * t, a * t)),
            this
        },
        validate: function() {
            var t = !0
              , e = this.getValueSize();
            0 != e - Math.floor(e) && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
            t = !1);
            var i = this.times;
            e = this.values;
            var n = i.length;
            0 === n && (console.error("THREE.KeyframeTrack: Track is empty.", this),
            t = !1);
            for (var r = null, a = 0; a !== n; a++) {
                var o = i[a];
                if ("number" == typeof o && isNaN(o)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, o),
                    t = !1;
                    break
                }
                if (null !== r && o < r) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, a, o, r),
                    t = !1;
                    break
                }
                r = o
            }
            if (void 0 !== e && Gs.isTypedArray(e))
                for (a = 0,
                i = e.length; a !== i; ++a)
                    if (n = e[a],
                    isNaN(n)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, n),
                        t = !1;
                        break
                    }
            return t
        },
        optimize: function() {
            for (var t = this.times, e = this.values, i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, o = 1; o < a; ++o) {
                var s = !1
                  , c = t[o];
                if (c !== t[o + 1] && (1 !== o || c !== c[0]))
                    if (n)
                        s = !0;
                    else {
                        var h = o * i
                          , l = h - i
                          , u = h + i;
                        for (c = 0; c !== i; ++c) {
                            var p = e[h + c];
                            if (p !== e[l + c] || p !== e[u + c]) {
                                s = !0;
                                break
                            }
                        }
                    }
                if (s) {
                    if (o !== r)
                        for (t[r] = t[o],
                        s = o * i,
                        h = r * i,
                        c = 0; c !== i; ++c)
                            e[h + c] = e[s + c];
                    ++r
                }
            }
            if (0 < a) {
                for (t[r] = t[a],
                s = a * i,
                h = r * i,
                c = 0; c !== i; ++c)
                    e[h + c] = e[s + c];
                ++r
            }
            return r !== t.length && (this.times = Gs.arraySlice(t, 0, r),
            this.values = Gs.arraySlice(e, 0, r * i)),
            this
        }
    }),
    Fn.prototype = Object.assign(Object.create(Bn.prototype), {
        constructor: Fn,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    zn.prototype = Object.assign(Object.create(Bn.prototype), {
        constructor: zn,
        ValueTypeName: "color"
    }),
    Gn.prototype = Object.assign(Object.create(Bn.prototype), {
        constructor: Gn,
        ValueTypeName: "number"
    }),
    Hn.prototype = Object.assign(Object.create(On.prototype), {
        constructor: Hn,
        interpolate_: function(t, e, i, n) {
            var r = this.resultBuffer
              , a = this.sampleValues
              , o = this.valueSize;
            for (e = (i - e) / (n - e),
            i = (t *= o) + o; t !== i; t += 4)
                w.slerpFlat(r, 0, a, t - o, a, t, e);
            return r
        }
    }),
    Vn.prototype = Object.assign(Object.create(Bn.prototype), {
        constructor: Vn,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function(t) {
            return new Hn(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodSmooth: void 0
    }),
    kn.prototype = Object.assign(Object.create(Bn.prototype), {
        constructor: kn,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    jn.prototype = Object.assign(Object.create(Bn.prototype), {
        constructor: jn,
        ValueTypeName: "vector"
    }),
    Object.assign(Wn, {
        parse: function(t) {
            for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r)
                e.push(Xn(i[r]).scale(n));
            return new Wn(t.name,t.duration,e)
        },
        toJSON: function(t) {
            var e = []
              , i = t.tracks;
            t = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid
            };
            for (var n = 0, r = i.length; n !== r; ++n)
                e.push(Bn.toJSON(i[n]));
            return t
        },
        CreateFromMorphTargetSequence: function(t, e, i, n) {
            for (var r = e.length, a = [], o = 0; o < r; o++) {
                var s = []
                  , c = [];
                s.push((o + r - 1) % r, o, (o + 1) % r),
                c.push(0, 1, 0);
                var h = Gs.getKeyframeOrder(s);
                s = Gs.sortedArray(s, 1, h),
                c = Gs.sortedArray(c, 1, h),
                n || 0 !== s[0] || (s.push(r),
                c.push(c[0])),
                a.push(new Gn(".morphTargetInfluences[" + e[o].name + "]",s,c).scale(1 / i))
            }
            return new Wn(t,-1,a)
        },
        findByName: function(t, e) {
            var i = t;
            for (Array.isArray(t) || (i = t.geometry && t.geometry.animations || t.animations),
            t = 0; t < i.length; t++)
                if (i[t].name === e)
                    return i[t];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(t, e, i) {
            for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                var s = t[a]
                  , c = s.name.match(r);
                if (c && 1 < c.length) {
                    var h = c[1];
                    (c = n[h]) || (n[h] = c = []),
                    c.push(s)
                }
            }
            for (h in t = [],
            n)
                t.push(Wn.CreateFromMorphTargetSequence(h, n[h], e, i));
            return t
        },
        parseAnimation: function(t, e) {
            if (!t)
                return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
                null;
            var i = function(t, e, i, n, r) {
                if (0 !== i.length) {
                    var a = []
                      , o = [];
                    Gs.flattenJSON(i, a, o, n),
                    0 !== a.length && r.push(new t(e,a,o))
                }
            }
              , n = []
              , r = t.name || "default"
              , a = t.length || -1
              , o = t.fps || 30;
            t = t.hierarchy || [];
            for (var s = 0; s < t.length; s++) {
                var c = t[s].keys;
                if (c && 0 !== c.length)
                    if (c[0].morphTargets) {
                        a = {};
                        for (var h = 0; h < c.length; h++)
                            if (c[h].morphTargets)
                                for (var l = 0; l < c[h].morphTargets.length; l++)
                                    a[c[h].morphTargets[l]] = -1;
                        for (var u in a) {
                            var p = []
                              , d = [];
                            for (l = 0; l !== c[h].morphTargets.length; ++l) {
                                var f = c[h];
                                p.push(f.time),
                                d.push(f.morphTarget === u ? 1 : 0)
                            }
                            n.push(new Gn(".morphTargetInfluence[" + u + "]",p,d))
                        }
                        a = a.length * (o || 1)
                    } else
                        i(jn, (h = ".bones[" + e[s].name + "]") + ".position", c, "pos", n),
                        i(Vn, h + ".quaternion", c, "rot", n),
                        i(jn, h + ".scale", c, "scl", n)
            }
            return 0 === n.length ? null : new Wn(r,a,n)
        }
    }),
    Object.assign(Wn.prototype, {
        resetDuration: function() {
            for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
                var n = this.tracks[e];
                t = Math.max(t, n.times[n.times.length - 1])
            }
            return this.duration = t,
            this
        },
        trim: function() {
            for (var t = 0; t < this.tracks.length; t++)
                this.tracks[t].trim(0, this.duration);
            return this
        },
        validate: function() {
            for (var t = !0, e = 0; e < this.tracks.length; e++)
                t = t && this.tracks[e].validate();
            return t
        },
        optimize: function() {
            for (var t = 0; t < this.tracks.length; t++)
                this.tracks[t].optimize();
            return this
        }
    }),
    Object.assign(qn.prototype, {
        load: function(t, e, i, n) {
            var r = this;
            new Qi(r.manager).load(t, function(t) {
                e(r.parse(JSON.parse(t)))
            }, i, n)
        },
        setTextures: function(t) {
            this.textures = t
        },
        parse: function(t) {
            function e(t) {
                return void 0 === i[t] && console.warn("THREE.MaterialLoader: Undefined texture", t),
                i[t]
            }
            var i = this.textures
              , n = new Cs[t.type];
            if (void 0 !== t.uuid && (n.uuid = t.uuid),
            void 0 !== t.name && (n.name = t.name),
            void 0 !== t.color && n.color.setHex(t.color),
            void 0 !== t.roughness && (n.roughness = t.roughness),
            void 0 !== t.metalness && (n.metalness = t.metalness),
            void 0 !== t.emissive && n.emissive.setHex(t.emissive),
            void 0 !== t.specular && n.specular.setHex(t.specular),
            void 0 !== t.shininess && (n.shininess = t.shininess),
            void 0 !== t.clearCoat && (n.clearCoat = t.clearCoat),
            void 0 !== t.clearCoatRoughness && (n.clearCoatRoughness = t.clearCoatRoughness),
            void 0 !== t.vertexColors && (n.vertexColors = t.vertexColors),
            void 0 !== t.fog && (n.fog = t.fog),
            void 0 !== t.flatShading && (n.flatShading = t.flatShading),
            void 0 !== t.blending && (n.blending = t.blending),
            void 0 !== t.combine && (n.combine = t.combine),
            void 0 !== t.side && (n.side = t.side),
            void 0 !== t.opacity && (n.opacity = t.opacity),
            void 0 !== t.transparent && (n.transparent = t.transparent),
            void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest),
            void 0 !== t.depthTest && (n.depthTest = t.depthTest),
            void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite),
            void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite),
            void 0 !== t.wireframe && (n.wireframe = t.wireframe),
            void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth),
            void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap),
            void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin),
            void 0 !== t.rotation && (n.rotation = t.rotation),
            1 !== t.linewidth && (n.linewidth = t.linewidth),
            void 0 !== t.dashSize && (n.dashSize = t.dashSize),
            void 0 !== t.gapSize && (n.gapSize = t.gapSize),
            void 0 !== t.scale && (n.scale = t.scale),
            void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset),
            void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor),
            void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits),
            void 0 !== t.skinning && (n.skinning = t.skinning),
            void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets),
            void 0 !== t.dithering && (n.dithering = t.dithering),
            void 0 !== t.visible && (n.visible = t.visible),
            void 0 !== t.userData && (n.userData = t.userData),
            void 0 !== t.uniforms)
                for (var r in t.uniforms) {
                    var a = t.uniforms[r];
                    switch (n.uniforms[r] = {},
                    a.type) {
                    case "t":
                        n.uniforms[r].value = e(a.value);
                        break;
                    case "c":
                        n.uniforms[r].value = (new M).setHex(a.value);
                        break;
                    case "v2":
                        n.uniforms[r].value = (new W).fromArray(a.value);
                        break;
                    case "v3":
                        n.uniforms[r].value = (new Mt).fromArray(a.value);
                        break;
                    case "v4":
                        n.uniforms[r].value = (new Et).fromArray(a.value);
                        break;
                    case "m4":
                        n.uniforms[r].value = (new wt).fromArray(a.value);
                        break;
                    default:
                        n.uniforms[r].value = a.value
                    }
                }
            return void 0 !== t.defines && (n.defines = t.defines),
            void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader),
            void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader),
            void 0 !== t.shading && (n.flatShading = 1 === t.shading),
            void 0 !== t.size && (n.size = t.size),
            void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation),
            void 0 !== t.map && (n.map = e(t.map)),
            void 0 !== t.alphaMap && (n.alphaMap = e(t.alphaMap),
            n.transparent = !0),
            void 0 !== t.bumpMap && (n.bumpMap = e(t.bumpMap)),
            void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale),
            void 0 !== t.normalMap && (n.normalMap = e(t.normalMap)),
            void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType),
            void 0 !== t.normalScale && (r = t.normalScale,
            !1 === Array.isArray(r) && (r = [r, r]),
            n.normalScale = (new W).fromArray(r)),
            void 0 !== t.displacementMap && (n.displacementMap = e(t.displacementMap)),
            void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale),
            void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias),
            void 0 !== t.roughnessMap && (n.roughnessMap = e(t.roughnessMap)),
            void 0 !== t.metalnessMap && (n.metalnessMap = e(t.metalnessMap)),
            void 0 !== t.emissiveMap && (n.emissiveMap = e(t.emissiveMap)),
            void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity),
            void 0 !== t.specularMap && (n.specularMap = e(t.specularMap)),
            void 0 !== t.envMap && (n.envMap = e(t.envMap)),
            void 0 !== t.envMapIntensity && (n.envMapIntensity = t.envMapIntensity),
            void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity),
            void 0 !== t.lightMap && (n.lightMap = e(t.lightMap)),
            void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity),
            void 0 !== t.aoMap && (n.aoMap = e(t.aoMap)),
            void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity),
            void 0 !== t.gradientMap && (n.gradientMap = e(t.gradientMap)),
            n
        }
    }),
    Object.assign(Yn.prototype, {
        load: function(t, e, i, n) {
            var r = this;
            new Qi(r.manager).load(t, function(t) {
                e(r.parse(JSON.parse(t)))
            }, i, n)
        },
        parse: function(t) {
            var e = new P
              , i = t.data.index;
            void 0 !== i && (i = new Ws[i.type](i.array),
            e.setIndex(new f(i,1)));
            var n = t.data.attributes;
            for (a in n) {
                var r = n[a];
                i = new Ws[r.type](r.array),
                e.addAttribute(a, new f(i,r.itemSize,r.normalized))
            }
            var a = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== a)
                for (i = 0,
                n = a.length; i !== n; ++i)
                    r = a[i],
                    e.addGroup(r.start, r.count, r.materialIndex);
            return void 0 !== (t = t.data.boundingSphere) && (a = new Mt,
            void 0 !== t.center && a.fromArray(t.center),
            e.boundingSphere = new o(a,t.radius)),
            e
        }
    });
    var Hs, Vs, ks, js, Ws = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    Jn.Handlers = {
        handlers: [],
        add: function(t, e) {
            this.handlers.push(t, e)
        },
        get: function(t) {
            for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
                var r = e[i + 1];
                if (e[i].test(t))
                    return r
            }
            return null
        }
    },
    Object.assign(Jn.prototype, {
        crossOrigin: "anonymous",
        onLoadStart: function() {},
        onLoadProgress: function() {},
        onLoadComplete: function() {},
        initMaterials: function(t, e, i) {
            for (var n = [], r = 0; r < t.length; ++r)
                n[r] = this.createMaterial(t[r], e, i);
            return n
        },
        createMaterial: (Hs = {
            NoBlending: 0,
            NormalBlending: 1,
            AdditiveBlending: 2,
            SubtractiveBlending: 3,
            MultiplyBlending: 4,
            CustomBlending: 5
        },
        Vs = new M,
        ks = new nn,
        js = new qn,
        function(t, o, s) {
            function e(t, e, i, n, r) {
                t = o + t;
                var a = Jn.Handlers.get(t);
                return t = null !== a ? a.load(t) : (ks.setCrossOrigin(s),
                ks.load(t)),
                void 0 !== e && (t.repeat.fromArray(e),
                1 !== e[0] && (t.wrapS = 1e3),
                1 !== e[1] && (t.wrapT = 1e3)),
                void 0 !== i && t.offset.fromArray(i),
                void 0 !== n && ("repeat" === n[0] && (t.wrapS = 1e3),
                "mirror" === n[0] && (t.wrapS = 1002),
                "repeat" === n[1] && (t.wrapT = 1e3),
                "mirror" === n[1] && (t.wrapT = 1002)),
                void 0 !== r && (t.anisotropy = r),
                e = fa.generateUUID(),
                c[e] = t,
                e
            }
            var i, c = {}, n = {
                uuid: fa.generateUUID(),
                type: "MeshLambertMaterial"
            };
            for (i in t) {
                var r = t[i];
                switch (i) {
                case "DbgColor":
                case "DbgIndex":
                case "opticalDensity":
                case "illumination":
                    break;
                case "DbgName":
                    n.name = r;
                    break;
                case "blending":
                    n.blending = Hs[r];
                    break;
                case "colorAmbient":
                case "mapAmbient":
                    console.warn("THREE.Loader.createMaterial:", i, "is no longer supported.");
                    break;
                case "colorDiffuse":
                    n.color = Vs.fromArray(r).getHex();
                    break;
                case "colorSpecular":
                    n.specular = Vs.fromArray(r).getHex();
                    break;
                case "colorEmissive":
                    n.emissive = Vs.fromArray(r).getHex();
                    break;
                case "specularCoef":
                    n.shininess = r;
                    break;
                case "shading":
                    "basic" === r.toLowerCase() && (n.type = "MeshBasicMaterial"),
                    "phong" === r.toLowerCase() && (n.type = "MeshPhongMaterial"),
                    "standard" === r.toLowerCase() && (n.type = "MeshStandardMaterial");
                    break;
                case "mapDiffuse":
                    n.map = e(r, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy);
                    break;
                case "mapDiffuseRepeat":
                case "mapDiffuseOffset":
                case "mapDiffuseWrap":
                case "mapDiffuseAnisotropy":
                    break;
                case "mapEmissive":
                    n.emissiveMap = e(r, t.mapEmissiveRepeat, t.mapEmissiveOffset, t.mapEmissiveWrap, t.mapEmissiveAnisotropy);
                    break;
                case "mapEmissiveRepeat":
                case "mapEmissiveOffset":
                case "mapEmissiveWrap":
                case "mapEmissiveAnisotropy":
                    break;
                case "mapLight":
                    n.lightMap = e(r, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy);
                    break;
                case "mapLightRepeat":
                case "mapLightOffset":
                case "mapLightWrap":
                case "mapLightAnisotropy":
                    break;
                case "mapAO":
                    n.aoMap = e(r, t.mapAORepeat, t.mapAOOffset, t.mapAOWrap, t.mapAOAnisotropy);
                    break;
                case "mapAORepeat":
                case "mapAOOffset":
                case "mapAOWrap":
                case "mapAOAnisotropy":
                    break;
                case "mapBump":
                    n.bumpMap = e(r, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy);
                    break;
                case "mapBumpScale":
                    n.bumpScale = r;
                    break;
                case "mapBumpRepeat":
                case "mapBumpOffset":
                case "mapBumpWrap":
                case "mapBumpAnisotropy":
                    break;
                case "mapNormal":
                    n.normalMap = e(r, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy);
                    break;
                case "mapNormalFactor":
                    n.normalScale = r;
                    break;
                case "mapNormalRepeat":
                case "mapNormalOffset":
                case "mapNormalWrap":
                case "mapNormalAnisotropy":
                    break;
                case "mapSpecular":
                    n.specularMap = e(r, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy);
                    break;
                case "mapSpecularRepeat":
                case "mapSpecularOffset":
                case "mapSpecularWrap":
                case "mapSpecularAnisotropy":
                    break;
                case "mapMetalness":
                    n.metalnessMap = e(r, t.mapMetalnessRepeat, t.mapMetalnessOffset, t.mapMetalnessWrap, t.mapMetalnessAnisotropy);
                    break;
                case "mapMetalnessRepeat":
                case "mapMetalnessOffset":
                case "mapMetalnessWrap":
                case "mapMetalnessAnisotropy":
                    break;
                case "mapRoughness":
                    n.roughnessMap = e(r, t.mapRoughnessRepeat, t.mapRoughnessOffset, t.mapRoughnessWrap, t.mapRoughnessAnisotropy);
                    break;
                case "mapRoughnessRepeat":
                case "mapRoughnessOffset":
                case "mapRoughnessWrap":
                case "mapRoughnessAnisotropy":
                    break;
                case "mapAlpha":
                    n.alphaMap = e(r, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy);
                    break;
                case "mapAlphaRepeat":
                case "mapAlphaOffset":
                case "mapAlphaWrap":
                case "mapAlphaAnisotropy":
                    break;
                case "flipSided":
                    n.side = 1;
                    break;
                case "doubleSided":
                    n.side = 2;
                    break;
                case "transparency":
                    console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                    n.opacity = r;
                    break;
                case "depthTest":
                case "depthWrite":
                case "colorWrite":
                case "opacity":
                case "reflectivity":
                case "transparent":
                case "visible":
                case "wireframe":
                    n[i] = r;
                    break;
                case "vertexColors":
                    !0 === r && (n.vertexColors = 2),
                    "face" === r && (n.vertexColors = 1);
                    break;
                default:
                    console.error("THREE.Loader.createMaterial: Unsupported", i, r)
                }
            }
            return "MeshBasicMaterial" === n.type && delete n.emissive,
            "MeshPhongMaterial" !== n.type && delete n.specular,
            n.opacity < 1 && (n.transparent = !0),
            js.setTextures(c),
            js.parse(n)
        }
        )
    });
    var Xs = {
        decodeText: function(t) {
            if ("undefined" != typeof TextDecoder)
                return (new TextDecoder).decode(t);
            for (var e = "", i = 0, n = t.length; i < n; i++)
                e += String.fromCharCode(t[i]);
            return decodeURIComponent(escape(e))
        },
        extractUrlBase: function(t) {
            var e = t.lastIndexOf("/");
            return -1 === e ? "./" : t.substr(0, e + 1)
        }
    };
    Object.assign(Zn.prototype, {
        crossOrigin: "anonymous",
        load: function(i, n, t, e) {
            var r = this
              , a = void 0 === this.path ? Xs.extractUrlBase(i) : this.path
              , o = new Qi(this.manager);
            o.setPath(this.path),
            o.setWithCredentials(this.withCredentials),
            o.load(i, function(t) {
                var e = (t = JSON.parse(t)).metadata;
                void 0 === e || (void 0 === (e = e.type) || "object" !== e.toLowerCase()) ? (t = r.parse(t, a),
                n(t.geometry, t.materials)) : console.error("THREE.JSONLoader: " + i + " should be loaded with THREE.ObjectLoader instead.")
            }, t, e)
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setResourcePath: function(t) {
            return this.resourcePath = t,
            this
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        parse: function(t, e) {
            void 0 !== t.data && (t = t.data),
            t.scale = void 0 !== t.scale ? 1 / t.scale : 1;
            var i, n, r, a = new E, o = t, s = o.faces, c = o.vertices, h = o.normals, l = o.colors, u = o.scale, p = 0;
            if (void 0 !== o.uvs) {
                for (i = 0; i < o.uvs.length; i++)
                    o.uvs[i].length && p++;
                for (i = 0; i < p; i++)
                    a.faceVertexUvs[i] = []
            }
            var d = 0;
            for (r = c.length; d < r; )
                (i = new Mt).x = c[d++] * u,
                i.y = c[d++] * u,
                i.z = c[d++] * u,
                a.vertices.push(i);
            for (d = 0,
            r = s.length; d < r; ) {
                var f = 1 & (c = s[d++])
                  , m = 2 & c;
                i = 8 & c;
                var g = 16 & c
                  , v = 32 & c;
                if (u = 64 & c,
                c &= 128,
                f) {
                    (f = new U).a = s[d],
                    f.b = s[d + 1],
                    f.c = s[d + 3];
                    var y = new U;
                    if (y.a = s[d + 1],
                    y.b = s[d + 2],
                    y.c = s[d + 3],
                    d += 4,
                    m && (m = s[d++],
                    f.materialIndex = m,
                    y.materialIndex = m),
                    m = a.faces.length,
                    i)
                        for (i = 0; i < p; i++) {
                            var x = o.uvs[i];
                            for (a.faceVertexUvs[i][m] = [],
                            a.faceVertexUvs[i][m + 1] = [],
                            n = 0; n < 4; n++) {
                                var b = s[d++]
                                  , _ = x[2 * b];
                                _ = new W(_,b = x[2 * b + 1]),
                                2 !== n && a.faceVertexUvs[i][m].push(_),
                                0 !== n && a.faceVertexUvs[i][m + 1].push(_)
                            }
                        }
                    if (g && (g = 3 * s[d++],
                    f.normal.set(h[g++], h[g++], h[g]),
                    y.normal.copy(f.normal)),
                    v)
                        for (i = 0; i < 4; i++)
                            g = 3 * s[d++],
                            v = new Mt(h[g++],h[g++],h[g]),
                            2 !== i && f.vertexNormals.push(v),
                            0 !== i && y.vertexNormals.push(v);
                    if (u && (u = l[u = s[d++]],
                    f.color.setHex(u),
                    y.color.setHex(u)),
                    c)
                        for (i = 0; i < 4; i++)
                            u = l[u = s[d++]],
                            2 !== i && f.vertexColors.push(new M(u)),
                            0 !== i && y.vertexColors.push(new M(u));
                    a.faces.push(f),
                    a.faces.push(y)
                } else {
                    if ((f = new U).a = s[d++],
                    f.b = s[d++],
                    f.c = s[d++],
                    m && (m = s[d++],
                    f.materialIndex = m),
                    m = a.faces.length,
                    i)
                        for (i = 0; i < p; i++)
                            for (x = o.uvs[i],
                            a.faceVertexUvs[i][m] = [],
                            n = 0; n < 3; n++)
                                _ = new W(_ = x[2 * (b = s[d++])],b = x[2 * b + 1]),
                                a.faceVertexUvs[i][m].push(_);
                    if (g && (g = 3 * s[d++],
                    f.normal.set(h[g++], h[g++], h[g])),
                    v)
                        for (i = 0; i < 3; i++)
                            g = 3 * s[d++],
                            v = new Mt(h[g++],h[g++],h[g]),
                            f.vertexNormals.push(v);
                    if (u && (u = s[d++],
                    f.color.setHex(l[u])),
                    c)
                        for (i = 0; i < 3; i++)
                            u = s[d++],
                            f.vertexColors.push(new M(l[u]));
                    a.faces.push(f)
                }
            }
            if (d = void 0 !== (o = t).influencesPerVertex ? o.influencesPerVertex : 2,
            o.skinWeights)
                for (r = 0,
                s = o.skinWeights.length; r < s; r += d)
                    a.skinWeights.push(new Et(o.skinWeights[r],1 < d ? o.skinWeights[r + 1] : 0,2 < d ? o.skinWeights[r + 2] : 0,3 < d ? o.skinWeights[r + 3] : 0));
            if (o.skinIndices)
                for (r = 0,
                s = o.skinIndices.length; r < s; r += d)
                    a.skinIndices.push(new Et(o.skinIndices[r],1 < d ? o.skinIndices[r + 1] : 0,2 < d ? o.skinIndices[r + 2] : 0,3 < d ? o.skinIndices[r + 3] : 0));
            if (a.bones = o.bones,
            a.bones && 0 < a.bones.length && (a.skinWeights.length !== a.skinIndices.length || a.skinIndices.length !== a.vertices.length) && console.warn("When skinning, number of vertices (" + a.vertices.length + "), skinIndices (" + a.skinIndices.length + "), and skinWeights (" + a.skinWeights.length + ") should match."),
            s = (r = t).scale,
            void 0 !== r.morphTargets)
                for (o = 0,
                d = r.morphTargets.length; o < d; o++)
                    for (a.morphTargets[o] = {},
                    a.morphTargets[o].name = r.morphTargets[o].name,
                    a.morphTargets[o].vertices = [],
                    h = a.morphTargets[o].vertices,
                    p = 0,
                    c = (l = r.morphTargets[o].vertices).length; p < c; p += 3)
                        (u = new Mt).x = l[p] * s,
                        u.y = l[p + 1] * s,
                        u.z = l[p + 2] * s,
                        h.push(u);
            if (void 0 !== r.morphColors && 0 < r.morphColors.length)
                for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),
                s = a.faces,
                r = r.morphColors[0].colors,
                o = 0,
                d = s.length; o < d; o++)
                    s[o].color.fromArray(r, 3 * o);
            for (o = [],
            d = [],
            void 0 !== (r = t).animation && d.push(r.animation),
            void 0 !== r.animations && (r.animations.length ? d = d.concat(r.animations) : d.push(r.animations)),
            r = 0; r < d.length; r++)
                (s = Wn.parseAnimation(d[r], a.bones)) && o.push(s);
            return a.morphTargets && (d = Wn.CreateClipsFromMorphTargetSequences(a.morphTargets, 10),
            o = o.concat(d)),
            0 < o.length && (a.animations = o),
            a.computeFaceNormals(),
            a.computeBoundingSphere(),
            void 0 === t.materials || 0 === t.materials.length ? {
                geometry: a
            } : {
                geometry: a,
                materials: t = Jn.prototype.initMaterials(t.materials, this.resourcePath || e, this.crossOrigin)
            }
        }
    }),
    Object.assign(Qn.prototype, {
        crossOrigin: "anonymous",
        load: function(i, n, t, r) {
            "" === this.texturePath && (this.texturePath = i.substring(0, i.lastIndexOf("/") + 1));
            var a = this;
            new Qi(a.manager).load(i, function(t) {
                var e = null;
                try {
                    e = JSON.parse(t)
                } catch (t) {
                    return void 0 !== r && r(t),
                    void console.error("THREE:ObjectLoader: Can't parse " + i + ".", t.message)
                }
                void 0 === (t = e.metadata) || void 0 === t.type || "geometry" === t.type.toLowerCase() ? console.error("THREE.ObjectLoader: Can't load " + i + ". Use THREE.JSONLoader instead.") : a.parse(e, n)
            }, t, r)
        },
        setTexturePath: function(t) {
            return this.texturePath = t,
            this
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        parse: function(t, e) {
            var i = this.parseShape(t.shapes);
            i = this.parseGeometries(t.geometries, i);
            var n = this.parseImages(t.images, function() {
                void 0 !== e && e(r)
            });
            n = this.parseTextures(t.textures, n),
            n = this.parseMaterials(t.materials, n);
            var r = this.parseObject(t.object, i, n);
            return t.animations && (r.animations = this.parseAnimations(t.animations)),
            void 0 !== t.images && 0 !== t.images.length || void 0 === e || e(r),
            r
        },
        parseShape: function(t) {
            var e = {};
            if (void 0 !== t)
                for (var i = 0, n = t.length; i < n; i++) {
                    var r = (new _n).fromJSON(t[i]);
                    e[r.uuid] = r
                }
            return e
        },
        parseGeometries: function(t, e) {
            var i = {};
            if (void 0 !== t)
                for (var n = new Zn, r = new Yn, a = 0, o = t.length; a < o; a++) {
                    var s = t[a];
                    switch (s.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        var c = new Ps[s.type](s.width,s.height,s.widthSegments,s.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        c = new Ps[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        c = new Ps[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        c = new Ps[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        c = new Ps[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        c = new Ps[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "DodecahedronBufferGeometry":
                    case "IcosahedronGeometry":
                    case "IcosahedronBufferGeometry":
                    case "OctahedronGeometry":
                    case "OctahedronBufferGeometry":
                    case "TetrahedronGeometry":
                    case "TetrahedronBufferGeometry":
                        c = new Ps[s.type](s.radius,s.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        c = new Ps[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        c = new Ps[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        c = new Ps[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        c = new Ps[s.type](s.points,s.segments,s.phiStart,s.phiLength);
                        break;
                    case "PolyhedronGeometry":
                    case "PolyhedronBufferGeometry":
                        c = new Ps[s.type](s.vertices,s.indices,s.radius,s.details);
                        break;
                    case "ShapeGeometry":
                    case "ShapeBufferGeometry":
                        c = [];
                        for (var h = 0, l = s.shapes.length; h < l; h++) {
                            var u = e[s.shapes[h]];
                            c.push(u)
                        }
                        c = new Ps[s.type](c,s.curveSegments);
                        break;
                    case "ExtrudeGeometry":
                    case "ExtrudeBufferGeometry":
                        for (c = [],
                        h = 0,
                        l = s.shapes.length; h < l; h++)
                            u = e[s.shapes[h]],
                            c.push(u);
                        void 0 !== (h = s.options.extrudePath) && (s.options.extrudePath = (new zs[h.type]).fromJSON(h)),
                        c = new Ps[s.type](c,s.options);
                        break;
                    case "BufferGeometry":
                        c = r.parse(s);
                        break;
                    case "Geometry":
                        c = n.parse(s, this.texturePath).geometry;
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                        continue
                    }
                    c.uuid = s.uuid,
                    void 0 !== s.name && (c.name = s.name),
                    !0 === c.isBufferGeometry && void 0 !== s.userData && (c.userData = s.userData),
                    i[s.uuid] = c
                }
            return i
        },
        parseMaterials: function(t, e) {
            var i = {};
            if (void 0 !== t) {
                var n = new qn;
                n.setTextures(e),
                e = 0;
                for (var r = t.length; e < r; e++) {
                    var a = t[e];
                    if ("MultiMaterial" === a.type) {
                        for (var o = [], s = 0; s < a.materials.length; s++)
                            o.push(n.parse(a.materials[s]));
                        i[a.uuid] = o
                    } else
                        i[a.uuid] = n.parse(a)
                }
            }
            return i
        },
        parseAnimations: function(t) {
            for (var e = [], i = 0; i < t.length; i++) {
                var n = t[i]
                  , r = Wn.parse(n);
                void 0 !== n.uuid && (r.uuid = n.uuid),
                e.push(r)
            }
            return e
        },
        parseImages: function(t, e) {
            function i(t) {
                return n.manager.itemStart(t),
                a.load(t, function() {
                    n.manager.itemEnd(t)
                }, void 0, function() {
                    n.manager.itemEnd(t),
                    n.manager.itemError(t)
                })
            }
            var n = this
              , r = {};
            if (void 0 !== t && 0 < t.length) {
                var a = new tn(e = new Zi(e));
                a.setCrossOrigin(this.crossOrigin),
                e = 0;
                for (var o = t.length; e < o; e++) {
                    var s = t[e]
                      , c = s.url;
                    if (Array.isArray(c)) {
                        r[s.uuid] = [];
                        for (var h = 0, l = c.length; h < l; h++) {
                            var u = c[h];
                            u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(u) ? u : n.texturePath + u,
                            r[s.uuid].push(i(u))
                        }
                    } else
                        u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(s.url) ? s.url : n.texturePath + s.url,
                        r[s.uuid] = i(u)
                }
            }
            return r
        },
        parseTextures: function(t, e) {
            function i(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t),
                e[t])
            }
            var n = {};
            if (void 0 !== t)
                for (var r = 0, a = t.length; r < a; r++) {
                    var o = t[r];
                    void 0 === o.image && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid),
                    void 0 === e[o.image] && console.warn("THREE.ObjectLoader: Undefined image", o.image);
                    var s = Array.isArray(e[o.image]) ? new G(e[o.image]) : new p(e[o.image]);
                    s.needsUpdate = !0,
                    s.uuid = o.uuid,
                    void 0 !== o.name && (s.name = o.name),
                    void 0 !== o.mapping && (s.mapping = i(o.mapping, qs)),
                    void 0 !== o.offset && s.offset.fromArray(o.offset),
                    void 0 !== o.repeat && s.repeat.fromArray(o.repeat),
                    void 0 !== o.center && s.center.fromArray(o.center),
                    void 0 !== o.rotation && (s.rotation = o.rotation),
                    void 0 !== o.wrap && (s.wrapS = i(o.wrap[0], Ys),
                    s.wrapT = i(o.wrap[1], Ys)),
                    void 0 !== o.format && (s.format = o.format),
                    void 0 !== o.minFilter && (s.minFilter = i(o.minFilter, Js)),
                    void 0 !== o.magFilter && (s.magFilter = i(o.magFilter, Js)),
                    void 0 !== o.anisotropy && (s.anisotropy = o.anisotropy),
                    void 0 !== o.flipY && (s.flipY = o.flipY),
                    n[o.uuid] = s
                }
            return n
        },
        parseObject: function(t, e, a) {
            function i(t) {
                return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t),
                e[t]
            }
            function n(t) {
                if (void 0 !== t) {
                    if (Array.isArray(t)) {
                        for (var e = [], i = 0, n = t.length; i < n; i++) {
                            var r = t[i];
                            void 0 === a[r] && console.warn("THREE.ObjectLoader: Undefined material", r),
                            e.push(a[r])
                        }
                        return e
                    }
                    return void 0 === a[t] && console.warn("THREE.ObjectLoader: Undefined material", t),
                    a[t]
                }
            }
            switch (t.type) {
            case "Scene":
                var r = new ye;
                void 0 !== t.background && Number.isInteger(t.background) && (r.background = new M(t.background)),
                void 0 !== t.fog && ("Fog" === t.fog.type ? r.fog = new ve(t.fog.color,t.fog.near,t.fog.far) : "FogExp2" === t.fog.type && (r.fog = new ge(t.fog.color,t.fog.density)));
                break;
            case "PerspectiveCamera":
                r = new ue(t.fov,t.aspect,t.near,t.far),
                void 0 !== t.focus && (r.focus = t.focus),
                void 0 !== t.zoom && (r.zoom = t.zoom),
                void 0 !== t.filmGauge && (r.filmGauge = t.filmGauge),
                void 0 !== t.filmOffset && (r.filmOffset = t.filmOffset),
                void 0 !== t.view && (r.view = Object.assign({}, t.view));
                break;
            case "OrthographicCamera":
                r = new Ln(t.left,t.right,t.top,t.bottom,t.near,t.far),
                void 0 !== t.zoom && (r.zoom = t.zoom),
                void 0 !== t.view && (r.view = Object.assign({}, t.view));
                break;
            case "AmbientLight":
                r = new Cn(t.color,t.intensity);
                break;
            case "DirectionalLight":
                r = new Pn(t.color,t.intensity);
                break;
            case "PointLight":
                r = new An(t.color,t.intensity,t.distance,t.decay);
                break;
            case "RectAreaLight":
                r = new In(t.color,t.intensity,t.width,t.height);
                break;
            case "SpotLight":
                r = new Sn(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);
                break;
            case "HemisphereLight":
                r = new Mn(t.color,t.groundColor,t.intensity);
                break;
            case "SkinnedMesh":
                console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
            case "Mesh":
                r = i(t.geometry);
                var o = n(t.material);
                r = r.bones && 0 < r.bones.length ? new Se(r,o) : new D(r,o);
                break;
            case "LOD":
                r = new Me;
                break;
            case "Line":
                r = new Le(i(t.geometry),n(t.material),t.mode);
                break;
            case "LineLoop":
                r = new Pe(i(t.geometry),n(t.material));
                break;
            case "LineSegments":
                r = new Re(i(t.geometry),n(t.material));
                break;
            case "PointCloud":
            case "Points":
                r = new Ie(i(t.geometry),n(t.material));
                break;
            case "Sprite":
                r = new we(n(t.material));
                break;
            case "Group":
                r = new he;
                break;
            default:
                r = new l
            }
            if (r.uuid = t.uuid,
            void 0 !== t.name && (r.name = t.name),
            void 0 !== t.matrix ? (r.matrix.fromArray(t.matrix),
            void 0 !== t.matrixAutoUpdate && (r.matrixAutoUpdate = t.matrixAutoUpdate),
            r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (void 0 !== t.position && r.position.fromArray(t.position),
            void 0 !== t.rotation && r.rotation.fromArray(t.rotation),
            void 0 !== t.quaternion && r.quaternion.fromArray(t.quaternion),
            void 0 !== t.scale && r.scale.fromArray(t.scale)),
            void 0 !== t.castShadow && (r.castShadow = t.castShadow),
            void 0 !== t.receiveShadow && (r.receiveShadow = t.receiveShadow),
            t.shadow && (void 0 !== t.shadow.bias && (r.shadow.bias = t.shadow.bias),
            void 0 !== t.shadow.radius && (r.shadow.radius = t.shadow.radius),
            void 0 !== t.shadow.mapSize && r.shadow.mapSize.fromArray(t.shadow.mapSize),
            void 0 !== t.shadow.camera && (r.shadow.camera = this.parseObject(t.shadow.camera))),
            void 0 !== t.visible && (r.visible = t.visible),
            void 0 !== t.frustumCulled && (r.frustumCulled = t.frustumCulled),
            void 0 !== t.renderOrder && (r.renderOrder = t.renderOrder),
            void 0 !== t.userData && (r.userData = t.userData),
            void 0 !== t.layers && (r.layers.mask = t.layers),
            void 0 !== t.children) {
                o = t.children;
                for (var s = 0; s < o.length; s++)
                    r.add(this.parseObject(o[s], e, a))
            }
            if ("LOD" === t.type)
                for (t = t.levels,
                o = 0; o < t.length; o++) {
                    s = t[o];
                    var c = r.getObjectByProperty("uuid", s.object);
                    void 0 !== c && r.addLevel(c, s.distance)
                }
            return r
        }
    });
    var qs = {
        UVMapping: 300,
        CubeReflectionMapping: 301,
        CubeRefractionMapping: 302,
        EquirectangularReflectionMapping: 303,
        EquirectangularRefractionMapping: 304,
        SphericalReflectionMapping: 305,
        CubeUVReflectionMapping: 306,
        CubeUVRefractionMapping: 307
    }
      , Ys = {
        RepeatWrapping: 1e3,
        ClampToEdgeWrapping: 1001,
        MirroredRepeatWrapping: 1002
    }
      , Js = {
        NearestFilter: 1003,
        NearestMipMapNearestFilter: 1004,
        NearestMipMapLinearFilter: 1005,
        LinearFilter: 1006,
        LinearMipMapNearestFilter: 1007,
        LinearMipMapLinearFilter: 1008
    };
    Kn.prototype = {
        constructor: Kn,
        setOptions: function(t) {
            return this.options = t,
            this
        },
        load: function(e, i, t, n) {
            void 0 === e && (e = ""),
            void 0 !== this.path && (e = this.path + e),
            e = this.manager.resolveURL(e);
            var r = this
              , a = Is.get(e);
            if (void 0 !== a)
                return r.manager.itemStart(e),
                setTimeout(function() {
                    i && i(a),
                    r.manager.itemEnd(e)
                }, 0),
                a;
            fetch(e).then(function(t) {
                return t.blob()
            }).then(function(t) {
                return createImageBitmap(t, r.options)
            }).then(function(t) {
                Is.add(e, t),
                i && i(t),
                r.manager.itemEnd(e)
            }).catch(function(t) {
                n && n(t),
                r.manager.itemEnd(e),
                r.manager.itemError(e)
            })
        },
        setCrossOrigin: function() {
            return this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    },
    Object.assign($n.prototype, {
        moveTo: function(t, e) {
            this.currentPath = new bn,
            this.subPaths.push(this.currentPath),
            this.currentPath.moveTo(t, e)
        },
        lineTo: function(t, e) {
            this.currentPath.lineTo(t, e)
        },
        quadraticCurveTo: function(t, e, i, n) {
            this.currentPath.quadraticCurveTo(t, e, i, n)
        },
        bezierCurveTo: function(t, e, i, n, r, a) {
            this.currentPath.bezierCurveTo(t, e, i, n, r, a)
        },
        splineThru: function(t) {
            this.currentPath.splineThru(t)
        },
        toShapes: function(t, e) {
            function i(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++) {
                    var r = t[i]
                      , a = new _n;
                    a.curves = r.curves,
                    e.push(a)
                }
                return e
            }
            function n(t, e) {
                for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
                    var o = e[r]
                      , s = e[a]
                      , c = s.x - o.x
                      , h = s.y - o.y;
                    if (Math.abs(h) > Number.EPSILON) {
                        if (h < 0 && (o = e[a],
                        c = -c,
                        s = e[r],
                        h = -h),
                        !(t.y < o.y || t.y > s.y))
                            if (t.y === o.y) {
                                if (t.x === o.x)
                                    return !0
                            } else {
                                if (0 === (r = h * (t.x - o.x) - c * (t.y - o.y)))
                                    return !0;
                                r < 0 || (n = !n)
                            }
                    } else if (t.y === o.y && (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x))
                        return !0
                }
                return n
            }
            var r = Ls.isClockWise
              , a = this.subPaths;
            if (0 === a.length)
                return [];
            if (!0 === e)
                return i(a);
            if (e = [],
            1 === a.length) {
                var o = a[0]
                  , s = new _n;
                return s.curves = o.curves,
                e.push(s),
                e
            }
            var c = !r(a[0].getPoints());
            c = t ? !c : c,
            s = [];
            var h = []
              , l = []
              , u = 0;
            h[u] = void 0,
            l[u] = [];
            for (var p = 0, d = a.length; p < d; p++) {
                var f = (o = a[p]).getPoints()
                  , m = r(f);
                (m = t ? !m : m) ? (!c && h[u] && u++,
                h[u] = {
                    s: new _n,
                    p: f
                },
                h[u].s.curves = o.curves,
                c && u++,
                l[u] = []) : l[u].push({
                    h: o,
                    p: f[0]
                })
            }
            if (!h[0])
                return i(a);
            if (1 < h.length) {
                for (p = !1,
                t = [],
                r = 0,
                a = h.length; r < a; r++)
                    s[r] = [];
                for (r = 0,
                a = h.length; r < a; r++)
                    for (o = l[r],
                    m = 0; m < o.length; m++) {
                        for (c = o[m],
                        u = !0,
                        f = 0; f < h.length; f++)
                            n(c.p, h[f].p) && (r !== f && t.push({
                                froms: r,
                                tos: f,
                                hole: m
                            }),
                            u ? (u = !1,
                            s[f].push(c)) : p = !0);
                        u && s[r].push(c)
                    }
                0 < t.length && (p || (l = s))
            }
            for (p = 0,
            r = h.length; p < r; p++)
                for (s = h[p].s,
                e.push(s),
                a = 0,
                o = (t = l[p]).length; a < o; a++)
                    s.holes.push(t[a].h);
            return e
        }
    }),
    Object.assign(tr.prototype, {
        isFont: !0,
        generateShapes: function(t, e) {
            void 0 === e && (e = 100);
            var i = []
              , n = e;
            e = this.data;
            var r = Array.from ? Array.from(t) : String(t).split("");
            n /= e.resolution;
            var a = (e.boundingBox.yMax - e.boundingBox.yMin + e.underlineThickness) * n;
            t = [];
            for (var o = 0, s = 0, c = 0; c < r.length; c++) {
                var h = r[c];
                if ("\n" === h)
                    o = 0,
                    s -= a;
                else {
                    var l = n
                      , u = o
                      , p = s;
                    if (h = e.glyphs[h] || e.glyphs["?"]) {
                        var d = new $n;
                        if (h.o)
                            for (var f = h._cachedOutline || (h._cachedOutline = h.o.split(" ")), m = 0, g = f.length; m < g; )
                                switch (f[m++]) {
                                case "m":
                                    var v = f[m++] * l + u
                                      , y = f[m++] * l + p;
                                    d.moveTo(v, y);
                                    break;
                                case "l":
                                    v = f[m++] * l + u,
                                    y = f[m++] * l + p,
                                    d.lineTo(v, y);
                                    break;
                                case "q":
                                    var x = f[m++] * l + u
                                      , b = f[m++] * l + p
                                      , _ = f[m++] * l + u
                                      , w = f[m++] * l + p;
                                    d.quadraticCurveTo(_, w, x, b);
                                    break;
                                case "b":
                                    x = f[m++] * l + u,
                                    b = f[m++] * l + p,
                                    _ = f[m++] * l + u,
                                    w = f[m++] * l + p,
                                    v = f[m++] * l + u,
                                    y = f[m++] * l + p,
                                    d.bezierCurveTo(_, w, v, y, x, b)
                                }
                        l = {
                            offsetX: h.ha * l,
                            path: d
                        }
                    } else
                        l = void 0;
                    o += l.offsetX,
                    t.push(l.path)
                }
            }
            for (e = 0,
            r = t.length; e < r; e++)
                Array.prototype.push.apply(i, t[e].toShapes());
            return i
        }
    }),
    Object.assign(er.prototype, {
        load: function(t, n, e, i) {
            var r = this
              , a = new Qi(this.manager);
            a.setPath(this.path),
            a.load(t, function(e) {
                try {
                    var i = JSON.parse(e)
                } catch (t) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                    i = JSON.parse(e.substring(65, e.length - 2))
                }
                e = r.parse(i),
                n && n(e)
            }, e, i)
        },
        parse: function(t) {
            return new tr(t)
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    });
    var Zs, Qs, Ks, $s, tc, ec, ic, nc, rc, ac, oc, sc, cc, hc, lc, uc, pc, dc, fc, mc, gc, vc, yc, xc, bc, _c, wc, Mc, Ec, Tc, Sc, Ac, Lc, Rc, Pc, Cc, Ic, Oc, Nc, Dc, Uc, Bc, Fc, zc, Gc, Hc, Vc, kc = {
        getContext: function() {
            return void 0 === Zs && (Zs = new (window.AudioContext || window.webkitAudioContext)),
            Zs
        },
        setContext: function(t) {
            Zs = t
        }
    };
    Object.assign(ir.prototype, {
        load: function(t, e, i, n) {
            var r = new Qi(this.manager);
            r.setResponseType("arraybuffer"),
            r.load(t, function(t) {
                t = t.slice(0),
                kc.getContext().decodeAudioData(t, function(t) {
                    e(t)
                })
            }, i, n)
        }
    }),
    Object.assign(nr.prototype, {
        update: (ac = new wt,
        oc = new wt,
        function(t) {
            if (Qs !== this || Ks !== t.focus || $s !== t.fov || tc !== t.aspect * this.aspect || ec !== t.near || ic !== t.far || nc !== t.zoom || rc !== this.eyeSep) {
                Qs = this,
                Ks = t.focus,
                $s = t.fov,
                tc = t.aspect * this.aspect,
                ec = t.near,
                ic = t.far,
                nc = t.zoom;
                var e = t.projectionMatrix.clone()
                  , i = (rc = this.eyeSep / 2) * ec / Ks
                  , n = ec * Math.tan(fa.DEG2RAD * $s * .5) / nc;
                oc.elements[12] = -rc,
                ac.elements[12] = rc;
                var r = -n * tc + i
                  , a = n * tc + i;
                e.elements[0] = 2 * ec / (a - r),
                e.elements[8] = (a + r) / (a - r),
                this.cameraL.projectionMatrix.copy(e),
                r = -n * tc - i,
                a = n * tc - i,
                e.elements[0] = 2 * ec / (a - r),
                e.elements[8] = (a + r) / (a - r),
                this.cameraR.projectionMatrix.copy(e)
            }
            this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(oc),
            this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(ac)
        }
        )
    }),
    (rr.prototype = Object.create(l.prototype)).constructor = rr,
    ar.prototype = Object.assign(Object.create(l.prototype), {
        constructor: ar,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            return null !== this.filter && (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination),
            this.gain.connect(this.context.destination),
            this.filter = null),
            this
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(t) {
            return null !== this.filter ? (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
            this.filter = t,
            this.gain.connect(this.filter),
            this.filter.connect(this.context.destination),
            this
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01),
            this
        },
        updateMatrixWorld: (sc = new Mt,
        cc = new w,
        hc = new Mt,
        lc = new Mt,
        function(t) {
            l.prototype.updateMatrixWorld.call(this, t),
            t = this.context.listener;
            var e = this.up;
            this.matrixWorld.decompose(sc, cc, hc),
            lc.set(0, 0, -1).applyQuaternion(cc),
            t.positionX ? (t.positionX.setValueAtTime(sc.x, this.context.currentTime),
            t.positionY.setValueAtTime(sc.y, this.context.currentTime),
            t.positionZ.setValueAtTime(sc.z, this.context.currentTime),
            t.forwardX.setValueAtTime(lc.x, this.context.currentTime),
            t.forwardY.setValueAtTime(lc.y, this.context.currentTime),
            t.forwardZ.setValueAtTime(lc.z, this.context.currentTime),
            t.upX.setValueAtTime(e.x, this.context.currentTime),
            t.upY.setValueAtTime(e.y, this.context.currentTime),
            t.upZ.setValueAtTime(e.z, this.context.currentTime)) : (t.setPosition(sc.x, sc.y, sc.z),
            t.setOrientation(lc.x, lc.y, lc.z, e.x, e.y, e.z))
        }
        )
    }),
    or.prototype = Object.assign(Object.create(l.prototype), {
        constructor: or,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "audioNode",
            this.source = t,
            this.connect(),
            this
        },
        setMediaElementSource: function(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "mediaNode",
            this.source = this.context.createMediaElementSource(t),
            this.connect(),
            this
        },
        setBuffer: function(t) {
            return this.buffer = t,
            this.sourceType = "buffer",
            this.autoplay && this.play(),
            this
        },
        play: function() {
            if (!0 === this.isPlaying)
                console.warn("THREE.Audio: Audio is already playing.");
            else {
                if (!1 !== this.hasPlaybackControl) {
                    var t = this.context.createBufferSource();
                    return t.buffer = this.buffer,
                    t.loop = this.loop,
                    t.onended = this.onEnded.bind(this),
                    t.playbackRate.setValueAtTime(this.playbackRate, this.startTime),
                    this.startTime = this.context.currentTime,
                    t.start(this.startTime, this.offset),
                    this.isPlaying = !0,
                    this.source = t,
                    this.connect()
                }
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
        },
        pause: function() {
            if (!1 !== this.hasPlaybackControl)
                return !0 === this.isPlaying && (this.source.stop(),
                this.source.onended = null,
                this.offset += (this.context.currentTime - this.startTime) * this.playbackRate,
                this.isPlaying = !1),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        stop: function() {
            if (!1 !== this.hasPlaybackControl)
                return this.source.stop(),
                this.source.onended = null,
                this.offset = 0,
                this.isPlaying = !1,
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        connect: function() {
            if (0 < this.filters.length) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else
                this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (0 < this.filters.length) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else
                this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(t) {
            return t || (t = []),
            !0 === this.isPlaying ? (this.disconnect(),
            this.filters = t,
            this.connect()) : this.filters = t,
            this
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function(t) {
            if (!1 !== this.hasPlaybackControl)
                return this.playbackRate = t,
                !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1) : this.loop
        },
        setLoop: function(t) {
            if (!1 !== this.hasPlaybackControl)
                return this.loop = t,
                !0 === this.isPlaying && (this.source.loop = this.loop),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01),
            this
        }
    }),
    sr.prototype = Object.assign(Object.create(or.prototype), {
        constructor: sr,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(t) {
            return this.panner.refDistance = t,
            this
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(t) {
            return this.panner.rolloffFactor = t,
            this
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(t) {
            return this.panner.distanceModel = t,
            this
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(t) {
            return this.panner.maxDistance = t,
            this
        },
        setDirectionalCone: function(t, e, i) {
            return this.panner.coneInnerAngle = t,
            this.panner.coneOuterAngle = e,
            this.panner.coneOuterGain = i,
            this
        },
        updateMatrixWorld: (uc = new Mt,
        pc = new w,
        dc = new Mt,
        fc = new Mt,
        function(t) {
            l.prototype.updateMatrixWorld.call(this, t),
            t = this.panner,
            this.matrixWorld.decompose(uc, pc, dc),
            fc.set(0, 0, 1).applyQuaternion(pc),
            t.setPosition(uc.x, uc.y, uc.z),
            t.setOrientation(fc.x, fc.y, fc.z)
        }
        )
    }),
    Object.assign(cr.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data),
            this.data
        },
        getAverageFrequency: function() {
            for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++)
                t += e[i];
            return t / e.length
        }
    }),
    Object.assign(hr.prototype, {
        accumulate: function(t, e) {
            var i = this.buffer
              , n = this.valueSize;
            t = t * n + n;
            var r = this.cumulativeWeight;
            if (0 === r) {
                for (r = 0; r !== n; ++r)
                    i[t + r] = i[r];
                r = e
            } else
                r += e,
                this._mixBufferRegion(i, t, 0, e / r, n);
            this.cumulativeWeight = r
        },
        apply: function(t) {
            var e = this.valueSize
              , i = this.buffer;
            t = t * e + e;
            var n = this.cumulativeWeight
              , r = this.binding;
            this.cumulativeWeight = 0,
            n < 1 && this._mixBufferRegion(i, t, 3 * e, 1 - n, e);
            for (var a = (n = e) + e; n !== a; ++n)
                if (i[n] !== i[n + e]) {
                    r.setValue(i, t);
                    break
                }
        },
        saveOriginalState: function() {
            var t = this.buffer
              , e = this.valueSize
              , i = 3 * e;
            this.binding.getValue(t, i);
            for (var n = e; n !== i; ++n)
                t[n] = t[i + n % e];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            this.binding.setValue(this.buffer, 3 * this.valueSize)
        },
        _select: function(t, e, i, n, r) {
            if (.5 <= n)
                for (n = 0; n !== r; ++n)
                    t[e + n] = t[i + n]
        },
        _slerp: function(t, e, i, n) {
            w.slerpFlat(t, e, t, e, t, i, n)
        },
        _lerp: function(t, e, i, n, r) {
            for (var a = 1 - n, o = 0; o !== r; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[i + o] * n
            }
        }
    }),
    Object.assign(lr.prototype, {
        getValue: function(t, e) {
            this.bind();
            var i = this._bindings[this._targetGroup.nCachedObjects_];
            void 0 !== i && i.getValue(t, e)
        },
        setValue: function(t, e) {
            for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n)
                i[n].setValue(t, e)
        },
        bind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)
                t[e].bind()
        },
        unbind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)
                t[e].unbind()
        }
    }),
    Object.assign(ur, {
        Composite: lr,
        create: function(t, e, i) {
            return t && t.isAnimationObjectGroup ? new ur.Composite(t,e,i) : new ur(t,e,i)
        },
        sanitizeNodeName: (mc = /[\[\]\.:\/]/g,
        function(t) {
            return t.replace(/\s/g, "_").replace(mc, "")
        }
        ),
        parseTrackName: function() {
            var t = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]"
              , e = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]");
            t = /(WCOD+)?/.source.replace("WCOD", t);
            var i = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]")
              , n = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]")
              , r = new RegExp("^" + e + t + i + n + "$")
              , a = ["material", "materials", "bones"];
            return function(t) {
                var e = r.exec(t);
                if (!e)
                    throw Error("PropertyBinding: Cannot parse trackName: " + t);
                var i = (e = {
                    nodeName: e[2],
                    objectName: e[3],
                    objectIndex: e[4],
                    propertyName: e[5],
                    propertyIndex: e[6]
                }).nodeName && e.nodeName.lastIndexOf(".");
                if (void 0 !== i && -1 !== i) {
                    var n = e.nodeName.substring(i + 1);
                    -1 !== a.indexOf(n) && (e.nodeName = e.nodeName.substring(0, i),
                    e.objectName = n)
                }
                if (null === e.propertyName || 0 === e.propertyName.length)
                    throw Error("PropertyBinding: can not parse propertyName from trackName: " + t);
                return e
            }
        }(),
        findNode: function(t, n) {
            if (!n || "" === n || "root" === n || "." === n || -1 === n || n === t.name || n === t.uuid)
                return t;
            if (t.skeleton) {
                var e = t.skeleton.getBoneByName(n);
                if (void 0 !== e)
                    return e
            }
            if (t.children) {
                var r = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if (i.name === n || i.uuid === n || (i = r(i.children)))
                            return i
                    }
                    return null
                };
                if (t = r(t.children))
                    return t
            }
            return null
        }
    }),
    Object.assign(ur.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(t, e) {
            t[e] = this.node[this.propertyName]
        }
        , function(t, e) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                t[e++] = i[n]
        }
        , function(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }
        , function(t, e) {
            this.resolvedProperty.toArray(t, e)
        }
        ],
        SetterByBindingTypeAndVersioning: [[function(t, e) {
            this.targetObject[this.propertyName] = t[e]
        }
        , function(t, e) {
            this.targetObject[this.propertyName] = t[e],
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.targetObject[this.propertyName] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                i[n] = t[e++]
        }
        , function(t, e) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                i[n] = t[e++];
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                i[n] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e]
        }
        , function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            this.resolvedProperty.fromArray(t, e)
        }
        , function(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ]],
        getValue: function(t, e) {
            this.bind(),
            this.getValue(t, e)
        },
        setValue: function(t, e) {
            this.bind(),
            this.setValue(t, e)
        },
        bind: function() {
            var t = this.node
              , e = this.parsedPath
              , i = e.objectName
              , n = e.propertyName
              , r = e.propertyIndex;
            if (t || (this.node = t = ur.findNode(this.rootNode, e.nodeName) || this.rootNode),
            this.getValue = this._getValue_unavailable,
            this.setValue = this._setValue_unavailable,
            t) {
                if (i) {
                    var a = e.objectIndex;
                    switch (i) {
                    case "materials":
                        if (!t.material)
                            return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t.material.materials)
                            return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton)
                            return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        for (t = t.skeleton.bones,
                        i = 0; i < t.length; i++)
                            if (t[i].name === a) {
                                a = i;
                                break
                            }
                        break;
                    default:
                        if (void 0 === t[i])
                            return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t = t[i]
                    }
                    if (void 0 !== a) {
                        if (void 0 === t[a])
                            return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                        t = t[a]
                    }
                }
                if (void 0 === (a = t[n]))
                    console.error("THREE.PropertyBinding: Trying to update property for track: " + e.nodeName + "." + n + " but it wasn't found.", t);
                else {
                    if (e = this.Versioning.None,
                    void 0 !== (this.targetObject = t).needsUpdate ? e = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (e = this.Versioning.MatrixWorldNeedsUpdate),
                    i = this.BindingType.Direct,
                    void 0 !== r) {
                        if ("morphTargetInfluences" === n) {
                            if (!t.geometry)
                                return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                            if (t.geometry.isBufferGeometry) {
                                if (!t.geometry.morphAttributes)
                                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                for (i = 0; i < this.node.geometry.morphAttributes.position.length; i++)
                                    if (t.geometry.morphAttributes.position[i].name === r) {
                                        r = i;
                                        break
                                    }
                            } else {
                                if (!t.geometry.morphTargets)
                                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                for (i = 0; i < this.node.geometry.morphTargets.length; i++)
                                    if (t.geometry.morphTargets[i].name === r) {
                                        r = i;
                                        break
                                    }
                            }
                        }
                        i = this.BindingType.ArrayElement,
                        this.resolvedProperty = a,
                        this.propertyIndex = r
                    } else
                        void 0 !== a.fromArray && void 0 !== a.toArray ? (i = this.BindingType.HasFromToArray,
                        this.resolvedProperty = a) : Array.isArray(a) ? (i = this.BindingType.EntireArray,
                        this.resolvedProperty = a) : this.propertyName = n;
                    this.getValue = this.GetterByBindingType[i],
                    this.setValue = this.SetterByBindingTypeAndVersioning[i][e]
                }
            } else
                console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function() {
            this.node = null,
            this.getValue = this._getValue_unbound,
            this.setValue = this._setValue_unbound
        }
    }),
    Object.assign(ur.prototype, {
        _getValue_unbound: ur.prototype.getValue,
        _setValue_unbound: ur.prototype.setValue
    }),
    Object.assign(pr.prototype, {
        isAnimationObjectGroup: !0,
        add: function() {
            for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, h = 0, l = arguments.length; h !== l; ++h) {
                var u = arguments[h]
                  , p = u.uuid
                  , d = n[p];
                if (void 0 === d) {
                    d = e++,
                    n[p] = d,
                    t.push(u),
                    p = 0;
                    for (var f = s; p !== f; ++p)
                        o[p].push(new ur(u,r[p],a[p]))
                } else if (d < i) {
                    c = t[d];
                    var m = --i;
                    for (t[n[(f = t[m]).uuid] = d] = f,
                    t[n[p] = m] = u,
                    p = 0,
                    f = s; p !== f; ++p) {
                        var g = o[p]
                          , v = g[d];
                        g[d] = g[m],
                        void 0 === v && (v = new ur(u,r[p],a[p])),
                        g[m] = v
                    }
                } else
                    t[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = i
        },
        remove: function() {
            for (var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) {
                var s = arguments[a]
                  , c = s.uuid
                  , h = i[c];
                if (void 0 !== h && e <= h) {
                    var l = e++
                      , u = t[l];
                    for (t[i[u.uuid] = h] = u,
                    t[i[c] = l] = s,
                    s = 0,
                    c = r; s !== c; ++s) {
                        var p = (u = n[s])[h];
                        u[h] = u[l],
                        u[l] = p
                    }
                }
            }
            this.nCachedObjects_ = e
        },
        uncache: function() {
            for (var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o].uuid
                  , h = n[c];
                if (void 0 !== h)
                    if (delete n[c],
                    h < i) {
                        var l = t[c = --i]
                          , u = --e
                          , p = t[u];
                        for (t[n[l.uuid] = h] = l,
                        t[n[p.uuid] = c] = p,
                        t.pop(),
                        l = 0,
                        p = a; l !== p; ++l) {
                            var d = r[l]
                              , f = d[u];
                            d[h] = d[c],
                            d[c] = f,
                            d.pop()
                        }
                    } else
                        for (t[n[(p = t[u = --e]).uuid] = h] = p,
                        t.pop(),
                        l = 0,
                        p = a; l !== p; ++l)
                            (d = r[l])[h] = d[u],
                            d.pop()
            }
            this.nCachedObjects_ = i
        },
        subscribe_: function(t, e) {
            var i = this._bindingsIndicesByPath
              , n = i[t]
              , r = this._bindings;
            if (void 0 !== n)
                return r[n];
            var a = this._paths
              , o = this._parsedPaths
              , s = this._objects
              , c = this.nCachedObjects_
              , h = Array(s.length);
            for (n = r.length,
            i[t] = n,
            a.push(t),
            o.push(e),
            r.push(h),
            i = c,
            n = s.length; i !== n; ++i)
                h[i] = new ur(s[i],t,e);
            return h
        },
        unsubscribe_: function(t) {
            var e = this._bindingsIndicesByPath
              , i = e[t];
            if (void 0 !== i) {
                var n = this._paths
                  , r = this._parsedPaths
                  , a = this._bindings
                  , o = a.length - 1
                  , s = a[o];
                a[e[t[o]] = i] = s,
                a.pop(),
                r[i] = r[o],
                r.pop(),
                n[i] = n[o],
                n.pop()
            }
        }
    }),
    Object.assign(dr.prototype, {
        play: function() {
            return this._mixer._activateAction(this),
            this
        },
        stop: function() {
            return this._mixer._deactivateAction(this),
            this.reset()
        },
        reset: function() {
            return this.paused = !1,
            this.enabled = !0,
            this.time = 0,
            this._loopCount = -1,
            this._startTime = null,
            this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(t) {
            return this._startTime = t,
            this
        },
        setLoop: function(t, e) {
            return this.loop = t,
            this.repetitions = e,
            this
        },
        setEffectiveWeight: function(t) {
            return this.weight = t,
            this._effectiveWeight = this.enabled ? t : 0,
            this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(t) {
            return this._scheduleFading(t, 0, 1)
        },
        fadeOut: function(t) {
            return this._scheduleFading(t, 1, 0)
        },
        crossFadeFrom: function(t, e, i) {
            if (t.fadeOut(e),
            this.fadeIn(e),
            i) {
                i = this._clip.duration;
                var n = t._clip.duration
                  , r = i / n;
                t.warp(1, n / i, e),
                this.warp(r, 1, e)
            }
            return this
        },
        crossFadeTo: function(t, e, i) {
            return t.crossFadeFrom(this, e, i)
        },
        stopFading: function() {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        },
        setEffectiveTimeScale: function(t) {
            return this.timeScale = t,
            this._effectiveTimeScale = this.paused ? 0 : t,
            this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(t) {
            return this.timeScale = this._clip.duration / t,
            this.stopWarping()
        },
        syncWith: function(t) {
            return this.time = t.time,
            this.timeScale = t.timeScale,
            this.stopWarping()
        },
        halt: function(t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        },
        warp: function(t, e, i) {
            var n = this._mixer
              , r = n.time
              , a = this._timeScaleInterpolant
              , o = this.timeScale;
            return null === a && (this._timeScaleInterpolant = a = n._lendControlInterpolant()),
            n = a.parameterPositions,
            a = a.sampleValues,
            n[0] = r,
            n[1] = r + i,
            a[0] = t / o,
            a[1] = e / o,
            this
        },
        stopWarping: function() {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(t, e, i, n) {
            if (this.enabled) {
                var r = this._startTime;
                if (null !== r) {
                    if ((e = (t - r) * i) < 0 || 0 === i)
                        return;
                    this._startTime = null,
                    e *= i
                }
                if (e *= this._updateTimeScale(t),
                i = this._updateTime(e),
                0 < (t = this._updateWeight(t))) {
                    e = this._interpolants,
                    r = this._propertyBindings;
                    for (var a = 0, o = e.length; a !== o; ++a)
                        e[a].evaluate(i),
                        r[a].accumulate(n, t)
                }
            } else
                this._updateWeight(t)
        },
        _updateWeight: function(t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var i = this._weightInterpolant;
                if (null !== i) {
                    var n = i.evaluate(t)[0];
                    e *= n,
                    t > i.parameterPositions[1] && (this.stopFading(),
                    0 === n && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e
        },
        _updateTimeScale: function(t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var i = this._timeScaleInterpolant;
                if (null !== i)
                    e *= i.evaluate(t)[0],
                    t > i.parameterPositions[1] && (this.stopWarping(),
                    0 === e ? this.paused = !0 : this.timeScale = e)
            }
            return this._effectiveTimeScale = e
        },
        _updateTime: function(t) {
            var e = this.time + t
              , i = this._clip.duration
              , n = this.loop
              , r = this._loopCount
              , a = 2202 === n;
            if (0 === t)
                return -1 === r ? e : a && 1 == (1 & r) ? i - e : e;
            if (2200 === n)
                t: {
                    if (-1 === r && (this._loopCount = 0,
                    this._setEndings(!0, !0, !1)),
                    i <= e)
                        e = i;
                    else {
                        if (!(e < 0))
                            break t;
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    })
                }
            else {
                if (-1 === r && (0 <= t ? (r = 0,
                this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)),
                i <= e || e < 0) {
                    e -= i * (n = Math.floor(e / i)),
                    r += Math.abs(n);
                    var o = this.repetitions - r;
                    o <= 0 ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    e = 0 < t ? i : 0,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: 0 < t ? 1 : -1
                    })) : (1 === o ? (t = t < 0,
                    this._setEndings(t, !t, a)) : this._setEndings(!1, !1, a),
                    this._loopCount = r,
                    this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: n
                    }))
                }
                if (a && 1 == (1 & r))
                    return i - (this.time = e)
            }
            return this.time = e
        },
        _setEndings: function(t, e, i) {
            var n = this._interpolantSettings;
            i ? (n.endingStart = 2401,
            n.endingEnd = 2401) : (n.endingStart = t ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402,
            n.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
        },
        _scheduleFading: function(t, e, i) {
            var n = this._mixer
              , r = n.time
              , a = this._weightInterpolant;
            return null === a && (this._weightInterpolant = a = n._lendControlInterpolant()),
            n = a.parameterPositions,
            a = a.sampleValues,
            n[0] = r,
            a[0] = e,
            n[1] = r + t,
            a[1] = i,
            this
        }
    }),
    fr.prototype = Object.assign(Object.create(e.prototype), {
        constructor: fr,
        _bindAction: function(t, e) {
            var i = t._localRoot || this._root
              , n = t._clip.tracks
              , r = n.length
              , a = t._propertyBindings;
            t = t._interpolants;
            var o = i.uuid
              , s = this._bindingsByRootAndName
              , c = s[o];
            for (void 0 === c && (c = {},
            s[o] = c),
            s = 0; s !== r; ++s) {
                var h = n[s]
                  , l = h.name
                  , u = c[l];
                if (void 0 === u) {
                    if (void 0 !== (u = a[s])) {
                        null === u._cacheIndex && (++u.referenceCount,
                        this._addInactiveBinding(u, o, l));
                        continue
                    }
                    ++(u = new hr(ur.create(i, l, e && e._propertyBindings[s].binding.parsedPath),h.ValueTypeName,h.getValueSize())).referenceCount,
                    this._addInactiveBinding(u, o, l)
                }
                a[s] = u,
                t[s].resultBuffer = u.buffer
            }
        },
        _activateAction: function(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid
                      , i = t._clip.uuid
                      , n = this._actionsByClip[i];
                    this._bindAction(t, n && n.knownActions[0]),
                    this._addInactiveAction(t, i, e)
                }
                for (i = 0,
                n = (e = t._propertyBindings).length; i !== n; ++i) {
                    var r = e[i];
                    0 == r.useCount++ && (this._lendBinding(r),
                    r.saveOriginalState())
                }
                this._lendAction(t)
            }
        },
        _deactivateAction: function(t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                    var r = e[i];
                    0 == --r.useCount && (r.restoreOriginalState(),
                    this._takeBackBinding(r))
                }
                this._takeBackAction(t)
            }
        },
        _initMemoryManager: function() {
            this._actions = [],
            this._nActiveActions = 0,
            this._actionsByClip = {},
            this._bindings = [],
            this._nActiveBindings = 0,
            this._bindingsByRootAndName = {},
            this._controlInterpolants = [],
            this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    },
                    get inUse() {
                        return t._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return t._bindings.length
                    },
                    get inUse() {
                        return t._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(t) {
            return null !== (t = t._cacheIndex) && t < this._nActiveActions
        },
        _addInactiveAction: function(t, e, i) {
            var n = this._actions
              , r = this._actionsByClip
              , a = r[e];
            void 0 === a ? (a = {
                knownActions: [t],
                actionByRoot: {}
            },
            t._byClipCacheIndex = 0,
            r[e] = a) : (e = a.knownActions,
            t._byClipCacheIndex = e.length,
            e.push(t)),
            t._cacheIndex = n.length,
            n.push(t),
            a.actionByRoot[i] = t
        },
        _removeInactiveAction: function(t) {
            var e = this._actions
              , i = e[e.length - 1]
              , n = t._cacheIndex;
            e[i._cacheIndex = n] = i,
            e.pop(),
            t._cacheIndex = null,
            e = t._clip.uuid;
            var r = (n = (i = this._actionsByClip)[e]).knownActions
              , a = r[r.length - 1]
              , o = t._byClipCacheIndex;
            r[a._byClipCacheIndex = o] = a,
            r.pop(),
            t._byClipCacheIndex = null,
            delete n.actionByRoot[(t._localRoot || this._root).uuid],
            0 === r.length && delete i[e],
            this._removeInactiveBindingsForAction(t)
        },
        _removeInactiveBindingsForAction: function(t) {
            for (var e = 0, i = (t = t._propertyBindings).length; e !== i; ++e) {
                var n = t[e];
                0 == --n.referenceCount && this._removeInactiveBinding(n)
            }
        },
        _lendAction: function(t) {
            var e = this._actions
              , i = t._cacheIndex
              , n = this._nActiveActions++
              , r = e[n];
            e[t._cacheIndex = n] = t,
            e[r._cacheIndex = i] = r
        },
        _takeBackAction: function(t) {
            var e = this._actions
              , i = t._cacheIndex
              , n = --this._nActiveActions
              , r = e[n];
            e[t._cacheIndex = n] = t,
            e[r._cacheIndex = i] = r
        },
        _addInactiveBinding: function(t, e, i) {
            var n = this._bindingsByRootAndName
              , r = n[e]
              , a = this._bindings;
            void 0 === r && (r = {},
            n[e] = r),
            (r[i] = t)._cacheIndex = a.length,
            a.push(t)
        },
        _removeInactiveBinding: function(t) {
            var e = this._bindings
              , i = t.binding
              , n = i.rootNode.uuid;
            i = i.path;
            var r = this._bindingsByRootAndName
              , a = r[n]
              , o = e[e.length - 1];
            t = t._cacheIndex,
            e[o._cacheIndex = t] = o,
            e.pop(),
            delete a[i];
            t: {
                for (var s in a)
                    break t;
                delete r[n]
            }
        },
        _lendBinding: function(t) {
            var e = this._bindings
              , i = t._cacheIndex
              , n = this._nActiveBindings++
              , r = e[n];
            e[t._cacheIndex = n] = t,
            e[r._cacheIndex = i] = r
        },
        _takeBackBinding: function(t) {
            var e = this._bindings
              , i = t._cacheIndex
              , n = --this._nActiveBindings
              , r = e[n];
            e[t._cacheIndex = n] = t,
            e[r._cacheIndex = i] = r
        },
        _lendControlInterpolant: function() {
            var t = this._controlInterpolants
              , e = this._nActiveControlInterpolants++
              , i = t[e];
            return void 0 === i && (t[(i = new Dn(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer)).__cacheIndex = e] = i),
            i
        },
        _takeBackControlInterpolant: function(t) {
            var e = this._controlInterpolants
              , i = t.__cacheIndex
              , n = --this._nActiveControlInterpolants
              , r = e[n];
            e[t.__cacheIndex = n] = t,
            e[r.__cacheIndex = i] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(t, e) {
            var i = e || this._root
              , n = i.uuid;
            t = null !== (i = "string" == typeof t ? Wn.findByName(i, t) : t) ? i.uuid : t;
            var r = this._actionsByClip[t]
              , a = null;
            if (void 0 !== r) {
                if (void 0 !== (a = r.actionByRoot[n]))
                    return a;
                a = r.knownActions[0],
                null === i && (i = a._clip)
            }
            return null === i ? null : (e = new dr(this,i,e),
            this._bindAction(e, a),
            this._addInactiveAction(e, t, n),
            e)
        },
        existingAction: function(t, e) {
            var i = e || this._root;
            return e = i.uuid,
            i = "string" == typeof t ? Wn.findByName(i, t) : t,
            void 0 !== (t = this._actionsByClip[i ? i.uuid : t]) && t.actionByRoot[e] || null
        },
        stopAllAction: function() {
            for (var t = this._actions, e = this._nActiveActions, i = this._bindings, n = this._nActiveBindings, r = this._nActiveBindings = this._nActiveActions = 0; r !== e; ++r)
                t[r].reset();
            for (r = 0; r !== n; ++r)
                i[r].useCount = 0;
            return this
        },
        update: function(t) {
            t *= this.timeScale;
            for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== i; ++o)
                e[o]._update(n, t, r, a);
            for (t = this._bindings,
            e = this._nActiveBindings,
            o = 0; o !== e; ++o)
                t[o].apply(a);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(t) {
            var e = this._actions;
            t = t.uuid;
            var i = this._actionsByClip
              , n = i[t];
            if (void 0 !== n) {
                for (var r = 0, a = (n = n.knownActions).length; r !== a; ++r) {
                    var o = n[r];
                    this._deactivateAction(o);
                    var s = o._cacheIndex
                      , c = e[e.length - 1];
                    o._cacheIndex = null,
                    o._byClipCacheIndex = null,
                    e[c._cacheIndex = s] = c,
                    e.pop(),
                    this._removeInactiveBindingsForAction(o)
                }
                delete i[t]
            }
        },
        uncacheRoot: function(t) {
            t = t.uuid;
            var e = this._actionsByClip;
            for (n in e) {
                var i = e[n].actionByRoot[t];
                void 0 !== i && (this._deactivateAction(i),
                this._removeInactiveAction(i))
            }
            var n = this._bindingsByRootAndName[t];
            if (void 0 !== n)
                for (var r in n)
                    (t = n[r]).restoreOriginalState(),
                    this._removeInactiveBinding(t)
        },
        uncacheAction: function(t, e) {
            null !== (t = this.existingAction(t, e)) && (this._deactivateAction(t),
            this._removeInactiveAction(t))
        }
    }),
    mr.prototype.clone = function() {
        return new mr(void 0 === this.value.clone ? this.value : this.value.clone())
    }
    ,
    gr.prototype = Object.assign(Object.create(P.prototype), {
        constructor: gr,
        isInstancedBufferGeometry: !0,
        copy: function(t) {
            return P.prototype.copy.call(this, t),
            this.maxInstancedCount = t.maxInstancedCount,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }),
    vr.prototype = Object.assign(Object.create(xe.prototype), {
        constructor: vr,
        isInstancedInterleavedBuffer: !0,
        copy: function(t) {
            return xe.prototype.copy.call(this, t),
            this.meshPerAttribute = t.meshPerAttribute,
            this
        }
    }),
    yr.prototype = Object.assign(Object.create(f.prototype), {
        constructor: yr,
        isInstancedBufferAttribute: !0,
        copy: function(t) {
            return f.prototype.copy.call(this, t),
            this.meshPerAttribute = t.meshPerAttribute,
            this
        }
    }),
    Object.assign(xr.prototype, {
        linePrecision: 1,
        set: function(t, e) {
            this.ray.set(t, e)
        },
        setFromCamera: function(t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
            this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e),
            this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(t, e, i) {
            return _r(t, this, i = i || [], e),
            i.sort(br),
            i
        },
        intersectObjects: function(t, e, i) {
            if (i = i || [],
            !1 === Array.isArray(t))
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                i;
            for (var n = 0, r = t.length; n < r; n++)
                _r(t[n], this, i, e);
            return i.sort(br),
            i
        }
    }),
    Object.assign(wr.prototype, {
        start: function() {
            this.oldTime = this.startTime = ("undefined" == typeof performance ? Date : performance).now(),
            this.elapsedTime = 0,
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime(),
            this.autoStart = this.running = !1
        },
        getElapsedTime: function() {
            return this.getDelta(),
            this.elapsedTime
        },
        getDelta: function() {
            var t = 0;
            if (this.autoStart && !this.running)
                return this.start(),
                0;
            if (this.running) {
                var e = ("undefined" == typeof performance ? Date : performance).now();
                t = (e - this.oldTime) / 1e3,
                this.oldTime = e,
                this.elapsedTime += t
            }
            return t
        }
    }),
    Object.assign(Mr.prototype, {
        set: function(t, e, i) {
            return this.radius = t,
            this.phi = e,
            this.theta = i,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius,
            this.phi = t.phi,
            this.theta = t.theta,
            this
        },
        makeSafe: function() {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)),
            this
        },
        setFromVector3: function(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z)
        },
        setFromCartesianCoords: function(t, e, i) {
            return this.radius = Math.sqrt(t * t + e * e + i * i),
            0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(t, i),
            this.phi = Math.acos(fa.clamp(e / this.radius, -1, 1))),
            this
        }
    }),
    Object.assign(Er.prototype, {
        set: function(t, e, i) {
            return this.radius = t,
            this.theta = e,
            this.y = i,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius,
            this.theta = t.theta,
            this.y = t.y,
            this
        },
        setFromVector3: function(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z)
        },
        setFromCartesianCoords: function(t, e, i) {
            return this.radius = Math.sqrt(t * t + i * i),
            this.theta = Math.atan2(t, i),
            this.y = e,
            this
        }
    }),
    Object.assign(Tr.prototype, {
        set: function(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++)
                this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: (vc = new W,
        function(t, e) {
            return e = vc.copy(e).multiplyScalar(.5),
            this.min.copy(t).sub(e),
            this.max.copy(t).add(e),
            this
        }
        ),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = 1 / 0,
            this.max.x = this.max.y = -1 / 0,
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"),
            t = new W),
            this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"),
            t = new W),
            this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        },
        expandByVector: function(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"),
            e = new W),
            e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"),
            e = new W),
            e.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: (gc = new W,
        function(t) {
            return gc.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        ),
        intersect: function(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this
        },
        union: function(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        },
        translate: function(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }),
    Object.assign(Sr.prototype, {
        set: function(t, e) {
            return this.start.copy(t),
            this.end.copy(e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.start.copy(t.start),
            this.end.copy(t.end),
            this
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"),
            t = new Mt),
            t.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(t) {
            return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"),
            t = new Mt),
            t.subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(t, e) {
            return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"),
            e = new Mt),
            this.delta(e).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: (yc = new Mt,
        xc = new Mt,
        function(t, e) {
            return yc.subVectors(t, this.start),
            xc.subVectors(this.end, this.start),
            t = xc.dot(xc),
            t = xc.dot(yc) / t,
            e && (t = fa.clamp(t, 0, 1)),
            t
        }
        ),
        closestPointToPoint: function(t, e, i) {
            return t = this.closestPointToPointParameter(t, e),
            void 0 === i && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"),
            i = new Mt),
            this.delta(i).multiplyScalar(t).add(this.start)
        },
        applyMatrix4: function(t) {
            return this.start.applyMatrix4(t),
            this.end.applyMatrix4(t),
            this
        },
        equals: function(t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    }),
    ((Ar.prototype = Object.create(l.prototype)).constructor = Ar).prototype.isImmediateRenderObject = !0,
    ((Lr.prototype = Object.create(Re.prototype)).constructor = Lr).prototype.update = (bc = new Mt,
    _c = new Mt,
    wc = new g,
    function() {
        var t = ["a", "b", "c"];
        this.object.updateMatrixWorld(!0),
        wc.getNormalMatrix(this.object.matrixWorld);
        var e = this.object.matrixWorld
          , i = this.geometry.attributes.position
          , n = this.object.geometry;
        if (n && n.isGeometry)
            for (var r = n.vertices, a = n.faces, o = n = 0, s = a.length; o < s; o++)
                for (var c = a[o], h = 0, l = c.vertexNormals.length; h < l; h++) {
                    var u = c.vertexNormals[h];
                    bc.copy(r[c[t[h]]]).applyMatrix4(e),
                    _c.copy(u).applyMatrix3(wc).normalize().multiplyScalar(this.size).add(bc),
                    i.setXYZ(n, bc.x, bc.y, bc.z),
                    n += 1,
                    i.setXYZ(n, _c.x, _c.y, _c.z),
                    n += 1
                }
        else if (n && n.isBufferGeometry)
            for (t = n.attributes.position,
            r = n.attributes.normal,
            h = n = 0,
            l = t.count; h < l; h++)
                bc.set(t.getX(h), t.getY(h), t.getZ(h)).applyMatrix4(e),
                _c.set(r.getX(h), r.getY(h), r.getZ(h)),
                _c.applyMatrix3(wc).normalize().multiplyScalar(this.size).add(bc),
                i.setXYZ(n, bc.x, bc.y, bc.z),
                n += 1,
                i.setXYZ(n, _c.x, _c.y, _c.z),
                n += 1;
        i.needsUpdate = !0
    }
    ),
    ((Rr.prototype = Object.create(l.prototype)).constructor = Rr).prototype.dispose = function() {
        this.cone.geometry.dispose(),
        this.cone.material.dispose()
    }
    ,
    Rr.prototype.update = (Mc = new Mt,
    Ec = new Mt,
    function() {
        this.light.updateMatrixWorld();
        var t = this.light.distance ? this.light.distance : 1e3
          , e = t * Math.tan(this.light.angle);
        this.cone.scale.set(e, e, t),
        Mc.setFromMatrixPosition(this.light.matrixWorld),
        Ec.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(Ec.sub(Mc)),
        void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
    }
    ),
    ((Pr.prototype = Object.create(Re.prototype)).constructor = Pr).prototype.updateMatrixWorld = (Tc = new Mt,
    Sc = new wt,
    Ac = new wt,
    function(t) {
        var e = this.bones
          , i = this.geometry
          , n = i.getAttribute("position");
        Ac.getInverse(this.root.matrixWorld);
        for (var r = 0, a = 0; r < e.length; r++) {
            var o = e[r];
            o.parent && o.parent.isBone && (Sc.multiplyMatrices(Ac, o.matrixWorld),
            Tc.setFromMatrixPosition(Sc),
            n.setXYZ(a, Tc.x, Tc.y, Tc.z),
            Sc.multiplyMatrices(Ac, o.parent.matrixWorld),
            Tc.setFromMatrixPosition(Sc),
            n.setXYZ(a + 1, Tc.x, Tc.y, Tc.z),
            a += 2)
        }
        i.getAttribute("position").needsUpdate = !0,
        l.prototype.updateMatrixWorld.call(this, t)
    }
    ),
    ((Cr.prototype = Object.create(D.prototype)).constructor = Cr).prototype.dispose = function() {
        this.geometry.dispose(),
        this.material.dispose()
    }
    ,
    Cr.prototype.update = function() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    }
    ,
    ((Ir.prototype = Object.create(l.prototype)).constructor = Ir).prototype.dispose = function() {
        this.children[0].geometry.dispose(),
        this.children[0].material.dispose()
    }
    ,
    Ir.prototype.update = function() {
        var t = .5 * this.light.width
          , e = .5 * this.light.height
          , i = this.line.geometry.attributes.position
          , n = i.array;
        n[0] = t,
        n[1] = -e,
        n[2] = 0,
        n[3] = t,
        n[4] = e,
        n[5] = 0,
        n[6] = -t,
        n[7] = e,
        n[8] = 0,
        n[9] = -t,
        n[10] = -e,
        n[11] = 0,
        n[12] = t,
        n[13] = -e,
        n[14] = 0,
        i.needsUpdate = !0,
        void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
    }
    ,
    ((Or.prototype = Object.create(l.prototype)).constructor = Or).prototype.dispose = function() {
        this.children[0].geometry.dispose(),
        this.children[0].material.dispose()
    }
    ,
    Or.prototype.update = (Lc = new Mt,
    Rc = new M,
    Pc = new M,
    function() {
        var t = this.children[0];
        if (void 0 !== this.color)
            this.material.color.set(this.color);
        else {
            var e = t.geometry.getAttribute("color");
            Rc.copy(this.light.color),
            Pc.copy(this.light.groundColor);
            for (var i = 0, n = e.count; i < n; i++) {
                var r = i < n / 2 ? Rc : Pc;
                e.setXYZ(i, r.r, r.g, r.b)
            }
            e.needsUpdate = !0
        }
        t.lookAt(Lc.setFromMatrixPosition(this.light.matrixWorld).negate())
    }
    ),
    (Nr.prototype = Object.create(Re.prototype)).constructor = Nr,
    (Dr.prototype = Object.create(Re.prototype)).constructor = Dr,
    ((Ur.prototype = Object.create(Re.prototype)).constructor = Ur).prototype.update = (Cc = new Mt,
    Ic = new Mt,
    Oc = new g,
    function() {
        this.object.updateMatrixWorld(!0),
        Oc.getNormalMatrix(this.object.matrixWorld);
        for (var t = this.object.matrixWorld, e = this.geometry.attributes.position, i = this.object.geometry, n = i.vertices, r = 0, a = 0, o = (i = i.faces).length; a < o; a++) {
            var s = i[a]
              , c = s.normal;
            Cc.copy(n[s.a]).add(n[s.b]).add(n[s.c]).divideScalar(3).applyMatrix4(t),
            Ic.copy(c).applyMatrix3(Oc).normalize().multiplyScalar(this.size).add(Cc),
            e.setXYZ(r, Cc.x, Cc.y, Cc.z),
            r += 1,
            e.setXYZ(r, Ic.x, Ic.y, Ic.z),
            r += 1
        }
        e.needsUpdate = !0
    }
    ),
    ((Br.prototype = Object.create(l.prototype)).constructor = Br).prototype.dispose = function() {
        this.lightPlane.geometry.dispose(),
        this.lightPlane.material.dispose(),
        this.targetLine.geometry.dispose(),
        this.targetLine.material.dispose()
    }
    ,
    Br.prototype.update = (Nc = new Mt,
    Dc = new Mt,
    Uc = new Mt,
    function() {
        Nc.setFromMatrixPosition(this.light.matrixWorld),
        Dc.setFromMatrixPosition(this.light.target.matrixWorld),
        Uc.subVectors(Dc, Nc),
        this.lightPlane.lookAt(Uc),
        void 0 !== this.color ? (this.lightPlane.material.color.set(this.color),
        this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color),
        this.targetLine.material.color.copy(this.light.color)),
        this.targetLine.lookAt(Uc),
        this.targetLine.scale.z = Uc.length()
    }
    ),
    ((Fr.prototype = Object.create(Re.prototype)).constructor = Fr).prototype.update = function() {
        function t(t, e, i, n) {
            if (o.set(e, i, n).unproject(s),
            void 0 !== (t = a[t]))
                for (e = r.getAttribute("position"),
                i = 0,
                n = t.length; i < n; i++)
                    e.setXYZ(t[i], o.x, o.y, o.z)
        }
        var r, a, o = new Mt, s = new le;
        return function() {
            r = this.geometry,
            a = this.pointMap,
            s.projectionMatrix.copy(this.camera.projectionMatrix),
            t("c", 0, 0, -1),
            t("t", 0, 0, 1),
            t("n1", -1, -1, -1),
            t("n2", 1, -1, -1),
            t("n3", -1, 1, -1),
            t("n4", 1, 1, -1),
            t("f1", -1, -1, 1),
            t("f2", 1, -1, 1),
            t("f3", -1, 1, 1),
            t("f4", 1, 1, 1),
            t("u1", .7, 1.1, -1),
            t("u2", -.7, 1.1, -1),
            t("u3", 0, 2, -1),
            t("cf1", -1, 0, 1),
            t("cf2", 1, 0, 1),
            t("cf3", 0, -1, 1),
            t("cf4", 0, 1, 1),
            t("cn1", -1, 0, -1),
            t("cn2", 1, 0, -1),
            t("cn3", 0, -1, -1),
            t("cn4", 0, 1, -1),
            r.getAttribute("position").needsUpdate = !0
        }
    }(),
    ((zr.prototype = Object.create(Re.prototype)).constructor = zr).prototype.update = (Bc = new i,
    function(t) {
        if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."),
        void 0 !== this.object && Bc.setFromObject(this.object),
        !Bc.isEmpty()) {
            t = Bc.min;
            var e = Bc.max
              , i = this.geometry.attributes.position
              , n = i.array;
            n[0] = e.x,
            n[1] = e.y,
            n[2] = e.z,
            n[3] = t.x,
            n[4] = e.y,
            n[5] = e.z,
            n[6] = t.x,
            n[7] = t.y,
            n[8] = e.z,
            n[9] = e.x,
            n[10] = t.y,
            n[11] = e.z,
            n[12] = e.x,
            n[13] = e.y,
            n[14] = t.z,
            n[15] = t.x,
            n[16] = e.y,
            n[17] = t.z,
            n[18] = t.x,
            n[19] = t.y,
            n[20] = t.z,
            n[21] = e.x,
            n[22] = t.y,
            n[23] = t.z,
            i.needsUpdate = !0,
            this.geometry.computeBoundingSphere()
        }
    }
    ),
    zr.prototype.setFromObject = function(t) {
        return this.object = t,
        this.update(),
        this
    }
    ,
    ((Gr.prototype = Object.create(Re.prototype)).constructor = Gr).prototype.updateMatrixWorld = function(t) {
        var e = this.box;
        e.isEmpty() || (e.getCenter(this.position),
        e.getSize(this.scale),
        this.scale.multiplyScalar(.5),
        l.prototype.updateMatrixWorld.call(this, t))
    }
    ,
    ((Hr.prototype = Object.create(Le.prototype)).constructor = Hr).prototype.updateMatrixWorld = function(t) {
        var e = -this.plane.constant;
        Math.abs(e) < 1e-8 && (e = 1e-8),
        this.scale.set(.5 * this.size, .5 * this.size, e),
        this.children[0].material.side = e < 0 ? 1 : 0,
        this.lookAt(this.plane.normal),
        l.prototype.updateMatrixWorld.call(this, t)
    }
    ,
    ((Vr.prototype = Object.create(l.prototype)).constructor = Vr).prototype.setDirection = (Hc = new Mt,
    function(t) {
        .99999 < t.y ? this.quaternion.set(0, 0, 0, 1) : t.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (Hc.set(t.z, 0, -t.x).normalize(),
        Gc = Math.acos(t.y),
        this.quaternion.setFromAxisAngle(Hc, Gc))
    }
    ),
    Vr.prototype.setLength = function(t, e, i) {
        void 0 === e && (e = .2 * t),
        void 0 === i && (i = .2 * e),
        this.line.scale.set(1, Math.max(0, t - e), 1),
        this.line.updateMatrix(),
        this.cone.scale.set(i, e, i),
        this.cone.position.y = t,
        this.cone.updateMatrix()
    }
    ,
    Vr.prototype.setColor = function(t) {
        this.line.material.color.copy(t),
        this.cone.material.color.copy(t)
    }
    ,
    (kr.prototype = Object.create(Re.prototype)).constructor = kr,
    rn.create = function(t, e) {
        return console.log("THREE.Curve.create() has been deprecated"),
        t.prototype = Object.create(rn.prototype),
        (t.prototype.constructor = t).prototype.getPoint = e,
        t
    }
    ,
    Object.assign(xn.prototype, {
        createPointsGeometry: function(t) {
            return console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."),
            t = this.getPoints(t),
            this.createGeometry(t)
        },
        createSpacedPointsGeometry: function(t) {
            return console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."),
            t = this.getSpacedPoints(t),
            this.createGeometry(t)
        },
        createGeometry: function(t) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for (var e = new E, i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.vertices.push(new Mt(r.x,r.y,r.z || 0))
            }
            return e
        }
    }),
    Object.assign(bn.prototype, {
        fromPoints: function(t) {
            console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),
            this.setFromPoints(t)
        }
    }),
    jr.prototype = Object.create(cn.prototype),
    Wr.prototype = Object.create(cn.prototype),
    Xr.prototype = Object.create(cn.prototype),
    Object.assign(Xr.prototype, {
        initFromArray: function() {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function() {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function() {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    }),
    Nr.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }
    ,
    Pr.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }
    ,
    Object.assign(Jn.prototype, {
        extractUrlBase: function(t) {
            return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),
            Xs.extractUrlBase(t)
        }
    }),
    Object.assign(Zn.prototype, {
        setTexturePath: function(t) {
            return console.warn("THREE.JSONLoader: .setTexturePath() has been renamed to .setResourcePath()."),
            this.setResourcePath(t)
        }
    }),
    Object.assign(Tr.prototype, {
        center: function(t) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
            this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        size: function(t) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
            this.getSize(t)
        }
    }),
    Object.assign(i.prototype, {
        center: function(t) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
            this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(t)
        },
        size: function(t) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
            this.getSize(t)
        }
    }),
    Sr.prototype.center = function(t) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),
        this.getCenter(t)
    }
    ,
    Object.assign(fa, {
        random16: function() {
            return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),
            Math.random()
        },
        nearestPowerOfTwo: function(t) {
            return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),
            fa.floorPowerOfTwo(t)
        },
        nextPowerOfTwo: function(t) {
            return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),
            fa.ceilPowerOfTwo(t)
        }
    }),
    Object.assign(g.prototype, {
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
            this.toArray(t, e)
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
            t.applyMatrix3(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        },
        applyToBuffer: function(t) {
            return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),
            this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    }),
    Object.assign(wt.prototype, {
        extractPosition: function(t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
            this.copyPosition(t)
        },
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
            this.toArray(t, e)
        },
        getPosition: function() {
            return void 0 === Vc && (Vc = new Mt),
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
            Vc.setFromMatrixColumn(this, 3)
        },
        setRotationFromQuaternion: function(t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
            this.makeRotationFromQuaternion(t)
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        multiplyVector4: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        },
        rotateAxis: function(t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
            t.transformDirection(this)
        },
        crossVector: function(t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBuffer: function(t) {
            return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),
            this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(t, e, i, n, r, a) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),
            this.makePerspective(t, e, n, i, r, a)
        }
    }),
    v.prototype.isIntersectionLine = function(t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
        this.intersectsLine(t)
    }
    ,
    w.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
        t.applyQuaternion(this)
    }
    ,
    Object.assign(B.prototype, {
        isIntersectionBox: function(t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        isIntersectionPlane: function(t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
            this.intersectsPlane(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(t)
        }
    }),
    Object.assign(F.prototype, {
        area: function() {
            return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
            this.getArea()
        },
        barycoordFromPoint: function(t, e) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
            this.getBarycoord(t, e)
        },
        midpoint: function(t) {
            return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),
            this.getMidpoint(t)
        },
        normal: function(t) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
            this.getNormal(t)
        },
        plane: function(t) {
            return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
            this.getPlane(t)
        }
    }),
    Object.assign(F, {
        barycoordFromPoint: function(t, e, i, n, r) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
            F.getBarycoord(t, e, i, n, r)
        },
        normal: function(t, e, i, n) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
            F.getNormal(t, e, i, n)
        }
    }),
    Object.assign(_n.prototype, {
        extractAllPoints: function(t) {
            return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),
            this.extractPoints(t)
        },
        extrude: function(t) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),
            new xi(this,t)
        },
        makeGeometry: function(t) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),
            new Pi(this,t)
        }
    }),
    Object.assign(W.prototype, {
        fromAttribute: function(t, e, i) {
            return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),
            this.fromBufferAttribute(t, e, i)
        },
        distanceToManhattan: function(t) {
            return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
            this.manhattanDistanceTo(t)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),
            this.manhattanLength()
        }
    }),
    Object.assign(Mt.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
            this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
            this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function(t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
            this.setFromMatrixColumn(e, t)
        },
        applyProjection: function(t) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),
            this.applyMatrix4(t)
        },
        fromAttribute: function(t, e, i) {
            return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),
            this.fromBufferAttribute(t, e, i)
        },
        distanceToManhattan: function(t) {
            return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
            this.manhattanDistanceTo(t)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),
            this.manhattanLength()
        }
    }),
    Object.assign(Et.prototype, {
        fromAttribute: function(t, e, i) {
            return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),
            this.fromBufferAttribute(t, e, i)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),
            this.manhattanLength()
        }
    }),
    Object.assign(E.prototype, {
        computeTangents: function() {
            console.error("THREE.Geometry: .computeTangents() has been removed.")
        },
        computeLineDistances: function() {
            console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
        }
    }),
    Object.assign(l.prototype, {
        getChildByName: function(t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
            this.getObjectByName(t)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
            this.translateOnAxis(e, t)
        },
        getWorldRotation: function() {
            console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
        }
    }),
    Object.defineProperties(l.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }),
    Object.defineProperties(Me.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."),
                this.levels
            }
        }
    }),
    Object.defineProperty(Ee.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    }),
    Object.defineProperty(rn.prototype, "__arcLengthDivisions", {
        get: function() {
            return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),
            this.arcLengthDivisions
        },
        set: function(t) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),
            this.arcLengthDivisions = t
        }
    }),
    ue.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
        void 0 !== e && (this.filmGauge = e),
        this.setFocalLength(t)
    }
    ,
    Object.defineProperties(wn.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
                this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
                this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
                this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
                this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
                this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
                this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
                this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
                this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
                this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
                this.shadow.mapSize.height = t
            }
        }
    }),
    Object.defineProperties(f.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),
                this.array.length
            }
        },
        copyIndicesArray: function() {
            console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
        }
    }),
    Object.assign(P.prototype, {
        addIndex: function(t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
            this.setIndex(t)
        },
        addDrawCall: function(t, e, i) {
            void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
            this.addGroup(t, e)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
            this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }),
    Object.defineProperties(P.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
                this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
                this.groups
            }
        }
    }),
    Object.assign(bi.prototype, {
        getArrays: function() {
            console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
        },
        addShapeList: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
        },
        addShape: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
        }
    }),
    Object.defineProperties(mr.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),
                this
            }
        }
    }),
    Object.defineProperties(I.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."),
                new M
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                this.flatShading = 1 === t
            }
        }
    }),
    Object.defineProperties(ji.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
                !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }),
    Object.defineProperties(O.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives = t
            }
        }
    }),
    Object.assign(me.prototype, {
        clearTarget: function(t, e, i, n) {
            console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),
            this.setRenderTarget(t),
            this.clear(e, i, n)
        },
        animate: function(t) {
            console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
            this.setAnimationLoop(t)
        },
        getCurrentRenderTarget: function() {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),
            this.getRenderTarget()
        },
        getMaxAnisotropy: function() {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),
            this.capabilities.getMaxAnisotropy()
        },
        getPrecision: function() {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),
            this.capabilities.precision
        },
        resetGLState: function() {
            return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
            this.state.reset()
        },
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
            this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
            this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
            this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
            this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
            this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
            this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
            this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
            this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
            this.setScissorTest(t)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        },
        setFaceCulling: function() {
            console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
        }
    }),
    Object.defineProperties(me.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
                this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
                this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            }
        }
    }),
    Object.defineProperties(ae.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            }
        }
    }),
    Object.defineProperties(A.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy = t
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset = t
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat = t
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format = t
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps = t
            }
        }
    }),
    Object.defineProperties(de.prototype, {
        standing: {
            set: function() {
                console.warn("THREE.WebVRManager: .standing has been removed.")
            }
        },
        userHeight: {
            set: function() {
                console.warn("THREE.WebVRManager: .userHeight has been removed.")
            }
        }
    }),
    or.prototype.load = function(t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var e = this;
        return (new ir).load(t, function(t) {
            e.setBuffer(t)
        }),
        this
    }
    ,
    cr.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
        this.getFrequencyData()
    }
    ,
    rr.prototype.updateCubeMap = function(t, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
        this.update(t, e)
    }
    ,
    Ca.crossOrigin = void 0,
    Ca.loadTexture = function(t, e, i, n) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var r = new nn;
        return r.setCrossOrigin(this.crossOrigin),
        t = r.load(t, i, void 0, n),
        e && (t.mapping = e),
        t
    }
    ,
    Ca.loadTextureCube = function(t, e, i, n) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var r = new en;
        return r.setCrossOrigin(this.crossOrigin),
        t = r.load(t, i, void 0, n),
        e && (t.mapping = e),
        t
    }
    ,
    Ca.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }
    ,
    Ca.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
    ,
    t.WebGLRenderTargetCube = n,
    t.WebGLRenderTarget = A,
    t.WebGLRenderer = me,
    t.ShaderLib = Va,
    t.UniformsLib = Ha,
    t.UniformsUtils = Ba,
    t.ShaderChunk = Ua,
    t.FogExp2 = ge,
    t.Fog = ve,
    t.Scene = ye,
    t.Sprite = we,
    t.LOD = Me,
    t.SkinnedMesh = Se,
    t.Skeleton = Ee,
    t.Bone = Te,
    t.Mesh = D,
    t.LineSegments = Re,
    t.LineLoop = Pe,
    t.Line = Le,
    t.Points = Ie,
    t.Group = he,
    t.VideoTexture = Oe,
    t.DataTexture = Tt,
    t.DataTexture3D = H,
    t.CompressedTexture = Ne,
    t.CubeTexture = G,
    t.CanvasTexture = De,
    t.DepthTexture = Ue,
    t.Texture = p,
    t.CompressedTextureLoader = Ki,
    t.DataTextureLoader = $i,
    t.CubeTextureLoader = en,
    t.TextureLoader = nn,
    t.ObjectLoader = Qn,
    t.MaterialLoader = qn,
    t.BufferGeometryLoader = Yn,
    t.DefaultLoadingManager = Os,
    t.LoadingManager = Zi,
    t.JSONLoader = Zn,
    t.ImageLoader = tn,
    t.ImageBitmapLoader = Kn,
    t.FontLoader = er,
    t.FileLoader = Qi,
    t.Loader = Jn,
    t.LoaderUtils = Xs,
    t.Cache = Is,
    t.AudioLoader = ir,
    t.SpotLightShadow = Tn,
    t.SpotLight = Sn,
    t.PointLight = An,
    t.RectAreaLight = In,
    t.HemisphereLight = Mn,
    t.DirectionalLightShadow = Rn,
    t.DirectionalLight = Pn,
    t.AmbientLight = Cn,
    t.LightShadow = En,
    t.Light = wn,
    t.StereoCamera = nr,
    t.PerspectiveCamera = ue,
    t.OrthographicCamera = Ln,
    t.CubeCamera = rr,
    t.ArrayCamera = pe,
    t.Camera = le,
    t.AudioListener = ar,
    t.PositionalAudio = sr,
    t.AudioContext = kc,
    t.AudioAnalyser = cr,
    t.Audio = or,
    t.VectorKeyframeTrack = jn,
    t.StringKeyframeTrack = kn,
    t.QuaternionKeyframeTrack = Vn,
    t.NumberKeyframeTrack = Gn,
    t.ColorKeyframeTrack = zn,
    t.BooleanKeyframeTrack = Fn,
    t.PropertyMixer = hr,
    t.PropertyBinding = ur,
    t.KeyframeTrack = Bn,
    t.AnimationUtils = Gs,
    t.AnimationObjectGroup = pr,
    t.AnimationMixer = fr,
    t.AnimationClip = Wn,
    t.Uniform = mr,
    t.InstancedBufferGeometry = gr,
    t.BufferGeometry = P,
    t.Geometry = E,
    t.InterleavedBufferAttribute = be,
    t.InstancedInterleavedBuffer = vr,
    t.InterleavedBuffer = xe,
    t.InstancedBufferAttribute = yr,
    t.Face3 = U,
    t.Object3D = l,
    t.Raycaster = xr,
    t.Layers = a,
    t.EventDispatcher = e,
    t.Clock = wr,
    t.QuaternionLinearInterpolant = Hn,
    t.LinearInterpolant = Dn,
    t.DiscreteInterpolant = Un,
    t.CubicInterpolant = Nn,
    t.Interpolant = On,
    t.Triangle = F,
    t.Math = fa,
    t.Spherical = Mr,
    t.Cylindrical = Er,
    t.Plane = v,
    t.Frustum = St,
    t.Sphere = o,
    t.Ray = B,
    t.Matrix4 = wt,
    t.Matrix3 = g,
    t.Box3 = i,
    t.Box2 = Tr,
    t.Line3 = Sr,
    t.Euler = r,
    t.Vector4 = Et,
    t.Vector3 = Mt,
    t.Vector2 = W,
    t.Quaternion = w,
    t.Color = M,
    t.ImmediateRenderObject = Ar,
    t.VertexNormalsHelper = Lr,
    t.SpotLightHelper = Rr,
    t.SkeletonHelper = Pr,
    t.PointLightHelper = Cr,
    t.RectAreaLightHelper = Ir,
    t.HemisphereLightHelper = Or,
    t.GridHelper = Nr,
    t.PolarGridHelper = Dr,
    t.FaceNormalsHelper = Ur,
    t.DirectionalLightHelper = Br,
    t.CameraHelper = Fr,
    t.BoxHelper = zr,
    t.Box3Helper = Gr,
    t.PlaneHelper = Hr,
    t.ArrowHelper = Vr,
    t.AxesHelper = kr,
    t.Shape = _n,
    t.Path = bn,
    t.ShapePath = $n,
    t.Font = tr,
    t.CurvePath = xn,
    t.Curve = rn,
    t.ImageUtils = Ca,
    t.ShapeUtils = Ls,
    t.WebGLUtils = ce,
    t.WireframeGeometry = Be,
    t.ParametricGeometry = Fe,
    t.ParametricBufferGeometry = ze,
    t.TetrahedronGeometry = Ve,
    t.TetrahedronBufferGeometry = ke,
    t.OctahedronGeometry = je,
    t.OctahedronBufferGeometry = We,
    t.IcosahedronGeometry = Xe,
    t.IcosahedronBufferGeometry = qe,
    t.DodecahedronGeometry = Ye,
    t.DodecahedronBufferGeometry = Je,
    t.PolyhedronGeometry = Ge,
    t.PolyhedronBufferGeometry = He,
    t.TubeGeometry = Ze,
    t.TubeBufferGeometry = Qe,
    t.TorusKnotGeometry = Ke,
    t.TorusKnotBufferGeometry = $e,
    t.TorusGeometry = ti,
    t.TorusBufferGeometry = ei,
    t.TextGeometry = wi,
    t.TextBufferGeometry = Mi,
    t.SphereGeometry = Ei,
    t.SphereBufferGeometry = Ti,
    t.RingGeometry = Si,
    t.RingBufferGeometry = Ai,
    t.PlaneGeometry = L,
    t.PlaneBufferGeometry = C,
    t.LatheGeometry = Li,
    t.LatheBufferGeometry = Ri,
    t.ShapeGeometry = Pi,
    t.ShapeBufferGeometry = Ci,
    t.ExtrudeGeometry = xi,
    t.ExtrudeBufferGeometry = bi,
    t.EdgesGeometry = Oi,
    t.ConeGeometry = Ui,
    t.ConeBufferGeometry = Bi,
    t.CylinderGeometry = Ni,
    t.CylinderBufferGeometry = Di,
    t.CircleGeometry = Fi,
    t.CircleBufferGeometry = zi,
    t.BoxGeometry = T,
    t.BoxBufferGeometry = S,
    t.ShadowMaterial = Gi,
    t.SpriteMaterial = _e,
    t.RawShaderMaterial = Hi,
    t.ShaderMaterial = O,
    t.PointsMaterial = Ce,
    t.MeshPhysicalMaterial = ki,
    t.MeshStandardMaterial = Vi,
    t.MeshPhongMaterial = ji,
    t.MeshToonMaterial = Wi,
    t.MeshNormalMaterial = Xi,
    t.MeshLambertMaterial = qi,
    t.MeshDepthMaterial = ne,
    t.MeshDistanceMaterial = re,
    t.MeshBasicMaterial = N,
    t.MeshMatcapMaterial = Yi,
    t.LineDashedMaterial = Ji,
    t.LineBasicMaterial = Ae,
    t.Material = I,
    t.Float64BufferAttribute = x,
    t.Float32BufferAttribute = R,
    t.Uint32BufferAttribute = y,
    t.Int32BufferAttribute = m,
    t.Uint16BufferAttribute = d,
    t.Int16BufferAttribute = u,
    t.Uint8ClampedBufferAttribute = h,
    t.Uint8BufferAttribute = c,
    t.Int8BufferAttribute = s,
    t.BufferAttribute = f,
    t.ArcCurve = on,
    t.CatmullRomCurve3 = cn,
    t.CubicBezierCurve = pn,
    t.CubicBezierCurve3 = dn,
    t.EllipseCurve = an,
    t.LineCurve = fn,
    t.LineCurve3 = mn,
    t.QuadraticBezierCurve = gn,
    t.QuadraticBezierCurve3 = vn,
    t.SplineCurve = yn,
    t.REVISION = "97",
    t.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    },
    t.CullFaceNone = 0,
    t.CullFaceBack = 1,
    t.CullFaceFront = 2,
    t.CullFaceFrontBack = 3,
    t.FrontFaceDirectionCW = 0,
    t.FrontFaceDirectionCCW = 1,
    t.BasicShadowMap = 0,
    t.PCFShadowMap = 1,
    t.PCFSoftShadowMap = 2,
    t.FrontSide = 0,
    t.BackSide = 1,
    t.DoubleSide = 2,
    t.FlatShading = 1,
    t.SmoothShading = 2,
    t.NoColors = 0,
    t.FaceColors = 1,
    t.VertexColors = 2,
    t.NoBlending = 0,
    t.NormalBlending = 1,
    t.AdditiveBlending = 2,
    t.SubtractiveBlending = 3,
    t.MultiplyBlending = 4,
    t.CustomBlending = 5,
    t.AddEquation = 100,
    t.SubtractEquation = 101,
    t.ReverseSubtractEquation = 102,
    t.MinEquation = 103,
    t.MaxEquation = 104,
    t.ZeroFactor = 200,
    t.OneFactor = 201,
    t.SrcColorFactor = 202,
    t.OneMinusSrcColorFactor = 203,
    t.SrcAlphaFactor = 204,
    t.OneMinusSrcAlphaFactor = 205,
    t.DstAlphaFactor = 206,
    t.OneMinusDstAlphaFactor = 207,
    t.DstColorFactor = 208,
    t.OneMinusDstColorFactor = 209,
    t.SrcAlphaSaturateFactor = 210,
    t.NeverDepth = 0,
    t.AlwaysDepth = 1,
    t.LessDepth = 2,
    t.LessEqualDepth = 3,
    t.EqualDepth = 4,
    t.GreaterEqualDepth = 5,
    t.GreaterDepth = 6,
    t.NotEqualDepth = 7,
    t.MultiplyOperation = 0,
    t.MixOperation = 1,
    t.AddOperation = 2,
    t.NoToneMapping = 0,
    t.LinearToneMapping = 1,
    t.ReinhardToneMapping = 2,
    t.Uncharted2ToneMapping = 3,
    t.CineonToneMapping = 4,
    t.UVMapping = 300,
    t.CubeReflectionMapping = 301,
    t.CubeRefractionMapping = 302,
    t.EquirectangularReflectionMapping = 303,
    t.EquirectangularRefractionMapping = 304,
    t.SphericalReflectionMapping = 305,
    t.CubeUVReflectionMapping = 306,
    t.CubeUVRefractionMapping = 307,
    t.RepeatWrapping = 1e3,
    t.ClampToEdgeWrapping = 1001,
    t.MirroredRepeatWrapping = 1002,
    t.NearestFilter = 1003,
    t.NearestMipMapNearestFilter = 1004,
    t.NearestMipMapLinearFilter = 1005,
    t.LinearFilter = 1006,
    t.LinearMipMapNearestFilter = 1007,
    t.LinearMipMapLinearFilter = 1008,
    t.UnsignedByteType = 1009,
    t.ByteType = 1010,
    t.ShortType = 1011,
    t.UnsignedShortType = 1012,
    t.IntType = 1013,
    t.UnsignedIntType = 1014,
    t.FloatType = 1015,
    t.HalfFloatType = 1016,
    t.UnsignedShort4444Type = 1017,
    t.UnsignedShort5551Type = 1018,
    t.UnsignedShort565Type = 1019,
    t.UnsignedInt248Type = 1020,
    t.AlphaFormat = 1021,
    t.RGBFormat = 1022,
    t.RGBAFormat = 1023,
    t.LuminanceFormat = 1024,
    t.LuminanceAlphaFormat = 1025,
    t.RGBEFormat = 1023,
    t.DepthFormat = 1026,
    t.DepthStencilFormat = 1027,
    t.RedFormat = 1028,
    t.RGB_S3TC_DXT1_Format = 33776,
    t.RGBA_S3TC_DXT1_Format = 33777,
    t.RGBA_S3TC_DXT3_Format = 33778,
    t.RGBA_S3TC_DXT5_Format = 33779,
    t.RGB_PVRTC_4BPPV1_Format = 35840,
    t.RGB_PVRTC_2BPPV1_Format = 35841,
    t.RGBA_PVRTC_4BPPV1_Format = 35842,
    t.RGBA_PVRTC_2BPPV1_Format = 35843,
    t.RGB_ETC1_Format = 36196,
    t.RGBA_ASTC_4x4_Format = 37808,
    t.RGBA_ASTC_5x4_Format = 37809,
    t.RGBA_ASTC_5x5_Format = 37810,
    t.RGBA_ASTC_6x5_Format = 37811,
    t.RGBA_ASTC_6x6_Format = 37812,
    t.RGBA_ASTC_8x5_Format = 37813,
    t.RGBA_ASTC_8x6_Format = 37814,
    t.RGBA_ASTC_8x8_Format = 37815,
    t.RGBA_ASTC_10x5_Format = 37816,
    t.RGBA_ASTC_10x6_Format = 37817,
    t.RGBA_ASTC_10x8_Format = 37818,
    t.RGBA_ASTC_10x10_Format = 37819,
    t.RGBA_ASTC_12x10_Format = 37820,
    t.RGBA_ASTC_12x12_Format = 37821,
    t.LoopOnce = 2200,
    t.LoopRepeat = 2201,
    t.LoopPingPong = 2202,
    t.InterpolateDiscrete = 2300,
    t.InterpolateLinear = 2301,
    t.InterpolateSmooth = 2302,
    t.ZeroCurvatureEnding = 2400,
    t.ZeroSlopeEnding = 2401,
    t.WrapAroundEnding = 2402,
    t.TrianglesDrawMode = 0,
    t.TriangleStripDrawMode = 1,
    t.TriangleFanDrawMode = 2,
    t.LinearEncoding = 3e3,
    t.sRGBEncoding = 3001,
    t.GammaEncoding = 3007,
    t.RGBEEncoding = 3002,
    t.LogLuvEncoding = 3003,
    t.RGBM7Encoding = 3004,
    t.RGBM16Encoding = 3005,
    t.RGBDEncoding = 3006,
    t.BasicDepthPacking = 3200,
    t.RGBADepthPacking = 3201,
    t.TangentSpaceNormalMap = 0,
    t.ObjectSpaceNormalMap = 1,
    t.CubeGeometry = T,
    t.Face4 = function(t, e, i, n, r, a, o) {
        return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
        new U(t,e,i,r,a,o)
    }
    ,
    t.LineStrip = 0,
    t.LinePieces = 1,
    t.MeshFaceMaterial = function(t) {
        return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),
        t
    }
    ,
    t.MultiMaterial = function(t) {
        return void 0 === t && (t = []),
        console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),
        t.isMultiMaterial = !0,
        (t.materials = t).clone = function() {
            return t.slice()
        }
        ,
        t
    }
    ,
    t.PointCloud = function(t, e) {
        return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
        new Ie(t,e)
    }
    ,
    t.Particle = function(t) {
        return console.warn("THREE.Particle has been renamed to THREE.Sprite."),
        new we(t)
    }
    ,
    t.ParticleSystem = function(t, e) {
        return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
        new Ie(t,e)
    }
    ,
    t.PointCloudMaterial = function(t) {
        return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
        new Ce(t)
    }
    ,
    t.ParticleBasicMaterial = function(t) {
        return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
        new Ce(t)
    }
    ,
    t.ParticleSystemMaterial = function(t) {
        return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
        new Ce(t)
    }
    ,
    t.Vertex = function(t, e, i) {
        return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
        new Mt(t,e,i)
    }
    ,
    t.DynamicBufferAttribute = function(t, e) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
        new f(t,e).setDynamic(!0)
    }
    ,
    t.Int8Attribute = function(t, e) {
        return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),
        new s(t,e)
    }
    ,
    t.Uint8Attribute = function(t, e) {
        return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),
        new c(t,e)
    }
    ,
    t.Uint8ClampedAttribute = function(t, e) {
        return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),
        new h(t,e)
    }
    ,
    t.Int16Attribute = function(t, e) {
        return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),
        new u(t,e)
    }
    ,
    t.Uint16Attribute = function(t, e) {
        return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),
        new d(t,e)
    }
    ,
    t.Int32Attribute = function(t, e) {
        return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),
        new m(t,e)
    }
    ,
    t.Uint32Attribute = function(t, e) {
        return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),
        new y(t,e)
    }
    ,
    t.Float32Attribute = function(t, e) {
        return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),
        new R(t,e)
    }
    ,
    t.Float64Attribute = function(t, e) {
        return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),
        new x(t,e)
    }
    ,
    t.ClosedSplineCurve3 = jr,
    t.SplineCurve3 = Wr,
    t.Spline = Xr,
    t.AxisHelper = function(t) {
        return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),
        new kr(t)
    }
    ,
    t.BoundingBoxHelper = function(t, e) {
        return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),
        new zr(t,e)
    }
    ,
    t.EdgesHelper = function(t, e) {
        return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),
        new Re(new Oi(t.geometry),new Ae({
            color: void 0 !== e ? e : 16777215
        }))
    }
    ,
    t.WireframeHelper = function(t, e) {
        return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),
        new Re(new Be(t.geometry),new Ae({
            color: void 0 !== e ? e : 16777215
        }))
    }
    ,
    t.XHRLoader = function(t) {
        return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),
        new Qi(t)
    }
    ,
    t.BinaryTextureLoader = function(t) {
        return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),
        new $i(t)
    }
    ,
    t.GeometryUtils = {
        merge: function(t, e, i) {
            if (console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."),
            e.isMesh) {
                e.matrixAutoUpdate && e.updateMatrix();
                var n = e.matrix;
                e = e.geometry
            }
            t.merge(e, n, i)
        },
        center: function(t) {
            return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
            t.center()
        }
    },
    t.Projector = function() {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),
        this.projectVector = function(t, e) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."),
            t.project(e)
        }
        ,
        this.unprojectVector = function(t, e) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
            t.unproject(e)
        }
        ,
        this.pickingRay = function() {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    }
    ,
    t.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),
        this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
        this.clear = function() {}
        ,
        this.render = function() {}
        ,
        this.setClearColor = function() {}
        ,
        this.setSize = function() {}
    }
    ,
    t.SceneUtils = {
        createMultiMaterialObject: function() {
            console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
        },
        detach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
        },
        attach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
        }
    },
    t.LensFlare = function() {
        console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")
    }
    ,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
