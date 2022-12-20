const ItemDetail = ({item}) => {
    return(
    <div>
    <div>
      <img src={item.imgs} alt="imagen" />
    </div> 
    <p>{item.info}</p>
    </div>
   
    );
}
export default ItemDetail;