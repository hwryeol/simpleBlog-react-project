import { useEffect } from 'react';
import styles from '../../css/AboutMe.module.css'

function EditPost({className,data,setPostData}) {
  function createMarkup() { return {__html: data}; }
  function MyComponent() { return <div dangerouslySetInnerHTML={createMarkup()} />; }
  useEffect(()=>{
    setPostData({
      title:"EditPost",
    });
  },[])
  return (
    <div className={className+' '+styles.aboutMe}>

    </div>
  );
  }
  
  export default EditPost;