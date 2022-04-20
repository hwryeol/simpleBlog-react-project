import styles from '../../css/Contents.module.css'

function Contents({className,data}) {

  function createMarkup() { return {__html: data}; }
  function MyComponent() { return <div dangerouslySetInnerHTML={createMarkup()} />; }
  return (
    <div className={className+' '+styles.contents}>
      <MyComponent />
    </div>
  );
  }
  
  export default Contents;