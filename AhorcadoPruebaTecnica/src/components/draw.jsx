import React, { useEffect, useRef } from 'react'

export default function HangmanDrawing({ mistakes }) {
  const ref = useRef()
  useEffect(() => {
    const c = ref.current,
      ctx = c.getContext('2d')
    ctx.clearRect(0, 0, 200, 200)
    ctx.lineWidth = 2
    ctx.strokeStyle = '#000'
    // horca
    ctx.beginPath()
    ctx.moveTo(10, 190)
    ctx.lineTo(150, 190)
    ctx.moveTo(40, 190)
    ctx.lineTo(40, 10)
    ctx.lineTo(100, 10)
    ctx.lineTo(100, 30)
    ctx.stroke()
    // cuerpo
    const parts = [
      () => {
        //cabeza
        ctx.beginPath()
        ctx.arc(100, 50, 20, 0, 2 * Math.PI)
        ctx.stroke()
      },
      () => {
        //cuerpo
        ctx.beginPath()
        ctx.moveTo(100, 70)
        ctx.lineTo(100, 120)
        ctx.stroke()
      },
      () => {
        //brazo izq
        ctx.beginPath()
        ctx.moveTo(100, 80)
        ctx.lineTo(80, 100)
        ctx.stroke()
      },
      () => {
        //brazo der
        ctx.beginPath()
        ctx.moveTo(100, 80)
        ctx.lineTo(120, 100)
        ctx.stroke()
      },
      () => {
        //pierna izq
        ctx.beginPath()
        ctx.moveTo(100, 120)
        ctx.lineTo(80, 150)
        ctx.stroke()
      },
      () => {
        //pierna der
        ctx.beginPath()
        ctx.moveTo(100, 120)
        ctx.lineTo(120, 150)
        ctx.stroke()
      },
    ]
    parts.slice(0, mistakes).forEach(fn => fn())
  }, [mistakes])

  return <canvas ref={ref} width={200} height={200} className="mx-auto bg-white border rounded" />
}
