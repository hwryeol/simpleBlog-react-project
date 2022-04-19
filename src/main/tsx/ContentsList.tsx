import { ReactNode, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import styles from '../css/ContentsList.module.css'

function ContentsList({className}) {
    const [ref,inView] = useInView()
    const [item,setItem] = useState([])
    interface type_post{
        title:string,
        description:string,
        createAt:string,
        tags?:string[]
    }

    const post1:type_post = {
        title:"2022년 4월 18일 공부 일지",
        description:"리엑트 및 css를 배웠다.",
        tags:[
            "react",
            "js",
            "html",
            "css"
        ],
        createAt:"2022-04-18"
    }
    
    
    // const item:(type_post|null)[] = [];
    
    
    const getItems = ()=>{
        for(let i=0;i<10;i++){
            setItem(prev=> [...prev,{
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
            return (<div className={styles.post}>
                <div className={styles.post_title}>{post.title}</div>
                <div className={styles.post_description}>{post.description}</div>
                <div className={styles.post_tags}>{post.tags.map((data)=>{
                    return <div className={styles.post_tags_tag}>{"#"+data}</div>
                })}</div>
                <div className={styles.post_createAt}>{post.createAt}</div>
            </div>)
        })} 
        <div ref={ref}></div>   
        </div>
    </div>
  );
  }
  
  export default ContentsList;