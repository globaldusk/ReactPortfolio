import React, { useEffect, useRef } from 'react';

const ParticleAnimation = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dots = useRef([]);
  const wide = 36;
  const high = wide / 2.2;
  const size = 30;
  const padding = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let cb = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;

    const create = () => {
      const tempDots = [];
      for (let i = -1; ++i < wide;) {
        const x = Math.floor((((cb.width - padding * 2) / (wide - 1)) * i) + padding) * ratio;

        for (let j = -1; ++j < high;) {
          const y = Math.floor((((cb.height - padding * 2) / (high - 1)) * j) + padding) * ratio;

          tempDots.push({
            x: x,
            y: y,
            ox: x,
            oy: y
          });
        }
      }
      dots.current = tempDots;
    };

    const render = () => {
      // clear the canvas
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // choose the dot color
      ctx.fillStyle = '#fff';

      // for each line
      for (let i = 0; i < dots.current.length; i++) {
        const s = dots.current[i];

        const v = getV(s);

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + v.x, s.y + v.y);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1 * ratio;
        ctx.stroke();
        ctx.closePath();
      }

      // for each dot
      for (let i = 0; i < dots.current.length; i++) {
        const s = dots.current[i];

        const v = getV(s);

        ctx.circle(s.x + v.x, s.y + v.y, s.size * ratio, true);
        ctx.fill();
      }
    };

    const getV = (dot) => {
      // find the distance from the line to the mouse
      const d = getDistance(dot, mouse.current);

      // reverse the distance, so that the number is bigger when the mouse is closer.
      dot.size = (200 - d) / 20;
      dot.size = dot.size < 1 ? 1 : dot.size;

      dot.angle = getAngle(dot, mouse.current);

      return {
        x: (d > 20 ? 20 : d) * Math.cos(dot.angle * Math.PI / 180),
        y: (d > 20 ? 20 : d) * Math.sin(dot.angle * Math.PI / 180)
      };
    };

    const getAngle = (obj1, obj2) => {
      const dX = obj2.x - obj1.x;
      const dY = obj2.y - obj1.y;
      const angleDeg = Math.atan2(dY, dX) / Math.PI * 180;
      return angleDeg;
    };

    const getDistance = (obj1, obj2) => {
      const dx = obj1.x - obj2.x;
      const dy = obj1.y - obj2.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    CanvasRenderingContext2D.prototype.circle = function (x, y, r) {
      this.beginPath();
      this.arc(x, y, r, 0, 2 * Math.PI, false);
      this.closePath();
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.pageX * ratio;
      mouse.current.y = e.pageY * ratio;
    };

    const handleResize = () => {
      ctx.canvas.width = window.innerWidth * ratio;
      ctx.canvas.height = window.innerHeight * ratio;
      cb = canvas.getBoundingClientRect();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    create();

    const animloop = () => {
      render();
      requestAnimationFrame(animloop);
    };

    animloop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ background: '#000', width: '100%', height: '100%' }} />;
};

export default ParticleAnimation;
