import axios from "axios";

const searchImages = async ( term ) => {

    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization:"Client-ID S4Om8i6bmUS70LVWoTBY8plyvgw2MX_LbH4PyLxfsX8"
        },
        params:{
            query: term
        }
    })

    return response.data.results
}

export default searchImages;