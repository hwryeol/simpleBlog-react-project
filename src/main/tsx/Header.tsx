
function Header({className,postData}) {
    return (
      <div className={className}>
         <div>{postData.tags}</div>
        <div>{postData.title}</div>
        <div>{postData.createAt}</div>
      </div>
    );
  }
  
  export default Header;