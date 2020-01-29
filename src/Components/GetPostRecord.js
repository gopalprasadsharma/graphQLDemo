import React ,{useEffect} from 'react';
import useGraphQL from '../hooks/useGraphQL';

const GetPostRecord=()=>{
   const {state:graphQLState,getRecordDetails} =useGraphQL();
   useEffect(()=>{
    getRecordDetails("posts")
   },[])

   useEffect(()=>{
   console.log(graphQLState.record)
},[graphQLState.record]);
const showTitle = graphQLState.record.map(data => {
    return (
        <div key = {data.id}>
        <span>{data.title}</span>
        </div>
    )
})
    return (
        <div>
            <h1>heloooo</h1>
           {showTitle}
        </div>
    )
}

export default GetPostRecord;