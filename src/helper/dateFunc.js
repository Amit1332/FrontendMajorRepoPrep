const options = {
    month: 'long',
    day: 'numeric',
  };
  const dataFunc = (datee)=>{
      const date = new Date(datee);
      const formattedDate  = date.toLocaleString('en-US', options);
      return formattedDate

  }


  export default dataFunc