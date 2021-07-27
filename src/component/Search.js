import axios from 'axios';
import React ,{useState ,useEffect} from 'react';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,

          
        },
      });
      console.log(data);
      setResults(data.query.search);
    }
    if (results.length===0) {
      search()
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    // const timeoutId= setTimeout(() => {
    //    if (term) {
    //      search();
    //    }
    // }, 500)
    
    // return () => {
    //   clearTimeout(timeoutId);
    // };
  }, [term]);

  const renderedResults = results.map((result) => {
    // console.log(result)
    return (<div key={result.pageid} className="item">
      <div className="right floated content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          target='_blank'
        >
         Go
        </a>
      </div>
      <div className="content">
        <div className="header">
          {result.title}
        </div>
         <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
          {/* {result.snippet} */}
      </div>

    </div>)
  })
  console.log(renderedResults);
  return (
    
    <div>
      
      <div className="ui form">

        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={e=>setTerm(e.target.value)}
            className="input" 
            
            />
        </div>
      </div>
      
      <div className="ui celled list">{renderedResults}</div>
    </div>
  )
}
export default Search;
