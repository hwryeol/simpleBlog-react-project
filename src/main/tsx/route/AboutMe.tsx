import { useEffect } from 'react';
import styles from '../../css/AboutMe.module.css'

function AboutMe({className,data,setPostData}) {
  function createMarkup() { return {__html: data}; }
  function MyComponent() { return <div dangerouslySetInnerHTML={createMarkup()} />; }
  useEffect(()=>{
    setPostData({
      title:"AboutMe",
    });
  },[])
  return (
    <div className={className+' '+styles.aboutMe}>
      <MyComponent />
    </div>
  );
  }
  
  export default AboutMe;