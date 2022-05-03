import styles from "./Main.module.css"
import Contents from "./tsx/route/Contents.tsx"
import ContentsList from "./tsx/route/ContentsList.tsx"
import AboutMe from "./tsx/route/AboutMe.tsx"
import Portfolio from "./tsx/route/Portfolio.tsx"
import Index from "./tsx/Index.tsx"
import Header from "./tsx/Header.tsx"
import { useEffect, useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { marked } from 'marked';

function Main() {
  const data = `# Rutrum convallis vehicula facilisis malesuada

  Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor sem dictum arcu aliquet malesuada purus iaculis, hendrerit cubilia fringilla dis placerat scelerisque sollicitudin molestie volutpat nostra augue sodales mollis dignissim. Semper volutpat mollis lacinia dis cubilia mus venenatis justo tempus, blandit habitant ut sapien urna senectus cursus. Natoque pharetra est morbi porttitor porta faucibus dapibus torquent consequat, non sollicitudin ut platea habitant blandit hendrerit sociis ante volutpat, odio nisl semper augue curae rutrum accumsan lectus. Sodales dictum scelerisque imperdiet ad aenean in cras penatibus sollicitudin suscipit nisl, eros sociosqu euismod varius mattis nibh ut gravida rhoncus at, aliquet facilisis taciti vestibulum lobortis augue habitasse hendrerit justo cubilia. Congue commodo dapibus fringilla nisi eleifend pretium magna varius, ante enim conubia nullam hac pharetra litora purus, justo facilisi vel quisque at velit ad. Bibendum vestibulum volutpat ac non enim facilisi pellentesque porttitor nullam mauris scelerisque nascetur, ad ante faucibus aenean ultricies parturient velit eu neque dui cursus. Duis malesuada leo tempus augue ante euismod ultrices est tincidunt, nam phasellus class in sociosqu maecenas elementum proin metus auctor, congue nec sapien potenti enim placerat cursus sagittis. Volutpat cras interdum vestibulum justo dis cubilia pretium dignissim cum, praesent quisque turpis in pharetra nam mi id. Tristique vivamus rutrum ante himenaeos vulputate risus, morbi nec mi purus cursus tincidunt interdum, placerat scelerisque leo auctor suscipit. Tempor sed auctor nibh tempus egestas etiam eros suspendisse est, quam scelerisque volutpat ac taciti tincidunt mauris praesent posuere, lacus porta molestie congue lectus nisl malesuada sociosqu. 
  
  > Tortor risus class augue malesuada platea eleifend phasellus nostra hac dictum conubia ut, vel parturient imperdiet lacus blandit velit potenti curabitur fames accumsan facilisi, natoque convallis lacinia habitasse aptent tellus porta mus fringilla interdum elementum. Lacus duis est at scelerisque erat mattis quam egestas eget, vivamus eros cursus nec elementum habitant semper libero donec, class proin pellentesque praesent consequat metus nullam vitae. Ornare cursus faucibus class blandit sollicitudin orci enim ullamcorper, libero magnis dignissim volutpat donec scelerisque nisl metus ante, fermentum vulputate mauris nascetur duis parturient facilisis. Elementum tellus aptent maecenas porta curabitur, interdum tempus hendrerit facilisi gravida praesent, tempor vulputate tristique malesuada. Vitae scelerisque pellentesque laoreet interdum libero vestibulum, congue accumsan elementum tempus facilisi cubilia convallis, penatibus morbi dictum neque nibh. Massa dignissim ad quam aliquam sagittis cum vehicula, gravida congue pellentesque per semper sem. Netus eget nulla quisque senectus inceptos massa sapien fermentum tellus vestibulum, curae risus eu torquent taciti cursus etiam mollis. Egestas facilisis euismod enim odio ornare libero cum auctor dapibus, diam imperdiet porta conubia pulvinar magna senectus viverra eu, donec purus tristique gravida fames inceptos elementum facilisi. Dui sodales porttitor facilisis posuere hac sapien taciti gravida velit ridiculus, et primis nisi condimentum praesent euismod accumsan dapibus iaculis venenatis, nostra neque non erat facilisi tortor eget tempor curabitur. Eros ornare nascetur sociosqu class congue taciti facilisi fermentum aptent curabitur, suscipit malesuada vulputate nisl mus et potenti per augue felis, iaculis vehicula dignissim nisi senectus tellus metus mauris turpis. 
  
  ## Lectus turpis id nec etiam mont
  
  - Felis mauris ullamcorper himenaeos magnis, enim aptent sociis.
  
  - Commodo mollis facilisi habitant diam proin, cursus natoque integer.
  
  - Torquent volutpat cum euismod at convallis, aliquam condimentum magna.
  
  - Eleifend diam sed porttitor senectus, elementum ut neque.
  
  Eget odio laoreet praesent ultrices rhoncus elementum platea nisi bibendum sociis tellus curabitur, nascetur non ullamcorper pellentesque placerat maecenas luctus natoque phasellus dis suspendisse. Scelerisque hac mus rhoncus ridiculus orci conubia vitae montes fusce, suspendisse ligula semper laoreet proin et integer. Egestas euismod phasellus id ultricies quis diam cubilia, tristique quisque torquent urna habitasse habitant elementum blandit, per curae massa ad facilisi magnis. Rhoncus duis penatibus justo cras lacus nec maecenas, class gravida auctor sem magnis sociis neque facilisis, molestie quis praesent proin a taciti. Nascetur class suscipit auctor tincidunt sem eu accumsan cubilia ridiculus consequat, nostra mi eget mauris nec risus pulvinar scelerisque. Fusce pellentesque convallis primis a imperdiet ultricies malesuada dui iaculis, facilisis suspendisse praesent netus cursus ac senectus nisi porta tellus, ante blandit potenti diam rutrum sem et nulla. Maecenas nibh commodo tellus malesuada posuere convallis accumsan viverra mus fusce hac cum metus lacinia dictumst phasellus, sem enim mauris cras scelerisque nisi egestas venenatis porta vehicula vulputate primis integer nec semper. Semper urna nisi est facilisis orci ultricies at varius torquent, suspendisse in aptent penatibus metus sociis habitant morbi porta dapibus, venenatis bibendum ornare feugiat accumsan id ante cras. Class velit erat cursus sem fusce odio, montes felis conubia sodales quisque nunc euismod, luctus dignissim suspendisse lectus lobortis. 
  
  Varius vivamus ut mollis pharetra gravida aliquam sem purus ridiculus ornare, tristique parturient blandit taciti diam nascetur risus imperdiet enim accumsan, morbi sollicitudin lectus erat montes nunc justo tortor phasellus. Venenatis viverra inceptos pretium hac cursus erat, porta vulputate aliquet blandit maecenas, natoque curabitur fames aenean nisl. Molestie massa ridiculus maecenas cras vivamus sollicitudin sociis, cursus cum lobortis sociosqu tempor semper litora, class leo penatibus quis hendrerit non. Habitant ante eros ridiculus erat diam suspendisse odio nibh, nullam class volutpat fringilla quisque pulvinar ornare porttitor nascetur, cursus nec euismod sagittis fusce parturient placerat. Habitant risus aliquet cubilia euismod hac platea senectus tincidunt libero, penatibus augue ultricies facilisi mattis vivamus potenti convallis magna pulvinar, bibendum sociis eu suspendisse fames sodales eros accumsan. Dui suscipit tellus accumsan praesent cum elementum auctor, dis pharetra nibh lectus sapien fringilla, vulputate metus libero platea taciti diam. Vel tristique habitant mus in fames conubia augue fringilla, imperdiet integer cras molestie parturient dictum senectus ullamcorper, vehicula est nullam eleifend morbi viverra luctus. Fusce dis dignissim dictumst velit accumsan sem quam potenti ac, porta scelerisque commodo quisque magna suspendisse lacus cras sagittis, vulputate tempus sociosqu bibendum ultrices nam orci morbi. Sagittis ultrices rutrum porttitor viverra blandit aliquam aptent quisque luctus, conubia vivamus hac morbi posuere aenean cras facilisis. Leo bibendum vitae mattis maecenas parturient nam torquent eleifend sociis suspendisse, nisl ante aptent tortor semper pretium volutpat morbi posuere, etiam himenaeos porta accumsan rutrum quisque a facilisis libero. 
  `;
  const [postData,setPostData] = useState({});
  const markedData = marked.parse(data);
  const findIdTagElementList = markedData.match(/<.*id.*>.*>/g)
  const idTagInputText:Array<string> = [];
  const idTagInputId:Array<string> = [];

  findIdTagElementList.map((data)=>{
    idTagInputText.push(data.match(/>.*</g)[0].slice(1,-1));
    idTagInputId.push('#'+data.match(/id=".*"/g)[0].slice(4,-1));
  })
  
  useEffect(()=>{
    setPostData({});
  },[])
  
  return (
    <div id="main" className={styles.main}>
    <Header className={styles.main_header} postData={postData} />
      <div className={styles.main_body}>
          <Routes>
            <Route path="/contents/:category" element={<ContentsList className={styles.main_body_contentsList} setPostData={setPostData}/>}></Route>
            <Route path="/contents/:category/:id" element={
              <>
                <Contents className={styles.main_body_contents} data={markedData}/>
                <Index className={styles.main_body_index} idTagInputText={idTagInputText} idTagInputId={idTagInputId} />
              </>
            }/>
            <Route path="/" element={
              <>
                <AboutMe className={styles.main_body_aboutme} setPostData={setPostData} data={markedData}/>
              </>
            }/>
            <Route path="/portfolio" element={
              <>
                <Portfolio className={styles.main_body_aboutme} setPostData={setPostData} data={markedData}/>
              </>
            }/>
          </Routes>    
        </div>
      </div>
  );
}

export default Main;