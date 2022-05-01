const apiRequest = async (url ='', optsObject = null, erMsg= null) => {
        try {
            const response = await fetch( url, optsObject);
            if(!response.ok) throw Error("Please reload the app");


        } catch(err){
            erMsg = err.message 
        } finally {
            return erMsg;
        }
}

export default apiRequest;