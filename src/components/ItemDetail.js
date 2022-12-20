const ItemDetail = ({item}) => {
    return(
    <div className="card">
    <div className="card-body">
      <h3 className="card-title">{item.nombre}</h3>
      <img src={item.imgs} alt="imagen" /><p className="card-text">{item.info}</p>
    </div> 
    </div>
   
    );
}
export default ItemDetail;