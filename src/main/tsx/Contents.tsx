import { marked } from 'marked';
import fs from "fs";

function Contents() {
  fs.readFile();
    const data = "";
    const markedData = marked.parse(data);

    function createMarkup() { return {__html: markedData}; }
    function MyComponent() { return <div dangerouslySetInnerHTML={createMarkup()} />; }
    return (
      <MyComponent />
    );
  }
  
  export default Contents;