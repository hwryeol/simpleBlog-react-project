import { useEffect } from 'react';
import styles from '../../css/Portfolio.module.css'

function Portfolio({className,data,setPostData}) {
  const portfolioList:[{string,string}] = [
    {
      title:"abcd",
      href:""
    },
    {
      title:"abcd",
      href:""
    },
    {
      title:"abcd",
      href:""
    },
    {
      title:"abcd",
      href:""
    },
    {
      title:"abcd",
      href:""
    }      
];
  
  useEffect(()=>{
    setPostData({
      title:"PortFolio",
    });
  },[])
  return (
    <div className={className+' '+styles.portfolio}>
      {portfolioList.map((item)=>{
        return <div>{item.title}</div>
      })}
    </div>
  );
  }
  
  export default Portfolio;