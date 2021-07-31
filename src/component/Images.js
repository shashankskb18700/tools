
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './images.css'
import Pi from './Pi';

const Image = () => {
  const [imag, setImag] = useState("hello");
  const [link, setLink] = useState([]);
  const [store, setStore] = useState([]);
  

  useEffect(() => {
    const res = async () => {
      const data = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          prop: "images",
          titles: imag,
          format: "json",
          origin: "*",
        },
      });
      if (data) {
        let pages = data.data.query.pages ?data.data.query.pages:[];
      
      
      Object.keys(pages).map((key, index) => {
        imUrl(pages[key].images);
      });;

        Object.keys(pages).map((key, index) => {
          imUrl(pages[key].images);
        });
      }
      
       
      // link.map((i) => {
      //   imUrl(i.title);
      // });
    };
    const TimeStamp = setTimeout(() => {
      if (imag) {
        res();
      }
      
    } ,1500)
    
    return () => {
      clearTimeout(TimeStamp);
    }
    
  }, [imag]);




  const imUrl = async (i) => {
    i.map(async(ic) => {
      const newData = await axios.get("http://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        titles: ic.title,
        format: "json",
        prop: "imageinfo",
        iiprop: "url",
        origin: "*",
      },
      });
      if (newData) {
        const pa = newData.data.query.pages;
        Object.keys(pa).map((key, value) => {
          setLink(pa[key].imageinfo[0])
        })
        // setLink(newData.data.query.pages);
      }
      
      console.log(newData.data.query.pages);
    })
    
    
    // let pa = newData.data.query.pages;
    // console.log(pa);
    
    // setStore(pa);
    // Object.keys(pa).map((key, index) => {
      
    //   console.log(pa[key].imageinfo[0].url);


      // return (
      //   <div>{pa[key].imageinfo[0].url}</div>
        
      // );       
    }
  

 

  // Object.keys(link).map(key, value){
  //   imUrl(images.title)
  // }
  
//   const renderedItem = link.map((i) => {
//     console.log(i.imageinfo)
//     return (
//       <div>he</div>
//     )
  
// });
  


  // console.log(picLink)
  const Pic = (i) => {
    
    console.log("yew pic wala hai " + i);
    return (
      <div>
        <img
        src={i} />
      </div>
      
    
    )
  }
 
//  const renderIt = link.map((i)=>{
//   console.log(i);
  
  
//    return (
//      <div>
//        <Pi i={i.url} />
//        <img key={i.url}   alt={i.descriptionurl}  src={i.url} />
//      </div>
//    );
//  });

  //https://upload.wikimedia.org/wikipedia/commons/f/fb/Solidus_Justin_I_%28obverse%29.jpg
  console.log(link.url);
  return (
    <div>
      
      <input value={imag} onChange={(e) => setImag(e.target.value)} />
      <img src={link.url} />

      
      {/* <div>{renderIt}</div> */}
    </div>
  );
}
export default Image;
