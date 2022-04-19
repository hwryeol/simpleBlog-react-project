import styles from "../css/Index.module.css"

function Index({className,idTagInputText,idTagInputId}) {
  return (
    <div className={className+' '+styles.index}>
      {idTagInputText.map((data,index)=>{
        return <div><a href={idTagInputId[index]}>{data}</a></div>
      })}
    </div>
  );
}

export default Index;