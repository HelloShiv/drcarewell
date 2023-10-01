function button(props){
    return(
        <div className="greenBtn" 
         style={{
            background:"#6EBB2D",
            borderRadius:"30px",
            color:"#ffffff",
            width:"230px",
            height:"50px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            overflowX:"hidden",
            overflowY:"hidden"
        }}
        >
            {props.name}
        </div>
    );
}

export default button;