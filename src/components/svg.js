export default function SVGimg(props) {
  console.log("svg props", props)
  console.log("props.children", props.children)

  // const ARRAY_LENGTH = 10
  // const rndArr = []
  // for (let i = 0; i < ARRAY_LENGTH; i++) {
  //   rndArr.push(Math.random())
  // }
  // console.log(rndArr)

  function rand(max, min) {
    var rnd = Math.random() * (max - min) + min
    console.log(rnd)
    return rnd
  }

  const transform =
    "rotate(" +
    rand(0, 360) +
    ", " +
    rand(0, 10) +
    ", " +
    rand(0, 10) +
    ") " +
    "translate(" +
    rand(-50, 20) +
    " " +
    rand(-100, 50) +
    ") " +
    "skewX(" +
    rand(0, 100) +
    ") " +
    "skewY(" +
    rand(0, 10) +
    ") " +
    "scale(" +
    rand(0, 1) +
    " " +
    rand(0, 2) +
    ")"
  return (
    <>
      {/* <h1>Hi, {props.title}</h1> */}
      {/* <img
        className="Avatar"
        src="http://thenewcode.com/assets/images/thumbnails/hawaii-2x.jpg"
        alt={props.title}
      /> */}
      <svg
        style={{ overflow: "visible" }}
        id={props.id}
        width="100px"
        height="100px"
        fill="red"
      >
        <text x={props.posX} y={props.posY} class="small" fill={props.fill}>
          {props.children}
        </text>
        <rect transform={transform} width="300" height="10" fill={props.fill} />
      </svg>
    </>
  )
}
