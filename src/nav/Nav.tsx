import nav_bgImage from "./img/nav_bgImage.jpg"
import styles from "./Nav.module.css"
import { AiFillMail, AiFillGithub,  } from "react-icons/ai";
import { BsFillRssFill } from "react-icons/bs";

function Nav() {
    interface Category{
        name : string;
        subCategory?: Array<{
            name:string,
            href:string
            }>
        }

    const category1:Category = {
        name:"대분류1",
        subCategory:[
            {
                name:"목록1",
                href:"주소"
            },
            {
                name:"목록2",
                href:"주소"
            },
            {
                name:"목록3",
                href:"주소"
            },
            {
                name:"목록4",
                href:"주소"
            },
            {
                name:"목록5",
                href:"주소"
            }
    ]}

    const category2:Category = {
        name:"대분류2",
        subCategory:[
            {
                name:"목록1",
                href:"주소"
            },
            {
                name:"목록2",
                href:"주소"
            },
            {
                name:"목록3",
                href:"주소"
            },
            {
                name:"목록4",
                href:"주소"
            },
            {
                name:"목록5",
                href:"주소"
            }
    ]
        
    }

    
    const categoryList:Category[] = [category1,category2];

    return (
        <div id="nav" className={styles.nav}>
            <img className={styles.nav_bgImage} src={nav_bgImage}/>
            <div className={styles.nav_profile}>
                <div className={styles.nav_profile_aboutMe}>fafa</div>
            </div>
            <div className={styles.nav_index}>
                {categoryList.map((data)=>{
                    return (
                        <>
                    <div>{data.name}</div>
                    {data.subCategory.map(data=>{
                        return <div>{data.name}</div>
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
