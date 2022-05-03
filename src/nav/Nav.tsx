import nav_bgImage from "./img/nav_bgImage.jpg"
import styles from "./Nav.module.css"
import { AiFillMail, AiFillGithub,  } from "react-icons/ai";
import { BsFillRssFill } from "react-icons/bs";
import { ReactNode } from "react";
import {
    Link,
    useParams
} from "react-router-dom";

function Nav() {

    interface category{
        name:string,
        href:string,
        subCategory?:object[]
    }


    const category1:category = {
        name:"CONTENTS",
        href:"contents",
        subCategory:[
            {
                name:"REACT",
                href:"react"
            },
            {
                name:"HTML",
                href:"html"
            },
            {
                name:"CSS",
                href:"css"
            },
            {
                name:"JAVASCRIPT",
                href:"javascript"
            }
        ]
    }
    const category2:category = {
        name:"ABOUT_ME",
        href:"",
    }
    const category3:category = {
        name:"PROTFOLIO",
        href:"portfolio",
    }


    const categoryList:(category|null)[] = [category1,category2,category3]
    {
        const {category} = useParams;
        console.log(category)
    }
    return (
        <div id="nav" className={styles.nav}>
            <img className={styles.nav_bgImage} src={nav_bgImage}/>
            <Link className={styles.link} to="/">
                <div className={styles.nav_profile}>
                    <div className={styles.nav_profile_aboutMe}>simpleBlog</div>
                </div>
            </Link>
            <div className={styles.nav_index}>
                {
                    
                    categoryList.map((data):ReactNode=>{
                        return (
                            <>
                                {data.subCategory?<div>{data.name}</div>:<Link to={`/${data.href}`}>{data.name}</Link>}
                                {data.subCategory?.map((subdata)=>{
                                    return <Link to={`/contents/${subdata.href}`} className={styles.nav_index_subcategory}><div style={{transform:"scale(1.1)",display:"inline"}}>{subdata.name}</div></Link>
                                })}
                            </>
                        )
                        })}
            </div>
            <div className={styles.nav_footer}>
                <AiFillGithub/>
                <AiFillMail/>
                <BsFillRssFill/>
            </div>
        </div>
    );
}

export default Nav;
