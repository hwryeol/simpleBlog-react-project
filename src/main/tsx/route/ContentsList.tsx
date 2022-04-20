import { ReactNode, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import styles from '../../css/ContentsList.module.css'
import { Link } from 'react-router-dom';

function ContentsList({className,setPostData}) {
    const [ref,inView] = useInView()
    const [item,setItem] = useState([])
    useEffect(()=>{
        setPostData({})
      },[])
    
    const getItems = ()=>{
        for(let i=0;i<10;i++){
            setItem(prev=> [...prev,{
                id:i,
                title:"2022년 4월 18일 공부 일지",
                description:"리엑트 및 css를 배웠다.",
                tags:[
                    "react",
                    "js",
                    "html",
                    "css"
                ],
                createAt:"2022-04-18"
            }])
        }
    }
    useEffect(()=>{
        if(inView){
            getItems();
        }
    },[inView])
  return (
    <div className={className+' '+styles.contentsList}>
        <div className={styles.container}>
        {item.map((post):ReactNode=>{
            return (<Link to={`/contents/${post.id}`} onClick={()=>{
                setPostData(post);
            }}><div className={styles.post}>
                <div className={styles.post_title}>{post.title}</div>
                <div className={styles.post_description}>{post.description}</div>
                <div className={styles.post_tags}>{post.tags.map((data)=>{
                    return <div className={styles.post_tags_tag}>{"#"+data}</div>
                })}</div>
                <div className={styles.post_createAt}>{post.createAt}</div>
            </div></Link>)
        })} 
        <div ref={ref}></div>   
        </div>
    </div>   
  );
  }
  
  export default ContentsList;