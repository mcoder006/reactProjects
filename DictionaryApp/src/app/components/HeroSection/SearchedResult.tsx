
const SearchedResult = ( { data, sword } : { data: any [], sword: String}) => {
     if (!data || data.length === 0) {
    return <div className="mt-4">{sword === "" ? "Start Typing The Word" : "No results found"}</div>;
  }
    console.log(data);
     const { word, phonetics, meanings } = data;
     return (
       <div className="mt-4">
         <div className="flex flex-col w-full gap-3 text-left">
           <h1>
             <span className="font-bold">Word: </span>
             {word}
           </h1>
           <h1>
             <span className="font-bold">Phonetic : </span>{" "}
             {phonetics?.[0]?.text || "N/A"}
           </h1>
           <div>
             {meanings?.map((meaning: any, index: number) => (
               <div key={index} className="flex flex-col gap-3 meaning">
                 <h2>
                   <span className="font-bold">Part of Speech : </span>{" "}
                   {meaning.partOfSpeech}
                 </h2>
                 {meaning.definitions?.map(
                   (definition: any, defIndex: number) => (
                     <div key={defIndex} className="definition">
                       <p>
                         <span className="font-bold">Definition:</span>{" "}
                         {definition.definition}
                       </p>
                       {definition.example && (
                         <p>
                           <span className="font-bold">Example: </span>
                           {definition.example}
                         </p>
                       )}
                       {definition.synonyms &&
                         definition.synonyms.length > 0 && (
                           <p>Synonyms: {definition.synonyms.join(", ")}</p>
                         )}
                       {definition.antonyms &&
                         definition.antonyms.length > 0 && (
                           <p>Antonyms: {definition.antonyms.join(", ")}</p>
                         )}
                     </div>
                   )
                 )}
               </div>
             ))}
           </div>
         </div>
       </div>
     );
};
//   return <>
//     <div className="flex flex-col w-full gap-3 text-left">
//         <h1>Word : { data?.word } </h1>
//         <h1>Phonetic : { data?.phonetic} </h1>
//         <div>
//             {/* {
//                 data?.meanings?.map((meaning: String, index: Number) => {
//                     return <div key={index}> {meaning} </div>
//                 })
//             } */}
//         </div>
//     </div>
//     </div>}</>;

export default SearchedResult