const naseStyle = {
    width: '20%',
    margin: '2%'
}

function Nase(props: { imgName: string; }) {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/${props.imgName}`} alt="nase" style={naseStyle}/>
    </>
  )
}

export default Nase;