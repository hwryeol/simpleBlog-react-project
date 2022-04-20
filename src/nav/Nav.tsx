import nav_bgImage from "./img/nav_bgImage.jpg"
import styles from "./Nav.module.css"
import { AiFillMail, AiFillGithub,  } from "react-icons/ai";
import { BsFillRssFill } from "react-icons/bs";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Nav() {

    interface category{
        name:string,
        href:string
    }


    const category1:category = {
        name:"CONTENTS",
        href:"contents",
    }
    const category2:category = {
        name:"ABOUT_ME",
        href:"aboutme",
    }
    const category3:category = {
        name:"PROTFOLIO",
        href:"portfolio",
    }


    const categoryList:(category|null)[] = [category1,category2,category3]
    return (
        <div id="nav" className={styles.nav}>
            <img className={styles.nav_bgImage} src={nav_bgImage}/>
            <Link to="/">
                <div className={styles.nav_profile}>
                    <div className={styles.nav_profile_aboutMe}>fafa</div>
                </div>
            </Link>
            <div className={styles.nav_index}>
                {
                    categoryList.map((data):ReactNode=>{
                        return (
                            <Link to={`/${data.href}`}>{data.name}</Link>
                        )
                    })
                }
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
