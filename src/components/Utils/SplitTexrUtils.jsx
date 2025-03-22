const splitStringUsingRegex = (inputString) => {

    
    const characters = [];
    const regex = /[\s\S]/gu;
  
    let match;
    while ((match = regex.exec(inputString)) !== null) {
      characters.push(<span key={match.index}>{match[0]}</span>);
    }
  
    return characters;
  };
  
  export default splitStringUsingRegex;
  